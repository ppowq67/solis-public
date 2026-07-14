(function() {
    var navbar = document.getElementById('_nav');
    function onScroll() {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    var navToggle = document.getElementById('_toggle');
    var navMobile = document.getElementById('_mobile');
    var iconMenu = navToggle.querySelector('.menu-icon');
    var iconClose = navToggle.querySelector('.close-icon');
    var mobileOpen = false;
    navToggle.addEventListener('click', function() {
      mobileOpen = !mobileOpen;
      if (mobileOpen) {
        navMobile.style.display = 'flex';
        iconMenu.style.display = 'none';
        iconClose.style.display = 'block';
        navToggle.setAttribute('aria-label', 'Close menu');
        navToggle.setAttribute('aria-expanded', 'true');
      } else {
        navMobile.style.display = 'none';
        iconMenu.style.display = 'block';
        iconClose.style.display = 'none';
        navToggle.setAttribute('aria-label', 'Open menu');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
    var scrollLinks = document.querySelectorAll('[data-scroll]');
    scrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('data-scroll');
        var target = document.getElementById(targetId);
        if (target) {
          if (mobileOpen) {
            mobileOpen = false;
            navMobile.style.display = 'none';
            iconMenu.style.display = 'block';
            iconClose.style.display = 'none';
            navToggle.setAttribute('aria-label', 'Open menu');
            navToggle.setAttribute('aria-expanded', 'false');
          }
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    var urlPill = document.getElementById('_pill');
    var urlInput = document.getElementById('_url');
    urlInput.addEventListener('focus', function() {
      urlPill.classList.add('focused');
    });
    urlInput.addEventListener('blur', function() {
      urlPill.classList.remove('focused');
    });
    var ctaPill = document.getElementById('_cta-pill');
    var ctaInput = document.getElementById('_cta-url');
    ctaInput.addEventListener('focus', function() {
      ctaPill.classList.add('focused');
    });
    ctaInput.addEventListener('blur', function() {
      ctaPill.classList.remove('focused');
    });
    var faqItems = document.querySelectorAll('.faq');
    faqItems.forEach(function(item) {
      var btn = item.querySelector('.faq-btn');
      btn.addEventListener('click', function() {
        var isOpen = item.classList.contains('open');
        faqItems.forEach(function(other) {
          other.classList.remove('open');
          other.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('pill-wrap') || entry.target.querySelector('.pill-wrap')) {
            var pw = entry.target.classList.contains('pill-wrap') ? entry.target : entry.target.querySelector('.pill-wrap');
            if (pw) setTimeout(function() { pw.classList.add('revealed'); }, 600);
          }
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal, .blur-in').forEach(function(el) {
      revealObserver.observe(el);
    });
  })();
