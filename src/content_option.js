const logotext = "KRAILYND";
const meta = {
    title: "Elvis Carbajal (Krailynd) — Software Developer",
    description: "Software Developer specializing in Backend Architecture (Java, Spring Boot, PHP, Rust), Modern Web Systems (React, TypeScript), and Applied Data Engineering. Available for hire.",
};

const introdata = {
    title: "I’m Elvis Carbajal",
    animated: {
        first: "Software Developer & Systems Builder",
        second: "Java · Spring Boot · PHP MVC · Rust",
        third: "Modern Web · React · Linux Infrastructure",
        fourth: "Data Pipelines · Applied Machine Learning",
    },
    description: "Software Developer from Ica, Peru. I build robust, high-performance software across the stack — from production-grade backend APIs and MVC architectures to modern, kinetic web interfaces and automated data pipelines. I also deploy and maintain self-hosted cloud infrastructure on Linux with Docker.",
    your_img_url: "https://i.ibb.co/VYmK2gfZ/Imagen12222.png",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I’m a Software Developer and Systems Engineering student at UPSJB (Ica, Peru) with hands-on experience delivering real-world software. My core strengths are in backend engineering — designing clean, scalable architectures with Java (Spring Boot) and PHP (MVC, OAuth 2.0, 2FA) —, systems programming in Rust (Open-SahaDisk), and building fluid, responsive interfaces in React and TypeScript. In addition, I architect automated ETL pipelines and applied machine learning models (churn prediction, e-commerce BI), and run SahaCloud — my personal Ubuntu Server homelab managing 20+ Dockerized services behind Caddy reverse proxies and Cloudflare Tunnels. I approach engineering with a craftsman mindset: clean code, defensive design, strict security hygiene, and polished user experiences.",
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
    jobtitle: "Backend & Full-Stack Developer",
    where: "Odontologia Local — Dental Clinic ERP (PHP MVC, Google OAuth 2.0, TOTP 2FA)",
    date: "2026",
},
{
    jobtitle: "Desktop Application Developer",
    where: "LitchModoro & SahaNotes — Java 21 & JavaFX desktop tooling",
    date: "2025 - Present",
},
{
    jobtitle: "Frontend Developer (Freelance)",
    where: "JVLEDIC ELECTRIC S.A.C | jvledic.com — ed-tech corporate website",
    date: "2025",
},
{
    jobtitle: "Interuniversity Finalist — Innovation Challenge 2026",
    where: "Team UPSJB · Digital platform for fine fractioning optimization",
    date: "06/2026",
},
];

const education = [{
    degree: "B.S. in Systems Engineering and Computing",
    where: "Universidad Privada San Juan Bautista (UPSJB), Ica, Peru",
    date: "03/2025 - Present",
},
{
    degree: "Data Engineering & Applied Machine Learning Specialization",
    where: "Kaggle, Coursera, Hugging Face, DeepLearning.AI",
    date: "2025 - Present",
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
    name: "Java & Spring Boot — Backend Specialty",
    description: "Enterprise backend services with Spring Boot, RESTful API design, object-oriented architecture, Maven, and desktop tools with JavaFX.",
    icons: ["Java", "Spring Boot", "Maven"],
},
{
    name: "PHP & Clean MVC Architecture",
    description: "Pure PHP 8 with clean MVC separation, session hardening, Google Cloud OAuth 2.0, RFC 6238 TOTP 2FA, RBAC, and zero external framework bloat.",
    icons: ["PHP", "MySQL", "JavaScript"],
},
{
    name: "Relational Databases & Data Modeling",
    description: "PostgreSQL, MySQL, MariaDB, and SQLite: schema normalization, relational integrity, indexing strategies, and query optimization.",
    icons: ["PostgreSQL", "MySQL", "MariaDB", "SQLite"],
},
{
    name: "Rust & Systems Programming",
    description: "Open-SahaDisk (SahaHacking org): cross-platform terminal file manager and disk analyzer in Rust with Ratatui TUI, background scanning, Docker engine, and defensive design. MIT licensed.",
    icons: ["Rust", "Docker", "Linux"],
},
{
    name: "Modern Frontend & Interactive UI",
    description: "React 18, TypeScript, Vite, Tailwind CSS, HTML5/CSS3, responsive design systems, fluid motion, and accessible, high-converting interfaces.",
    icons: ["React", "TypeScript", "HTML5", "CSS3"],
},
{
    name: "Linux, Homelab & Self-Hosting",
    description: "SahaCloud: personal Ubuntu Server homelab running 20+ Docker containers, Caddy reverse proxy, Cloudflare Tunnels, Tailscale mesh VPN, and Bash/Nushell automation.",
    icons: ["Linux", "Docker", "Bash", "Cloudflare"],
},
{
    name: "Data Engineering & Applied ML",
    description: "Python, Pandas, scikit-learn, Streamlit, Plotly, Jupyter. Automated ETL pipelines, interactive BI dashboards, and predictive classification models.",
    icons: ["Python", "Pandas", "scikit-learn", "Streamlit", "Jupyter"],
},
{
    name: "AI Ethics & Research Governance",
    description: "CITI-certified in AI and Human Subject Protections, Responsible Conduct of Research for Engineers, and research project management.",
},
{
    name: "Technical Leadership & Delivery",
    description: "Multidisciplinary team leadership (SahaHacking), direct client communication (JVLEDIC), self-directed problem solving, and end-to-end ownership.",
},
];

