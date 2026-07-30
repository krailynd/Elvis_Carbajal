// Spanish content — mirrors every export of src/content_option.js
import { socialprofils, logotext } from "../content_option";

const meta = {
    title: "Elvis Carbajal (Krailynd)",
    description: "Desarrollador de Software de Ica, Perú — 2 años construyendo aplicaciones que resuelven problemas reales. Especialista en Java y Spring Boot, diseño UI/UX. Disponible para trabajar. También en formación en Ciencia de Datos e IA.",
};

const introdata = {
    title: "Soy Elvis Carbajal",
    animated: {
        first: "Desarrollador de Software Java",
        second: "Spring Boot · APIs REST · Bases de Datos SQL",
        third: "Ciencia de Datos e IA — En Formación",
    },
    description: "Desarrollador de Software de Ica, Perú con 2 años de experiencia construyendo aplicaciones que resuelven problemas reales — disponible para trabajar: proyectos freelance, tiempo completo o medio tiempo, lo que venga. Me especializo en Java y su ecosistema: Spring Boot, diseño de APIs REST y bases de datos relacionales (PostgreSQL, MySQL, MariaDB) — y también diseño UI/UX. Por separado, sigo un roadmap estructurado de autoestudio hacia Ciencia de Datos e IA — esa es mi formación a largo plazo, pública en GitHub.",
    your_img_url: "https://i.ibb.co/VYmK2gfZ/Imagen12222.png",
};

const dataabout = {
    title: "Un poco sobre mí",
    aboutme: "Soy Desarrollador de Software con 2 años de experiencia construyendo aplicaciones que resuelven problemas reales, y me especializo en Java — el lenguaje que más domino y que más disfruto. Construyo servicios backend con Spring Boot, diseño e implemento APIs REST, trabajo con bases de datos relacionales (PostgreSQL, MySQL, MariaDB) y diseño UI/UX — interfaces claras, usables y construidas con intención. Soy estudiante de Ingeniería de Sistemas y Computación en la UPSJB (Ica, Perú), y ya he lanzado productos reales: una plataforma educativa con más de 31 simuladores interactivos de física y matemáticas, aplicaciones de escritorio en Java (SahaNotes, SahaCalc), una API REST de inventario, un gestor de archivos de terminal open-source en Rust (Open-SahaDisk, de mi organización SahaHacking), y administro mi propio servidor auto-hospedado — SahaCloud — con servicios en Docker detrás de un reverse proxy y túneles de Cloudflare. Por separado — y quiero ser transparente sobre esto — estoy en formación hacia Ciencia de Datos e IA a través de un roadmap estructurado de autoestudio que avanza en paralelo con mi trabajo y estudios. Esa es mi dirección a largo plazo, no mi título actual: lo que ofrezco hoy es desarrollo sólido en Java y backend, además de diseño UI/UX. Estoy certificado por CITI en ética de IA e investigación responsable. Cuando no estoy programando, produzco música y diseño contenido digital.",
};

const worktimeline = [{
    jobtitle: "Desarrollador Full Stack Líder y Diseñador UI",
    where: "SahaHacking | sahahacking.sahacloud.dpdns.org",
    date: "05/2025 - Presente",
},
{
    jobtitle: "Fundador y Desarrollador Líder — Open Source",
    where: "SahaHacking Org | Open-SahaDisk — gestor de archivos de terminal y analizador de disco en Rust",
    date: "2026 - Presente",
},
{
    jobtitle: "Homelab e Infraestructura Auto-hospedada",
    where: "SahaCloud | sahacloud.dpdns.org — Ubuntu Server, Docker, Caddy, Túneles Cloudflare",
    date: "2026 - Presente",
},
{
    jobtitle: "Desarrollador de Software",
    where: "SahaNotes (Beta) y Automatización",
    date: "2025 - 03/2026",
},
{
    jobtitle: "Desarrollador Frontend (Freelance)",
    where: "JVLEDIC ELECTRIC S.A.C | jvledic.com — sitio corporativo ed-tech",
    date: "2025",
},
{
    jobtitle: "Desarrollador Web (Freelance)",
    where: "Proyectos Personales",
    date: "2024 - 2025",
},
{
    jobtitle: "Finalista Interuniversitario — Reto de Innovación 2026",
    where: "Equipo UPSJB · Plataforma digital para optimización del fraccionamiento de papeletas",
    date: "06/2026",
},
];

