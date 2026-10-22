// Static site generator for the Plisē Deko skeleton.
// Run: node build.mjs  -> writes all *.html pages into this folder.
import { writeFileSync } from 'node:fs';

const SITE = {
  name: 'Plisē Deko',
  address: 'Brīvības iela 155/1. korpuss, Rīga',
  phone: '67543278',
  mobile: '29175760',
  email: 'info@plisedeko.lv',
  map: 'https://maps.google.com/maps?q=56.9668,24.1437&z=14&output=embed',
};

const P = 'assets/img/products/';

// Product systems, grouped like Blöcker's technical product information.
const GROUPS = [
  {
    id: 'vertikali',
    title: 'Vertikāliem logiem un durvīm',
    teaser: 'Nostieptās un brīvi karājošās plisē sistēmas taisnstūra un trapecveida logiem.',
    systems: [
      {
        slug: 'sistema-vs1-vs3',
        name: 'Sistēma VS1, VS2, VS3, VS SD',
        short: 'Vispopulārākais plisē modelis ar visvienkāršāko uzstādīšanu.',
        features: [
          'Vispopulārākais plisē modelis, kura uzstādīšana ir visvienkāršākā.',
          'Paredzēts logiem, durvīm vertikālā stāvoklī vai vēdināšanas režīmā.',
          'Balstās uz četrām nostieptām auklām.',
          'Atverams no augšas uz leju vai arī otrādi, sistēmu var arī atstāt sakļautu logam/durvīm pa vidu.',
          'Var sastāvēt arī no divu veidu audumiem.',
        ],
        specs: {
          'Loga forma': 'Taisnstūra logi un durvis',
          'Stāvoklis': 'Vertikāli vai vēdināšanas režīmā',
          'Stiprinājums': 'Četras nostieptas auklas',
          'Vadība': 'No augšas uz leju un no apakšas uz augšu',
          'Divu audumu kombinācija': 'Jā',
          'Maks. izmēri': 'Augstums 200 cm, platums 150 cm',
        },
        images: ['ras1.jpg', '121-721x1024.jpg', '141-618x1024.jpg', '181-479x1024.jpg', '1331813021_cosiflor.jpg', 'cosiflor_plissee_3rund2.jpg', 'plissee01.jpg'],
      },
      {
        slug: 'sistema-vs4-vs10',
        name: 'Sistēma VS4 – VS10',
        short: 'Trapecveida logu un durvju aprīkošanai, atverama ar rokturīti.',
        features: [
          'Modelis, kas paredzēts visdažādāko trapecveida logu un durvju aprīkošanai.',
          'Lietojams gan vertikālā, gan vēdināšanas režīma stāvoklī.',
          'Atverams ar ērta rokturīša palīdzību.',
          'Stiprināms augšā un apakšā.',
          'Var sastāvēt arī no divu veidu audumiem.',
        ],
        specs: {
          'Modeļi': 'VS4, VS5, VS6, VS7, VS8, VS9, VS10',
          'Loga forma': 'Trapecveida logi un durvis',
          'Stāvoklis': 'Vertikāli vai vēdināšanas režīmā',
          'Stiprinājums': 'Augšā un apakšā',
          'Vadība': 'Rokturītis',
          'Divu audumu kombinācija': 'Jā',
          'Maks. izmēri': 'Augstums 200 cm, platums 150 cm',
        },
        images: ['ras2.jpg', '36-647x1024.jpg', '391-725x1024.jpg', 'cosiflor_plissee_4rund2.jpg', 'solarmatic-plissee-cosiflor-sonderform-verspannt1.jpg', 'cosiflor_plissee_5rund21.jpg'],
      },
      {
        slug: 'sistema-f1-fe',
        name: 'Sistēma F1, F3, F4, FE',
        short: 'Brīvi karājoša plisē, atverama ar auklu. Lieliem logiem līdz 260 × 220 cm.',
        features: [
          'Modelis, kas paredzēts taisnstūra logu un durvju aprīkošanai.',
          'Lietojams vertikālā stāvoklī.',
          'Stiprināms augšpusē, uz leju karājas brīvi.',
          'Atverams ar auklas palīdzību.',
          'Var sastāvēt arī no divu veidu audumiem.',
        ],
        specs: {
          'Loga forma': 'Taisnstūra logi un durvis',
          'Stāvoklis': 'Vertikāli',
          'Stiprinājums': 'Augšpusē, brīvi karājas',
          'Vadība': 'Aukla',
          'Divu audumu kombinācija': 'Jā',
          'Maks. izmēri': 'Augstums 260 cm, platums 220 cm',
        },
        images: ['ras3.jpg', 'cosiflor_plissee_1rund2.jpg', 'Plise-F1-1024x610.jpg'],
      },
      {
        slug: 'sistema-f-slope',
        name: 'Sistēma F Slope 1, F Slope 2, FD Slope 3',
        short: 'Brīvi karājoša plisē logiem un durvīm ar slīpu augšmalu.',
        features: [
          'Modelis, kas paredzēts taisnstūra logu un durvju aprīkošanai, kuriem augšējā mala ir slīpa.',
          'Lietojams vertikālā stāvoklī.',
          'Stiprināms augšpusē, uz leju karājas brīvi.',
          'Atverams ar vienas vai divu auklu palīdzību.',
          'Var sastāvēt arī no divu veidu audumiem.',
        ],
        specs: {
          'Loga forma': 'Logi un durvis ar slīpu augšmalu',
          'Stāvoklis': 'Vertikāli',
          'Stiprinājums': 'Augšpusē, brīvi karājas',
          'Vadība': 'Viena vai divas auklas',
          'Divu audumu kombinācija': 'Jā',
          'Maks. izmēri': 'Augstums 260 cm, platums 150 cm',
        },
        images: ['ras4.jpg', '39-725x1024.jpg', 'Plise-trijsturis-1024x405.jpg', 'Plissee_Design_22-1024x682.jpg'],
      },
      {
        slug: 'sistema-df',
        name: 'Sistēma DF Comfort 10, DF 10, DF 20, DF 30',
        short: 'Maksimāls aizklājums taisnstūra logiem un durvīm.',
        features: [
          'Modelis, kas paredzēts taisnstūra logu un durvju aprīkošanai, lai panāktu maksimālu aizklājumu.',
          'Lietojams vertikālā vai slīpā stāvoklī.',
          'Stiprināms augšā un apakšā.',
          'Atverams ar ērta rokturīša palīdzību.',
          'Var sastāvēt arī no divu veidu audumiem.',
        ],
        specs: {
          'Loga forma': 'Taisnstūra logi un durvis',
          'Stāvoklis': 'Vertikāli vai slīpi',
          'Stiprinājums': 'Augšā un apakšā',
          'Vadība': 'Rokturītis',
          'Divu audumu kombinācija': 'Jā',
          'Maks. izmēri': 'Augstums 150 cm, platums 150 cm',
        },
        images: ['ras5.jpg', '161-550x1024.jpg', '351-582x1024.jpg', 'Plissee_Abdunklung_Wabe1-682x1024.jpg'],
      },
    ],
  },
  {
    id: 'jumta',
    title: 'Jumta un slīpiem logiem',
    teaser: 'Sistēmas slīpiem un jumta logiem ar rokturīti vai grozāmo kloķi.',
    systems: [
      {
        slug: 'sistema-pl20-pl33',
        name: 'Sistēma PL 20 – PL 33, PLK 30, PLE 30 – PLE 33',
        short: 'Trapecveida slīpiem un jumta logiem, ar rokturīti vai kloķi.',
        features: [
          'Modelis, kas paredzēts visdažādāko trapecveida logu aprīkošanai.',
          'Lietojams gan slīpiem, gan jumta logiem.',
          'Atverams ar ērta rokturīša palīdzību vai ar grozāmo kloķi.',
          'Stiprināms augšā un apakšā.',
        ],
        specs: {
          'Loga forma': 'Trapecveida logi',
          'Stāvoklis': 'Slīpi un jumta logi',
          'Stiprinājums': 'Augšā un apakšā',
          'Vadība': 'Rokturītis vai grozāmais kloķis',
          'Maks. izmēri': 'Augstums 200 cm, platums 150 cm',
        },
        images: ['ras7.jpg', '131-645x1024.jpg', '211-687x1024.jpg', 'cosiflor_plissee_5rund2.jpg', 'solarmatic-plissee-cosiflor-sonderform-verspannt.jpg'],
      },
      {
        slug: 'sistema-pl11',
        name: 'Sistēma PL 11, PLK 13, PLE 12',
        short: 'Taisnstūra slīpiem un jumta logiem līdz 400 cm augstumam.',
        features: [
          'Modelis, kas paredzēts taisnstūra logu aprīkošanai.',
          'Lietojams gan slīpiem, gan jumta logiem.',
          'Atverams ar ērta rokturīša palīdzību vai ar grozāmo kloķi.',
          'Stiprināms augšā un apakšā.',
        ],
        specs: {
          'Loga forma': 'Taisnstūra logi',
          'Stāvoklis': 'Slīpi un jumta logi',
          'Stiprinājums': 'Augšā un apakšā',
          'Vadība': 'Rokturītis vai grozāmais kloķis',
          'Maks. izmēri': 'Augstums 400 cm, platums 150 cm',
        },
        images: ['ras6.jpg', '162-550x1024.jpg', '777_somniop_559_longcrush_img_5317_2.jpg', '352-582x1024.jpg'],
      },
    ],
  },
  {
    id: 'formas',
    title: 'Speciālu formu logiem',
    teaser: 'Pusapļa, ceturtdaļapļa un trijstūra logi.',
    systems: [
      {
        slug: 'sistema-sd-sr-spd',
        name: 'Sistēma SD2, SD3, SR1, SR2, SPD2, SPD3',
        short: 'Pusapļa, ceturtdaļapļa un trijstūra logiem.',
        features: [
          'Modelis, kas paredzēts visdažādāko pusapļa, ceturtdaļapļa un trijstūra logu aprīkošanai.',
          'Lietojams vertikālā stāvoklī.',
          'Nav virināms.',
        ],
        specs: {
          'Loga forma': 'Pusapļa, ceturtdaļapļa, trijstūra logi',
          'Stāvoklis': 'Vertikāli',
          'Vadība': 'Fiksēta – nav virināms',
        },
        images: ['ras8.jpg', '91-438x1024.jpg', '221-446x1024.jpg', '27-619x1024.jpg'],
      },
    ],
  },
];

