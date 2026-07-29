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
    aboutme: "I'm a Software Developer and I specialize in Java — the language I know deepest and enjoy most. I build backend services with Spring Boot, design and implement REST APIs, and work with relational databases (PostgreSQL, MySQL, MariaDB). I'm a Systems Engineering and Computing student at UPSJB (Ica, Peru), and I've already shipped real products: an educational platform with 31+ interactive physics/math simulators, Java desktop apps (SahaNotes, SahaCalc), an inventory REST API, and I run my own self-hosted server — SahaCloud — with Dockerized services behind a reverse proxy and Cloudflare tunnels. Separately — and I want to be transparent about this — I'm in training toward Data Science & AI through a structured self-study roadmap that runs in parallel with my work and studies. That's my long-term direction, not my current job title: what I offer today is solid Java and backend development. I'm CITI-certified in AI ethics and responsible research. When I'm not coding, I produce music and design digital content.",
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
    name: "Java & Spring Boot — My Specialty",
    description: "Backend services with Spring Boot, REST API design and implementation, OOP, algorithms, Maven, and desktop applications (SahaNotes, SahaCalc).",
},
{
    name: "SQL Databases",
    description: "PostgreSQL, MySQL and MariaDB: schema design, queries, and integration with backend services and APIs.",
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
    name: "Data & AI — In Training",
    description: "Python, Pandas and statistics through a structured self-study roadmap (Kaggle, freeCodeCamp). My long-term formation — public progress on GitHub.",
},
{
    name: "AI & Research Ethics",
    description: "CITI-certified in AI and Human Subject Protections and Responsible Conduct of Research.",
},
{
    name: "Design & Audio Production",
    description: "UI/UX, Affinity, Krita, Aseprite, Canva. Ableton Live for music production — the creative side of my engineering.",
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
    description: "Saha Inventory API: REST API for inventory management built in Java, with relational database design.",
    link: "https://github.com/krailynd/Saha-API-inventario",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "Java Login: Authentication system built in Java — user management and secure login flows.",
    link: "https://github.com/krailynd/Java-login",
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "SahaNotes (Beta): A dynamic markdown-based notepad desktop application built in Java.",
    link: "https://github.com/krailynd/SahaNotes",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "SahaCalc: Java calculator + graphing tool for math functions.",
    link: "https://github.com/krailynd/SahaCalc",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "java-proyects: My Java learning repository — university projects (UPSJB), exercises and mini-apps documenting my progress in the language.",
    link: "https://github.com/krailynd/java-proyects",
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
    description: "[In progress — Data Science formation] Titanic EDA (Kaggle): my first full data-to-model workflow — Pandas, feature engineering, Logistic Regression vs Random Forest.",
    link: "https://github.com/krailynd/titanic-eda-kaggle",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "[Planned — Data Science formation] Interactive BI Dashboard (Streamlit / Power BI): business questions answered with live filters — the daily work of a Data Analyst.",
    link: "https://github.com/krailynd",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "[Planned — Data Science formation] Telecom Customer Churn Prediction: imbalanced classes, F1/Recall metrics and business storytelling.",
    link: "https://github.com/krailynd",
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "[Planned — Data Science formation] Web Scraping + Trend Analysis (Peru): automated data collection pipeline from raw sources to time-series analysis.",
    link: "https://github.com/krailynd",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "[Planned — Data Science formation] RAG Chatbot over my own documents: embeddings, vector search and an LLM answering from UPSJB notes.",
    link: "https://github.com/krailynd",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "[Planned — Data Science formation] Flagship: Peruvian Data Solution End-to-End (INEI/BCRP data → model → FastAPI → deployed on my own server).",
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
    description: "Available now for Java/backend development work — internships, freelance projects and junior roles. (I'm also training in Data Science & AI, but Java is what I offer today.) Let's talk!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    email: "mailto:krailynd@vivaldi.net",
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