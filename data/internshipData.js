// IBM Internship Progress Tracker Data
// This file contains all weekly progress data for Rohan and Calvin
// To update: Add content to the appropriate week object

const internshipData = {
  metadata: {
    title: "IBM Internship Progress Tracker",
    subtitle: "Weekly progress, deliverables, learning, and project work across the 9-week internship",
    description: "This tracker documents Calvin and Rohan's weekly progress, accomplishments, and learning throughout their IBM internship.",
    totalWeeks: 9,
    workstreams: [
      "Onboarding and IBM Learn",
      "Oracle EPM / Oracle My Learn",
      "DRW AMS",
      "MCW Implementation",
      "Digital Product Engineering",
      "Boston Dynamics Spot",
      "Capstone Project",
      "Intern10 Deliverables",
      "EPM Wizard Product Engineering",
      "GL and Spreadsheet Integration",
      "Chrome Extension and Browser Agent"
    ]
  },

  people: [
    {
      id: "rohan",
      name: "Rohan",
      role: "IBM Intern | Oracle EPM | Digital Product Engineering",
      totalMetrics: {
        learningHours: 57,
        modulesCompleted: 186,
        badgesEarned: 8,
        projectsActive: 7
      },
      weeks: [
        {
          week: 1,
          title: "Onboarding, Self-Learning, Networking, and Initial Interviews",
          status: "completed",
          tags: ["Onboarding", "IBM Learn", "Intern10", "Networking"],
          mainFocus: "I focused on completing onboarding, finishing my IBM learning, attending meetings and trainings, and completing my Intern10 networking interviews.",

          accomplishments: [
            "Finished all onboarding requirements",
            "Took manager's advice to learn independently",
            "Spent the weekend going through IBM Learn",
            "Completed 57 total hours of learning",
            "Completed 186 modules total",
            "Earned 5 badges and certifications",
            "Attended all meetings and trainings",
            "Met with buddy, PM, and manager",
            "Finished all networking interviews for Intern10",
            "Met with Neil Kaufman for interview",
            "Met with Karla McMillan for interview",
            "Met with Summer Gerhart for interview"
          ],

          meetings: [
            { name: "Buddy", purpose: "Onboarding support" },
            { name: "Project Manager", purpose: "Project overview" },
            { name: "Manager", purpose: "Check-in and guidance" },
            { name: "Neil Kaufman", purpose: "Networking interview" },
            { name: "Karla McMillan", purpose: "Networking interview" },
            { name: "Summer Gerhart", purpose: "Networking interview" }
          ],

          training: [
            "All onboarding modules",
            "Additional IBM Learn modules beyond minimum requirements",
            "IBM internal learning platforms",
            "Self-paced training resources"
          ],

          projectWork: [
            "Started understanding IBM Consulting structure",
            "Began learning Oracle EPM basics",
            "Started organizing Intern10 documentation"
          ],

          technicalWork: [],

          deliverables: [
            "Completed all Intern10 networking interviews",
            "Organized notes from interviews",
            "Started weekly progress documentation"
          ],

          metrics: {
            learningHours: 57,
            modulesCompleted: 186,
            badges: 5,
            meetingsAttended: 6
          },

          managerSummary: "During Week 1, Rohan completed onboarding and went beyond the required learning by spending additional time on IBM Learn. He completed 57 hours of learning, 186 modules, and earned 5 badges/certifications. He also completed Intern10 networking interviews and met with his buddy, PM, manager, and IBM professionals including Neil Kaufman, Karla McMillan, and Summer Gerhart.",

          reflection: "Week 1 was focused on building a strong base for the internship. I completed all onboarding requirements, but I also went beyond the required work by completing many IBM Learn modules on my own. Meeting with my buddy, PM, manager, and interview contacts helped me better understand how IBM Consulting is structured and how I should approach the internship. This week helped me build momentum and gave me a clearer sense of the learning, networking, and project expectations ahead.",

          assets: [
            // Assets will be loaded dynamically from Rohan/Assets Week 1 folder
          ]
        },

        {
          week: 2,
          title: "Oracle Training, DRW AMS, MCW Implementation, Spot, and Capstone Leadership",
          status: "completed",
          tags: ["Oracle", "DRW AMS", "MCW", "Boston Dynamics", "Capstone", "Intern10"],
          mainFocus: "I moved from onboarding into active project work: starting Intern10 project documentation, completing Oracle and IBM training, joining the DRW AMS and MCW Implementation workstreams, beginning Boston Dynamics Spot ML work, and taking a leadership role on the capstone project.",

          accomplishments: [
            "Met with buddy, PM, and manager",
            "Started project work for Intern10 and began documenting tasks",
            "Finished all Oracle training",
            "Earned 3 Oracle My Learn badges",
            "Finished all IBM trainings, including self-paced training",
            "Recorded 47 total hours for IBM Think",
            "Started DRW AMS onboarding",
            "Started MCW Implementation onboarding",
            "Finished EPM elevator pitch",
            "Finished EPM meeting presentation",
            "Finished All Hands review",
            "Finished Intern10 modules for client call shadowing",
            "Finished client call shadowing notes",
            "Finished client call task shadowing notes",
            "Finished exposure to a design notes",
            "Set up VS Code environment",
            "Labeled 898 images to train Spot on the dog toy",
            "Set up a GitHub repo for version control on Spot ML training",
            "Took main leadership role for capstone project"
          ],

          meetings: [
            { name: "Buddy, PM, Manager", purpose: "Regular check-ins" },
            { name: "DRW AMS Team", purpose: "Project onboarding" },
            { name: "DRW PM", purpose: "Project overview" },
            { name: "MCW Team", purpose: "Implementation onboarding" },
            { name: "Rahul and Calvin", purpose: "Recording task and presentation" },
            { name: "Parker (Calvin's mentor)", purpose: "Q&A session on MCW process" },
            { name: "Summer and Tono", purpose: "Spot onboarding" },
            { name: "Tono Nogueras", purpose: "Interview" }
          ],

          training: [
            "All Oracle training modules",
            "IBM self-paced training (47 hours for IBM Think)",
            "Oracle ERP and EPM concepts",
            "LabelImg for image annotation",
            "YOLO concepts for computer vision",
            "Boston Dynamics Spot capabilities",
            "IBM Digital Product Engineering module"
          ],

          projectWork: [
            {
              name: "DRW AMS",
              tasks: [
                "Met with DRW AMS team for onboarding",
                "Self-learning about DRW and Oracle ERP/EPM usage",
                "Assigned Intern10 tasks",
                "Continued task documentation"
              ]
            },
            {
              name: "MCW Implementation",
              tasks: [
                "Worked with Calvin to create notes on MCW process",
                "Created questions about the process",
                "Built flow chart of total process",
                "Documented vocabulary terms",
                "Organized work into PDF",
                "Met with Parker to clarify questions"
              ]
            },
            {
              name: "Boston Dynamics Spot",
              tasks: [
                "Set up VS Code environment",
                "Labeled 898 images",
                "Set up GitHub repo for version control",
                "Learned LabelImg and YOLO"
              ]
            },
            {
              name: "Capstone",
              tasks: [
                "Took main leadership role",
                "Came up with capstone idea",
                "Led team meeting discussion",
                "Created action items for each consultant",
                "Explained technical terms to team",
                "Started demo work with Calvin",
                "Created shared documentation"
              ]
            }
          ],

          technicalWork: [
            "VS Code environment setup",
            "GitHub repository setup and version control",
            "Image labeling with LabelImg (898 images)",
            "Computer vision dataset preparation",
            "YOLO object detection research"
          ],

          deliverables: [
            "EPM elevator pitch",
            "EPM meeting presentation",
            "All Hands review",
            "Client call shadowing notes",
            "Client call task shadowing notes",
            "Exposure to design notes",
            "MCW process notes and flow chart (PDF)",
            "Capstone project documentation"
          ],

          metrics: {
            learningHours: 47,
            badges: 3,
            imagesLabeled: 898,
            meetingsAttended: 8,
            projectsJoined: 3
          },

          managerSummary: "During Week 2, Rohan began contributing across several workstreams. He completed Oracle training, earned 3 Oracle badges, and finished IBM self-paced training. He joined DRW AMS and MCW Implementation onboarding, completed multiple Intern10 deliverables, and began Digital Product Engineering work with Boston Dynamics Spot. He labeled 898 images for computer vision training, set up a GitHub repo, and took a leadership role in the capstone project.",

          reflection: "Week 2 was a major step forward because I moved from onboarding into real project exposure. I completed Oracle and IBM training, joined DRW and MCW project work, started Boston Dynamics Spot development, and took leadership on the capstone. I also began documenting my work more carefully for Intern10. This week helped me see how my internship connects across multiple areas: Oracle EPM, managed services, implementation work, Digital Product Engineering, robotics, machine learning, and consulting leadership.",

          assets: []
        },

        {
          week: 3,
          title: "YOLO Model Training, DRW Shadowing, MCW Meetings, and Capstone MVP",
          status: "completed",
          tags: ["YOLO", "ML Training", "DRW AMS", "MCW", "Capstone", "RAG"],
          mainFocus: "I continued training and moved deeper into technical execution: training a YOLO model, documenting the Spot ML repo, shadowing DRW meetings, joining MCW standups, and building the first version of the capstone demo.",

          accomplishments: [
            "Continued completing Oracle and IBM training modules",
            "Trained a YOLO ML model based on LabelImg XML data",
            "Organized the GitHub repo",
            "Created documentation on how to use the data",
            "Added fine-tuning for the ML model",
            "Started documenting different error rates",
            "Met with Summer and Tono two times",
            "Shadowed DRW meetings",
            "Met with PM John",
            "Presented EPM elevator pitch for Intern10 to PM John",
            "Presented meeting presentation for Intern10 to PM John",
            "Recorded feedback and learning",
            "Took notes on meetings and summarized action steps",
            "Continued learning about DRW and ticket management",
            "Joined all MCW daily standups and all-hands meetings",
            "Continued reviewing accounting terms",
            "Wrote out architecture for RAG implementation with ICA",
            "Started building demo RAG/skills for ICA",
            "Researched Google tokenization for RAG",
            "Created a GitHub repo for the capstone",
            "Created protocol for merging code",
            "Created Obsidian-like RAG and consistent documentation",
            "Started work on presentation",
            "Coded an MVP of the demo"
          ],

          meetings: [
            { name: "Summer and Tono", purpose: "Spot progress review (2 meetings)" },
            { name: "PM John", purpose: "DRW AMS check-in" },
            { name: "PM John", purpose: "Intern10 elevator pitch presentation" },
            { name: "PM John", purpose: "Intern10 meeting presentation" },
            { name: "DRW Team", purpose: "Meeting shadowing" },
            { name: "MCW Team", purpose: "Daily standups and all-hands" }
          ],

          training: [
            "Continued Oracle and IBM training modules",
            "YOLO model training techniques",
            "Model fine-tuning methods",
            "Error rate analysis",
            "DRW ticket management processes",
            "MCW accounting terminology"
          ],

          projectWork: [
            {
              name: "Boston Dynamics Spot",
              tasks: [
                "Trained YOLO11 model using labeled XML data",
                "Achieved ~99.4% Precision, ~99.4% Recall, ~99.5% mAP50",
                "Organized computer vision repo",
                "Added documentation for dataset usage",
                "Started fine-tuning",
                "Started error-rate tracking",
                "Conducted inference testing"
              ]
            },
            {
              name: "DRW AMS",
              tasks: [
                "Shadowed meetings",
                "Presented Intern10 elevator pitch",
                "Presented Intern10 meeting presentation",
                "Recorded feedback",
                "Summarized action items",
                "Continued learning ticket management"
              ]
            },
            {
              name: "MCW Implementation",
              tasks: [
                "Joined daily standups and all-hands meetings",
                "Reviewed accounting vocabulary",
                "Tracked action items and meeting references",
                "Built context around implementation work"
              ]
            },
            {
              name: "Capstone",
              tasks: [
                "Designed RAG architecture with ICA",
                "Built demo RAG/skills",
                "Researched tokenization",
                "Created GitHub repo",
                "Created merge protocol",
                "Built Obsidian-like documentation structure",
                "Started presentation",
                "Coded MVP demo"
              ]
            }
          ],

          technicalWork: [
            "YOLO11 object detection model training",
            "Computer vision dataset preparation",
            "Pascal VOC XML to YOLO format conversion",
            "Train/validation dataset splitting",
            "Hyperparameter tuning",
            "Model evaluation (Precision, Recall, mAP50, mAP50-95)",
            "Inference testing on unseen images",
            "GitHub repository organization",
            "Dataset versioning",
            "RAG architecture design",
            "ICA-based demo development",
            "Google tokenization research",
            "Code merge protocol design",
            "Obsidian-style knowledge organization",
            "MVP development"
          ],

          deliverables: [
            "Trained YOLO11 model with ~99% accuracy metrics",
            "GitHub repo documentation for Spot ML",
            "Dataset usage documentation",
            "Intern10 elevator pitch (presented to PM John)",
            "Intern10 meeting presentation (presented to PM John)",
            "DRW meeting notes and action items",
            "MCW meeting notes and references",
            "RAG architecture documentation",
            "Capstone GitHub repo with merge protocol",
            "Capstone MVP demo",
            "Capstone presentation draft"
          ],

          metrics: {
            modelPrecision: 99.4,
            modelRecall: 99.4,
            modelMAP50: 99.5,
            meetingsAttended: 10,
            presentationsGiven: 2
          },

          managerSummary: "During Week 3, Rohan made significant technical and project progress. He trained a YOLO model from the labeled Spot dataset, organized the GitHub repo, documented the dataset, and began fine-tuning/error tracking. The model achieved approximately 99.4% Precision, 99.4% Recall, and 99.5% mAP50 on the validation dataset. He also shadowed DRW meetings, presented Intern10 deliverables to PM John, joined MCW meetings, and led capstone development by creating a RAG architecture, GitHub workflow, documentation system, and MVP demo.",

          reflection: "Week 3 was one of the most technical and active weeks so far. I moved deeper into Boston Dynamics Spot work by training a YOLO model, organizing the repository, documenting data usage, and beginning error-rate tracking. I also shadowed DRW meetings, presented Intern10 deliverables to my PM, continued MCW implementation meetings, and made major progress on the capstone. The capstone work became more concrete through RAG architecture, a GitHub repository, documentation structure, and an MVP demo. This week helped me connect technical execution with consulting communication and team leadership.",

          assets: []
        },

        {
          week: 4,
          title: "MCW Business Rules, Spot Integration, and Capstone Leadership",
          status: "completed",
          tags: ["DRW AMS", "MCW", "Boston Dynamics", "Capstone", "Oracle EPM", "Groovy"],
          mainFocus: "I expanded across both Oracle Managed Services and Implementation work: building multiple Oracle EPM business rules for MCW, completing YOLO testing and full Spot integration, and continuing to lead the capstone project.",

          accomplishments: [
            "Completed the Intern10 Situational Role Play reflection and documented key takeaways",
            "Attended an informational session on Oracle AI Agents",
            "Continued developing and refining Intern10 presentations",
            "Met with AMS mentor to learn Oracle EPM Managed Services and ticket management",
            "Met with Project Manager for progress review and performance feedback",
            "Developed second Oracle EPM Business Rule (rolling 13-day forecast)",
            "Implemented prior-month and current-day forecasting logic",
            "Created first report for the Predictive Cash Flow model",
            "Completed YOLO model testing with ~99% detection accuracy",
            "Completed full Boston Dynamics Spot integration",
            "Implemented Spot movement controls, safety features, and emergency kill-switch",
            "Developed a custom dance routine for Spot using the Boston Dynamics SDK",
            "Established and tested a gRPC server connection with the robot",
            "Integrated YOLO model with Spot using multithreaded architecture and lock-free queue",
            "Led a technical tutoring session on how IBM ICA works internally",
            "Integrated IBM Granite models into the Nexus platform",
            "Implemented text-to-speech and speech-to-text functionality",
            "Added cross-model support to ICA and optimized with multithreading"
          ],

          meetings: [
            { name: "AMS Mentor", purpose: "Oracle EPM Managed Services and ticket management" },
            { name: "Project Manager", purpose: "Progress review and performance feedback" },
            { name: "Parker", purpose: "Daily business rule and reporting reviews" },
            { name: "Pedro and Project Team", purpose: "MCW daily implementation and all-hands" },
            { name: "Capstone Mentor", purpose: "Project progress review and technical feedback" },
            { name: "Capstone Team", purpose: "All-hands milestone and planning meetings" }
          ],

          training: [
            "Oracle AI Agents informational session",
            "Oracle EPM Managed Services and ticket management",
            "Oracle ERP Financials and core financial business processes",
            "Oracle Planning Business Rules, Groovy scripting, and calculation scripts",
            "Oracle Planning Forms, Dimensions, and metadata structure",
            "Boston Dynamics Spot SDK and gRPC communication"
          ],

          projectWork: [
            {
              name: "DRW AMS",
              tasks: [
                "Completed Intern10 Situational Role Play reflection",
                "Met with AMS mentor on EPM Managed Services and ticket management",
                "Met with PM for progress review and feedback",
                "Expanded understanding of AMS operations and support processes"
              ]
            },
            {
              name: "MCW Implementation",
              tasks: [
                "Developed second Oracle EPM Business Rule",
                "Implemented rolling 13-day forecast business rule",
                "Implemented prior-month and current-day forecasting logic",
                "Created first report for the Predictive Cash Flow model",
                "Met daily with Parker to review business rule logic and reporting",
                "Participated in daily implementation meetings with Pedro and team"
              ]
            },
            {
              name: "Boston Dynamics Spot",
              tasks: [
                "Completed YOLO model testing (~99% detection accuracy)",
                "Transitioned from model development into full Spot integration",
                "Implemented movement controls, safety features, and kill-switch",
                "Developed a custom dance routine using the Spot SDK",
                "Established and tested a gRPC server connection",
                "Integrated YOLO with Spot via multithreaded, lock-free queue architecture",
                "Began a technical presentation for IBM Dev Club"
              ]
            },
            {
              name: "Capstone",
              tasks: [
                "Met with capstone mentor for progress review and feedback",
                "Led a technical tutoring session on IBM ICA internals",
                "Continued as Team Lead organizing meetings and action items",
                "Integrated IBM Granite models into the Nexus platform",
                "Implemented text-to-speech and speech-to-text functionality",
                "Added cross-model support to ICA",
                "Optimized the application with multithreading to reduce latency"
              ]
            }
          ],

          technicalWork: [
            "Oracle EPM business rules (rolling 13-day, prior-month, current-day forecasting)",
            "Groovy scripting and calculation scripts",
            "Oracle Planning Forms and Dimensions",
            "Predictive Cash Flow model reporting",
            "YOLO object detection testing (~99% accuracy)",
            "Boston Dynamics Spot SDK integration",
            "gRPC server connection",
            "Multithreaded inference with lock-free queue",
            "IBM Granite model integration",
            "Text-to-speech and speech-to-text implementation",
            "Cross-model ICA support and RAG refinement"
          ],

          deliverables: [
            "Intern10 Situational Role Play reflection",
            "Refined Intern10 presentations",
            "Second Oracle EPM Business Rule (rolling 13-day forecast)",
            "Prior-month and current-day forecasting logic",
            "First Predictive Cash Flow model report",
            "Tested YOLO model integrated with Spot",
            "Spot movement, safety, kill-switch, and dance routine",
            "gRPC server connection for Spot",
            "IBM Dev Club presentation (in progress)",
            "Nexus platform with Granite, TTS/STT, and cross-model ICA support"
          ],

          metrics: {
            modelAccuracy: 99,
            businessRules: 2,
            meetingsAttended: 7
          },

          managerSummary: "During Week 4, Rohan broadened his impact across both Oracle Managed Services and Implementation. He met with his AMS mentor and PM to deepen his understanding of Oracle EPM Managed Services and ticket management. On MCW, he developed multiple Oracle EPM business rules including a rolling 13-day forecast and built the first Predictive Cash Flow report. He completed YOLO model testing at ~99% accuracy and fully integrated the model with Boston Dynamics Spot, adding movement controls, safety features, a kill-switch, a dance routine, and a gRPC connection with a multithreaded inference pipeline. He continued leading the capstone, integrating IBM Granite models, TTS/STT, and cross-model support into the Nexus platform.",

          reflection: "Week 4 stretched me across more areas than any previous week. I deepened my understanding of Oracle EPM Managed Services and ticket management, while on MCW I went deeper into Oracle EPM by building real business rules and my first Predictive Cash Flow report. On the technical side, I finished testing the YOLO model and fully integrated it with Spot, including movement controls, safety features, a kill-switch, a dance routine, and a gRPC connection with a multithreaded, lock-free inference pipeline. I also kept leading the capstone, integrating Granite models, speech features, and cross-model support into Nexus. This week showed me how Oracle consulting, managed services, machine learning, and team leadership all come together.",

          assets: []
        },

        {
          week: 5,
          title: "MCW EPM AI Agent, SOFR Business Rules, DRW Presentation, and Capstone Delivery",
          status: "completed",
          tags: ["MCW", "Oracle EPM", "AI Agent", "Groovy", "DRW AMS", "Boston Dynamics", "Capstone"],
          mainFocus: "I went deeper into MCW Implementation, building EPM dashboards, a new SOFR loan business rule, and architecting an Oracle EPM AI agent chat platform. I also delivered an Oracle EPM presentation for DRW AMS, advanced the Boston Dynamics Spot integration, and completed and submitted the IBM Capstone a week early.",

          accomplishments: [
            "Continued building Predictive Cash Forecasting (PCF) dashboards to understand reporting structure and forecasting workflows",
            "Developed a new Oracle EPM business rule for SOFR loan percentage population logic",
            "Architected a chat interface platform for an Oracle EPM AI agent to improve productivity and user guidance",
            "Connected ICA API keys to the AI agent for secure, private, and controlled data usage",
            "Added major platform capabilities: Skills, Bookmarks, Projects, confidence indicators, customizable agents, MCP support, and file attachments",
            "Began creating a desktop Oracle EPM application and deployed the platform locally with thorough testing",
            "Delivered an Oracle EPM presentation to John and revised the deck based on feedback for executive readability",
            "Researched Oracle EPM implementation cost, timeline, and pros/cons to support client decision criteria",
            "Continued the final Spot dance routine and troubleshot gRPC server and robot connection issues",
            "Added text-to-speech and speech-to-text to the IBM Nexus capstone demo",
            "Completed and submitted the final IBM Capstone presentation and video one week early",
            "Researched the Functional Consultant Pyramid Speaking Framework to improve client-facing communication"
          ],

          meetings: [
            { name: "Parker", purpose: "Daily Oracle EPM curriculum, Planning, and business rule reviews" },
            { name: "MCW Project Team", purpose: "Daily standups and implementation progress tracking" },
            { name: "John", purpose: "Oracle EPM presentation delivery and feedback" },
            { name: "Rahul", purpose: "IDE setup and local testing support" },
            { name: "Capstone Mentor", purpose: "Final presentation coordination and review" },
            { name: "Capstone Team", purpose: "Final presentation prep and submission planning" }
          ],

          training: [
            "Functional Consultant Pyramid Speaking Framework",
            "Oracle EPM security, user/group access, and read/write permissions",
            "Groovy documentation for business rule development and Planning customization",
            "Oracle EPM Planning functionality and technical best practices",
            "Oracle EPM implementation cost, timeline, and tradeoff analysis"
          ],

          projectWork: [
            {
              name: "MCW Implementation",
              tasks: [
                "Continued building PCF dashboards to understand reporting structure and cash forecasting workflows",
                "Developed a new Oracle EPM business rule for SOFR loan percentage population logic",
                "Architected a chat interface platform for an Oracle EPM AI agent",
                "Connected ICA API keys to the agent for secure, private data usage",
                "Used an open-source chat platform to accelerate development and simplify the user experience",
                "Added Skills, Bookmarks, Projects, confidence indicators, customizable agents, MCP support, and file attachments",
                "Deployed the application locally and completed thorough testing for functionality and stability",
                "Set up dependencies and configured the IDE environment for Rahul",
                "Met daily with Parker on Oracle EPM curriculum, Planning, and best practices",
                "Learned Oracle EPM security, access control, and continued studying Groovy"
              ]
            },
            {
              name: "DRW AMS",
              tasks: [
                "Created and delivered an Oracle EPM presentation to John on core EPM concepts and project value",
                "Revised the deck after feedback to improve structure, clarity, and executive readability",
                "Added an agenda slide and a cost and duration slide to make the deck client-ready",
                "Researched approximate cost and timeline estimates for Oracle EPM implementations",
                "Researched the pros and cons of Oracle EPM implementations and client decision criteria",
                "Created a feedback form for interns and personal Intern10 use",
                "Attended all non-conflicting DRW meetings and took detailed notes"
              ]
            },
            {
              name: "Boston Dynamics Spot",
              tasks: [
                "Set up and refined the Spot development environment while troubleshooting gRPC and connection issues",
                "Continued the final Spot dance routine and movement sequence for reaching the dog toy",
                "Added project documentation to make setup and workflow easier to reproduce",
                "Created and updated requirements.txt to simplify dependency installation",
                "Reorganized project files and added shell scripting to mitigate dependency issues"
              ]
            },
            {
              name: "Capstone",
              tasks: [
                "Met with the team to organize responsibilities and review final presentation progress",
                "Continued developing the IBM Nexus demo with text-to-speech and speech-to-text",
                "Scheduled mentor meetings and managed team communication and follow-up planning",
                "Completed the final presentation and supporting materials",
                "Finished the final IBM Capstone video and submitted all materials one week early"
              ]
            }
          ],

          technicalWork: [
            "Oracle EPM business rule for SOFR loan percentage population logic",
            "Groovy scripting and Oracle Planning business rule development",
            "Predictive Cash Forecasting (PCF) dashboard design",
            "Oracle EPM AI agent chat platform architecture",
            "ICA API key integration for secure data usage",
            "Open-source chat platform extension (Skills, Bookmarks, Projects, MCP, file attachments)",
            "Desktop Oracle EPM application and local deployment",
            "Boston Dynamics Spot SDK, gRPC server connection, and dance routine",
            "Text-to-speech and speech-to-text integration for IBM Nexus"
          ],

          deliverables: [
            "New Oracle EPM SOFR loan business rule",
            "Predictive Cash Forecasting dashboards",
            "Oracle EPM AI agent chat platform (locally deployed)",
            "Oracle EPM presentation delivered to John (revised after feedback)",
            "Cost, timeline, and pros/cons research for Oracle EPM implementations",
            "Intern10 feedback form",
            "Updated Spot environment, documentation, and requirements.txt",
            "Final IBM Capstone presentation and video (submitted one week early)"
          ],

          metrics: {
            businessRules: 1,
            meetingsAttended: 6,
            capstoneSubmitted: "1 week early"
          },

          managerSummary: "During Week 5, Rohan deepened his MCW Implementation work by building Predictive Cash Forecasting dashboards, developing a new Oracle EPM business rule for SOFR loan percentage logic, and architecting an Oracle EPM AI agent chat platform. He connected ICA API keys for secure data usage, extended an open-source chat platform with Skills, Bookmarks, Projects, MCP support, and file attachments, and deployed the application locally with thorough testing. On DRW AMS he delivered and revised an Oracle EPM presentation for John, researched implementation cost and timelines, and built an intern feedback form. He advanced the Boston Dynamics Spot integration, troubleshot the gRPC connection, and improved project documentation. He also completed and submitted the final IBM Capstone presentation and video one week early.",

          reflection: "Week 5 was focused on turning my Oracle EPM knowledge into real implementation work. On MCW I built PCF dashboards, wrote a new SOFR loan business rule, and architected an AI agent chat platform connected to ICA, adding capabilities like Skills, Projects, MCP support, and file attachments before deploying it locally. On DRW AMS I delivered an Oracle EPM presentation to John, refined it based on feedback, and researched implementation cost and tradeoffs. I kept improving the Boston Dynamics Spot integration and documentation, and I finished and submitted the IBM Capstone a full week early. This week showed me how technical EPM work, AI tooling, consulting communication, and team leadership all reinforce each other.",

          assets: []
        },

        {
          week: 6,
          title: "MCW EPM Dashboards & Navigation, EPM AI Desktop App, Spot at DevCon, and Capstone Submission",
          status: "completed",
          tags: ["MCW", "Oracle EPM", "Dashboards", "AI Agent", "Groovy", "Boston Dynamics", "DevCon", "Capstone"],
          mainFocus: "I advanced MCW Implementation by building custom Oracle EPM dashboards, a tabbed navigation flow, and a new SOFR loan business rule, while extending the Oracle EPM AI desktop application. I presented the Boston Dynamics Spot computer-vision system at DevCon, open-sourced the trained model, finished all Intern 10 tasks five weeks early, and submitted the IBM Capstone one week ahead of schedule.",

          accomplishments: [
            "Continued building Predictive Cash Forecasting (PCF) dashboards using the PCF Business Solution",
            "Created a custom Oracle EPM Dashboard 2.0 to visualize forecasting data and business rule outputs",
            "Built a custom Navigation Flow with navigation cards and tabbed pages for streamlined dashboard access",
            "Enhanced the Oracle EPM AI desktop application with CSV export, column sorting, and real-time table search/filter",
            "Developed a new Oracle EPM business rule for SOFR loan percentage population",
            "Architected an AI-powered Oracle EPM chat interface and connected ICA API keys for secure, private interactions",
            "Added Skills, Bookmarks, Projects, Confidence Scoring, customizable agents, MCP integration, and file attachment support",
            "Deployed the desktop application locally and completed end-to-end testing",
            "Presented the Boston Dynamics Spot computer vision and ML implementation to IBM interns and at DevCon",
            "Demonstrated autonomous dog toy detection, retrieval, and victory dance live, consistently above 70% detection confidence",
            "Open-sourced the trained YOLO model weights and project resources for reuse on other Spot robots",
            "Completed all Intern 10 tasks five weeks ahead of schedule",
            "Submitted the IBM Capstone (NEXUS) one week ahead of schedule and led the team to final delivery"
          ],

          meetings: [
            { name: "Parker", purpose: "Daily Oracle EPM implementation concept reviews" },
            { name: "MCW Project Team", purpose: "Daily implementation standups" },
            { name: "Rahul", purpose: "Development environment and IDE configuration support" },
            { name: "DRW Buddy & Project Manager", purpose: "AMS action items and questions" },
            { name: "Capstone Mentor", purpose: "Final progress review and feedback" },
            { name: "Capstone Team", purpose: "Final video review and submission coordination" }
          ],

          training: [
            "Functional Consultant Pyramid Speaking Framework",
            "Oracle EPM Security, including User and Group read/write access management",
            "Groovy scripting documentation for business rule development",
            "Oracle EPM Dashboard 2.0 and Navigation Flow design",
            "Oracle EPM implementation concepts (reviewed daily with Parker)"
          ],

          projectWork: [
            {
              name: "MCW Implementation",
              tasks: [
                "Continued building dashboards using the Predictive Cash Forecasting (PCF) Business Solution",
                "Created a custom Oracle EPM Dashboard 2.0 to visualize forecasting data and business rules",
                "Built a custom Navigation Flow with navigation cards and tabbed pages for streamlined dashboard access",
                "Enhanced the Oracle EPM AI desktop app with CSV export, column sorting, and real-time table search/filter",
                "Developed a new business rule for SOFR loan percentage population",
                "Architected an AI-powered Oracle EPM chat interface and connected ICA API keys for secure, private interactions",
                "Used an open-source chat framework to accelerate development",
                "Added Skills, Bookmarks, Projects, Confidence Scoring, customizable agents, MCP integration, and file attachments",
                "Deployed the application locally and completed end-to-end testing",
                "Configured the development environment and IDE for Rahul",
                "Attended daily implementation standups and met daily with Parker on Oracle EPM concepts",
                "Learned Oracle EPM Security (user/group read/write access) and continued studying Groovy"
              ]
            },
            {
              name: "Boston Dynamics Spot",
              tasks: [
                "Presented the computer vision and machine learning implementation to IBM interns and at DevCon",
                "Demonstrated autonomous dog toy detection, retrieval, and victory dance during live presentations",
                "Created comprehensive documentation, setup guides, and reusable pipelines for future developers",
                "Open-sourced the trained YOLO model weights and project resources for use on other Spot robots",
                "Explained the end-to-end CV, ML, and software architecture, including model training, inference, and robot integration",
                "Implemented and validated emergency kill-switch functionality to safely handle unexpected robot behavior",
                "Consistently achieved over 70% confidence during live detection while distinguishing the target toy from similar pink objects",
                "Implemented safety logic to automatically power down the robot when the target dog toy was not detected"
              ]
            },
            {
              name: "DRW AMS",
              tasks: [
                "Continued attending all non-conflicting client meetings, technical discussions, and knowledge-sharing sessions",
                "Documented detailed notes and action items across sessions",
                "Completed all Intern 10 tasks five weeks ahead of schedule",
                "Met with Buddy and Project Manager to review action items and questions about AMS"
              ]
            },
            {
              name: "Capstone",
              tasks: [
                "Submitted the Capstone project one week ahead of schedule",
                "Scheduled and led team meetings to review the final video and gather feedback",
                "Met with the Capstone mentor to present progress and incorporate feedback into final deliverables",
                "Coordinated with the Capstone Program Manager to confirm successful project submission",
                "Continued serving as Team Lead, organizing meetings and ensuring milestones were met",
                "Congratulated the team on the successful completion and delivery of the project"
              ]
            }
          ],

          technicalWork: [
            "Custom Oracle EPM Dashboard 2.0 for forecasting and business rule visualization",
            "Custom Navigation Flow with navigation cards and tabbed pages",
            "Oracle EPM business rule for SOFR loan percentage population (Groovy)",
            "Oracle EPM AI desktop application (CSV export, column sorting, real-time search/filter)",
            "AI-powered Oracle EPM chat interface with ICA API key integration",
            "Open-source chat framework extension (Skills, Bookmarks, Projects, Confidence Scoring, customizable agents, MCP, file attachments)",
            "Local deployment and end-to-end testing of the desktop application",
            "YOLO computer vision model for Boston Dynamics Spot (open-sourced weights)",
            "Spot emergency kill-switch and auto power-down safety logic"
          ],

          deliverables: [
            "Custom Oracle EPM Dashboard 2.0 and tabbed Navigation Flow",
            "New Oracle EPM SOFR loan percentage business rule",
            "Enhanced Oracle EPM AI desktop application (locally deployed and tested)",
            "Boston Dynamics Spot DevCon presentation and live demonstration",
            "Open-sourced YOLO model weights, documentation, and reusable pipelines",
            "All Intern 10 tasks completed five weeks ahead of schedule",
            "Final IBM Capstone (NEXUS) project submitted one week early"
          ],

          links: [
            {
              label: "Dev Club IBM: Spot Dog-toy Detection",
              url: "https://www.youtube.com/watch?v=ba-QHNwbSI4",
              thumbnail: "https://img.youtube.com/vi/ba-QHNwbSI4/maxresdefault.jpg"
            },
            {
              label: "Watch the IBM Capstone Video: NEXUS (Dallas Team 2)",
              url: "https://ibm-my.sharepoint.com/personal/agnes_mathew_ibm_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fagnes%5Fmathew%5Fibm%5Fcom%2FDocuments%2FVideos%2FClipchamp%2FVideo%20Project%2FExports%2FIntern%20Capstone%20Project%20%2D%20Dallas%20Team%202%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eab906fab%2Da11d%2D461e%2Da351%2D710967c4f843&ga=1",
              thumbnail: "Rohan/Assets Week 6/week6-05.png"
            }
          ],

          metrics: {
            businessRules: 1,
            meetingsAttended: 6,
            detectionConfidence: "70%+",
            intern10: "5 weeks early",
            capstoneSubmitted: "1 week early"
          },

          managerSummary: "During Week 6, Rohan deepened his MCW Implementation work by continuing to build Predictive Cash Forecasting dashboards, creating a custom Oracle EPM Dashboard 2.0 and a tabbed Navigation Flow, and developing a new business rule for SOFR loan percentage population. He extended the Oracle EPM AI desktop application with CSV export, column sorting, and real-time search/filter, and architected an AI-powered EPM chat interface connected to ICA API keys with Skills, Bookmarks, Projects, Confidence Scoring, customizable agents, MCP integration, and file attachments before deploying and testing it locally. He presented the Boston Dynamics Spot computer vision and ML implementation to IBM interns and at DevCon, demonstrating autonomous detection, retrieval, and a victory dance at over 70% confidence, and open-sourced the trained model for reuse. On DRW AMS he completed all Intern 10 tasks five weeks early, and he submitted the final IBM Capstone one week ahead of schedule while leading the team to delivery.",

          reflection: "Week 6 brought several workstreams to a strong finish. On MCW I turned forecasting data into clear, navigable insight by building a custom Oracle EPM Dashboard 2.0 and a tabbed Navigation Flow, wrote a new SOFR loan business rule, and made the Oracle EPM AI desktop app genuinely usable with CSV export, sorting, and real-time search. Architecting the AI chat interface around ICA and adding Skills, Projects, MCP, and file attachments showed me how much thoughtful tooling can accelerate consultants. Presenting Boston Dynamics Spot at DevCon and open-sourcing the model let me share the full computer vision and robotics pipeline with others, and submitting the Capstone early as Team Lead capped off the work. This week tied together Oracle EPM implementation, AI tooling, robotics, and leadership.",

          assets: []
        },

        {
          week: 7,
          title: "Perpetual Day-of-Week Driver, Local AI Fine-Tuning, and DRW Support",
          status: "completed",
          tags: ["MCW", "Oracle EPM", "Groovy", "Calc Scripts", "DRW AMS", "QLoRA", "Fine-Tuning", "RAG"],
          mainFocus: "I went deeper into Oracle EPM implementation engineering by building a perpetual day-of-week driver with custom calculation scripts, stood up a local AI workstation to fine-tune open-source models with QLoRA, and continued supporting DRW AMS while researching how enterprise AI could accelerate Oracle EPM consulting.",

          accomplishments: [
            "Designed and implemented a perpetual day-of-week driver for Oracle EPM Daily Planning applications using custom calculation scripts",
            "Developed logic to correctly handle leap year and non-leap year scenarios while maintaining date alignment across fiscal years",
            "Researched Oracle Planning date dimension behavior and optimized calculations to improve maintainability and accuracy",
            "Continued enhancing the Oracle EPM AI desktop application with improved retrieval, navigation, and Oracle-specific knowledge management",
            "Installed and configured an Intel Arc Pro B70 development workstation for local AI research and model experimentation",
            "Validated Intel GPU training workflows and executed local fine-tuning workloads using QLoRA techniques",
            "Trained and evaluated open-source coding models to assess applicability for Oracle EPM automation and consulting workflows",
            "Researched retrieval-augmented generation (RAG), model fine-tuning, and local inference architectures for enterprise knowledge systems",
            "Assisted with troubleshooting Oracle Planning forms, business rules, and forecasting-related issues on DRW AMS"
          ],

          meetings: [
            { name: "Parker", purpose: "Calculation script design patterns, forecasting methodologies, and Oracle EPM best practices" },
            { name: "MCW Project Team", purpose: "Daily implementation standups and solution design discussions" },
            { name: "DRW Team", purpose: "Client meetings, technical discussions, and AMS knowledge-sharing" },
            { name: "IBM Professionals & Mentors", purpose: "Technical career paths, consulting opportunities, and software engineering roles" }
          ],

          training: [
            "Oracle Planning date dimension behavior and calculation script design",
            "Oracle Planning metadata, substitution variables, and dynamic forecasting configurations",
            "QLoRA fine-tuning and local GPU training workflows",
            "Retrieval-augmented generation (RAG) and local inference architectures",
            "Self-study in Oracle Planning, Groovy scripting, and AI-assisted development"
          ],

          projectWork: [
            {
              name: "MCW Implementation",
              tasks: [
                "Designed and implemented a perpetual day-of-week driver for Daily Planning applications using custom calculation scripts",
                "Developed logic to handle leap year and non-leap year scenarios while maintaining date alignment across fiscal years",
                "Researched Oracle Planning date dimension behavior and optimized calculations for maintainability and accuracy",
                "Continued enhancing the Oracle EPM AI desktop application with improved retrieval, navigation, and knowledge management",
                "Expanded understanding of Oracle Planning metadata, substitution variables, and dynamic forecasting configurations",
                "Participated in daily implementation standups and solution design discussions with the project team",
                "Collaborated with Parker to review calculation script design patterns and Oracle EPM best practices"
              ]
            },
            {
              name: "DRW AMS",
              tasks: [
                "Continued attending client meetings, technical discussions, and AMS knowledge-sharing sessions",
                "Assisted with troubleshooting Oracle Planning forms, business rules, and forecasting-related issues",
                "Expanded knowledge of Oracle EPM support processes, environment management, and production issue resolution",
                "Continued documenting meeting notes, action items, and technical observations to support ongoing learning"
              ]
            },
            {
              name: "AI / Technical Innovation",
              tasks: [
                "Installed and configured an Intel Arc Pro B70 development workstation for local AI research and model experimentation",
                "Validated Intel GPU training workflows and successfully executed local fine-tuning workloads using QLoRA techniques",
                "Trained and evaluated open-source coding models for Oracle EPM automation and consulting workflows",
                "Researched RAG, model fine-tuning, and local inference architectures for enterprise knowledge systems",
                "Investigated methods for integrating Oracle EPM implementation assets and business rules into AI-assisted consulting tools"
              ]
            }
          ],

          technicalWork: [
            "Perpetual day-of-week driver via custom Oracle EPM calculation scripts",
            "Leap year / non-leap year date alignment logic across fiscal years",
            "Oracle Planning date dimension optimization",
            "Intel Arc Pro B70 local AI workstation setup and GPU training validation",
            "QLoRA fine-tuning of open-source coding models",
            "RAG and local inference architecture research for enterprise knowledge systems"
          ],

          deliverables: [
            "Perpetual day-of-week driver for Daily Planning applications",
            "Leap year-aware date alignment calculation logic",
            "Configured Intel Arc Pro B70 local AI workstation",
            "Locally fine-tuned open-source coding model (QLoRA)",
            "Research notes on RAG and local inference for Oracle EPM"
          ],

          metrics: {
            businessRules: 1,
            meetingsAttended: 4
          },

          managerSummary: "During Week 7, Rohan advanced his Oracle EPM implementation engineering by designing and implementing a perpetual day-of-week driver for Daily Planning applications using custom calculation scripts, including leap year and non-leap year handling to keep dates aligned across fiscal years. He continued enhancing the Oracle EPM AI desktop application and deepened his knowledge of Planning metadata, substitution variables, and dynamic forecasting. On the technical innovation side, he configured an Intel Arc Pro B70 workstation, validated Intel GPU training, and executed local QLoRA fine-tuning on open-source coding models while researching RAG and local inference architectures for enterprise knowledge systems. He also supported DRW AMS by troubleshooting Planning forms, business rules, and forecasting issues, and met with IBM professionals to discuss technical career paths.",

          reflection: "Week 7 was where my Oracle EPM work and my AI research started to meet. Building the perpetual day-of-week driver pushed me to really understand how Oracle Planning treats dates, including the edge cases around leap years and fiscal alignment, and to write calculation logic that stays maintainable. Standing up the Intel Arc Pro B70 workstation and running local QLoRA fine-tuning gave me hands-on experience with model training and made the idea of an Oracle EPM AI assistant feel achievable. Supporting DRW AMS in parallel kept me grounded in the realities of production support. This week helped me see a path where fine-tuned models and RAG could genuinely speed up implementation consulting.",

          assets: []
        },

        {
          week: 8,
          title: "Dynamic Rolling 13-Day Forecast, SOFR Loan Solution, and Enterprise AI Assistant",
          status: "completed",
          tags: ["MCW", "Oracle EPM", "Forecasting", "SOFR", "Substitution Vars", "DRW AMS", "AI", "RAG"],
          mainFocus: "I delivered a dynamic rolling 13-day forecast within Oracle Predictive Cash Forecasting, advanced the SOFR loan forecasting solution with interest accrual and balance logic, and kept building the local AI infrastructure and enterprise Oracle EPM assistant while supporting DRW AMS.",

          accomplishments: [
            "Successfully implemented a dynamic rolling 13-day forecast solution within Oracle Predictive Cash Forecasting",
            "Researched Oracle substitution variables and forecast range configuration to support automated rolling forecast updates",
            "Developed and tested dynamic date-range logic to automatically align forecast periods with current application settings",
            "Validated forecasting outputs and resolved form configuration issues related to daily forecasting periods and reporting ranges",
            "Continued the SOFR Loan forecasting solution, including interest accrual calculations, loan balance logic, and forecasting enhancements",
            "Improved Oracle Planning forms, dashboards, and reporting views to increase usability and forecasting transparency",
            "Continued development of an AI-powered Oracle EPM assistant leveraging implementation knowledge, business rules, and documentation",
            "Built and tested local AI infrastructure for future Oracle EPM automation, documentation generation, and implementation assistance"
          ],

          meetings: [
            { name: "Parker", purpose: "Troubleshooting forecasting calculations and optimizing Oracle EPM design decisions" },
            { name: "MCW Project Team", purpose: "Daily implementation standups and forecasting solution reviews" },
            { name: "DRW Team", purpose: "Client meetings and Oracle EPM support activities" }
          ],

          training: [
            "Oracle substitution variables and forecast range configuration",
            "Dynamic date-range logic for rolling forecasts",
            "SOFR interest accrual and loan balance forecasting concepts",
            "Scalable architectures for enterprise AI assistants",
            "AI engineering, model deployment, and enterprise software architecture"
          ],

          projectWork: [
            {
              name: "MCW Implementation",
              tasks: [
                "Implemented a dynamic rolling 13-day forecast solution within Oracle Predictive Cash Forecasting",
                "Researched Oracle substitution variables and forecast range configuration for automated rolling forecast updates",
                "Developed and tested dynamic date-range logic to align forecast periods with current application settings",
                "Validated forecasting outputs and resolved form configuration issues for daily forecasting periods and reporting ranges",
                "Continued the SOFR Loan forecasting solution with interest accrual calculations and loan balance logic",
                "Improved Oracle Planning forms, dashboards, and reporting views for usability and forecasting transparency",
                "Worked closely with Parker to troubleshoot forecasting calculations and optimize Oracle EPM design decisions"
              ]
            },
            {
              name: "DRW AMS",
              tasks: [
                "Continued participating in client meetings and support activities across Oracle EPM environments",
                "Expanded understanding of AMS operational processes, issue triage workflows, and client communication practices",
                "Reviewed forecasting-related support requests and analyzed Oracle Planning configuration behavior"
              ]
            },
            {
              name: "AI / Technical Innovation",
              tasks: [
                "Continued development of an AI-powered Oracle EPM assistant leveraging implementation knowledge, business rules, and documentation",
                "Evaluated approaches for combining retrieval systems, fine-tuning, and enterprise knowledge bases to improve EPM productivity",
                "Built and tested local AI infrastructure for future Oracle EPM automation, documentation generation, and implementation assistance",
                "Researched scalable architectures for enterprise AI assistants supporting Planning, Groovy scripting, and implementation consulting"
              ]
            }
          ],

          technicalWork: [
            "Dynamic rolling 13-day forecast within Oracle Predictive Cash Forecasting",
            "Substitution-variable-driven forecast range configuration",
            "Dynamic date-range logic aligned to application settings",
            "SOFR loan interest accrual and balance forecasting logic",
            "Oracle Planning form, dashboard, and reporting view improvements",
            "Local AI infrastructure and enterprise Oracle EPM assistant development"
          ],

          deliverables: [
            "Dynamic rolling 13-day forecast solution (Predictive Cash Forecasting)",
            "Automated forecast range configuration via substitution variables",
            "Enhanced SOFR loan forecasting solution",
            "Improved Oracle Planning forms, dashboards, and reporting views",
            "Local AI infrastructure for an enterprise Oracle EPM assistant"
          ],

          metrics: {
            businessRules: 2,
            meetingsAttended: 3
          },

          managerSummary: "During Week 8, Rohan delivered a dynamic rolling 13-day forecast within Oracle Predictive Cash Forecasting, using substitution variables and dynamic date-range logic so forecast periods automatically align with current application settings. He validated forecasting outputs, resolved form configuration issues, and continued advancing the SOFR loan forecasting solution with interest accrual and loan balance logic while improving Planning forms, dashboards, and reporting views. He also continued building local AI infrastructure and an AI-powered Oracle EPM assistant that leverages implementation knowledge and documentation, researching scalable enterprise assistant architectures. In parallel he supported DRW AMS across client meetings and Oracle EPM support activities, and reflected on the internship to identify future growth in application development, data engineering, and AI-focused consulting.",

          reflection: "Week 8 tied a lot of threads together. The rolling 13-day forecast was satisfying to deliver because it made the Predictive Cash Forecasting application update itself as the calendar moves, and getting there meant really understanding substitution variables and dynamic date ranges. Extending the SOFR loan solution with interest accrual and balance logic showed me how much financial nuance sits behind a forecasting model. At the same time, continuing to build local AI infrastructure and an Oracle EPM assistant made me confident that the automation ideas I had been researching are real and worth pursuing. Reflecting on the internship as a whole, I can see how Oracle EPM implementation, managed services, and AI engineering all connect into the kind of consulting work I want to keep doing.",

          assets: []
        },

        {
          week: 9,
          title: "EPM Wizard Productization, GL Integration, Chrome Extension, and Production Hardening",
          status: "completed",
          tags: ["EPM Wizard", "Oracle EPM", "GL Integration", "Chrome Extension", "Playwright", "RAG", "Product Engineering"],
          mainFocus: "I closed the internship by turning the EPM Wizard concept into a tested, hosted Oracle EPM product: adding GL and chart-of-accounts spreadsheet workflows, HSP-aligned snapshot synchronization, a secure Chrome browser agent, workbook context, multi-user infrastructure, a real parallel-agent sandbox, and production-grade testing and documentation.",

          accomplishments: [
            "Expanded EPM Wizard from an initial forms-and-context MVP into a full Oracle EPM chat workspace and supervised browser-agent product",
            "Built a GL and chart-of-accounts spreadsheet workflow that classifies uploaded workbooks, previews structure, and routes follow-up actions through the chat",
            "Added deterministic Oracle Planning metadata CSV generation for chart-of-accounts imports",
            "Added tenant reconciliation for GL members using exact, case-insensitive, and alias matches, including missing-member and parent-mismatch reporting",
            "Enabled versioned chart-of-accounts merges into EPM context so changes remain auditable and reversible",
            "Added spreadsheet layout handoffs that convert workbook layouts into validated Oracle EPM form or report specifications",
            "Implemented Oracle HSP-aligned relational tables and incremental LCM snapshot synchronization for applications, plan types, dimensions, members, aliases, UDAs, attributes, calendars, forms, and business rules",
            "Built form copy, edit, XML validation, and one-click Oracle EPM deployment workflows using real application templates",
            "Added conversational actions for business rules and substitution variables, plus EPM Automate, MCP, background-process, and Data Integration support",
            "Deployed a multi-user hosted stack on Fly.io with PostgreSQL, Google OAuth, owner isolation, Together AI provider support, health checks, and automated deployment workflows",
            "Shipped EPM Wizard Chrome extension version 0.6.0 with secure origin binding, optional permissions, bounded action history, page-stability waits, screenshot compression, and duplicate suppression",
            "Added Oracle-specific browser adapters for nested iframes, Shadow DOM, JET and ADF controls, virtualized grids, and canvas interactions",
            "Connected Excel workbook context to the browser agent, including parse-only VBA, formulas, sheet samples, named ranges, tables, pivots, charts, connections, redaction, and truncation safeguards",
            "Implemented the website OAuth and Oracle EPM credential flow inside the extension, added matching product icons, and published a direct downloadable extension package",
            "Built a real read-only multi-agent sandbox with up to 12 role workers, owner-scoped sessions, pause, resume, cancel, capacity controls, live activity observation, and copyable handoffs",
            "Redesigned the landing page, documentation, onboarding, chat composer, responsive navigation, accessibility behavior, and extension-first product story",
            "Created human-style Playwright and Chromium test environments for the web app and installed extension while preserving production OAuth boundaries",
            "Validated the production snapshot with 595 backend tests, 126 frontend tests, 30 extension tests, 13 Chromium application tests, and 3 installed-extension tests"
          ],

          meetings: [],
          training: [
            "Oracle Planning HSP metadata architecture and LCM snapshot structures",
            "Chart-of-accounts ingestion, metadata imports, member reconciliation, and Data Integration workflows",
            "Chrome Manifest V3 permissions, secure origin binding, content scripts, service workers, and installed-extension testing",
            "Oracle JET, ADF, nested iframe, Shadow DOM, virtual-grid, and canvas browser automation patterns",
            "Playwright and Chromium end-to-end testing with reusable staging OAuth state",
            "Fly.io, PostgreSQL, Google OAuth, multi-user isolation, Together AI, and production deployment architecture",
            "Accessible modal, keyboard, responsive, reduced-motion, and production frontend design"
          ],

          projectWork: [
            {
              name: "MCW Implementation",
              tasks: [
                "Built GL and chart-of-accounts workbook ingestion with deterministic metadata CSV output",
                "Added tenant reconciliation for account members, aliases, hierarchy parents, and missing mappings",
                "Implemented auditable, versioned chart-of-accounts merges into Oracle EPM context",
                "Added spreadsheet-to-form and spreadsheet-to-report handoffs with identifier-first member resolution",
                "Implemented HSP-aligned metadata storage and incremental LCM snapshot synchronization",
                "Added one-click form deployment, business-rule actions, substitution-variable actions, and Data Integration support"
              ]
            },
            {
              name: "EPM Wizard Product Engineering",
              tasks: [
                "Expanded the chat workspace across forms, rules, reports, context, snapshots, metadata, skills, diagnostics, and browser automation",
                "Deployed the application as a multi-user Fly.io stack with PostgreSQL, Google OAuth, owner isolation, Together AI, and CI/CD",
                "Shipped Chrome extension 0.6.0 with secure permissions, Oracle page adapters, action history, and optimized screenshots",
                "Attached redacted, parse-only Excel and VBA context to every browser-agent step",
                "Added mandatory website OAuth and Oracle EPM connection flows plus a downloadable packaged extension",
                "Built the read-only parallel-agent sandbox with real provider-backed sessions and production capacity controls",
                "Redesigned the landing page, documentation, onboarding, composer, navigation, mobile layouts, and accessibility behavior",
                "Added production headers, caching, lazy-load recovery, browser automation tests, and installed-extension tests"
              ]
            },
            {
              name: "AI / Technical Innovation",
              tasks: [
                "Combined structured EPM context, RAG, LCM snapshots, spreadsheet analysis, and fine-tuned model research into one product architecture",
                "Added Together AI provider and fine-tuning workflows while retaining local and OpenAI-compatible model paths",
                "Designed role-based parallel analysis for metadata, rules, validation, safety, integration, performance, testing, documentation, and final review",
                "Bound agent outputs to observed workbook, tenant, and browser context instead of allowing unsupported claims"
              ]
            }
          ],

          technicalWork: [
            "FastAPI, React, TypeScript, PostgreSQL, Docker, Fly.io, Google OAuth, and Together AI integration",
            "Chrome Manifest V3 extension architecture with service workers, content scripts, optional permissions, and secure origin policy",
            "Oracle JET, ADF, nested iframe, Shadow DOM, virtual-grid, and canvas browser adapters",
            "Excel workbook inspection for formulas, VBA, names, tables, pivots, charts, connections, and redacted AI context",
            "GL and chart-of-accounts hierarchy parsing, metadata CSV rendering, tenant reconciliation, and versioned context merges",
            "Oracle HSP-aligned schema design and incremental LCM snapshot synchronization",
            "Oracle EPM form XML rendering, validation, preview, copy, edit, and deployment",
            "EPM Automate, Data Integration, MCP routing, business-rule actions, and substitution-variable actions",
            "Owner-scoped asynchronous agent sessions with lifecycle controls, bounded concurrency, TTL cleanup, and isolated failures",
            "Playwright, Chromium, Vitest, Pytest, accessibility audits, installed-extension E2E, and CI workflows"
          ],

          deliverables: [
            "Hosted multi-user EPM Wizard application",
            "GL and chart-of-accounts spreadsheet integration",
            "Oracle HSP-aligned incremental snapshot synchronization",
            "Form builder with copy, edit, validation, and one-click EPM deployment",
            "EPM Wizard Chrome extension version 0.6.0",
            "Packaged epm-wizard-extension-0.6.0.zip",
            "Excel and VBA context pipeline for the browser agent",
            "Read-only multi-agent sandbox with live role-based activity and handoff export",
            "Playwright and Chromium web and installed-extension test environments",
            "Production landing page, documentation, privacy disclosure, store listing, and deployment guides"
          ],

          metrics: {
            backendTests: 595,
            frontendTests: 126,
            extensionTests: 30,
            browserE2E: 16,
            extensionVersion: "0.6.0",
            agentRoles: 12
          },

          managerSummary: "During Week 9, Rohan transformed EPM Wizard into a production-oriented Oracle EPM platform spanning a hosted multi-user chat workspace, GL and chart-of-accounts spreadsheet integration, HSP-aligned snapshot synchronization, form deployment, and a secure Chrome browser agent. He added workbook and VBA context, Oracle-specific browser adapters, OAuth and EPM connection flows, and a real read-only multi-agent sandbox with owner-scoped lifecycle and capacity controls. He also deployed the stack with PostgreSQL, Google OAuth, Together AI, and CI/CD, while redesigning the product experience and documentation. The final validated snapshot passed 595 backend tests, 126 frontend tests, 30 extension tests, and 16 browser end-to-end tests.",

          reflection: "Week 9 was the point where the EPM assistant stopped feeling like a collection of experiments and became a real product. The GL and chart-of-accounts workflow connected spreadsheet data to Oracle metadata in a controlled, auditable way, while the HSP snapshot sync and form deployment work brought the platform closer to actual implementation needs. Building the Chrome extension forced me to think carefully about browser permissions, OAuth, workbook privacy, Oracle-specific interfaces, and what a supervised AI agent should be allowed to do. Finishing with a hosted multi-user architecture, a role-based agent sandbox, and broad automated testing showed me how much engineering sits between a strong prototype and a product that people can trust.",
          assets: []
        }
      ]
    },

    {
      id: "calvin",
      name: "Calvin",
      role: "IBM Intern",
      totalMetrics: {
        learningHours: 0,
        modulesCompleted: 0,
        badgesEarned: 0,
        projectsActive: 0
      },
      weeks: Array.from({ length: 9 }, (_, i) => ({
        week: i + 1,
        title: "To Be Updated",
        status: "pending",
        tags: ["To Be Updated"],
        mainFocus: "To be updated.",
        accomplishments: ["To be updated."],
        meetings: [],
        training: ["To be updated."],
        projectWork: [],
        technicalWork: ["To be updated."],
        deliverables: ["To be updated."],
        metrics: {},
        managerSummary: "To be updated.",
        reflection: "To be updated.",
        assets: []
      }))
    }
  ]
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = internshipData;
}
