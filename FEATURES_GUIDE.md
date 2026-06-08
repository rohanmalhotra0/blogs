# IBM Internship Tracker - Features Guide

## 🎯 Visual Layout Overview

```
┌─────────────────────────────────────────────────────────────┐
│  IBM Internship Progress Tracker              [☀️] [View]  │
│  Weekly progress, deliverables, learning...                 │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│  [Rohan]  [Calvin]                                          │
└─────────────────────────────────────────────────────────────┘
│                                                              │
│  Introduction paragraph explaining the tracker...            │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │     Rohan            │  │     Calvin           │        │
│  │  IBM Intern | Oracle │  │     IBM Intern       │        │
│  │                      │  │                      │        │
│  │  105  Learning Hours │  │   0  Learning Hours  │        │
│  │  186  Modules        │  │   0  Modules         │        │
│  │   8   Badges         │  │   0  Badges          │        │
│  │   5   Projects       │  │   0  Projects        │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                              │
│  Overview Metrics                                            │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                        │
│  │3/9 │ │105+│ │186+│ │ 8  │ │ 5  │                        │
│  │Wks │ │Hrs │ │Mods│ │Bdg │ │Prj │                        │
│  └────┘ └────┘ └────┘ └────┘ └────┘                        │
│                                                              │
│  Main Workstreams                                            │
│  [IBM Learn] [Oracle EPM] [DRW AMS] [MCW] [Spot] ...       │
│                                                              │
│  [Search...] [Status▼] [Workstream▼]                       │
│                                                              │
│  Rohan's 9-Week Timeline                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 33%                    │
│  3 of 9 weeks completed                                      │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Week 1  Onboarding, Self-Learning...  [Completed] ▼ │  │
│  │ Rohan focused on completing onboarding...            │  │
│  │ [Onboarding] [IBM Learn] [Intern10]                  │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Week 2  Oracle Training, DRW AMS...   [Completed] ▼ │  │
│  │ Moved from onboarding into active project work...    │  │
│  │ [Oracle] [DRW] [MCW] [Spot] [Capstone]              │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Week 3  YOLO Model Training...        [Completed] ▼ │  │
│  │ Trained YOLO model, documented repo, shadowed...     │  │
│  │ [YOLO] [ML] [DRW] [MCW] [RAG]                       │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Week 4  To Be Updated                [Pending] ▼    │  │
│  │ To be updated.                                        │  │
│  │ [To Be Updated]                                       │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ... (Weeks 5-9 similar structure)                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔍 Expanded Week View

When you click a week header, it expands to show:

```
┌──────────────────────────────────────────────────────────┐
│ Week 3  YOLO Model Training, DRW...   [Completed] ▲     │
│ Trained YOLO model, documented repo...                   │
│ [YOLO] [ML] [DRW] [MCW] [RAG]                           │
├──────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────┐  │
│ │ 📊 MANAGER SUMMARY                                  │  │
│ │ During Week 3, Rohan made significant technical    │  │
│ │ and project progress. He trained a YOLO model...   │  │
│ └────────────────────────────────────────────────────┘  │
│                                                          │
│ Key Accomplishments                                      │
│ • Continued completing Oracle and IBM training          │
│ • Trained a YOLO ML model based on LabelImg XML data    │
│ • Organized the GitHub repo                             │
│ • Created documentation on how to use the data          │
│ • Added fine-tuning for the ML model                    │
│ • Started documenting different error rates             │
│ ... (more bullets)                                       │
│                                                          │
│ Meetings                                                 │
│ • Summer and Tono — Spot progress review (2 meetings)  │
│ • PM John — DRW AMS check-in                           │
│ • PM John — Intern10 elevator pitch presentation       │
│ ... (more meetings)                                      │
│                                                          │
│ Training & Learning                                      │
│ • Continued Oracle and IBM training modules             │
│ • YOLO model training techniques                        │
│ • Model fine-tuning methods                             │
│ ... (more training)                                      │
│                                                          │
│ Project Work                                             │
│ ┌─────────────────────┐ ┌─────────────────────┐        │
│ │ Boston Dynamics Spot│ │ DRW AMS             │        │
│ │ → Trained YOLO11    │ │ → Shadowed meetings │        │
│ │ → Achieved 99.4%    │ │ → Presented pitch   │        │
│ │ → Organized repo    │ │ → Recorded feedback │        │
│ └─────────────────────┘ └─────────────────────┘        │
│ ┌─────────────────────┐ ┌─────────────────────┐        │
│ │ MCW Implementation  │ │ Capstone            │        │
│ │ → Daily standups    │ │ → RAG architecture  │        │
│ │ → Reviewed terms    │ │ → Built MVP demo    │        │
│ └─────────────────────┘ └─────────────────────┘        │
│                                                          │
│ Technical Work                                           │
│ • YOLO11 object detection model training                │
│ • Computer vision dataset preparation                   │
│ • Pascal VOC XML to YOLO format conversion              │
│ ... (more technical work)                                │
│                                                          │
│ Deliverables                                             │
│ • Trained YOLO11 model with ~99% accuracy metrics       │
│ • GitHub repo documentation for Spot ML                 │
│ • Dataset usage documentation                           │
│ ... (more deliverables)                                  │
│                                                          │
│ Week Metrics                                             │
│ ┌────────┐ ┌────────┐ ┌────────┐                       │
│ │  99.4  │ │  99.4  │ │  99.5  │                       │
│ │ Precis.│ │ Recall │ │ mAP50  │                       │
│ └────────┘ └────────┘ └────────┘                       │
│                                                          │
│ Assets                                                   │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐               │
│ │[IMG]│ │[IMG]│ │[IMG]│ │[IMG]│ │[IMG]│               │
│ │10:35│ │10:36│ │10:36│ │resul│ │val  │               │
│ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘               │
│                                                          │
│ Reflection                                               │
│ Week 3 was one of the most technical and active weeks   │
│ so far. I moved deeper into Boston Dynamics Spot work   │
│ by training a YOLO model...                              │
└──────────────────────────────────────────────────────────┘
```

---

## 🎛️ Interactive Features

### 1. Person Tabs
```
[Rohan]  [Calvin]
  ▲
  │
  └─ Click to switch between people
     Active tab is highlighted in blue
