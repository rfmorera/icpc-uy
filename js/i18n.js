// ICPC Uruguay — bilingual content (ES/EN), auto-detected from the browser language

(function () {
  var STORAGE_KEY = 'icpc-lang';

  // Recaudacion. Cuando entra plata se toca SOLO esta linea: el porcentaje,
  // el ancho de la barra y los textos en ES/EN se derivan de aca.
  var RAISED = 0;
  var GOAL = 8000;

  var translations = {
    es: {
      'meta.title': 'ICPC Uruguay — Rumbo a una Final Mundial',
      'meta.description': 'ICPC Uruguay reúne a los mejores programadores competitivos del país. Conocé ICPC House, la iniciativa que prepara al primer equipo uruguayo para una Final Mundial de ICPC.',
      'og.title': 'ICPC Uruguay — Rumbo a una Final Mundial',
      'og.description': 'Conocé ICPC House, la casa que prepara al primer equipo uruguayo para una Final Mundial de ICPC.',

      'nav.inicio': 'Inicio',
      'nav.sobre': 'Sobre ICPC',
      'nav.house': 'ICPC House',
      'nav.resultados': 'Resultados',
      'nav.competidores': 'Competidores',
      'nav.patrocinadores': 'Patrocinadores',
      'nav.contacto': 'Contacto',
      'header.cta': 'Conocé ICPC House',
      'header.toggleAria': 'Abrir menú',

      'hero.eyebrow': 'Comunidad de programación competitiva del Uruguay',
      'hero.h1': 'Uruguay tiene con qué llegar a una <span class="accent">Final Mundial de ICPC</span>',
      'hero.lede': 'ICPC Uruguay nuclea a estudiantes y empresas que impulsan la programación competitiva en el país. Entrenamos, competimos en la Regional Latinoamericana y trabajamos para que un equipo uruguayo llegue, por primera vez, a la Final Mundial del International Collegiate Programming Contest.',
      'hero.btnPrimary': 'Descubrí ICPC House',
      'hero.btnOutline': 'Entrená con nosotros',

      'about.eyebrow': 'Sobre la competencia',
      'about.h2': '¿Qué es el ICPC?',
      'about.p1': 'El <strong>International Collegiate Programming Contest (ICPC)</strong> es la competencia de programación universitaria más antigua, grande y prestigiosa del mundo. Equipos de tres estudiantes, con una única computadora, tienen cinco horas para resolver la mayor cantidad posible de problemas algorítmicos: estructuras de datos, matemática, grafos y lógica pura bajo presión.',
      'about.path1.h4': 'Clasificatorio local',
      'about.path1.p': 'Torneos y entrenamientos universitarios para formar equipos.',
      'about.path2.h4': 'Regional Latinoamericana',
      'about.path2.p': 'Uruguay compite junto a Argentina y Paraguay en la sede Sudamérica Sur.',
      'about.path3.h4': 'Instancia continental',
      'about.path3.p': 'Los mejores equipos de la región avanzan a una instancia continental de ICPC.',
      'about.path4.h4': 'Final Mundial',
      'about.path4.p': 'El objetivo: un equipo uruguayo compitiendo entre los mejores del planeta.',

      'house.eyebrow': 'La iniciativa',
      'house.h2': 'Una casa para que Uruguay llegue a su primera Final Mundial',
      'house.p1': '<strong>ICPC House</strong> es una coder house: reunimos bajo un mismo techo a los programadores competitivos más destacados de Uruguay para que entrenen juntos, a tiempo completo, hasta el 7 de noviembre. Nada reemplaza las horas de práctica en equipo, la resolución conjunta de problemas y la convivencia con otros competidores de alto nivel — eso es exactamente lo que ICPC House busca crear.',
      'house.p2': 'El objetivo es concreto: llevar por primera vez a un equipo uruguayo a una <strong>Final Mundial de ICPC</strong>.',
      'house.plan.eyebrow': 'Cómo entrenamos',
      'house.plan.h3': 'Plan de entrenamiento',
      'house.plan.p': 'Entrenamos todos los días, combinando trabajo individual, práctica en equipo y competencia bajo presión real.',
      'house.scheduleHead': 'De lunes a domingo',
      'house.schedule.a1': 'Simulacros de competencias',
      'house.schedule.a2': 'Upsolving de problemas',
      'house.schedule.a3': 'Estudio de temas teóricos',
      'house.schedule.a4': 'Ejercicios de práctica',
      'house.schedule.a5': 'Debates de problemas',
      'house.driverP': '<strong>ICPC House</strong> nació de una idea de <strong>Antigravity Capital</strong>, que hoy acompaña a los mejores talentos de programación competitiva de Uruguay en su camino hacia una Final Mundial de ICPC.',
      'house.goalLabel': 'Objetivo de recaudación',
      'house.goalProgress': 'USD {raised} recaudados de la meta de USD {goal}',
      'house.goalPct': '{pct}%',
      'house.goalP': 'Para cubrir los gastos de alquiler de la casa durante todo el período de entrenamiento.',

      'results.eyebrow': 'Trayectoria',
      'results.h2': 'Uruguay en la Regional Latinoamericana',
      'results.p': 'La programación competitiva viene creciendo en Uruguay de la mano de sus universidades. Cada año, equipos uruguayos compiten en la Regional Latinoamericana de ICPC, sumando experiencia y buenos resultados que marcan el camino hacia una clasificación mundial.',
      'results.item1.p': 'Un equipo de la Universidad ORT Uruguay se destacó en la Regional Latinoamericana de ICPC, terminando entre los primeros puestos del ranking regional frente a cientos de equipos de todo el continente.',
      'results.item1.badge': 'Mejor resultado histórico reciente',
      'results.item2.p': 'ICPC House arranca su primera edición: entrenamiento en convivencia para varios equipos uruguayos con la mira puesta en la Regional Latinoamericana y, más adelante, en una Final Mundial.',
      'results.item2.badge': 'En marcha',
      'results.competitorsCta': 'Conocé a nuestros competidores',

      'sponsors.eyebrow': 'Quiénes lo hacen posible',
      'sponsors.h2': 'Patrocinadores e impulsores',
      'sponsors.p': 'ICPC Uruguay y ICPC House existen gracias al apoyo de empresas y organizaciones comprometidas con el talento tecnológico del país.',
      'sponsors.mainH4': 'Impulsor principal de ICPC House',
      'sponsors.mainP': 'Antigravity Capital respalda la casa de entrenamiento que preparará al primer equipo uruguayo rumbo a una Final Mundial de ICPC.',
      'sponsors.slot': 'Tu empresa acá',
      'sponsors.btn': 'Quiero ser sponsor',

      'contact.eyebrow': 'Entrená con nosotros',
      'contact.h2': 'Hablemos',
      'contact.p': '¿Sos estudiante y querés venir a entrenar a ICPC House? ¿Tu empresa quiere sumarse como sponsor? ¿Sos docente o referente y querés colaborar con la comunidad? Escribinos.',

      'competitors.eyebrow': 'Nuestro talento',
      'competitors.h1': 'Conocé a nuestros competidores',
      'competitors.lede': 'Detrás de ICPC Uruguay hay estudiantes y profesionales que ya compiten en el circuito universitario de programación más exigente de la región. A continuación, los equipos y perfiles que hoy sostienen el proyecto: su formación, su trayectoria en ICPC y dónde seguir su trabajo.',
      'competitors.teamPlaceholder': 'Nombre del equipo — a confirmar',
      'competitors.memberPlaceholder': 'Integrante por confirmar',

      'competitors.teamA.h3': 'Clasificado dos veces a la PDA, la Final Continental de ICPC',
      'competitors.teamA.tag': 'Universidad ORT Uruguay',
      'competitors.bonora.role': 'Software Engineer en Frida HR · Docente, Universidad ORT Uruguay',
      'competitors.bonora.bio': 'Combina experiencia profesional y académica con una trayectoria destacada en ICPC Uruguay: forma parte del equipo de ORT que clasificó dos veces a la PDA (Programadores de América), la Final Continental de América Latina. Su perfil representa el tipo de talento que puede competir al máximo nivel mientras aporta a la formación de nuevas generaciones.',
      'competitors.duarte.role': 'Developer en STeP · Estudiante, Universidad ORT Uruguay',
      'competitors.duarte.bio': 'Competidor de la PDA (Programadores de América), la Final Continental de ICPC Latinoamérica, e integrante del equipo de ORT que logró clasificar dos veces a esta instancia. Su recorrido muestra la proyección de estudiantes que, desde Uruguay, ya compiten en el principal circuito universitario de programación de la región.',
      'competitors.zeballos.role': 'Desarrollador de software en Zureo · Profesor · Ing. de Sistemas, ORT',
      'competitors.zeballos.bio': 'Como competidor de ICPC, integra uno de los equipos uruguayos que ha alcanzado en dos ocasiones la PDA (Programadores de América), la Final Continental de América Latina, reflejando un nivel sostenido de preparación algorítmica y resolución colaborativa de problemas.',

      'competitors.teamOverflow.h3': 'Tercer año consecutivo en el Taller de Programación Competitiva de ORT',
      'competitors.teamOverflow.tag': 'Universidad ORT Uruguay',
      'competitors.franco.role': 'Desarrollador · Estudiante de Ing. de Software · Emprendedor',
      'competitors.franco.bio': 'Participa activamente en ICPC y en el entorno de programación competitiva de ORT. Junto a su equipo, este es su tercer año consecutivo en el Taller de Programación Competitiva de la universidad, un recorrido que refleja crecimiento sostenido y solidez técnica.',
      'competitors.luis.role': 'Software Developer en Tata Consultancy Services · Estudiante, ORT',
      'competitors.luis.bio': 'Competidor de ICPC y parte de la nueva generación de programadores competitivos de ORT. Junto a su equipo, cursa su tercer año consecutivo en el Taller de Programación Competitiva de la universidad, sumando experiencia y consistencia año a año.',
      'competitors.thiago.role': 'Estudiante, Universidad ORT Uruguay',
      'competitors.thiago.bio': 'Completa el equipo Overflowmasters, que este año cursa por tercera vez consecutiva el Taller de Programación Competitiva de ORT, sumando su parte al crecimiento y la solidez técnica del grupo.',

      'competitors.teamAlgo.h3': 'Podio en el Concurso Interno de Programación de ORT',
      'competitors.teamAlgo.tag': 'Universidad ORT Uruguay',
      'competitors.tomasetti.role': 'Estudiante, Universidad ORT Uruguay',
      'competitors.tomasetti.bio': 'Competidor activo de programación competitiva. Participó en instancias de entrenamiento regional, incluyendo el campamento de la Asociación Argentina de Programación Competitiva, y obtuvo resultados de 3.º y 4.º lugar en el concurso ORT junto a su equipo. Representa una cantera que ya se está conectando con el ecosistema competitivo latinoamericano.',
      'competitors.canedo.role': 'Estudiante, Universidad ORT Uruguay',
      'competitors.canedo.bio': 'Participante de ICPC Uruguay. Forma parte, junto a su equipo, de los desempeños de 3.º y 4.º lugar en el concurso ORT, un semillero clave para ampliar la representación uruguaya en las competencias regionales y, a futuro, mundiales.',
      'competitors.zorron.role': 'Estudiante, Universidad ORT Uruguay',
      'competitors.zorron.bio': 'Competidor de ICPC. Su equipo alcanzó resultados de 3.º y 4.º lugar en el concurso ORT, demostrando una base sólida en resolución algorítmica y trabajo bajo presión de competencia.',

      'competitors.teamD.h3': 'Ampliando la representación nacional',
      'competitors.teamD.tag': 'Universidad Católica del Uruguay',
      'competitors.lavecchia.role': 'Estudiante de Ciencias de la Computación, Universidad Católica del Uruguay · Finalista Regional Sudamérica Sur ICPC 2025',
      'competitors.lavecchia.bio': 'Se está formando como desarrollador de software, con experiencia en tecnologías .NET, React y SQL. Su incorporación es relevante para que ICPC Uruguay trascienda una única institución y se consolide como un proyecto nacional que reúna y eleve el talento competitivo de todas las universidades.',
      'competitors.leandro.role': 'Software Engineer · Estudiante, Universidad Católica del Uruguay · Finalista Regional Sudamérica Sur ICPC 2025',
      'competitors.leandro.bio': 'Software Engineer con experiencia en machine learning, docencia universitaria y desarrollo de software. Empezó a programar a los 13 años a través del desarrollo de videojuegos y luego se expandió a sistemas web e inteligencia artificial; también construyó y escaló un canal de YouTube a más de 80.000 suscriptores mediante experimentación basada en datos y estrategias de crecimiento. Hoy se enfoca en programación competitiva (ICPC) y resolución algorítmica avanzada, con fuerte interés en entornos de ingeniería exigentes y de alto rendimiento. Comenzó sus estudios en 2024.',
      'competitors.guzman.role': 'Estudiante, Universidad Católica del Uruguay (desde 2024)',
      'competitors.guzman.bio': 'Comenzó sus estudios en 2024 y se prepara para disputar su primera Regional de ICPC, sumándose al crecimiento de la programación competitiva en la Universidad Católica del Uruguay.',

      'competitors.coachCta': 'Conocé a nuestro coach',
      'competitors.coach.tag': 'Campeón Nacional de ICPC Uruguay (coach) 2024 y 2025',
      'competitors.coach.h3': 'El coach detrás del proyecto',
      'competitors.rafael.role': 'Tech Lead · Senior AI Engineer en Canals · Profesor Adjunto, Universidad ORT Uruguay',
      'competitors.rafael.bio': 'Profesor titular de programación competitiva en la Universidad ORT Uruguay desde 2023: bajo su guía, el equipo de ORT clasificó a la PDA (Programadores de América) en 2025 y 2026, entre los 40 mejores de Latinoamérica. Como coach, llevó a Uruguay a ser Campeón Nacional de ICPC en 2024 y 2025. Ingeniero de software senior con foco en IA y NLP, con pasos por Mercado Libre y Canals, y medallista internacional en programación competitiva (bronce en la Regional del Caribe de la ACM-ICPC 2016, entre otros reconocimientos).',

      'footer.note': 'Comunidad de programación competitiva del Uruguay. No es un sitio oficial de ICPC Global.'
    },

    en: {
      'meta.title': 'ICPC Uruguay — On the Road to a World Finals',
      'meta.description': 'ICPC Uruguay brings together the country’s top competitive programmers. Meet ICPC House, the initiative preparing the first Uruguayan team for an ICPC World Finals.',
      'og.title': 'ICPC Uruguay — On the Road to a World Finals',
      'og.description': 'Meet ICPC House, the house preparing the first Uruguayan team for an ICPC World Finals.',

      'nav.inicio': 'Home',
      'nav.sobre': 'About ICPC',
      'nav.house': 'ICPC House',
      'nav.resultados': 'Results',
      'nav.competidores': 'Competitors',
      'nav.patrocinadores': 'Sponsors',
      'nav.contacto': 'Contact',
      'header.cta': 'Meet ICPC House',
      'header.toggleAria': 'Open menu',

      'hero.eyebrow': 'Uruguay’s competitive programming community',
      'hero.h1': 'Uruguay has what it takes to reach an <span class="accent">ICPC World Finals</span>',
      'hero.lede': 'ICPC Uruguay brings together students and companies driving competitive programming in the country. We train, compete in the Latin American Regional, and work to get a Uruguayan team to the International Collegiate Programming Contest World Finals for the first time.',
      'hero.btnPrimary': 'Discover ICPC House',
      'hero.btnOutline': 'Train with us',

      'about.eyebrow': 'About the contest',
      'about.h2': 'What is ICPC?',
      'about.p1': 'The <strong>International Collegiate Programming Contest (ICPC)</strong> is the oldest, largest, and most prestigious university programming competition in the world. Teams of three students, with a single computer, have five hours to solve as many algorithmic problems as possible: data structures, math, graphs, and pure logic under pressure.',
      'about.path1.h4': 'Local qualifier',
      'about.path1.p': 'University tournaments and training sessions to form teams.',
      'about.path2.h4': 'Latin American Regional',
      'about.path2.p': 'Uruguay competes alongside Argentina and Paraguay at the South America South site.',
      'about.path3.h4': 'Continental stage',
      'about.path3.p': 'The region’s best teams advance to an ICPC continental stage.',
      'about.path4.h4': 'World Finals',
      'about.path4.p': 'The goal: a Uruguayan team competing among the best in the world.',

      'house.eyebrow': 'The initiative',
      'house.h2': 'A house for Uruguay to reach its first World Finals',
      'house.p1': '<strong>ICPC House</strong> is a coder house: we bring Uruguay’s top competitive programmers together under one roof to train full-time through November 7th. Nothing replaces hours of team practice, solving problems together, and living alongside other high-level competitors — that’s exactly what ICPC House aims to create.',
      'house.p2': 'The goal is concrete: bring a Uruguayan team to an <strong>ICPC World Finals</strong> for the first time.',
      'house.plan.eyebrow': 'How we train',
      'house.plan.h3': 'Training plan',
      'house.plan.p': 'We train every day, combining individual work, team practice, and competing under real pressure.',
      'house.scheduleHead': 'Monday to Sunday',
      'house.schedule.a1': 'Contest simulations',
      'house.schedule.a2': 'Problem upsolving',
      'house.schedule.a3': 'Theory study',
      'house.schedule.a4': 'Practice exercises',
      'house.schedule.a5': 'Problem discussions',
      'house.driverP': '<strong>ICPC House</strong> grew out of an idea from <strong>Antigravity Capital</strong>, which now backs Uruguay’s top competitive programming talent on their way to an ICPC World Finals.',
      'house.goalLabel': 'Fundraising goal',
      'house.goalProgress': 'USD {raised} raised of the USD {goal} goal',
      'house.goalPct': '{pct}%',
      'house.goalP': 'To cover the house’s rental costs for the entire training period.',

      'results.eyebrow': 'Track record',
      'results.h2': 'Uruguay at the Latin American Regional',
      'results.p': 'Competitive programming has been growing in Uruguay alongside its universities. Every year, Uruguayan teams compete at the ICPC Latin American Regional, gaining experience and strong results that point the way toward qualifying for a World Finals.',
      'results.item1.p': 'A team from Universidad ORT Uruguay stood out at the ICPC Latin American Regional, finishing among the top spots in the regional ranking against hundreds of teams from across the continent.',
      'results.item1.badge': 'Best recent result',
      'results.item2.p': 'ICPC House kicks off its first edition: live-in training for several Uruguayan teams with sights set on the Latin American Regional and, later, a World Finals.',
      'results.item2.badge': 'Underway',
      'results.competitorsCta': 'Meet our competitors',

      'sponsors.eyebrow': 'Who makes it possible',
      'sponsors.h2': 'Sponsors and backers',
      'sponsors.p': 'ICPC Uruguay and ICPC House exist thanks to the support of companies and organizations committed to the country’s tech talent.',
      'sponsors.mainH4': 'Lead backer of ICPC House',
      'sponsors.mainP': 'Antigravity Capital backs the training house that will prepare the first Uruguayan team for an ICPC World Finals.',
      'sponsors.slot': 'Your company here',
      'sponsors.btn': 'I want to sponsor',

      'contact.eyebrow': 'Train with us',
      'contact.h2': 'Let’s talk',
      'contact.p': 'Are you a student who wants to come train at ICPC House? Does your company want to join as a sponsor? Are you a teacher or community leader who wants to collaborate? Write to us.',

      'competitors.eyebrow': 'Our talent',
      'competitors.h1': 'Meet our competitors',
      'competitors.lede': 'Behind ICPC Uruguay are students and professionals already competing in the region’s most demanding university programming circuit. Below are the teams and profiles behind the project today: their background, their ICPC track record, and where to follow their work.',
      'competitors.teamPlaceholder': 'Team name — to be confirmed',
      'competitors.memberPlaceholder': 'Member to be confirmed',

      'competitors.teamA.h3': 'Twice qualified for the PDA, the ICPC Continental Final',
      'competitors.teamA.tag': 'Universidad ORT Uruguay',
      'competitors.bonora.role': 'Software Engineer at Frida HR · Lecturer, Universidad ORT Uruguay',
      'competitors.bonora.bio': 'He combines professional and academic experience with a standout track record in ICPC Uruguay: he’s part of the ORT team that qualified twice for the PDA (Programadores de América), the Latin American Continental Final. His profile is the kind of talent that can compete at the highest level while helping train the next generation.',
      'competitors.duarte.role': 'Developer at STeP · Student, Universidad ORT Uruguay',
      'competitors.duarte.bio': 'A PDA (Programadores de América) competitor — the ICPC Latin American Continental Final — and member of the ORT team that has qualified for it twice. His path shows the potential of students who, from Uruguay, already compete in the region’s top university programming circuit.',
      'competitors.zeballos.role': 'Software Developer at Zureo · Lecturer · Systems Engineering student, ORT',
      'competitors.zeballos.bio': 'As an ICPC competitor, he’s part of one of the Uruguayan teams that has reached the PDA (Programadores de América) — the Latin American Continental Final — twice, reflecting a sustained level of algorithmic preparation and collaborative problem-solving.',

      'competitors.teamOverflow.h3': 'Third consecutive year in ORT’s Competitive Programming Workshop',
      'competitors.teamOverflow.tag': 'Universidad ORT Uruguay',
      'competitors.franco.role': 'Developer · Software Engineering student · Entrepreneur',
      'competitors.franco.bio': 'He’s actively involved in ICPC and ORT’s competitive programming community. Together with his team, this is their third consecutive year in the university’s Competitive Programming Workshop — a track record that reflects steady growth and technical solidity.',
      'competitors.luis.role': 'Software Developer at Tata Consultancy Services · Student, ORT',
      'competitors.luis.bio': 'An ICPC competitor and part of ORT’s new generation of competitive programmers. Together with his team, he’s in his third consecutive year in the university’s Competitive Programming Workshop, building experience and consistency year after year.',
      'competitors.thiago.role': 'Student, Universidad ORT Uruguay',
      'competitors.thiago.bio': 'He completes the Overflowmasters team, now in its third consecutive year in ORT’s Competitive Programming Workshop, adding his part to the group’s growth and technical solidity.',

      'competitors.teamAlgo.h3': 'Podium finish at ORT’s Internal Programming Contest',
      'competitors.teamAlgo.tag': 'Universidad ORT Uruguay',
      'competitors.tomasetti.role': 'Student, Universidad ORT Uruguay',
      'competitors.tomasetti.bio': 'An active competitive programmer. He has taken part in regional training instances, including the Argentine Competitive Programming Association’s training camp, and placed 3rd and 4th with his team at the ORT contest. He represents a pipeline of talent already connecting with the Latin American competitive ecosystem.',
      'competitors.canedo.role': 'Student, Universidad ORT Uruguay',
      'competitors.canedo.bio': 'An ICPC Uruguay participant. Together with his team, he’s part of the 3rd- and 4th-place finishes at the ORT contest — a key pipeline for expanding Uruguay’s presence in regional, and eventually world, competitions.',
      'competitors.zorron.role': 'Student, Universidad ORT Uruguay',
      'competitors.zorron.bio': 'An ICPC competitor. His team placed 3rd and 4th at the ORT contest, demonstrating a solid foundation in algorithmic problem-solving and performing under competitive pressure.',

      'competitors.teamD.h3': 'Expanding national representation',
      'competitors.teamD.tag': 'Universidad Católica del Uruguay',
      'competitors.lavecchia.role': 'Computer Science student, Universidad Católica del Uruguay · ICPC South America South Regional Finalist 2025',
      'competitors.lavecchia.bio': 'He’s training as a software developer, with experience in .NET, React, and SQL. His involvement matters for ICPC Uruguay to grow beyond a single institution and become a national project that brings together and elevates competitive talent from every university.',
      'competitors.leandro.role': 'Software Engineer · Student, Universidad Católica del Uruguay · ICPC South America South Regional Finalist 2025',
      'competitors.leandro.bio': 'A Software Engineer with experience in machine learning, university-level teaching, and software development. He started programming at 13 through game development and later expanded into web systems and AI, and also built and scaled a YouTube channel to over 80,000 subscribers through data-driven experimentation and growth strategy. He’s now focused on competitive programming (ICPC) and advanced algorithmic problem-solving, with a strong interest in high-performance, rigorous engineering environments. He began his studies in 2024.',
      'competitors.guzman.role': 'Student, Universidad Católica del Uruguay (since 2024)',
      'competitors.guzman.bio': 'He began his studies in 2024 and is preparing to compete in his first ICPC Regional, joining the growth of competitive programming at Universidad Católica del Uruguay.',

      'competitors.coachCta': 'Meet our coach',
      'competitors.coach.tag': 'Uruguay ICPC National Champion (coach) 2024 and 2025',
      'competitors.coach.h3': 'The coach behind the project',
      'competitors.rafael.role': 'Tech Lead · Senior AI Engineer at Canals · Adjunct Professor, Universidad ORT Uruguay',
      'competitors.rafael.bio': 'He’s been the lead professor of competitive programming at Universidad ORT Uruguay since 2023: under his guidance, the ORT team qualified for the PDA (Programadores de América) in 2025 and 2026, ranking among the top 40 in Latin America. As a coach, he led Uruguay to the ICPC National Championship in 2024 and 2025. A senior software engineer focused on AI and NLP, with experience at Mercado Libre and Canals, and an international medalist in competitive programming himself — bronze at the ACM-ICPC Caribbean Regional in 2016, among other honors.',

      'footer.note': 'Uruguay’s competitive programming community. Not an official ICPC Global site.'
    }
  };

  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;

    var browserLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || 'en'];

    for (var i = 0; i < browserLangs.length; i++) {
      if (/^es/i.test(browserLangs[i])) return 'es';
    }
    return 'en';
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations.en;

    var nf = new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-UY');
    var pct = GOAL > 0 ? Math.max(0, Math.min(100, Math.round(RAISED / GOAL * 100))) : 0;
    function fill(value) {
      return value
        .replace('{raised}', nf.format(RAISED))
        .replace('{goal}', nf.format(GOAL))
        .replace('{pct}', pct);
    }

    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es-UY');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = fill(dict[key]);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = fill(dict[key]);
    });

    document.querySelectorAll('[data-i18n-attr-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-attr-aria-label');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    var titleEl = document.getElementById('doc-title');
    if (titleEl && dict['meta.title']) {
      titleEl.textContent = dict['meta.title'];
      document.title = dict['meta.title'];
    }
    var descEl = document.getElementById('meta-description');
    if (descEl && dict['meta.description']) descEl.setAttribute('content', dict['meta.description']);
    var ogTitleEl = document.getElementById('meta-og-title');
    if (ogTitleEl && dict['og.title']) ogTitleEl.setAttribute('content', dict['og.title']);
    var ogDescEl = document.getElementById('meta-og-description');
    if (ogDescEl && dict['og.description']) ogDescEl.setAttribute('content', dict['og.description']);

    var bar = document.getElementById('funding-bar');
    if (bar) {
      bar.style.width = pct + '%';
      bar.parentNode.setAttribute('aria-valuenow', pct);
    }

    document.querySelectorAll('[data-lang-option]').forEach(function (el) {
      el.classList.toggle('is-active', el.getAttribute('data-lang-option') === lang);
    });

    var toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.setAttribute('data-active', lang);

    document.documentElement.setAttribute('data-lang', lang);
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(detectLang());

    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'es';
        setLang(current === 'en' ? 'es' : 'en');
      });
    }
  });
})();
