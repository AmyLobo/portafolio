
const defaultProfile = {

  name: "Amy Lobo",
  title: "Java Full Stack Developer",
  tagline: "Estudiante de Administración en transición hacia el desarrollo de software.",
  email: "lobo.samperio.amy@gmail.com",
  phone: "+52 (55) 4321-9876",
  location: "México / Remoto",
  timezone: "GMT-6 (CDMX)",
  availability: "En formación & disponible para proyectos",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  // 👉 Pega aquí el link de tu CV (Google Drive, PDF, etc.) para que aparezca el botón "Abrir mi CV"
  cvUrl: "",
  githubUsername: "amylobo-dev",
  linkedinUsername: "amy-lobo-samperio",
  bioLong: "Soy estudiante de Administración en transición hacia el desarrollo de software. Actualmente me estoy formando como Java Full Stack Developer, desarrollando habilidades en frontend, backend, bases de datos y metodologías ágiles. Me interesa crear soluciones funcionales y fáciles de usar, combinando mi formación en negocios con mis conocimientos en tecnología.",
  bioP1: "Soy estudiante de Administración en transición hacia el desarrollo de software. Actualmente me estoy formando como Java Full Stack Developer, desarrollando habilidades en frontend, backend, bases de datos y metodologías ágiles.",
  bioP2: "Me interesa crear soluciones funcionales y fáciles de usar, combinando mi formación en negocios con mis conocimientos en tecnología.",
  quote: "Crear soluciones funcionales y fáciles de usar, combinando mi visión de negocios con tecnología.",
  formation: "Administración",
  specialization: "Java Full Stack Development",
  inProgressSkills: ["Java", "Spring Boot", "SQL", "JavaScript"]
};

const sectionsList = [
  // Izquierda — Perfil y trayectoria
  {
    id: 'sobre-mi',
    title: 'Sobre mí',
    subtitle: 'Presentación y perfil profesional',
    iconName: 'user',
    side: 'left',
    badge: 'Perfil',
    description: 'Conoce mi transición de Administración a desarrollo de software y mis intereses.'
  },
  {
    id: 'habilidades',
    title: 'Habilidades & Tecnologías',
    subtitle: 'Backend, Frontend, SQL y Herramientas',
    iconName: 'cpu',
    side: 'left',
    badge: 'Stack',
    description: 'Tecnologías y herramientas con las que trabajo y me encuentro aprendiendo.'
  },
  {
    id: 'cursos',
    title: 'Cursos & Certificaciones',
    subtitle: 'Generation México & Certificaciones 2026',
    iconName: 'award',
    side: 'left',
    badge: '2026',
    description: 'Credenciales en Java, Python y formación intensiva Full Stack.'
  },
  {
    id: 'mini-cv',
    title: 'Mini CV',
    subtitle: 'Resumen ejecutivo y enlace a CV',
    iconName: 'file-text',
    side: 'left',
    badge: 'CV',
    description: 'Trayectoria académica, formación y resumen profesional listo para consultar.'
  },

  // Derecha — Trabajo y contacto
  {
    id: 'proyectos',
    title: 'Proyectos',
    subtitle: 'Keso Javahots, SportZone & EventEase',
    iconName: 'folder-git-2',
    side: 'right',
    badge: 'Casos reales',
    description: 'Plataformas colaborativas, proyectos de hackathon y soluciones full stack.'
  },
  {
    id: 'github',
    title: 'GitHub',
    subtitle: 'Repositorios & Enlace a perfil',
    iconName: 'github',
    side: 'right',
    badge: 'Código',
    description: 'Enlace directo a mi perfil de GitHub con repositorios de mis proyectos.'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    subtitle: 'Perfil profesional & Networking',
    iconName: 'linkedin',
    side: 'right',
    badge: 'Conectar',
    description: 'Enlace directo a mi red profesional de LinkedIn para conectar y charlar.'
  },
  {
    id: 'contacto',
    title: 'Contacto',
    subtitle: 'Envíame un mensaje directo',
    iconName: 'mail',
    side: 'right',
    badge: 'Email',
    description: 'Formulario de contacto y datos para comunicarte conmigo.'
  }
];

