// Mobile nav, hero slider, gallery lightbox, back-to-top.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () { nav.classList.toggle('is-open'); });
  }

  // Hero slider
  var slides = document.querySelectorAll('.hero__slide');
  var dotsWrap = document.querySelector('.hero__dots');
  if (slides.length > 1 && dotsWrap) {
    var current = 0, timer;
    var dots = Array.prototype.map.call(slides, function (_, i) {
      var b = document.createElement('button');
      b.setAttribute('aria-label', 'Slaids ' + (i + 1));
      b.addEventListener('click', function () { show(i); restart(); });
      dotsWrap.appendChild(b);
      return b;
    });
    function show(i) {
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      current = i;
      slides[current].classList.add('is-active');
      dots[current].classList.add('is-active');
    }
    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { show((current + 1) % slides.length); }, 5500);
    }
    dots[0].classList.add('is-active');
    restart();
  }

  // Lightbox for .gallery links
  var links = Array.prototype.slice.call(document.querySelectorAll('.gallery a'));
  if (links.length) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lb-close" aria-label="Aizvērt">×</button>' +
      '<button class="lb-prev" aria-label="Iepriekšējais">‹</button>' +
      '<img alt=""><button class="lb-next" aria-label="Nākamais">›</button>';
    document.body.appendChild(lb);
    var img = lb.querySelector('img'), idx = 0;
    function open(i) { idx = (i + links.length) % links.length; img.src = links[idx].href; lb.classList.add('is-open'); }
    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) { e.preventDefault(); open(i); });
    });
    lb.querySelector('.lb-close').onclick = function () { lb.classList.remove('is-open'); };
    lb.querySelector('.lb-prev').onclick = function () { open(idx - 1); };
    lb.querySelector('.lb-next').onclick = function () { open(idx + 1); };
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.classList.remove('is-open'); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') lb.classList.remove('is-open');
      if (e.key === 'ArrowLeft') open(idx - 1);
      if (e.key === 'ArrowRight') open(idx + 1);
    });
  }

  // Back to top
  var top = document.querySelector('.to-top');
  if (top) {
    window.addEventListener('scroll', function () {
      top.classList.toggle('is-visible', window.scrollY > 500);
    });
  }
})();
