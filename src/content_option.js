const logotext = "KRAILYND";
const meta = {
    title: "Elvis Carbajal (Krailynd)",
    description: "Java Software Developer from Ica, Peru — Spring Boot, REST APIs, MySQL/PostgreSQL. Available for work. Also training in Data Science & AI.",
};

const introdata = {
    title: "I’m Elvis Carbajal",
    animated: {
        first: "Java Software Developer",
        second: "Spring Boot · REST APIs · SQL Databases",
        third: "Data Science & AI — In Training",
    },
    description: "Java Software Developer from Ica, Peru — available for internships, freelance projects and junior roles. I specialize in Java and its ecosystem: Spring Boot, REST API design, and relational databases (PostgreSQL, MySQL, MariaDB). Separately, I'm following a structured self-study roadmap toward Data Science & AI — that's my long-term formation, public on GitHub. What I offer today is solid Java/backend development.",
    your_img_url: "https://i.ibb.co/VYmK2gfZ/Imagen12222.png",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I'm a Software Developer and I specialize in Java — the language I know deepest and enjoy most. I build backend services with Spring Boot, design and implement REST APIs, and work with relational databases (PostgreSQL, MySQL, MariaDB). I'm a Systems Engineering and Computing student at UPSJB (Ica, Peru), and I've already shipped real products: an educational platform with 31+ interactive physics/math simulators, Java desktop apps (SahaNotes, SahaCalc), an inventory REST API, an open-source Rust terminal file manager (Open-SahaDisk, from my SahaHacking org), and I run my own self-hosted server — SahaCloud — with Dockerized services behind a reverse proxy and Cloudflare tunnels. Separately — and I want to be transparent about this — I'm in training toward Data Science & AI through a structured self-study roadmap that runs in parallel with my work and studies. That's my long-term direction, not my current job title: what I offer today is solid Java and backend development. I'm CITI-certified in AI ethics and responsible research. When I'm not coding, I produce music and design digital content.",
};
const worktimeline = [{
    jobtitle: "Lead Full Stack Developer & UI Designer",
    where: "SahaHacking | sahahacking.sahacloud.dpdns.org",
    date: "05/2025 - Present",
},
{
    jobtitle: "Founder & Lead Developer — Open Source",
    where: "SahaHacking Org | Open-SahaDisk — Rust terminal file manager & disk analyzer",
    date: "2026 - Present",
},
{
    jobtitle: "Homelab & Self-hosted Infrastructure",
    where: "SahaCloud | sahacloud.dpdns.org — Ubuntu Server, Docker, Caddy, Cloudflare Tunnels",
    date: "2026 - Present",
},
{
    jobtitle: "Software Developer",
    where: "SahaNotes (Beta) & Automation",
    date: "2025 - 03/2026",
},
{
    jobtitle: "Frontend Developer (Freelance)",
    where: "JVLEDIC ELECTRIC S.A.C | jvledic.com — ed-tech corporate website",
    date: "2025",
},
{
    jobtitle: "Web Developer (Freelance)",
    where: "Personal Projects",
    date: "2024 - 2025",
},
{
    jobtitle: "Interuniversity Finalist — Innovation Challenge 2026",
    where: "Team UPSJB · Digital platform for papeleta fractioning optimization",
    date: "06/2026",
},
];

const education = [{
    degree: "B.S. in Systems Engineering and Computing",
    where: "Universidad Privada San Juan Bautista (UPSJB), Ica, Peru",
    date: "03/2025 - Present",
},
{
    degree: "Self-designed Data Science & AI Roadmap (4 stages)",
    where: "Kaggle, freeCodeCamp, Coursera, Hugging Face, Karpathy's Zero to Hero",
    date: "07/2026 - Ongoing",
},
{
    degree: "INGEICA 2025 — 1st Int. Congress of Engineering & AI",
    where: "UPSJB",
    date: "10/2025",
},
{
    degree: "Applied AI Workshop (14 Hours)",
    where: "Engineering Research Institute",
    date: "04/2025",
},
];

