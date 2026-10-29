type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  number: string;
  slug: string;
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
  eyebrow: "CS + BUSINESS @ MSU",
  location: "East Lansing, MI / Palo Alto, CA",
  summary:
    "I build data products, full-stack platforms, and applied AI tools that turn messy workflows into useful software.",
  availability:
    "Targeting new-grad roles in software engineering, data engineering, and AI engineering.",
  resume: "/documents/Apurva Aggarwal - Resume.pdf",
  social: {
    github: "https://www.github.com/apurva0510",
    linkedin: "https://www.linkedin.com/in/apurva0510/",
    instagram: "https://instagram.com/apurva_guitar",
    twitter: "https://twitter.com/apurva_0510"
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
  title: "I turn complex workflows into software people use.",
  points: [
    "Computer Science major and Business minor at Michigan State University, graduating in May 2027.",
    "Completed a Data Analyst internship at Tesla Residential Energy, working across entity resolution, a Power Apps CRM, executive-facing analytics, reporting automation, and GenAI workflows.",
    "Previously at EY, supported a $13M enterprise migration through SQL Server validation, UAT, reconciliation, Azure Blob Storage, and Azure DevOps.",
    "Outside internships, I build data products and full-stack platforms, including Argus, SpartaHack's event system, and MSU ISA's operations platform.",
    "Strongest in ambiguity: turning messy data, manual workflows, and operational questions into reliable software and analytics systems."
  ]
};

export const highlights = [
  {
    value: "Data Engineering",
    label:
      "Pipelines, matching logic, validation workflows, warehouse-backed tools, and repeatable automation"
  },
  {
    value: "Analytics",
    label:
      "KPI logic, dashboarding, benchmarking, reporting systems, and decision-ready analysis"
  },
  {
    value: "AI + Software",
    label:
      "GenAI workflows, applied ML projects, backend services, APIs, and user-facing technical systems"
  },
  {
    value: "Business Context",
    label:
      "Technical work framed around operations, reliability, stakeholders, and practical usefulness"
  },
  {
    value: "Ownership",
    label:
      "Comfortable creating structure, taking over ambiguous workstreams, and driving follow-through"
  }
];

export const experience: Experience[] = [
  {
    range: "Jan 2026 - Aug 2026",
    role: "Data Analyst Intern",
    org: "Tesla",
    logo: "/logos/organizations/tesla-symbol.jpg",
    logoAlt: "Tesla logo",
    body:
      "Built an entity-resolution pipeline for a 35K-account installer network and replaced manual Excel workflows with a Power Apps CRM for 70+ Account Managers and Sales Ops users. Developed GenAI tools supporting 100+ users across 20 workflows and executive-facing solar analytics."
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
    logo: "/logos/organizations/spartahack.png",
    logoAlt: "SpartaHack logo",
    body:
      "Co-lead planning and execution for MSU's 600+ attendee student-run hackathon, overseeing Tech, Marketing, and Logistics while building the live platform for participant and organizer workflows."
  },
  {
    range: "Apr 2026 - Present",
    role: "Director of Technical Affairs",
    org: "International Students Association",
    logo: "/logos/organizations/isa.jpeg",
    logoAlt: "International Students Association logo",
    body:
      "Led ISA's Next.js and Supabase platform from planning through production release, bringing its public website, event registration, affiliate attendance, funding, and staff workflows together."
  },
  {
    range: "Aug 2024 - Dec 2024",
    role: "Data Analytics Fellow",
    org: "The Global Career Accelerator",
    logo: "/logos/organizations/global-career-accelerator.jpeg",
    logoAlt: "Global Career Accelerator logo",
    body:
      "Analyzed 30M+ engagement records, evaluated Grammy.com KPIs, designed A/B experiments, and evaluated engagement differences at 95% confidence. Built SQL/Tableau dashboards and modeled regional energy readiness for Intel-sponsored data center analysis."
  },
  {
    range: "Aug 2024 - Present",
    role: "Resident Assistant",
    org: "Michigan State University",
    logo: "/logos/organizations/msu.webp",
    logoAlt: "Michigan State University logo",
    body:
      "Support 80+ residents through conflict management, community programming, crisis response, and day-to-day community support."
  }
];

