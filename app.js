
const state = {
  activeSection: null, // null = home
  profile: { ...defaultProfile }
};

// Mapa de iconos por sección
const SECTION_ICONS = {
  'sobre-mi': 'user',
  'habilidades': 'cpu',
  'cursos': 'award',
  'mini-cv': 'file-text',
  'proyectos': 'folder-git-2',
  'github': 'code',
  'linkedin': 'briefcase-business',
  'contacto': 'mail'
};

// ============================================================
// Utilidades
// ============================================================

function icon(name, cls) {
  return `<i data-lucide="${name}" class="icon ${cls || ''}"></i>`;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).catch(() => {
    // Fallback silencioso
  });
}

function persist(key, value) {
  try {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
  } catch (e) { /* ignorar errores de almacenamiento */ }
}

function loadPersisted(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

// ============================================================
// Home Navigation
// ============================================================

function renderNavCard(section, side) {
  const isRight = side === 'right';
  return `
    <button class="nav-card ${isRight ? 'align-right' : ''}" data-section="${section.id}" id="nav-item-${section.id}">
      <div class="nav-card-row">
        <div class="nav-card-icon">${icon(SECTION_ICONS[section.id])}</div>
        <div class="nav-card-body">
          <div class="nav-card-title-row">
            <span class="nav-card-title">${section.title}</span>
            ${icon('arrow-up-right', 'nav-card-arrow')}
          </div>
          <p class="nav-card-subtitle">${section.subtitle}</p>
        </div>
      </div>
    </button>
  `;
}

function renderHome() {
  const left = sectionsList.filter(s => s.side === 'left');
  const right = sectionsList.filter(s => s.side === 'right');

  document.getElementById('nav-cards-left').innerHTML = left.map(s => renderNavCard(s, 'left')).join('');
  document.getElementById('nav-cards-right').innerHTML = right.map(s => renderNavCard(s, 'right')).join('');

  // El nombre se muestra tal cual está escrito en js/data.js (defaultProfile.name)
  document.getElementById('home-center-name').textContent = state.profile.name;
  document.getElementById('home-center-title').textContent = state.profile.title;
  document.getElementById('home-center-location').textContent = `${state.profile.location} • Transición Tecnológica`;

  document.querySelectorAll('.nav-card').forEach(btn => {
    btn.addEventListener('click', () => goToSection(btn.dataset.section));
  });

  refreshIcons();
}

// ============================================================
// Navegación entre secciones
// ============================================================

function goToSection(id) {
  state.activeSection = id;
  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('section-view').classList.remove('hidden');
  renderSectionView();
}

function goHome() {
  state.activeSection = null;
  document.getElementById('section-view').classList.add('hidden');
  document.getElementById('home-view').classList.remove('hidden');
  renderHome();
}

function getCurrentSection() {
  return sectionsList.find(s => s.id === state.activeSection) || sectionsList[0];
}

function renderSectionView() {
  const current = getCurrentSection();

  document.getElementById('crumb-name').textContent = state.profile.name;
  document.getElementById('crumb-group').textContent = current.side === 'left' ? 'Perfil y trayectoria' : 'Trabajo y contacto';
  document.getElementById('crumb-current').innerHTML = `${icon(SECTION_ICONS[current.id])}${current.title}`;

  // Tabs (ocupan espacios iguales y quedan centradas, ver CSS de #section-tabs-list)
  const tabsList = document.getElementById('section-tabs-list');
  tabsList.innerHTML = sectionsList.map(sec => `
    <button class="tab-btn ${sec.id === state.activeSection ? 'active' : ''}" data-section="${sec.id}">
      ${icon(SECTION_ICONS[sec.id])}
      <span>${sec.title}</span>
    </button>
  `).join('');
  tabsList.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeSection = btn.dataset.section;
      renderSectionView();
    });
  });

  // Contenido
  const content = document.getElementById('section-content');
  const renderers = {
    'sobre-mi': renderAboutSection,
    'habilidades': renderSkillsSection,
    'cursos': renderCertificationsSection,
    'mini-cv': renderMiniCvSection,
    'proyectos': renderProjectsSection,
    'github': renderGithubSection,
    'linkedin': renderLinkedinSection,
    'contacto': renderContactSection
  };
  content.innerHTML = (renderers[state.activeSection] || renderAboutSection)();
  content.scrollTop = 0;

  attachSectionHandlers(state.activeSection);
  refreshIcons();
}