const skills = [{
    name: "Java & Spring Boot — My Specialty",
    description: "Backend services with Spring Boot, REST API design and implementation, OOP, algorithms, Maven, and desktop applications (SahaNotes, SahaCalc).",
    icons: ["Java", "Spring Boot", "Maven"],
},
{
    name: "SQL Databases",
    description: "PostgreSQL, MySQL and MariaDB: schema design, queries, and integration with backend services and APIs.",
    icons: ["PostgreSQL", "MySQL", "MariaDB"],
},
{
    name: "Full-Stack Web",
    description: "JavaScript, TypeScript, PHP, HTML/CSS. Auth (OAuth/JWT), real-time chat and dynamic resource management in production platforms.",
    icons: ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3"],
},
{
    name: "Linux, Servers & Self-hosting",
    description: "I run SahaCloud, my own Ubuntu Server: Docker containers, Caddy reverse proxy, Cloudflare Tunnels, Tailscale, Bash/Nushell automation and basic server administration.",
    icons: ["Linux", "Docker", "Bash", "Cloudflare"],
},
{
    name: "Rust & Open Source",
    description: "Open-SahaDisk (SahaHacking org): a cross-platform terminal file manager in Rust — TUI with ratatui, background scanning, Docker integration and defensive-by-default design. MIT licensed.",
    icons: ["Rust", "Docker", "Linux"],
},
{
    name: "Data & AI — In Training",
    description: "Python, Pandas and statistics through a structured self-study roadmap (Kaggle, freeCodeCamp). My long-term formation — public progress on GitHub.",
    icons: ["Python", "Pandas", "Jupyter"],
},
{
    name: "AI & Research Ethics",
    description: "CITI-certified in AI and Human Subject Protections and Responsible Conduct of Research.",
},
{
    name: "Soft Skills",
    description: "Team leadership (led a multidisciplinary team on SahaHacking), clear technical communication with clients (JVLEDIC), self-directed learning, adaptability across stacks, and ownership — I run what I build.",
},
{
    name: "Design & Audio Production",
    description: "UI/UX, Affinity, Krita, Aseprite, Canva. Ableton Live for music production — the creative side of my engineering.",
    icons: ["Canva", "Aseprite"],
},
];

const services = [{
    title: "Java Backend Development — For Hire",
    description: "Spring Boot services, REST API design and implementation, and relational databases (PostgreSQL, MySQL, MariaDB). Available for internships, freelance projects and junior roles.",
},
{
    title: "Desktop Apps & Automation",
    description: "Java desktop applications, Linux scripting and automation (Bash, Python, Nushell), and deployment/self-hosting on my own server infrastructure.",
},
{
    title: "Data & AI — In Training (not for hire yet)",
    description: "I'm studying data analysis and ML through a structured roadmap — my long-term direction. Not a service I offer today, but my progress is public on GitHub.",
},
];

