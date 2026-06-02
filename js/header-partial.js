(function () {
  if (window.__sfHeaderPartialLoaded) return;
  window.__sfHeaderPartialLoaded = true;

  function injectHeaderPartial() {
    if (!document.body || document.getElementById('sf-header-partial')) return;
    if (!document.querySelector('link[href*="font-awesome"]') && !document.getElementById('sfh-fontawesome')) {
      var faLink = document.createElement('link');
      faLink.id = 'sfh-fontawesome';
      faLink.rel = 'stylesheet';
      faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
      document.head.appendChild(faLink);
    }

    if (!document.getElementById('sf-header-partial-style')) {
      var style = document.createElement('style');
      style.id = 'sf-header-partial-style';
      style.textContent = [
        '.sfh-header{position:fixed;top:0;left:0;right:0;z-index:9000;background:#000;border-bottom:1px solid rgba(255,255,255,.12);font-family:"Plus Jakarta Sans",sans-serif;}',
        '.sfh-wrap{max-width:1280px;margin:0 auto;padding:0 24px;}',
        '.sfh-topbar{display:none;background:#0f0f0f;border-bottom:1px solid rgba(255,255,255,.1);}',
        '.sfh-topbar-row{height:34px;display:flex;align-items:center;justify-content:space-between;gap:16px;}',
        '.sfh-top-links{display:flex;align-items:center;gap:10px;color:#d1d5db;font-size:13px;line-height:1;}',
        '.sfh-top-links a{text-decoration:none;color:#d1d5db;position:relative;}',
        '.sfh-top-links a:hover,.sfh-top-links a.active{color:#e6a817;}',
        '.sfh-top-links a::after{content:"";position:absolute;left:0;bottom:-4px;width:0;height:2px;background:#e6a817;transition:width .25s ease;}',
        '.sfh-top-links a:hover::after,.sfh-top-links a.active::after{width:100%;}',
        '.sfh-divider{opacity:.35;}',
        '.sfh-social{display:flex;gap:8px;}',
        '.sfh-social a{text-decoration:none;color:#d1d5db;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;font-size:14px;border:1px solid rgba(255,255,255,.2);border-radius:999px;}',
        '.sfh-social a:hover{color:#e6a817;border-color:#e6a817;}',
        '.sfh-social i{line-height:1;}',
        '.sfh-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}',
        '.sfh-main{height:72px;display:flex;align-items:center;justify-content:space-between;gap:16px;}',
        '.sfh-brand{text-decoration:none;color:#fff;display:flex;align-items:center;gap:12px;min-width:0;}',
        '.sfh-brand img{height:46px;width:auto;object-fit:contain;}',
        '.sfh-brand-name{font-size:18px;font-weight:800;line-height:1.1;white-space:nowrap;}',
        '.sfh-brand-tag{font-size:12px;color:#e6a817;line-height:1.1;white-space:nowrap;}',
        '.sfh-nav{display:none;align-items:center;gap:22px;color:#d1d5db;font-weight:600;font-size:15px;}',
        '.sfh-nav a,.sfh-nav button{text-decoration:none;color:#d1d5db;background:none;border:0;padding:0;cursor:pointer;position:relative;font:inherit;}',
        '.sfh-nav a:hover,.sfh-nav button:hover,.sfh-nav a.active{color:#e6a817;}',
        '.sfh-nav a::after,.sfh-nav button::after{content:"";position:absolute;left:0;bottom:-6px;width:0;height:2px;background:#e6a817;transition:width .25s ease;}',
        '.sfh-nav a:hover::after,.sfh-nav button:hover::after,.sfh-nav a.active::after{width:100%;}',
        '.sfh-dropdown{position:relative;}',
        '.sfh-dropdown-menu{position:absolute;left:0;top:calc(100% + 10px);min-width:230px;background:#111;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:8px;opacity:0;visibility:hidden;transform:translateY(6px);transition:all .2s ease;box-shadow:0 20px 40px rgba(0,0,0,.4);}',
        '.sfh-dropdown:hover .sfh-dropdown-menu{opacity:1;visibility:visible;transform:translateY(0);}',
        '.sfh-dropdown-menu a{display:block;padding:8px 10px;border-radius:7px;font-size:14px;font-weight:500;}',
        '.sfh-dropdown-menu a::after{display:none;}',
        '.sfh-dropdown-menu a:hover{background:rgba(255,255,255,.06);}',
        '.sfh-dropdown.sfh-dropdown-mega{position:static;}',
        '.sfh-mega-menu{position:absolute;left:50%;top:100%;width:min(1232px,calc(100vw - 48px));transform:translateX(-50%) translateY(8px);background:#101010;border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:14px;box-shadow:0 24px 50px rgba(0,0,0,.45);opacity:0;visibility:hidden;pointer-events:none;transition:all .2s ease;}',
        '.sfh-mega-menu::before{content:\"\";position:absolute;left:0;right:0;top:-14px;height:14px;}',
        '.sfh-dropdown.sfh-dropdown-mega:hover .sfh-mega-menu,.sfh-dropdown.sfh-dropdown-mega:focus-within .sfh-mega-menu,.sfh-mega-menu:hover{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0);}',
        '.sfh-mega-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;}',
        '.sfh-mega-card{display:block;text-decoration:none;background:#151515;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;transition:border-color .2s ease,transform .2s ease;}',
        '.sfh-mega-card:hover{border-color:rgba(230,168,23,.6);transform:translateY(-2px);}',
        '.sfh-mega-card::after{display:none !important;}',
        '.sfh-mega-card img{width:100%;aspect-ratio:5/4;object-fit:cover;display:block;filter:grayscale(100%);transition:filter .3s ease;}',
        '.sfh-mega-card:hover img{filter:grayscale(0%);}',
        '.sfh-mega-body{padding:10px;}',
        '.sfh-mega-title{display:block;color:#fff;font-size:13px;font-weight:700;line-height:1.3;margin-bottom:4px;}',
        '.sfh-mega-desc{display:block;color:#a6a6a6;font-size:11px;line-height:1.35;min-height:30px;}',
        '.sfh-mega-empty{grid-column:1/-1;color:#a6a6a6;font-size:12px;line-height:1.4;padding:8px 4px;}',
        '.sfh-mobile-toggle{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:8px;border:1px solid rgba(230,168,23,.45);background:transparent;color:#e6a817;font-size:20px;cursor:pointer;}',
        '.sfh-mobile-panel{display:none;border-top:1px solid rgba(255,255,255,.1);padding:12px 0 16px;}',
        '.sfh-mobile-panel.open{display:block;}',
        '.sfh-mobile-links{display:flex;flex-direction:column;gap:8px;}',
        '.sfh-mobile-links a,.sfh-mobile-links summary{color:#d1d5db;text-decoration:none;font-weight:600;font-size:15px;padding:8px 2px;cursor:pointer;}',
        '.sfh-mobile-links a:hover,.sfh-mobile-links a.active,.sfh-mobile-links summary:hover{color:#e6a817;}',
        '.sfh-mobile-links details{border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:4px 12px;background:rgba(255,255,255,.03);}',
        '.sfh-mobile-links details a{display:block;padding:6px 0 6px 8px;font-size:14px;font-weight:500;color:#c7c7c7;}',
        '.sfh-mobile-links details a.active{color:#e6a817;}',
        '.sfh-main-offset{padding-top:112px !important;}',
        '.sfh-breadcrumb{margin-bottom:20px;}',
        '.sfh-breadcrumb-inner{max-width:1280px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;}',
        '.sfh-breadcrumb-path{display:flex;align-items:center;gap:8px;font-size:14px;line-height:1.4;color:#6b7280;}',
        '.sfh-breadcrumb-path a{text-decoration:none;color:#111827;font-weight:600;}',
        '.sfh-breadcrumb-path a:hover{color:#e6a817;}',
        '.sfh-breadcrumb-current{color:#111827;font-weight:700;}',
        '.sfh-breadcrumb-cta{text-decoration:none;display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;padding:7px 12px;border-radius:999px;border:1px solid rgba(230,168,23,.45);background:rgba(230,168,23,.12);color:#111827;transition:all .2s ease;}',
        '.sfh-breadcrumb-cta:hover{background:#e6a817;border-color:#e6a817;color:#111827;}',
        '@media (max-width:1439px){.sfh-mega-grid{grid-template-columns:repeat(4,minmax(0,1fr));}}',
        '@media (max-width:1279px){.sfh-mega-grid{grid-template-columns:repeat(3,minmax(0,1fr));}}',
        '@media (min-width:768px){.sfh-topbar{display:block;}}',
        '@media (max-width:640px){.sfh-breadcrumb-inner{align-items:flex-start;}.sfh-breadcrumb-cta{font-size:11px;padding:6px 10px;}}',
        '@media (min-width:1024px){.sfh-nav{display:flex;}.sfh-mobile-toggle,.sfh-mobile-panel{display:none !important;}}'
      ].join('');
      document.head.appendChild(style);
    }

    var wrapper = document.createElement('div');
    wrapper.id = 'sf-header-partial';
    wrapper.innerHTML = [
      '<header class="sfh-header">',
      '  <div class="sfh-topbar">',
      '    <div class="sfh-wrap sfh-topbar-row">',
      '      <nav class="sfh-top-links">',
      '        <a href="who-we-are.html" data-top-target="who-we-are.html">Who We Are</a><span class="sfh-divider">|</span>',
      '        <a href="strategic-direction.html" data-top-target="strategic-direction.html">Our Strategic &amp; Direction</a><span class="sfh-divider">|</span>',
      '        <a href="what-we-do.html" data-top-target="what-we-do.html">What We Do</a><span class="sfh-divider">|</span>',
      '        <a href="team.html" data-top-target="team.html">Our Team</a><span class="sfh-divider">|</span>',
      '        <a href="partners.html" data-top-target="partners.html">Partners</a><span class="sfh-divider">|</span>',
      '        <a href="collaborators.html" data-top-target="collaborators.html">Collaborators</a><span class="sfh-divider">|</span>',
      '        <a href="blog.html" data-top-target="blog.html">Blog</a><span class="sfh-divider">|</span>',
      '        <a href="index.html#gallery">Gallery</a>',
      '      </nav>',
      '      <div class="sfh-social">',
      '        <a href="https://www.instagram.com/sagufoundation/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i><span class="sfh-sr-only">Instagram</span></a>',
      '        <a href="https://www.facebook.com/SAGUFoundation/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i><span class="sfh-sr-only">Facebook</span></a>',
      '        <a href="https://www.tiktok.com/@sagufoundation" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fa-brands fa-tiktok" aria-hidden="true"></i><span class="sfh-sr-only">TikTok</span></a>',
      '        <a href="https://www.youtube.com/@sagufoundation" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fa-brands fa-youtube" aria-hidden="true"></i><span class="sfh-sr-only">YouTube</span></a>',
      '        <a href="https://whatsapp.com/channel/sagufoundation" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i><span class="sfh-sr-only">WhatsApp</span></a>',
      '      </div>',
      '    </div>',
      '  </div>',
      '  <div class="sfh-wrap">',
      '    <div class="sfh-main">',
      '      <a href="index.html" class="sfh-brand">',
      '        <img src="images/logo-sagufoundation.png" alt="SAGU Foundation"/>',
      '        <span>',
      '          <span class="sfh-brand-name">SAGU Foundation</span><br/>',
      '          <span class="sfh-brand-tag">Strengthening, Assisting, Generating, Utilizing</span>',
      '        </span>',
      '      </a>',
      '      <nav class="sfh-nav">',
      '        <a href="index.html" data-nav-target="index.html">Home</a>',
      '        <div class="sfh-dropdown sfh-dropdown-mega">',
      '          <button type="button">Our Programs ▾</button>',
      '          <div class="sfh-mega-menu">',
      '            <div class="sfh-mega-grid" id="sfh-mega-programs-grid"><span class="sfh-mega-empty">Loading programs...</span></div>',
      '          </div>',
      '        </div>',
      '        <div class="sfh-dropdown">',
      '          <button type="button">SUP Programs ▾</button>',
      '          <div class="sfh-dropdown-menu">',
      '            <a href="sup-2020.html">SUP 2020</a>',
      '            <a href="sup-2021.html">SUP 2021</a>',
      '            <a href="sup-tutors.html">SUP Tutors</a>',
      '          </div>',
      '        </div>',
      '        <a href="annual-reports.html" data-nav-target="annual-reports.html">Annual Reports</a>',
      '        <a href="contact.html" data-nav-target="contact.html">Contact</a>',
      '      </nav>',
      '      <button class="sfh-mobile-toggle" type="button" aria-label="Toggle mobile menu" aria-expanded="false" id="sfh-mobile-toggle">☰</button>',
      '    </div>',
      '    <div class="sfh-mobile-panel" id="sfh-mobile-panel">',
      '      <nav class="sfh-mobile-links">',
      '        <a href="index.html" data-nav-target="index.html">Home</a>',
      '        <details>',
      '          <summary>Our Programs</summary>',
      '          <div id="sfh-mobile-programs-list"><a href="index.html#programs">Loading programs...</a></div>',
      '        </details>',
      '        <details>',
      '          <summary>SUP Programs</summary>',
      '          <a href="sup-2020.html">SUP 2020</a>',
      '          <a href="sup-2021.html">SUP 2021</a>',
      '          <a href="sup-tutors.html">SUP Tutors</a>',
      '        </details>',
      '        <a href="annual-reports.html" data-nav-target="annual-reports.html">Annual Reports</a>',
      '        <a href="contact.html" data-nav-target="contact.html">Contact</a>',
      '      </nav>',
      '    </div>',
      '  </div>',
      '</header>'
    ].join('');

    if (document.body.firstChild) {
      document.body.insertBefore(wrapper, document.body.firstChild);
    } else {
      document.body.appendChild(wrapper);
    }

    var toggle = document.getElementById('sfh-mobile-toggle');
    var panel = document.getElementById('sfh-mobile-panel');
    if (toggle && panel) {
      toggle.addEventListener('click', function () {
        var isOpen = panel.classList.contains('open');
        panel.classList.toggle('open', !isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));
      });
    }

    function escapeHtml(value) {
      return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
    function toTitleCase(text) {
      return String(text || '')
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, function (char) { return char.toUpperCase(); });
    }

    function resolvePageName() {
      var rawTitle = String(document.title || '').trim();
      if (rawTitle) {
        var titlePart = rawTitle.split('|')[0].trim();
        if (titlePart) return titlePart;
      }

      var mainHeading = document.querySelector('main h1');
      if (mainHeading && mainHeading.textContent.trim()) {
        return mainHeading.textContent.trim();
      }

      var slug = (window.location.pathname.split('/').pop() || '').replace(/\.html$/i, '');
      return slug ? toTitleCase(slug) : 'Page';
    }

    function injectBreadcrumb() {
      var currentPage = window.location.pathname.split('/').pop() || 'index.html';
      if (currentPage === 'index.html' || currentPage === '') return;

      var main = document.querySelector('main');
      if (!main || main.querySelector('#sfh-breadcrumb')) return;

      var pageName = resolvePageName();
      var breadcrumb = document.createElement('div');
      breadcrumb.id = 'sfh-breadcrumb';
      breadcrumb.className = 'sfh-breadcrumb';
      breadcrumb.innerHTML = [
        '<div class=\"sfh-breadcrumb-inner\">',
        '  <p class=\"sfh-breadcrumb-path\">',
        '    <a href=\"index.html\">Home</a>',
        '    <span aria-hidden=\"true\">&gt;</span>',
        '    <span class=\"sfh-breadcrumb-current\">' + escapeHtml(pageName) + '</span>',
        '  </p>',
        // '  <a href=\"courses.html\" class=\"sfh-breadcrumb-cta\">View All Courses: courses.html</a>',
        '</div>'
      ].join('');

      var computedPaddingTop = parseFloat(window.getComputedStyle(main).paddingTop || '0');
      if (computedPaddingTop < 90) {
        main.classList.add('sfh-main-offset');
      }

      main.insertBefore(breadcrumb, main.firstChild);
    }

    function extractPrograms(payload) {
      if (Array.isArray(payload)) return payload;
      if (payload && Array.isArray(payload.programs)) return payload.programs;
      return [];
    }

    function getProgramDetailHref(program) {
      if (!program || !program.id) return 'index.html#programs';
      return 'program-detail.html?id=' + encodeURIComponent(program.id);
    }

    function renderProgramMenus(programs) {
      var megaGrid = document.getElementById('sfh-mega-programs-grid');
      var mobileList = document.getElementById('sfh-mobile-programs-list');
      if (!megaGrid || !mobileList) return;

      if (!Array.isArray(programs) || programs.length === 0) {
        megaGrid.innerHTML = '<span class="sfh-mega-empty">Programs unavailable.</span>';
        mobileList.innerHTML = '<a href="index.html#programs">Our Programs</a>';
        return;
      }

      megaGrid.innerHTML = programs.map(function (program) {
        var title = escapeHtml(program.title || 'Program');
        var description = escapeHtml(program.description || '');
        var image = escapeHtml(program.image || 'images/logo-sagufoundation.png');
        var imageAlt = escapeHtml(program.imageAlt || program.title || 'Program');
        var menuHref = escapeHtml(program.menuHref || getProgramDetailHref(program));
        return '<a href="' + menuHref + '" class="sfh-mega-card">' +
          '<img src="' + image + '" alt="' + imageAlt + '"/>' +
          '<span class="sfh-mega-body"><span class="sfh-mega-title">' + title + '</span><span class="sfh-mega-desc">' + description + '</span></span>' +
          '</a>';
      }).join('');

      mobileList.innerHTML = programs.map(function (program) {
        var title = escapeHtml(program.title || 'Program');
        var menuHref = escapeHtml(program.menuHref || getProgramDetailHref(program));
        return '<a href="' + menuHref + '">' + title + '</a>';
      }).join('');
    }

    var fallbackPrograms = [
      { id: 'general-english', title: 'General English', description: 'Basic English language learning materials covering grammar, vocabulary, and communication.', image: 'images/programs/program-general-english.png', imageAlt: 'General English', menuHref: 'program-detail.html?id=general-english' },
      { id: 'ielts-preparation', title: 'IELTS Preparation', description: 'Resources specifically tailored to help individuals get ready for the IELTS exam.', image: 'images/programs/program-ielts-preparation.png', imageAlt: 'IELTS Preparation', menuHref: 'program-detail.html?id=ielts-preparation' },
      { id: 'toefl-preparation', title: 'TOEFL Preparation', description: 'Materials designed to assist with preparation for the TOEFL exam.', image: 'images/programs/program-toefl-preparation.png', imageAlt: 'TOEFL Preparation', menuHref: 'program-detail.html?id=toefl-preparation' },
      { id: 'general-english-placement-test', title: 'General English Placement Test', description: 'Assessments designed to determine your current level of proficiency in English and place you in the appropriate learning program.', image: 'images/programs/program-general-english-preparation.png', imageAlt: 'General English Placement Test', menuHref: 'program-detail.html?id=general-english-placement-test' },
      { id: 'ielts-simulation-test', title: 'IELTS Simulation Test', description: 'Practice tests mimicking the structure and format of the IELTS exam.', image: 'images/programs/program-ielts-simulation-test.png', imageAlt: 'IELTS Simulation Test', menuHref: 'program-detail.html?id=ielts-simulation-test' },
      { id: 'toefl-simulation-test', title: 'TOEFL Simulation Test', description: 'Practice exams replicating the format and content of the TOEFL test.', image: 'images/programs/program-toefl-simulation-test.png', imageAlt: 'TOEFL Simulation Test', menuHref: 'program-detail.html?id=toefl-simulation-test' },
      { id: 'community-development', title: 'Community Development', description: 'Information and resources related to community-focused projects and initiatives.', image: 'images/programs/program-community-development.png', imageAlt: 'Community Development', menuHref: 'program-detail.html?id=community-development' },
      { id: 'computer-literacy', title: 'Computer Literacy', description: 'Resources and guidance to develop basic skills and understanding in using computers and technology effectively.', image: 'images/programs/program-computer-literacy.png', imageAlt: 'Computer Literacy', menuHref: 'program-detail.html?id=computer-literacy' },
      { id: 'internship', title: 'Internship', description: 'We welcome enthusiastic students eager to learn, collaborate, and make a difference in the lives of others.', image: 'images/programs/program-internship.png', imageAlt: 'Internship', menuHref: 'program-detail.html?id=internship' }
    ];

    if (!window.__sfOurProgramsPromise) {
      window.__sfOurProgramsPromise = fetch('data/ourPrograms.json')
        .then(function (response) {
          if (!response.ok) throw new Error('Failed to load ourPrograms.json');
          return response.json();
        })
        .then(function (payload) {
          var programs = extractPrograms(payload);
          return programs.length ? programs : fallbackPrograms;
        })
        .catch(function () {
          return fallbackPrograms;
        });
    }

    window.__sfOurProgramsPromise
      .then(function (programs) {
        renderProgramMenus(programs);
      })
      .catch(function () {
        renderProgramMenus(fallbackPrograms);
      });

    var current = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('[data-top-target],[data-nav-target]');
    links.forEach(function (link) {
      var target = link.getAttribute('data-top-target') || link.getAttribute('data-nav-target');
      if (target === current) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });

    injectBreadcrumb();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHeaderPartial);
  } else {
    injectHeaderPartial();
  }
})();