```

### 2. Theme Toggle
```
☀️ ← Click to toggle between light/dark mode
🌙    Theme preference is saved in browser
```

### 3. View Toggle
```
[Detailed View]  ← Click to toggle
     ↓
[Manager View]   ← Shows only summaries, hides details
```

### 4. Search Bar
```
[Search by keyword, project, or workstream...    ]
          ↑
          └─ Type "YOLO" → Shows only weeks mentioning YOLO
             Type "Oracle" → Shows only Oracle-related weeks
             Type "meeting" → Shows weeks with meetings
```

### 5. Filter Dropdowns
```
[All Weeks ▼]           [All Workstreams ▼]
     ↓                         ↓
[Completed]               [Oracle      ]
[To Be Updated]           [DRW AMS     ]
                          [MCW         ]
                          [Spot        ]
                          [Capstone    ]
                          [Intern10    ]
                          [Training    ]
```

### 6. Week Expansion
```
Week 3  YOLO Model Training...  [Completed] ▼
          ↑                                  ↓
          │                                  │
          └─ Click header to expand/collapse
```

### 7. Asset Gallery
```
[Screenshot 1]  [Screenshot 2]  [Results.png]
       ↓
       └─ Click image → Opens in full-screen modal
          Click PDF → Opens embedded viewer
          Click document → Downloads file
```

### 8. Workstream Tags
```
[Onboarding] [Oracle EPM] [DRW AMS] [MCW]
                  ↓
                  └─ Click tag → Filters timeline to that workstream