// Portfolio sections: "Backend, Desktop & Systems" | "Frontend & Web" | "Data Science & AI — In Training"
// tech: [{ name, cat }] — cat is one of: "Backend", "Frontend & UI", "Databases", "DevOps & Automation", "Data & ML"
const dataportfolio = [
// --- Backend, Desktop & Systems ---
{
    section: "Backend, Desktop & Systems",
    title: "Open-SahaDisk",
    description: "Cross-platform terminal file manager & disk-usage analyzer written in Rust — the first open-source release of my SahaHacking org (MIT). Safe-by-default file operations with pre-flight risk assessment, background folder sizing, an integrated Docker manager (containers, volumes, Compose stacks), a cleanup engine and doctor diagnostics. Ships as a single binary with zero runtime dependencies.",
    img: "https://opengraph.githubassets.com/1/sahahacking/open-sahadisk",
    github: "https://github.com/sahahacking/open-sahadisk",
    tech: [
        { name: "Rust", cat: "Backend" },
        { name: "Docker", cat: "DevOps & Automation" },
        { name: "Linux", cat: "DevOps & Automation" },
    ],
},
{
    section: "Backend, Desktop & Systems",
    title: "Saha Inventory API",
    description: "REST API for inventory management built in Java — layered architecture with clean separation between controllers, services and persistence, relational database design, and full CRUD endpoints for products and stock control.",
    img: "https://opengraph.githubassets.com/1/krailynd/Saha-API-inventario",
    github: "https://github.com/krailynd/Saha-API-inventario",
    tech: [
        { name: "Java", cat: "Backend" },
        { name: "Spring Boot", cat: "Backend" },
        { name: "MySQL", cat: "Databases" },
    ],
},
{
    section: "Backend, Desktop & Systems",
    title: "Java Login",
    description: "Authentication system built in Java — user registration and secure login flows, credential handling, input validation and account management, built as a complete desktop app.",
    img: "https://opengraph.githubassets.com/1/krailynd/Java-login",
    github: "https://github.com/krailynd/Java-login",
    tech: [
        { name: "Java", cat: "Backend" },
        { name: "MySQL", cat: "Databases" },
    ],
},
{
    section: "Backend, Desktop & Systems",
    title: "SahaNotes (Beta)",
    description: "Markdown-based desktop notepad built in Java — create, edit and organize notes with live rendering, local file persistence and a clean, distraction-free interface.",
    img: "https://opengraph.githubassets.com/1/krailynd/SahaNotes",
    github: "https://github.com/krailynd/SahaNotes",
    tech: [
        { name: "Java", cat: "Backend" },
    ],
},
{
    section: "Backend, Desktop & Systems",
    title: "SahaCalc",
    description: "Java desktop calculator with a built-in graphing tool — standard and scientific operations plus visual plotting of math functions.",
    img: "https://opengraph.githubassets.com/1/krailynd/SahaCalc",
    github: "https://github.com/krailynd/SahaCalc",
    tech: [
        { name: "Java", cat: "Backend" },
    ],
},
{
    section: "Backend, Desktop & Systems",
    title: "SahaTools",
    description: "Operations console (FastAPI + Docker) running on my own server — live monitoring of every SahaCloud service, utilities and document tools for the whole self-hosted ecosystem, in one place.",
    img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsahatools.sahacloud.dpdns.org?w=640&h=360",
    demo: "https://sahatools.sahacloud.dpdns.org",
    tech: [
        { name: "Python", cat: "Backend" },
        { name: "FastAPI", cat: "Backend" },
        { name: "Docker", cat: "DevOps & Automation" },
    ],
},
{
    section: "Backend, Desktop & Systems",
    title: "SahaCloud",
    description: "My self-hosted personal cloud: an Ubuntu Server homelab running ~25 Docker containers behind a Caddy reverse proxy and Cloudflare Tunnels — Nextcloud, Mattermost, Outline docs, code-server, n8n automation, Home Assistant, SearXNG and more, across 12+ subdomains. I designed, deployed and maintain all of it.",
    img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsahacloud.dpdns.org?w=640&h=360",
    demo: "https://sahacloud.dpdns.org",
    tech: [
        { name: "Linux", cat: "DevOps & Automation" },
        { name: "Docker", cat: "DevOps & Automation" },
        { name: "Caddy", cat: "DevOps & Automation" },
        { name: "Cloudflare", cat: "DevOps & Automation" },
        { name: "Bash", cat: "DevOps & Automation" },
    ],
},
{
    section: "Backend, Desktop & Systems",
    title: "bash-nu-sftp-ssh",
    description: "Automation toolkit in Bash & Nushell for SFTP/SSH workflows on Linux — scripted transfers, server routines and remote operations I use daily to manage my own infrastructure.",
    img: "https://opengraph.githubassets.com/1/krailynd/bash-nu-sftp-ssh",
    github: "https://github.com/krailynd/bash-nu-sftp-ssh",
    tech: [
        { name: "Bash", cat: "DevOps & Automation" },
        { name: "Nushell", cat: "DevOps & Automation" },
    ],
},
{
    section: "Backend, Desktop & Systems",
    title: "java-proyects",
    description: "My Java learning log — UPSJB university projects, exercises and mini-apps documenting my progress with the language: OOP, data structures, algorithms and real coursework.",
    img: "https://opengraph.githubassets.com/1/krailynd/java-proyects",
    github: "https://github.com/krailynd/java-proyects",
    tech: [
        { name: "Java", cat: "Backend" },
    ],
},
// --- Frontend & Web ---
{
    section: "Frontend & Web",
    title: "SahaHacking Platform",
    description: "Educational platform & virtual lab with 31+ interactive physics and math simulators. I led a multidisciplinary team and built the responsive scientific UI, secure authentication (OAuth/JWT) and real-time chat. Self-hosted in production on my own server.",
    img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsahahacking.sahacloud.dpdns.org?w=640&h=360",
    demo: "https://sahahacking.sahacloud.dpdns.org",
    tech: [
        { name: "JavaScript", cat: "Frontend & UI" },
        { name: "HTML5", cat: "Frontend & UI" },
        { name: "CSS3", cat: "Frontend & UI" },
        { name: "PHP", cat: "Backend" },
    ],
},
{
    section: "Frontend & Web",
    title: "JVLEDIC ELECTRIC S.A.C",
    description: "Corporate website for a Peruvian ed-tech company (freelance, in production) — services catalog covering educational robotics, AI & programming courses and STEAM programs, official distributor showcase (DOBOT, Makeblock, Elecrow), blog, quotation flows and certifications pages. Fully responsive frontend.",
    img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fjvledic.com?w=640&h=360",
    demo: "https://jvledic.com",
    tech: [
        { name: "JavaScript", cat: "Frontend & UI" },
        { name: "HTML5", cat: "Frontend & UI" },
        { name: "CSS3", cat: "Frontend & UI" },
    ],
},
{
    section: "Frontend & Web",
    title: "Pages-rycle",
    description: "Freelance web page with a PHP backend — custom contact forms with validation and automated email delivery via PHPMailer, designed and deployed end-to-end.",
    img: "https://opengraph.githubassets.com/1/krailynd/Pages-rycle",
    github: "https://github.com/krailynd/Pages-rycle",
    tech: [
        { name: "PHP", cat: "Backend" },
        { name: "HTML5", cat: "Frontend & UI" },
        { name: "CSS3", cat: "Frontend & UI" },
        { name: "JavaScript", cat: "Frontend & UI" },
    ],
},
// --- Data Science & AI — In Training ---
{
    section: "Data Science & AI — In Training",
    title: "Titanic EDA (Kaggle)",
    description: "[In progress] My first complete data-to-model workflow on the classic Kaggle dataset — data cleaning and exploratory analysis with Pandas, feature engineering, and Logistic Regression vs Random Forest compared with proper evaluation metrics.",
    img: "https://opengraph.githubassets.com/1/krailynd/titanic-eda-kaggle",
    github: "https://github.com/krailynd/titanic-eda-kaggle",
    tech: [
        { name: "Python", cat: "Data & ML" },
        { name: "Pandas", cat: "Data & ML" },
        { name: "scikit-learn", cat: "Data & ML" },
        { name: "Jupyter", cat: "Data & ML" },
        { name: "Kaggle", cat: "Data & ML" },
    ],
},
{
    section: "Data Science & AI — In Training",
    title: "Interactive BI Dashboard",
    description: "[Planned] Interactive BI dashboard with Streamlit / Power BI — real business questions answered through live filters and drill-downs: the day-to-day work of a Data Analyst.",
    img: "",
    github: "https://github.com/krailynd",
    tech: [
        { name: "Python", cat: "Data & ML" },
        { name: "Streamlit", cat: "Data & ML" },
    ],
},
{
    section: "Data Science & AI — In Training",
    title: "Telecom Customer Churn Prediction",
    description: "[Planned] Customer churn prediction on telecom data — handling imbalanced classes, model selection driven by F1/Recall, and business storytelling around retention.",
    img: "",
    github: "https://github.com/krailynd",
    tech: [
        { name: "Python", cat: "Data & ML" },
        { name: "Pandas", cat: "Data & ML" },
        { name: "scikit-learn", cat: "Data & ML" },
    ],
},
{
    section: "Data Science & AI — In Training",
    title: "Web Scraping + Trend Analysis (Peru)",
    description: "[Planned] Automated web-scraping pipeline on Peruvian data sources — from raw collection to clean time-series and visual trend analysis.",
    img: "",
    github: "https://github.com/krailynd",
    tech: [
        { name: "Python", cat: "Data & ML" },
    ],
},
{
    section: "Data Science & AI — In Training",
    title: "RAG Chatbot over my own documents",
    description: "[Planned] RAG chatbot over my own documents — embeddings, vector search and an LLM that answers questions from my UPSJB notes with cited sources.",
    img: "",
    github: "https://github.com/krailynd",
    tech: [
        { name: "Python", cat: "Data & ML" },
    ],
},
{
    section: "Data Science & AI — In Training",
    title: "Flagship: Peruvian Data Solution End-to-End",
    description: "[Planned] Flagship project: an end-to-end data solution with Peruvian public data (INEI/BCRP) — from dataset to trained model to a FastAPI service deployed on my own server.",
    img: "",
    github: "https://github.com/krailynd",
    tech: [
        { name: "Python", cat: "Data & ML" },
        { name: "FastAPI", cat: "Backend" },
        { name: "Docker", cat: "DevOps & Automation" },
    ],
},
];

