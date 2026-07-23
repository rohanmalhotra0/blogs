/*
 * report-export.js
 * ----------------------------------------------------------------------------
 * Client-side PDF report generator for the IBM Internship blog.
 *
 * PUBLIC CONTRACT (do not change without updating callers):
 *
 *   window.InternshipReport = {
 *     overview: function () -> Promise   // -> Rohan_IBM_Internship_Overview.pdf
 *     detailed: function () -> Promise   // -> Rohan_IBM_Internship_Detailed_Report.pdf
 *     _doc:     function (kind) -> Promise<jsPDF>   // built doc, for testing
 *   }
 *
 *   - overview()/detailed() return a Promise that RESOLVES once the PDF
 *     download has been triggered, and REJECT on a hard failure so the caller
 *     can restore button state.
 *   - Both are safe to call repeatedly.
 *
 * RENDERING:
 *   - jsPDF UMD is lazy-loaded from unpkg ONLY on the first export
 *     (global window.jspdf.jsPDF). The load promise is cached and reused.
 *   - A genuine multi-page A4 portrait vector PDF is built via a small layout
 *     engine (y-cursor, ensureSpace, wrap, tiles, bars, gauge, arc timeline).
 *   - Download: doc.output('blob') + a temporary <a download> + a Blob URL
 *     revoked ~1.5s later.
 *   - FALLBACK: if the jsPDF <script> fails to LOAD, a styled inline-CSS HTML
 *     version of the same content is opened in a new window and window.print()
 *     is called (the user saves as PDF). Post-load errors are NOT swallowed.
 *
 * NODE:
 *   - `require()`-ing this file does NOT execute any browser code. It exports
 *     a pure { buildDoc, cleanText }. buildDoc(JsPDFCtor, internshipData, kind)
 *     takes the jsPDF CONSTRUCTOR, the data object, and the kind, and returns a
 *     fully built jsPDF doc. The browser wrapper routes through the same
 *     buildDoc so browser and Node render identically.
 *
 * NO EM DASHES OR EN DASHES appear anywhere in the output. Every user-visible
 * string is passed through cleanText(), and no label is constructed with an
 * em/en dash (ranges are written "Weeks 2 to 5", joiners use commas or the
 * middle dot U+00B7).
 * ----------------------------------------------------------------------------
 */
