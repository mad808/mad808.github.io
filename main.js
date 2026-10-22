/**
 * Abdyleziz Sopyyev — Portfolio Engine
 * Background Grid Animation, Multi-Language, Interactive Cursor & Tilt
 */

// 1. DYNAMIC HIGH-SPEED LINES & GRID CANVAS
const canvas = document.getElementById('energy-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let lines = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class EnergyLine {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.length = Math.random() * 160 + 80;
    this.speed = Math.random() * 2 + 0.8;
    this.angle = -Math.PI / 4 + (Math.random() * 0.1 - 0.05); // Diagonal travel
    this.opacity = Math.random() * 0.45 + 0.1;
    this.width = Math.random() * 1.5 + 0.5;
  }
  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    if (this.x > width + 200 || this.y > height + 200 || this.x < -200 || this.y < -200) {
      this.reset();
      this.x = Math.random() * width;
      this.y = -100;
    }
  }
  draw() {
    const endX = this.x - Math.cos(this.angle) * this.length;
    const endY = this.y - Math.sin(this.angle) * this.length;
    
    const grad = ctx.createLinearGradient(this.x, this.y, endX, endY);
    grad.addColorStop(0, `rgba(255, 122, 44, ${this.opacity})`);
    grad.addColorStop(0.6, `rgba(226, 88, 34, ${this.opacity * 0.5})`);
    grad.addColorStop(1, 'rgba(30, 15, 10, 0)');

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = grad;
    ctx.lineWidth = this.width;
    ctx.stroke();
  }
}

// Generate animated line instances
const lineCount = Math.floor(Math.min(window.innerWidth / 20, 45));
for (let i = 0; i < lineCount; i++) {
  lines.push(new EnergyLine());
}

function animateCanvas() {
  ctx.clearRect(0, 0, width, height);

  // Subtle grid coordinates
  ctx.strokeStyle = 'rgba(255, 107, 44, 0.035)';
  ctx.lineWidth = 1;
  const gridSize = 64;
  for (let x = 0; x < width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Draw traveling energetic lines
  lines.forEach(line => {
    line.update();
    line.draw();
  });

  requestAnimationFrame(animateCanvas);
}
animateCanvas();

// 2. SMOOTH INTERACTIVE CURSOR
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

function renderCursor() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  cursorRing.style.left = `${ringX}px`;
  cursorRing.style.top = `${ringY}px`;
  requestAnimationFrame(renderCursor);
}
renderCursor();

document.querySelectorAll('a, button, input, textarea, .project-card, .channel-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('is-hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('is-hovering'));
});

// 3. TYPING EFFECT (ROLES)
const roles = [
  "Full-Stack Developer",
  "Laravel & PHP Specialist",
  "React & Next.js Craftsman",
  "Flutter Mobile Engineer",
  "MQL5 & Python Automation Bot Architect",
  "DevOps, Docker & CI/CD Practitioner",
  "Machine Learning & Cyber Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById('typedElement');

function typeEffect() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typedElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 40 : 80;
  if (!isDeleting && charIndex === currentRole.length) {
    delay = 1800; // Pause at end of text
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 350;
  }
  setTimeout(typeEffect, delay);
}
typeEffect();

