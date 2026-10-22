// Price calculator. Uses window.CALC_DATA from build.mjs; price is EUR/m² or null (not yet known).
(function () {
  var data = window.CALC_DATA || [];
  var $ = function (id) { return document.getElementById(id); };
  var sys = $('c-system'), w = $('c-width'), h = $('c-height'), qty = $('c-qty'), dual = $('c-dual');
  if (!sys) return;

  function find(slug) {
    for (var i = 0; i < data.length; i++) if (data[i].slug === slug) return data[i];
    return null;
  }

  function update() {
    var s = find(sys.value);
    if (!s) return;
    var width = parseFloat(w.value), height = parseFloat(h.value), n = Math.max(1, parseInt(qty.value, 10) || 1);
    var msg = '', ok = width > 0 && height > 0;

    $('c-dual-wrap').style.display = s.dual ? '' : 'none';
    if (!s.dual) dual.checked = false;

    $('r-system').textContent = s.name;
    $('r-max').textContent = s.max ? s.max.h + ' × ' + s.max.w + ' cm (augst. × plat.)' : 'Pēc pieprasījuma';
    $('r-control').textContent = s.control || '–';

    if (ok && s.max && (height > s.max.h || width > s.max.w)) {
      msg = 'Izmēri pārsniedz sistēmas maksimālos izmērus. Lūdzu, izvēlieties citu sistēmu vai sazinieties ar mums.';
      ok = false;
    }

    var area = ok ? (width / 100) * (height / 100) * n : null;
    $('r-area').textContent = area ? area.toFixed(2) + ' m²' + (n > 1 ? ' (' + n + ' gab.)' : '') : '–';

    if (area && s.price != null) {
      $('r-price').textContent = (area * s.price).toFixed(2) + ' €';
    } else {
      $('r-price').textContent = 'Tiks pievienota vēlāk';
    }

    var msgEl = $('r-msg');
    msgEl.textContent = msg;
    msgEl.style.display = msg ? '' : 'none';
  }

  [sys, w, h, qty, dual].forEach(function (el) {
    el.addEventListener('input', update);
    el.addEventListener('change', update);
  });

  // Preselect system from ?sistema=slug
  var q = /[?&]sistema=([^&]+)/.exec(location.search);
  if (q && find(q[1])) sys.value = q[1];
  update();
})();
