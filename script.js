// Simple Blog-Style Internship Tracker

const currentPerson = 'rohan';
const FEATURED_PROJECT = 'MCW Implementation';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderMcwSpotlight();
  renderWeeks();
  setupViewTabs();
  buildPresentation();
  setupModal();
});

// Shared helpers
function getPerson() {
  return internshipData.people.find(p => p.id === currentPerson);
}

function getCompletedWeeks() {
  return getPerson().weeks.filter(w => w.status === 'completed');
}

function encodePath(path) {
  return path.split('/').map(p => encodeURIComponent(p)).join('/');
}

// View tab switching (Timeline / Presentation)
function setupViewTabs() {
  const buttons = document.querySelectorAll('.view-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.view;
      document.getElementById('timeline-view').classList.toggle('hidden', target !== 'timeline');
      document.getElementById('presentation-view').classList.toggle('hidden', target !== 'presentation');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Featured MCW project spotlight , the first thing you see
function renderMcwSpotlight() {
  const weeks = getCompletedWeeks();

  // Group MCW tasks by week so each week reads as its own table block
  const byWeek = [];
  weeks.forEach(week => {
    (week.projectWork || []).forEach(proj => {
      if (proj && proj.name === FEATURED_PROJECT && proj.tasks.length) {
        byWeek.push({ week: week.week, focus: week.mainFocus, tasks: proj.tasks });
      }
    });
  });

  if (byWeek.length === 0) return;

  const tabs = byWeek.map((w, i) => `
    <button class="spotlight-tab${i === 0 ? ' active' : ''}" data-week="${w.week}">Week ${w.week}</button>
  `).join('');

  const panels = byWeek.map((w, i) => `
    <ul class="spotlight-panel${i === 0 ? ' active' : ''}" data-week="${w.week}">
      ${w.tasks.map(task => `<li>${task}</li>`).join('')}
    </ul>
  `).join('');

  document.getElementById('mcw-spotlight').innerHTML = `
    <section class="spotlight">
      <div class="spotlight-label">Main Project</div>
      <h2 class="spotlight-title">MCW Implementation</h2>
      <p class="spotlight-desc">
        My primary workstream: an Oracle EPM implementation for MCW. I mapped the end-to-end
        process, built forecasting business rules, and delivered the first Predictive Cash Flow reports.
      </p>
      <div class="spotlight-tabs">${tabs}</div>
      <div class="spotlight-panels">${panels}</div>
    </section>
  `;

  // Week selector
  const root = document.getElementById('mcw-spotlight');
  root.querySelectorAll('.spotlight-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const wk = tab.dataset.week;
      root.querySelectorAll('.spotlight-tab').forEach(t => t.classList.toggle('active', t === tab));
      root.querySelectorAll('.spotlight-panel').forEach(p => p.classList.toggle('active', p.dataset.week === wk));
    });
  });
}

// Render weeks
function renderWeeks() {
  const timeline = document.getElementById('timeline');

  const completedWeeks = getCompletedWeeks();

  timeline.innerHTML = completedWeeks.map(week => `
    <article class="week-post">
      <header class="week-header">
        <div class="week-number">Week ${week.week}</div>
        <h2 class="week-title">${week.title}</h2>
        <p class="week-meta">${week.mainFocus}</p>
        <div class="week-tags">
          ${week.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </header>

      <div class="week-content">
        ${renderWeekContent(week)}
      </div>
    </article>
  `).join('');
}

