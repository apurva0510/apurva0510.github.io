type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  number: string;
  title: string;
  image: string;
  summary: string;
  tags: string[];
  problem: string;
  approach: string;
  result: string;
  links?: ProjectLink[];
};

type Experience = {
  range: string;
  role: string;
  org: string;
  body: string;
  logo?: string;
  logoAlt?: string;
};

export const profile = {
  name: "Apurva Aggarwal",
  initials: "AA",
  title: "Apurva Aggarwal",
  eyebrow: "Computer Science major + Business minor at Michigan State University",
  location: "East Lansing, MI / Palo Alto, CA",
  summary:
    "Building data systems and practical software for messy real-world problems",
  availability:
    "Open to new-grad opportunities in Data Analytics Engineering, Data Engineering, Analytics Infrastructure, and Business-facing Software.",
  resume: "/documents/Apurva Aggarwal - Resume.pdf",
  social: {
    github: "https://www.github.com/apurva0510",
    linkedin: "https://www.linkedin.com/in/apurva0510/",
    instagram: "https://instagram.com/apurva_guitar"
  }
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Builds" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
];

export const highlights = [
  {
    value: "Data Systems",
    label:
      "Messy data, matching logic, workflow design, reporting automation, and repeatable tooling"
  },
  {
    value: "Business Context",
    label:
      "Technical work framed around decisions, operations, reliability, and usefulness"
  },
  {
    value: "Ownership",
    label:
      "Comfortable creating structure, taking over ambiguous workstreams, and driving follow-through"
  }
];

export const updates = [
  {
    date: "May 2026",
    title: "Starting as Co-Director for SpartaHack",
    body:
      "Stepping into a leadership role supporting one of MSU's major student-run hackathon organizations, with responsibility across planning, execution, team coordination, and event operations."
  },
  {
    date: "April 2026",
    title: "Started as Director of Technical Affairs for ISA",
    body:
      "Leading technical work for the International Students Association, including early planning for affiliate systems, website infrastructure, and internal tools."
  },
  {
    date: "Dec 2025",
    title: "Accepted Tesla Energy internship",
    body:
      "Accepted a data-focused internship with Tesla Energy, working on operational reporting, automation, data quality, and business-facing analytics systems."
  },
  {
    date: "March 2025",
    title: "Accepted EY Technology Consulting internship",
    body:
      "Accepted a Digital Engineering internship with EY, focused on enterprise systems, data migration, validation, testing, and consulting delivery."
  },
  {
    date: "Oct 2024",
    title: "FarmX won Best Sustainability Track at MHacks",
    body:
      "Built a machine-learning prototype for agriculture decision support, focused on practical sustainability and rapid execution under hackathon constraints."
  }
];

