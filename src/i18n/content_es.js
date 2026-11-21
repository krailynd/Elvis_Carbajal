// Spanish content — mirrors every export of src/content_option.js
import { socialprofils, logotext } from "../content_option";

const meta = {
    title: "Elvis Carbajal (Krailynd) — Desarrollador de Software",
    description: "Desarrollador de Software especializado en Arquitectura Backend (Java, Spring Boot, PHP, Rust), Sistemas Web Modernos (React, TypeScript) e Ingeniería de Datos Aplicada. Disponible para contratación.",
};

const introdata = {
    title: "Soy Elvis Carbajal",
    animated: {
        first: "Desarrollador de Software y Constructor de Sistemas",
        second: "Java · Spring Boot · PHP MVC · Rust",
        third: "Web Moderna · React · Infraestructura Linux",
        fourth: "Pipelines de Datos · Machine Learning Aplicado",
    },
    description: "Desarrollador de Software de Ica, Perú. Construyo software robusto y de alto rendimiento en todo el stack — desde APIs backend para producción y arquitecturas MVC limpias, hasta interfaces web modernas y pipelines de datos automatizados. También despliego y administro infraestructura cloud auto-hospedada en Linux con Docker.",
    your_img_url: "https://i.ibb.co/VYmK2gfZ/Imagen12222.png",
};

const dataabout = {
    title: "Un poco sobre mí",
    aboutme: "Soy Desarrollador de Software y estudiante de Ingeniería de Sistemas y Computación en la UPSJB (Ica, Perú) con experiencia práctica entregando software real en producción. Mis fortalezas clave se centran en la ingeniería backend — diseñando arquitecturas limpias y escalables con Java (Spring Boot) y PHP (MVC, OAuth 2.0, 2FA) —, programación de sistemas en Rust (Open-SahaDisk) y creación de interfaces fluidas y reactivas en React y TypeScript. Además, diseño pipelines de datos ETL automatizados y modelos de machine learning aplicado (predicción de churn, BI e-commerce), y administro SahaCloud — mi propio homelab en Ubuntu Server con más de 20 servicios dockerizados bajo reverse proxy Caddy y túneles Cloudflare. Mi enfoque de ingeniería se basa en la excelencia técnica: código limpio, diseño defensivo, seguridad rigurosa y experiencias de usuario pulidas.",
};

const worktimeline = [{
    jobtitle: "Desarrollador Full Stack Líder y Diseñador UI",
    where: "SahaHacking | sahahacking.sahacloud.dpdns.org",
    date: "05/2025 - Presente",
},
{
    jobtitle: "Fundador y Desarrollador Líder — Open Source",
    where: "SahaHacking Org | Open-SahaDisk — gestor de terminal y analizador de disco en Rust",
    date: "2026 - Presente",
},
{
    jobtitle: "Homelab e Infraestructura Auto-hospedada",
    where: "SahaCloud | sahacloud.dpdns.org — Ubuntu Server, Docker, Caddy, Túneles Cloudflare",
    date: "2026 - Presente",
},
{
    jobtitle: "Desarrollador Backend & Full-Stack",
    where: "Odontologia Local — ERP de Clínica Dental (PHP MVC, Google OAuth 2.0, TOTP 2FA)",
    date: "2026",
},
{
    jobtitle: "Desarrollador de Aplicaciones de Escritorio",
    where: "LitchModoro & SahaNotes — Herramientas de escritorio en Java 21 y JavaFX",
    date: "2025 - Presente",
},
{
    jobtitle: "Desarrollador Frontend (Freelance)",
    where: "JVLEDIC ELECTRIC S.A.C | jvledic.com — sitio corporativo ed-tech",
    date: "2025",
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
    degree: "Especialización en Ingeniería de Datos y Machine Learning Aplicado",
    where: "Kaggle, Coursera, Hugging Face, DeepLearning.AI",
    date: "2025 - Presente",
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
    name: "Java & Spring Boot — Especialidad Backend",
    description: "Servicios backend empresariales con Spring Boot, diseño de APIs RESTful, arquitectura orientada a objetos, Maven y aplicaciones de escritorio con JavaFX.",
    icons: ["Java", "Spring Boot", "Maven"],
},
{
    name: "PHP y Arquitectura MVC Limpia",
    description: "PHP 8 puro con separación estricta MVC, seguridad de sesiones, Google Cloud OAuth 2.0, RFC 6238 TOTP 2FA, RBAC y cero dependencias de frameworks externos.",
    icons: ["PHP", "MySQL", "JavaScript"],
},
{
    name: "Bases de Datos Relacionales y Modelado",
    description: "PostgreSQL, MySQL, MariaDB y SQLite: normalización de esquemas, integridad referencial, estrategias de indexación y optimización de consultas.",
    icons: ["PostgreSQL", "MySQL", "MariaDB", "SQLite"],
},
{
    name: "Rust y Programación de Sistemas",
    description: "Open-SahaDisk (org SahaHacking): gestor de archivos de terminal y analizador de disco en Rust con TUI Ratatui, escaneo en segundo plano, motor Docker y diseño defensivo. Licencia MIT.",
    icons: ["Rust", "Docker", "Linux"],
},
{
    name: "Frontend Moderno e Interfaz Interactiva",
    description: "React 18, TypeScript, Vite, Tailwind CSS, HTML5/CSS3, sistemas de diseño responsive, animaciones fluidas e interfaces altamente intuitivas y accesibles.",
    icons: ["React", "TypeScript", "HTML5", "CSS3"],
},
{
    name: "Linux, Homelab y Self-Hosting",
    description: "SahaCloud: homelab personal en Ubuntu Server con más de 20 contenedores Docker, reverse proxy Caddy, túneles Cloudflare, red mesh Tailscale y automatización en Bash/Nushell.",
    icons: ["Linux", "Docker", "Bash", "Cloudflare"],
},
{
    name: "Ingeniería de Datos y ML Aplicado",
    description: "Python, Pandas, scikit-learn, Streamlit, Plotly, Jupyter. Pipelines ETL automatizados, dashboards interactivos de BI y modelos predictivos de clasificación.",
    icons: ["Python", "Pandas", "scikit-learn", "Streamlit", "Jupyter"],
},
{
    name: "Ética de IA y Gobernanza de Investigación",
    description: "Certificado por CITI Program en IA y Protección de Sujetos Humanos, Conducta Responsable de Investigación para Ingenieros y gestión de proyectos de investigación.",
},
{
    name: "Liderazgo Técnico y Entrega de Proyectos",
    description: "Liderazgo de equipos multidisciplinarios (SahaHacking), comunicación técnica directa con clientes (JVLEDIC), resolución autónoma de problemas y responsabilidad total.",
},
];

