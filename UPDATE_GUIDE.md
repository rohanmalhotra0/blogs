# Quick Update Guide

## Open the Website

Double-click `index.html` or run:
```bash
cd /Users/rohanmalhotra/Desktop/Blog
python3 -m http.server 8080
```

## Update a Week (3 Steps)

### 1. Open the data file
`data/internshipData.js`

### 2. Find your week
Search for `week: 4`

### 3. Fill in the content

```javascript
{
  week: 4,
  title: "Your Week Title",
  status: "completed",  // ← Change from "pending"
  tags: ["Project", "Tag"],
  mainFocus: "What you focused on",
  
  accomplishments: [
    "Thing you did",
    "Another thing"
  ],
  
  projectWork: [
    {
      name: "Project Name",
      tasks: ["Task 1", "Task 2"]
    }
  ]
}
```

## Add Screenshots

1. Copy files to `Rohan/Assets Week 4/`
2. Open `script.js`
3. Find `getAssets` function (~line 78)
4. Add your week:

```javascript
'rohan': {
  4: [
    { name: 'screenshot.png', path: 'Rohan/Assets Week 4/screenshot.png' }
  ]
}
```

Save and refresh browser!