const skillsData = [
  {
    name: "Backend",
    skills: [
      { name: "Java", level: 85, description: "Programación orientada a objetos, colecciones, modularidad y lógica de negocio", tags: ["Java", "OOP", "Estructuras"] },
      { name: "Spring Boot", level: 80, description: "Desarrollo de servicios backend, controladores REST, inyección de dependencias", tags: ["Spring", "REST API", "Backend"] }
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 90, description: "Estructura semántica, diseño visual, estilos adaptativos y layouts fluidos", tags: ["HTML5", "CSS3", "Semántica"] },
      { name: "JavaScript", level: 85, description: "Manipulación del DOM, asincronía, interactividad y lógica de cliente", tags: ["JS ES6+", "DOM", "Fetch"] },
      { name: "Bootstrap", level: 88, description: "Sistemas de cuadrícula (grid), componentes responsivos y maquetación rápida", tags: ["Bootstrap", "Responsive", "UI"] }
    ]
  },
  {
    name: "Bases de datos",
    skills: [
      { name: "SQL", level: 82, description: "Diseño de tablas, relaciones, consultas DDL/DML y persistencia de información", tags: ["SQL", "Relacional", "Queries"] }
    ]
  },
  {
    name: "Herramientas",
    skills: [
      { name: "Git & GitHub", level: 88, description: "Control de versiones, trabajo colaborativo con ramas, PRs y resolución de conflictos", tags: ["Git", "GitHub", "Branching"] },
      { name: "VS Code", level: 90, description: "Entorno de desarrollo principal con extensiones y depuración", tags: ["VS Code", "IDE"] },
      { name: "Figma", level: 82, description: "Diseño de prototipos, wireframes e interfaces de usuario previas al código", tags: ["Figma", "UI Design", "Prototipado"] }
    ]
  },
  {
    name: "Metodologías",
    skills: [
      { name: "Agile & Scrum", level: 85, description: "Metodología ágil, sprints colaborativos, ceremonias diarias y tableros kanban", tags: ["Agile", "Scrum", "Sprints"] }
    ]
  },
  {
    name: "Actualmente aprendiendo",
    skills: [
      { name: "Python", level: 70, description: "Fundamentos y sintaxis para scripting y aplicaciones", tags: ["Python", "En aprendizaje"] },
      { name: "APIs & REST", level: 75, description: "Consumo e integración avanzada de endpoints y servicios web", tags: ["APIs", "REST", "JSON"] }
    ]
  }
];

const certificationsData = [
  {
    id: "cert-java-beginner",
    title: "Java Beginner",
    issuer: "Certificación",
    issueDate: "2026",
    credentialId: "CERT-JAVA-2026",
    credentialUrl: "https://github.com",
    skills: ["Java", "OOP", "Lógica de Programación"],
    description: "Certificación en fundamentos esenciales del lenguaje Java, programación orientada a objetos y estructuras.",
  },
  {
    id: "cert-python-beginner",
    title: "Python Beginner",
    issuer: "Certificación",
    issueDate: "2026",
    credentialId: "CERT-PY-2026",
    credentialUrl: "https://github.com",
    skills: ["Python", "Sintaxis", "Control de Flujo"],
    description: "Certificación introductoria en programación con Python, tipos de datos y estructuras de control.",
  },
  {
    id: "cert-generation-fullstack",
    title: "Java Full Stack Developer",
    issuer: "Generation México",
    issueDate: "2026",
    credentialId: "GEN-MX-JAVA-2026",
    credentialUrl: "https://mexico.generation.org",
    skills: ["Java", "Spring Boot", "SQL", "JavaScript", "HTML/CSS", "Bootstrap", "Git", "Scrum"],
    description: "Programa intensivo de formación técnica integral en desarrollo Full Stack con Java, bases de datos y habilidades blandas.",
  }
];

const projectsData = [
  {
    id: "proj-keso-javahots",
    title: "Keso Javahots",
    tagline: "Proyecto web colaborativo con navegación responsiva y control de versiones",
    category: "Frontend",
    featured: true,
    emoji: "🧀",
    description: "Una plataforma web desarrollada en equipo, donde trabajé en aspectos clave de frontend, diseño responsive y sistema de navegación interactivo.",
    myContribution: [
      "Desarrollo y ajustes del navbar.",
      "Diseño responsive adaptado a múltiples resoluciones.",
      "Integración y resolución de conflictos con Git.",
      "Trabajo colaborativo mediante ramas."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "GitHub"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "proj-sportzone",
    title: "SportZone",
    tagline: "Proyecto de Hackathon para plataforma deportiva",
    category: "Hackathon",
    featured: true,
    emoji: "🏆",
    description: "Proyecto desarrollado en equipo durante un hackathon, enfocado en brindar una experiencia visual dinámica para deportistas y aficionados.",
    myContribution: [
      "Desarrollo de la landing page.",
      "Implementación de diseño responsive.",
      "Trabajo con Git/GitHub.",
      "Colaboración bajo metodología Scrum."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma", "Scrum"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "proj-eventease",
    title: "EventEase",
    tagline: "Plataforma orientada a la gestión de eventos",
    category: "Fullstack",
    featured: true,
    emoji: "📱",
    description: "Plataforma orientada a la gestión y organización de eventos, diseñada para simplificar el registro, control de asistentes y administración.",
    myContribution: [
      "Participación en la lógica y módulos de gestión.",
      "Diseño de interfaz amigable y flujo intuitivo de usuario.",
      "Implementación con tecnologías Java, Spring Boot y SQL."
    ],
    technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "SQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
  }
];