const services = [{
    title: "Arquitectura Backend y APIs REST",
    description: "Sistemas backend escalables y seguros en Java (Spring Boot) y PHP (MVC limpio, OAuth 2.0, TOTP 2FA), con diseño óptimo de bases de datos relacionales (PostgreSQL, MySQL) y alta seguridad.",
},
{
    title: "Desarrollo Web Moderno y UI/UX",
    description: "Aplicaciones web modernas en React y TypeScript con animaciones cinéticas, flujos de usuario intuitivos y layouts responsive construidos al detalle.",
},
{
    title: "Pipelines de Datos y Analítica Aplicada",
    description: "Pipelines ETL automatizados, extracción de datos, dashboards interactivos de BI con Streamlit y modelos predictivos de machine learning orientados a decisiones de negocio.",
},
{
    title: "Infraestructura Linux y DevOps",
    description: "Despliegue de servicios en Docker, configuración de reverse proxy (Caddy), túneles Cloudflare, automatización mediante scripts y administración de servidores Linux.",
},
];

// tech cat keys stay in English (internal keys matching techCats in ui.js)
const dataportfolio = [
// --- Backend, Sistemas y Arquitectura ---
{
    section: "Backend, Sistemas y Arquitectura",
    title: "Open-SahaDisk",
    description: "Gestor de archivos de terminal y analizador de uso de disco multiplataforma escrito en Rust — el primer lanzamiento open-source de mi organización SahaHacking (MIT). Operaciones de archivos seguras por defecto con evaluación previa de riesgo, cálculo de directorios en segundo plano, gestor Docker integrado (contenedores, volúmenes, Compose), motor de limpieza y diagnósticos. Binario único sin dependencias externas.",
    img: "https://opengraph.githubassets.com/1/sahahacking/open-sahadisk",
    github: "https://github.com/sahahacking/open-sahadisk",
    tech: [
        { name: "Rust", cat: "Backend" },
        { name: "Docker", cat: "DevOps & Automation" },
        { name: "Linux", cat: "DevOps & Automation" },
    ],
},
{
    section: "Backend, Sistemas y Arquitectura",
    title: "Odontologia Local",
    description: "Sistema integral ERP para clínica odontológica en PHP 8 puro + MySQL bajo arquitectura MVC estricta sin sobrecarga de frameworks. Implementa autenticación con Google Cloud OAuth 2.0, verificación en dos pasos RFC 6238 TOTP 2FA, control de acceso por roles (Admin, Doctor, Paciente), gestión automatizada de citas e historias clínicas completas.",
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
    section: "Backend, Sistemas y Arquitectura",
    title: "Saha Inventory API",
    description: "API REST para gestión de inventarios construida en Java con arquitectura en capas limpia (controladores, servicios, persistencia y DTOs), diseño de base de datos relacional y operaciones CRUD completas para control de stock y categorías.",
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
    section: "Backend, Sistemas y Arquitectura",
    title: "LitchModoro",
    description: "Temporizador de estudio Pomodoro de escritorio minimalista y sin marco, desarrollado en Java 21 + JavaFX. Interfaz moderna en modo oscuro, animación circular de progreso, notificaciones nativas en bandeja del sistema, intervalos personalizables y mínimo consumo de recursos.",
    img: "https://opengraph.githubassets.com/1/krailynd/LitchModoro",
    github: "https://github.com/krailynd/LitchModoro",
    tech: [
        { name: "Java", cat: "Backend" },
        { name: "JavaFX", cat: "Backend" },
        { name: "CSS3", cat: "Frontend & UI" },
    ],
},
{
    section: "Backend, Sistemas y Arquitectura",
    title: "SahaCloud",
    description: "Mi nube personal auto-hospedada: homelab en Ubuntu Server con ~25 contenedores Docker detrás de reverse proxy Caddy y túneles Cloudflare — Nextcloud, Mattermost, Outline docs, code-server, automatización n8n, Home Assistant, SearXNG en 12+ subdominios con red mesh Tailscale.",
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
    section: "Backend, Sistemas y Arquitectura",
    title: "SahaTools",
    description: "Consola de operaciones (FastAPI + Docker) desplegada en mi servidor — monitorización en vivo de cada servicio de SahaCloud, herramientas de utilería y procesadores de documentos para el ecosistema auto-hospedado en un único panel.",
    img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsahatools.sahacloud.dpdns.org?w=640&h=360",
    demo: "https://sahatools.sahacloud.dpdns.org",
    tech: [
        { name: "Python", cat: "Backend" },
        { name: "FastAPI", cat: "Backend" },
        { name: "Docker", cat: "DevOps & Automation" },
    ],
},
{
    section: "Backend, Sistemas y Arquitectura",
    title: "bash-nu-sftp-ssh",
    description: "Herramientas de automatización en Bash y Nushell para flujos de trabajo SFTP/SSH en Linux — transferencias programadas, rutinas de servidor y operaciones remotas para administración diaria de infraestructura.",
    img: "https://opengraph.githubassets.com/1/krailynd/bash-nu-sftp-ssh",
    github: "https://github.com/krailynd/bash-nu-sftp-ssh",
    tech: [
        { name: "Bash", cat: "DevOps & Automation" },
        { name: "Nushell", cat: "DevOps & Automation" },
        { name: "Linux", cat: "DevOps & Automation" },
    ],
},

// --- Frontend, Web e Interfaces Interactivas ---
{
    section: "Frontend, Web e Interfaces Interactivas",
    title: "Maison — Haute Couture E-Commerce",
    description: "E-commerce de moda de alta gama desarrollado en React 18, TypeScript y Vite. Diseño editorial exclusivo, tipografía cinética, scroll inercial suave con Lenis, animaciones de línea de tiempo con GSAP ScrollTrigger y catálogo interactivo totalmente responsive.",
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
    section: "Frontend, Web e Interfaces Interactivas",
    title: "SahaHacking Platform",
    description: "Plataforma educativa y laboratorio virtual con más de 31 simuladores interactivos de física y matemáticas. Lideré el equipo multidisciplinario e implementé la interfaz científica responsive, autenticación segura (OAuth/JWT) y chat en tiempo real. En producción en mi servidor.",
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
    section: "Frontend, Web e Interfaces Interactivas",
    title: "JVLEDIC ELECTRIC S.A.C",
    description: "Sitio web corporativo para empresa peruana de tecnología educativa (freelance, en producción) — catálogo de servicios en robótica educativa, cursos de IA y programación, programas STEAM, vitrina de marcas oficiales (DOBOT, Makeblock, Elecrow), blog y cotizaciones online.",
    img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fjvledic.com?w=640&h=360",
    demo: "https://jvledic.com",
    tech: [
        { name: "JavaScript", cat: "Frontend & UI" },
        { name: "HTML5", cat: "Frontend & UI" },
        { name: "CSS3", cat: "Frontend & UI" },
    ],
},
{
    section: "Frontend, Web e Interfaces Interactivas",
    title: "Pages-rycle",
    description: "Sitio web corporativo con backend en PHP — formularios de contacto validados, envío transaccional de correos mediante PHPMailer, maquetación responsive, diseñado y desplegado de punta a punta.",
    img: "https://opengraph.githubassets.com/1/krailynd/Pages-rycle",
    github: "https://github.com/krailynd/Pages-rycle",
    tech: [
        { name: "PHP", cat: "Backend" },
        { name: "HTML5", cat: "Frontend & UI" },
        { name: "CSS3", cat: "Frontend & UI" },
        { name: "JavaScript", cat: "Frontend & UI" },
    ],
},

// --- Ingeniería de Datos y Machine Learning Aplicado ---
{
    section: "Ingeniería de Datos y Machine Learning Aplicado",
    title: "E-Commerce Analytics & BI Dashboard",
    description: "Dashboard interactivo de Business Intelligence sobre el dataset de e-commerce brasileño Olist (más de 100,000 pedidos). Construido en Streamlit y Plotly para seguimiento de ingresos, valor de vida del cliente (LTV), retención por cohortes y segmentación de clientes RFM con filtrado en tiempo real.",
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
    section: "Ingeniería de Datos y Machine Learning Aplicado",
    title: "Telecom Customer Churn Predictor",
    description: "Pipeline completo de Machine Learning con tratamiento de desbalance severo de clases (SMOTE) para predecir fuga de clientes en telecomunicaciones. Comparación rigurosa de Random Forest, XGBoost y Regresión Logística evaluados con curvas PR-AUC y categorización de riesgo para retención.",
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
    section: "Ingeniería de Datos y Machine Learning Aplicado",
    title: "F1 Historical Analytics & ETL Pipeline",
    description: "Pipeline automatizado de ingeniería de datos que extrae más de 70 años de telemetría de Fórmula 1 desde la API REST de Jolpica-F1. Almacenamiento transaccional en SQLite, exportaciones analíticas en formato columnar Parquet, ingesta incremental idempotente y validaciones de calidad de datos.",
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
    section: "Ingeniería de Datos y Machine Learning Aplicado",
    title: "Titanic EDA & Benchmark de Clasificación",
    description: "Análisis exploratorio de datos y modelado predictivo completo sobre el clásico dataset Titanic de Kaggle — limpieza profunda de datos, ingeniería avanzada de características y comparación de modelos de clasificación (Regresión Logística vs Random Forest) con validación cruzada.",
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
    description: "CITI Program — IA y protección ética de sujetos humanos en entornos digitales.",
    link: "https://www.citiprogram.org/verify/?wc54fbdbb-ac57-44e4-b3dc-62bc362a69f0-69450114",
},
{
    title: "Responsible Conduct of Research for Engineers",
    description: "CITI Program (05/2025) — Conducta responsable y ética de investigación para ingeniería.",
    link: "https://www.citiprogram.org/verify/?w46e6a78e-561f-4a28-b0b2-c2909f25749e-69450101",
},
{
    title: "Best Practices for Global Research Partnerships",
    description: "CITI Program (03/2026) — Mejores prácticas para colaboraciones globales de investigación.",
    link: "https://www.citiprogram.org/verify/?w7aaa172d-8dce-4fa7-b51e-192f7e7a2109-69450127",
},
{
    title: "A Beginner’s Guide to Being a Sponsor-Investigator",
    description: "CITI Program (05/2025) — Gestión y liderazgo de proyectos de investigación académica.",
    link: "https://www.citiprogram.org/verify/?w68cd544e-4416-4ca2-82b5-a947b44e25fb-69450121",
},
{
    title: "Bring Your Own Device (BYOD) Studies",
    description: "CITI Program (05/2025) — Mejores prácticas en estudios técnicos con dispositivos personales.",
    link: "https://www.citiprogram.org/verify/?w97b6bcdf-84f6-430c-83ea-1f4a2ecf280f-69450122",
},
{
    title: "Taller de IA Aplicada a la Ciencia",
    description: "UPSJB (05/2025) — Taller práctico sobre aplicación de IA en labores científicas.",
    link: "https://documentodigital.upsjb.edu.pe/apis/Documentos/CE-0061153730RH00208408.pdf",
},
{
    title: "Yachaywasi Net 2026 — IA y Transformación Digital",
    description: "UPSJB (06/2026) — Innovación y nuevas tecnologías aplicadas.",
    link: "https://documentodigital.upsjb.edu.pe/apis/Documentos/CE-0061153730RH00246645.pdf",
},
{
    title: "YACHAYHUASI — Turismo Inteligente y Comunicación Estratégica",
    description: "UPSJB (06/2026) — Transformación digital y gestión sostenible.",
    link: "https://documentodigital.upsjb.edu.pe/apis/Documentos/CE-0061153730RH00247245.pdf",
},
];

const contactConfig = {
    description: "Disponible para roles de desarrollo de software, desarrollo full-stack / backend y proyectos freelance de alto impacto. Construyamos algo excepcional juntos.",
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