const ALL = GROUPS.flatMap((g) => g.systems.map((s) => ({ ...s, group: g })));
// First photo after the drawing is used as the cover image.
const cover = (s) => P + (s.images[1] || s.images[0]);

const OBJECTS = [
  { title: 'Privātmāja Spuņciemā', images: ['P1070765-1024x768.jpg', 'P1070766-1024x768.jpg', 'P1070769-1024x768.jpg', 'P1070771-1024x768.jpg'] },
  { title: 'Privātmāja Berģos', images: ['DSC_0080-680x1024.jpg', 'DSC_0081-680x1024.jpg', 'DSC_0082-680x1024.jpg', 'DSC_0084-1024x680.jpg', 'DSC_0085-680x1024.jpg'] },
  { title: 'Dzīvoklis Vecrīgā', images: ['DSC02834-768x1024.jpg', 'DSC02838-768x1024.jpg', 'DSC02845-1024x768.jpg'] },
  { title: 'Dzīvoklis Centra namā', images: ['DSC030591-1024x804.jpg', 'DSC030621-768x1024.jpg', 'DSC030651-1024x768.jpg', 'DSC030611-768x1024.jpg'] },
];
const O = 'assets/img/objects/';

const PARTNERS = [
  { name: 'KATE', logo: 'kate.jpg', type: 'Interjera salons', places: ['Nīcgales iela 18a'] },
  { name: 'Alan LTD', logo: '1_1.jpeg', type: 'Aizkaru salons', places: ['t/c SPICE HOME', 't/c MOLS', 't/c ALFA', 't/c Domina', 't/c OLYMPIA', 't/c SKY&MORE'] },
  { name: 'MEKA', logo: 'meka1-115x82.jpg', type: 'Aizkaru salons', places: ['Miera iela 29', 'Kr. Barona iela 49', 't/c SPICE HOME'] },
  { name: 'INTĒRIJA', logo: 'interija.jpg', type: 'Aizkaru salons', places: ['Tērbatas iela 59/61'] },
  { name: 'SIENA', logo: 'interjera-salons-siena-l-l.jpg', type: 'Aizkaru salons', places: ['t/c SPICE HOME', 't/c ALFA', 'Dzirnavu iela 45/47'] },
  { name: 'MULTISELL SISTĒMAS', logo: 'png.png', type: 'Aizkaru salons', places: ['Brīvības iela 155/1. korpuss'] },
  { name: 'Rabata', type: 'Aizkaru salons', places: ['Rūpniecības iela 32b'] },
  { name: 'Balts LTD', type: 'Aizkaru salons', places: [] },
  { name: 'VIIK', logo: 'viik.jpg', type: 'Partneris', places: ['Čiekurkalna 1. līnija 84'] },
  { name: 'Ticians', logo: 'lv.png', type: 'Aizkaru salons', places: ['Stabu iela 47'] },
  { name: 'Zeize', type: 'Partneris', places: ['Rūpniecības iela 17, Rīga', 'Dārzu iela 30, Rēzekne'] },
];

