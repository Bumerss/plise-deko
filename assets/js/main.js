// Mobile nav, hero slider, gallery lightbox, back-to-top.
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile nav: toggle with aria-expanded, collapsible submenus, Escape closes
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    function setNav(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Aizvērt izvēlni' : 'Atvērt izvēlni');
    }
    toggle.addEventListener('click', function () { setNav(!nav.classList.contains('is-open')); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setNav(false); toggle.focus(); }
    });

    nav.querySelectorAll('.sub').forEach(function (sub, i) {
      var li = sub.parentElement;
      var link = li.querySelector('a');
      var btn = document.createElement('button');
      btn.className = 'sub-toggle';
      btn.type = 'button';
      btn.innerHTML = '<span aria-hidden="true">▾</span>';
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', link.textContent + ' – apakšizvēlne');
      sub.id = sub.id || 'sub-' + i;
      btn.setAttribute('aria-controls', sub.id);
      btn.addEventListener('click', function () {
        var open = !li.classList.contains('is-open');
        li.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
      });
      li.insertBefore(btn, sub);
    });
  }

  // Hero slider: pause button, no autoplay under reduced motion
  var slides = document.querySelectorAll('.hero__slide');
  var dotsWrap = document.querySelector('.hero__dots');
  if (slides.length > 1 && dotsWrap) {
    var current = 0, timer = null, playing = !reduceMotion;
    var dots = Array.prototype.map.call(slides, function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Slaids ' + (i + 1));
      b.addEventListener('click', function () { show(i); if (playing) start(); });
      dotsWrap.appendChild(b);
      return b;
    });
    var pause = document.createElement('button');
    pause.type = 'button';
    pause.className = 'hero__pause';
    dotsWrap.appendChild(pause);

    function show(i) {
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      dots[current].removeAttribute('aria-current');
      current = i;
      slides[current].classList.add('is-active');
      dots[current].classList.add('is-active');
      dots[current].setAttribute('aria-current', 'true');
    }
    function start() {
      clearInterval(timer);
      timer = setInterval(function () { show((current + 1) % slides.length); }, 6000);
    }
    function setPlaying(p) {
      playing = p;
      pause.textContent = p ? '❚❚' : '▶';
      pause.setAttribute('aria-label', p ? 'Apturēt slaidrādi' : 'Atsākt slaidrādi');
      if (p) start(); else clearInterval(timer);
    }
    pause.addEventListener('click', function () { setPlaying(!playing); });
    show(0);
    setPlaying(playing);
  }

  // Lightbox for .gallery links: dialog semantics, focus handling, scroll lock
  var links = Array.prototype.slice.call(document.querySelectorAll('.gallery a'));
  if (links.length) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Attēlu galerija');
    lb.innerHTML = '<button type="button" class="lb-close" aria-label="Aizvērt">×</button>' +
      '<button type="button" class="lb-prev" aria-label="Iepriekšējais attēls">‹</button>' +
      '<img alt=""><button type="button" class="lb-next" aria-label="Nākamais attēls">›</button>';
    document.body.appendChild(lb);
    var img = lb.querySelector('img'), idx = 0, opener = null;
    var buttons = lb.querySelectorAll('button');

    function setImage(i) {
      idx = (i + links.length) % links.length;
      img.src = links[idx].href;
      var thumb = links[idx].querySelector('img');
      img.alt = thumb ? thumb.alt : '';
    }
    function open(i) {
      opener = document.activeElement;
      setImage(i);
      lb.classList.add('is-open');
      document.body.classList.add('is-locked');
      lb.querySelector('.lb-close').focus();
    }
    function close() {
      lb.classList.remove('is-open');
      document.body.classList.remove('is-locked');
      if (opener) opener.focus();
    }
    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) { e.preventDefault(); open(i); });
    });
    lb.querySelector('.lb-close').onclick = close;
    lb.querySelector('.lb-prev').onclick = function () { setImage(idx - 1); };
    lb.querySelector('.lb-next').onclick = function () { setImage(idx + 1); };
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') setImage(idx - 1);
      if (e.key === 'ArrowRight') setImage(idx + 1);
      // keep Tab inside the dialog
      if (e.key === 'Tab') {
        var first = buttons[0], last = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  // Back to top
  var top = document.querySelector('.to-top');
  if (top) {
    window.addEventListener('scroll', function () {
      top.classList.toggle('is-visible', window.scrollY > 500);
    }, { passive: true });
  }
})();