const services = [{
    title: "Backend Architecture & REST APIs",
    description: "Scalable, secure backend systems in Java (Spring Boot) and PHP (clean MVC, OAuth 2.0, TOTP 2FA), with relational database design (PostgreSQL, MySQL) and strict security hygiene.",
},
{
    title: "Modern Web & UI/UX Development",
    description: "High-polish web applications in React and TypeScript with fluid animations, intuitive user journeys, and responsive layouts built with precision.",
},
{
    title: "Data Pipelines & Applied Analytics",
    description: "Automated ETL pipelines, data extraction, interactive BI dashboards with Streamlit, and applied machine learning models tailored for business decision-making.",
},
{
    title: "Infrastructure & Linux Automation",
    description: "Containerized service deployment with Docker, reverse proxy configuration (Caddy), Cloudflare Tunnels, shell automation, and Linux server administration.",
},
];

// Portfolio sections: "Backend, Systems & Architecture" | "Frontend, Web & Interactive UI" | "Data Engineering & Applied Machine Learning"
// tech: [{ name, cat }] — cat is one of: "Backend", "Frontend & UI", "Databases", "DevOps & Automation", "Data & ML"
const dataportfolio = [
// --- Backend, Systems & Architecture ---
{
    section: "Backend, Systems & Architecture",
    title: "Open-SahaDisk",
    description: "Cross-platform terminal file manager & disk-usage analyzer written in Rust — the first open-source release of my SahaHacking org (MIT). Safe-by-default file operations with pre-flight risk assessment, background folder sizing, an integrated Docker manager (containers, volumes, Compose stacks), a cleanup engine and doctor diagnostics. Single binary with zero runtime dependencies.",
    img: "https://opengraph.githubassets.com/1/sahahacking/open-sahadisk",
    github: "https://github.com/sahahacking/open-sahadisk",
    tech: [
        { name: "Rust", cat: "Backend" },
        { name: "Docker", cat: "DevOps & Automation" },
        { name: "Linux", cat: "DevOps & Automation" },
    ],
},
{
    section: "Backend, Systems & Architecture",
    title: "Odontologia Local",
    description: "Full-stack dental clinic ERP in pure PHP 8 + MySQL following strict MVC architecture with zero framework bloat. Implements Google Cloud OAuth 2.0 authentication, RFC 6238 TOTP 2FA, granular role-based access control (Admin, Doctor, Patient), automated appointment scheduling, and patient clinical histories.",
    img: "https://opengraph.githubassets.com/1/krailynd/OdontologiaLocal",
    github: "https://github.com/krailynd/OdontologiaLocal",
    tech: [
        { name: "PHP", cat: "Backend" },
        { name: "MySQL", cat: "Databases" },
        { name: "JavaScript", cat: "Frontend & UI" },
        { name: "HTML5", cat: "Frontend & UI" },
        { name: "CSS3", cat: "Frontend & UI" },
    ],
},
{
    section: "Backend, Systems & Architecture",
    title: "Saha Inventory API",
    description: "Production-ready REST API for inventory management in Java — layered architecture with clean separation between controllers, services and persistence, relational database design, and full CRUD endpoints for products, categories, and stock control.",
    img: "https://opengraph.githubassets.com/1/krailynd/Saha-API-inventario",
    github: "https://github.com/krailynd/Saha-API-inventario",
    tech: [
        { name: "Java", cat: "Backend" },
        { name: "Spring Boot", cat: "Backend" },
        { name: "MySQL", cat: "Databases" },
        { name: "Maven", cat: "Backend" },
    ],
},
{
    section: "Backend, Systems & Architecture",
    title: "LitchModoro",
    description: "Minimalist frameless Pomodoro study timer desktop application built in Java 21 + JavaFX. Features dark aesthetic UI, custom circular progress arc animations, native system tray integration, configurable study/break intervals, and zero background overhead.",
    img: "https://opengraph.githubassets.com/1/krailynd/LitchModoro",
    github: "https://github.com/krailynd/LitchModoro",
    tech: [
        { name: "Java", cat: "Backend" },
        { name: "JavaFX", cat: "Backend" },
        { name: "CSS3", cat: "Frontend & UI" },
    ],
},
{
    section: "Backend, Systems & Architecture",
    title: "SahaCloud",
    description: "My self-hosted personal cloud: an Ubuntu Server homelab running ~25 Docker containers behind a Caddy reverse proxy and Cloudflare Tunnels — Nextcloud, Mattermost, Outline docs, code-server, n8n automation, Home Assistant, SearXNG across 12+ subdomains with Tailscale mesh networking.",
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
    section: "Backend, Systems & Architecture",
    title: "SahaTools",
    description: "Operations console (FastAPI + Docker) running on my own server — live health monitoring of every SahaCloud service, utilities and document tools for the whole self-hosted ecosystem in one place.",
    img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsahatools.sahacloud.dpdns.org?w=640&h=360",
    demo: "https://sahatools.sahacloud.dpdns.org",
    tech: [
        { name: "Python", cat: "Backend" },
        { name: "FastAPI", cat: "Backend" },
        { name: "Docker", cat: "DevOps & Automation" },
    ],
},
{
    section: "Backend, Systems & Architecture",
    title: "bash-nu-sftp-ssh",
    description: "Automation toolkit in Bash & Nushell for SFTP/SSH workflows on Linux — scripted transfers, server maintenance routines and remote operations used daily to administer servers.",
    img: "https://opengraph.githubassets.com/1/krailynd/bash-nu-sftp-ssh",
    github: "https://github.com/krailynd/bash-nu-sftp-ssh",
    tech: [
        { name: "Bash", cat: "DevOps & Automation" },
        { name: "Nushell", cat: "DevOps & Automation" },
        { name: "Linux", cat: "DevOps & Automation" },
    ],
},

// --- Frontend, Web & Interactive UI ---
{
    section: "Frontend, Web & Interactive UI",
    title: "Maison — Haute Couture E-Commerce",
    description: "High-end luxury fashion e-commerce experience built in React 18, TypeScript, and Vite. Designed with an editorial aesthetic, smooth kinetic typography, Lenis inertia scrolling, GSAP ScrollTrigger timeline animations, and a responsive shopping flow.",
    img: "https://opengraph.githubassets.com/1/krailynd/maison-tienda-moda",
    github: "https://github.com/krailynd/maison-tienda-moda",
    demo: "https://krailynd.github.io/maison-tienda-moda",
    tech: [
        { name: "React", cat: "Frontend & UI" },
        { name: "TypeScript", cat: "Frontend & UI" },
        { name: "HTML5", cat: "Frontend & UI" },
        { name: "CSS3", cat: "Frontend & UI" },
    ],
},
{
    section: "Frontend, Web & Interactive UI",
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
    section: "Frontend, Web & Interactive UI",
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
    section: "Frontend, Web & Interactive UI",
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

// --- Data Engineering & Applied Machine Learning ---
{
    section: "Data Engineering & Applied Machine Learning",
    title: "E-Commerce Analytics & BI Dashboard",
    description: "Interactive Business Intelligence dashboard analyzing the Brazilian Olist e-commerce dataset (100k+ orders). Built with Streamlit and Plotly to track revenue trends, customer lifetime value, cohort retention, and RFM customer segmentation with sub-second filtering.",
    img: "https://opengraph.githubassets.com/1/krailynd/ecommerce-bi-dashboard",
    github: "https://github.com/krailynd/ecommerce-bi-dashboard",
    tech: [
        { name: "Python", cat: "Data & ML" },
        { name: "Streamlit", cat: "Data & ML" },
        { name: "Pandas", cat: "Data & ML" },
        { name: "Plotly", cat: "Data & ML" },
    ],
},
{
    section: "Data Engineering & Applied Machine Learning",
    title: "Telecom Customer Churn Predictor",
    description: "End-to-end Machine Learning pipeline tackling severe class imbalance (SMOTE) to predict customer attrition. Compares Random Forest, XGBoost and Logistic Regression evaluated on Precision-Recall curves (PR-AUC) with actionable retention risk tiers.",
    img: "https://opengraph.githubassets.com/1/krailynd/customer-churn-telecom",
    github: "https://github.com/krailynd/customer-churn-telecom",
    tech: [
        { name: "Python", cat: "Data & ML" },
        { name: "scikit-learn", cat: "Data & ML" },
        { name: "Pandas", cat: "Data & ML" },
        { name: "XGBoost", cat: "Data & ML" },
        { name: "Jupyter", cat: "Data & ML" },
    ],
},
{
    section: "Data Engineering & Applied Machine Learning",
    title: "F1 Historical Analytics & ETL Pipeline",
    description: "Automated data engineering pipeline extracting 70+ years of Formula 1 championship telemetry via Jolpica-F1 REST API. Features transactional SQLite storage, analytical Parquet exports, idempotent incremental ingestion, and data quality checks.",
    img: "https://opengraph.githubassets.com/1/krailynd/f1-championship-history-pipeline",
    github: "https://github.com/krailynd/f1-championship-history-pipeline",
    tech: [
        { name: "Python", cat: "Data & ML" },
        { name: "SQLite", cat: "Databases" },
        { name: "Pandas", cat: "Data & ML" },
        { name: "REST APIs", cat: "Backend" },
    ],
},
{
    section: "Data Engineering & Applied Machine Learning",
    title: "Titanic EDA & Classification Benchmark",
    description: "Comprehensive exploratory data analysis and predictive modeling workflow on the Kaggle Titanic dataset — robust data cleansing, advanced feature engineering, and cross-validated classification benchmarks comparing Logistic Regression and Random Forest.",
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
];

const certifications = [{
    title: "Artificial Intelligence (AI) and Human Subject Protections",
    description: "CITI Program — AI and ethical protection of human subjects in digital environments.",
    link: "https://www.citiprogram.org/verify/?wc54fbdbb-ac57-44e4-b3dc-62bc362a69f0-69450114",
},
{
    title: "Responsible Conduct of Research for Engineers",
    description: "CITI Program (05/2025) — Ethical and responsible research conduct for engineering.",
    link: "https://www.citiprogram.org/verify/?w46e6a78e-561f-4a28-b0b2-c2909f25749e-69450101",
},
{
    title: "Best Practices for Global Research Partnerships",
    description: "CITI Program (03/2026) — Global research collaboration best practices.",
    link: "https://www.citiprogram.org/verify/?w7aaa172d-8dce-4fa7-b51e-192f7e7a2109-69450127",
},
{
    title: "A Beginner’s Guide to Being a Sponsor-Investigator",
    description: "CITI Program (05/2025) — Leading and managing academic research projects.",
    link: "https://www.citiprogram.org/verify/?w68cd544e-4416-4ca2-82b5-a947b44e25fb-69450121",
},
{
    title: "Bring Your Own Device (BYOD) Studies",
    description: "CITI Program (05/2025) — Best practices for BYOD technical studies.",
    link: "https://www.citiprogram.org/verify/?w97b6bcdf-84f6-430c-83ea-1f4a2ecf280f-69450122",
},
{
    title: "Applied AI to Science Workshop",
    description: "UPSJB (05/2025) — Hands-on workshop on AI applied to scientific work.",
    link: "https://documentodigital.upsjb.edu.pe/apis/Documentos/CE-0061153730RH00208408.pdf",
},
{
    title: "Yachaywasi Net 2026 — AI & Digital Transformation",
    description: "UPSJB (06/2026) — Innovation and new technologies.",
    link: "https://documentodigital.upsjb.edu.pe/apis/Documentos/CE-0061153730RH00246645.pdf",
},
{
    title: "YACHAYHUASI — Smart Tourism & Strategic Communication",
    description: "UPSJB (06/2026) — Digital transformation and sustainable management.",
    link: "https://documentodigital.upsjb.edu.pe/apis/Documentos/CE-0061153730RH00247245.pdf",
},
];

// NOTE: email and phone are intentionally NOT stored here in plain text.
// They are built at runtime in src/utils/contact.js (anti-scraper).
const contactConfig = {
    description: "Available for software engineering roles, full-stack/backend development, and high-impact freelance projects. Let’s build something exceptional together.",
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