const HERO = [
  { img: 'assets/img/hero/Plissee_Design_1.jpg', title: 'Plisē sistēmas jebkuras formas logiem', text: 'Funkcionalitāte un estētika, kas ieņem vadošo vietu starptautiskajā tirgū.' },
  { img: 'assets/img/hero/duette-farbig.jpg', title: 'Divu audumu kombinācijas', text: 'Gaisma, privātums un aptumšojums vienā sistēmā.' },
  { img: 'assets/img/hero/Plissee_Uni_2.jpg', title: 'Jumta un slīpie logi', text: 'Risinājumi ar rokturīti vai grozāmo kloķi līdz 400 cm augstumam.' },
  { img: 'assets/img/hero/Plissee_Abdunklung_Wabe11.jpg', title: 'Speciālas formas', text: 'Pusapļa, ceturtdaļapļa un trijstūra logi.' },
];

// ---------- Partials ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function head(title) {
  return `<!doctype html>
<html lang="lv">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} | ${SITE.name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>`;
}

function header(active) {
  const cls = (k) => (k === active ? ' class="is-active"' : '');
  const productSub = GROUPS.map(
    (g) => `<li class="sub-label">${g.title}</li>` + g.systems.map((s) => `<li><a href="${s.slug}.html">${s.name}</a></li>`).join('')
  ).join('');
  return `
<div class="topbar">
  <div class="container">
    <div class="topbar__contact">
      <a href="tel:+371${SITE.phone}">Tel. ${SITE.phone}</a>
      <a href="tel:+371${SITE.mobile}">Mob. ${SITE.mobile}</a>
      <a href="mailto:${SITE.email}">${SITE.email}</a>
    </div>
    <div class="lang"><a href="index.html" class="is-active">LV</a><a href="#">EN</a><a href="#">RU</a></div>
  </div>
</div>
<header class="header">
  <div class="container">
    <a class="header__logo" href="index.html"><img src="assets/img/logo.webp" alt="${SITE.name}"></a>
    <button class="nav-toggle" aria-label="Izvēlne">☰</button>
    <nav class="nav">
      <ul>
        <li${cls('home')}><a href="index.html">Sākums</a></li>
        <li${cls('company')}><a href="par-mums.html">Uzņēmums</a>
          <ul class="sub">
            <li><a href="par-mums.html">Par mums</a></li>
            <li><a href="objekti.html">Objekti</a></li>
            <li><a href="sadarbibas-partneri.html">Sadarbības partneri</a></li>
          </ul>
        </li>
        <li${cls('products')}><a href="produkcija.html">Produkcija</a>
          <ul class="sub">${productSub}</ul>
        </li>
        <li${cls('prices')}><a href="cenradis.html">Cenrādis</a></li>
        <li${cls('objects')}><a href="objekti.html">Objekti</a></li>
        <li${cls('partners')}><a href="sadarbibas-partneri.html">Partneri</a></li>
        <li${cls('contact')}><a href="kontakti.html">Kontakti</a></li>
      </ul>
    </nav>
  </div>
</header>`;
}

