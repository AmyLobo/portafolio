
const defaultProfile = {

  name: "Amy Lobo",
  title: "Java Full Stack Developer",
  tagline: "Enfoque en el desarrollo de soluciones web.",
  email: "lobo.samperio.amy@gmail.com",
  phone: "+52 (55) 4321-9876",
  location: "México / Remoto",
  timezone: "GMT-6 (CDMX)",
  availability: "Open to Work",
  githubUrl: "https://github.com/AmyLobo",
  linkedinUrl: "www.linkedin.com/in/amy-lobo-s",
  cvUrl: "https://drive.google.com/file/d/13znzhbndpoI-VTjEoBkiTodKTNRf9k63/view?usp=sharing",
  githubUsername: "amylobo-dev",
  linkedinUsername: "amy-lobo-samperio",
  bioLong: "Soy Java Full Stack Developer con enfoque en el desarrollo de soluciones web funcionales y centradas en las necesidades del usuario. Trabajo con tecnologías como Java, Spring Boot, JavaScript, SQL, HTML y CSS, aplicando metodologías ágiles y herramientas como Git y GitHub en proyectos individuales y colaborativos. Mi formación en Administración complementa mi perfil técnico con una visión orientada a procesos, organización y necesidades de negocio.", 
  bioP1: "Soy Java Full Stack Developer con enfoque en el desarrollo de soluciones web funcionales y centradas en las necesidades del usuario.", 
  bioP2: "Trabajo con tecnologías como Java, Spring Boot, JavaScript, SQL, HTML y CSS, aplicando metodologías ágiles y herramientas como Git y GitHub en proyectos individuales y colaborativos.", 
  quote: "Desarrollar soluciones funcionales combinando tecnología, visión de negocio y enfoque en el usuario.", 
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
    description: 'Formación intensiva Full Stack y cursos.'
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
    subtitle: 'Keso Pastelería, Synapse & Más',
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
    title: "Introducción a Java, Java I, Java II",
    issuer: "Learning to Earning",
    issueDate: "2026",
    /*credentialId: "CERT-JAVA-2026",
    credentialUrl: "https://github.com",*/
    skills: ["Java", "OOP", "Lógica de Programación"],
    description: "Certificación en fundamentos esenciales del lenguaje Java, programación orientada a objetos y estructuras.",
  },
  {
    id: "cert-python-beginner",
    title: "Python Beginner",
    issuer: "Santander Open Academy",
    issueDate: "2026",
    /*credentialUrl: "https://github.com",*/
    skills: ["Python", "Sintaxis", "Control de Flujo"],
    description: "Certificación introductoria en programación con Python, tipos de datos y estructuras de control.",
  },
  {
    id: "cert-generation-fullstack",
    title: "Java Full Stack Developer Jr.",
    issuer: "Generation México",
    issueDate: "2026",
    /*credentialId: "GEN-MX-JAVA-2026",
    credentialUrl: "https://mexico.generation.org",*/
    skills: ["Java", "Spring Boot", "SQL", "JavaScript", "HTML/CSS", "Bootstrap", "Git", "Scrum"],
    description: "Programa intensivo de formación técnica integral en desarrollo Full Stack con Java, bases de datos y habilidades blandas.",
  }
];

const projectsData = [
  {
    id: "proj-keso-javahots",
    title: "Keso Pastelería",
    tagline: "Proyecto web colaborativo con navegación responsiva y control de versiones",
    category: "Frontend",
    featured: true,
    emoji: "🧀",
    description: "Una plataforma web desarrollada en equipo, donde trabajé en aspectos clave de frontend, diseño responsive y sistema de navegación interactivo.",
    myContribution: [
      "Colaboré en el desarrollo y ajustes del navbar, trabajando en conjunto con el equipo para mejorar su diseño y comportamiento responsive.",
      "Diseño responsive adaptado a múltiples resoluciones.",
      "Integración y resolución de conflictos con Git.",
      "Trabajo colaborativo mediante ramas."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "GitHub"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "logo.jpeg",
  },
  {
    id: "proj-sportzone",
    title: "Synapse",
    tagline: "Proyecto de Hackathon para plataforma deportiva",
    category: "Hackathon",
    featured: true,
    emoji: "🏆",
    description: "Proyecto desarrollado en equipo durante un hackathon, enfocado en brindar una experiencia visual dinámica para deportistas.",
    myContribution: [
      "Colaboré en el desarrollo de la landing page, encargándome del navbar, footer y la sección “Nosotros”.",
      "Implementación de diseño responsive.",
      "Trabajo con Git/GitHub.",
      "Colaboración bajo metodología Scrum."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma", "Scrum"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "Identidad visual Synapse Sport Store.png",
  },
  {
    id: "",
    title: "",
    tagline: "",
    category: "Fullstack",
    featured: true,
    emoji: "",
    description: "",
    myContribution: [
      ""
    ],
    technologies: [""],
    githubUrl: "",
    liveUrl: "",
    image: "",
  }
];