// ============================================================
// Sección: Sobre mí
// ============================================================

function renderAboutSection() {
  const p = state.profile;
  return `
    <div class="section-space">
      <div class="about-banner">
        <div class="about-banner-glow"></div>
        <div class="about-banner-content">
          <div class="about-identity">
            <div class="about-avatar">AL</div>
            <div>
              <div class="about-name-row">
                <h2 class="about-name">${p.name}</h2>
                <span class="tag-active">En formación activa</span>
              </div>
              <p class="about-role">${p.title}</p>
              <p class="about-loc">${p.location}
            </div>
          </div>
          <div class="about-actions">
            <button id="goto-contact-btn" class="btn-primary">
              <span>Contacto</span>${icon('arrow-right')}
            </button>
          </div>
        </div>
      </div>

      <div class="bio-panel">
        <div class="bio-panel-heading">${icon('user')}<span>Presentación Profesional</span></div>
        <p class="bio-text">${p.bioP1}</p>
        <p class="bio-text">${p.bioP2}</p>
      </div>

      <div>
        <div class="mini-data-header">${icon('sparkles')}<span></span></div>
        <div class="cards-grid cols-3">
          <div class="data-card">
            <div class="data-card-top">
              <div class="icon-badge" style="background:rgba(251,191,36,0.15); border:1px solid rgba(252,211,77,0.3); color:#fcd34d;"></div>
              <div>
                <span class="data-card-label">Formación</span>
                <h4 class="data-card-value">${p.formation}</h4>
              </div>
            </div>
            <p class="data-card-foot">Visión de procesos, gestión y enfoque en negocio.</p>
          </div>
          <div class="data-card">
            <div class="data-card-top">
              <div class="icon-badge" style="background:rgba(16,185,129,0.15); border:1px solid rgba(52,211,153,0.3); color:#6ee7b7;"></div>
              <div>
                <span class="data-card-label">Especialización actual</span>
                <h4 class="data-card-value">${p.specialization}</h4>
              </div>
            </div>
            <p class="data-card-foot">Formación integral frontend, backend y bases de datos.</p>
          </div>
          <div class="data-card">
            <div class="data-card-top">
              <div class="icon-badge" style="background:rgba(223,181,123,0.2); border:1px solid rgba(223,181,123,0.4); color:#fde68a;"></div>
              <div>
                <span class="data-card-label">En desarrollo</span>
                <h4 class="data-card-value" style="font-size:0.875rem;">${p.inProgressSkills.join(' · ')}</h4>
              </div>
            </div>
            <p class="data-card-foot">Práctica continua en proyectos reales y colaborativos.</p>
          </div>
        </div>
      </div>

      <div class="cta-banner">
        <div>
          <h4 class="cta-title">${icon('briefcase')}Conoce mis proyectos</h4>
          <p class="cta-text">Explora mis proyectos y conoce mi participación, las tecnologías utilizadas y el resultado de cada uno.</p>
        </div>
        <button id="cta-proyectos-btn" class="btn-primary" style="flex-shrink:0;">
          <span>Ver Proyectos</span>${icon('arrow-right')}
        </button>
      </div>
    </div>
  `;
}

// ============================================================
// Sección: Habilidades
// ============================================================

const CATEGORY_ICONS = {
  'Backend': 'server',
  'Frontend': 'layout',
  'Bases de datos': 'database',
  'Herramientas': 'wrench',
  'Metodologías': 'git-pull-request',
  'Actualmente aprendiendo': 'book-open'
};

