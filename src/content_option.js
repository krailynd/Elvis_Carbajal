const logotext = "KRAILYND";
const meta = {
    title: "Elvis Carbajal (Krailynd)",
    description: "Systems Engineering student from Ica, Peru, training toward Data Analysis and Data Science/AI — with shipped software and a self-hosted server as proof I build things that work.",
};

const introdata = {
    title: "I’m Elvis Carbajal",
    animated: {
        first: "Aspiring Data Analyst",
        second: "Future Data Science & AI Engineer",
        third: "Software & Java Background",
    },
    description: "Systems Engineering student (UPSJB, Ica, Peru) on a structured path into data: Python, SQL and statistics first, then Machine Learning and AI Engineering. My shipped software projects and my own self-hosted server are the proof that I learn by building — and I'm now channeling that into data analysis, dashboards and ML. Goal: a first role as a Data Analyst / Data Science trainee.",
    your_img_url: "https://i.ibb.co/VYmK2gfZ/Imagen12222.png",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I'm training to become a Data Scientist — and long-term, an AI engineer/scientist who understands AI from the inside: training, tuning and evaluating models with scientific rigor. My way in is the proven ladder: Data Analyst first, then Data Scientist, then ML Engineer. My foundation is software: I'm a Systems Engineering and Computing student at UPSJB (Ica, Peru) who has already shipped real products — an educational platform with 31+ interactive physics/math simulators, Java desktop apps, REST APIs — and I run my own self-hosted server, SahaCloud, with Dockerized services, databases and automation. That background feeds directly into data work: I already handle SQL and relational databases, Python scripting, Linux and taking projects from raw idea to production. Right now I'm deep into Python for data analysis, SQL, statistics and classical ML through a structured self-study roadmap, with my progress public on GitHub. I'm CITI-certified in AI ethics and responsible research. When I'm not studying or coding, I produce music and design digital content — creativity and engineering feed each other in everything I build.",
};
const worktimeline = [{
    jobtitle: "Lead Full Stack Developer & UI Designer",
    where: "SahaHacking | sahahacking.sahacloud.dpdns.org",
    date: "05/2025 - Present",
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
    name: "Python & SQL",
    description: "The core of my data path: Python scripting and relational databases (MySQL, MariaDB, PostgreSQL). Currently deepening into Pandas, data analysis and ML through my roadmap.",
},
{
    name: "Data & Analytics — In Training",
    description: "Data cleaning, EDA, statistics and visualization. Practicing on Kaggle with a structured self-study plan; dashboards and BI are my next deliverables.",
},
{
    name: "Java",
    description: "My favorite language. Desktop applications (SahaNotes, SahaCalc), algorithms, OOP and robust software design — my engineering foundation.",
},
{
    name: "Full-Stack Web",
    description: "JavaScript, TypeScript, PHP, HTML/CSS. Auth (OAuth/JWT), real-time chat and dynamic resource management in production platforms.",
},
{
    name: "Linux, Servers & Self-hosting",
    description: "I run SahaCloud, my own Ubuntu Server: Docker containers, Caddy reverse proxy, Cloudflare Tunnels, Tailscale, Bash/Nushell automation and basic server administration.",
},
{
    name: "AI & Research Ethics",
    description: "CITI-certified in AI and Human Subject Protections and Responsible Conduct of Research — the scientific rigor side of my data/AI goal.",
},
{
    name: "Design & Audio Production",
    description: "UI/UX, Affinity, Krita, Aseprite, Canva. Ableton Live for music production — the creative side of my engineering.",
},
];

const services = [{
    title: "Data Analysis — Currently in Training",
    description: "Targeting entry-level Data Analyst / Data Science trainee roles: SQL queries, data cleaning, EDA, honest metrics and dashboards. Progress is public on GitHub.",
},
{
    title: "Data Pipelines & Automation",
    description: "Web scraping, data collection and scheduled automation in Linux (Bash, Python, Nushell) — my bridge from automation background toward data engineering basics.",
},
{
    title: "Software Development — Supporting Skill",
    description: "Java desktop apps, APIs and full-stack web with relational databases: the engineering foundation that lets me ship data products end-to-end, not just notebooks.",
},
];

const dataportfolio = [{
    img: "https://picsum.photos/400/?grayscale",
    description: "SahaHacking: Educational platform & virtual lab with 31+ interactive physics/math simulators. Led a multidisciplinary team; built secure auth (OAuth/JWT), real-time chat and responsive scientific UI. Self-hosted on my own server.",
    link: "https://sahahacking.sahacloud.dpdns.org",
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "SahaCloud: My self-hosted personal cloud — an Ubuntu Server homelab running ~25 Docker containers behind a Caddy reverse proxy and Cloudflare Tunnels: Nextcloud, Mattermost, Outline docs, code-server, n8n automation, Home Assistant, SearXNG and more, across 12+ subdomains.",
    link: "https://sahacloud.dpdns.org",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "SahaTools: Operations console (FastAPI + Docker) on my SahaCloud server — live service monitoring, utilities and document tools for the whole self-hosted ecosystem.",
    link: "https://sahatools.sahacloud.dpdns.org",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "SahaNotes (Beta): A dynamic markdown-based notepad desktop application built in Java.",
    link: "https://github.com/krailynd/SahaNotes",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "SahaCalc: Java calculator + graphing tool for math functions.",
    link: "https://github.com/krailynd/SahaCalc",
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "Saha Inventory API: REST API for inventory management built in Java, with relational database design.",
    link: "https://github.com/krailynd/Saha-API-inventario",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "java-proyects: My Java learning repository — university projects (UPSJB), exercises and mini-apps documenting my progress in the language.",
    link: "https://github.com/krailynd/java-proyects",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "Java Login: Authentication system built in Java — user management and secure login flows.",
    link: "https://github.com/krailynd/Java-login",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "bash-nu-sftp-ssh: Automation toolkit in Bash/Nushell for SFTP/SSH workflows on Linux.",
    link: "https://github.com/krailynd/bash-nu-sftp-ssh",
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "Pages-rycle: Web page with PHP backend and email delivery via PHPMailer — freelance web work.",
    link: "https://github.com/krailynd/Pages-rycle",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "[In progress — Data Science Roadmap] Kaggle EDA & first ML models (Titanic, Pandas, feature engineering): the first full data-to-model workflow of my self-study roadmap.",
    link: "https://github.com/krailynd",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "[Planned — Data Science Roadmap] Interactive BI Dashboard (Streamlit / Power BI): business questions answered with live filters — the daily work of a Data Analyst.",
    link: "https://github.com/krailynd",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "[Planned — Data Science Roadmap] Telecom Customer Churn Prediction: imbalanced classes, F1/Recall metrics and business storytelling.",
    link: "https://github.com/krailynd",
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "[Planned — Data Science Roadmap] Web Scraping + Trend Analysis (Peru): automated data collection pipeline from raw sources to time-series analysis.",
    link: "https://github.com/krailynd",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "[Planned — Data Science Roadmap] RAG Chatbot over my own documents: embeddings, vector search and an LLM answering from UPSJB notes.",
    link: "https://github.com/krailynd",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "[Planned — Data Science Roadmap] Flagship: Peruvian Data Solution End-to-End (INEI/BCRP data → model → FastAPI → deployed on my own server). The project that sums up the whole roadmap.",
    link: "https://github.com/krailynd",
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

const contactConfig = {
    YOUR_EMAIL: "krailynd@vivaldi.net",
    YOUR_FONE: "+51 907 163 498",
    description: "Looking for internships and entry-level opportunities in Data Analysis / Data Science — and always open to software collaborations and homelab talk. Let's connect!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
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