export const experience: Experience[] = [
  {
    range: "Jan 2026 - Present",
    role: "Data Analytics Engineering Intern",
    org: "Tesla",
    logo: "/logos/organizations/tesla-symbol.jpg",
    logoAlt: "Tesla logo",
    body:
      "Working on Residential Energy data systems, operational reporting, dashboard automation, KPI logic, data quality, and workflow improvements in a business-facing technical environment."
  },
  {
    range: "May 2025 - Aug 2025",
    role: "Technology Consulting Intern",
    org: "EY",
    logo: "/logos/organizations/ey.png",
    logoAlt: "EY logo",
    body:
      "Contributed to enterprise systems work involving ETL SQL scripts, data validation, reconciliation, UAT support, issue triage, and cross-functional stakeholder coordination."
  },
  {
    range: "May 2026 - Present",
    role: "Co-Director",
    org: "SpartaHack",
    logo: "/logos/organizations/spartahack.jpeg",
    logoAlt: "SpartaHack logo",
    body:
      "Help lead planning and execution for MSU's student-run hackathon, supporting team coordination, event operations, logistics, and the overall hacker experience."
  },
  {
    range: "Apr 2026 - Present",
    role: "Director of Technical Affairs",
    org: "International Students Association",
    logo: "/logos/organizations/isa.jpeg",
    logoAlt: "International Students Association logo",
    body:
      "Lead technical planning and development for ISA systems, including website infrastructure, affiliate tooling, and internal workflow improvements."
  },
  {
    range: "Aug 2024 - Dec 2024",
    role: "Data Analyst",
    org: "The Global Career Accelerator",
    logo: "/logos/organizations/global-career-accelerator.jpeg",
    logoAlt: "Global Career Accelerator logo",
    body:
      "Analyzed real-world business datasets using Excel, PivotTables, XLOOKUP, A/B testing, and data visualization, translating findings into actionable recommendations across media, sustainability, and operations-focused projects."
  },
  {
    range: "Aug 2024 - Present",
    role: "Resident Assistant",
    org: "Michigan State University",
    logo: "/logos/organizations/msu.webp",
    logoAlt: "Michigan State University logo",
    body:
      "Support residents through communication, conflict management, community programming, crisis response, and consistent people-facing ownership."
  },
  {
    range: "Aug 2023 - Present",
    role: "B.S. Computer Science, Business Minor",
    org: "Michigan State University",
    logo: "/logos/organizations/msu.webp",
    logoAlt: "Michigan State University logo",
    body:
      "Building a technical foundation while intentionally connecting software, data systems, analytics, and business strategy."
  }
];

export const projects: Project[] = [
  {
    number: "01",
    title: "ISA Affiliate CRM",
    image: "/images/pic03.jpg",
    summary:
      "A planned CRM-style web app for the International Students Association to manage affiliates, meeting attendance, and funding requests.",
    tags: [
      "Full-Stack Development",
      "CRM",
      "Web Apps",
      "Product Planning",
      "Student Organizations"
    ],
    problem:
      "ISA needs a more structured way to manage affiliate organizations, track participation, and handle funding request workflows.",
    approach:
      "Leading technical planning for a lightweight internal system with affiliate-facing views, admin workflows, attendance tracking, and funding request management.",
    result:
      "Currently in planning and early development, with focus on requirements, hosting constraints, data policies, and long-term maintainability."
  },
  {
    number: "02",
    title: "Micro Foods Market",
    image: "/images/projects/micro-foods-architecture.svg",
    summary:
      "A microservices-based food marketplace project focused on user authentication, service separation, and containerized development.",
    tags: [
      "Flask",
      "SQLite",
      "Docker",
      "Microservices",
      "Backend Development"
    ],
    problem:
      "Modern web systems need clean separation between services, authentication, data storage, and application logic.",
    approach:
      "Built and worked with backend services using Flask, SQLite, and Docker Compose, with reusable authentication and user-service patterns.",
    result:
      "Created a foundation that can be refactored and reused in future web systems, including ISA's planned affiliate CRM.",
    links: [{ label: "GitHub", href: "https://github.com/apurva0510/MicroFoodMarket" }]
  },
  {
    number: "03",
    title: "FarmX - Sustainable Agriculture",
    image: "/images/projects/farmx.png",
    summary:
      "A machine-learning prototype for agriculture decision support, built quickly under hackathon constraints.",
    tags: [
      "Python",
      "Machine Learning",
      "Predictive Analytics",
      "Sustainability",
      "Hackathon"
    ],
    problem:
      "Agricultural decisions around crop suitability and nitrogen usage have practical consequences for yield, cost, and sustainability.",
    approach:
      "Built a prediction workflow using environmental and agricultural input data, then shaped it into a usable prototype for quick decision support.",
    result:
      "Won Best Sustainability Track at MHacks and showed my ability to turn an idea into a meaningful prototype under pressure.",
    links: [{ label: "Devpost", href: "https://devpost.com/software/farmx-zpw0yq" }]
  },
  {
  number: "04",
  title: "Celebrity Face Recognition",
  image: "/images/projects/alexnet.jpg",
  summary:
    "A computer vision project that fine-tuned a deep learning model to classify celebrity faces across multiple classes.",
  tags: [
    "Python",
    "PyTorch",
    "Computer Vision",
    "Deep Learning",
    "Image Classification"
  ],
  problem:
    "Image classification models need to distinguish between visually similar faces while handling variation in lighting, pose, and image quality.",
  approach:
    "Fine-tuned an AlexNet-based model using transfer learning, structured the dataset across multiple celebrity classes, and evaluated performance through repeated validation.",
  result:
    "Built a working face recognition pipeline that strengthened my understanding of computer vision, model training, validation, and applied deep learning.",
  links: [{ label: "GitHub", href: "https://github.com/apurva0510/celeb-face-rec" }]
},
{
  number: "05",
  title: "Intel Sustainability Modeling",
  image: "/images/projects/intel-sustainability.webp",
  summary:
    "A sustainability-focused data analysis project evaluating regional energy readiness for potential data center expansion.",
  tags: [
    "Excel",
    "Data Analytics",
    "Sustainability",
    "Energy Modeling",
    "Data Visualization"
  ],
  problem:
    "Large data centers can create significant energy demand, so expansion decisions need to account for regional energy availability, renewable mix, and grid stability.",
  approach:
    "Analyzed regional energy datasets using Excel, PivotTables, and visualizations to compare power availability, usage patterns, renewable energy mix, and ability to handle increased demand.",
  result:
    "Translated energy and sustainability data into recommendations about which regions appeared better equipped to support future data center growth."
},
  {
    number: "06",
    title: "Battleship Terminal Game",
    image: "/images/projects/battleship.png",
    summary:
      "A Python terminal-based game project focused on gameplay logic, state management, and object-oriented design.",
    tags: [
      "Python",
      "Game Logic",
      "Object-Oriented Programming",
      "Terminal UI"
    ],
    problem:
      "Games require clean handling of state, user input, rules, and repeated interactions, even in a simple terminal environment.",
    approach:
      "Built a playable terminal game in Python, focusing on core mechanics, structured logic, and a foundation that could later be expanded into a graphical UI.",
    result:
      "Developed a functional game project that strengthened my ability to organize interactive software systems from scratch."
  }
];