function footer() {
  return `
<footer class="footer">
  <div class="container">
    <div>
      <img class="footer__logo" src="assets/img/logo.webp" alt="${SITE.name}">
      <p>Plisē sistēmas augstākajā kvalitātē – logu aizsegi un tehniski risinājumi.</p>
    </div>
    <div>
      <h4>Kontakti</h4>
      <ul>
        <li>${SITE.address}</li>
        <li><a href="tel:+371${SITE.phone}">Tel. ${SITE.phone}</a></li>
        <li><a href="tel:+371${SITE.mobile}">Mob. ${SITE.mobile}</a></li>
        <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
      </ul>
    </div>
    <div>
      <h4>Produkcija</h4>
      <ul>${GROUPS.map((g) => `<li><a href="produkcija.html#${g.id}">${g.title}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h4>Uzņēmums</h4>
      <ul>
        <li><a href="par-mums.html">Par mums</a></li>
        <li><a href="objekti.html">Objekti</a></li>
        <li><a href="sadarbibas-partneri.html">Sadarbības partneri</a></li>
        <li><a href="kontakti.html">Kontakti</a></li>
      </ul>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="container">
      <span>© ${new Date().getFullYear()} ${SITE.name}</span>
      <span><a href="#">Privātuma politika</a> · <a href="#">Rekvizīti</a></span>
    </div>
  </div>
</footer>
<a href="#" class="to-top" aria-label="Uz augšu">↑</a>
<script src="assets/js/main.js"></script>
</body>
</html>`;
}

function breadcrumb(items) {
  const parts = [`<a href="index.html">Sākums</a>`, ...items.map(([label, href]) => (href ? `<a href="${href}">${label}</a>` : `<span>${label}</span>`))];
  return `<div class="breadcrumb"><div class="container">Jūs esat šeit: ${parts.join('<span class="sep">/</span>')}</div></div>`;
}

function banner(img) {
  return `<div class="page-banner" style="background-image:url('${img}')"></div>`;
}

// Right-side sub-navigation, as on bloecker.de deeper pages.
function productSidebar(activeSlug) {
  const groups = GROUPS.map(
    (g) => `<li><a href="produkcija.html#${g.id}">${g.title}</a>
        <ul>${g.systems.map((s) => `<li${s.slug === activeSlug ? ' class="is-active"' : ''}><a href="${s.slug}.html">${s.name}</a></li>`).join('')}</ul>
      </li>`
  ).join('');
  return `<aside class="sidebar">
    <h4>Produkcija</h4>
    <ul>
      <li${activeSlug === 'all' ? ' class="is-active"' : ''}><a href="produkcija.html">Visas plisē sistēmas</a></li>
      ${groups}
      <li${activeSlug === 'prices' ? ' class="is-active"' : ''}><a href="cenradis.html">Cenrādis un kalkulators</a></li>
      <li><a href="objekti.html">Objekti</a></li>
    </ul>
    ${sideCta()}
  </aside>`;
}

function companySidebar(active) {
  const items = [
    ['about', 'par-mums.html', 'Par mums'],
    ['objects', 'objekti.html', 'Objekti'],
    ['partners', 'sadarbibas-partneri.html', 'Sadarbības partneri'],
    ['contact', 'kontakti.html', 'Kontakti'],
  ];
  return `<aside class="sidebar">
    <h4>Uzņēmums</h4>
    <ul>${items.map(([k, h, l]) => `<li${k === active ? ' class="is-active"' : ''}><a href="${h}">${l}</a></li>`).join('')}</ul>
    ${sideCta()}
  </aside>`;
}

function sideCta() {
  return `<div class="side-cta"><p>Nepieciešams piedāvājums vai konsultācija?</p><a class="btn" href="kontakti.html">Sazināties</a></div>`;
}

const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>',
  shop: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M4 9l1.5-5h13L20 9"/><path d="M4 9h16v2a3 3 0 01-6 0 2 2 0 01-4 0 3 3 0 01-6 0z"/><path d="M5 13v7h14v-7"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><rect x="5" y="3" width="14" height="18"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg>',
};

// ---------- Pages ----------
const pages = {};

pages['index.html'] = head('Plisē sistēmas') + header('home') + `
<section class="hero">
  ${HERO.map((h, i) => `<div class="hero__slide${i === 0 ? ' is-active' : ''}" style="background-image:url('${h.img}')">
    <div class="hero__caption"><div class="container">
      <${i === 0 ? 'h1' : 'h2'} class="hero__title">${h.title}</${i === 0 ? 'h1' : 'h2'}>
      <p>${h.text}</p>
      <a class="btn" href="produkcija.html">Produkcija</a>
    </div></div>
  </div>`).join('')}
  <div class="hero__dots"></div>
</section>

<div class="promo"><div class="container">
  <div><strong>Plisē sistēmas jebkuram logam</strong><br><span>Vertikāliem, jumta un speciālu formu logiem – arī ar divu audumu kombināciju.</span></div>
  <a class="btn" href="produkcija.html">Skatīt sistēmas</a>
</div></div>

<section class="section">
  <div class="container">
    <h2 class="section-title">Produkcija</h2>
    <div class="teasers">
      ${[ALL[0], ALL[2], ALL[5], ALL[7]]
        .map((s) => `<a class="teaser" href="${s.slug}.html">
        <div class="teaser__img"><img src="${cover(s)}" alt="${esc(s.name)}" loading="lazy"></div>
        <div class="teaser__body"><h3>${s.name}</h3><p>${s.short}</p></div>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <h2 class="section-title">Izvēlieties kategoriju</h2>
    <div class="audience">
      <a href="produkcija.html">${ICONS.home}<h3>Privātpersonām</h3><p>Plisē sistēmas mājai un dzīvoklim.</p></a>
      <a href="sadarbibas-partneri.html">${ICONS.shop}<h3>Salonu partneriem</h3><p>Sadarbība ar interjera un aizkaru saloniem.</p></a>
      <a href="objekti.html">${ICONS.building}<h3>Objektiem</h3><p>Realizētie projekti privātmājās un dzīvokļos.</p></a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2 class="section-title">Objekti</h2>
    <div class="cards">
      ${OBJECTS.slice(0, 3).map((o) => `<div class="card"><img src="${O + o.images[0]}" alt="${o.title}" loading="lazy"><div class="card__body"><h3>${o.title}</h3><a class="more" href="objekti.html">Skatīt ›</a></div></div>`).join('')}
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <h2 class="section-title">Pakalpojumi</h2>
    <div class="services">
      <a href="kontakti.html">Kontakti</a>
      <a href="sadarbibas-partneri.html">Sadarbības partneri</a>
      <a href="kontakti.html#forma">Pieprasīt piedāvājumu</a>
    </div>
  </div>
</section>
` + footer();

pages['produkcija.html'] = head('Produkcija') + header('products') + banner('assets/img/hero/Plissee_Design_1.jpg') +
  breadcrumb([['Produkcija']]) + `
<div class="container layout">
  <main class="content">
    <h1>Plisē sistēmas</h1>
    <p class="lead">Mēs izgatavojam plisē sistēmas augstākajā kvalitātē – vertikāliem logiem un durvīm, jumta un slīpiem logiem, kā arī speciālu formu logiem.</p>
    ${GROUPS.map((g) => `
    <h2 class="group-title" id="${g.id}">${g.title}</h2>
    <div class="product-list">
      ${g.systems.map((s) => `<div class="product-row">
        <a href="${s.slug}.html"><img src="${cover(s)}" alt="${esc(s.name)}" loading="lazy"></a>
        <div>
          <h3><a href="${s.slug}.html">${s.name}</a></h3>
          <div class="meta">${s.specs['Maks. izmēri'] || ''}</div>
          <p>${s.short}</p>
          <a class="btn btn--ghost" href="${s.slug}.html">Tehniskā informācija</a>
        </div>
      </div>`).join('')}
    </div>`).join('')}
  </main>
  ${productSidebar('all')}
</div>` + footer();

for (const s of ALL) {
  pages[`${s.slug}.html`] = head(s.name) + header('products') + banner(cover(s)) +
    breadcrumb([['Produkcija', 'produkcija.html'], [s.group.title, `produkcija.html#${s.group.id}`], [s.name]]) + `
<div class="container layout">
  <main class="content">
    <h1>${s.name}</h1>
    <p class="lead">${s.short}</p>
    <h3>Tehniskā informācija</h3>
    <table class="specs">
      ${Object.entries(s.specs).map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join('')}
    </table>
    <h3>Īpašības</h3>
    <ul class="features">${s.features.map((f) => `<li>${f}</li>`).join('')}</ul>
    <h3>Attēli</h3>
    <div class="gallery">
      ${s.images.map((f) => `<a href="${P + f}"><img src="${P + f}" alt="${esc(s.name)}" loading="lazy"></a>`).join('')}
    </div>
    <div class="cta-box"><p>Vēlaties šo sistēmu savam logam? Sazinieties ar mums.</p><a class="btn" href="kontakti.html#forma">Pieprasīt piedāvājumu</a></div>
  </main>
  ${productSidebar(s.slug)}
</div>` + footer();
}

// Price list: only verified data (systems, max sizes, options). Prices are not known yet –
// fill `PRICES[slug]` (EUR per m²) when the client provides them; the calculator picks them up.
const PRICES = Object.fromEntries(ALL.map((s) => [s.slug, null]));
const maxSize = (s) => {
  const m = /Augstums (\d+) cm, platums (\d+) cm/.exec(s.specs['Maks. izmēri'] || '');
  return m ? { h: +m[1], w: +m[2] } : null;
};
const CALC_DATA = ALL.map((s) => ({
  slug: s.slug,
  name: s.name,
  group: s.group.title,
  max: maxSize(s),
  dual: s.specs['Divu audumu kombinācija'] === 'Jā',
  control: s.specs['Vadība'] || '',
  price: PRICES[s.slug],
}));

pages['cenradis.html'] = head('Cenrādis') + header('prices') + banner('assets/img/hero/Plissee_Uni_2.jpg') +
  breadcrumb([['Produkcija', 'produkcija.html'], ['Cenrādis']]) + `
<div class="container layout">
  <main class="content">
    <h1>Cenrādis</h1>
    <p class="lead">Plisē sistēmu cenas tiks pievienotas drīzumā. Līdz tam izmantojiet kalkulatoru, lai pārbaudītu, vai jūsu loga izmēri atbilst sistēmai, un pieprasiet piedāvājumu.</p>

    <h2 class="group-title">Cenu kalkulators</h2>
    <div class="calc">
      <form class="form calc__form" id="calc">
        <label for="c-system">Sistēma</label>
        <select id="c-system">
          ${GROUPS.map((g) => `<optgroup label="${g.title}">${g.systems.map((s) => `<option value="${s.slug}">${s.name}</option>`).join('')}</optgroup>`).join('')}
        </select>
        <div class="calc__row">
          <div><label for="c-width">Platums (cm)</label><input id="c-width" type="number" min="1" step="1" placeholder="piem. 80"></div>
          <div><label for="c-height">Augstums (cm)</label><input id="c-height" type="number" min="1" step="1" placeholder="piem. 120"></div>
          <div><label for="c-qty">Skaits</label><input id="c-qty" type="number" min="1" step="1" value="1"></div>
        </div>
        <label class="calc__check" id="c-dual-wrap"><input id="c-dual" type="checkbox"> Divu audumu kombinācija</label>
      </form>
      <div class="calc__result" aria-live="polite">
        <dl>
          <dt>Sistēma</dt><dd id="r-system">–</dd>
          <dt>Maks. izmēri</dt><dd id="r-max">–</dd>
          <dt>Vadība</dt><dd id="r-control">–</dd>
          <dt>Platība</dt><dd id="r-area">–</dd>
        </dl>
        <p class="calc__msg" id="r-msg"></p>
        <div class="calc__price"><span>Cena</span><strong id="r-price">Tiks pievienota vēlāk</strong></div>
        <a class="btn" id="r-cta" href="kontakti.html#forma">Pieprasīt piedāvājumu</a>
      </div>
    </div>

    <h2 class="group-title">Cenrādis</h2>
    <table class="specs price-table">
      <thead><tr><th>Sistēma</th><th>Maks. izmēri</th><th>Divi audumi</th><th>Cena</th></tr></thead>
      <tbody>
        ${GROUPS.map((g) => `<tr class="price-table__group"><td colspan="4">${g.title}</td></tr>` + g.systems.map((s) => {
          const m = maxSize(s);
          return `<tr><td><a href="${s.slug}.html">${s.name}</a></td><td>${m ? `${m.h} × ${m.w} cm` : '–'}</td><td>${s.specs['Divu audumu kombinācija'] === 'Jā' ? 'Jā' : '–'}</td><td class="muted">${PRICES[s.slug] != null ? `no ${PRICES[s.slug]} € / m²` : 'Tiks pievienota'}</td></tr>`;
        }).join('')).join('')}
      </tbody>
    </table>
    <p class="note">Maks. izmēri norādīti kā augstums × platums.</p>
  </main>
  ${productSidebar('prices')}
</div>
<script>window.CALC_DATA = ${JSON.stringify(CALC_DATA)};</script>
<script src="assets/js/calc.js"></script>` + footer();

pages['par-mums.html'] = head('Par mums') + header('company') + banner('assets/img/hero/plissee011.jpg') +
  breadcrumb([['Uzņēmums', 'par-mums.html'], ['Par mums']]) + `
<div class="container layout">
  <main class="content">
    <h1>Par mums</h1>
    <p class="lead">PLISĒ DEKO ir uzņēmums ar lielu kompetenci savā jomā. Mēs sevi redzam kā speciālistus logu aizsegu un tehnisko risinājumu jomā arī nākotnē.</p>
    <div class="values">
      <div><h3>Galvenais mums</h3><p>Mēs izgatavojam plisē sistēmas augstākajā kvalitātē. Mūsu mērķis ir popularizēt un tirgot šīs unikālās sistēmas, kuras pēc funkcionalitātes un estētiskuma ieņem vadošo vietu starptautiskajā tirgū.</p></div>
      <div><h3>Galvenais klientiem</h3><p>Piedāvājot savus pakalpojumus, mēs uzturam godīgas partnerattiecības ar saviem klientiem. Mūsu produkts un mūsu serviss viņiem palīdz veidot labvēlīgu vidi biznesā.</p></div>
      <div><h3>Atbildība</h3><p>Mūsu atbildība par kvalitāti nostiprina arī savstarpējo uzticību.</p></div>
    </div>
  </main>
  ${companySidebar('about')}
</div>` + footer();

pages['objekti.html'] = head('Objekti') + header('objects') + banner(O + OBJECTS[0].images[0]) +
  breadcrumb([['Uzņēmums', 'par-mums.html'], ['Objekti']]) + `
<div class="container layout">
  <main class="content">
    <h1>Objekti</h1>
    <p class="lead">Mūsu realizētie projekti privātmājās un dzīvokļos.</p>
    ${OBJECTS.map((o) => `<h2 class="group-title">${o.title}</h2>
    <div class="gallery">${o.images.map((f) => `<a href="${O + f}"><img src="${O + f}" alt="${o.title}" loading="lazy"></a>`).join('')}</div>`).join('')}
  </main>
  ${companySidebar('objects')}
</div>` + footer();

pages['sadarbibas-partneri.html'] = head('Sadarbības partneri') + header('partners') + banner('assets/img/hero/Plissee_Uni_2.jpg') +
  breadcrumb([['Uzņēmums', 'par-mums.html'], ['Sadarbības partneri']]) + `
<div class="container layout">
  <main class="content">
    <h1>Sadarbības partneri</h1>
    <p class="lead">Mūsu plisē sistēmas iespējams iegādāties pie šiem partneriem.</p>
    <div class="partners">
      ${PARTNERS.map((p) => `<div class="partner"><div class="partner__logo">${p.logo ? `<img src="assets/img/partners/${p.logo}" alt="${esc(p.name)}" loading="lazy">` : `<span>${esc(p.name)}</span>`}</div><span class="type">${p.type}</span><h3>${esc(p.name)}</h3>${p.places.length ? `<ul>${p.places.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</div>`).join('')}
    </div>
  </main>
  ${companySidebar('partners')}
</div>` + footer();

pages['kontakti.html'] = head('Kontakti') + header('contact') + banner('assets/img/hero/duette-farbig.jpg') +
  breadcrumb([['Kontakti']]) + `
<div class="container layout">
  <main class="content">
    <h1>Kontakti</h1>
    <div class="contact-grid">
      <dl>
        <dt>Adrese</dt><dd>${SITE.address}</dd>
        <dt>Tālrunis</dt><dd><a href="tel:+371${SITE.phone}">${SITE.phone}</a></dd>
        <dt>Mobilais</dt><dd><a href="tel:+371${SITE.mobile}">${SITE.mobile}</a></dd>
        <dt>E-pasts</dt><dd><a href="mailto:${SITE.email}">${SITE.email}</a></dd>
        <dt>Darba laiks</dt><dd>[jāpapildina]</dd>
      </dl>
      <form class="form" id="forma" action="mailto:${SITE.email}" method="post" enctype="text/plain">
        <h3>Pieprasīt piedāvājumu</h3>
        <label for="f-name">Vārds</label><input id="f-name" name="vards">
        <label for="f-email">E-pasts</label><input id="f-email" name="epasts" type="email">
        <label for="f-phone">Tālrunis</label><input id="f-phone" name="talrunis">
        <label for="f-msg">Ziņa (loga izmēri, sistēma)</label><textarea id="f-msg" name="zina" rows="5"></textarea>
        <button class="btn" type="submit">Nosūtīt</button>
      </form>
    </div>
    <iframe class="map" src="${SITE.map}" loading="lazy" title="Karte"></iframe>
  </main>
  ${companySidebar('contact')}
</div>` + footer();

for (const [file, html] of Object.entries(pages)) writeFileSync(new URL(file, import.meta.url), html);
console.log(`Built ${Object.keys(pages).length} pages.`);