const certifications = [{
    title: "Artificial Intelligence (AI) and Human Subject Protections",
    description: "CITI Program — AI and ethical protection of human subjects in digital environments.",
},
{
    title: "Responsible Conduct of Research for Engineers",
    description: "CITI Program (05/2025) — Ethical and responsible research conduct for engineering.",
},
{
    title: "Best Practices for Global Research Partnerships",
    description: "CITI Program (03/2026) — Global research collaboration best practices.",
},
{
    title: "A Beginner’s Guide to Being a Sponsor-Investigator",
    description: "CITI Program (05/2025) — Leading and managing academic research projects.",
},
{
    title: "Bring Your Own Device (BYOD) Studies",
    description: "CITI Program (05/2025) — Best practices for BYOD technical studies.",
},
{
    title: "Applied AI to Science Workshop",
    description: "UPSJB (05/2025) — Hands-on workshop on AI applied to scientific work.",
},
{
    title: "Yachaywasi Net 2026 — AI & Digital Transformation",
    description: "UPSJB (06/2026) — Innovation and new technologies.",
},
{
    title: "YACHAYHUASI — Smart Tourism & Strategic Communication",
    description: "UPSJB (06/2026) — Digital transformation and sustainable management.",
},
];

// NOTE: email and phone are intentionally NOT stored here in plain text.
// They are built at runtime in src/utils/contact.js (anti-scraper).
const contactConfig = {
    description: "Available now for Java/backend development work — internships, freelance projects and junior roles. (I'm also training in Data Science & AI, but Java is what I offer today.) Let's talk!",
};

const socialprofils = {
    email: "email", // placeholder key — the real mailto is built at runtime (src/utils/contact.js)
    github: "https://github.com/krailynd",
    facebook: "https://www.facebook.com/profile.php?id=61574260263669",
    linkedin: "https://linkedin.com/in/elviscarbajal",
    twitter: "https://x.com/_krailynd",
    youtube: "https://www.youtube.com/@Krailyndrumss?sub_confirmation=1",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    education,
    skills,
    services,
    certifications,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