const education = [{
    degree: "Ingeniería de Sistemas y Computación",
    where: "Universidad Privada San Juan Bautista (UPSJB), Ica, Perú",
    date: "03/2025 - Presente",
},
{
    degree: "Roadmap autodiseñado de Ciencia de Datos e IA (4 etapas)",
    where: "Kaggle, freeCodeCamp, Coursera, Hugging Face, Zero to Hero de Karpathy",
    date: "07/2026 - En curso",
},
{
    degree: "INGEICA 2025 — 1er Congreso Int. de Ingeniería e IA",
    where: "UPSJB",
    date: "10/2025",
},
{
    degree: "Taller de IA Aplicada (14 horas)",
    where: "Instituto de Investigación de Ingeniería",
    date: "04/2025",
},
];

const skills = [{
    name: "Java & Spring Boot — Mi Especialidad",
    description: "Servicios backend con Spring Boot, diseño e implementación de APIs REST, POO, algoritmos, Maven y aplicaciones de escritorio (SahaNotes, SahaCalc).",
    icons: ["Java", "Spring Boot", "Maven"],
},
{
    name: "Bases de Datos SQL",
    description: "PostgreSQL, MySQL y MariaDB: diseño de esquemas, consultas e integración con servicios backend y APIs.",
    icons: ["PostgreSQL", "MySQL", "MariaDB"],
},
{
    name: "Web Full-Stack",
    description: "JavaScript, TypeScript, PHP, HTML/CSS. Autenticación (OAuth/JWT), chat en tiempo real y gestión de recursos dinámicos en plataformas en producción.",
    icons: ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3"],
},
{
    name: "Linux, Servidores y Self-hosting",
    description: "Administro SahaCloud, mi propio Ubuntu Server: contenedores Docker, reverse proxy Caddy, túneles Cloudflare, Tailscale, automatización con Bash/Nushell y administración básica de servidores.",
    icons: ["Linux", "Docker", "Bash", "Cloudflare"],
},
{
    name: "Rust y Open Source",
    description: "Open-SahaDisk (org SahaHacking): un gestor de archivos de terminal multiplataforma en Rust — TUI con ratatui, escaneo en segundo plano, integración con Docker y diseño defensivo por defecto. Licencia MIT.",
    icons: ["Rust", "Docker", "Linux"],
},
{
    name: "Diseño UI/UX",
    description: "Diseño de interfaces y experiencias para web y escritorio: layouts responsive, sistemas de diseño y flujos de usuario construidos con intención — el mismo cuidado que puse en este portafolio. Affinity, Krita, Aseprite y Canva.",
    icons: ["Canva", "Aseprite"],
},
{
    name: "Datos e IA — En Formación",
    description: "Python, Pandas y estadística a través de un roadmap estructurado de autoestudio (Kaggle, freeCodeCamp). Mi formación a largo plazo — progreso público en GitHub.",
    icons: ["Python", "Pandas", "Jupyter"],
},
{
    name: "Ética de IA e Investigación",
    description: "Certificado por CITI en IA y Protección de Sujetos Humanos y en Conducta Responsable de Investigación.",
},
{
    name: "Habilidades Blandas",
    description: "Liderazgo de equipos (lideré un equipo multidisciplinario en SahaHacking), comunicación técnica clara con clientes (JVLEDIC), aprendizaje autodirigido, adaptabilidad entre stacks y responsabilidad total — administro lo que construyo.",
},
{
    name: "Diseño y Producción de Audio",
    description: "UI/UX, Affinity, Krita, Aseprite, Canva. Ableton Live para producción musical — el lado creativo de mi ingeniería.",
    icons: ["Canva", "Aseprite"],
},
];