// 4. MULTI-LANGUAGE TRANSLATION SYSTEM
const translations = {
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Stack",
    navContact: "Contact",
    navCta: "Let's Talk",
    heroBadge: "Ashgabat, Turkmenistan • Born 2005",
    heroSubtitle: "I'm Abdyleziz — crafting high-throughput web architectures, cross-platform mobile products, and automated algorithms since 2023.",
    btnViewWork: "Explore Portfolio",
    metricStart: "Programming Since",
    metricLive: "Production Deployments",
    metricLanguages: "Languages Spoken",
    metricTechnologies: "Frameworks & Tools",
    aboutTag: "// 01 • ARCHITECTURE & PASSION",
    aboutCard1Title: "Full-Stack Craftsmanship",
    aboutCard1Text: "Started programming in 2023 with an obsessive commitment to mastering the entire technology stack. My daily workflow spans architecting complex relational databases in PostgreSQL & MySQL, deploying production-hardened APIs in Laravel & Node.js, and shaping reactive user experiences using React, Vue, Next.js, and Nuxt.",
    aboutCard1Sub: "For mobile deployment, I design unified cross-platform solutions with Flutter, guaranteeing native fidelity across both iOS and Android platforms.",
    aboutCard2Title: "DevOps & Infrastructure",
    aboutCard2Text: "Passionate about containerization, continuous integration, version control through Git and Gitea, automated servers, and creating scalable deployment environments for rapid delivery.",
    aboutCard3Title: "Bots, ML & Financial Coding",
    aboutCard3Text: "Active developer of algorithmic trading robots with MQL5, data manipulation workflows in Python, high-speed Telegram automation bots, and continually exploring Machine Learning models.",
    projectsTag: "// 02 • DEPLOYED SYSTEMS",
    proj1Badge: "E-Commerce Ecosystem",
    proj1Desc: "A comprehensive marketplace platform engineered for the modern retail landscape in Turkmenistan. Integrates dynamic online storefronts, restaurant menus, service directories, car sales listings, job vacancies, and second-hand trading with full trilingual support (Turkmen, Russian, English) and regional delivery logistics.",
    btnVisitProject: "Launch Live Site",
    proj2Badge: "Retail Flagship",
    proj2Desc: "A high-end modern electronic and fashion commerce storefront featuring ultra-responsive navigation, performant inventory categorisation, swift checkout architecture, and custom administrative analytics.",
    proj3Badge: "Automotive Marketplace",
    proj3Desc: "Specialized car portal designed for automotive vehicle listings, inspection data, model comparisons, search indexing, and customer dealership inquiries across Turkmenistan.",
    proj4Badge: "Algorithmic Automation",
    proj4Desc: "Custom-built automated trading robots and Telegram notifications pipelines. Calculates risk-reward metrics, monitors technical indicators, manages positions algorithmically, and broadcasts trade telemetry in real time.",
    btnVisitGithub: "Inspect on GitHub",
    skillsTag: "// 03 • CAPABILITIES & TOOLS",
    catBackend: "Backend & Architecture",
    catFrontend: "Frontend Frameworks",
    catMobile: "Mobile Engineering",
    catDevops: "Databases, DevOps & Cloud",
    contactTag: "// 04 • INITIATE CONTACT",
    contactLead: "Whether you need a full-scale e-commerce portal, custom algorithmic bot, mobile app, or backend architecture review, I am ready to collaborate.",
    contactTelegram: "Telegram Channel / Direct",
    contactEmail: "Email Address",
    contactGithub: "GitHub Repositories",
    contactInstagram: "Instagram",
    formName: "Your Name",
    formEmail: "Email Address",
    formSubject: "Subject",
    formMessage: "Message",
    btnSend: "Transmit Message"
  },
  ru: {
    navAbout: "О себе",
    navProjects: "Проекты",
    navSkills: "Стек",
    navContact: "Контакты",
    navCta: "Связаться",
    heroBadge: "Ашхабад, Туркменистан • Родился в 2005",
    heroSubtitle: "Я Абдылезиз — создаю масштабируемые веб-архитектуры, мобильные приложения и алгоритмы автоматизации с 2023 года.",
    btnViewWork: "Смотреть работы",
    metricStart: "В программировании с",
    metricLive: "Реализованных проекта",
    metricLanguages: "Языка общения",
    metricTechnologies: "Фреймворков и утилит",
    aboutTag: "// 01 • АРХИТЕКТУРА И ПОДХОД",
    aboutCard1Title: "Full-Stack Разработка",
    aboutCard1Text: "Начал программировать в 2023 году, глубоко освоив разработку полного цикла. Мой стек включает базы данных PostgreSQL и MySQL, серверную логику на Laravel и Node.js, а также современные интерфейсы на React, Vue, Next.js и Nuxt.",
    aboutCard1Sub: "Для мобильной разработки использую Flutter, создавая производительные приложения для iOS и Android с единым исходным кодом.",
    aboutCard2Title: "DevOps и Инфраструктура",
    aboutCard2Text: "Интересуюсь контейнеризацией, CI/CD процессами, версионированием через Git/Gitea и автоматизацией серверов для бесперебойной работы сервисов.",
    aboutCard3Title: "Боты, ML и Алготрейдинг",
    aboutCard3Text: "Разрабатываю торговых роботов на MQL5, сценарии автоматизации на Python, многофункциональных Telegram-ботов и изучаю основы машинного обучения.",
    projectsTag: "// 02 • РАБОЧИЕ СИСТЕМЫ",
    proj1Badge: "Маркетплейс Экосистема",
    proj1Desc: "Масштабная торговая площадка для Туркменистана: магазины, рестораны, авторынок, вакансии и объявления. Реализована мультиязычность (TK, RU, EN) и региональная доставка.",
    btnVisitProject: "Открыть сайт",
    proj2Badge: "Интернет-Магазин",
    proj2Desc: "Современный онлайн-магазин электроники и товаров с быстрой фильтрацией, каталогом и удобной панелью администратора.",
    proj3Badge: "Автомобильный Портал",
    proj3Desc: "Специализированная площадка для продажи автомобилей, детального поиска по характеристикам и коммуникации с продавцами.",
    proj4Badge: "Алгоритмическая Автоматизация",
    proj4Desc: "Роботы на MQL5 и сервисы на Python для анализа графиков, расчета рисков и мгновенной отправки торговых сигналов в Telegram.",
    btnVisitGithub: "Смотреть на GitHub",
    skillsTag: "// 03 • СТЕК ТЕХНОЛОГИЙ",
    catBackend: "Бэкенд и Базы Данных",
    catFrontend: "Фронтенд Фреймворки",
    catMobile: "Мобильная Разработка",
    catDevops: "DevOps, Git и Серверы",
    contactTag: "// 04 • СВЯЗАТЬСЯ",
    contactLead: "Открыт для предложений по разработке платформ, торговых ботов, мобильных приложений и архитектурных решений.",
    contactTelegram: "Телеграм Прямой Контакт",
    contactEmail: "Электронная Почта",
    contactGithub: "Репозитории на GitHub",
    contactInstagram: "Инстаграм",
    formName: "Ваше имя",
    formEmail: "Email адрес",
    formSubject: "Тема сообщения",
    formMessage: "Сообщение",
    btnSend: "Отправить сообщение"
  },
  tk: {
    navAbout: "Biz barada",
    navProjects: "Taslamalar",
    navSkills: "Tehnologiýalar",
    navContact: "Habarlaşmak",
    navCta: "Gürleşeliň",
    heroBadge: "Aşgabat, Türkmenistan • 2005-nji ýyl",
    heroSubtitle: "Men Abdyleziz — 2023-nji ýyldan bäri ýokary tizlikli web platformalary, ykjam programmalar we awtomatlaşdyrylan botlary döredýärin.",
    btnViewWork: "Taslamalary gör",
    metricStart: "Programmirleme ýyly",
    metricLive: "Işleýän uly taslama",
    metricLanguages: "Gürleýän dilleri",
    metricTechnologies: "Tehnologiýa we gural",
    aboutTag: "// 01 • BINÝAT WE HÜNÄR",
    aboutCard1Title: "Full-Stack Ussatlygy",
    aboutCard1Text: "2023-nji ýylda kämilleşmegi maksat edinip başladym. Meniň gündelik işim PostgreSQL we MySQL maglumatlar binýatlaryny gurmakdan, Laravel we Node.js arkaly güýçli API-lary döretmekden, hem-de React, Vue, Next.js we Nuxt bilen döwrebap interfeýsleri taýýarlamakdan ybaratdyr.",
    aboutCard1Sub: "Ykjam enjamlar üçin Flutter ulanyp, Android we iOS ulgamlarynda bir wagtda ýokary hilli programmalar döredýärin.",
    aboutCard2Title: "DevOps we Infradüzüm",
    aboutCard2Text: "Serwerleri awtomatlaşdyrmak, Git we Gitea ulgamlary, Docker we kämil Continuous Integration çözgütleri bilen içgin gyzyklanýaryn.",
    aboutCard3Title: "Botlar, ML we Maliýe Ulgamlary",
    aboutCard3Text: "MQL5 arkaly söwda robotlaryny, Python maglumat amallaryny, uly mümkinçilikli Telegram botlaryny we Machine Learning esaslaryny öwrenýärin.",
    projectsTag: "// 02 • IŞLEÝÄN TASLAMALAR",
    proj1Badge: "Onlaýn Söwda Platformasy",
    proj1Desc: "Türkmenistan üçin taýýarlanan giň gerimli söwda platformasy: dükanlar, restoranlar, awtoulag bazary, iş orunlary we bildirişler. 3 dilde (TK, RU, EN) we welaýat eltip bermek hyzmaty bilen doly üpjün edilen.",
    btnVisitProject: "Saýta gir",
    proj2Badge: "Elektronika & Dükan",
    proj2Desc: "Döwrebap elektronika we haryt dükany. Tiz gözleg, amatly filterler we dolandyryş paneli bilen üpjün edilen.",
    proj3Badge: "Awtoulag Portaly",
    proj3Desc: "Ýörite awtoulag satuwy, tehniki häsiýetnamalary we satyjylar bilen göni aragatnaşyk üçin döredilen platforma.",
    proj4Badge: "Awtomatlaşdyrylan Botlar",
    proj4Desc: "MQL5 we Python arkaly taýýarlanan awtomatiki söwda robotlary, grafikleri derňew etmek we Telegram arkaly habar beriş ulgamy.",
    btnVisitGithub: "GitHub-da gör",
    skillsTag: "// 03 • BAŞARNYKLAR",
    catBackend: "Backend & Maglumatlar Binýady",
    catFrontend: "Frontend Frameworklar",
    catMobile: "Ykjam Enjamlar (Mobile)",
    catDevops: "DevOps, Git & Serwerler",
    contactTag: "// 04 • HABARLAŞMAK",
    contactLead: "Täze web taslamalar, söwda botlary, ykjam programmalar ýa-da maglumatlar binýady boýunça hyzmatdaşlyga açyk.",
    contactTelegram: "Telegram Göni Baglanyşyk",
    contactEmail: "E-poçta Salgysy",
    contactGithub: "GitHub Salgysy",
    contactInstagram: "Instagram",
    formName: "Adyňyz",
    formEmail: "Email salgyňyz",
    formSubject: "Mowzuk",
    formMessage: "Hatyňyz",
    btnSend: "Haty ugrat"
  }
};

