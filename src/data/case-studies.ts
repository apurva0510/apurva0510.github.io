type CaseStudy = {
  headline: string;
  subtitle: string;
  role: string;
  opening: string[];
  chapters: { title: string; paragraphs: string[] }[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "argus": {
    "headline": "I built Argus to help my dad research the AI infrastructure market",
    "subtitle": "How a family request grew into a daily research tool—and why the next useful feature was a clearer explanation.",
    "role": "Creator of Argus",
    "opening": [
      "Argus began with my dad. He wanted to research companies connected to AI and data centers, including businesses beyond the obvious names. Prices were only one piece of that research. There were also company filings, news, valuations, and notes about why a company might be worth following.",
      "I built a place to bring those pieces together. It became Argus: a research application that my dad uses every day, with watchlists, company research, explainable scores, and a place to keep track of an investment thesis."
    ],
    "chapters": [
      {
        "title": "Following a question through the research",
        "paragraphs": [
          "The question behind the app was more specific than “which AI stock is going up?” My dad wanted to explore companies and sectors connected to the buildout of AI infrastructure, including ones that might be receiving less attention. That meant the product needed room for semiconductors, memory, power, and other supporting businesses, rather than one undifferentiated list of technology stocks.",
          "The workflow starts with a watchlist. From there, a company view brings together its price history, financial metrics, news, and SEC filings. A pullback view helps narrow the research list, while valuation comparisons add context about how a company looks against its peers. Bull and bear theses, conviction levels, and review dates preserve the reasoning behind an idea.",
          "I wanted a person to be able to return to an idea and understand what had changed. A price movement, an earnings release, and an old research note tell different parts of the story. Putting them together was more useful than adding another chart."
        ]
      },
      {
        "title": "Letting a real user shape the product",
        "paragraphs": [
          "My dad kept asking for new symbols and ways to research different themes. Those requests changed the structure of the product. For example, I separated semiconductors and memory into their own bucket and removed data-center REITs when they no longer matched the research he wanted to do.",
          "The same judgment applied to the AI infrastructure index. Highly speculative, pre-revenue names could distort its performance and make it less representative of the core theme. I kept those companies out of the core index while retaining room to research them separately.",
          "These were product decisions as much as data decisions. The useful universe was the one that fit the research routine. It needed to be maintained as that routine evolved."
        ]
      },
      {
        "title": "Building enough infrastructure to keep it useful",
        "paragraphs": [
          "I used Python and Streamlit for the application, with SQLAlchemy connecting the data model to SQLite locally and PostgreSQL in hosted use. Scheduled GitHub Actions jobs refresh prices, filings, news, and macro data. The platform grew to track 53 companies across a 33-table model.",
          "I started with free data sources and kept brokerage connections and trade execution outside the scope. The purpose was to help someone research and form a view. Explainable scoring, peer comparisons, and historical backtests fit that purpose better than an opaque recommendation.",
          "I also explored return-prediction models. Their results were not strong enough to justify putting them into the product, so they stayed offline. A narrower historical downside screen proved more useful, with its limitations kept explicit. Building a model did not make it a feature the user needed."
        ]
      },
      {
        "title": "The dashboard still needed a translator",
        "paragraphs": [
          "As Argus became more capable, my dad still had to interpret the metrics and connect the evidence himself. More information had not automatically made the research easier to understand. That became the starting point for Argus Friend Brief.",
          "The companion uses a local Gemma model to turn a company’s research evidence into plain-language briefs. It works from a bounded set of evidence, and factual claims have to point back to that evidence. Citation checks and a limited repair step help keep an explanation tied to what the system actually knows.",
          "I made the public demo from a sanitized snapshot, with saved examples that people can inspect. Fresh generation runs locally. That let me share the idea without exposing personal research notes or making the demo depend on an always-running model server."
        ]
      },
      {
        "title": "A project that keeps coming back to its user",
        "paragraphs": [
          "The most useful outcome is that my dad comes back to Argus every day and continues to tell me what would help. The application has grown from a family request into a maintained research workflow, and the feedback has shaped both the data platform and the AI companion.",
          "I developed it with coding agents, directing product scope, architecture, review, and verification. Over time, the difficult part became choosing which complexity was worth keeping. A new model, dataset, or page only helped if it made the next research decision clearer."
        ]
      }
    ]
  },
  "spartahack-platform": {
    "headline": "Building a home for SpartaHack, before and during the event",
    "subtitle": "A hackathon website grew into the platform connecting the participant experience with the team organizing it.",
    "role": "SpartaHack Co-Director",
    "opening": [
      "As a SpartaHack Co-Director, I work across Tech, Marketing, and Logistics. Building the platform put those responsibilities in the same place: the website had to give students a reason to attend, help them apply, and support the organizers preparing the event.",
      "I built the public site and the participant and organizer workspaces around that full journey. The flagship hackathon was the starting point, but the organization also needed a home for events throughout the year."
    ],
    "chapters": [
      {
        "title": "Give people a reason to explore",
        "paragraphs": [
          "The public site uses a pixel-art identity, hidden discoveries, and achievements. I wanted the website to feel connected to the experience of SpartaHack, with things to find before someone ever reaches an application form.",
          "That exploration carries into the signed-in experience through achievements and a coin wallet. The participant dashboard then brings together the more practical parts: an application, RSVP, event information, announcements, and a QR credential for check-in. The playful layer and the operational layer belong to the same experience."
        ]
      },
      {
        "title": "Follow the participant all the way through",
        "paragraphs": [
          "An application is the beginning of a longer relationship with the event. Applicants need to save progress, review what they have entered, and return without losing edits. Later, participants need teams, project submissions, schedules, and a straightforward way to check in.",
          "Working on that journey exposed assumptions that looked reasonable in code but failed for real people. A .edu-only signup rule excluded legitimate students at schools using other domains. I expanded the school-domain approach and reviewed exceptions against official school information. Similarly, normalizing profile links and explaining invalid fields made the form more forgiving without changing its requirements.",
          "Those details mattered because a student should be concentrating on their application, not figuring out which format a field silently expects. Saved drafts, clear errors, and a complete review step became part of the core experience."
        ]
      },
      {
        "title": "Build the organizer’s side of the same event",
        "paragraphs": [
          "Behind the public site, the team needs application review, announcements, schedules, check-in, judging, and staff administration. I structured access around the departments actually doing that work, including Operations, Tech, Logistics, Marketing, and Finance. That lets people work in their area without giving everyone complete administrative control.",
          "Communication had to connect those workspaces to the channels people use. Organizers can prepare announcements for the public, event attendees, or staff, with web, email, and Discord delivery. The audience and the difference between saving a draft and publishing need to be obvious before an organizer acts.",
          "Event-day tools have their own rhythm. Check-in should handle a line of attendees without restarting the camera after each scan. Reward transactions should identify the attendee and make the intended action explicit. I designed these flows around the person operating them as well as the person arriving."
        ]
      },
      {
        "title": "One organization, more than one event",
        "paragraphs": [
          "Hacktoberfest made the broader platform need concrete. It needed its own campaign page and event operations while still belonging to SpartaHack. I kept accounts, achievements, and the wallet global, with applications, projects, check-in, and permissions tied to each event.",
          "That allows the flagship to keep its identity at the main site while other events have their own entry points. A person can have an account without automatically being enrolled everywhere, and organizers can work within the event they are running.",
          "The application uses Next.js and Convex, with Convex supporting realtime data and scheduled work. Keeping event scope in the backend means that the separation applies to operations as well as the screens people see."
        ]
      },
      {
        "title": "Building for the team that comes next",
        "paragraphs": [
          "The platform is live, and the public and organizer experience has extended beyond the flagship to Hacktoberfest. SpartaHack 12 is still ahead, so event-day rehearsal remains part of the work; a published website is one milestone in running the event.",
          "I also maintain documentation for architecture, access, deployment, and operations. A student organization changes hands. The platform needs to be understandable to the next team, including how to recover when a provider fails or an event setting needs to change.",
          "This project has put product development next to organizational responsibility. I can work on an application screen and then consider the same decision as someone responsible for the event. That connection is what makes the platform worth building."
        ]
      }
    ]
  },
  "msu-isa-platform": {
    "headline": "Building the website and working home for MSU ISA",
    "subtitle": "Connecting public events with the affiliate organizations, funding requests, and people behind them.",
    "role": "ISA Director of Technical Affairs",
    "opening": [
      "For MSU’s International Students Association, the public website is one part of a much larger set of responsibilities. Students need to discover events. Affiliate organizations need to stay connected with ISA, attend meetings, and apply for support. Staff need to coordinate those activities across different roles.",
      "As Director of Technical Affairs, I led a platform that brings those needs together. The result is msuisa.org: a public website backed by an invite-only workspace for ISA staff and affiliate representatives."
    ],
    "chapters": [
      {
        "title": "Start with the people on either side of the website",
        "paragraphs": [
          "A student attending an event should be able to find it and register without joining an administrative system. An affiliate representative needs a different view: their organization’s attendance, funding history, and collaboration proposals. Finance and Events staff need the information relevant to their work.",
          "I built those experiences within one Next.js and Supabase application. The public site handles discovery and registration; the portal connects the records and decisions behind them. Someone signing up for an event becomes an event registration, while permanent portal access comes through an invitation.",
          "That distinction keeps the public experience simple and gives the organization a more deliberate way to manage responsibility."
        ]
      },
      {
        "title": "Follow an idea from proposal to public event",
        "paragraphs": [
          "One of the most useful connections is between affiliate collaboration and event planning. An affiliate can submit a proposal, Events staff can review it, and an approved proposal can become a draft event or link to an existing one.",
          "I kept collaboration and funding as separate decisions. Agreeing to work together does not automatically approve a budget. Funding has its own application and review process, including revisions, invoices, and payment confirmation. The software needs to preserve those distinctions while still letting staff see how the work connects.",
          "The handoff to a public event also needs care. A proposal may contain private answers or internal feedback. Creating a draft carries forward the useful event connection without publishing those answers. Staff write the public description and choose when it is ready to go live."
        ]
      },
      {
        "title": "Make organizational rules visible in the workflow",
        "paragraphs": [
          "Affiliate attendance and funding eligibility are connected in ISA’s operations. That meant the platform needed to record who was expected at a meeting, what attendance was recorded, and whether the outcome affected funding.",
          "An early meeting exposed a gap: recording an absence was not enough if the system had never recorded the affiliate’s attendance requirement. The fix connected meeting creation to the required organizations and added a grace period for corrections before final absences affected eligibility.",
          "The broader lesson was about translating an organizational process into software. A rule needs a clear starting point, a person responsible for corrections, and a way to explain the outcome later. Staff also need a deliberate route to restore eligibility when appropriate."
        ]
      },
      {
        "title": "Leave room for how events actually run",
        "paragraphs": [
          "Not every event needs a hard cutoff at capacity. I added a soft threshold that keeps registration open while marking later signups as overflow. Changing that threshold affects future signups rather than rearranging people who have already registered.",
          "Staff can also reopen registration before an event starts with a new deadline and a recorded reason. These controls acknowledge that plans change. The platform should help the team make an intentional correction rather than force them to work around the system.",
          "For event-day use, registration ledgers provide search, filters, affiliation context, and exports, while staffed check-in has a more focused roster. Keeping those screens distinct helps each person find what they need for the task in front of them."
        ]
      },
      {
        "title": "Make it feel like ISA",
        "paragraphs": [
          "The public site uses ISA’s green and gold identity, campus imagery, and a responsive layout. I wanted it to feel connected to the student organization it represents. Event information and calls to action need to be clear, with the visual identity supporting them.",
          "The portal received the same attention to everyday use. I worked through shared form layouts, field alignment, filters, loading states, and empty sections. Consistency mattered across funding, invitations, meetings, and events because staff move between those tasks."
        ]
      },
      {
        "title": "From a prototype plan to a live platform",
        "paragraphs": [
          "The original target was a working prototype by mid-October. The project reached a production release before that target and now lives at msuisa.org, connecting public events, registrations, affiliate operations, and funding workflows.",
          "The next stage is operational use: more real event content, broader rehearsal with staff roles, and a lasting ownership plan. Launching the software gives ISA a foundation; maintaining it through changing student leadership is part of making that foundation useful.",
          "For me, the project has been a chance to turn organizational responsibility into a product. The important decisions have been about what people need to do, what information they need to see, and how the next person can continue the work."
        ]
      }
    ]
  },
  "farmx": {
    "headline": "Building FarmX in a 24-hour hackathon",
    "subtitle": "Our MHacks sustainability project brought nitrogen prediction, crop-yield comparison, and soil resources into one application.",
    "role": "Frontend and machine learning · Team project",
    "opening": [
      "At MHacks 2024, our team worked on a farming problem: how to make soil and crop data useful for decisions about fertilizer and yield. Fertilizer overuse has environmental consequences, while cost and access to information can make decisions harder for smaller or first-time farmers.",
      "We built FarmX, a 24-hour prototype combining nitrogen prediction, crop-yield projection, and farmer resources. I worked on the frontend and machine learning models, developing the Streamlit application and integrating the predictions into the interface."
    ],
    "chapters": [
      {
        "title": "Turn the idea into something we could finish",
        "paragraphs": [
          "The scope centered on a few concrete questions. Given environmental conditions such as temperature, humidity, pH, and rainfall, what nitrogen value does the model predict? How does projected yield change with crop type, moisture, weight, and harvested area?",
          "Those questions gave the application a structure. Users could enter conditions, inspect predictions, and compare crop and yield information. A resource page linked out to soil-health, fertilizer, and USDA-related material so the experience included a route to further information."
        ]
      },
      {
        "title": "Change tools when the workflow calls for it",
        "paragraphs": [
          "We initially explored a KivyMD direction and shifted to Streamlit. With the data and model work already in Python, Streamlit provided a direct way to bring the predictions into an interactive application within the deadline.",
          "I worked on making that interface and the ML models function together. Random Forest models supported the prediction tasks, with saved models reused in the Streamlit workflow. Scatterplots, correlation matrices, and actual-versus-predicted views helped us inspect the data and outputs.",
          "The time constraint made tool choice practical. We were learning several parts of the stack as we went, and the project needed a working path from input to result."
        ]
      },
      {
        "title": "What we took away from MHacks",
        "paragraphs": [
          "FarmX won Best Sustainability Track at MHacks 2024. We finished with a working prototype that connected an agricultural problem to a model and an interface, rather than leaving it at a prediction notebook.",
          "The prototype was not a field-validated farming system. Ideas such as phosphorus and potassium prediction, geographical soil data, and sensor inputs would require more data and evaluation. Within the hackathon, the achievement was getting a focused version working and making its purpose understandable.",
          "The project gave me early experience working across frontend development and model integration under a deadline. It also connected sustainability to the kind of technical work I enjoy: turning data into something a person can interact with."
        ]
      }
    ]
  },
  "micro-foods-market": {
    "headline": "Learning service boundaries through a food marketplace",
    "subtitle": "A Flask backend project connecting authentication, products, search, orders, and logging with Docker.",
    "role": "Backend development",
    "opening": [
      "Micro Foods Market is a backend project organized around a food marketplace. It gave me a concrete way to work with the parts behind an application: accounts, products, search, orders, and the records of what happened.",
      "I built five Flask microservices with REST APIs, SQLite persistence, and JWT authentication, then connected them through Docker Compose."
    ],
    "chapters": [
      {
        "title": "Work through the boundaries of an application",
        "paragraphs": [
          "The marketplace divides into recognizable responsibilities. Authentication handles identity, product management maintains the catalog, search helps locate products, and orders represent transactions. Logging is a separate responsibility within the system.",
          "Separating those services made their interfaces part of the project. Each service needed a defined API, and a workflow spanning services needed those APIs to fit together. JWT authentication added identity to the requests moving through that backend."
        ]
      },
      {
        "title": "Run the system together",
        "paragraphs": [
          "Docker Compose provided the local orchestration and networking. That brought the services into one development setup and made the connections between them explicit.",
          "The result is a containerized backend foundation, rather than a launched marketplace. Its value for me was working through service separation, authentication, and integration in the context of an application. It gave me backend experience that I could carry into later platform projects."
        ]
      }
    ]
  },
  "celebrity-face-recognition": {
    "headline": "Learning to look beyond a classifier’s accuracy",
    "subtitle": "Fine-tuning AlexNet to recognize 17 celebrity classes, then examining where it struggled.",
    "role": "Computer vision and model evaluation",
    "opening": [
      "In this computer vision project, I trained a classifier to distinguish between 17 celebrity classes. I used a pretrained AlexNet model in PyTorch, adapting it to the dataset through transfer learning.",
      "The project brought together model training and a question that matters just as much: what can I learn from the images the model gets wrong?"
    ],
    "chapters": [
      {
        "title": "Adapt the model to the dataset",
        "paragraphs": [
          "Transfer learning provided an existing image representation to build on. I used rotation, flips, and color jitter to vary training images, along with dropout regularization to address overfitting.",
          "The task still required evaluation on the target classes. K-fold cross-validation and confusion-matrix analysis helped examine performance rather than treating a successful training run as the end of the project."
        ]
      },
      {
        "title": "Read the errors as part of the result",
        "paragraphs": [
          "The classifier achieved 57.35% accuracy across the 17 classes. That number describes the overall outcome, but the confusion matrix and misclassified examples provide more detail about which distinctions were difficult.",
          "This was a closed-set classification project: choosing among known classes in a particular dataset. Its result is useful in that context. It does not describe performance on new identities or establish a general identity-verification system.",
          "The project expanded my experience beyond tabular models into image classification. The lasting lesson was to connect the reported metric to the task and inspect the errors before deciding what the model can do."
        ]
      }
    ]
  }
};