export const education: Experience[] = [
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
    slug: "argus",
    title: "Argus",
    image: "/images/projects/argus-dashboard.png",
    summary:
      "A Streamlit/PostgreSQL market intelligence platform for company scoring, valuation, catalysts, and investment thesis tracking. Its AI companion, Argus Friend Brief, turns company research into plain-language, evidence-linked briefs using local Gemma.",
    tags: [
      "Python",
      "Streamlit",
      "PostgreSQL",
      "ETL",
      "SQLAlchemy",
      "GitHub Actions"
    ],
    problem:
      "AI infrastructure research was scattered across market data, SEC filings, news, catalysts, watchlists, and investment notes, making it difficult to evaluate companies and themes consistently.",
    approach:
      "Built scheduled ingestion pipelines and a 33-table PostgreSQL data model for company research, valuation, thesis tracking, and catalyst analysis. The AI companion runs Gemma locally through Ollama, validates citation IDs against a bounded evidence catalog, and rejects invalid responses after one repair attempt.",
    result:
      "Created a research platform tracking 53 companies, used daily by my dad and refined through his feedback. It combines explainable scoring and 5-, 20-, and 60-day backtests with plain-language research briefs, supported by behavioral tests and PostgreSQL-backed CI.",
    links: [
      { label: "GitHub", href: "https://github.com/apurva0510/argus" },
      { label: "AI Companion Code", href: "https://github.com/apurva0510/argus-friend-brief" },
      { label: "Sample AI Briefs", href: "https://argus-friend-brief.streamlit.app/" }
    ]
  },
  {
    number: "02",
    slug: "farmx",
    title: "FarmX - Sustainable Agriculture",
    image: "/images/projects/farmx.png",
    summary:
      "An MHacks-winning Streamlit platform for optimal nitrogen prediction, crop yield projection, and farmer-facing soil resources.",
    tags: [
      "Python",
      "scikit-learn",
      "Random Forest",
      "Streamlit",
      "Pandas",
      "NumPy"
    ],
    problem:
      "Farmers need more personalized guidance around soil health, fertilizer use, and crop selection, especially when fertilizer costs and overuse create practical and environmental tradeoffs.",
    approach:
      "Worked on the Streamlit frontend and ML models, using crop and soil datasets with temperature, humidity, pH, rainfall, crop weight, moisture, crop type, and harvested area features.",
    result:
      "Won Best Sustainability Track at MHacks 2024 with a 24-hour prototype for nitrogen recommendations, crop yield comparison, and farmer resource access.",
    links: [{ label: "Devpost", href: "https://devpost.com/software/farmx-zpw0yq" }]
  },
  {
    number: "03",
    slug: "micro-foods-market",
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
    slug: "spartahack-platform",
    title: "SpartaHack Platform",
    image: "/images/projects/spartahack-platform.png",
    summary:
      "A Next.js and Convex platform for SpartaHack's student-run events, connecting participant workflows with organizer operations.",
    tags: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Vercel",
      "CI/CD"
    ],
    problem:
      "A student-run hackathon designed for 600+ attendees needs more than a landing page: participants and organizers need reliable registration, scheduling, judging, check-in, communication, and administrative workflows.",
    approach:
      "Independently built participant applications, teams, project submissions, check-in, judging, and organizer workflows. Added backend event isolation, department-scoped staff permissions, and durable communication jobs with retries and duplicate-safe recovery.",
    result:
      "Published the live platform for participant registration, check-in, and organizer operations ahead of SpartaHack 12.",
    links: [{ label: "Website", href: "https://spartahack.com" }]
  },
  {
    number: "05",
    slug: "msu-isa-platform",
    title: "MSU ISA Platform",
    image: "/images/projects/msu-isa.png",
    summary:
      "A production Next.js and Supabase platform for public events, registration, affiliate operations, attendance, funding requests, and staff administration.",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "CI/CD"
    ],
    problem:
      "ISA needs a more structured way to manage affiliate organizations, track participation, and handle funding request workflows.",
    approach:
      "Built public and staff workflows with server-enforced permissions, organization isolation, conflict-of-interest rules, and audit records. Tested duplicate-safe operations and automated releases and PostgreSQL migrations through CI/CD.",
    result:
      "Launched msuisa.org, bringing ISA's event registration, affiliate attendance, funding requests, and staff administration into one platform with protected access and traceable operations.",
    links: [{ label: "Website", href: "https://msuisa.org" }]
  },
  {
    number: "06",
    slug: "celebrity-face-recognition",
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
      "Achieved 57.35% classification accuracy across 17 celebrity classes, using confusion-matrix analysis to inspect errors.",
    links: [{ label: "GitHub", href: "https://github.com/apurva0510/celeb-face-rec" }]
  }
];

export const skillGroups = [
  {
    title: "Data Engineering",
    skills: [
      "Python",
      "SQL",
      "PostgreSQL",
      "SQLAlchemy",
      "ETL Pipelines",
      "Data Validation",
      "Entity Resolution",
      "GitHub Actions"
    ]
  },
  {
    title: "Analytics Engineering",
    skills: [
      "Pandas",
      "NumPy",
      "Power BI",
      "Tableau",
      "Excel",
      "KPI Design",
      "A/B Testing",
      "Reporting Systems"
    ]
  },
  {
    title: "AI + ML",
    skills: [
      "GenAI Workflows",
      "MCP",
      "Local LLMs",
      "scikit-learn",
      "PyTorch",
      "Random Forest",
      "Transfer Learning",
      "Computer Vision",
      "Model Evaluation"
    ]
  },
  {
    title: "Software + Cloud",
    skills: [
      "TypeScript / JavaScript",
      "Next.js",
      "React",
      "Supabase",
      "Convex",
      "Server-side Authorization",
      "C/C++",
      "Azure",
      "Docker",
      "REST APIs",
      "Flask",
      "CI/CD",
      "Git"
    ]
  }
];
