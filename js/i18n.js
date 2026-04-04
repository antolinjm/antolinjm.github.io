(function () {
  var translations = {
    en: {
      nav: {
        work:       'Work',
        consulting: 'Consulting',
        tools:      'Tools',
        contact:    'Contact',
        cta:        'Work together',
      },
      hero: {
        eyebrow:  'BI &amp; Analytics · Madrid',
        headline: 'Turning data into<br><em>revenue decisions.</em>',
        sub:      'I build the analytics infrastructure, pricing models, and CRM systems that give commercial teams a real advantage. Consulting, retail, QSR, delivery — always applied, never theoretical.',
        status:   'Open to consulting engagements',
      },
      experience: {
        label: 'Experience',
        havaianas: {
          period:   '2025 – present',
          role:     'BI &amp; Analytics Manager, EMEA',
          headline: 'Leading the commercial intelligence function for a global brand across 5 European markets.',
          b1:       'Architecting the regional analytics foundation — finance, sales, and marketing on a single stack',
          b2:       'Managing a team of four analysts plus external partners; defined team structure and delivery model',
          b3:       'Integrating marketing mix models and consumer data directly into pricing and planning cycles',
        },
        cuyna: {
          role:     'Head of Analytics &amp; Performance Operations',
          headline: 'Built the entire data function from zero at a high-growth dark kitchen operator.',
          b1:       '<strong>€1.2M+ in annualised savings</strong> through BI automation and algorithmic labour scheduling',
          b2:       'Designed and shipped the full data stack — ingestion, modelling, and reporting — in under six months',
          b3:       'Became the analytical layer for ops, finance, and commercial: one team, three functions',
        },
        mcdonalds: {
          role:     'Strategy &amp; Insights',
          headline: 'Pricing and loyalty at a scale most analysts never see.',
          b1:       'Elasticity-based pricing model across the full menu — <strong>+3% topline revenue</strong> impact',
          b2:       'Loyalty programme from concept to <strong>3M+ users</strong> in under 18 months',
        },
        glovo: {
          role:     'Senior Global Data Analyst',
          headline: 'Growth analytics inside one of Europe\'s fastest-scaling Q-commerce operations.',
          b1:       'Built LTV and churn models that fed directly into acquisition and retention budget decisions',
          b2:       'CRM personalisation at global scale via Braze — segmentation, lifecycle design, measurement',
        },
        deloitte: {
          role:     'Strategy Consultant',
          headline: 'Cross-sector strategy and data delivery — automotive, financial services, consumer.',
          b1:       'Redesigned the CRM architecture in Salesforce Marketing Cloud for a top-five automotive group',
          b2:       'Grounded in structured problem-solving, stakeholder management, and commercial analytics',
        },
      },
      consulting: {
        label:        'Consulting',
        title:        'Focused engagements. Real problems.',
        desc:         'I work with leadership teams that have a commercial data problem and need someone who can both diagnose it and fix it. Pricing, retention, BI architecture, data strategy. Typically 2–8 weeks, remote or in Madrid. No junior handoff.',
        availability: 'Taking on new projects',
        areas: {
          bi:         { title: 'BI Strategy &amp; Architecture', desc: 'Modern stack design, legacy migration, team structure, tooling decisions — with a build-to-last mindset' },
          pricing:    { title: 'Pricing Analytics',              desc: 'Elasticity modelling, revenue optimisation, markdown strategy, and promo ROI measurement' },
          crm:        { title: 'Retention &amp; CRM',            desc: 'Churn prediction, customer segmentation, lifecycle design, and platform implementation' },
          commercial: { title: 'Commercial Analytics',           desc: 'LTV modelling, channel attribution, marketing mix, and growth experimentation' },
          team:       { title: 'Data Team Building',             desc: 'Hiring frameworks, analyst onboarding, operating model design, and stakeholder alignment' },
          sectors:    { title: 'Sectors',                        desc: 'Retail · Consumer goods · QSR · Delivery · D2C · FMCG' },
        },
      },
      stack: {
        label:   'Stack',
        dataeng: 'Data &amp; Engineering',
        visbi:   'Visualisation &amp; BI',
        crm:     'CRM &amp; Activation',
      },
      tools: {
        label: 'Tools',
        ltv:   { desc: 'Unit economics for retail and subscription businesses · 2026' },
        rfm:   { desc: 'Interactive RFM segmentation — how it works and why it matters · 2026' },
        flow:  { desc: 'Bottleneck analysis with animated pipeline flow · 2026' },
      },
      contact: {
        label:   'Contact',
        headline: 'A data problem<br><em>worth solving?</em>',
        subtext: 'I take on a small number of projects each quarter. If the problem is real and the timing is right, let\'s talk.',
        perks: {
          audit:      'BI Infrastructure Audit &amp; Roadmap',
          mapping:    'Commercial Opportunity Mapping',
          leadership: 'Interim Data Leadership',
        },
        form: {
          title:   'Start here',
          name:    'Your name',
          email:   'Your email',
          message: 'What\'s the problem you\'re trying to solve?',
          submit:  'Send message',
        },
        success: {
          heading: 'Got it.',
          text:    "I'll read it carefully and get back to you shortly.",
        },
        error: 'Something went wrong. Please try again.',
      },
    },

    es: {
      nav: {
        work:       'Experiencia',
        consulting: 'Consultoría',
        tools:      'Herramientas',
        contact:    'Contacto',
        cta:        'Trabajemos juntos',
      },
      hero: {
        eyebrow:  'BI &amp; Analytics · Madrid',
        headline: 'Ocho años convirtiendo datos en<br><em>decisiones de negocio.</em>',
        sub:      'Construyo la infraestructura analítica, los modelos de pricing y los sistemas CRM que dan ventaja real a los equipos comerciales. Consultoría, retail, restauración, delivery — siempre aplicado, nunca teórico.',
        status:   'Disponible para proyectos de consultoría',
      },
      experience: {
        label: 'Experiencia',
        havaianas: {
          period:   '2025 – presente',
          role:     'BI &amp; Analytics Manager, EMEA',
          headline: 'Dirijo la función de inteligencia comercial de una marca global en 5 mercados europeos.',
          b1:       'Arquitectura de la base analítica regional — finanzas, ventas y marketing sobre un stack unificado',
          b2:       'Equipo de cuatro analistas y partners externos; definición de estructura y modelo de entrega',
          b3:       'Integración de modelos de marketing mix y datos de consumidor en los ciclos de pricing y planificación',
        },
        cuyna: {
          role:     'Head of Analytics &amp; Performance Operations',
          headline: 'Construí la función de datos desde cero en un operador de dark kitchens en pleno crecimiento.',
          b1:       '<strong>+1,2M€ en ahorros anualizados</strong> mediante automatización de BI y planificación algorítmica de turnos',
          b2:       'Stack de datos completo — ingesta, modelado y reporting — desplegado en menos de seis meses',
          b3:       'Capa analítica transversal para operaciones, finanzas y comercial: un equipo, tres funciones',
        },
        mcdonalds: {
          role:     'Strategy &amp; Insights',
          headline: 'Pricing y fidelización a una escala que pocos analistas llegan a ver.',
          b1:       'Modelo de pricing basado en elasticidad sobre toda la carta — impacto de <strong>+3% en facturación</strong>',
          b2:       'Programa de fidelización de cero a <strong>3M+ usuarios</strong> en menos de 18 meses',
        },
        glovo: {
          role:     'Senior Global Data Analyst',
          headline: 'Analytics de crecimiento en una de las operaciones de Q-commerce con mayor velocidad de escala en Europa.',
          b1:       'Modelos de LTV y churn que alimentaron directamente las decisiones de presupuesto en adquisición y retención',
          b2:       'Personalización CRM a escala global con Braze — segmentación, diseño de ciclo de vida, medición',
        },
        deloitte: {
          role:     'Consultor de Estrategia',
          headline: 'Estrategia y analítica multisectorial — automoción, servicios financieros, gran consumo.',
          b1:       'Rediseño de arquitectura CRM en Salesforce Marketing Cloud para un grupo de automoción líder en España',
          b2:       'Base en resolución estructurada de problemas, gestión de stakeholders y analytics comercial',
        },
      },
      consulting: {
        label:        'Consultoría',
        title:        'Proyectos concretos. Problemas reales.',
        desc:         'Trabajo con equipos directivos que tienen un problema de datos comerciales y necesitan a alguien capaz de diagnosticarlo y resolverlo. Pricing, retención, arquitectura de BI, estrategia de datos. Entre 2 y 8 semanas, en remoto o en Madrid. Sin delegación a perfiles junior.',
        availability: 'Abierto a nuevos proyectos',
        areas: {
          bi:         { title: 'Estrategia y Arquitectura de BI', desc: 'Diseño de stack moderno, migración de legacy, estructura de equipo y decisiones de tooling — con visión de largo plazo' },
          pricing:    { title: 'Pricing Analytics',               desc: 'Modelado de elasticidad, optimización de ingresos, estrategia de descuentos y medición de ROI promocional' },
          crm:        { title: 'Retención &amp; CRM',             desc: 'Predicción de churn, segmentación de clientes, diseño de ciclo de vida e implementación de plataforma' },
          commercial: { title: 'Analytics Comercial',             desc: 'Modelado de LTV, atribución de canal, marketing mix y experimentación de crecimiento' },
          team:       { title: 'Construcción de Equipos de Datos',desc: 'Marcos de contratación, onboarding de analistas, diseño del modelo operativo y alineación con stakeholders' },
          sectors:    { title: 'Sectores',                        desc: 'Retail · Gran consumo · Restauración · Delivery · D2C · FMCG' },
        },
      },
      stack: {
        label:   'Stack',
        dataeng: 'Datos e Ingeniería',
        visbi:   'Visualización &amp; BI',
        crm:     'CRM &amp; Activación',
      },
      tools: {
        label: 'Herramientas',
        ltv:   { desc: 'Unit economics para retail y negocios de suscripción · 2026' },
        rfm:   { desc: 'Segmentación RFM interactiva — cómo funciona y por qué importa · 2026' },
        flow:  { desc: 'Análisis de cuellos de botella con flujo de pipeline animado · 2026' },
      },
      contact: {
        label:   'Contacto',
        headline: '¿Un problema de datos<br><em>que vale la pena resolver?</em>',
        subtext: 'Trabajo con un número reducido de proyectos por trimestre. Si el problema es real y el momento es el adecuado, hablamos.',
        perks: {
          audit:      'Auditoría e Hoja de Ruta de BI',
          mapping:    'Mapeo de Oportunidades Comerciales',
          leadership: 'Liderazgo de Datos Interino',
        },
        form: {
          title:   'Empieza aquí',
          name:    'Tu nombre',
          email:   'Tu email',
          message: '¿Cuál es el problema que quieres resolver?',
          submit:  'Enviar mensaje',
        },
        success: {
          heading: 'Recibido.',
          text:    'Lo leeré con atención y te respondo en breve.',
        },
        error: 'Algo salió mal. Por favor, inténtalo de nuevo.',
      },
    },
  };

  function get(obj, path) {
    return path.split('.').reduce(function (o, k) { return o != null ? o[k] : undefined; }, obj);
  }

  function applyLang(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = get(translations[lang], el.getAttribute('data-i18n'));
      if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var value = get(translations[lang], el.getAttribute('data-i18n-placeholder'));
      if (value !== undefined) el.placeholder = value;
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  window.setLang = applyLang;

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(localStorage.getItem('lang') || 'en');
  });
})();