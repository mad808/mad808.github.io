document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    // ========================================================================= //
    // MULTI-LANGUAGE TRANSLATION DICTIONARY
    // ========================================================================= //
    const translations = {
        en: {
            navHome: "Home", navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
            heroEyebrow: "// Full-Stack Developer & Mobile Engineer",
            heroTitle: "Abdyleziz Sopyyev",
            heroSubtitle: "I'm a",
            heroQuote: "I design and build high-performance web applications and cross-platform mobile apps that solve real-world problems.",
            heroViewWork: "View My Work →",
            heroGetInTouch: "Get in Touch",
            terminalRole: "Full-Stack Developer",
            terminalLang1: "Turkmen",
            terminalLang2: "Russian",
            terminalLang3: "English",
            aboutTitle: "01 / About",
            aboutHeading: "Who I am",
            aboutParagraph1: "I'm a 20-year-old full-stack developer based in <strong>Ashgabat, Turkmenistan</strong>. My passion lies in engineering robust backend architectures and creating elegant, intuitive user interfaces.",
            aboutParagraph2: "I specialize in <strong>Laravel + PHP</strong> for scalable web services and <strong>Flutter</strong> for modern, fluid mobile experiences. I thrive on converting complex product demands into clean, maintainable, and high-quality code.",
            statAppLabel: "Production App",
            statLangLabel: "Languages Spoken",
            statAgeLabel: "Years Old",
            skillsTitle: "02 / Skills",
            skillsHeading: "Tech Stack",
            projectsTitle: "03 / Projects",
            projectsHeading: "What I've Built",
            projectTagLive: "🚀 Live Production · 2025–2026",
            projectTitleOM: "Online Market",
            projectDescOM: "A full e-commerce & marketplace platform built for Turkmenistan. Supports shops, restaurants, service providers, vacancies, second-hand listings, and car sales. Complete with multi-language capabilities (Turkmen, Russian, English), localized regional logistics, live chat, and a robust admin control panel.",
            btnLiveSite: "Live Site ↗",
            btnGitHub: "GitHub →",
            projectTagOther: "🔒 Secure System · 2026",
            projectTitleGD: "Gov Doc Management",
            projectDescGD: "A secure, enterprise-grade Government Document Management & Internal Messaging System. Designed and built with Laravel to guarantee role-based access control, cryptographic document tracking, and secure departmental communications.",
            comingSoonText: "More projects coming soon — currently working on new ideas.",
            seeGitHub: "See GitHub →",
            contactTitle: "04 / Contact",
            contactHeading: "Let's talk",
            contactDescription: "Open to freelance projects, collaborations, or just a good tech conversation. Based in Ashgabat but working with clients globally.",
            contactEmail: "Email",
            contactTelegram: "Telegram",
            contactWhatsApp: "WhatsApp",
            contactGitHub: "GitHub",
            formName: "Name",
            formNamePlaceholder: "Your name",
            formEmail: "Email",
            formEmailPlaceholder: "your@email.com",
            formSubject: "Subject",
            formSubjectPlaceholder: "What's this about?",
            formMessage: "Message",
            formMessagePlaceholder: "Tell me about your project or idea...",
            formButton: "Send Message →",
            footerCopyright: "© 2026 Abdyleziz Sopyyev · Ashgabat, Turkmenistan"
        },
        ru: {
            navHome: "Главная", navAbout: "Обо мне", navSkills: "Навыки", navProjects: "Проекты", navContact: "Контакты",
            heroEyebrow: "// Full-Stack Разработчик & Мобильный Инженер",
            heroTitle: "Абдулезиз Сопыев",
            heroSubtitle: "Я ",
            heroQuote: "Проектирую и создаю высокопроизводительные веб-приложения и кроссплатформенные мобильные приложения для решения реальных задач.",
            heroViewWork: "Мои работы →",
            heroGetInTouch: "Связаться",
            terminalRole: "Full-Stack Разработчик",
            terminalLang1: "Туркменский",
            terminalLang2: "Русский",
            terminalLang3: "Английский",
            aboutTitle: "01 / Обо мне",
            aboutHeading: "Кто я такой",
            aboutParagraph1: "Я 20-летний full-stack разработчик из <strong>Ашхабада, Туркменистан</strong>. Моя страсть — проектирование надежных серверных архитектур и создание элегантных, интуитивно понятных интерфейсов.",
            aboutParagraph2: "Специализируюсь на связке <strong>Laravel + PHP</strong> для масштабируемых веб-сервисов и <strong>Flutter</strong> для современных, плавных мобильных приложений. Мне нравится превращать сложные продуктовые требования в чистый, поддерживаемый и качественный код.",
            statAppLabel: "Рабочий проект",
            statLangLabel: "Языка общения",
            statAgeLabel: "Лет",
            skillsTitle: "02 / Технологии",
            skillsHeading: "Мой стек",
            projectsTitle: "03 / Работы",
            projectsHeading: "Что я создал",
            projectTagLive: "🚀 Работает в продакшене · 2025–2026",
            projectTitleOM: "Online Market",
            projectDescOM: "Полномасштабная платформа электронной коммерции и маркетплейса, разработанная для Туркменистана. Поддерживает магазины, рестораны, поставщиков услуг, вакансии, объявления о продаже подержанных вещей и автомобилей. Включает мультиязычность (туркменский, русский, английский), локальную региональную логистику, обмен сообщениями в реальном времени и продвинутую панель администратора.",
            btnLiveSite: "Перейти на сайт ↗",
            btnGitHub: "GitHub →",
            projectTagOther: "🔒 Безопасная система · 2026",
            projectTitleGD: "Gov Doc Management",
            projectDescGD: "Безопасная система управления государственными документами корпоративного уровня и система внутреннего обмена сообщениями. Спроектирована и построена на Laravel для обеспечения ролевого доступа, криптографического отслеживания документов и безопасных ведомственных коммуникаций.",
            comingSoonText: "Скоро появятся новые проекты — сейчас работаю над интересными идеями.",
            seeGitHub: "Смотреть GitHub →",
            contactTitle: "04 / Контакты",
            contactHeading: "Давайте создадим что-то вместе",
            contactDescription: "Открыт для фриланса, совместных проектов или просто профессионального общения. Нахожусь в Ашхабаде, доступен для удаленной работы по всему миру.",
            contactEmail: "Эл. почта",
            contactTelegram: "Telegram",
            contactWhatsApp: "WhatsApp",
            contactGitHub: "GitHub",
            formName: "Имя",
            formNamePlaceholder: "Ваше имя",
            formEmail: "Эл. почта",
            formEmailPlaceholder: "your@email.com",
            formSubject: "Тема",
            formSubjectPlaceholder: "О чем ваше сообщение?",
            formMessage: "Сообщение",
            formMessagePlaceholder: "Расскажите о вашем проекте или идее...",
            formButton: "Отправить сообщение →",
            footerCopyright: "© 2026 Абдулезиз Сопыев · Ашхабад, Туркменистан"
        },
        tk: {
            navHome: "Baş sahypa", navAbout: "Hakkymda", navSkills: "Başarnyklar", navProjects: "Taslamalar", navContact: "Habarlaşmak",
            heroEyebrow: "// Full-Stack Programmist & Mobil Inžener",
            heroTitle: "Abdyleziz Sopyýew",
            heroSubtitle: "Men ",
            heroQuote: "Adamlaryň gündelik durmuşyny ýeňilleşdirjek we kynçylyklary çözjek ýokary hilli web programmalary we mobil goşundylary taslaýaryn we döredýärin.",
            heroViewWork: "Işlerimi gör →",
            heroGetInTouch: "Habarlaşmak",
            terminalRole: "Full-Stack Programmist",
            terminalLang1: "Türkmen",
            terminalLang2: "Rus",
            terminalLang3: "Iňlis",
            aboutTitle: "01 / Hakkymda",
            aboutHeading: "Men barada",
            aboutParagraph1: "Men <strong>Aşgabat, Türkmenistan</strong> şäherinden 20 ýaşyndaky full-stack programmist. Meniň esasy gyzyklanmam güýçli backend ulgamlaryny gurmak we owadan, ulanmaga aňsat interfeýsleri döretmekdir.",
            aboutParagraph2: "Scalable web hyzmatlary üçin <strong>Laravel + PHP</strong> we döwrebap, çalt mobil goшundylar üçin <strong>Flutter</strong> ulanmakda ýöriteleşýärin. Çylşyrymly taslamalary arassa, goldap boljak we ýokary hilli koda öwürmekden lezzet alýaryn.",
            statAppLabel: "Işleýän Saýt",
            statLangLabel: "Gepleşýän Dilim",
            statAgeLabel: "Ýaşym",
            skillsTitle: "02 / Başarnyklar",
            skillsHeading: "Ulanýan Tehnologiýalarym",
            projectsTitle: "03 / Taslamalar",
            projectsHeading: "Guran Taslamalarym",
            projectTagLive: "🚀 Işleýän Saýt · 2025–2026",
            projectTitleOM: "Online Market",
            projectDescOM: "Türkmenistan üçin ýörite gurlan doly e-commerce we söwda platformasy. Dükanlar, restoranlar, hyzmat ediş nokatlary, iş orunlary, köne zatlaryň bildirişleri we ulag satuwy bölümlerini öz içine alýar. Üç dilde (Türkmen, Rus, Iňlis) goldawy, welaýat we sebit saýlama mümkinçiligi, real-time çat we uly admin paneli bar.",
            btnLiveSite: "Saýta gir ↗",
            btnGitHub: "GitHub →",
            projectTagOther: "🔒 Howpsuz Ulgam · 2026",
            projectTitleGD: "Gov Doc Management",
            projectDescGD: "Döwlet edaralary üçin ýöriteleşdirilen resminama dolanyşygy we içerki hat-habar alyşmak ulgamy. Ulgamdaky rollara görä rugsady dolandyrmak, resminamalary ygtybarly yzarlamak we howpsuz aragatnaşyk guramak üçin Laravel arkaly işlenip düzüldi.",
            comingSoonText: "Täze taslamalar ýakyn wagtda goşular — häzirki wagtda täze taslamalaryň üstünde işleýärin.",
            seeGitHub: "GitHub-a seret →",
            contactTitle: "04 / Habarlaşmak",
            contactHeading: "Geliň, bilelikde bir zat guralyň",
            contactDescription: "Frilans işleri, hyzmatdaşlyk taslamalary ýa-da umumy tehnologiýa baradaky söhbetdeşlikler üçin açyk. Aşgabatda ýerleşýärin, ýöne dünýäniň islendik ýeri bilen uzakdan işleşip bilýärin.",
            contactEmail: "E-poçta",
            contactTelegram: "Telegram",
            contactWhatsApp: "WhatsApp",
            contactGitHub: "GitHub",
            formName: "Adyňyz",
            formNamePlaceholder: "Siziň adyňyz",
            formEmail: "E-poçta",
            formEmailPlaceholder: "your@email.com",
            formSubject: "Tema",
            formSubjectPlaceholder: "Bu näme barada?",
            formMessage: "Hat",
            formMessagePlaceholder: "Maňa taslamaňyz ýa-da pikiriňiz barada aýdyp beriň...",
            formButton: "Hat ugrat →",
            footerCopyright: "© 2026 Abdyleziz Sopyýew · Aşgabat, Türkmenistan"
        }
    };

    const typedStrings = {
        en: ['Full-Stack Developer', 'PHP & Laravel Expert', 'Flutter Engineer', 'Problem Solver'],
        ru: ['Full-Stack Разработчик', 'Эксперт PHP & Laravel', 'Flutter Инженер', 'Решатель Проблем'],
        tk: ['Full-Stack Programmist', 'PHP we Laravel Hünärmeni', 'Flutter Inženeri', 'Mesele çözüji']
    };

    let typedInstance;

    // Translation Execution
    window.setLanguage = (lang) => {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const keys = el.getAttribute('data-translate').split(',');
            const mainKey = keys[0];
            const attrKey = keys[1];

            if (translations[lang][mainKey]) {
                if (attrKey === 'placeholder') {
                    el.placeholder = translations[lang][mainKey];
                } else {
                    el.innerHTML = translations[lang][mainKey];
                }
            }
        });

        // Re-instantiate Typed dynamic typing
        if (typedInstance) {
            typedInstance.destroy();
        }
        const typedEl = document.querySelector('.typed');
        if (typedEl) {
            typedInstance = new Typed('.typed', {
                strings: typedStrings[lang],
                loop: true,
                typeSpeed: 70,
                backSpeed: 50,
                backDelay: 2000
            });
        }

        // Dropdown button update
        const langSwitcher = document.querySelector('.lang-switcher .dropdown-toggle');
        const selectedLangData = {
            en: { flag: 'gb', text: 'EN' },
            ru: { flag: 'ru', text: 'RU' },
            tk: { flag: 'tm', text: 'TK' }
        };
        if (langSwitcher && selectedLangData[lang]) {
            langSwitcher.innerHTML = `<span class="fi fi-${selectedLangData[lang].flag}"></span> ${selectedLangData[lang].text}`;
        }

        localStorage.setItem('language', lang);
    };

    // ========================================================================= //
    // LIFECYCLE, SCROLLS & OBSERVERS
    // ========================================================================= //

    // Hide Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        });
    }

    // Scroll Navbar Highlight & Background
    const nav = document.getElementById('nav');
    const handleScroll = () => {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // AOS Initialization
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true
    });

    // Start Translator on LocalStorage selection
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    // ========================================================================= //
    // PARTICLES CANVAS BACKGROUND
    // ========================================================================= //
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 45, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00e5a0" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.25, "random": true },
                "size": { "value": 2.5, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 140,
                    "color": "#0066ff",
                    "opacity": 0.15,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.2,
                    "direction": "none",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": false }
                },
                "modes": {
                    "grab": { "distance": 150, "line_linked": { "opacity": 0.35 } }
                }
            },
            "retina_detect": true
        });
    }
});