function renderSkillsSection() {
  return `
    <div class="section-space">
      <div class="panel panel-header">
        <h2 class="section-title">${icon('cpu')}Habilidades &amp; Tecnologías</h2>
       
      </div>

      <div class="cards-grid cols-3">
        ${skillsData.map(cat => {
          const isLearning = cat.name === 'Actualmente aprendiendo';
          return `
            <div class="card ${isLearning ? 'skill-card-learning' : ''}">
              <div class="skill-card-top">
                <span class="skill-cat-title">${icon(CATEGORY_ICONS[cat.name] || 'cpu')}${cat.name}</span>
                ${isLearning ? '<span class="skill-cat-badge">En curso</span>' : ''}
              </div>
              <div>
                ${cat.skills.map(skill => `
                  <div class="skill-item">
                    <span class="skill-item-name">${icon('check-circle-2')}${skill.name}</span>
                    <p class="skill-item-desc">${skill.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="note-panel">
        ${icon('sparkles')}
        <p><strong>Cada una de estas tecnologías y herramientas ha sido aplicada en la resolución de problemas reales, trabajo colaborativo en equipo y desarrollo de interfaces intuitivas.</strong> </p>
      </div>
    </div>
  `;
}

// ============================================================
// Sección: Cursos & Certificaciones
// ============================================================

function renderCertificationsSection() {
  return `
    <div class="section-space">
      <div class="panel panel-header header-row">
        <div>
          <h2 class="section-title">${icon('award')}Cursos &amp; Certificaciones</h2>
          <p class="section-subtitle">Acreditaciones obtenidas en 2026 en desarrollo con Java, Python y formación intensiva Full Stack.</p>
        </div>
        <div class="badge-pill">${icon('shield-check', '')}<span>3 Certificaciones 2026</span></div>
      </div>

      <div class="cards-grid cols-3">
        ${certificationsData.map(cert => `
          <div class="card cert-card">
            <div>
              <div class="cert-top">
                <div>
                  <span class="cert-issuer">${cert.issuer}</span>
                  <h3 class="cert-title">${cert.title}</h3>
                </div>
                <div class="cert-icon">${icon('award')}</div>
              </div>
              <p class="cert-desc" style="margin-top:0.75rem;">${cert.description}</p>
              <div class="tag-list">
                ${cert.skills.map(s => `<span class="tag-chip">${s}</span>`).join('')}
              </div>
            </div>
            <div class="cert-foot">
              <div class="cert-date">${icon('calendar')}<strong>${cert.issueDate}</strong></div>
              ${cert.credentialId ? `
                <button class="btn-copy-id" data-copy-id="${cert.credentialId}">
                  ${icon('hash')}<span>${cert.credentialId}</span>${icon('copy', 'copy-mark')}
                </button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================================
// Sección: Mini CV
// ============================================================

function renderMiniCvSection() {
  const p = defaultProfile;
  const cvUrl = p.cvUrl || '';

  return `
    <div class="section-space">
      <div class="panel panel-header header-row">
        <div>
          <h2 class="section-title">${icon('file-text')}Curriculum Vitae</h2>
          <p class="section-subtitle">Enlace a mi CV completo.</p>
        </div>
        ${cvUrl ? `
          <div class="cv-action-bar">
            <a id="open-cv-direct-link" href="${cvUrl.startsWith('http') ? cvUrl : 'https://' + cvUrl}" target="_blank" rel="noreferrer" class="btn-primary"><span>Abrir mi CV</span>${icon('external-link')}</a>
          </div>
        ` : ''}
      </div>

      <div class="cv-sheet">
        <div class="cv-sheet-header">
          <div>
            <h1 class="cv-sheet-name">${p.name}</h1>
            <p class="cv-sheet-role">${p.title}</p>
          </div>
          <div class="cv-sheet-contact">
            <p>${icon('mail')}${p.email}</p>
            <p>${icon('map-pin')}${p.location}</p>
          </div>
        </div>

        <div>
          <h3 class="cv-section-heading">Perfil &amp; Resumen</h3>
          <p class="bio-text">${p.bioP1} ${p.bioP2}</p>
        </div>

        <div>
          <h3 class="cv-section-heading">${icon('graduation-cap')}Formación Académica &amp; Certificaciones</h3>
          <div class="cv-edu-grid">
            <div class="cv-mini-card">
              <span class="tag-year">En proceso de titulación</span>
              <h4>Licenciatura en Administración</h4>
              <p>UNAM FCA • Visión de procesos y negocios</p>
            </div>
            <div class="cv-mini-card">
              <span class="tag-year emerald">Octubre 2026</span>
              <h4>Java Full Stack Developer</h4>
              <p>Generation México • Formación intensiva de habilidades blandas y técnicas</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="cv-section-heading">${icon('briefcase')}Proyectos Prácticos Realizados</h3>
          <div>
            ${projectsData.map(proj => `
              <div class="cv-project-item">
                <div class="cv-project-top">
                  <h4 class="cv-project-title"><span>${proj.emoji}</span><span>${proj.title}</span><span class="tagline">— ${proj.tagline}</span></h4>
                  <span class="cv-project-year">2026</span>
                </div>
                ${proj.myContribution ? `
                  <ul class="cv-contrib-list">
                    ${proj.myContribution.map(c => `<li>${icon('check-circle-2')}<span>${c}</span></li>`).join('')}
                  </ul>` : ''}
                <div class="tags-row">
                  ${proj.technologies.map(t => `<span class="tag-mono">${t}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <h3 class="cv-section-heading">${icon('code')}Competencias Técnicas</h3>
          <div class="cv-skills-grid">
            <div class="cv-mini-card"><strong>Backend &amp; SQL:</strong><p>Java, Spring BootL</p></div>
            <div class="cv-mini-card"><strong>Frontend:</strong><p>HTML, CSS, JavaScript, Bootstrap</p></div>
            <div class="cv-mini-card"><strong>Herramientas &amp; Ágil:</strong><p>Git, GitHub, VS Code, Figma, Scrum</p></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// Sección: Proyectos
// ============================================================

function renderProjectsSection() {
  return `
    <div class="section-space">
      <div class="panel panel-header header-row">
        <div>
          <h2 class="section-title">${icon('folder-git-2')}Proyectos Destacados</h2>
          <p class="section-subtitle">Plataformas reales y colaborativas donde he participado, detallando mi contribución técnica.</p>
        </div>
      </div>

      <div class="cards-grid cols-3-lg">
        ${projectsData.map(project => `
          <div class="project-card">
            <div class="project-thumb">
              <img src="${project.image}" alt="${project.title}" referrerpolicy="no-referrer" />
              <div class="project-thumb-overlay"></div>
              <div class="project-category-badge"><span>${project.emoji}</span><span>${project.category}</span></div>
            </div>
            <div class="project-body">
              <div>
                <h3 class="project-title"><span>${project.emoji}</span><span>${project.title}</span></h3>
                <p class="project-tagline">${project.tagline}</p>
                <p class="project-desc" style="margin-top:0.5rem;">${project.description}</p>
                ${project.myContribution ? `
                  <div class="contrib-box" style="margin-top:0.75rem;">
                    <span class="contrib-title">${icon('git-branch')}Mi contribución:</span>
                    <ul class="contrib-list">
                      ${project.myContribution.map(item => `<li>${icon('check-circle-2')}<span>${item}</span></li>`).join('')}
                    </ul>
                  </div>` : ''}
              </div>
              <div>
                <span class="tech-label">Tecnologías:</span>
                <div class="tech-tags">
                  ${project.technologies.map(t => `<span class="tag-chip">${t}</span>`).join('')}
                </div>
                <div class="project-actions">
                  <button class="btn-view-project" data-project-id="${project.id}"><span>Ver proyecto</span>${icon('external-link')}</button>
                  <a href="${project.githubUrl || 'https://github.com'}" target="_blank" rel="noreferrer" class="btn-github" title="Ver repositorio en GitHub">${icon('github')}<span>GitHub</span></a>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderProjectModal(project) {
  return `
    <div class="modal-top">
      <div>
        <span class="modal-badge">${project.emoji} ${project.category}</span>
        <h3 class="modal-title">${project.title}</h3>
        <p class="modal-subtitle">${project.tagline}</p>
      </div>
      <button id="project-modal-close" class="modal-close-x">✕</button>
    </div>
    <div class="modal-image"><img src="${project.image}" alt="${project.title}" referrerpolicy="no-referrer" /></div>
    <div>
      <h4 class="modal-block-title">Descripción</h4>
      <p class="modal-desc-text">${project.description}</p>
    </div>
    ${project.myContribution ? `
      <div class="contrib-box">
        <h4 class="contrib-title">${icon('git-branch')}Mi contribución técnica:</h4>
        <ul class="contrib-list">
          ${project.myContribution.map(f => `<li>${icon('check-circle-2')}<span>${f}</span></li>`).join('')}
        </ul>
      </div>` : ''}
    <div>
      <h4 class="modal-block-title">Tecnologías empleadas:</h4>
      <div class="tech-tags">${project.technologies.map(t => `<span class="tag-chip">${t}</span>`).join('')}</div>
    </div>
    <div class="modal-footer">
      <button id="project-modal-cerrar" class="btn-text-muted">Cerrar</button>
      <a href="${project.githubUrl || 'https://github.com'}" target="_blank" rel="noreferrer" class="btn-github">${icon('github')}<span>GitHub</span></a>
      <a href="${project.liveUrl || 'https://example.com'}" target="_blank" rel="noreferrer" class="btn-view-project" style="flex:none;"><span>Ver Proyecto</span>${icon('external-link')}</a>
    </div>
  `;
}

function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;
  const overlay = document.getElementById('project-modal-overlay');
  document.getElementById('project-modal-box').innerHTML = renderProjectModal(project);
  overlay.classList.remove('hidden');
  refreshIcons();

  document.getElementById('project-modal-close').addEventListener('click', closeProjectModal);
  document.getElementById('project-modal-cerrar').addEventListener('click', closeProjectModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeProjectModal(); });
}

function closeProjectModal() {
  document.getElementById('project-modal-overlay').classList.add('hidden');
}

// ============================================================
// Sección: GitHub
// ============================================================

function renderGithubSection() {
  const githubUrl = loadPersisted('portfolio_github_url') || defaultProfile.githubUrl || 'https://github.com';
  return `
    <div class="link-section">
      <div class="link-hero">
        <div class="link-hero-icon github">${icon('code')}</div>
        <div>
          <h2 class="link-hero-title">Perfil de GitHub</h2>
          <p class="link-hero-desc">Accede directamente a mis repositorios, código fuente de proyectos colaborativos y control de versiones.</p>
        </div>
        <a id="open-github-direct" href="${githubUrl.startsWith('http') ? githubUrl : 'https://' + githubUrl}" target="_blank" rel="noreferrer" class="btn-link-primary github">
          ${icon('code')}<span>Abrir mi GitHub</span>${icon('external-link')}
        </a>
          </div>
        </div>
      </div>

      <div class="link-info-panel">
        <h3 class="link-info-title">${icon('folder-git-2')}Repositorios Principales en mi perfil</h3>
        <div class="repo-grid">
          <div class="repo-item"><span class="name"> Keso pastelería</span><span class="desc">Trabajo colaborativo Git &amp; ramas</span></div>
          <div class="repo-item"><span class="name"> Synapse</span><span class="desc">Hackathon con Scrum</span></div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// Sección: LinkedIn
// ============================================================

function renderLinkedinSection() {
  const linkedinUrl = loadPersisted('portfolio_linkedin_url') || defaultProfile.linkedinUrl || 'https://linkedin.com';
  return `
    <div class="link-section">
      <div class="link-hero">
        <div class="link-hero-icon linkedin">${icon('briefcase-business')}</div>
        <div>
          <h2 class="link-hero-title">Perfil de LinkedIn</h2>
          <p class="link-hero-desc">Conecta conmigo en LinkedIn para networking profesional, oportunidades laborales y colaboraciones.</p>
        </div>
        <a id="open-linkedin-direct" href="${linkedinUrl.startsWith('http') ? linkedinUrl : 'https://' + linkedinUrl}" target="_blank" rel="noreferrer" class="btn-link-primary linkedin">
          ${icon('briefcase-business')}<span>Abrir mi LinkedIn</span>${icon('external-link')}
        </a>
          </div>
        </div>
      </div>

      <div class="link-info-panel">
        <h3 class="link-info-title">${icon('check-circle-2')}Perfil Profesional Actualizado</h3>
        <p>Experiencia en desarrollo web con Java, SQL, JavaScript, HTML, CSS y Git. Interesada en desarrollar soluciones funcionales y crecer profesionalmente en tecnología.</p>
      </div>
    </div>
  `;
}

// ============================================================
// Sección: Contacto
// ============================================================

function renderContactSection() {
  const p = defaultProfile;
  return `
    <div class="section-space">
      <div class="panel panel-header">
        <h2 class="section-title">${icon('mail')}Pongámonos en contacto</h2>
        <p class="section-subtitle">¿Tienes una oportunidad laboral, proyecto o simplemente quieres conocer más sobre mi trabajo? Será un gusto leerte.</p>
      </div>

      <div class="contact-grid">
        <div>
          <div class="contact-form-panel" id="contact-form-panel">
            <h3 class="contact-form-title">Enviar Mensaje Directo</h3>
            <div id="contact-form-slot">${renderContactForm()}</div>
          </div>
        </div>

        <div class="contact-side">
          <div class="contact-channels-panel">
            <h4 class="contact-channels-title">Canales Directos</h4>
            <div class="channel-item">
              <div>
                <span class="channel-label">${icon('mail')}Correo</span>
                <span class="channel-value">${p.email}</span>
              </div>
              <button class="btn-icon-copy" id="copy-email-btn" title="Copiar correo">${icon('copy')}</button>
            </div>
            <div class="channel-item">
              <div>
                <span class="channel-label">${icon('map-pin')}Ubicación</span>
                <span class="channel-value" style="font-family:var(--font-sans-ui);">${p.location}</span>
              </div>
              <span class="channel-tz">${p.timezone}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderContactForm() {
  return `
    <form id="contact-form">
      <div class="form-grid-2">
        <div class="form-field">
          <label>Tu Nombre <span class="req">*</span></label>
          <input type="text" id="contact-name-input" required placeholder="Ej. Sofía Martínez" />
        </div>
        <div class="form-field">
          <label>Correo Electrónico <span class="req">*</span></label>
          <input type="email" id="contact-email-input" required placeholder="tu@email.com" />
        </div>
      </div>
      <div class="form-field" style="margin-top:1rem;">
        <label>Asunto</label>
        <input type="text" id="contact-subject-input" placeholder="Ej. Oportunidad laboral / Desarrollo web" />
      </div>
      <div class="form-field" style="margin-top:1rem;">
        <label>Mensaje <span class="req">*</span></label>
        <textarea id="contact-message-input" required rows="4" placeholder="Escribe tu mensaje..."></textarea>
      </div>
      <button id="submit-contact-btn" type="submit" class="btn-submit" style="margin-top:1.25rem;">
        <span>Enviar Mensaje</span>${icon('send')}
      </button>
    </form>
  `;
}

function renderContactSuccess() {
  return `
    <div class="form-success">
      <div class="form-success-icon">${icon('check-circle-2')}</div>
      <h4>¡Mensaje enviado con éxito!</h4>
      <p>Gracias por comunicarte. Me pondré en contacto contigo a la brevedad posible a través de tu correo electrónico.</p>
      <button id="new-message-btn" class="btn-new-message">Enviar otro mensaje</button>
    </div>
  `;
}

// ============================================================
// Manejadores de eventos específicos de cada sección
// ============================================================

function attachSectionHandlers(sectionId) {
  if (sectionId === 'sobre-mi') {
    document.getElementById('goto-contact-btn')?.addEventListener('click', () => { state.activeSection = 'contacto'; renderSectionView(); });
    document.getElementById('cta-proyectos-btn')?.addEventListener('click', () => { state.activeSection = 'proyectos'; renderSectionView(); });
  }

  if (sectionId === 'cursos') {
    document.querySelectorAll('.btn-copy-id').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.copyId;
        copyToClipboard(id);
        btn.classList.add('copied');
        const copyIcon = btn.querySelector('.copy-mark');
        if (copyIcon) copyIcon.setAttribute('data-lucide', 'check');
        refreshIcons();
        setTimeout(() => {
          if (copyIcon) copyIcon.setAttribute('data-lucide', 'copy');
          btn.classList.remove('copied');
          refreshIcons();
        }, 2000);
      });
    });
  }

  if (sectionId === 'proyectos') {
    document.querySelectorAll('.btn-view-project').forEach(btn => {
      btn.addEventListener('click', () => openProjectModal(btn.dataset.projectId));
    });
  }

  if (sectionId === 'github') {
    document.getElementById('github-edit-toggle')?.addEventListener('click', () => {
      const current = loadPersisted('portfolio_github_url') || defaultProfile.githubUrl;
      document.getElementById('github-editor-slot').innerHTML = `
        <div class="url-edit-row">
          <input type="text" id="github-url-temp" class="input-inline" placeholder="https://github.com/tu-usuario" value="${current}" />
          <button id="github-url-save" class="btn-save-inline">Guardar</button>
          <button id="github-url-cancel" class="btn-cancel-inline">Cancelar</button>
        </div>
      `;
      document.getElementById('github-url-save').addEventListener('click', () => {
        persist('portfolio_github_url', document.getElementById('github-url-temp').value);
        renderSectionView();
      });
      document.getElementById('github-url-cancel').addEventListener('click', () => renderSectionView());
    });
  }

  if (sectionId === 'linkedin') {
    document.getElementById('linkedin-edit-toggle')?.addEventListener('click', () => {
      const current = loadPersisted('portfolio_linkedin_url') || defaultProfile.linkedinUrl;
      document.getElementById('linkedin-editor-slot').innerHTML = `
        <div class="url-edit-row">
          <input type="text" id="linkedin-url-temp" class="input-inline" placeholder="https://linkedin.com/in/tu-perfil" value="${current}" />
          <button id="linkedin-url-save" class="btn-save-inline">Guardar</button>
          <button id="linkedin-url-cancel" class="btn-cancel-inline">Cancelar</button>
        </div>
      `;
      document.getElementById('linkedin-url-save').addEventListener('click', () => {
        persist('portfolio_linkedin_url', document.getElementById('linkedin-url-temp').value);
        renderSectionView();
      });
      document.getElementById('linkedin-url-cancel').addEventListener('click', () => renderSectionView());
    });
  }

  if (sectionId === 'contacto') {
    attachContactFormHandler();
    document.getElementById('copy-email-btn')?.addEventListener('click', (e) => {
      copyToClipboard(defaultProfile.email);
      const btn = e.currentTarget;
      btn.innerHTML = icon('check');
      btn.style.color = '#34d399';
      refreshIcons();
      setTimeout(() => { btn.innerHTML = icon('copy'); btn.style.color = ''; refreshIcons(); }, 2000);
    });
  }
}

function attachContactFormHandler() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name-input').value;
    const email = document.getElementById('contact-email-input').value;
    const message = document.getElementById('contact-message-input').value;
    if (!name || !email || !message) return;

    const btn = document.getElementById('submit-contact-btn');
    btn.disabled = true;
    btn.innerHTML = '<span>Enviando mensaje...</span>';

    setTimeout(() => {
      document.getElementById('contact-form-slot').innerHTML = renderContactSuccess();
      refreshIcons();
      document.getElementById('new-message-btn').addEventListener('click', () => {
        document.getElementById('contact-form-slot').innerHTML = renderContactForm();
        refreshIcons();
        attachContactFormHandler();
      });
    }, 1000);
  });
}

// ============================================================
// Inicialización
// ============================================================

function init() {
  renderHome();

  // Navegación
  document.getElementById('back-to-home-btn').addEventListener('click', goHome);
  document.getElementById('close-section-modal-btn').addEventListener('click', goHome);

  // Cerrar sección o modal con tecla Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!document.getElementById('project-modal-overlay').classList.contains('hidden')) {
        closeProjectModal();
      } else if (state.activeSection) {
        goHome();
      }
    }
  });

  refreshIcons();
}

document.addEventListener('DOMContentLoaded', init);