(function () {
  'use strict';

  var root = (typeof window !== 'undefined')
    ? window
    : (typeof globalThis !== 'undefined' ? globalThis : this);

  var JSPDF_URL = 'https://unpkg.com/jspdf@2.5.2/dist/jspdf.umd.min.js';

  /* ---------------------------------------------------------------------- *
   * Editorial palette (RGB) and fonts
   * ---------------------------------------------------------------------- */
  var INK = [22, 23, 27];
  var ACCENT = [29, 78, 216];
  var MUTED = [113, 116, 124];
  var FAINT = [162, 164, 171];
  var HAIRLINE = [231, 231, 226];
  var WASH = [238, 242, 254];
  var PAPER = [255, 255, 255];

  var SERIF = 'times';       // cover title + section/week headings
  var SANS = 'helvetica';    // body + labels

  var PT_TO_MM = 0.352777778;

  /* ---------------------------------------------------------------------- *
   * cleanText: strip every em dash / en dash / minus / horizontal bar.
   * Also normalize smart quotes and the ellipsis so the standard PDF fonts
   * always encode cleanly. The middle dot (U+00B7) is intentionally kept.
   * ---------------------------------------------------------------------- */
  function cleanText(s) {
    if (s === null || s === undefined) return '';
    var str = String(s);
    // em dash, en dash, figure dash, horizontal bar, minus sign -> hyphen
    str = str.replace(/[‒–—―−]/g, '-');
    // smart single quotes / apostrophes -> straight apostrophe
    str = str.replace(/[‘’‚‛]/g, "'");
    // smart double quotes -> straight quote
    str = str.replace(/[“”„‟]/g, '"');
    // ellipsis -> three dots
    str = str.replace(/…/g, '...');
    return str;
  }

  /* ---------------------------------------------------------------------- *
   * Curated / synthesized copy (grounded strictly in the dataset)
   * ---------------------------------------------------------------------- */
  var SIGNATURE_HIGHLIGHTS = [
    'Labeled 898 images to train the Boston Dynamics Spot computer vision model',
    'Trained a YOLO11 object detection model reaching about 99.5% mAP@50 (about 99.4% precision and recall)',
    'Presented the Spot computer vision system live at IBM DevCon and open-sourced the trained model',
    'Led the NEXUS capstone as Team Lead and submitted it one week ahead of schedule',
    'Completed all Intern10 deliverables five weeks ahead of schedule',
    'Built a custom Oracle EPM Dashboard 2.0 with a tabbed navigation flow',
    'Architected an Oracle EPM AI agent chat platform on ICA (Skills, Projects, MCP, file attachments)',
    'Delivered a dynamic rolling 13-day forecast in Oracle Predictive Cash Forecasting',
    'Stood up a local AI workstation and ran QLoRA fine-tuning on open-source models',
    'Built a GL and chart-of-accounts workflow with metadata CSV output, tenant reconciliation, and versioned context merges',
    'Shipped a secure Oracle-aware Chrome browser agent with workbook and VBA context as extension version 0.6.0',
    'Productized EPM Wizard as a hosted multi-user platform and validated it with 751 core tests plus 16 browser end-to-end tests'
  ];

  // Vector "at a glance" datasets (mirror the site's overview numbers).
  var ARC_PHASES = [
    { n: 1, t: 'Onboard and learn', wk: 'Week 1', d: '57 hours across 186 IBM Learn modules, 8 badges, and every Intern10 networking interview.' },
    { n: 2, t: 'Build for clients', wk: 'Weeks 2 to 5', d: 'Oracle EPM business rules, a YOLO11 model for Spot, and the NEXUS RAG platform as team lead.' },
    { n: 3, t: 'Ship and present', wk: 'Week 6', d: 'Custom Dashboard 2.0, Spot demoed live at DevCon, and the Capstone submitted a week early.' },
    { n: 4, t: 'Deepen and automate', wk: 'Weeks 7 to 8', d: 'Perpetual calc-script drivers, rolling forecasts, and local QLoRA fine-tuning for an EPM assistant.' },
    { n: 5, t: 'Productize and validate', wk: 'Week 9', d: 'GL integration, HSP snapshot sync, a secure Chrome agent, hosted infrastructure, and production test coverage.' }
  ];

  var TRACKS = [
    { label: 'Oracle EPM · MCW', weeks: 8, note: '7 business rules · GL integration · Dashboard 2.0' },
    { label: 'DRW Managed Services', weeks: 7, note: 'Executive EPM deck · production support' },
    { label: 'Boston Dynamics Spot', weeks: 5, note: '99.5% mAP@50 · live DevCon demo' },
    { label: 'NEXUS Capstone', weeks: 5, note: 'Team lead · delivered a week early' },
    { label: 'AI / Technical Innovation', weeks: 3, note: 'QLoRA · RAG · parallel role agents' },
    { label: 'EPM Wizard Product', weeks: 1, note: 'GL integration · Chrome agent · hosted platform' },
    { label: 'Intern10 and foundations', weeks: 9, note: 'Onboarding · 186 modules · networking' }
  ];
  var TRACK_MAX = 9;

  // Readable labels for week-level metric keys.
  var METRIC_LABELS = {
    modelMAP50: 'mAP@50 %',
    modelPrecision: 'Precision %',
    modelRecall: 'Recall %',
    modelAccuracy: 'Model accuracy %',
    businessRules: 'Business rules',
    meetingsAttended: 'Meetings',
    learningHours: 'Learning hours',
    modulesCompleted: 'Modules',
    imagesLabeled: 'Images labeled',
    presentationsGiven: 'Presentations',
    detectionConfidence: 'Detection conf.',
    capstoneSubmitted: 'Capstone',
    intern10: 'Intern10',
    projectsJoined: 'Projects joined',
    badges: 'Badges',
    backendTests: 'Backend tests',
    frontendTests: 'Frontend tests',
    extensionTests: 'Extension tests',
    browserE2E: 'Browser E2E',
    extensionVersion: 'Extension',
    agentRoles: 'Agent roles'
  };

  /* ---------------------------------------------------------------------- *
   * Data helpers (pure)
   * ---------------------------------------------------------------------- */
  function isTBU(s) {
    return typeof s === 'string' && s.trim().toLowerCase() === 'to be updated.';
  }

  function cleanArray(arr) {
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

  function getPersonFrom(data) {
    if (!data || !Array.isArray(data.people)) return null;
    for (var i = 0; i < data.people.length; i++) {
      if (data.people[i] && data.people[i].id === 'rohan') return data.people[i];
    }
    return null;
  }

  function completedWeeks(person) {
    if (!person || !Array.isArray(person.weeks)) return [];
    return person.weeks.filter(function (w) { return w && w.status === 'completed'; });
  }

  function sumBusinessRules(weeks) {
    return weeks.reduce(function (acc, w) {
      var v = w && w.metrics ? w.metrics.businessRules : null;
      return acc + (typeof v === 'number' ? v : 0);
    }, 0);
  }

  function overviewTiles(person, weeks) {
    var tm = person.totalMetrics || {};
    return [
      { label: 'Learning hours', value: valStr(tm.learningHours) },
      { label: 'Modules', value: valStr(tm.modulesCompleted) },
      { label: 'Badges', value: valStr(tm.badgesEarned) },
      { label: 'Workstreams', value: valStr(tm.projectsActive) },
      { label: 'Weeks documented', value: valStr(weeks.length) },
      { label: 'Business rules', value: valStr(sumBusinessRules(weeks)) }
    ];
  }

  function execParagraphs(person, weeks) {
    var tm = person.totalMetrics || {};
    var p1 =
      'Over ' + weeks.length + ' documented weeks, Rohan moved quickly from onboarding ' +
      'into hands-on delivery across several IBM workstreams. Early on he completed ' +
      valStr(tm.learningHours) + ' hours of IBM and Oracle learning across ' +
      valStr(tm.modulesCompleted) + ' modules, earned ' + valStr(tm.badgesEarned) +
      ' badges and certifications, and finished all of his Intern10 networking interviews. ' +
      'He joined the DRW AMS managed services team and the MCW Oracle EPM implementation team, ' +
      'and began Digital Product Engineering work on Boston Dynamics Spot by labeling 898 images ' +
      'and standing up the computer vision pipeline that anchored his technical contribution.';
    var p2 =
      'Across the middle and later weeks he trained a YOLO object detection model to roughly ' +
      '99.5% mAP@50, fully integrated it with Spot with movement controls and safety systems, ' +
      'and presented the system live at IBM DevCon before open-sourcing the trained model. On MCW ' +
      'he authored multiple Oracle EPM business rules, including a rolling 13-day forecast and SOFR ' +
      'loan logic, built a custom Dashboard 2.0 with a tabbed navigation flow, and architected an ' +
      'Oracle EPM AI agent platform connected to ICA. As capstone Team Lead he delivered the NEXUS ' +
      'project a week early and completed all Intern10 tasks five weeks early. He then stood up a ' +
      'local AI workstation for QLoRA fine-tuning and RAG research aimed at accelerating Oracle EPM consulting.';
    var p3 =
      'In the final week he productized that research as EPM Wizard: a hosted multi-user Oracle EPM ' +
      'workspace with GL and chart-of-accounts spreadsheet integration, HSP-aligned snapshot sync, ' +
      'form deployment, a secure Chrome browser agent, and redacted workbook and VBA context. He added ' +
      'Google OAuth, PostgreSQL owner isolation, Together AI, a read-only 12-role agent sandbox, and ' +
      'production web and installed-extension test environments. The final validated snapshot passed ' +
      '595 backend tests, 126 frontend tests, 30 extension tests, and 16 browser end-to-end tests.';
    return [p1, p2, p3];
  }

  /* ---------------------------------------------------------------------- *
   * Layout engine
   * ---------------------------------------------------------------------- */
  function lh(sizePt, factor) {
    return sizePt * (factor || 1.15) * PT_TO_MM;
  }

  function makeCtx(doc, kind) {
    var pageW = 210, pageH = 297, marginX = 18;
    return {
      doc: doc,
      kind: kind,
      pageW: pageW,
      pageH: pageH,
      marginX: marginX,
      contentW: pageW - 2 * marginX,       // 174mm
      contentTop: 25,
      contentBottom: 278,
      y: 25,
      headerRight: kind === 'overview' ? 'Executive overview' : 'Detailed report',
      footerLeft: "Rohan's IBM Internship"
    };
  }

  function setFill(ctx, rgb) { ctx.doc.setFillColor(rgb[0], rgb[1], rgb[2]); }
  function setDraw(ctx, rgb) { ctx.doc.setDrawColor(rgb[0], rgb[1], rgb[2]); }
  function setTxt(ctx, rgb) { ctx.doc.setTextColor(rgb[0], rgb[1], rgb[2]); }

  function addContentPage(ctx) {
    ctx.doc.addPage('a4', 'portrait');
    ctx.y = ctx.contentTop;
  }

  function ensureSpace(ctx, h) {
    if (ctx.y + h > ctx.contentBottom) addContentPage(ctx);
  }

  // Orphan control: break first if a heading would not have room to breathe.
  function ensureHeadingSpace(ctx, h) {
    if (ctx.y + (h || 20) > ctx.contentBottom) addContentPage(ctx);
  }

  function drawText(ctx, str, x, y, o) {
    o = o || {};
    var doc = ctx.doc;
    doc.setFont(o.font || SANS, o.style || 'normal');
    doc.setFontSize(o.size || 10);
    setTxt(ctx, o.color || INK);
    var text = cleanText(o.upper ? String(str).toUpperCase() : str);
    var opts = { baseline: o.baseline || 'top' };
    if (o.align) opts.align = o.align;
    if (o.charSpace) opts.charSpace = o.charSpace;
    doc.text(text, x, y, opts);
  }

  function sectionRule(ctx, o) {
    o = o || {};
    var doc = ctx.doc;
    setDraw(ctx, o.color || HAIRLINE);
    doc.setLineWidth(o.weight || 0.2);
    var w = o.width || ctx.contentW;
    doc.line(ctx.marginX, ctx.y, ctx.marginX + w, ctx.y);
    ctx.y += (o.after != null ? o.after : 3);
  }

  function paragraph(ctx, text, o) {
    o = o || {};
    var doc = ctx.doc;
    var size = o.size || 10.5;
    var font = o.font || SANS;
    var style = o.style || 'normal';
    var width = o.width || ctx.contentW;
    var x = o.x || ctx.marginX;
    doc.setFont(font, style);
    doc.setFontSize(size);
    setTxt(ctx, o.color || INK);
    var lines = doc.splitTextToSize(cleanText(text), width);
    var lineH = lh(size, o.lineFactor || 1.4);
    for (var i = 0; i < lines.length; i++) {
      ensureSpace(ctx, lineH);
      doc.text(lines[i], x, ctx.y, { baseline: 'top' });
      ctx.y += lineH;
    }
    ctx.y += (o.after != null ? o.after : 3);
  }

  function headingText(ctx, str, o) {
    o = o || {};
    var doc = ctx.doc;
    var size = o.size || 16;
    doc.setFont(o.font || SERIF, o.style || 'bold');
    doc.setFontSize(size);
    setTxt(ctx, o.color || INK);
    var lines = doc.splitTextToSize(cleanText(str), o.width || ctx.contentW);
    var lineH = lh(size, o.lineFactor || 1.12);
    for (var i = 0; i < lines.length; i++) {
      ensureSpace(ctx, lineH);
      doc.text(lines[i], ctx.marginX, ctx.y, { baseline: 'top' });
      ctx.y += lineH;
    }
    ctx.y += (o.after != null ? o.after : 2);
  }

  function accentTick(ctx, w) {
    setFill(ctx, ACCENT);
    ctx.doc.rect(ctx.marginX, ctx.y + 0.4, w || 18, 1.2, 'F');
    ctx.y += 5.5;
  }

  function eyebrow(ctx, str, color) {
    drawText(ctx, str, ctx.marginX, ctx.y, {
      font: SANS, style: 'bold', size: 8.5, color: color || MUTED, upper: true, charSpace: 0.3
    });
    ctx.y += lh(8.5, 1.55);
  }

  function pageSectionTitle(ctx, str) {
    ensureHeadingSpace(ctx, 32);
    ctx.y += 3;
    headingText(ctx, str, { font: SERIF, style: 'bold', size: 18, lineFactor: 1.05, after: 0 });
    accentTick(ctx, 20);
  }

  function miniHeading(ctx, str) {
    ensureHeadingSpace(ctx, 24);
    ctx.y += 2.5;
    drawText(ctx, str, ctx.marginX, ctx.y, {
      font: SANS, style: 'bold', size: 9.5, color: ACCENT, upper: true, charSpace: 0.25
    });
    ctx.y += lh(9.5, 1.25);
    sectionRule(ctx, { after: 3 });
  }

  function subHeading(ctx, str) {
    ensureHeadingSpace(ctx, 16);
    ctx.y += 1.5;
    drawText(ctx, str, ctx.marginX, ctx.y, { font: SANS, style: 'bold', size: 10.5, color: INK });
    ctx.y += lh(10.5, 1.3);
  }

  function bullets(ctx, items, o) {
    o = o || {};
    var doc = ctx.doc;
    var size = o.size || 10;
    var indent = 6;
    var gap = o.gap != null ? o.gap : 1.8;
    var list = cleanArray(items);
    for (var i = 0; i < list.length; i++) {
      doc.setFont(SANS, 'normal');
      doc.setFontSize(size);
      var lines = doc.splitTextToSize(cleanText(list[i]), ctx.contentW - indent);
      var lineH = lh(size, 1.32);
      ensureSpace(ctx, lines.length * lineH + gap);
      setFill(ctx, ACCENT);
      doc.rect(ctx.marginX + 0.4, ctx.y + 1.3, 1.5, 1.5, 'F');
      setTxt(ctx, INK);
      for (var j = 0; j < lines.length; j++) {
        doc.text(lines[j], ctx.marginX + indent, ctx.y, { baseline: 'top' });
        ctx.y += lineH;
      }
      ctx.y += gap;
    }
    ctx.y += (o.after != null ? o.after : 1.5);
  }

  function fitFontSize(doc, text, maxWidth, startSize, minSize, font, style) {
    doc.setFont(font, style);
    var s = startSize;
    while (s > minSize) {
      doc.setFontSize(s);
      if (doc.getTextWidth(String(text)) <= maxWidth) break;
      s -= 0.5;
    }
    doc.setFontSize(s);
    return s;
  }

  /* --------------------------- metric tiles ----------------------------- */
  function metricTiles(ctx, items, o) {
    o = o || {};
    var doc = ctx.doc;
    var perRow = o.perRow || Math.min(items.length, 6);
    var tileH = o.tileH || 20;
    var numSize = o.numSize || 16;
    var numColor = o.numColor || INK;

    for (var start = 0; start < items.length; start += perRow) {
      var rowItems = items.slice(start, start + perRow);
      var cols = rowItems.length;
      ensureSpace(ctx, tileH + 5);
      var y0 = ctx.y;
      var rowW = ctx.contentW;
      var tileW = rowW / cols;

      // top + bottom hairline rules
      setDraw(ctx, HAIRLINE);
      doc.setLineWidth(0.25);
      doc.line(ctx.marginX, y0, ctx.marginX + rowW, y0);
      doc.line(ctx.marginX, y0 + tileH, ctx.marginX + rowW, y0 + tileH);

      for (var i = 0; i < cols; i++) {
        var cx = ctx.marginX + i * tileW;
        if (i > 0) {
          setDraw(ctx, HAIRLINE);
          doc.setLineWidth(0.2);
          doc.line(cx, y0 + 2.5, cx, y0 + tileH - 2.5);
        }
        var centerX = cx + tileW / 2;
        var num = valStr(rowItems[i].value);
        fitFontSize(doc, num, tileW - 5, numSize, 8, SERIF, 'bold');
        setTxt(ctx, numColor);
        doc.text(cleanText(num), centerX, y0 + tileH * 0.42, { align: 'center', baseline: 'middle' });

        // label (small, muted, uppercase, wrapped to at most 2 lines)
        doc.setFont(SANS, 'bold');
        doc.setFontSize(6.6);
        setTxt(ctx, MUTED);
        var labLines = doc.splitTextToSize(cleanText(String(rowItems[i].label).toUpperCase()), tileW - 3);
        if (labLines.length > 2) labLines = labLines.slice(0, 2);
        var ly = y0 + tileH * 0.66;
        for (var k = 0; k < labLines.length; k++) {
          doc.text(labLines[k], centerX, ly, { align: 'center', baseline: 'top' });
          ly += lh(6.6, 1.25);
        }
      }
      ctx.y = y0 + tileH;
      ctx.y += (o.rowGap != null ? o.rowGap : 3);
    }
    ctx.y += (o.after != null ? o.after : 3);
  }

  /* ------------------------------ gauge --------------------------------- */
  function drawArc(doc, cx, cy, r, startDeg, endDeg, segs) {
    var prev = null;
    for (var i = 0; i <= segs; i++) {
      var a = (startDeg + (endDeg - startDeg) * (i / segs)) * Math.PI / 180;
      var x = cx + r * Math.cos(a);
      var y = cy + r * Math.sin(a);
      if (prev) doc.line(prev.x, prev.y, x, y);
      prev = { x: x, y: y };
    }
  }

  function accuracyGauge(ctx, value, centerLabel, o) {
    o = o || {};
    var doc = ctx.doc;
    var r = o.r || 17;
    var stroke = o.stroke || 3.6;
    var blockH = r * 2 + 6;
    ensureSpace(ctx, blockH + 2);

    var cx = ctx.marginX + r + 3;
    var cy = ctx.y + r + 2;

    doc.setLineCap('round');
    // background ring
    setDraw(ctx, HAIRLINE);
    doc.setLineWidth(stroke);
    doc.circle(cx, cy, r, 'S');
    // accent arc: value% sweep, from top (-90) clockwise
    setDraw(ctx, ACCENT);
    doc.setLineWidth(stroke);
    drawArc(doc, cx, cy, r, -90, -90 + (Math.max(0, Math.min(100, value)) / 100) * 360, 160);
    doc.setLineCap('butt');

    // center label
    var numTxt = (Math.round(value * 10) / 10).toFixed(1);
    doc.setFont(SERIF, 'bold');
    doc.setFontSize(20);
    setTxt(ctx, INK);
    doc.text(cleanText(numTxt), cx, cy - 1.5, { align: 'center', baseline: 'middle' });
    doc.setFont(SANS, 'bold');
    doc.setFontSize(7.5);
    setTxt(ctx, MUTED);
    doc.text(cleanText(centerLabel), cx, cy + 5.5, { align: 'center', baseline: 'middle' });

    // side caption
    var tx = cx + r + 8;
    var tw = ctx.marginX + ctx.contentW - tx;
    if (o.captionTitle) {
      drawText(ctx, o.captionTitle, tx, cy - r + 6, { font: SANS, style: 'bold', size: 10.5, color: INK });
      doc.setFont(SANS, 'normal');
      doc.setFontSize(9);
      setTxt(ctx, MUTED);
      var capLines = doc.splitTextToSize(cleanText(o.captionBody || ''), tw);
      var yy = cy - r + 6 + lh(10.5, 1.5);
      for (var i = 0; i < capLines.length; i++) {
        doc.text(capLines[i], tx, yy, { baseline: 'top' });
        yy += lh(9, 1.35);
      }
    }

    ctx.y = cy + r + 2;
    ctx.y += (o.after != null ? o.after : 4);
  }

  /* ---------------------------- track bars ------------------------------ */
  function trackBars(ctx, tracks, maxVal) {
    var doc = ctx.doc;
    var barX = ctx.marginX;
    var barW = ctx.contentW;
    for (var i = 0; i < tracks.length; i++) {
      var t = tracks[i];
      ensureSpace(ctx, 13);
      var top = ctx.y;
      // label + weeks
      drawText(ctx, t.label, barX, top, { font: SANS, style: 'bold', size: 9, color: INK });
      var wkTxt = t.weeks + (t.weeks === 1 ? ' wk' : ' wks');
      drawText(ctx, wkTxt, barX + barW, top, { font: SANS, style: 'normal', size: 8, color: MUTED, align: 'right' });
      // bar
      var barY = top + 5.4;
      var barH = 2.6;
      setFill(ctx, HAIRLINE);
      doc.roundedRect(barX, barY, barW, barH, 1, 1, 'F');
      var fillW = Math.max((t.weeks / maxVal) * barW, barH);
      setFill(ctx, ACCENT);
      doc.roundedRect(barX, barY, fillW, barH, 1, 1, 'F');
      // note
      drawText(ctx, t.note, barX, barY + barH + 1.6, { font: SANS, style: 'normal', size: 7.5, color: MUTED });
      ctx.y = top + 12.6;
    }
    ctx.y += 2;
  }

  /* --------------------------- arc timeline ----------------------------- */
  function arcTimeline(ctx, phases) {
    var doc = ctx.doc;
    var nodeX = ctx.marginX + 4;
    var nodeR = 4;
    var textX = ctx.marginX + 14;
    var textW = ctx.contentW - 14;
    for (var i = 0; i < phases.length; i++) {
      var p = phases[i];
      doc.setFont(SANS, 'normal');
      doc.setFontSize(9);
      var descLines = doc.splitTextToSize(cleanText(p.d), textW);
      var descH = descLines.length * lh(9, 1.32);
      var rowH = Math.max(descH + 7.5, 17);
      ensureSpace(ctx, rowH + 1);
      var top = ctx.y;
      var nodeCy = top + 3.6;

      // connector to next step
      if (i < phases.length - 1) {
        setDraw(ctx, FAINT);
        doc.setLineWidth(0.4);
        doc.line(nodeX, nodeCy + nodeR + 0.5, nodeX, top + rowH + 0.5);
      }
      // node
      setFill(ctx, ACCENT);
      doc.circle(nodeX, nodeCy, nodeR, 'F');
      doc.setFont(SANS, 'bold');
      doc.setFontSize(9);
      setTxt(ctx, PAPER);
      doc.text(String(p.n), nodeX, nodeCy, { align: 'center', baseline: 'middle' });

      // title + week
      drawText(ctx, p.t, textX, top, { font: SANS, style: 'bold', size: 10.5, color: INK });
      drawText(ctx, p.wk, ctx.marginX + ctx.contentW, top, { font: SANS, style: 'normal', size: 8, color: MUTED, align: 'right' });

      // desc
      setTxt(ctx, MUTED);
      doc.setFont(SANS, 'normal');
      doc.setFontSize(9);
      var yy = top + lh(10.5, 1.55);
      for (var j = 0; j < descLines.length; j++) {
        doc.text(descLines[j], textX, yy, { baseline: 'top' });
        yy += lh(9, 1.32);
      }
      ctx.y = top + rowH;
    }
    ctx.y += 1;
  }

  /* ---------------------------------------------------------------------- *
   * Cover + shared "at a glance" page
   * ---------------------------------------------------------------------- */
  function renderCover(ctx, person, weeks) {
    var doc = ctx.doc;
    var x = ctx.marginX;

    ctx.y = 92;
    drawText(ctx, 'IBM Internship Progress Report', x, ctx.y, {
      font: SANS, style: 'bold', size: 9, color: MUTED, upper: true, charSpace: 0.5
    });
    ctx.y += 10;

    headingText(ctx, "Rohan's IBM Internship", { font: SERIF, style: 'bold', size: 34, lineFactor: 1.08, after: 3 });

    // accent rule
    setFill(ctx, ACCENT);
    doc.rect(x, ctx.y, 44, 1.6, 'F');
    ctx.y += 10;

    drawText(ctx, 'Rohan · IBM Intern | Oracle EPM | Digital Product Engineering', x, ctx.y, {
      font: SANS, style: 'normal', size: 12, color: INK
    });
    ctx.y += 8;
    drawText(ctx, 'Documented through Week ' + weeks.length, x, ctx.y, {
      font: SANS, style: 'normal', size: 10, color: MUTED
    });
    ctx.y += 6;
    drawText(ctx, ctx.kind === 'overview' ? 'Executive overview' : 'Detailed weekly report', x, ctx.y, {
      font: SANS, style: 'bold', size: 9.5, color: ACCENT, upper: true, charSpace: 0.3
    });

    // bottom hairline + footer-like note (cover has no running header/footer)
    setDraw(ctx, HAIRLINE);
    doc.setLineWidth(0.3);
    doc.line(x, 262, x + ctx.contentW, 262);
    drawText(ctx, 'Oracle EPM · EPM Wizard · GL integration · Browser Agent · Local AI', x, 266, {
      font: SANS, style: 'normal', size: 8.5, color: FAINT
    });
  }

  function renderAtAGlance(ctx, person, weeks) {
    pageSectionTitle(ctx, 'At a glance');

    // metric tiles
    metricTiles(ctx, overviewTiles(person, weeks), {
      perRow: 6, tileH: 20, numSize: 16, numColor: ACCENT, after: 5
    });

    // accuracy gauge
    miniHeading(ctx, 'Detection accuracy');
    accuracyGauge(ctx, 99.5, 'mAP@50', {
      r: 17,
      captionTitle: 'YOLO11 object detection',
      captionBody: 'Trained on the Boston Dynamics Spot dog-toy dataset and validated at about 99.5% mAP@50, with roughly 99.4% precision and recall.',
      after: 5
    });

    // track bars
    miniHeading(ctx, 'Weeks active per track');
    trackBars(ctx, TRACKS, TRACK_MAX);
    ctx.y += 2;

    // arc timeline
    miniHeading(ctx, 'The internship arc');
    arcTimeline(ctx, ARC_PHASES);
  }

  /* ---------------------------------------------------------------------- *
   * Overview body
   * ---------------------------------------------------------------------- */
  function renderOverviewBody(ctx, person, weeks) {
    // Executive summary
    pageSectionTitle(ctx, 'Executive summary');
    var paras = execParagraphs(person, weeks);
    for (var i = 0; i < paras.length; i++) {
      paragraph(ctx, paras[i], { size: 10.5, after: 4 });
    }

    // Week by week
    pageSectionTitle(ctx, 'Week by week');
    weeks.forEach(function (w) {
      ensureHeadingSpace(ctx, 30);
      ctx.y += 2;
      eyebrow(ctx, 'Week ' + w.week, ACCENT);
      headingText(ctx, w.title || ('Week ' + w.week), { font: SERIF, style: 'bold', size: 12.5, lineFactor: 1.12, after: 1.5 });
      var summary = (w.managerSummary && !isTBU(w.managerSummary)) ? w.managerSummary : (w.mainFocus || '');
      if (summary) paragraph(ctx, summary, { size: 10, after: 4 });
    });

    // Signature highlights
    pageSectionTitle(ctx, 'Signature highlights');
    bullets(ctx, SIGNATURE_HIGHLIGHTS, { size: 10.5, gap: 2.2 });
  }

  /* ---------------------------------------------------------------------- *
   * Detailed body (each week on its own page)
   * ---------------------------------------------------------------------- */
  function renderWeekDetail(ctx, w) {
    ensureHeadingSpace(ctx, 34);
    eyebrow(ctx, 'Week ' + w.week, ACCENT);
    headingText(ctx, w.title || ('Week ' + w.week), { font: SERIF, style: 'bold', size: 16, lineFactor: 1.12, after: 1 });
    accentTick(ctx, 18);

    var tags = cleanArray(w.tags);
    if (tags.length) {
      paragraph(ctx, tags.join('  ·  '), { size: 8.5, style: 'italic', color: MUTED, after: 3 });
    }

    if (w.mainFocus && !isTBU(w.mainFocus)) {
      miniHeading(ctx, 'Focus');
      paragraph(ctx, w.mainFocus, { size: 10, after: 3 });
    }

    var mItems = prettyMetrics(w.metrics);
    if (mItems.length) {
      metricTiles(ctx, mItems, {
        perRow: Math.min(mItems.length, 5), tileH: 18, numSize: 14, numColor: INK, after: 4
      });
    }

    var accs = cleanArray(w.accomplishments);
    if (accs.length) {
      miniHeading(ctx, 'Key accomplishments');
      bullets(ctx, accs);
    }

    // Project work: handle BOTH the plain-string form (Week 1) and the
    // { name, tasks[] } object form (Weeks 2+), preserving order.
    var pw = Array.isArray(w.projectWork) ? w.projectWork : [];
    var pwHasContent = pw.some(function (p) {
      if (typeof p === 'string') return p.trim() !== '' && !isTBU(p);
      return p && typeof p === 'object' && !!p.name;
    });
    if (pwHasContent) {
      miniHeading(ctx, 'Project work');
      var strBuf = [];
      var flush = function () {
        if (strBuf.length) { bullets(ctx, strBuf, { after: 2 }); strBuf = []; }
      };
      pw.forEach(function (p) {
        if (typeof p === 'string') {
          if (p.trim() !== '' && !isTBU(p)) strBuf.push(p);
        } else if (p && typeof p === 'object' && p.name) {
          flush();
          subHeading(ctx, p.name);
          var tasks = cleanArray(p.tasks);
          if (tasks.length) bullets(ctx, tasks, { after: 2 });
        }
      });
      flush();
      ctx.y += 1;
    }

    var tw = cleanArray(w.technicalWork);
    if (tw.length) {
      miniHeading(ctx, 'Technical work');
      bullets(ctx, tw);
    }

    var del = cleanArray(w.deliverables);
    if (del.length) {
      miniHeading(ctx, 'Deliverables');
      bullets(ctx, del);
    }

    if (w.reflection && !isTBU(w.reflection)) {
      miniHeading(ctx, 'Reflection');
      paragraph(ctx, w.reflection, { size: 10, after: 2 });
    }
  }

  /* ---------------------------------------------------------------------- *
   * Running header / footer (pages 2..N, never the cover)
   * ---------------------------------------------------------------------- */
  function decoratePages(ctx) {
    var doc = ctx.doc;
    var total = doc.getNumberOfPages();
    for (var p = 2; p <= total; p++) {
      doc.setPage(p);
      // header
      doc.setFont(SANS, 'normal');
      doc.setFontSize(8);
      setTxt(ctx, MUTED);
      doc.text(cleanText('Rohan · IBM Internship'), ctx.marginX, 11, { baseline: 'top' });
      doc.text(cleanText(ctx.headerRight), ctx.marginX + ctx.contentW, 11, { align: 'right', baseline: 'top' });
      setDraw(ctx, HAIRLINE);
      doc.setLineWidth(0.2);
      doc.line(ctx.marginX, 16, ctx.marginX + ctx.contentW, 16);

      // footer
      setDraw(ctx, HAIRLINE);
      doc.setLineWidth(0.2);
      doc.line(ctx.marginX, 283, ctx.marginX + ctx.contentW, 283);
      doc.setFont(SANS, 'normal');
      doc.setFontSize(8);
      setTxt(ctx, MUTED);
      doc.text(cleanText(ctx.footerLeft), ctx.marginX, 285.5, { baseline: 'top' });
      doc.text(cleanText('Page ' + p + ' of ' + total), ctx.marginX + ctx.contentW, 285.5, { align: 'right', baseline: 'top' });
    }
  }

  /* ---------------------------------------------------------------------- *
   * buildDoc: pure, shared by browser and Node
   * ---------------------------------------------------------------------- */
  function buildDoc(JsPDFCtor, data, kind) {
    if (typeof JsPDFCtor !== 'function') {
      throw new Error('buildDoc: a jsPDF constructor is required.');
    }
    var k = (kind === 'detailed') ? 'detailed' : 'overview';
    var person = getPersonFrom(data);
    if (!person) throw new Error('InternshipReport: internshipData for "rohan" was not found.');
    var weeks = completedWeeks(person);

    var doc = new JsPDFCtor({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
    var ctx = makeCtx(doc, k);

    // Page 1: cover
    renderCover(ctx, person, weeks);

    // Page 2: at a glance (may flow onto a following page)
    addContentPage(ctx);
    renderAtAGlance(ctx, person, weeks);

    if (k === 'overview') {
      renderOverviewBody(ctx, person, weeks);
    } else {
      weeks.forEach(function (w) {
        addContentPage(ctx);
        renderWeekDetail(ctx, w);
      });
    }

    decoratePages(ctx);

    try {
      doc.setProperties({
        title: k === 'overview' ? "Rohan's IBM Internship - Overview" : "Rohan's IBM Internship - Detailed Report",
        subject: 'IBM Internship Progress Report',
        author: 'Rohan',
        creator: 'IBM Internship Progress Tracker'
      });
    } catch (e) { /* non-fatal */ }

    return doc;
  }

  /* ====================================================================== *
   * Browser-only orchestration (guarded: no document access at load time)
   * ====================================================================== */
  var CONFIG = {
    overview: { file: 'Rohan_IBM_Internship_Overview.pdf', title: 'Rohan IBM Internship - Overview' },
    detailed: { file: 'Rohan_IBM_Internship_Detailed_Report.pdf', title: 'Rohan IBM Internship - Detailed Report' }
  };

  function getData() {
    // The data file declares a top-level `const internshipData`, which is not
    // a window property; reference it directly (typeof guard is ReferenceError-safe).
    if (typeof internshipData !== 'undefined' && internshipData) return internshipData; // eslint-disable-line no-undef
    if (root && root.internshipData) return root.internshipData;
    return null;
  }

  var jspdfLoadPromise = null;

  function loadJsPDF() {
    if (root && root.jspdf && root.jspdf.jsPDF) return Promise.resolve(root.jspdf.jsPDF);
    if (jspdfLoadPromise) return jspdfLoadPromise;

    jspdfLoadPromise = new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = JSPDF_URL;
      script.async = true;
      script.onload = function () {
        if (root.jspdf && root.jspdf.jsPDF) {
          resolve(root.jspdf.jsPDF);
        } else {
          jspdfLoadPromise = null;
          reject(new Error('jsPDF loaded but window.jspdf.jsPDF is undefined'));
        }
      };
      script.onerror = function () {
        jspdfLoadPromise = null; // allow a later retry and trigger the print fallback
        var err = new Error('Failed to load jsPDF from ' + JSPDF_URL);
        err.code = 'JSPDF_LOAD_FAILED';
        reject(err);
      };
      document.head.appendChild(script);
    });

    return jspdfLoadPromise;
  }

  function triggerDownload(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  /* ---------------------------- HTML fallback --------------------------- */
  function esc(s) {
    return cleanText(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function toHex(rgb) {
    function h(n) { var s = n.toString(16); return s.length === 1 ? '0' + s : s; }
    return '#' + h(rgb[0]) + h(rgb[1]) + h(rgb[2]);
  }

  function bulletsHtml(items) {
    var list = cleanArray(items);
    if (!list.length) return '';
    var out = ['<ul style="list-style:none;margin:0 0 12px;padding:0;">'];
    list.forEach(function (it) {
      out.push('<li style="margin:0 0 5px;padding-left:16px;text-indent:-16px;color:' + toHex(INK) + ';">' +
        '<span style="color:' + toHex(ACCENT) + ';font-weight:bold;">&#9642;</span>&nbsp;' + esc(it) + '</li>');
    });
    out.push('</ul>');
    return out.join('');
  }

  function tilesHtml(items) {
    var cells = items.map(function (it) {
      return '<div style="flex:1 1 0;min-width:80px;border-left:1px solid ' + toHex(HAIRLINE) +
        ';padding:4px 10px;">' +
        '<div style="font-family:Georgia,serif;font-weight:bold;font-size:18pt;color:' + toHex(ACCENT) + ';">' +
        esc(valStr(it.value)) + '</div>' +
        '<div style="font-size:7.5pt;letter-spacing:.04em;text-transform:uppercase;color:' + toHex(MUTED) +
        ';margin-top:2px;">' + esc(it.label) + '</div></div>';
    }).join('');
    return '<div style="display:flex;border-top:1px solid ' + toHex(HAIRLINE) + ';border-bottom:1px solid ' +
      toHex(HAIRLINE) + ';margin:0 0 16px;">' + cells + '</div>';
  }

  function tracksHtml(tracks, maxVal) {
    var rows = tracks.map(function (t) {
      var pct = Math.max((t.weeks / maxVal) * 100, 3);
      return '<div style="margin:0 0 9px;">' +
        '<div style="display:flex;justify-content:space-between;font-size:9pt;">' +
        '<b style="color:' + toHex(INK) + ';">' + esc(t.label) + '</b>' +
        '<span style="color:' + toHex(MUTED) + ';">' + t.weeks + (t.weeks === 1 ? ' wk' : ' wks') + '</span></div>' +
        '<div style="height:5px;background:' + toHex(HAIRLINE) + ';border-radius:3px;margin:3px 0;">' +
        '<div style="height:5px;width:' + pct + '%;background:' + toHex(ACCENT) + ';border-radius:3px;"></div></div>' +
        '<div style="font-size:7.5pt;color:' + toHex(MUTED) + ';">' + esc(t.note) + '</div></div>';
    }).join('');
    return rows;
  }

  function arcHtml(phases) {
    return '<ol style="list-style:none;margin:0;padding:0;">' + phases.map(function (p) {
      return '<li style="margin:0 0 10px;padding-left:26px;position:relative;">' +
        '<span style="position:absolute;left:0;top:0;display:inline-block;width:18px;height:18px;line-height:18px;' +
        'text-align:center;border-radius:50%;background:' + toHex(ACCENT) + ';color:#fff;font-size:8pt;font-weight:bold;">' +
        p.n + '</span>' +
        '<div style="display:flex;justify-content:space-between;"><b style="color:' + toHex(INK) + ';">' + esc(p.t) +
        '</b><span style="color:' + toHex(MUTED) + ';font-size:8pt;">' + esc(p.wk) + '</span></div>' +
        '<div style="font-size:9pt;color:' + toHex(MUTED) + ';">' + esc(p.d) + '</div></li>';
    }).join('') + '</ol>';
  }

  function atAGlanceHtml(person, weeks) {
    var h = [];
    h.push('<h2 style="font-family:Georgia,serif;color:' + toHex(INK) + ';font-size:16pt;margin:20px 0 8px;">At a glance</h2>');
    h.push(tilesHtml(overviewTiles(person, weeks)));
    h.push('<div style="font-weight:bold;text-transform:uppercase;font-size:9.5pt;color:' + toHex(ACCENT) +
      ';margin:8px 0 4px;">Detection accuracy</div>');
    h.push('<p style="margin:0 0 12px;">YOLO11 object detection, validated at about 99.5% mAP@50 on the Boston Dynamics Spot dog-toy dataset (about 99.4% precision and recall).</p>');
    h.push('<div style="font-weight:bold;text-transform:uppercase;font-size:9.5pt;color:' + toHex(ACCENT) +
      ';margin:8px 0 6px;">Weeks active per track</div>');
    h.push(tracksHtml(TRACKS, TRACK_MAX));
    h.push('<div style="font-weight:bold;text-transform:uppercase;font-size:9.5pt;color:' + toHex(ACCENT) +
      ';margin:12px 0 6px;">The internship arc</div>');
    h.push(arcHtml(ARC_PHASES));
    return h.join('');
  }

  function buildHtml(data, kind) {
    var k = (kind === 'detailed') ? 'detailed' : 'overview';
    var person = getPersonFrom(data);
    if (!person) throw new Error('InternshipReport: internshipData for "rohan" was not found.');
    var weeks = completedWeeks(person);

    var body = [];
    // cover
    body.push('<div style="font-weight:bold;text-transform:uppercase;letter-spacing:.06em;font-size:9pt;color:' +
      toHex(MUTED) + ';">IBM Internship Progress Report</div>');
    body.push('<h1 style="font-family:Georgia,serif;color:' + toHex(INK) + ';font-size:30pt;margin:4px 0 6px;">Rohan\'s IBM Internship</h1>');
    body.push('<div style="height:3px;width:60px;background:' + toHex(ACCENT) + ';margin:0 0 10px;"></div>');
    body.push('<div style="font-size:12pt;color:' + toHex(INK) + ';">Rohan · IBM Intern | Oracle EPM | Digital Product Engineering</div>');
    body.push('<div style="font-size:10pt;color:' + toHex(MUTED) + ';margin:2px 0 4px;">Documented through Week ' + weeks.length + '</div>');
    body.push('<div style="font-weight:bold;text-transform:uppercase;font-size:9pt;color:' + toHex(ACCENT) + ';">' +
      (k === 'overview' ? 'Executive overview' : 'Detailed weekly report') + '</div>');

    body.push(atAGlanceHtml(person, weeks));

    if (k === 'overview') {
      body.push('<h2 style="font-family:Georgia,serif;color:' + toHex(INK) + ';font-size:16pt;margin:22px 0 8px;">Executive summary</h2>');
      execParagraphs(person, weeks).forEach(function (p) {
        body.push('<p style="margin:0 0 11px;">' + esc(p) + '</p>');
      });
      body.push('<h2 style="font-family:Georgia,serif;color:' + toHex(INK) + ';font-size:16pt;margin:22px 0 8px;">Week by week</h2>');
      weeks.forEach(function (w) {
        body.push('<div style="font-weight:bold;text-transform:uppercase;font-size:8.5pt;color:' + toHex(ACCENT) + ';margin-top:12px;">Week ' + w.week + '</div>');
        body.push('<div style="font-family:Georgia,serif;font-weight:bold;font-size:12pt;color:' + toHex(INK) + ';margin:1px 0 3px;">' + esc(w.title || '') + '</div>');
        var summary = (w.managerSummary && !isTBU(w.managerSummary)) ? w.managerSummary : (w.mainFocus || '');
        if (summary) body.push('<p style="margin:0 0 8px;">' + esc(summary) + '</p>');
      });
      body.push('<h2 style="font-family:Georgia,serif;color:' + toHex(INK) + ';font-size:16pt;margin:22px 0 8px;">Signature highlights</h2>');
      body.push(bulletsHtml(SIGNATURE_HIGHLIGHTS));
    } else {
      weeks.forEach(function (w) {
        body.push('<div style="page-break-before:always;"></div>');
        body.push('<div style="font-weight:bold;text-transform:uppercase;font-size:8.5pt;color:' + toHex(ACCENT) + ';margin-top:14px;">Week ' + w.week + '</div>');
        body.push('<h2 style="font-family:Georgia,serif;color:' + toHex(INK) + ';font-size:15pt;margin:1px 0 4px;">' + esc(w.title || '') + '</h2>');
        var tags = cleanArray(w.tags);
        if (tags.length) body.push('<div style="font-style:italic;color:' + toHex(MUTED) + ';font-size:9pt;margin:0 0 8px;">' + esc(tags.join('  ·  ')) + '</div>');
        if (w.mainFocus && !isTBU(w.mainFocus)) {
          body.push('<div style="font-weight:bold;text-transform:uppercase;font-size:9.5pt;color:' + toHex(ACCENT) + ';margin:10px 0 3px;">Focus</div>');
          body.push('<p style="margin:0 0 8px;">' + esc(w.mainFocus) + '</p>');
        }
        var mItems = prettyMetrics(w.metrics);
        if (mItems.length) body.push(tilesHtml(mItems));
        var accs = cleanArray(w.accomplishments);
        if (accs.length) {
          body.push('<div style="font-weight:bold;text-transform:uppercase;font-size:9.5pt;color:' + toHex(ACCENT) + ';margin:10px 0 3px;">Key accomplishments</div>');
          body.push(bulletsHtml(accs));
        }
        var pw = Array.isArray(w.projectWork) ? w.projectWork : [];
        var pwHasContent = pw.some(function (p) {
          if (typeof p === 'string') return p.trim() !== '' && !isTBU(p);
          return p && typeof p === 'object' && !!p.name;
        });
        if (pwHasContent) {
          body.push('<div style="font-weight:bold;text-transform:uppercase;font-size:9.5pt;color:' + toHex(ACCENT) + ';margin:10px 0 3px;">Project work</div>');
          var strBuf = [];
          var flush = function () { if (strBuf.length) { body.push(bulletsHtml(strBuf)); strBuf = []; } };
          pw.forEach(function (p) {
            if (typeof p === 'string') { if (p.trim() !== '' && !isTBU(p)) strBuf.push(p); }
            else if (p && p.name) {
              flush();
              body.push('<div style="font-weight:bold;color:' + toHex(INK) + ';margin:8px 0 2px;">' + esc(p.name) + '</div>');
              var tasks = cleanArray(p.tasks);
              if (tasks.length) body.push(bulletsHtml(tasks));
            }
          });
          flush();
        }
        var tw = cleanArray(w.technicalWork);
        if (tw.length) {
          body.push('<div style="font-weight:bold;text-transform:uppercase;font-size:9.5pt;color:' + toHex(ACCENT) + ';margin:10px 0 3px;">Technical work</div>');
          body.push(bulletsHtml(tw));
        }
        var del = cleanArray(w.deliverables);
        if (del.length) {
          body.push('<div style="font-weight:bold;text-transform:uppercase;font-size:9.5pt;color:' + toHex(ACCENT) + ';margin:10px 0 3px;">Deliverables</div>');
          body.push(bulletsHtml(del));
        }
        if (w.reflection && !isTBU(w.reflection)) {
          body.push('<div style="font-weight:bold;text-transform:uppercase;font-size:9.5pt;color:' + toHex(ACCENT) + ';margin:10px 0 3px;">Reflection</div>');
          body.push('<p style="margin:0 0 8px;">' + esc(w.reflection) + '</p>');
        }
      });
    }

    return '<!doctype html><html><head><meta charset="utf-8"><title>' + esc(CONFIG[k].title) + '</title>' +
      '<style>@page{size:A4;margin:18mm;}body{font-family:Calibri,Arial,sans-serif;color:' + toHex(INK) +
      ';font-size:10.5pt;line-height:1.5;max-width:174mm;margin:0 auto;}h1,h2{line-height:1.15;}</style></head>' +
      '<body>' + body.join('') + '</body></html>';
  }

  function printFallback(data, kind) {
    var html = buildHtml(data, kind);
    var win = window.open('', '_blank');
    if (!win) throw new Error('Print fallback could not open a new window (popup blocked).');
    win.document.open();
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(function () { try { win.print(); } catch (e) { /* user can print manually */ } }, 500);
  }

  /* ------------------------------ generate ------------------------------ */
  function generate(kind) {
    var k = (kind === 'detailed') ? 'detailed' : 'overview';
    var cfg = CONFIG[k];
    var data = getData();

    return loadJsPDF().then(function (JsPDF) {
      // Primary path: genuine vector PDF. A throw here (bad data, render bug)
      // is a POST-LOAD failure and must NOT be swallowed by the fallback.
      var doc = buildDoc(JsPDF, data, k);
      var blob = doc.output('blob');
      triggerDownload(blob, cfg.file);
    }).catch(function (err) {
      // Only a failure to LOAD the jsPDF script triggers the print fallback.
      if (err && err.code === 'JSPDF_LOAD_FAILED') {
        printFallback(data, k); // may throw -> rejects
        return;
      }
      throw err;
    });
  }

  /* ---------------------------------------------------------------------- *
   * Public API (always assigned to root; browser-only fns touch document
   * lazily, so requiring this file in Node never executes browser code)
   * ---------------------------------------------------------------------- */
  root.InternshipReport = {
    overview: function () { return generate('overview'); },
    detailed: function () { return generate('detailed'); },
    _doc: function (kind) {
      return loadJsPDF().then(function (JsPDF) {
        return buildDoc(JsPDF, getData(), kind);
      });
    }
  };

  /* Node export guard: pure functions only, no browser execution on require. */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { buildDoc: buildDoc, cleanText: cleanText };
  }
})();