export const skillGroups = [
  {
    title: "Data Engineering",
    skills: [
      "Python",
      "SQL",
      "Data Cleaning",
      "Fuzzy Matching",
      "Indexing",
      "Caching",
      "Workflow Design",
      "Automation"
    ]
  },
  {
    title: "Analytics Engineering",
    skills: [
      "Power BI",
      "Excel",
      "KPI Design",
      "Data Modeling",
      "Dashboards",
      "Validation Logic",
      "Reporting Systems"
    ]
  },
  {
    title: "Software + ML",
    skills: [
      "TypeScript",
      "JavaScript",
      "C++",
      "Machine Learning",
      "Predictive Analytics",
      "Streamlit",
      "Git"
    ]
  },
  {
    title: "Business + Leadership",
    skills: [
      "Stakeholder Communication",
      "Business Process Understanding",
      "Ownership",
      "Systems Thinking",
      "Ambiguity Handling"
    ]
  }
];

export const leadership = [
  {
    title: "Systems Thinking",
    org: "How I approach work",
    body:
      "I look for the workflow, dependency, repeated pattern, or constraint underneath the immediate task, then try to improve the system itself."
  },
  {
    title: "Execution Bias",
    org: "How I create momentum",
    body:
      "I move from ambiguity into practical output quickly, then iterate based on what works instead of waiting for perfect first-pass clarity."
  },
  {
    title: "Ownership",
    org: "How I build trust",
    body:
      "I step into gaps, follow through, and treat outcomes as something I am responsible for, especially when the task is not perfectly defined."
  }
];
