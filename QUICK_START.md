# Quick Start Guide - IBM Internship Tracker

## 🚀 Launch the Website

### Fastest Method (Double-Click)
1. Navigate to the `Blog` folder
2. Double-click `index.html`
3. Your browser will open the tracker

### Best Method (Local Server)
```bash
cd /Users/rohanmalhotra/Desktop/Blog
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

---

## ✏️ Update Weekly Content (Simple 3-Step Process)

### Step 1: Open the Data File
Open `data/internshipData.js` in any text editor

### Step 2: Find Your Week
Search for `week: 4` (or whichever week you want to update)

### Step 3: Replace "To be updated." with Your Content

**Example - Before:**
```javascript
{
  week: 4,
  title: "To Be Updated",
  status: "pending",
  accomplishments: ["To be updated."],
  managerSummary: "To be updated.",
}
```

**Example - After:**
```javascript
{
  week: 4,
  title: "Advanced Oracle Training and Client Presentations",
  status: "completed",  // ← Change to "completed"
  accomplishments: [
    "Completed Oracle advanced modules",
    "Presented to client stakeholders",
    "Led team standup meetings"
  ],
  managerSummary: "During Week 4, I completed advanced Oracle training, presented project updates to client stakeholders, and took on a leadership role in daily standups.",
}
```

### Step 4: Save and Refresh
1. **Save** `internshipData.js`
2. **Refresh** your browser (or press `Cmd+R` / `Ctrl+R`)
3. See your updates instantly!

---

## 📸 Add Screenshots and Assets

### Step 1: Add Files to Folder
Copy your screenshots/PDFs to the appropriate folder:
- `Rohan/Assets Week 4/` (create folder if needed)
- `Calvin/Assets Week 4/`

### Step 2: Update Asset List
Open `script.js` and find the `getAssetsForWeek` function (~line 370).

Add your files:
```javascript
const assetMap = {
  'Rohan': {
    4: [
      { 
        name: 'screenshot.png', 
        type: 'image', 
        path: 'Rohan/Assets Week 4/screenshot.png' 
      }
    ]
  }
};
```

### Step 3: Refresh Browser
Your assets will now appear in the week's asset gallery!

---

## 🎯 Key Sections to Update Each Week

Update these fields in `data/internshipData.js`:

```javascript
{
  week: X,
  title: "Week title",                    // ← UPDATE
  status: "completed",                    // ← Change from "pending"
  tags: ["Project", "Workstream"],        // ← UPDATE
  mainFocus: "Main focus description",    // ← UPDATE
  
  accomplishments: [                      // ← ADD BULLETS
    "Bullet 1",
    "Bullet 2"
  ],
  
  meetings: [                             // ← ADD MEETINGS
    { name: "Person/Team", purpose: "Why" }
  ],
  
  training: ["Training topics"],          // ← ADD TRAINING
  
  projectWork: [                          // ← ADD PROJECT WORK
    {
      name: "Project Name",
      tasks: ["Task 1", "Task 2"]
    }
  ],
  
  technicalWork: ["Technical tasks"],     // ← ADD TECH WORK
  deliverables: ["Deliverable items"],    // ← ADD DELIVERABLES
  
  managerSummary: "2-3 sentence summary", // ← UPDATE (IMPORTANT!)
  reflection: "Your personal reflection"  // ← UPDATE
}
```

---

## 💡 Pro Tips

### ✅ DO
- Update as you go (don't wait until end of week)
- Include specific numbers and metrics
- Name projects, people, and tools explicitly
- Keep manager summaries under 4 sentences
- Add screenshots and assets regularly

### ❌ DON'T
- Use vague corporate jargon
- Leave "To be updated." in completed weeks
- Forget to change `status: "pending"` to `"completed"`
- Skip the manager summary (this is what your manager reads!)

---

## 🎨 Website Features

### Switch Between People
Click the **Rohan** or **Calvin** tabs at the top

### Toggle Views
Click **"Detailed View"** / **"Manager View"** button
- **Detailed**: Shows everything
- **Manager**: Shows only summaries (perfect for quick reviews)

### Search and Filter
- **Search bar**: Search by keyword
- **Status filter**: Show only completed or pending weeks
- **Workstream filter**: Filter by project (Oracle, DRW, MCW, Spot, etc.)

### Dark Mode
Click the 🌙 icon in the top-right corner

### Expand/Collapse Weeks
Click any week header to expand and see full details

### View Assets
Click any screenshot or document to open in a modal preview

---

## 📊 Update Total Metrics

When you complete more weeks, update the totals at the top of `data/internshipData.js`:

```javascript
totalMetrics: {
  learningHours: 105,      // ← Update total
  modulesCompleted: 186,   // ← Update total
  badgesEarned: 8,         // ← Update total
  projectsActive: 7        // ← Update total
}
```

---

## 🐛 Troubleshooting

**Assets not showing?**
- Check file paths match exactly
- Make sure folder names have correct capitalization
- Use local server instead of double-clicking HTML

**Changes not appearing?**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Check browser console for errors (F12 → Console tab)

**Week still shows "To be updated"?**
- Make sure you saved `internshipData.js`
- Check that you're editing the right week number
- Refresh browser

---

## 📁 Files You'll Edit

**Every week:**
- `data/internshipData.js` ← Main file you'll update

**When adding assets:**
- `script.js` (just the `getAssetsForWeek` function)

**Probably never:**
- `index.html`
- `styles.css`
- `README.md`

---

## 🎓 Example Update (Copy & Paste Template)

```javascript
{
  week: 4,
  title: "YOUR TITLE HERE",
  status: "completed",
  tags: ["Project1", "Project2"],
  mainFocus: "What you focused on this week",

  accomplishments: [
    "First thing you accomplished",
    "Second thing you accomplished",
    "Third thing you accomplished"
  ],

  meetings: [
    { name: "Person Name", purpose: "Meeting purpose" }
  ],

  training: [
    "Training topic or module"
  ],

  projectWork: [
    {
      name: "Project Name",
      tasks: [
        "What you did for this project"
      ]
    }
  ],

  technicalWork: [
    "Technical skill or task"
  ],

  deliverables: [
    "What you delivered this week"
  ],

  metrics: {
    learningHours: 40,
    meetingsAttended: 5
  },

  managerSummary: "During Week 4, I [main accomplishment]. I also [secondary accomplishment] and [other important thing]. Key metrics: [numbers].",

  reflection: "This week was [how it went]. I learned [what you learned]. Next week I plan to [future plans]."
}
```

---

**Need Help?** Check the full `README.md` for detailed instructions.

**Questions?** Review with your manager during weekly check-ins.

---

Last Updated: July 23, 2026
