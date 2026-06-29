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
      "Intern10 Deliverables"
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
        projectsActive: 5
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
          mainFocus: "I moved from onboarding into active project work — starting Intern10 project documentation, completing Oracle and IBM training, joining the DRW AMS and MCW Implementation workstreams, beginning Boston Dynamics Spot ML work, and taking a leadership role on the capstone project.",

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
          mainFocus: "I continued training and moved deeper into technical execution — training a YOLO model, documenting the Spot ML repo, shadowing DRW meetings, joining MCW standups, and building the first version of the capstone demo.",

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
          mainFocus: "I expanded across both Oracle Managed Services and Implementation work — building multiple Oracle EPM business rules for MCW, completing YOLO testing and full Spot integration, and continuing to lead the capstone project.",

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
              label: "Dev Club IBM — Spot Dog-toy Detection",
              url: "https://www.youtube.com/watch?v=ba-QHNwbSI4",
              thumbnail: "https://img.youtube.com/vi/ba-QHNwbSI4/maxresdefault.jpg"
            },
            {
              label: "Watch the IBM Capstone Video — NEXUS (Dallas Team 2)",
              url: "https://ibm-my.sharepoint.com/personal/agnes_mathew_ibm_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fagnes%5Fmathew%5Fibm%5Fcom%2FDocuments%2FVideos%2FClipchamp%2FVideo%20Project%2FExports%2FIntern%20Capstone%20Project%20%2D%20Dallas%20Team%202%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eab906fab%2Da11d%2D461e%2Da351%2D710967c4f843&ga=1"
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

        // Weeks 7-9: Placeholder structure
        ...Array.from({ length: 3 }, (_, i) => ({
          week: i + 7,
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