const services = [{
    title: "Desarrollo Backend Java — Disponible",
    description: "Servicios con Spring Boot, diseño e implementación de APIs REST y bases de datos relacionales (PostgreSQL, MySQL, MariaDB). 2 años de experiencia construyendo aplicaciones que resuelven problemas reales — disponible para proyectos freelance y roles de tiempo completo o medio tiempo, lo que venga.",
},
{
    title: "Apps de Escritorio, UI/UX y Automatización",
    description: "Aplicaciones de escritorio en Java, diseño UI/UX para web y escritorio, scripting y automatización en Linux (Bash, Python, Nushell), y despliegue/self-hosting en mi propia infraestructura de servidores.",
},
{
    title: "Datos e IA — En Formación (aún no disponible)",
    description: "Estudio análisis de datos y ML a través de un roadmap estructurado — mi dirección a largo plazo. No es un servicio que ofrezco hoy, pero mi progreso es público en GitHub.",
},
];

// tech cat keys stay in English (they are internal keys; display names are translated in i18n/ui.js)
const dataportfolio = [
// --- Backend, Desktop y Sistemas ---
{
    section: "Backend, Desktop y Sistemas",
    title: "Open-SahaDisk",
    description: "Gestor de archivos de terminal y analizador de uso de disco multiplataforma, escrito en Rust — el primer lanzamiento open-source de mi organización SahaHacking (MIT). Operaciones de archivos seguras por defecto con evaluación de riesgo previa, medición de carpetas en segundo plano, gestor de Docker integrado (contenedores, volúmenes, stacks de Compose), motor de limpieza y diagnósticos doctor. Se distribuye como un solo binario sin dependencias.",
    img: "https://opengraph.githubassets.com/1/sahahacking/open-sahadisk",
    github: "https://github.com/sahahacking/open-sahadisk",
    tech: [
        { name: "Rust", cat: "Backend" },
        { name: "Docker", cat: "DevOps & Automation" },
        { name: "Linux", cat: "DevOps & Automation" },
    ],
},
{
    section: "Backend, Desktop y Sistemas",
    title: "Saha Inventory API",
    description: "API REST para gestión de inventario construida en Java — arquitectura por capas con separación limpia entre controladores, servicios y persistencia, diseño de base de datos relacional y endpoints CRUD completos para productos y control de stock.",
    img: "https://opengraph.githubassets.com/1/krailynd/Saha-API-inventario",
    github: "https://github.com/krailynd/Saha-API-inventario",
    tech: [
        { name: "Java", cat: "Backend" },
        { name: "Spring Boot", cat: "Backend" },
        { name: "MySQL", cat: "Databases" },
    ],
},
{
    section: "Backend, Desktop y Sistemas",
    title: "Java Login",
    description: "Sistema de autenticación construido en Java — registro de usuarios e inicios de sesión seguros, manejo de credenciales, validación de entradas y gestión de cuentas, construido como una aplicación de escritorio completa.",
    img: "https://opengraph.githubassets.com/1/krailynd/Java-login",
    github: "https://github.com/krailynd/Java-login",
    tech: [
        { name: "Java", cat: "Backend" },
        { name: "MySQL", cat: "Databases" },
    ],
},
{
    section: "Backend, Desktop y Sistemas",
    title: "SahaNotes (Beta)",
    description: "Bloc de notas de escritorio basado en Markdown, construido en Java — crea, edita y organiza notas con renderizado en vivo, persistencia en archivos locales y una interfaz limpia y sin distracciones.",
    img: "https://opengraph.githubassets.com/1/krailynd/SahaNotes",
    github: "https://github.com/krailynd/SahaNotes",
    tech: [
        { name: "Java", cat: "Backend" },
    ],
},
{
    section: "Backend, Desktop y Sistemas",
    title: "SahaCalc",
    description: "Calculadora de escritorio en Java con herramienta de graficación integrada — operaciones estándar y científicas, además de graficación visual de funciones matemáticas.",
    img: "https://opengraph.githubassets.com/1/krailynd/SahaCalc",
    github: "https://github.com/krailynd/SahaCalc",
    tech: [
        { name: "Java", cat: "Backend" },
    ],
},
{
    section: "Backend, Desktop y Sistemas",
    title: "SahaTools",
    description: "Consola de operaciones (FastAPI + Docker) corriendo en mi propio servidor — monitoreo en vivo de cada servicio de SahaCloud, utilidades y herramientas de documentos para todo el ecosistema auto-hospedado, en un solo lugar.",
    img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsahatools.sahacloud.dpdns.org?w=640&h=360",
    demo: "https://sahatools.sahacloud.dpdns.org",
    tech: [
        { name: "Python", cat: "Backend" },
        { name: "FastAPI", cat: "Backend" },
        { name: "Docker", cat: "DevOps & Automation" },
    ],
},
{
    section: "Backend, Desktop y Sistemas",
    title: "SahaCloud",
    description: "Mi nube personal auto-hospedada: un homelab con Ubuntu Server corriendo ~25 contenedores Docker detrás de un reverse proxy Caddy y túneles Cloudflare — Nextcloud, Mattermost, documentos con Outline, code-server, automatización con n8n, Home Assistant, SearXNG y más, en más de 12 subdominios. Yo lo diseñé, desplegué y lo mantengo todo.",
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
    section: "Backend, Desktop y Sistemas",
    title: "bash-nu-sftp-ssh",
    description: "Kit de automatización en Bash y Nushell para flujos SFTP/SSH en Linux — transferencias scripteadas, rutinas de servidor y operaciones remotas que uso a diario para administrar mi propia infraestructura.",
    img: "https://opengraph.githubassets.com/1/krailynd/bash-nu-sftp-ssh",
    github: "https://github.com/krailynd/bash-nu-sftp-ssh",
    tech: [
        { name: "Bash", cat: "DevOps & Automation" },
        { name: "Nushell", cat: "DevOps & Automation" },
    ],
},
{
    section: "Backend, Desktop y Sistemas",
    title: "java-proyects",
    description: "Mi bitácora de aprendizaje de Java — proyectos universitarios de la UPSJB, ejercicios y mini-apps que documentan mi progreso con el lenguaje: POO, estructuras de datos, algoritmos y trabajos reales del curso.",
    img: "https://opengraph.githubassets.com/1/krailynd/java-proyects",
    github: "https://github.com/krailynd/java-proyects",
    tech: [
        { name: "Java", cat: "Backend" },
    ],
},
// --- Frontend y Web ---
{
    section: "Frontend y Web",
    title: "SahaHacking Platform",
    description: "Plataforma educativa y laboratorio virtual con más de 31 simuladores interactivos de física y matemáticas. Lideré un equipo multidisciplinario y construí la UI científica responsive, la autenticación segura (OAuth/JWT) y el chat en tiempo real. Auto-hospedada en producción en mi propio servidor.",
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
    section: "Frontend y Web",
    title: "JVLEDIC ELECTRIC S.A.C",
    description: "Sitio web corporativo para una empresa peruana de tecnología educativa (freelance, en producción) — catálogo de servicios con robótica educativa, cursos de IA y programación y programas STEAM, vitrina de distribuidor oficial (DOBOT, Makeblock, Elecrow), blog, flujos de cotización y páginas de certificaciones. Frontend totalmente responsive.",
    img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fjvledic.com?w=640&h=360",
    demo: "https://jvledic.com",
    tech: [
        { name: "JavaScript", cat: "Frontend & UI" },
        { name: "HTML5", cat: "Frontend & UI" },
        { name: "CSS3", cat: "Frontend & UI" },
    ],
},
{
    section: "Frontend y Web",
    title: "Pages-rycle",
    description: "Página web freelance con backend en PHP — formularios de contacto personalizados con validación y envío automatizado de correos vía PHPMailer, diseñada y desplegada de punta a punta.",
    img: "https://opengraph.githubassets.com/1/krailynd/Pages-rycle",
    github: "https://github.com/krailynd/Pages-rycle",
    tech: [
        { name: "PHP", cat: "Backend" },
        { name: "HTML5", cat: "Frontend & UI" },
        { name: "CSS3", cat: "Frontend & UI" },
        { name: "JavaScript", cat: "Frontend & UI" },
    ],
},
// --- Ciencia de Datos e IA — En Formación ---
{
    section: "Ciencia de Datos e IA — En Formación",
    title: "Titanic EDA (Kaggle)",
    description: "[En progreso] Mi primer flujo completo de datos a modelo con el clásico dataset de Kaggle — limpieza de datos y análisis exploratorio con Pandas, feature engineering, y Regresión Logística vs Random Forest comparados con métricas de evaluación adecuadas.",
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
    section: "Ciencia de Datos e IA — En Formación",
    title: "Interactive BI Dashboard",
    description: "[Planificado] Dashboard de BI interactivo con Streamlit / Power BI — preguntas reales de negocio respondidas con filtros en vivo y drill-downs: el trabajo diario de un Analista de Datos.",
    img: "",
    github: "https://github.com/krailynd",
    tech: [
        { name: "Python", cat: "Data & ML" },
        { name: "Streamlit", cat: "Data & ML" },
    ],
},
{
    section: "Ciencia de Datos e IA — En Formación",
    title: "Telecom Customer Churn Prediction",
    description: "[Planificado] Predicción de churn de clientes con datos de telecom — manejo de clases desbalanceadas, selección de modelo guiada por F1/Recall y storytelling de negocio sobre retención.",
    img: "",
    github: "https://github.com/krailynd",
    tech: [
        { name: "Python", cat: "Data & ML" },
        { name: "Pandas", cat: "Data & ML" },
        { name: "scikit-learn", cat: "Data & ML" },
    ],
},
{
    section: "Ciencia de Datos e IA — En Formación",
    title: "Web Scraping + Análisis de Tendencias (Perú)",
    description: "[Planificado] Pipeline automatizado de web scraping sobre fuentes de datos peruanas — desde la recolección cruda hasta series temporales limpias y análisis visual de tendencias.",
    img: "",
    github: "https://github.com/krailynd",
    tech: [
        { name: "Python", cat: "Data & ML" },
    ],
},
{
    section: "Ciencia de Datos e IA — En Formación",
    title: "RAG Chatbot sobre mis propios documentos",
    description: "[Planificado] Chatbot RAG sobre mis propios documentos — embeddings, búsqueda vectorial y un LLM que responde preguntas de mis apuntes de la UPSJB con fuentes citadas.",
    img: "",
    github: "https://github.com/krailynd",
    tech: [
        { name: "Python", cat: "Data & ML" },
    ],
},
{
    section: "Ciencia de Datos e IA — En Formación",
    title: "Flagship: Solución de Datos Peruana End-to-End",
    description: "[Planificado] Proyecto insignia: una solución de datos end-to-end con datos públicos peruanos (INEI/BCRP) — desde el dataset hasta el modelo entrenado y un servicio FastAPI desplegado en mi propio servidor.",
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
    title: "Inteligencia Artificial (IA) y Protección de Sujetos Humanos",
    description: "CITI Program — IA y protección ética de sujetos humanos en entornos digitales.",
},
{
    title: "Conducta Responsable de Investigación para Ingenieros",
    description: "CITI Program (05/2025) — Conducta de investigación ética y responsable para ingeniería.",
},
{
    title: "Mejores Prácticas para Alianzas Globales de Investigación",
    description: "CITI Program (03/2026) — Buenas prácticas de colaboración internacional en investigación.",
},
{
    title: "Guía para Principiantes para ser Sponsor-Investigador",
    description: "CITI Program (05/2025) — Liderar y gestionar proyectos de investigación académica.",
},
{
    title: "Estudios BYOD (Bring Your Own Device)",
    description: "CITI Program (05/2025) — Buenas prácticas para estudios técnicos BYOD.",
},
{
    title: "Taller de IA Aplicada a la Ciencia",
    description: "UPSJB (05/2025) — Taller práctico de IA aplicada al trabajo científico.",
},
{
    title: "Yachaywasi Net 2026 — IA y Transformación Digital",
    description: "UPSJB (06/2026) — Innovación y nuevas tecnologías.",
},
{
    title: "YACHAYHUASI — Turismo Inteligente y Comunicación Estratégica",
    description: "UPSJB (06/2026) — Transformación digital y gestión sostenible.",
},
];

const contactConfig = {
    description: "Disponible ahora para trabajar — proyectos freelance, tiempo completo o medio tiempo, lo que venga. Java es mi especialidad, y también diseño UI/UX. (También estoy en formación en Ciencia de Datos e IA, pero Java es lo que ofrezco hoy.) ¡Hablemos!",
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