// Render week content
function renderWeekContent(week) {
  let html = '';

  // Accomplishments
  if (week.accomplishments && week.accomplishments.length > 0 && week.accomplishments[0] !== 'To be updated.') {
    html += `
      <h3>What I Did</h3>
      <ul>
        ${week.accomplishments.slice(0, 8).map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }

  // Project Work
  if (week.projectWork && week.projectWork.length > 0) {
    const hasProjects = week.projectWork.some(p => typeof p === 'object' && p.name);

    if (hasProjects) {
      // Surface the featured project (MCW) first
      const projects = week.projectWork
        .filter(p => p.name)
        .sort((a, b) => (b.name === FEATURED_PROJECT) - (a.name === FEATURED_PROJECT));

      html += `
        <h3>Projects</h3>
        <div class="project-grid">
          ${projects.map(project => `
            <div class="project-card${project.name === FEATURED_PROJECT ? ' featured' : ''}">
              <h4>${project.name}${project.name === FEATURED_PROJECT ? ' <span class="featured-badge">Main</span>' : ''}</h4>
              <ul>
                ${project.tasks.slice(0, 4).map(task => `<li>${task}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  // Links (e.g. project / capstone videos)
  if (week.links && week.links.length > 0) {
    const videos = week.links.filter(l => l.thumbnail);
    const plain = week.links.filter(l => !l.thumbnail);

    html += `<h3>Watch &amp; Links</h3>`;

    if (videos.length > 0) {
      html += `
        <div class="video-grid">
          ${videos.map(link => `
            <a class="video-card" href="${link.url}" target="_blank" rel="noopener noreferrer">
              <span class="video-thumb">
                <img src="${link.thumbnail}" alt="${link.label}" loading="lazy">
                <span class="video-play" aria-hidden="true">&#9654;</span>
              </span>
              <span class="video-label">${link.label}</span>
            </a>
          `).join('')}
        </div>
      `;
    }

    if (plain.length > 0) {
      html += `
        <ul class="week-links">
          ${plain.map(link => `
            <li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} &#8599;</a></li>
          `).join('')}
        </ul>
      `;
    }
  }

  // Assets
  const assets = getAssets(week.week);
  if (assets.length > 0) {
    html += `
      <h3>Screenshots</h3>
      <div class="asset-gallery">
        ${assets.map(asset => `
          <div class="asset-item" onclick="openModal('${asset.path.replace(/'/g, "\\'")}')">
            <img src="${asset.path.split('/').map(p => encodeURIComponent(p)).join('/')}" alt="${asset.name}" class="asset-thumbnail" loading="lazy">
            <div class="asset-caption">${asset.name}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  return html;
}

// Get assets for week - AUTO-GENERATED FROM FILESYSTEM
function getAssets(weekNumber) {
  const assetMap = {
    'rohan': {
      1: [
        { name: 'Week 1 Program Schedule', path: 'Rohan/Assets Week 1/week1-01.png' },
      ],
      2: [
        { name: 'Cash Flow Forecasting Flowchart', path: 'Rohan/Assets Week 2/week2-01.png' },
        { name: 'Raw Fisheye Camera Capture', path: 'Rohan/Assets Week 2/week2-02.png' },
        { name: 'Image Labeling in labelImg', path: 'Rohan/Assets Week 2/week2-03.png' },
        { name: 'Training Topics List', path: 'Rohan/Assets Week 2/week2-04.png' },
        { name: 'Intern10 Exercise Guide', path: 'Rohan/Assets Week 2/week2-05.png' },
      ],
      3: [
        { name: 'YOLO Training Log', path: 'Rohan/Assets Week 3/week3-01.png' },
        { name: 'YOLO Training Script', path: 'Rohan/Assets Week 3/week3-02.png' },
        { name: 'VOC Annotation File', path: 'Rohan/Assets Week 3/week3-03.png' },
        { name: 'Training Results Curves', path: 'Rohan/Assets Week 3/week3-04.png' },
        { name: 'Dogtoy Detection Results', path: 'Rohan/Assets Week 3/week3-05.jpg' },
      ],
      4: [
        { name: 'PCF Business Rule Script', path: 'Rohan/Assets Week 4/week4-01.png' },
        { name: 'Dataset Label Distribution', path: 'Rohan/Assets Week 4/week4-02.png' },
        { name: 'Normalized Confusion Matrix', path: 'Rohan/Assets Week 4/week4-03.png' },
        { name: 'Cash Flow Test Report', path: 'Rohan/Assets Week 4/week4-04.png' },
        { name: 'Report Grid Definition', path: 'Rohan/Assets Week 4/week4-05.png' },
      ],
      5: [
        { name: 'PCF Cash Flow Dashboard', path: 'Rohan/Assets Week 5/week5-01.png' },
        { name: 'SOFR Loan Business Rule', path: 'Rohan/Assets Week 5/week5-02.png' },
        { name: 'Oracle EPM AI Agent Interface', path: 'Rohan/Assets Week 5/week5-03.png' },
        { name: 'EPM Copilot Deployment Setup', path: 'Rohan/Assets Week 5/week5-04.png' },
        { name: 'Intern Presentation Feedback Form', path: 'Rohan/Assets Week 5/week5-05.png' },
      ],
      6: [
        { name: 'Oracle EPM Admin Navigator', path: 'Rohan/Assets Week 6/week6-01.png' },
        { name: 'Oracle EPM AI Desktop App', path: 'Rohan/Assets Week 6/week6-02.png' },
        { name: 'Custom Cashflow Forecast Dashboard 2.0', path: 'Rohan/Assets Week 6/week6-03.png' },
        { name: 'Boston Dynamics Spot DevCon Presentation', path: 'Rohan/Assets Week 6/week6-04.png' },
        { name: 'IBM Capstone: NEXUS Presentation', path: 'Rohan/Assets Week 6/week6-05.png' },
      ]
    }
  };

  return assetMap[currentPerson]?.[weekNumber] || [];
}

/* ---------------- Presentation deck ---------------- */

let slides = [];
let currentSlide = 0;

function buildPresentation() {
  const person = getPerson();
  const weeks = getCompletedWeeks();
  slides = [];

  // Intro slide
  const m = person.totalMetrics || {};
  slides.push({
    kind: 'intro',
    eyebrow: 'IBM Internship',
    title: person.name,
    subtitle: person.role,
    stats: [
      { value: weeks.length, label: 'Weeks Logged' },
      { value: m.learningHours ?? '-', label: 'Learning Hours' },
      { value: m.modulesCompleted ?? '-', label: 'Modules' },
      { value: m.projectsActive ?? '-', label: 'Active Projects' }
    ]
  });

  // MCW spotlight slide , leads the story
  const mcwTasks = [];
  weeks.forEach(week => {
    (week.projectWork || []).forEach(proj => {
      if (proj && proj.name === FEATURED_PROJECT) {
        proj.tasks.forEach(task => mcwTasks.push(`W${week.week} · ${task}`));
      }
    });
  });
  slides.push({
    kind: 'feature',
    eyebrow: 'Main Project',
    title: 'MCW Implementation',
    summary: 'An Oracle EPM implementation: from mapping the process to shipping forecasting business rules and the first Predictive Cash Flow reports.',
    points: mcwTasks.slice(0, 8)
  });

  // One slide per completed week , top highlights, MCW called out first
  weeks.forEach(week => {
    const highlights = (week.accomplishments || [])
      .filter(a => a && a !== 'To be updated.')
      .slice(0, 5);

    const projectNames = (week.projectWork || [])
      .filter(p => p && p.name)
      .map(p => p.name)
      .sort((a, b) => (b === FEATURED_PROJECT) - (a === FEATURED_PROJECT));

    slides.push({
      kind: 'week',
      eyebrow: `Week ${week.week}`,
      title: week.title,
      focus: week.mainFocus,
      points: highlights,
      projects: projectNames,
      assets: getAssets(week.week).slice(0, 4)
    });
  });

  renderDots();
  renderSlide();

  document.getElementById('deck-prev').addEventListener('click', () => goToSlide(currentSlide - 1));
  document.getElementById('deck-next').addEventListener('click', () => goToSlide(currentSlide + 1));

  document.addEventListener('keydown', (e) => {
    if (document.getElementById('presentation-view').classList.contains('hidden')) return;
    if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
  });
}

function goToSlide(index) {
  currentSlide = Math.max(0, Math.min(slides.length - 1, index));
  renderSlide();
  renderDots();
}

function renderDots() {
  const dots = document.getElementById('deck-dots');
  dots.innerHTML = slides.map((_, i) =>
    `<button class="deck-dot${i === currentSlide ? ' active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join('');
  dots.querySelectorAll('.deck-dot').forEach(dot => {
    dot.addEventListener('click', () => goToSlide(Number(dot.dataset.index)));
  });
}

function renderSlide() {
  const slide = slides[currentSlide];
  const stage = document.getElementById('slide-stage');

  let inner = '';
  if (slide.kind === 'intro') {
    inner = `
      <p class="slide-eyebrow">${slide.eyebrow}</p>
      <h2 class="slide-title intro">${slide.title}</h2>
      <p class="slide-subtitle">${slide.subtitle}</p>
      <div class="slide-stats">
        ${slide.stats.map(s => `
          <div class="slide-stat">
            <div class="slide-stat-value">${s.value}</div>
            <div class="slide-stat-label">${s.label}</div>
          </div>
        `).join('')}
      </div>
      <p class="slide-hint">Use ← → or the arrows below to step through the internship.</p>
    `;
  } else if (slide.kind === 'feature') {
    inner = `
      <p class="slide-eyebrow accent">${slide.eyebrow}</p>
      <h2 class="slide-title">${slide.title}</h2>
      <p class="slide-focus">${slide.summary}</p>
      <ul class="slide-points">
        ${slide.points.map(p => `<li>${p}</li>`).join('')}
      </ul>
    `;
  } else {
    inner = `
      <p class="slide-eyebrow accent">${slide.eyebrow}</p>
      <h2 class="slide-title">${slide.title}</h2>
      <p class="slide-focus">${slide.focus}</p>
      ${slide.points.length ? `
        <div class="slide-section-label">Highlights</div>
        <ul class="slide-points">
          ${slide.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      ` : ''}
      ${slide.projects.length ? `
        <div class="slide-projects">
          ${slide.projects.map(name => `<span class="slide-chip${name === FEATURED_PROJECT ? ' featured' : ''}">${name}</span>`).join('')}
        </div>
      ` : ''}
      ${slide.assets.length ? `
        <div class="slide-assets">
          ${slide.assets.map(asset => `
            <img src="${encodePath(asset.path)}" alt="${asset.name}" title="${asset.name}" loading="lazy"
                 onclick="openModal('${asset.path.replace(/'/g, "\\'")}')">
          `).join('')}
        </div>
      ` : ''}
    `;
  }

  stage.innerHTML = `<div class="slide">${inner}</div>`;
  document.getElementById('deck-prev').disabled = currentSlide === 0;
  document.getElementById('deck-next').disabled = currentSlide === slides.length - 1;
}

// Modal
function setupModal() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(path) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');

  const encodedPath = path.split('/').map(p => encodeURIComponent(p)).join('/');
  body.innerHTML = `<img src="${encodedPath}" alt="Asset preview">`;
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.getElementById('modal-body').innerHTML = '';
}
