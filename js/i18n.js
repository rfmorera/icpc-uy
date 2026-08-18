// ICPC Uruguay — bilingual content (ES/EN), auto-detected from the browser language

(function () {
  var STORAGE_KEY = 'icpc-lang';

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
      'nav.patrocinadores': 'Patrocinadores',
      'nav.contacto': 'Contacto',
      'header.cta': 'Conocé ICPC House',
      'header.toggleAria': 'Abrir menú',

      'hero.eyebrow': 'Comunidad de programación competitiva del Uruguay',
      'hero.h1': 'Uruguay tiene con qué llegar a una <span class="accent">Final Mundial de ICPC</span>',
      'hero.lede': 'ICPC Uruguay nuclea a estudiantes, universidades y empresas que impulsan la programación competitiva en el país. Entrenamos, competimos en la Regional Latinoamericana y trabajamos para que un equipo uruguayo llegue, por primera vez, a la Final Mundial del International Collegiate Programming Contest.',
      'hero.btnPrimary': 'Descubrí ICPC House',
      'hero.btnOutline': 'Sumate al equipo',
      'hero.stat1': 'Integrantes por equipo',
      'hero.stat2': 'Computadora por equipo',
      'hero.stat3': 'De maratón sin parar',
      'hero.cardTag': 'Nueva iniciativa',
      'hero.cardP': 'Una coder house pensada para que los mejores programadores competitivos de Uruguay entrenen juntos, todos los días, bajo el mismo techo.',
      'hero.cardDeadline': 'Entrenamiento intensivo hasta el 7 de noviembre',

      'about.eyebrow': 'Sobre la competencia',
      'about.h2': '¿Qué es el ICPC?',
      'about.p1': 'El <strong>International Collegiate Programming Contest (ICPC)</strong> es la competencia de programación universitaria más antigua, grande y prestigiosa del mundo. Equipos de tres estudiantes, con una única computadora, tienen cinco horas para resolver la mayor cantidad posible de problemas algorítmicos: estructuras de datos, matemática, grafos y lógica pura bajo presión.',
      'about.p2': 'Uruguay compite dentro de la sede <strong>Sudamérica Sur</strong> de la Regional Latinoamericana, junto a equipos de Argentina y Paraguay, camino que —como en el resto del continente— conduce a la Final Mundial.',
      'about.path1.h4': 'Clasificatorio local',
      'about.path1.p': 'Torneos y entrenamientos universitarios para formar equipos.',
      'about.path2.h4': 'Regional Latinoamericana',
      'about.path2.p': 'Uruguay compite junto a Argentina y Paraguay en la sede Sudamérica Sur.',
      'about.path3.h4': 'Instancia continental',
      'about.path3.p': 'Los mejores equipos de la región avanzan a una instancia continental de ICPC.',
      'about.path4.h4': 'Final Mundial',
      'about.path4.p': 'El objetivo: un equipo uruguayo compitiendo entre los mejores del planeta.',

      'house.bannerLabel': '🏠 ICPC House — entrenamiento en convivencia',
      'house.bannerP': 'Funciona hasta el <strong>7 de noviembre</strong>, en la previa de la Regional Latinoamericana de ICPC.',
      'house.bannerBtn': 'Quiero postularme',
      'house.eyebrow': 'La iniciativa',
      'house.h2': 'Una casa para que Uruguay llegue a su primera Final Mundial',
      'house.p1': '<strong>ICPC House</strong> es una coder house: reunimos bajo un mismo techo a los programadores competitivos más destacados de Uruguay para que entrenen juntos, a tiempo completo, hasta el 7 de noviembre. Nada reemplaza las horas de práctica en equipo, la resolución conjunta de problemas y la convivencia con otros competidores de alto nivel — eso es exactamente lo que ICPC House busca crear.',
      'house.p2': 'El objetivo es concreto: llevar por primera vez a un equipo uruguayo a una <strong>Final Mundial de ICPC</strong>.',
      'house.feature1.h3': 'Convivencia y foco',
      'house.feature1.p': 'Alojamiento compartido para entrenar sin distracciones, con rutina diaria de práctica en equipo.',
      'house.feature2.h3': 'Mentorías y maratones',
      'house.feature2.p': 'Simulacros cronometrados, revisión de problemas y acompañamiento de referentes de la programación competitiva.',
      'house.feature3.h3': 'Objetivo mundial',
      'house.feature3.p': 'Un plan de entrenamiento con una sola meta: clasificar al primer equipo uruguayo a una Final Mundial de ICPC.',
      'house.step1.h4': 'Postulá tu equipo',
      'house.step1.p': 'Equipos de hasta 3 integrantes con experiencia en programación competitiva.',
      'house.step2.h4': 'Entrená en la casa',
      'house.step2.p': 'Convivencia y práctica intensiva junto a otros equipos, hasta el 7 de noviembre.',
      'house.step3.h4': 'Representá a Uruguay',
      'house.step3.p': 'Llegá con el mejor nivel posible a la Regional Latinoamericana de ICPC.',
      'house.plan.eyebrow': 'Cómo entrenamos',
      'house.plan.h3': 'Plan de entrenamiento',
      'house.plan.p': 'Cada semana combina trabajo individual, entrenamiento en equipo y competencia bajo presión real.',
      'house.schedule.weekday.h4': 'Lunes a viernes',
      'house.schedule.weekday.p': 'Sesiones de teoría, estudio individual de algoritmos y estructuras de datos, y práctica en equipo sobre los temas de la semana.',
      'house.schedule.saturday.h4': 'Sábado',
      'house.schedule.saturday.p': 'Maratón de 5 horas que simula las condiciones reales de un contest de ICPC: mismos problemas, mismo formato, misma presión.',
      'house.schedule.sunday.h4': 'Domingo',
      'house.schedule.sunday.p': 'Upsolving: se resuelven los problemas pendientes del maratón y se revisan las soluciones en grupo.',
      'house.phaseHead': 'Camino hasta el 7 de noviembre',
      'house.phase1.h4': 'Fundamentos y cohesión de equipo',
      'house.phase1.p': 'Nivelación de conocimientos, formación de rutinas de entrenamiento y consolidación de la dinámica de trabajo de cada equipo.',
      'house.phase2.h4': 'Entrenamiento intensivo',
      'house.phase2.p': 'Maratones semanales, revisión profunda de problemas y trabajo enfocado en los puntos débiles de cada equipo.',
      'house.phase3.h4': 'Recta final',
      'house.phase3.p': 'Simulacros a ritmo de competencia real y ajustes de estrategia, con la mira puesta en el 7 de noviembre y la Regional Latinoamericana.',
      'house.driverP': '<strong>ICPC House</strong> nació de una idea de <strong>Antigravity Capital</strong>, que hoy acompaña a los mejores talentos de programación competitiva de Uruguay en su camino hacia una Final Mundial de ICPC.',
      'house.goalLabel': 'Objetivo de recaudación',
      'house.goalAmount': 'USD 8.000',
      'house.goalP': 'Para cubrir los gastos de alquiler de la casa durante todo el período de entrenamiento.',

      'results.eyebrow': 'Trayectoria',
      'results.h2': 'Uruguay en la Regional Latinoamericana',
      'results.p': 'La programación competitiva viene creciendo en Uruguay de la mano de sus universidades. Cada año, equipos uruguayos compiten en la Regional Latinoamericana de ICPC, sumando experiencia y buenos resultados que marcan el camino hacia una clasificación mundial.',
      'results.item1.p': 'Un equipo de la Universidad ORT Uruguay se destacó en la Regional Latinoamericana de ICPC, terminando entre los primeros puestos del ranking regional frente a cientos de equipos de todo el continente.',
      'results.item1.badge': 'Mejor resultado histórico reciente',
      'results.item2.p': 'ICPC House arranca su primera edición: entrenamiento en convivencia para varios equipos uruguayos con la mira puesta en la Regional Latinoamericana y, más adelante, en una Final Mundial.',
      'results.item2.badge': 'En marcha',

      'sponsors.eyebrow': 'Quiénes lo hacen posible',
      'sponsors.h2': 'Patrocinadores e impulsores',
      'sponsors.p': 'ICPC Uruguay y ICPC House existen gracias al apoyo de empresas y organizaciones comprometidas con el talento tecnológico del país.',
      'sponsors.mainH4': 'Impulsor principal de ICPC House',
      'sponsors.mainP': 'Antigravity Capital respalda la casa de entrenamiento que preparará al primer equipo uruguayo rumbo a una Final Mundial de ICPC.',
      'sponsors.slot': 'Tu empresa acá',
      'sponsors.btn': 'Quiero ser sponsor',

      'contact.eyebrow': 'Sumate',
      'contact.h2': 'Hablemos',
      'contact.p': '¿Sos estudiante y querés postularte a ICPC House? ¿Tu empresa quiere sumarse como sponsor? ¿Sos docente o referente y querés colaborar con la comunidad? Escribinos.',
      'contact.cardH3': 'Contacto',

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
      'nav.patrocinadores': 'Sponsors',
      'nav.contacto': 'Contact',
      'header.cta': 'Meet ICPC House',
      'header.toggleAria': 'Open menu',

      'hero.eyebrow': 'Uruguay’s competitive programming community',
      'hero.h1': 'Uruguay has what it takes to reach an <span class="accent">ICPC World Finals</span>',
      'hero.lede': 'ICPC Uruguay brings together students, universities, and companies driving competitive programming in the country. We train, compete in the Latin American Regional, and work to get a Uruguayan team to the International Collegiate Programming Contest World Finals for the first time.',
      'hero.btnPrimary': 'Discover ICPC House',
      'hero.btnOutline': 'Join the team',
      'hero.stat1': 'Members per team',
      'hero.stat2': 'Computer per team',
      'hero.stat3': 'Non-stop marathon',
      'hero.cardTag': 'New initiative',
      'hero.cardP': 'A coder house designed for Uruguay’s top competitive programmers to train together, every day, under the same roof.',
      'hero.cardDeadline': 'Intensive training through November 7th',

      'about.eyebrow': 'About the contest',
      'about.h2': 'What is ICPC?',
      'about.p1': 'The <strong>International Collegiate Programming Contest (ICPC)</strong> is the oldest, largest, and most prestigious university programming competition in the world. Teams of three students, with a single computer, have five hours to solve as many algorithmic problems as possible: data structures, math, graphs, and pure logic under pressure.',
      'about.p2': 'Uruguay competes within the <strong>South South America</strong> site of the Latin American Regional, alongside teams from Argentina and Paraguay, a path that — as in the rest of the continent — leads to the World Finals.',
      'about.path1.h4': 'Local qualifier',
      'about.path1.p': 'University tournaments and training sessions to form teams.',
      'about.path2.h4': 'Latin American Regional',
      'about.path2.p': 'Uruguay competes alongside Argentina and Paraguay at the South South America site.',
      'about.path3.h4': 'Continental stage',
      'about.path3.p': 'The region’s best teams advance to an ICPC continental stage.',
      'about.path4.h4': 'World Finals',
      'about.path4.p': 'The goal: a Uruguayan team competing among the best in the world.',

      'house.bannerLabel': '🏠 ICPC House — live-in training',
      'house.bannerP': 'Running through <strong>November 7th</strong>, ahead of the ICPC Latin American Regional.',
      'house.bannerBtn': 'I want to apply',
      'house.eyebrow': 'The initiative',
      'house.h2': 'A house for Uruguay to reach its first World Finals',
      'house.p1': '<strong>ICPC House</strong> is a coder house: we bring Uruguay’s top competitive programmers together under one roof to train full-time through November 7th. Nothing replaces hours of team practice, solving problems together, and living alongside other high-level competitors — that’s exactly what ICPC House aims to create.',
      'house.p2': 'The goal is concrete: bring a Uruguayan team to an <strong>ICPC World Finals</strong> for the first time.',
      'house.feature1.h3': 'Focus and community living',
      'house.feature1.p': 'Shared housing to train without distractions, with a daily team-practice routine.',
      'house.feature2.h3': 'Mentorship and marathons',
      'house.feature2.p': 'Timed mock contests, problem reviews, and guidance from competitive programming mentors.',
      'house.feature3.h3': 'World Finals goal',
      'house.feature3.p': 'A training plan with a single aim: qualify the first Uruguayan team to an ICPC World Finals.',
      'house.step1.h4': 'Apply with your team',
      'house.step1.p': 'Teams of up to 3 members with competitive programming experience.',
      'house.step2.h4': 'Train at the house',
      'house.step2.p': 'Live-in, intensive practice alongside other teams, through November 7th.',
      'house.step3.h4': 'Represent Uruguay',
      'house.step3.p': 'Arrive at the ICPC Latin American Regional at your best level.',
      'house.plan.eyebrow': 'How we train',
      'house.plan.h3': 'Training plan',
      'house.plan.p': 'Each week combines individual work, team training, and competing under real pressure.',
      'house.schedule.weekday.h4': 'Monday to Friday',
      'house.schedule.weekday.p': 'Theory sessions, individual study of algorithms and data structures, and team practice on the week’s topics.',
      'house.schedule.saturday.h4': 'Saturday',
      'house.schedule.saturday.p': 'A 5-hour marathon that simulates real ICPC contest conditions: same problems, same format, same pressure.',
      'house.schedule.sunday.h4': 'Sunday',
      'house.schedule.sunday.p': 'Upsolving: solving the marathon’s pending problems and reviewing solutions as a group.',
      'house.phaseHead': 'Path to November 7th',
      'house.phase1.h4': 'Foundations and team cohesion',
      'house.phase1.p': 'Leveling up knowledge, building training routines, and settling into each team’s working dynamic.',
      'house.phase2.h4': 'Intensive training',
      'house.phase2.p': 'Weekly marathons, deep problem reviews, and focused work on each team’s weak spots.',
      'house.phase3.h4': 'Final stretch',
      'house.phase3.p': 'Real-pace competition simulations and strategy adjustments, with sights set on November 7th and the Latin American Regional.',
      'house.driverP': '<strong>ICPC House</strong> grew out of an idea from <strong>Antigravity Capital</strong>, who now back Uruguay’s top competitive programming talent on their way to an ICPC World Finals.',
      'house.goalLabel': 'Fundraising goal',
      'house.goalAmount': 'USD 8,000',
      'house.goalP': 'To cover the house’s rental costs for the entire training period.',

      'results.eyebrow': 'Track record',
      'results.h2': 'Uruguay at the Latin American Regional',
      'results.p': 'Competitive programming has been growing in Uruguay alongside its universities. Every year, Uruguayan teams compete at the ICPC Latin American Regional, gaining experience and good results that mark the path toward a world qualification.',
      'results.item1.p': 'A team from Universidad ORT Uruguay stood out at the ICPC Latin American Regional, finishing among the top spots in the regional ranking against hundreds of teams from across the continent.',
      'results.item1.badge': 'Best recent result',
      'results.item2.p': 'ICPC House kicks off its first edition: live-in training for several Uruguayan teams with sights set on the Latin American Regional and, later, a World Finals.',
      'results.item2.badge': 'Underway',

      'sponsors.eyebrow': 'Who makes it possible',
      'sponsors.h2': 'Sponsors and backers',
      'sponsors.p': 'ICPC Uruguay and ICPC House exist thanks to the support of companies and organizations committed to the country’s tech talent.',
      'sponsors.mainH4': 'Lead backer of ICPC House',
      'sponsors.mainP': 'Antigravity Capital backs the training house that will prepare the first Uruguayan team for an ICPC World Finals.',
      'sponsors.slot': 'Your company here',
      'sponsors.btn': 'I want to sponsor',

      'contact.eyebrow': 'Get involved',
      'contact.h2': 'Let’s talk',
      'contact.p': 'Are you a student who wants to apply to ICPC House? Does your company want to join as a sponsor? Are you a teacher or community leader who wants to collaborate? Write to us.',
      'contact.cardH3': 'Contact',

      'footer.note': 'Uruguay’s competitive programming community. Not an official ICPC Global site.'
    }
  };

  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;

    var browserLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || 'es'];

    for (var i = 0; i < browserLangs.length; i++) {
      if (/^en/i.test(browserLangs[i])) return 'en';
    }
    return 'es';
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations.es;

    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es-UY');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
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
