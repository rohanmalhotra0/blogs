# IBM Internship Progress Tracker

A professional, interactive website for tracking Calvin and Rohan's 9-week IBM internship progress. This dashboard provides a comprehensive view of weekly accomplishments, project work, learning, and professional development across multiple workstreams.

## Features

### Core Functionality
- **Person Switching**: Toggle between Rohan and Calvin's progress
- **9-Week Timeline**: Visual timeline with expandable weekly cards
- **Dual View Modes**: 
  - **Detailed View**: Complete information including accomplishments, meetings, training, technical work, and reflections
  - **Manager View**: Condensed view showing only manager summaries and key metrics
- **Search & Filter**: Filter weeks by status, workstream, or keyword search
- **Asset Gallery**: Displays images, screenshots, PDFs, and documents from weekly asset folders
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### Project Workstreams
- Onboarding and IBM Learn
- Oracle EPM / Oracle My Learn
- DRW AMS
- MCW Implementation
- Digital Product Engineering
- Boston Dynamics Spot
- Capstone Project
- Intern10 Deliverables

## Project Structure

```
Blog/
├── index.html              # Main HTML structure
├── styles.css              # CSS styling (IBM-inspired professional design)
├── script.js               # JavaScript functionality
├── data/
│   └── internshipData.js   # Centralized data for all weeks (UPDATE HERE)
├── Rohan/
│   ├── Assets Week 1 /     # Rohan's Week 1 assets (images, docs)
│   ├── Assets Week 2/      # Rohan's Week 2 assets
│   └── Assets Week 3/      # Rohan's Week 3 assets
├── Calvin/
│   └── [Calvin's asset folders]
└── README.md               # This file
```

## How to Run

### Option 1: Open Directly in Browser
1. Navigate to the `Blog` folder
2. Double-click `index.html`
3. The website will open in your default browser

### Option 2: Use a Local Server (Recommended)
For better asset loading and testing:

```bash
# Navigate to the Blog directory
cd /path/to/Blog

# Using Python 3
python3 -m http.server 8000

# Or using Python 2
python -m SimpleHTTPServer 8000

# Or using Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## How to Update Weekly Content

### Adding New Week Data

All weekly content is stored in `data/internshipData.js`. To update a week:

1. **Open** `data/internshipData.js`
2. **Find** the appropriate person's weeks array (Rohan or Calvin)
3. **Locate** the week object you want to update (e.g., `week: 4`)
4. **Replace** the placeholder content with actual information:

```javascript
{
  week: 4,
  title: "Your Week Title",  // UPDATE THIS
  status: "completed",       // Change from "pending" to "completed"
  tags: ["Project", "Tag"],  // UPDATE TAGS
  mainFocus: "Description of main focus this week",  // UPDATE
  
  accomplishments: [
    "First accomplishment",
    "Second accomplishment",
    // Add more as needed
  ],
  
  meetings: [
    { name: "Person Name", purpose: "Meeting purpose" },
    // Add more meetings
  ],
  
  training: [
    "Training module or topic",
    // Add more training
  ],
  
  projectWork: [
    {
      name: "Project Name",
      tasks: [
        "Task 1",
        "Task 2"
      ]
    }
  ],
  
  technicalWork: [
    "Technical skill or work item",
    // Add more
  ],
  
  deliverables: [
    "Deliverable item",
    // Add more
  ],
  
  metrics: {
    // Optional: Add numeric metrics
    learningHours: 40,
    meetingsAttended: 5
  },
  
  managerSummary: "Write a concise manager-friendly summary here.",
  
  reflection: "Your personal reflection on the week."
}
```

5. **Save** the file
6. **Refresh** the browser to see changes

### Adding Assets

To add screenshots, images, or documents for a week:

1. **Create folder** (if it doesn't exist): `Rohan/Assets Week X` or `Calvin/Assets Week X`
2. **Copy your files** into the appropriate week folder
3. **Update** the asset mapping in `script.js`:

```javascript
// Find the getAssetsForWeek function in script.js
// Add your assets to the assetMap object:

const assetMap = {
  'Rohan': {
    4: [  // Week 4 example
      { 
        name: 'screenshot.png', 
        type: 'image', 
        path: 'Rohan/Assets Week 4/screenshot.png' 
      },
      { 
        name: 'document.pdf', 
        type: 'pdf', 
        path: 'Rohan/Assets Week 4/document.pdf' 
      }
    ]
  }
};
```

4. **Refresh** the browser

### Supported Asset Types
- **Images**: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`
- **PDFs**: `.pdf`
- **Documents**: `.docx`, `.doc`, `.txt`, `.md`
- **Other files**: Will show as downloadable links

## Updating Summary Metrics

When you complete more weeks, update the total metrics in `data/internshipData.js`:

```javascript
totalMetrics: {
  learningHours: 105,      // Update as you log more hours
  modulesCompleted: 186,   // Update total modules
  badgesEarned: 8,         // Update total badges
  projectsActive: 7        // Update active project count
}
```

## Tips for Weekly Updates

### Writing Style
- Keep language **professional but natural**
- Focus on specific accomplishments, not generic statements
- Use concrete numbers and metrics when possible
- Include project names, people names, and tool names
- Avoid corporate jargon or AI-generated sounding language

### Manager Summaries
- Write 2-4 sentences maximum
- Lead with the most important accomplishment
- Include key metrics or numbers
- Mention cross-team collaboration or impact

### Good Examples
✅ "Trained a YOLO11 model achieving 99.4% precision on the Spot dataset"  
✅ "Shadowed 3 DRW AMS client meetings and documented action items"  
✅ "Completed 47 hours of IBM Think training and earned 3 Oracle badges"

### Avoid
❌ "Leveraged cutting-edge AI paradigms"  
❌ "Revolutionized enterprise transformation"  
❌ "Demonstrated unparalleled synergy"

## Keyboard Shortcuts

- **Cmd/Ctrl + K**: Focus search bar
- **Escape**: Close asset modal

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Customization

### Changing Colors
Edit CSS variables in `styles.css`:

```css
:root {
  --color-primary: #0f62fe;      /* Main blue color */
  --color-accent: #8a3ffc;       /* Purple accent */
  --color-success: #24a148;      /* Success green */
}
```

### Adding New Workstream Tags
1. Add to the workstreams list in `data/internshipData.js`
2. Add to the filter dropdown in `index.html`
3. Add filter logic in `script.js` if needed

## Troubleshooting

### Assets Not Loading
- Check that file paths in `script.js` match actual file locations
- Ensure folder names match exactly (including spaces)
- Use a local server instead of opening directly in browser

### Week Not Showing
- Check that `status` is set correctly in the data file
- Verify filters aren't hiding the week
- Clear browser cache and refresh

### Content Not Updating
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache
- Check browser console for JavaScript errors

## Future Enhancements

Possible additions for future versions:
- Export weekly update to Markdown
- Print-friendly CSS for printing tracker
- Drag-and-drop asset upload
- Auto-generate resume bullets from weekly data
- Timeline visualization with milestones
- Integration with IBM systems

## Credits

**Interns**: Rohan Malhotra & Calvin  
**IBM Internship**: Summer 2026  
**Workstreams**: Oracle EPM, DRW AMS, MCW Implementation, Digital Product Engineering, Boston Dynamics Spot, Capstone

---

**Last Updated**: July 23, 2026

**Tracker Version**: 1.2

For questions or issues, update the tracker and review with your manager during check-ins.
# blog
