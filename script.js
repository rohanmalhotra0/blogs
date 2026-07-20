/* =========================================================
   Rohan: IBM Internship · interaction layer
   Data-driven from data/internshipData.js.
   Upcoming weeks light up automatically once their data lands.
   ========================================================= */

const PERSON_ID = 'rohan';
const FEATURED = 'MCW Implementation';

const person = internshipData.people.find(p => p.id === PERSON_ID);
const allWeeks = person.weeks;
const completedWeeks = allWeeks.filter(w => w.status === 'completed');
const totalWeeks = internshipData.metadata.totalWeeks || allWeeks.length;

const enc = p => p.split('/').map(encodeURIComponent).join('/');

/* ---------- Icons (Lucide-style, stroke = currentColor) ---------- */
const ICON = {
  menu: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',
  'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  'arrow-up-right': '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
  'chevron-left': '<polyline points="15 18 9 12 15 6"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  play: '<polygon points="6 4 20 12 6 20 6 4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M9 13.5 8 22l4-2.5L16 22l-1-8.5"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="1.6"/><path d="m21 15-4.5-4.5L6 21"/>',
  chart: '<path d="M3 3v18h18"/><line x1="7.5" y1="18" x2="7.5" y2="13"/><line x1="12" y1="18" x2="12" y2="8"/><line x1="16.5" y1="18" x2="16.5" y2="15"/>',
  bot: '<rect x="4" y="9" width="16" height="11" rx="2"/><path d="M12 9V5.5"/><circle cx="12" cy="4" r="1"/><line x1="2" y1="14.5" x2="4" y2="14.5"/><line x1="20" y1="14.5" x2="22" y2="14.5"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>',
  network: '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4"/><path d="M5 16v-1.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1V16"/>',
  landmark: '<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 21 8 3 8"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.6 3 6 3s6-2 6-3v-5"/><line x1="22" y1="10" x2="22" y2="15"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="0.5"/><line x1="9" y1="2" x2="9" y2="6"/><line x1="15" y1="2" x2="15" y2="6"/><line x1="9" y1="18" x2="9" y2="22"/><line x1="15" y1="18" x2="15" y2="22"/><line x1="2" y1="9" x2="6" y2="9"/><line x1="2" y1="15" x2="6" y2="15"/><line x1="18" y1="9" x2="22" y2="9"/><line x1="18" y1="15" x2="22" y2="15"/>',
  download: '<path d="M12 3v12"/><polyline points="7 10 12 15 17 10"/><path d="M4 21h16"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/>',
};
const svg = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICON[name] || ''}</svg>`;
function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => { if (!el.dataset.iconDone) { el.innerHTML = svg(el.dataset.icon); el.dataset.iconDone = '1'; } });
}

/* ---------- Asset map (mirrors files under /Rohan) ---------- */
const ASSETS = {
  1: [{ name: 'Week 1 Program Schedule', path: 'Rohan/Assets Week 1/week1-01.png', proj: 'learning' }],
  2: [
    { name: 'Cash Flow Forecasting Flowchart', path: 'Rohan/Assets Week 2/week2-01.png', proj: 'oracle' },
    { name: 'Raw Fisheye Camera Capture', path: 'Rohan/Assets Week 2/week2-02.png', proj: 'boston' },
    { name: 'Image Labeling in labelImg', path: 'Rohan/Assets Week 2/week2-03.png', proj: 'boston' },
    { name: 'Training Topics List', path: 'Rohan/Assets Week 2/week2-04.png', proj: 'learning' },
    { name: 'Intern10 Exercise Guide', path: 'Rohan/Assets Week 2/week2-05.png', proj: 'learning' },
  ],
  3: [
    { name: 'YOLO Training Log', path: 'Rohan/Assets Week 3/week3-01.png', proj: 'boston' },
    { name: 'YOLO Training Script', path: 'Rohan/Assets Week 3/week3-02.png', proj: 'boston' },
    { name: 'VOC Annotation File', path: 'Rohan/Assets Week 3/week3-03.png', proj: 'boston' },
    { name: 'Training Results Curves', path: 'Rohan/Assets Week 3/week3-04.png', proj: 'boston' },
    { name: 'Dogtoy Detection Results', path: 'Rohan/Assets Week 3/week3-05.jpg', proj: 'boston' },
  ],
  4: [
    { name: 'PCF Business Rule Script', path: 'Rohan/Assets Week 4/week4-01.png', proj: 'oracle' },
    { name: 'Dataset Label Distribution', path: 'Rohan/Assets Week 4/week4-02.png', proj: 'boston' },
    { name: 'Normalized Confusion Matrix', path: 'Rohan/Assets Week 4/week4-03.png', proj: 'boston' },
    { name: 'Cash Flow Test Report', path: 'Rohan/Assets Week 4/week4-04.png', proj: 'oracle' },
    { name: 'Report Grid Definition', path: 'Rohan/Assets Week 4/week4-05.png', proj: 'oracle' },
  ],
  5: [
    { name: 'PCF Cash Flow Dashboard', path: 'Rohan/Assets Week 5/week5-01.png', proj: 'oracle' },
    { name: 'SOFR Loan Business Rule', path: 'Rohan/Assets Week 5/week5-02.png', proj: 'oracle' },
    { name: 'Oracle EPM AI Agent Interface', path: 'Rohan/Assets Week 5/week5-03.png', proj: 'oracle' },
    { name: 'EPM Copilot Deployment Setup', path: 'Rohan/Assets Week 5/week5-04.png', proj: 'oracle' },
    { name: 'Intern Presentation Feedback Form', path: 'Rohan/Assets Week 5/week5-05.png', proj: 'learning' },
  ],
  6: [
    { name: 'Oracle EPM Admin Navigator', path: 'Rohan/Assets Week 6/week6-01.png', proj: 'oracle' },
    { name: 'Oracle EPM AI Desktop App', path: 'Rohan/Assets Week 6/week6-02.png', proj: 'oracle' },
    { name: 'Custom Cashflow Forecast Dashboard 2.0', path: 'Rohan/Assets Week 6/week6-03.png', proj: 'oracle' },
    { name: 'Boston Dynamics Spot DevCon Presentation', path: 'Rohan/Assets Week 6/week6-04.png', proj: 'boston' },
    { name: 'IBM Capstone: NEXUS Presentation', path: 'Rohan/Assets Week 6/week6-05.png', proj: 'capstone' },
  ],
};
const getAssets = wk => ASSETS[wk] || [];

/* ---------- Curated workstreams ---------- */
const WORKSTREAMS = [
  {
    key: FEATURED, icon: 'chart', name: 'MCW: Oracle EPM Implementation',
    role: 'Main workstream · Implementation', feature: true,
    desc: 'My primary track: a live Oracle EPM implementation for client MCW. I mapped the end-to-end process, wrote forecasting business rules in Groovy, built a custom Dashboard 2.0 with tabbed navigation, and architected an AI agent chat platform on top of the EPM data.',
    tech: ['Oracle EPM', 'Groovy', 'Planning', 'Dashboard 2.0', 'ICA API', 'RAG', 'MCP'],
    metrics: [{ n: '4+', l: 'Business rules' }, { n: '2.0', l: 'Custom dashboard' }, { n: 'AI', l: 'EPM agent platform' }],
  },
  {
    key: 'Boston Dynamics Spot', icon: 'bot', name: 'Boston Dynamics Spot',
    role: 'Computer vision & robotics',
    desc: 'Trained a YOLO11 model to detect a dog toy, then integrated it onto the Spot robot: movement control, a gRPC pipeline, multithreaded lock-free inference, a safety kill-switch, and a victory dance. Presented at DevCon and open-sourced the weights.',
    tech: ['YOLO11', 'Python', 'OpenCV', 'gRPC', 'Spot SDK', 'Multithreading'],
    metrics: [{ n: '99.5%', l: 'mAP@50' }, { n: '898', l: 'Images labeled' }, { n: '70%+', l: 'Live confidence' }],
  },
  {
    key: 'Capstone', icon: 'network', name: 'NEXUS: IBM Capstone',
    role: 'Team lead',
    desc: 'Led the Dallas Team 2 capstone: NEXUS, an AI platform built on IBM Granite and ICA with RAG, cross-model support, and speech in/out. Set the architecture, organized the team, and submitted a full week early.',
    tech: ['IBM Granite', 'ICA', 'RAG', 'TTS / STT', 'Cross-model', 'GitHub'],
    metrics: [{ n: '1 wk', l: 'Early delivery' }, { n: 'Lead', l: 'Team role' }, { n: 'Voice', l: 'Speech in / out' }],
  },
  {
    key: 'DRW AMS', icon: 'landmark', name: 'DRW: Oracle Managed Services',
    role: 'AMS & client communication',
    desc: 'Supported Oracle EPM managed services for client DRW: ticket management, client meetings, and delivering an executive-ready Oracle EPM presentation with cost and timeline analysis.',
    tech: ['Oracle EPM', 'AMS', 'Ticketing', 'Client decks'],
    metrics: [{ n: 'Exec', l: 'EPM presentation' }, { n: 'Cost', l: '+ timeline research' }],
  },
  {
    key: 'AI / Technical Innovation', icon: 'cpu', name: 'AI / Technical Innovation',
    role: 'Local AI · fine-tuning · RAG',
    desc: 'A self-directed track: I stood up an Intel Arc Pro B70 workstation, fine-tuned open-source coding models locally with QLoRA, and researched RAG and local inference to architect an enterprise Oracle EPM AI assistant that turns implementation knowledge and business rules into on-demand answers.',
    tech: ['QLoRA', 'Intel Arc GPU', 'Fine-Tuning', 'RAG', 'Local Inference', 'Oracle EPM'],
    metrics: [{ n: 'QLoRA', l: 'Local fine-tuning' }, { n: 'Intel Arc', l: 'B70 workstation' }, { n: 'RAG', l: 'EPM assistant' }],
  },
  {
    key: '__foundations', icon: 'cap', name: 'Intern10 & Foundations',
    role: 'Onboarding · learning · networking',
    desc: 'The base layer: onboarding, 186 IBM Learn modules, Oracle certifications, and all Intern10 networking interviews and deliverables, completed five weeks ahead of schedule.',
    tech: ['IBM Learn', 'Oracle My Learn', 'Intern10'],
    metrics: [{ n: '57', l: 'Learning hours' }, { n: '186', l: 'Modules' }, { n: '8', l: 'Badges' }],
    flat: [
      'Completed every onboarding requirement and went beyond the minimum on IBM Learn',
      'Logged 57 learning hours across 186 modules and earned 8 badges and certifications',
      'Earned Oracle My Learn badges in ERP and EPM concepts',
      'Completed all Intern10 networking interviews (Neil Kaufman, Karla McMillan, Summer Gerhart, Tono Nogueras)',
      'Delivered the EPM elevator pitch, meeting presentation, and All-Hands review',
      'Completed the Intern10 Situational Role Play reflection and built a custom intern feedback form',
      'Finished all Intern 10 tasks five weeks ahead of schedule',
    ],
  },
];

function aggregateProject(key) {
  const out = [];
  completedWeeks.forEach(w => (w.projectWork || []).forEach(p => {
    if (p && typeof p === 'object' && p.name === key && p.tasks && p.tasks.length) out.push({ week: w.week, tasks: p.tasks });
  }));
  return out;
}
function weekSpan(key) {
  if (key === '__foundations') return `Weeks 1-${completedWeeks.length}`;
  const ws = aggregateProject(key).map(x => x.week);
  if (!ws.length) return '';
  return ws.length === 1 ? `Week ${ws[0]}` : `Weeks ${Math.min(...ws)}-${Math.max(...ws)}`;
}

/* ---------- Timeline filters ----------
   proj      → asset tag used to pick project-specific screenshots
   pwNames   → projectWork entry name(s) holding that project's weekly tasks
   tech      → WORKSTREAMS index whose tech tags label the project
   learning  → cross-cutting track sourced from each week's `training` list   */
const FILTERS = [
  { label: 'All', proj: null },
  { label: 'Oracle EPM', proj: 'oracle', pwNames: ['MCW Implementation'], tech: 0 },
  { label: 'Boston Dynamics', proj: 'boston', pwNames: ['Boston Dynamics Spot'], tech: 1 },
  { label: 'Capstone', proj: 'capstone', pwNames: ['Capstone'], tech: 2 },
  { label: 'DRW AMS', proj: 'drw', pwNames: ['DRW AMS'], tech: 3 },
  { label: 'AI Innovation', proj: 'ai', pwNames: ['AI / Technical Innovation'], tech: 4 },
  { label: 'Learning', proj: 'learning', learning: true, tech: 5 },
];

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('footer-role').textContent = person.role;
  document.getElementById('footer-week').textContent = completedWeeks.length;
  renderOverview();
  renderWorkstreams();
  renderFilters();
  renderJourney();
  renderGallery();
  renderMedia();
  hydrateIcons();
  initNav();
  initModal();
  initLightbox();
  initExport();
  initRouter();
});

/* ---------- Work ---------- */
function renderWorkstreams() {
  document.getElementById('work-grid').innerHTML = WORKSTREAMS.map((w, i) => `
    <button class="work-card reveal${w.feature ? ' feature' : ''}" data-ws="${i}" aria-label="Open ${w.name} breakdown">
      <div class="work-head">
        <span class="work-ico" data-icon="${w.icon}"></span>
        <div class="work-titles">
          <div class="work-name">${w.name}</div>
          <div class="work-role">${w.role}</div>
        </div>
        <div class="work-span">${weekSpan(w.key)}</div>
      </div>
      <p class="work-desc">${w.desc}</p>
      <div class="work-metrics">
        ${w.metrics.map(mt => `<div><div class="wm-num">${mt.n}</div><div class="wm-label">${mt.l}</div></div>`).join('')}
      </div>
      <div class="work-tags">${w.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <span class="work-more">View breakdown ${svg('arrow-right')}</span>
    </button>`).join('');
  document.querySelectorAll('.work-card').forEach(c => c.addEventListener('click', () => openWorkstream(+c.dataset.ws)));
}

/* ---------- Filters ---------- */
let activeFilter = 0;
function renderFilters() {
  document.getElementById('filters').innerHTML = FILTERS.map((f, i) =>
    `<button class="filter-btn${i === 0 ? ' active' : ''}" data-f="${i}">${f.label}</button>`).join('');
  document.querySelectorAll('.filter-btn').forEach(b => b.addEventListener('click', () => {
    activeFilter = +b.dataset.f;
    document.querySelectorAll('.filter-btn').forEach(x => x.classList.toggle('active', x === b));
    renderJourney();
  }));
}

/* ---------- Journey ---------- */
function renderJourney() {
  const f = FILTERS[activeFilter];
  const list = document.getElementById('journey-list');
  if (!f.proj) {
    list.innerHTML = allWeeks.map((w, i) => fullWeekCard(w, i)).join('');
  } else {
    let i = 0;
    const cards = [];
    completedWeeks.forEach(w => {
      const card = projectWeekCard(w, f, i);
      if (card) { cards.push(card); i++; }
    });
    list.innerHTML = cards.length ? cards.join('')
      : `<li class="j-empty">No ${f.label} work logged yet.</li>`;
  }
  document.querySelectorAll('.j-card[data-open]').forEach(c => c.addEventListener('click', () => openWeek(+c.dataset.open)));
}

/* All view: the full week, every workstream and screenshot together. */
function fullWeekCard(w, i = 0) {
  const pending = w.status !== 'completed';
  if (pending) return `
    <li class="j-item pending" style="--i:${i}">
      <div class="j-aside">
        <div class="j-wk-label">Week</div><div class="j-wk-num">${w.week}</div>
        <div class="j-status"><span class="dot"></span>Upcoming</div>
      </div>
      <div><div class="j-title">Coming soon</div><p class="j-pending-text">This week hasn't been logged yet; check back as the internship continues.</p></div>
    </li>`;
  const shots = getAssets(w.week);
  return `
    <li class="j-item" style="--i:${i}">
      <div class="j-aside">
        <div class="j-wk-label">Week</div><div class="j-wk-num">${w.week}</div>
        <div class="j-status"><span class="dot"></span>Completed</div>
      </div>
      <button class="j-card" data-open="${w.week}" aria-label="Open Week ${w.week}">
        <div class="j-title">${w.title}</div>
        <p class="j-focus">${w.mainFocus}</p>
        <div class="j-tags">${w.tags.slice(0, 6).map(t => `<span class="tag">${t}</span>`).join('')}</div>
        ${quickStats(w)}
        ${thumbStrip(shots)}
        <span class="j-open">Read Week ${w.week} ${svg('arrow-right')}</span>
      </button>
    </li>`;
}

/* Project view: only this project's tasks and screenshots for the week.
   Weeks with no work on the project are dropped entirely. */
function projectWeekCard(w, f, i = 0) {
  const tasks = f.learning
    ? (w.training || []).filter(t => t && t !== 'To be updated.')
    : (w.projectWork || [])
        .filter(p => p && typeof p === 'object' && f.pwNames.includes(p.name))
        .flatMap(p => p.tasks || []);
  const shots = getAssets(w.week).filter(s => s.proj === f.proj);
  if (!tasks.length && !shots.length) return '';
  const tech = (WORKSTREAMS[f.tech] || {}).tech || [];
  return `
    <li class="j-item" style="--i:${i}">
      <div class="j-aside">
        <div class="j-wk-label">Week</div><div class="j-wk-num">${w.week}</div>
        <div class="j-status"><span class="dot"></span>Completed</div>
      </div>
      <button class="j-card" data-open="${w.week}" aria-label="Open Week ${w.week}">
        <div class="j-title">${w.title}</div>
        ${tasks.length ? `<ul class="j-tasks">
          ${tasks.slice(0, 5).map(t => `<li>${t}</li>`).join('')}
          ${tasks.length > 5 ? `<li class="j-tasks-more">+${tasks.length - 5} more this week</li>` : ''}
        </ul>` : ''}
        ${tech.length ? `<div class="j-tags">${tech.slice(0, 6).map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
        ${thumbStrip(shots)}
        <span class="j-open">Read Week ${w.week} ${svg('arrow-right')}</span>
      </button>
    </li>`;
}

function thumbStrip(shots) {
  if (!shots.length) return '';
  return `<div class="j-thumbs">
    ${shots.slice(0, 4).map(s => `<img src="${enc(s.path)}" alt="${s.name}" loading="lazy">`).join('')}
    ${shots.length > 4 ? `<div class="more">+${shots.length - 4}</div>` : ''}
  </div>`;
}
function quickStats(w) {
  const m = w.metrics || {}, picks = [];
  if (m.learningHours) picks.push({ b: m.learningHours, s: 'hrs learned' });
  if (m.modulesCompleted) picks.push({ b: m.modulesCompleted, s: 'modules' });
  if (m.imagesLabeled) picks.push({ b: m.imagesLabeled, s: 'images' });
  if (m.modelMAP50) picks.push({ b: m.modelMAP50 + '%', s: 'mAP@50' });
  if (m.businessRules) picks.push({ b: m.businessRules, s: 'business rules' });
  if (m.meetingsAttended) picks.push({ b: m.meetingsAttended, s: 'meetings' });
  if (m.presentationsGiven) picks.push({ b: m.presentationsGiven, s: 'presentations' });
  if (m.detectionConfidence) picks.push({ b: m.detectionConfidence, s: 'live conf.' });
  if (!picks.length) return '';
  return `<div class="j-stats">${picks.slice(0, 4).map(p => `<div class="j-stat"><b>${p.b}</b><span>${p.s}</span></div>`).join('')}</div>`;
}

/* ---------- Gallery ---------- */
let galleryCollection = [];
function renderGallery() {
  galleryCollection = [];
  completedWeeks.forEach(w => getAssets(w.week).forEach(a => galleryCollection.push({ ...a, week: w.week })));
  document.getElementById('gallery-grid').innerHTML = galleryCollection.map((a, i) => `
    <button class="gal-item reveal" data-lb="${i}" aria-label="Enlarge: ${a.name}">
      <img src="${enc(a.path)}" alt="${a.name}" loading="lazy">
      <span class="gal-cap"><em>Week ${a.week}</em><span>${a.name}</span></span>
    </button>`).join('');
  document.querySelectorAll('.gal-item').forEach(el => el.addEventListener('click', () => openLightbox(galleryCollection, +el.dataset.lb)));
}

/* ---------- Media ---------- */
function renderMedia() {
  const vids = [];
  completedWeeks.forEach(w => (w.links || []).forEach(l => vids.push({ ...l, week: w.week })));
  const grid = document.getElementById('media-grid');
  if (!vids.length) { grid.innerHTML = `<p style="color:var(--muted)">No media yet.</p>`; return; }
  grid.innerHTML = vids.map(v => `
    <a class="media-card reveal" href="${v.url}" target="_blank" rel="noopener noreferrer">
      <div class="media-thumb ${v.thumbnail ? '' : 'noimg'}">
        ${v.thumbnail ? `<img src="${v.thumbnail}" alt="${v.label}" loading="lazy">` : `<span data-icon="play"></span>`}
        <span class="media-play">${svg('play')}</span>
      </div>
      <div class="media-body">
        <div class="media-tag">Week ${v.week}</div>
        <div class="media-title">${v.label}</div>
        <span class="media-link">Watch ${svg('arrow-up-right')}</span>
      </div>
    </a>`).join('');
}

/* =========================================================
   OVERVIEW: at-a-glance stats, arc, track effort, outcomes
   ========================================================= */
const GAUGE_CIRC = 2 * Math.PI * 52; // r = 52 in the 120×120 viewBox

function renderOverview() {
  const tm = person.totalMetrics || {};
  const done = completedWeeks.length;
  const totalRules = completedWeeks.reduce((s, w) => s + (Number(w.metrics && w.metrics.businessRules) || 0), 0);

  /* --- Stat strip --- */
  const stats = [
    { ico: 'clock', to: tm.learningHours || 57, label: 'Hours of self-driven learning' },
    { ico: 'book', to: tm.modulesCompleted || 186, label: 'IBM Learn modules completed' },
    { ico: 'award', to: tm.badgesEarned || 8, label: 'Badges & certifications' },
    { ico: 'chart', to: tm.projectsActive || 5, label: 'Parallel workstreams' },
  ];
  document.getElementById('ov-strip').innerHTML = `<div class="stat-strip">${stats.map(s => `
    <div class="stat">
      <span class="stat-ico" data-icon="${s.ico}"></span>
      <div class="stat-num count" data-to="${s.to}">0</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('')}</div>`;

  /* --- Progress: weeks documented --- */
  const pct = Math.round((done / totalWeeks) * 100);
  document.getElementById('ov-progress').innerHTML = `
    <div class="progress-block ov-card">
      <div class="pb-top">
        <h3>Weeks documented</h3>
        <div class="pb-count"><b>${done}</b> / ${totalWeeks}</div>
      </div>
      <div class="pb-bar"><div class="pb-fill" style="--target:${pct}%"></div></div>
      <div class="pb-ticks">${Array.from({ length: totalWeeks }, (_, i) => `<span>${i + 1}</span>`).join('')}</div>
      <p class="pb-note">${done} weeks logged in full detail across ${person.totalMetrics.projectsActive || 5} workstreams, with ${totalRules}+ Oracle EPM business rules shipped along the way. Intern10 was completed five weeks ahead of schedule.</p>
    </div>`;

  /* --- Internship arc --- */
  const ARC = [
    { n: 1, t: 'Onboard & learn', wk: 'Week 1', d: '57 hours across 186 IBM Learn modules, 8 badges, and every Intern10 networking interview.' },
    { n: 2, t: 'Build for clients', wk: 'Weeks 2 to 5', d: 'Oracle EPM business rules, a YOLO11 model for Spot, and the NEXUS RAG platform as team lead.' },
    { n: 3, t: 'Ship & present', wk: 'Week 6', d: 'Custom Dashboard 2.0, Spot demoed live at DevCon, and the Capstone submitted a week early.' },
    { n: 4, t: 'Deepen & automate', wk: 'Weeks 7 to 8', d: 'Perpetual calc-script drivers, rolling forecasts, and local QLoRA fine-tuning for an EPM assistant.' },
  ];
  document.getElementById('ov-arc').innerHTML = `
    <div class="ov-card arc-card">
      <div class="ov-card-head"><span class="ov-eyebrow">The arc</span><h3>From onboarding to automation</h3></div>
      <ol class="arc">
        ${ARC.map(p => `
          <li class="arc-step">
            <div class="arc-node">${p.n}</div>
            <div class="arc-body">
              <div class="arc-top"><span class="arc-title">${p.t}</span><span class="arc-wk">${p.wk}</span></div>
              <p class="arc-desc">${p.d}</p>
            </div>
          </li>`).join('')}
      </ol>
    </div>`;

  /* --- Track effort (weeks active per workstream) --- */
  const TRACKS = [
    { key: 'MCW Implementation', label: 'Oracle EPM · MCW', note: '4+ business rules · Dashboard 2.0 · EPM AI agent' },
    { key: 'DRW AMS', label: 'DRW Managed Services', note: 'Executive EPM deck · production support' },
    { key: 'Boston Dynamics Spot', label: 'Boston Dynamics Spot', note: '99.5% mAP@50 · live DevCon demo' },
    { key: 'Capstone', label: 'NEXUS Capstone', note: 'Team lead · delivered a week early' },
    { key: 'AI / Technical Innovation', label: 'AI / Technical Innovation', note: 'QLoRA fine-tuning · RAG assistant' },
    { key: '__foundations', label: 'Intern10 & foundations', note: 'Onboarding · 186 modules · networking' },
  ].map(t => ({ ...t, weeks: t.key === '__foundations' ? done : aggregateProject(t.key).length }))
   .filter(t => t.weeks > 0);
  const maxW = Math.max(...TRACKS.map(t => t.weeks), 1);
  document.getElementById('ov-tracks').innerHTML = `
    <div class="ov-card">
      <div class="ov-card-head"><span class="ov-eyebrow">Where the effort went</span><h3>Weeks active per track</h3></div>
      <div class="track-bars">
        ${TRACKS.map(t => `
          <div class="tb-row">
            <div class="tb-top"><span class="tb-label">${t.label}</span><span class="tb-weeks">${t.weeks} ${t.weeks === 1 ? 'wk' : 'wks'}</span></div>
            <div class="tb-track"><div class="tb-fill" style="--target:${(t.weeks / maxW) * 100}%"></div></div>
            <div class="tb-note">${t.note}</div>
          </div>`).join('')}
      </div>
    </div>`;

  /* --- Signature outcomes + accuracy gauge --- */
  const OUT = [
    { to: 898, label: 'Images labeled for Spot' },
    { to: 70, suffix: '%+', label: 'Live detection confidence' },
    { to: 5, suffix: ' wks', label: 'Intern10 finished early' },
    { to: 1, suffix: ' wk', label: 'Capstone delivered early' },
  ];
  document.getElementById('ov-outcomes').innerHTML = `
    <div class="ov-card outcomes-card">
      <div class="ov-card-head"><span class="ov-eyebrow">Signature outcomes</span><h3>What the work produced</h3></div>
      <div class="outcomes">
        <div class="gauge-wrap">
          <svg class="gauge" viewBox="0 0 120 120" role="img" aria-label="99.5 percent mAP at 50">
            <circle class="g-track" cx="60" cy="60" r="52"/>
            <circle class="g-arc" cx="60" cy="60" r="52" stroke-dasharray="${GAUGE_CIRC.toFixed(1)}" stroke-dashoffset="${GAUGE_CIRC.toFixed(1)}"/>
          </svg>
          <div class="gauge-center"><b class="count" data-to="99.5" data-dec="1">0</b><span>mAP@50</span></div>
        </div>
        <div class="outcome-grid">
          ${OUT.map(o => `
            <div class="outcome">
              <b class="count" data-to="${o.to}"${o.suffix ? ` data-suffix="${o.suffix}"` : ''}>0</b>
              <span>${o.label}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

/* Animate counters, bars, and the gauge once the overview scrolls into view. */
/* Runs each time the home view is shown, so the numbers, bars, and gauge
   replay their entrance (reset first, then animate). */
function runOverviewMotion() {
  const section = document.getElementById('overview');
  if (!section) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const arc = section.querySelector('.g-arc');
  const gaugeTarget = (GAUGE_CIRC * (1 - 0.995)).toFixed(1);

  // Reset to the pre-animation state.
  section.classList.remove('go');
  if (arc) arc.style.strokeDashoffset = GAUGE_CIRC.toFixed(1);
  section.querySelectorAll('.count').forEach(el => { el.textContent = '0'; });
  void section.offsetWidth; // force reflow so the bar/gauge transitions restart

  if (reduce) {
    section.classList.add('go');
    section.querySelectorAll('.count').forEach(setFinal);
    if (arc) arc.style.strokeDashoffset = gaugeTarget;
    return;
  }
  requestAnimationFrame(() => {
    section.classList.add('go');
    section.querySelectorAll('.count').forEach(animateCount);
    if (arc) requestAnimationFrame(() => { arc.style.strokeDashoffset = gaugeTarget; });
  });
}
function fmtCount(v, dec, suffix) {
  const n = dec ? v.toFixed(dec) : Math.round(v).toLocaleString();
  return `${n}${suffix}`;
}
function setFinal(el) {
  el.textContent = fmtCount(+el.dataset.to, +el.dataset.dec || 0, el.dataset.suffix || '');
}
function animateCount(el) {
  const to = +el.dataset.to, dec = +el.dataset.dec || 0, suffix = el.dataset.suffix || '';
  const dur = 1100, t0 = performance.now();
  const tick = (now) => {
    const p = Math.min((now - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmtCount(to * eased, dec, suffix);
    if (p < 1) requestAnimationFrame(tick); else setFinal(el);
  };
  requestAnimationFrame(tick);
}

/* =========================================================
   WORD EXPORT (delegates to report-export.js)
   ========================================================= */
function initExport() {
  document.querySelectorAll('.btn-export').forEach(btn => {
    btn.addEventListener('click', async () => {
      const kind = btn.dataset.export;
      const api = window.InternshipReport;
      if (!api || typeof api[kind] !== 'function') { console.warn('Report export unavailable'); return; }
      if (btn.classList.contains('loading')) return;
      const txt = btn.querySelector('.hx-txt b');
      const original = txt ? txt.textContent : '';
      btn.classList.add('loading');
      if (txt) txt.textContent = 'Preparing…';
      try {
        await api[kind]();
      } catch (err) {
        console.error('Export failed', err);
        if (txt) txt.textContent = 'Try again';
        setTimeout(() => { if (txt) txt.textContent = original; }, 1800);
        btn.classList.remove('loading');
        return;
      }
      if (txt) txt.textContent = 'Done ✓';
      setTimeout(() => { if (txt) txt.textContent = original; btn.classList.remove('loading'); }, 1600);
    });
  });
}

/* =========================================================
   MODAL: week + workstream detail
   ========================================================= */
function initModal() {
  const modal = document.getElementById('modal');
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open') && !document.getElementById('lightbox').classList.contains('open')) closeModal();
  });
}
function openModalShell(html) {
  const body = document.getElementById('modal-body');
  body.innerHTML = html;
  hydrateIcons(body);
  const modal = document.getElementById('modal');
  modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  body.scrollTop = 0;
  const shots = [...body.querySelectorAll('.mb-shot')];
  const coll = shots.map(s => ({ path: s.dataset.path, name: s.dataset.name, week: s.dataset.week }));
  shots.forEach((s, i) => s.addEventListener('click', () => openLightbox(coll, i)));
}
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true');
  if (!document.getElementById('lightbox').classList.contains('open')) document.body.style.overflow = '';
}

function openWeek(num) {
  const w = allWeeks.find(x => x.week === num);
  if (!w) return;
  const shots = getAssets(num), m = w.metrics || {};
  const statEntries = Object.entries(m).slice(0, 5).map(([k, v]) => ({ v, l: prettyMetric(k) }));
  const projects = (w.projectWork || []).filter(p => p && typeof p === 'object' && p.name)
    .sort((a, b) => (b.name === FEATURED) - (a.name === FEATURED));

  openModalShell(`
    <div class="mh">
      <div class="mh-kicker">Week ${w.week} · ${w.status === 'completed' ? 'Completed' : 'Upcoming'}</div>
      <h3 class="mh-title">${w.title}</h3>
      <p class="mh-focus">${w.mainFocus}</p>
      <div class="mh-tags">${w.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
    <div class="mb">
      ${statEntries.length ? `<div class="mb-stats">${statEntries.map(s => `<div class="mb-stat"><b>${s.v}</b><span>${s.l}</span></div>`).join('')}</div>` : ''}
      ${listSection('Key accomplishments', (w.accomplishments || []).filter(a => a && a !== 'To be updated.'))}
      ${projects.length ? `
        <div class="mb-sec"><h4>Project work</h4>
          <div class="mb-projects">${projects.map(p => `
            <div class="mb-proj ${p.name === FEATURED ? 'feat' : ''}">
              <h5>${p.name}${p.name === FEATURED ? '<span class="feat-badge">Main</span>' : ''}</h5>
              <ul>${p.tasks.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>`).join('')}</div>
        </div>` : ''}
      ${listSection('Technical work', (w.technicalWork || []).filter(a => a && a !== 'To be updated.'))}
      ${listSection('Deliverables', (w.deliverables || []).filter(a => a && a !== 'To be updated.'))}
      ${shots.length ? `<div class="mb-sec"><h4>Screenshots</h4>
        <div class="mb-shots">${shots.map(s => `<button class="mb-shot" data-path="${s.path}" data-name="${s.name}" data-week="${w.week}" aria-label="Enlarge ${s.name}"><img src="${enc(s.path)}" alt="${s.name}" loading="lazy"></button>`).join('')}</div></div>` : ''}
      ${w.reflection && w.reflection !== 'To be updated.' ? `<div class="mb-sec"><h4>Reflection</h4><p class="mb-quote">${w.reflection}</p></div>` : ''}
    </div>`);
}

function openWorkstream(idx) {
  const w = WORKSTREAMS[idx];
  let body;
  if (w.flat) body = listSection('Highlights', w.flat);
  else {
    const groups = aggregateProject(w.key);
    body = `<div class="mb-sec"><h4>Week by week</h4><div class="mb-projects">
      ${groups.map(g => `<div class="mb-proj"><h5>Week ${g.week}</h5><ul>${g.tasks.map(t => `<li>${t}</li>`).join('')}</ul></div>`).join('')}
    </div></div>`;
  }
  openModalShell(`
    <div class="mh">
      <div class="mh-kicker">${svg(w.icon)} Workstream · ${w.role}</div>
      <h3 class="mh-title">${w.name}</h3>
      <p class="mh-focus">${w.desc}</p>
      <div class="mh-tags">${w.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
    <div class="mb">
      <div class="mb-stats">${w.metrics.map(mt => `<div class="mb-stat"><b>${mt.n}</b><span>${mt.l}</span></div>`).join('')}</div>
      ${body}
    </div>`);
}

function listSection(title, items) {
  if (!items || !items.length) return '';
  return `<div class="mb-sec"><h4>${title}</h4><ul class="mb-list">${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
}
function prettyMetric(k) {
  const map = {
    learningHours: 'Learning hours', modulesCompleted: 'Modules', badges: 'Badges', meetingsAttended: 'Meetings',
    imagesLabeled: 'Images labeled', projectsJoined: 'Projects joined', modelPrecision: 'Precision %',
    modelRecall: 'Recall %', modelMAP50: 'mAP@50 %', presentationsGiven: 'Presentations', modelAccuracy: 'Model accuracy %',
    businessRules: 'Business rules', capstoneSubmitted: 'Capstone', detectionConfidence: 'Detection conf.', intern10: 'Intern10',
  };
  return map[k] || k.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase());
}

/* =========================================================
   LIGHTBOX
   ========================================================= */
let lbColl = [], lbIdx = 0;
function initLightbox() {
  const lb = document.getElementById('lightbox');
  lb.querySelector('[data-lb-close]').addEventListener('click', closeLightbox);
  lb.querySelector('[data-lb-prev]').addEventListener('click', () => stepLightbox(-1));
  lb.querySelector('[data-lb-next]').addEventListener('click', () => stepLightbox(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });
}
function openLightbox(coll, idx) {
  lbColl = coll; lbIdx = idx; renderLightbox();
  const lb = document.getElementById('lightbox');
  lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function renderLightbox() {
  const a = lbColl[lbIdx];
  document.getElementById('lb-img').src = enc(a.path);
  document.getElementById('lb-img').alt = a.name;
  document.getElementById('lb-caption').textContent = `${a.week ? 'Week ' + a.week + ' · ' : ''}${a.name} · ${lbIdx + 1} / ${lbColl.length}`;
}
function stepLightbox(d) { lbIdx = (lbIdx + d + lbColl.length) % lbColl.length; renderLightbox(); }
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true');
  if (!document.getElementById('modal').classList.contains('open')) document.body.style.overflow = '';
}

/* =========================================================
   NAV · ROUTER · REVEAL
   Each nav item is its own page (hash route). One view shows at a time.
   ========================================================= */
const ROUTE_VIEWS = ['home', 'work', 'journey', 'gallery', 'media'];

function initNav() {
  const nav = document.getElementById('topbar');
  const links = document.getElementById('nav-links');
  const toggle = document.getElementById('nav-toggle');
  const bar = document.getElementById('scroll-progress');

  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 16);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${h > 0 ? (y / h) * 100 : 0}%`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Reveal every .reveal inside the freshly shown view. */
function revealView(view) {
  document.querySelectorAll(`[data-view="${view}"]`).forEach(root => {
    if (root.classList.contains('reveal')) root.classList.add('in');
    root.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  });
}

function currentRoute() {
  const h = (location.hash || '').replace(/^#\/?/, '').split(/[/?#]/)[0];
  return ROUTE_VIEWS.includes(h) ? h : 'home';
}

function showView(view) {
  document.querySelectorAll('[data-view]').forEach(el => {
    const on = el.dataset.view === view;
    el.hidden = !on;
    el.classList.toggle('view-on', on);
  });
  document.querySelectorAll('[data-route]').forEach(a =>
    a.classList.toggle('active', a.dataset.route === view));
  window.scrollTo(0, 0);
  const bar = document.getElementById('scroll-progress');
  if (bar) bar.style.width = '0%';
  revealView(view);
  if (view === 'home') runOverviewMotion();
}

function initRouter() {
  window.addEventListener('hashchange', () => showView(currentRoute()));
  showView(currentRoute());
}