```

---

## 📱 Responsive Views

### Desktop (1200px+)
- Multi-column layout
- Side-by-side profile cards
- 5-column metrics grid
- Full-width timeline
- Asset gallery shows 4-5 items per row

### Tablet (768px-1199px)
- 2-column layout
- Stacked sections
- 3-column metrics grid
- Adjusted spacing
- Asset gallery shows 3-4 items per row

### Mobile (<768px)
- Single column
- Vertical tabs
- 2-column metrics grid
- Touch-optimized buttons
- Asset gallery shows 2-3 items per row

---

## 🎨 Color Scheme

### Light Theme
- Background: White (#ffffff)
- Cards: White with subtle border
- Text: Dark gray (#161616)
- Primary: IBM Blue (#0f62fe)
- Accent: Purple (#8a3ffc)

### Dark Theme
- Background: Dark gray (#161616)
- Cards: Medium gray (#262626)
- Text: Light gray (#f4f4f4)
- Primary: IBM Blue (#0f62fe)
- Accent: Purple (#8a3ffc)

---

## 🖱️ User Interactions

### Click Actions
| Element | Action |
|---------|--------|
| Person tab | Switch to that person's data |
| Theme icon | Toggle light/dark mode |
| View button | Toggle detailed/manager view |
| Week header | Expand/collapse week details |
| Asset image | Open in modal preview |
| Workstream tag | Filter timeline by workstream |
| Modal backdrop | Close modal |
| Close button | Close modal |

### Keyboard Shortcuts
| Keys | Action |
|------|--------|
| `Cmd/Ctrl + K` | Focus search bar |
| `Escape` | Close modal |

---

## 📊 Data Display Patterns

### Manager Summary Box
```
┌────────────────────────────────────────┐
│ 📊 MANAGER SUMMARY                     │
│ ────────────────────────────────────── │
│ 2-4 sentence executive summary         │
│ highlighting key accomplishments,      │
│ metrics, and cross-team work.          │
└────────────────────────────────────────┘
```
- Blue left border
- Gray background
- Uppercase label
- Concise content

### Bullet Lists
```
Key Accomplishments
• Accomplishment with important details
• Another accomplishment with metrics
• Third accomplishment mentioning project
```
- Custom blue bullet points
- Indented text
- Secondary text color
- Good spacing

### Project Cards
```
┌─────────────────────────┐
│ Project Name            │
│ ─────────────────────── │
│ → Task 1                │
│ → Task 2                │
│ → Task 3                │
└─────────────────────────┘
```
- Grouped by project
- Arrow bullets
- Grid layout (responsive)

### Metric Cards
```
┌────────┐
│  99.4  │ ← Large number in blue
│ Metric │ ← Small label
└────────┘
```
- Centered text
- Blue numbers
- Gray labels
- Hover effect

---

## 🎯 Manager View vs Detailed View

### Manager View Shows:
- ✅ Manager summary (highlighted)
- ✅ Week metrics
- ✅ Asset gallery
- ❌ Accomplishments
- ❌ Meetings
- ❌ Training
- ❌ Project work details
- ❌ Technical work
- ❌ Deliverables
- ❌ Reflection

### Detailed View Shows:
- ✅ Everything above PLUS
- ✅ Complete accomplishments list
- ✅ All meetings with purposes
- ✅ Training topics
- ✅ Detailed project work
- ✅ Technical skills used
- ✅ All deliverables
- ✅ Personal reflection

---

## 🔄 Dynamic Updates

### Progress Bar
- Automatically calculates completion %
- Updates when weeks change status
- Smooth animation on load
- Shows "X of 9 weeks completed"

### Metric Cards
- Pulls from person's totalMetrics
- Updates when switching people
- Shows cumulative counts
- Highlights in blue

### Week Cards
- Filtered by search query
- Filtered by status dropdown
- Filtered by workstream dropdown
- Hidden weeks maintain structure

### Asset Gallery
- Loads images from asset folders
- Auto-generates captions from filenames
- Lazy loads images for performance
- Modal preview for full-size

---

## 🎭 Visual Feedback

### Hover Effects
- Buttons: Change color, slight scale
- Cards: Lift with shadow
- Week headers: Blue background
- Tags: Blue highlight
- Assets: Scale up, shadow

### Active States
- Selected tab: Blue background
- Expanded week: Rotated arrow icon
- Focused inputs: Blue border glow
- Modal: Blurred backdrop

### Status Badges
```
[Completed] ← Green background
[Pending]   ← Gray background
```

---

## 📐 Spacing & Layout

### Consistent Spacing System
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)

### Border Radius
- Small: 4px (tags, badges)
- Medium: 8px (buttons, inputs)
- Large: 12px (cards, modals)

### Typography Scale
- Page title: 2rem (32px)
- Section title: 1.5rem (24px)
- Week title: 1.125rem (18px)
- Body text: 1rem (16px)
- Small text: 0.875rem (14px)
- Tiny text: 0.75rem (12px)

---

## 🖼️ Asset Display Types

### Image Assets
```
┌─────────────┐
│   [IMAGE]   │ ← Thumbnail preview
├─────────────┤
│ Caption     │ ← Auto-generated from filename
└─────────────┘
```

### PDF Assets
```
┌─────────────┐
│      📄     │ ← PDF icon
├─────────────┤
│ PDF: Name   │ ← Label and caption
└─────────────┘
```

### Document Assets
```
┌─────────────┐
│      📝     │ ← Document icon
├─────────────┤
│ Doc: Name   │ ← Label and caption
└─────────────┘
```

### Other Files
```
┌─────────────┐
│      📎     │ ← Generic file icon
├─────────────┤
│ Filename    │ ← Caption
└─────────────┘
```

---

## 🎬 Modal Preview

### Image Modal
```
┌────────────────────────────────────────────┐
│                                        [×] │
│                                            │
│         [FULL SIZE IMAGE PREVIEW]          │
│                                            │
│                                            │
└────────────────────────────────────────────┘
```

### PDF Modal
```
┌────────────────────────────────────────────┐
│                                        [×] │
│  ┌────────────────────────────────────┐   │
│  │  [EMBEDDED PDF VIEWER]             │   │
│  │                                    │   │
│  │  (PDF rendered inline)             │   │
│  └────────────────────────────────────┘   │
│  [Open in new tab]                        │
└────────────────────────────────────────────┘
```

---

## 💡 Pro Tips for Users

### Navigation
1. Use search bar for quick keyword lookup
2. Click workstream tags to filter instantly
3. Use Cmd+K shortcut to focus search
4. Toggle Manager View for quick reviews

### Content Updates
1. Keep manager summaries under 4 sentences
2. Use concrete numbers and metrics
3. Name people, projects, and tools explicitly
4. Update assets as you go, don't batch

### Presentation
1. Use Manager View when presenting to leadership
2. Expand specific weeks to show detail
3. Click assets to show full-size screenshots
4. Use dark mode for presentations in dark rooms

---

## 🎉 Best Practices

### For Weekly Updates
- ✅ Update data file immediately after week ends
- ✅ Add screenshots while they're fresh
- ✅ Write manager summary first (guides rest)
- ✅ Be specific with accomplishments

### For Asset Management
- ✅ Name files descriptively
- ✅ Keep screenshots clean and professional
- ✅ Organize by week immediately
- ✅ Update asset list in script.js

### For Manager Reviews
- ✅ Use Manager View for quick overview
- ✅ Expand weeks with key achievements
- ✅ Show asset gallery for deliverables
- ✅ Use search to find specific topics

---

**This guide covers all interactive features and visual elements of the IBM Internship Tracker website.**

For technical details, see `README.md`  
For quick updates, see `QUICK_START.md`  
For complete overview, see `WEBSITE_SUMMARY.md`
