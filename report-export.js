/*
 * report-export.js
 * ----------------------------------------------------------------------------
 * Client-side Microsoft Word report generator for the IBM Internship blog.
 *
 * CONTRACT (do not change without updating callers):
 *
 *   window.InternshipReport = {
 *     overview: function () -> Promise   // executive summary  -> Rohan_IBM_Internship_Overview.docx
 *     detailed: function () -> Promise   // full report        -> Rohan_IBM_Internship_Detailed_Report.docx
 *   }
 *
 *   - Both methods return a Promise that RESOLVES once the .docx (or .doc
 *     fallback) download has been triggered.
 *   - Both methods are safe to call repeatedly.
 *   - Both methods REJECT the promise on a hard failure so the caller can
 *     restore button state.
 *
 * HOW IT WORKS:
 *   - The `docx` UMD library is lazy-loaded from unpkg ONLY on the first
 *     export click (never at page load). The load promise is cached so it
 *     loads once. If `window.docx` already exists, it is reused.
 *   - Content is built ONCE into a renderer-agnostic block model (an array of
 *     section descriptors). Two renderers consume that model:
 *       * renderDocx()  -> a genuine .docx via docx.Document/Packer.toBlob
 *       * renderHtml()  -> Word-openable HTML for the fallback path
 *   - FALLBACK: if the docx <script> fails to load, the same block model is
 *     rendered to Word HTML and downloaded as a .doc via
 *     new Blob([html], { type: 'application/msword' }).
 *
 * Depends on the global `internshipData` (defined by data/internshipData.js,
 * loaded before this file). This file touches no other file and adds nothing
 * to the page besides window.InternshipReport (+ one <script> on first use).
 * ----------------------------------------------------------------------------
 */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------- *
   * Style tokens (match the site's editorial look)
   * ---------------------------------------------------------------------- */
  var ACCENT = '1D4ED8'; // IBM blue  (#1D4ED8) headings / titles / bullet accents
  var INK = '16171B';    // body text (#16171B)
  var MUTED = '71747C';  // captions  (#71747C)
  var HAIRLINE = 'DDDDDD';
  var SERIF = 'Georgia';         // big title + week H1 headings
  var SANS = 'Calibri';          // body

  var DOCX_URL = 'https://unpkg.com/docx@9.0.3/build/index.umd.js';
  var TBU = 'to be updated.';

  /* ---------------------------------------------------------------------- *
   * Curated / synthesized copy (grounded strictly in the dataset)
   * ---------------------------------------------------------------------- */
  var SIGNATURE_HIGHLIGHTS = [
    'Labeled 898 images to train the Boston Dynamics Spot computer-vision model',
    'Trained a YOLO object-detection model reaching ~99.5% mAP50 (~99.4% precision and recall)',
    'Presented the Spot computer-vision system live at IBM DevCon and open-sourced the trained model',
    'Led the NEXUS capstone as Team Lead and submitted it one week ahead of schedule',
    'Completed all Intern10 deliverables five weeks ahead of schedule',
    'Built a custom Oracle EPM Dashboard 2.0 with a tabbed navigation flow',
    'Architected an Oracle EPM AI agent chat platform on ICA (Skills, Projects, MCP, file attachments)',
    'Delivered a dynamic rolling 13-day forecast in Oracle Predictive Cash Forecasting',
    'Stood up a local AI workstation and ran QLoRA fine-tuning on open-source models'
  ];

  var DETAILED_INTRO =
    'This report documents the internship week by week, spanning Oracle EPM implementation ' +
    'on MCW, DRW AMS managed services, Boston Dynamics Spot computer vision, the NEXUS ' +
    'capstone, and late-internship local AI research. Each section captures that week’s ' +
    'focus, key accomplishments, project work, technical work, deliverables, and reflection.';

  // Readable labels for week-level metric keys.
  var METRIC_LABELS = {
    modelMAP50: 'mAP@50 %',
    businessRules: 'Business rules',
    meetingsAttended: 'Meetings',
    learningHours: 'Learning hours',
    modulesCompleted: 'Modules',
    imagesLabeled: 'Images labeled',
    detectionConfidence: 'Detection conf.',
    capstoneSubmitted: 'Capstone',
    intern10: 'Intern10',
    modelPrecision: 'Precision %',
    modelRecall: 'Recall %',
    modelAccuracy: 'Accuracy %',
    badges: 'Badges',
    presentationsGiven: 'Presentations',
    projectsJoined: 'Projects joined'
  };

  /* ---------------------------------------------------------------------- *
   * Small helpers
   * ---------------------------------------------------------------------- */
  function isTBU(s) {
    return typeof s === 'string' && s.trim().toLowerCase() === TBU;
  }

  function cleanList(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.filter(function (x) {
      return typeof x === 'string' && x.trim() !== '' && !isTBU(x);
    });
  }

  function valStr(v) {
    return v === null || v === undefined ? '' : String(v);
  }

  function prettifyKey(k) {
    if (METRIC_LABELS[k]) return METRIC_LABELS[k];
    var words = String(k).replace(/([A-Z])/g, ' $1').replace(/[_-]+/g, ' ').trim();
    if (!words) return String(k);
    return words.charAt(0).toUpperCase() + words.slice(1);
  }

  function prettyMetrics(metrics) {
    if (!metrics || typeof metrics !== 'object') return [];
    return Object.keys(metrics).map(function (k) {
      return { label: prettifyKey(k), value: metrics[k] };
    });
  }

  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* ---------------------------------------------------------------------- *
   * Data access (defensive)
   * ---------------------------------------------------------------------- */
  function getData() {
    if (typeof window !== 'undefined' && window.internshipData) return window.internshipData;
    if (typeof internshipData !== 'undefined') return internshipData; // eslint-disable-line no-undef
    return null;
  }

  function metadata() {
    var d = getData();
    return (d && d.metadata) || {};
  }

  function getPerson() {
    var d = getData();
    if (!d || !Array.isArray(d.people)) return null;
    for (var i = 0; i < d.people.length; i++) {
      if (d.people[i] && d.people[i].id === 'rohan') return d.people[i];
    }
    return null;
  }

  function requirePerson() {
    var p = getPerson();
    if (!p) throw new Error('InternshipReport: internshipData for "rohan" was not found.');
    return p;
  }

  function completedWeeks(person) {
    if (!person || !Array.isArray(person.weeks)) return [];
    return person.weeks.filter(function (w) {
      return w && w.status === 'completed';
    });
  }

  function sumBusinessRules(weeks) {
    return weeks.reduce(function (acc, w) {
      var v = w && w.metrics ? w.metrics.businessRules : null;
      return acc + (typeof v === 'number' ? v : 0);
    }, 0);
  }

  function buildMetricsItems(person, weeks) {
    var tm = person.totalMetrics || {};
    function num(v) { return v === null || v === undefined ? '—' : v; }
    return [
      { label: 'Learning hours', value: num(tm.learningHours) },
      { label: 'Modules completed', value: num(tm.modulesCompleted) },
      { label: 'Badges earned', value: num(tm.badgesEarned) },
      { label: 'Active projects', value: num(tm.projectsActive) },
      { label: 'Weeks documented', value: weeks.length },
      { label: 'Business rules', value: sumBusinessRules(weeks) }
    ];
  }

  function execParagraphs(person, weeks) {
    var tm = person.totalMetrics || {};
    var name = person.name || 'The intern';
    var p1 =
      'Over ' + weeks.length + ' documented weeks, ' + name + ' moved quickly from onboarding ' +
      'into hands-on delivery across several IBM workstreams. Early on he completed ' +
      valStr(tm.learningHours) + ' hours of IBM and Oracle learning across ' +
      valStr(tm.modulesCompleted) + ' modules, earned ' + valStr(tm.badgesEarned) +
      ' badges and certifications, and finished all of his Intern10 networking interviews. ' +
      'He joined the DRW AMS managed-services team and the MCW Oracle EPM implementation team, ' +
      'and began Digital Product Engineering work on Boston Dynamics Spot by labeling 898 images ' +
      'and standing up the computer-vision pipeline that would anchor his technical contribution.';
    var p2 =
      'Across the middle and later weeks he trained a YOLO object-detection model to roughly ' +
      '99.5% mAP50, fully integrated it with Spot with movement controls and safety systems, and ' +
      'presented the system live at IBM DevCon before open-sourcing the trained model. On MCW he ' +
      'authored multiple Oracle EPM business rules — including a rolling 13-day forecast and ' +
      'SOFR loan logic — built a custom Dashboard 2.0 with a tabbed navigation flow, and ' +
      'architected an Oracle EPM AI agent platform connected to ICA. As capstone Team Lead he ' +
      'delivered the NEXUS project a week early and completed all Intern10 tasks five weeks early, ' +
      'then closed the internship by standing up a local AI workstation for QLoRA fine-tuning and ' +
      'RAG research aimed at accelerating Oracle EPM consulting.';
    return [p1, p2];
  }

  /* ---------------------------------------------------------------------- *
   * Renderer-agnostic block model
   *
   * Block shapes:
   *   { type: 'title',      text }
   *   { type: 'subtitle',   text }
   *   { type: 'caption',    text }
   *   { type: 'metrics',    items: [{ label, value }] }
   *   { type: 'h1',         text }        // serif week heading
   *   { type: 'h2',         text }        // section heading
   *   { type: 'subtle',     text }        // italic muted (tags)
   *   { type: 'boldline',   text }        // bold body line (Week N — title)
   *   { type: 'subheading', text }        // bold sub-heading (project name)
   *   { type: 'paragraph',  text }
   *   { type: 'bullets',    items: [ ... ] }
   * ---------------------------------------------------------------------- */
  function titleBlocks(person, weeks) {
    var meta = metadata();
    return [
      { type: 'title', text: meta.title || 'IBM Internship Progress Tracker' },
      { type: 'subtitle', text: (person.name || 'Rohan') + ' · ' + (person.role || '') },
      { type: 'caption', text: 'Documented through Week ' + weeks.length },
      { type: 'metrics', items: buildMetricsItems(person, weeks) }
    ];
  }

  function buildOverview() {
    var person = requirePerson();
    var weeks = completedWeeks(person);
    var blocks = titleBlocks(person, weeks);

    // Executive summary.
    blocks.push({ type: 'h2', text: 'Executive Summary' });
    execParagraphs(person, weeks).forEach(function (p) {
      blocks.push({ type: 'paragraph', text: p });
    });

    // Week by week (concise: one manager summary each).
    blocks.push({ type: 'h2', text: 'Week by Week' });
    weeks.forEach(function (w) {
      blocks.push({ type: 'boldline', text: 'Week ' + w.week + ' — ' + (w.title || '') });
      var summary = w.managerSummary && !isTBU(w.managerSummary) ? w.managerSummary : (w.mainFocus || '');
      if (summary) blocks.push({ type: 'paragraph', text: summary });
    });

    // Signature highlights.
    blocks.push({ type: 'h2', text: 'Signature Highlights' });
    blocks.push({ type: 'bullets', items: SIGNATURE_HIGHLIGHTS.slice() });

    return blocks;
  }

  function buildDetailed() {
    var person = requirePerson();
    var weeks = completedWeeks(person);
    var blocks = titleBlocks(person, weeks);

    blocks.push({ type: 'paragraph', text: DETAILED_INTRO });

    weeks.forEach(function (w) {
      blocks.push({ type: 'h1', text: 'Week ' + w.week + ' — ' + (w.title || '') });

      var tags = cleanList(w.tags);
      if (tags.length) blocks.push({ type: 'subtle', text: tags.join(' · ') });

      if (w.mainFocus && !isTBU(w.mainFocus)) {
        blocks.push({ type: 'h2', text: 'Focus' });
        blocks.push({ type: 'paragraph', text: w.mainFocus });
      }

      var metricItems = prettyMetrics(w.metrics);
      if (metricItems.length) blocks.push({ type: 'metrics', items: metricItems });

      var accs = cleanList(w.accomplishments);
      if (accs.length) {
        blocks.push({ type: 'h2', text: 'Key Accomplishments' });
        blocks.push({ type: 'bullets', items: accs });
      }

      // Project work: handle BOTH the string form (Week 1) and the
      // { name, tasks[] } object form (Weeks 2+), preserving order.
      var pw = Array.isArray(w.projectWork) ? w.projectWork : [];
      if (pw.length) {
        var pwBlocks = [];
        var buf = [];
        var flush = function () {
          if (buf.length) {
            pwBlocks.push({ type: 'bullets', items: buf });
            buf = [];
          }
        };
        pw.forEach(function (p) {
          if (typeof p === 'string') {
            if (p.trim() && !isTBU(p)) buf.push(p);
          } else if (p && typeof p === 'object' && p.name) {
            flush();
            pwBlocks.push({ type: 'subheading', text: p.name });
            var tasks = cleanList(p.tasks);
            if (tasks.length) pwBlocks.push({ type: 'bullets', items: tasks });
          }
        });
        flush();
        if (pwBlocks.length) {
          blocks.push({ type: 'h2', text: 'Project Work' });
          blocks = blocks.concat(pwBlocks);
        }
      }

      var tw = cleanList(w.technicalWork);
      if (tw.length) {
        blocks.push({ type: 'h2', text: 'Technical Work' });
        blocks.push({ type: 'bullets', items: tw });
      }

      var del = cleanList(w.deliverables);
      if (del.length) {
        blocks.push({ type: 'h2', text: 'Deliverables' });
        blocks.push({ type: 'bullets', items: del });
      }

      if (w.reflection && !isTBU(w.reflection)) {
        blocks.push({ type: 'h2', text: 'Reflection' });
        blocks.push({ type: 'paragraph', text: w.reflection });
      }
    });

    return blocks;
  }

  /* ---------------------------------------------------------------------- *
   * Renderer #1 — genuine .docx via the docx library
   * ---------------------------------------------------------------------- */
  function metricsTableDocx(items, docx) {
    var hair = { style: docx.BorderStyle.SINGLE, size: 2, color: HAIRLINE };
    var borders = {
      top: hair, bottom: hair, left: hair, right: hair,
      insideHorizontal: hair, insideVertical: hair
    };

    function cell(children, widthPct) {
      return new docx.TableCell({
        width: { size: widthPct, type: docx.WidthType.PERCENTAGE },
        margins: { top: 70, bottom: 70, left: 130, right: 130 },
        children: children
      });
    }
    function labelCell(label) {
      return cell([new docx.Paragraph({
        children: [new docx.TextRun({
          text: String(label).toUpperCase(), font: SANS, size: 15, bold: true, color: MUTED
        })]
      })], 26);
    }
    function valueCell(value) {
      return cell([new docx.Paragraph({
        children: [new docx.TextRun({
          text: valStr(value), font: SANS, size: 26, bold: true, color: INK
        })]
      })], 24);
    }
    function emptyCell(w) {
      return cell([new docx.Paragraph({ children: [] })], w);
    }

    var rows = [];
    for (var i = 0; i < items.length; i += 2) {
      var a = items[i];
      var b = items[i + 1];
      var cells = [labelCell(a.label), valueCell(a.value)];
      if (b) {
        cells.push(labelCell(b.label));
        cells.push(valueCell(b.value));
      } else {
        cells.push(emptyCell(26));
        cells.push(emptyCell(24));
      }
      rows.push(new docx.TableRow({ children: cells }));
    }

    return new docx.Table({
      width: { size: 100, type: docx.WidthType.PERCENTAGE },
      borders: borders,
      rows: rows
    });
  }

  function renderDocx(blocks, docx) {
    var children = [];

    function push(p) { children.push(p); }

    blocks.forEach(function (b) {
      switch (b.type) {
        case 'title':
          push(new docx.Paragraph({
            spacing: { after: 40 },
            children: [new docx.TextRun({ text: b.text, font: SERIF, size: 52, bold: true, color: ACCENT })]
          }));
          break;
        case 'subtitle':
          push(new docx.Paragraph({
            spacing: { after: 20 },
            children: [new docx.TextRun({ text: b.text, font: SANS, size: 24, color: INK })]
          }));
          break;
        case 'caption':
          push(new docx.Paragraph({
            spacing: { after: 220 },
            children: [new docx.TextRun({ text: b.text, font: SANS, size: 18, color: MUTED })]
          }));
          break;
        case 'metrics':
          push(metricsTableDocx(b.items, docx));
          push(new docx.Paragraph({ spacing: { after: 200 }, children: [] })); // breathing room
          break;
        case 'h1':
          push(new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 300, after: 80 },
            border: { bottom: { style: docx.BorderStyle.SINGLE, size: 4, color: HAIRLINE, space: 6 } },
            children: [new docx.TextRun({ text: b.text, font: SERIF, size: 30, bold: true, color: ACCENT })]
          }));
          break;
        case 'h2':
          push(new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 180, after: 50 },
            children: [new docx.TextRun({ text: b.text, font: SANS, size: 24, bold: true, color: ACCENT })]
          }));
          break;
        case 'subtle':
          push(new docx.Paragraph({
            spacing: { after: 140 },
            children: [new docx.TextRun({ text: b.text, font: SANS, size: 18, italics: true, color: MUTED })]
          }));
          break;
        case 'boldline':
          push(new docx.Paragraph({
            spacing: { before: 140, after: 30 },
            children: [new docx.TextRun({ text: b.text, font: SANS, size: 23, bold: true, color: INK })]
          }));
          break;
        case 'subheading':
          push(new docx.Paragraph({
            spacing: { before: 110, after: 30 },
            children: [new docx.TextRun({ text: b.text, font: SANS, size: 22, bold: true, color: INK })]
          }));
          break;
        case 'paragraph':
          push(new docx.Paragraph({
            spacing: { after: 130, line: 276 },
            children: [new docx.TextRun({ text: b.text, font: SANS, size: 22, color: INK })]
          }));
          break;
        case 'bullets':
          (b.items || []).forEach(function (item) {
            push(new docx.Paragraph({
              spacing: { after: 60, line: 264 },
              indent: { left: 360, hanging: 200 },
              children: [
                new docx.TextRun({ text: '▪  ', font: SANS, size: 20, bold: true, color: ACCENT }),
                new docx.TextRun({ text: item, font: SANS, size: 22, color: INK })
              ]
            }));
          });
          break;
        default:
          break;
      }
    });

    return new docx.Document({
      creator: 'IBM Internship Progress Tracker',
      description: 'Generated internship report',
      styles: { default: { document: { run: { font: SANS, color: INK } } } },
      sections: [{
        properties: { page: { margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
        children: children
      }]
    });
  }

  /* ---------------------------------------------------------------------- *
   * Renderer #2 — Word-openable HTML (fallback -> .doc)
   * ---------------------------------------------------------------------- */
  function metricsTableHtml(items) {
    var out = ['<table style="border-collapse:collapse;width:100%;margin:0 0 18px;">'];
    var labelStyle = 'border:1px solid #' + HAIRLINE + ';padding:6px 10px;color:#' + MUTED +
      ';font-weight:bold;font-size:8.5pt;letter-spacing:.04em;text-transform:uppercase;width:26%;';
    var valueStyle = 'border:1px solid #' + HAIRLINE + ';padding:6px 10px;color:#' + INK +
      ';font-weight:bold;font-size:12.5pt;width:24%;';
    for (var i = 0; i < items.length; i += 2) {
      var a = items[i];
      var b = items[i + 1];
      out.push('<tr>');
      out.push('<td style="' + labelStyle + '">' + esc(String(a.label).toUpperCase()) + '</td>');
      out.push('<td style="' + valueStyle + '">' + esc(valStr(a.value)) + '</td>');
      if (b) {
        out.push('<td style="' + labelStyle + '">' + esc(String(b.label).toUpperCase()) + '</td>');
        out.push('<td style="' + valueStyle + '">' + esc(valStr(b.value)) + '</td>');
      } else {
        out.push('<td style="' + labelStyle + '"></td>');
        out.push('<td style="' + valueStyle + '"></td>');
      }
      out.push('</tr>');
    }
    out.push('</table>');
    return out.join('');
  }

  function bulletsHtml(items) {
    var out = ['<ul style="list-style:none;margin:0 0 12px;padding:0;">'];
    (items || []).forEach(function (item) {
      out.push(
        '<li style="margin:0 0 5px;padding-left:18px;text-indent:-18px;color:#' + INK + ';">' +
        '<span style="color:#' + ACCENT + ';font-weight:bold;">▪</span>&nbsp;' +
        esc(item) + '</li>'
      );
    });
    out.push('</ul>');
    return out.join('');
  }

  function renderHtml(blocks, docTitle) {
    var body = [];
    blocks.forEach(function (b) {
      switch (b.type) {
        case 'title':
          body.push('<div style="font-family:Georgia,serif;font-size:26pt;font-weight:bold;color:#' +
            ACCENT + ';margin:0 0 4px;">' + esc(b.text) + '</div>');
          break;
        case 'subtitle':
          body.push('<div style="font-size:12pt;color:#' + INK + ';margin:0 0 2px;">' + esc(b.text) + '</div>');
          break;
        case 'caption':
          body.push('<div style="font-size:9pt;color:#' + MUTED + ';margin:0 0 18px;">' + esc(b.text) + '</div>');
          break;
        case 'metrics':
          body.push(metricsTableHtml(b.items));
          break;
        case 'h1':
          body.push('<h1 style="font-family:Georgia,serif;font-size:15pt;color:#' + ACCENT +
            ';border-bottom:1px solid #' + HAIRLINE + ';padding-bottom:4px;margin:24px 0 8px;">' +
            esc(b.text) + '</h1>');
          break;
        case 'h2':
          body.push('<h2 style="font-family:Calibri,Arial,sans-serif;font-size:13pt;color:#' + ACCENT +
            ';margin:16px 0 5px;">' + esc(b.text) + '</h2>');
          break;
        case 'subtle':
          body.push('<div style="font-size:9.5pt;font-style:italic;color:#' + MUTED +
            ';margin:0 0 12px;">' + esc(b.text) + '</div>');
          break;
        case 'boldline':
          body.push('<div style="font-weight:bold;color:#' + INK + ';font-size:11.5pt;margin:12px 0 3px;">' +
            esc(b.text) + '</div>');
          break;
        case 'subheading':
          body.push('<div style="font-weight:bold;color:#' + INK + ';margin:10px 0 3px;">' +
            esc(b.text) + '</div>');
          break;
        case 'paragraph':
          body.push('<p style="margin:0 0 11px;">' + esc(b.text) + '</p>');
          break;
        case 'bullets':
          body.push(bulletsHtml(b.items));
          break;
        default:
          break;
      }
    });

    return "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>" + esc(docTitle) + "</title></head>" +
      '<body style="font-family:Calibri,Arial,sans-serif;color:#' + INK +
      ';font-size:11pt;line-height:1.5;">' +
      body.join('') +
      '</body></html>';
  }

  /* ---------------------------------------------------------------------- *
   * Lazy docx loader (cached, loads once)
   * ---------------------------------------------------------------------- */
  var docxLoadPromise = null;

  function loadDocx() {
    if (typeof window !== 'undefined' && window.docx) return Promise.resolve(window.docx);
    if (docxLoadPromise) return docxLoadPromise;

    docxLoadPromise = new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = DOCX_URL;
      script.async = true;
      script.onload = function () {
        if (window.docx) {
          resolve(window.docx);
        } else {
          docxLoadPromise = null; // allow a later retry
          reject(new Error('docx library loaded but window.docx is undefined'));
        }
      };
      script.onerror = function () {
        docxLoadPromise = null; // allow a later retry (and trigger the .doc fallback)
        reject(new Error('Failed to load docx library from ' + DOCX_URL));
      };
      document.head.appendChild(script);
    });

    return docxLoadPromise;
  }

  /* ---------------------------------------------------------------------- *
   * Download helpers
   * ---------------------------------------------------------------------- */
  function triggerDownload(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // Revoke after the click has had a chance to start the download.
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  function downloadDoc(html, filename) {
    var blob = new Blob([html], { type: 'application/msword' });
    triggerDownload(blob, filename);
  }

  /* ---------------------------------------------------------------------- *
   * Orchestration
   * ---------------------------------------------------------------------- */
  var CONFIG = {
    overview: { build: buildOverview, base: 'Rohan_IBM_Internship_Overview', title: 'IBM Internship — Overview' },
    detailed: { build: buildDetailed, base: 'Rohan_IBM_Internship_Detailed_Report', title: 'IBM Internship — Detailed Report' }
  };

  function generate(kind) {
    return new Promise(function (resolve, reject) {
      var cfg = CONFIG[kind];
      if (!cfg) {
        reject(new Error('Unknown report kind: ' + kind));
        return;
      }

      // Build the shared block model up front. A failure here (e.g. missing
      // data) is a hard failure -> reject so the caller can restore state.
      var blocks;
      try {
        blocks = cfg.build();
      } catch (buildErr) {
        reject(buildErr);
        return;
      }

      loadDocx().then(function (docx) {
        // Primary path: genuine .docx.
        var doc = renderDocx(blocks, docx);
        return docx.Packer.toBlob(doc).then(function (blob) {
          triggerDownload(blob, cfg.base + '.docx');
          resolve();
        });
      }).catch(function (err) {
        // If the docx SCRIPT failed to load, fall back to a Word HTML .doc.
        // Any other (post-load) failure is treated as a hard failure.
        var loadFailed = err && /load docx library|window\.docx is undefined/.test(String(err.message || err));
        if (loadFailed) {
          try {
            downloadDoc(renderHtml(blocks, cfg.title), cfg.base + '.doc');
            resolve();
          } catch (fallbackErr) {
            reject(fallbackErr);
          }
        } else {
          reject(err);
        }
      });
    });
  }

  /* ---------------------------------------------------------------------- *
   * Public API
   * ---------------------------------------------------------------------- */
  window.InternshipReport = {
    overview: function () { return generate('overview'); },
    detailed: function () { return generate('detailed'); }
  };
})();
