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
    "Building analytics systems, automation workflows, and AI-enabled tools for sales operations, energy, and real-world business data",
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
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
];

export const about = {
  eyebrow: "About",
  title: "I build useful systems where data, software, and operations meet.",
  points: [
    "Computer Science major and Business minor at Michigan State University, graduating in May 2027.",
    "Currently at Tesla Residential Energy, working across entity resolution, reporting automation, GenAI workflows, and Sales Ops analytics.",
    "Previously at EY, supported a $13M enterprise migration through SQL Server validation, UAT, reconciliation, Azure Blob Storage, and Azure DevOps.",
    "Projects focus on market intelligence tooling, applied machine learning, backend microservices, and sustainability analytics.",
    "Strongest in ambiguity: turning messy data, manual workflows, and operational questions into reliable technical systems."
  ]
};

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
    range: "Jan 2026 - Aug 2026",
    role: "Data Analytics Engineering Intern",
    org: "Tesla",
    logo: "/logos/organizations/tesla-symbol.jpg",
    logoAlt: "Tesla logo",
    body:
      "Building Residential Energy analytics and automation systems across entity resolution, executive-facing solar reporting, CRM dashboards, GenAI workflow agents, and 4K+ installer performance benchmarking for Sales leadership."
  },
  {
    range: "May 2025 - Aug 2025",
    role: "Technology Consulting Intern",
    org: "EY",
    logo: "/logos/organizations/ey.png",
    logoAlt: "EY logo",
    body:
      "Supported a $13M enterprise migration by validating 10K+ records, automating SQL Server checks, assisting Azure Blob Storage migration, and triaging defects in Azure DevOps."
  },
  {
    range: "May 2026 - Present",
    role: "Co-Director",
    org: "SpartaHack",
    logo: "/logos/organizations/spartahack.jpeg",
    logoAlt: "SpartaHack logo",
    body:
      "Help lead planning and execution for MSU's 600+ attendee student-run hackathon, coordinating event operations, team execution, logistics, and the overall hacker experience."
  },
  {
    range: "Apr 2026 - Present",
    role: "Director of Technical Affairs",
    org: "International Students Association",
    logo: "/logos/organizations/isa.jpeg",
    logoAlt: "International Students Association logo",
    body:
      "Lead technical planning for ISA's centralized affiliate platform, website infrastructure, internal tooling, and workflow improvements for student organization operations."
  },
  {
    range: "Aug 2024 - Dec 2024",
    role: "Data Analytics Fellow",
    org: "The Global Career Accelerator",
    logo: "/logos/organizations/global-career-accelerator.jpeg",
    logoAlt: "Global Career Accelerator logo",
    body:
      "Analyzed 30M+ engagement records, evaluated Grammy.com KPIs, designed 95% confidence A/B tests, built SQL/Tableau dashboards, and modeled regional energy readiness for Intel-sponsored data center analysis."
  },
  {
    range: "Aug 2024 - Present",
    role: "Resident Assistant",
    org: "Michigan State University",
    logo: "/logos/organizations/msu.webp",
    logoAlt: "Michigan State University logo",
    body:
      "Support 80+ residents through communication, conflict management, community programming, crisis response, and consistent people-facing ownership."
  },
  {
    range: "Aug 2023 - Present",
    role: "B.S. Computer Science, Business Minor",
    org: "Michigan State University",
    logo: "/logos/organizations/msu.webp",
    logoAlt: "Michigan State University logo",
    body:
      "Maintaining a 3.95 GPA while studying computer science, business, artificial intelligence, big data analysis, cloud development, and data structures."
  }
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Argus",
    image: "/images/projects/argus-dashboard.png",
    summary:
      "A Streamlit/PostgreSQL market intelligence platform for tracking AI infrastructure companies, SEC filings, news, watchlists, and opportunity signals.",
    tags: [
      "Python",
      "Streamlit",
      "PostgreSQL",
      "ETL",
      "SQLAlchemy",
      "GitHub Actions"
    ],
    problem:
      "AI infrastructure research was scattered across tickers, news, SEC filings, watchlists, notes, and manual checks, making it difficult to monitor themes consistently.",
    approach:
      "Built a dashboard with scheduled data ingestion, thematic watchlists, company detail pages, filings/news refreshes, scoring models, freshness checks, and local-to-hosted database paths.",
    result:
      "Created a portfolio-grade decision-support tool tracking 50+ companies with daily user feedback, a 27-table PostgreSQL warehouse, scheduled ETL workflows, and explainable scoring signals.",
    links: [{ label: "GitHub", href: "https://github.com/apurva0510/argus" }]
  },
  {
    number: "02",
    title: "FarmX - Sustainable Agriculture",
    image: "/images/projects/farmx.png",
    summary:
      "An MHacks-winning machine learning tool for crop suitability and NPK nutrient recommendations using soil and weather inputs.",
    tags: [
      "Python",
      "scikit-learn",
      "Random Forest",
      "Streamlit",
      "Pandas",
      "NumPy"
    ],
    problem:
      "Agricultural decisions around crop suitability and nutrient use affect yield, cost, and waste, but are often made without adaptive local context.",
    approach:
      "Built a Random Forest regression workflow with weather and soil APIs, Pandas/NumPy preprocessing, Streamlit caching, and a lightweight decision-support interface.",
    result:
      "Won Best Sustainability Track at MHacks 2024 and improved response time by 30% through caching optimization.",
    links: [{ label: "Devpost", href: "https://devpost.com/software/farmx-zpw0yq" }]
  },
  {
    number: "03",
    title: "Micro Foods Market",
    image: "/images/projects/micro-foods-architecture.svg",
    summary:
      "A Dockerized Flask microservices backend for a food marketplace, with REST APIs, JWT authentication, SQLite, and service orchestration.",
    tags: [
      "Python",
      "Flask",
      "SQLite",
      "Docker",
      "REST APIs",
      "JWT"
    ],
    problem:
      "A distributed marketplace backend needs clear service boundaries for authentication, orders, search, logging, and product management.",
    approach:
      "Built 5 Flask microservices with REST endpoints, JWT-based authentication, SQLite persistence, Docker Compose networking, and separated transaction workflows.",
    result:
      "Created a cloud-deployment-ready backend foundation that strengthened service orchestration, authentication, and reusable architecture patterns.",
    links: [{ label: "GitHub", href: "https://github.com/apurva0510/MicroFoodMarket" }]
  },
  {
    number: "04",
    title: "ISA Affiliate CRM - In Progress",
    image: "/images/pic03.jpg",
    summary:
      "A planned CRM-style web app for the ISA to manage affiliates, meeting attendance, and funding requests.",
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
    number: "05",
    title: "Celebrity Face Recognition",
    image: "/images/projects/alexnet.jpg",
    summary:
      "A PyTorch computer vision project that fine-tuned AlexNet to classify a 17-class celebrity face dataset.",
    tags: [
      "Python",
      "PyTorch",
      "AlexNet",
      "Transfer Learning",
      "Computer Vision"
    ],
    problem:
      "Image classification models need to distinguish between visually similar faces while handling variation in lighting, pose, and image quality.",
    approach:
      "Fine-tuned an AlexNet-based model using transfer learning, data augmentation, dropout regularization, k-fold cross-validation, and confusion-matrix error analysis.",
    result:
      "Reached 57.35% accuracy on a high intra-class similarity dataset while building a clearer understanding of model validation and error inspection.",
    links: [{ label: "GitHub", href: "https://github.com/apurva0510/celeb-face-rec" }]
  },
  {
    number: "06",
    title: "Intel Sustainability Modeling",
    image: "/images/projects/intel-sustainability.webp",
    summary:
      "A sustainability analytics project evaluating regional energy readiness for potential data center expansion.",
    tags: [
      "Tableau",
      "Data Analytics",
      "Sustainability",
      "Energy Modeling",
      "Data Visualization"
    ],
    problem:
      "Data center expansion creates significant energy demand, so site-selection decisions need to account for regional capacity, renewable mix, and long-term grid readiness.",
    approach:
      "Modeled regional energy availability and renewable capacity, then built Tableau visualizations to compare five U.S. regions under sustainability constraints.",
    result:
      "Ranked U.S. regions for data center readiness and translated energy data into scenario-driven infrastructure recommendations."
  }
];

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Python",
      "SQL",
      "C/C++",
      "JavaScript",
      "R",
      "ARM64 Assembly"
    ]
  },
  {
    title: "Data + ML",
    skills: [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Entity Resolution",
      "A/B Testing",
      "KPI Design"
    ]
  },
  {
    title: "Cloud + Systems",
    skills: [
      "PostgreSQL",
      "SQLAlchemy",
      "Azure",
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub Actions",
      "REST APIs",
      "Flask",
      "CI/CD"
    ]
  },
  {
    title: "Analytics + Execution",
    skills: [
      "Power BI",
      "Tableau",
      "Excel",
      "Dashboarding",
      "Reporting Systems",
      "Data Validation",
      "Stakeholder Communication",
      "Process Improvement"
    ]
  }
];