const flags = {
  en: 'fi-gb',
  ru: 'fi-ru',
  tk: 'fi-tm'
};

function setLanguage(lang) {
  localStorage.setItem('portfolio_lang', lang);
  const currentFlag = document.getElementById('currentFlag');
  const currentLangLabel = document.getElementById('currentLangLabel');
  
  if (currentFlag) currentFlag.className = `fi ${flags[lang]}`;
  if (currentLangLabel) currentLangLabel.textContent = lang.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const langMenu = document.getElementById('langMenu');
  if (langMenu) langMenu.classList.remove('open');
}

// Language Picker Dropdown Trigger
const langToggle = document.getElementById('langToggle');
const langMenu = document.getElementById('langMenu');
if (langToggle && langMenu) {
  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('open');
  });
  document.addEventListener('click', () => langMenu.classList.remove('open'));
}

// 5. MOBILE MENU
const burgerBtn = document.getElementById('burgerBtn');
const mobileDrawer = document.getElementById('mobileDrawer');

if (burgerBtn && mobileDrawer) {
  burgerBtn.addEventListener('click', () => {
    mobileDrawer.classList.toggle('active');
  });
}
function closeMenu() {
  if (mobileDrawer) mobileDrawer.classList.remove('active');
}

// 6. 3D CARD TILT EFFECT
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
});

// Initialize Language on Load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('portfolio_lang') || 'en';
  setLanguage(savedLang);
});