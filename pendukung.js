// Materi pendukung soal: gambar SVG dan teks kasus untuk kuis Manajemen Risiko.
// Pemakaian di bank soal (fig: "<nama>" atau "<nama>:<varian>"):
//   tangga | tangga:polos     → Uncertainty → Risk → Problem → Crisis → Disaster (polos = tanpa label manajemen)
//   venn                      → risk sebagai bagian dari uncertainty
//   waktu                     → jeda waktu antara keputusan (sekarang) dan sasaran (masa depan)
//   iso31000 | iso31000:q     → arsitektur principles–framework–process (q = nama komponen disembunyikan)
//   prinsip | prinsip:c       → 8 prinsip ISO 31000:2018 (c = tujuan di pusat disembunyikan)
//   coso2017                  → 5 komponen COSO ERM 2017
//   coso2004 | coso2004:atas  → kubus COSO ERM 2004 (atas = kategori sasaran disembunyikan)
//   silo                      → pendekatan silo vs ERM
//   board:two | board:two-q | board:one → struktur dewan (two-q = alur Dekom→Direksi disembunyikan)
//   kpikri | kpikri:polos     → peran kritis dewan: peluang/ancaman, KPI/KRI (polos = tanpa definisi upside/downside)
//   interlink | interlink:q   → keterkaitan CG & RM, Alijoyo 2010 (q = panah bawah disembunyikan)
// Teks kasus: window.KASUS[key] = { title, text }
(function () {
  "use strict";

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function r1(n) { return Math.round(n * 10) / 10; }
  function svg(w, h, body, label, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 ' + w + " " + h + '" width="' + w + '" height="' + h +
      '" role="img" aria-label="' + esc(label || "") + '" xmlns="http://www.w3.org/2000/svg">' + body + "</svg>";
  }
  function t(x, y, s, cls, extra) { return '<text class="' + cls + '" x="' + x + '" y="' + y + '"' + (extra || "") + ">" + esc(s) + "</text>"; }
  function ml(x, y, arr, cls, lh) { return arr.map(function (s, i) { return t(x, y + i * (lh || 17), s, cls); }).join(""); }
  function rect(x, y, w, h, cls, rx) { return '<rect class="' + cls + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx == null ? 8 : rx) + '"/>'; }
  function ln(x1, y1, x2, y2, cls) { return '<line class="' + (cls || "g-ln") + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>'; }
  function arrow(x1, y1, x2, y2, cls) {
    var a = Math.atan2(y2 - y1, x2 - x1), s = 9;
    var p1 = r1(x2 - s * Math.cos(a - 0.45)) + "," + r1(y2 - s * Math.sin(a - 0.45));
    var p2 = r1(x2 - s * Math.cos(a + 0.45)) + "," + r1(y2 - s * Math.sin(a + 0.45));
    return ln(x1, y1, x2, y2, cls) + '<polygon class="g-ah" points="' + x2 + "," + y2 + " " + p1 + " " + p2 + '"/>';
  }

  /* ---------- Topik 1 ---------- */
  function tangga(v) {
    var st = [["Uncertainty", "Ketidakpastian", "g-s0", "g-wt"], ["Risk", "Risiko", "g-s1", "g-dt"], ["Problem", "Masalah", "g-s2", "g-wt"],
      ["Crisis", "Krisis", "g-s3", "g-wt"], ["Disaster", "Bencana", "g-s4", "g-wt"]];
    var mg = [["selalu ada", "di sekitar kita"], ["Risk", "Management"], ["Problem", "Management"], ["Crisis", "Management"], ["Disaster", "Recovery"]];
    var x0 = 10, w = 134, gap = 28, y = 56, h = 60, b = "";
    var xEnd2 = x0 + 2 * w + gap, xStart3 = x0 + 2 * (w + gap), xEnd = x0 + 5 * w + 4 * gap;
    b += ln(x0, 40, xEnd2, 40) + ln(x0, 40, x0, 48) + ln(xEnd2, 40, xEnd2, 48);
    b += t((x0 + xEnd2) / 2, 30, "belum terjadi (masa depan)", "g-ts");
    b += ln(xStart3, 40, xEnd, 40) + ln(xStart3, 40, xStart3, 48) + ln(xEnd, 40, xEnd, 48);
    b += t((xStart3 + xEnd) / 2, 30, "sedang / sudah terjadi (realita)", "g-ts");
    st.forEach(function (s, i) {
      var x = x0 + i * (w + gap);
      b += rect(x, y, w, h, s[2], 8);
      b += t(x + w / 2, y + 26, s[0], s[3] + " g-big");
      b += t(x + w / 2, y + 46, s[1], s[3]);
      if (i < 4) b += arrow(x + w + 3, y + h / 2, x + w + gap - 3, y + h / 2);
      if (v !== "polos") b += ml(x + w / 2, y + h + 24, mg[i], i === 0 ? "g-ts" : "g-acc-t", 17);
    });
    if (v !== "polos") b += t(xEnd / 2 + 5, 196, "Disaster tidak bisa di-manage, hanya bisa dipulihkan (tidak ada “disaster management”).", "g-ts");
    return svg(xEnd + 10, v === "polos" ? 130 : 210, b, "Tangga uncertainty, risk, problem, crisis, disaster", "wide");
  }

  function venn() {
    var b = '<ellipse class="g-box" cx="280" cy="142" rx="262" ry="128"/>';
    b += t(280, 44, "UNCERTAINTIES (ketidakpastian)", "g-tb");
    b += t(280, 63, "selalu terjadi di dunia sekitar kita", "g-ts");
    b += '<ellipse class="g-soft" cx="345" cy="165" rx="118" ry="70"/>';
    b += t(345, 148, "RISK", "g-acc-t");
    b += ml(345, 170, ["ketidakpastian yang dapat", "memengaruhi sasaran"], "g-t", 18);
    b += ml(118, 134, ["ketidakpastian lain yang", "tidak signifikan bagi", "sasaran → bukan risiko"], "g-ts", 16);
    return svg(560, 285, b, "Diagram: risk adalah bagian dari uncertainty");
  }

  function waktu() {
    var b = rect(10, 46, 170, 72, "g-soft", 10);
    b += t(95, 76, "Keputusan", "g-tb") + t(95, 97, "saat ini (present)", "g-ts");
    b += rect(470, 46, 170, 72, "g-soft", 10);
    b += t(555, 76, "Sasaran (objectives)", "g-tb") + t(555, 97, "masa depan (future)", "g-ts");
    b += arrow(186, 82, 464, 82);
    b += t(325, 70, "jeda waktu (time interval)", "g-acc-t");
    b += t(250, 110, "?", "g-big-q") + t(325, 118, "?", "g-big-q") + t(400, 110, "?", "g-big-q");
    b += t(325, 145, "banyak ketidakpastian di dalam jeda waktu ini", "g-ts");
    return svg(650, 160, b, "Jeda waktu antara keputusan dan sasaran");
  }

  /* ---------- Topik 2 ---------- */
  function silo() {
    var units = ["Keuangan", "Operasional", "Pemasaran", "TI"], b = "";
    b += t(190, 22, "Pendekatan silo (tradisional)", "g-tb");
    units.forEach(function (u, i) {
      var x = 14 + i * 89;
      b += rect(x, 38, 80, 196, "g-box", 6) + t(x + 40, 60, u, "g-tx");
      b += rect(x + 8, 150, 64, 46, "g-soft", 6) + ml(x + 40, 169, ["risiko", "sendiri"], "g-tx", 15);
    });
    b += t(190, 252, "tiap unit mengelola risikonya sendiri", "g-ts");
    b += ln(390, 20, 390, 255, "g-sep");
    b += t(590, 22, "Enterprise Risk Management", "g-tb");
    b += rect(414, 36, 352, 34, "g-soft", 6) + t(590, 58, "Direksi & Dewan · strategi dan sasaran", "g-acc-t");
    units.forEach(function (u, i) {
      var x = 414 + i * 89;
      b += rect(x, 80, 80, 154, "g-box", 6) + t(x + 40, 102, u, "g-tx");
    });
    b += rect(406, 150, 368, 46, "g-soft", 8) + t(590, 170, "portofolio risiko terintegrasi", "g-acc-t") + t(590, 187, "lintas unit, dikaitkan dengan sasaran", "g-ts");
    b += arrow(590, 148, 590, 74);
    b += t(590, 252, "risiko dilihat utuh, termasuk efek gabungannya", "g-ts");
    return svg(780, 262, b, "Pendekatan silo dibandingkan ERM", "wide");
  }

  function coso2017() {
    var C = [["Governance", "& Culture"], ["Strategy &", "Objective-Setting"], ["Performance"], ["Review", "& Revision"], ["Information,", "Communication", "& Reporting"]];
    var b = rect(10, 10, 764, 36, "g-soft", 8);
    b += t(392, 33, "Mission, Vision & Core Values  →  strategi  →  sasaran bisnis  →  kinerja  →  Enhanced Value", "g-acc-t");
    C.forEach(function (c, i) {
      var x = 10 + i * 154;
      b += rect(x, 60, 148, 84, "g-box", 8);
      b += ml(x + 74, 102 - (c.length - 1) * 9, c, "g-t", 18);
    });
    b += t(392, 168, "5 komponen yang saling terkait, dijabarkan menjadi 20 prinsip", "g-ts");
    return svg(784, 180, b, "Lima komponen COSO ERM 2017", "wide");
  }

  function coso2004(v) {
    var comps = ["Internal Environment", "Objective Setting", "Event Identification", "Risk Assessment", "Risk Response", "Control Activities", "Information & Communication", "Monitoring"];
    var objs = ["Strategic", "Operations", "Reporting", "Compliance"];
    var lv = ["Entity-Level", "Division", "Business Unit", "Subsidiary"];
    var b = '<polygon class="g-soft" points="40,110 340,110 420,40 120,40"/>';
    b += '<polygon class="g-box" points="340,110 420,40 420,280 340,350"/>';
    b += rect(40, 110, 300, 240, "g-box", 0);
    var k;
    for (k = 1; k < 4; k++) b += ln(40 + 75 * k, 110, 120 + 75 * k, 40, "g-sep");
    for (k = 0; k < 4; k++) b += t(117.5 + 75 * k, 80, v === "atas" ? "?" : objs[k], v === "atas" ? "g-acc-t" : "g-tx");
    for (k = 1; k < 8; k++) b += ln(40, 110 + 30 * k, 340, 110 + 30 * k, "g-sep");
    comps.forEach(function (c, i) { b += t(190, 130 + 30 * i, c, "g-tx"); });
    for (k = 1; k < 4; k++) b += ln(340 + 20 * k, 110 - 17.5 * k, 340 + 20 * k, 350 - 17.5 * k, "g-sep");
    lv.forEach(function (c, i) {
      var cx = 350 + 20 * i, cy = r1(221 - 17.5 * i);
      b += t(cx, cy + 4, c, "g-tx", ' transform="rotate(-90 ' + cx + " " + cy + ')"');
    });
    b += t(230, 24, "Kategori sasaran (objectives)", "g-ts");
    b += t(22, 230, "8 komponen", "g-ts", ' transform="rotate(-90 22 230)"');
    b += t(442, 160, "Tingkat entitas", "g-ts", ' transform="rotate(-90 442 160)"');
    return svg(470, 362, b, "Kubus COSO ERM 2004");
  }

  /* ---------- Topik 4 ---------- */
  function iso31000(v) {
    var cols = [
      ["Principles", "Clause 4", ["Value creation & protection", "+ 8 prinsip: integrated;", "structured & comprehensive;", "customized; inclusive;", "dynamic; best available", "information; human &", "cultural factors; continual", "improvement"]],
      ["Framework", "Clause 5", ["Leadership & commitment", "(di pusat), dikelilingi:", "• Integration", "• Design", "• Implementation", "• Evaluation", "• Improvement"]],
      ["Process", "Clause 6", ["Communication & consultation", "Scope, context, criteria", "Risk assessment:", "  identification, analysis,", "  evaluation", "Risk treatment", "Monitoring & review", "Recording & reporting"]]
    ];
    var b = "";
    cols.forEach(function (c, i) {
      var x = 10 + i * 262;
      b += rect(x, 10, 250, 236, "g-box", 10);
      b += rect(x, 10, 250, 52, "g-soft", 10);
      if (v === "q") b += t(x + 125, 44, "Komponen " + (i + 1) + ": ?", "g-tb");
      else b += t(x + 125, 36, c[0], "g-tb") + t(x + 125, 54, c[1], "g-ts");
      b += ml(x + 14, 86, c[2], "g-tl", 19);
    });
    b += t(398, 270, "landasan  →  integrasi ke organisasi  →  diterapkan sistematis di semua tingkat", "g-ts");
    return svg(796, 282, b, "Arsitektur ISO 31000:2018", "wide");
  }

  function prinsip(v) {
    var P = [["Integrated"], ["Structured and", "comprehensive"], ["Customized"], ["Inclusive"], ["Dynamic"], ["Best available", "information"], ["Human and", "cultural factors"], ["Continual", "improvement"]];
    var cx = 325, cy = 190, b = "";
    P.forEach(function (p, i) {
      var a = (-90 + i * 45) * Math.PI / 180;
      var x = r1(cx + 235 * Math.cos(a)), y = r1(cy + 150 * Math.sin(a));
      b += ln(r1(cx + 74 * Math.cos(a)), r1(cy + 74 * Math.sin(a)), r1(cx + 175 * Math.cos(a)), r1(cy + 110 * Math.sin(a)), "g-sep");
      b += rect(r1(x - 80), r1(y - 24), 160, 48, "g-box", 8);
      b += ml(x, r1(y + 5 - (p.length - 1) * 8.5), p, "g-t", 17);
    });
    b += '<circle class="g-soft" cx="' + cx + '" cy="' + cy + '" r="74"/>';
    if (v === "c") b += t(cx, cy + 9, "?", "g-big-q");
    else b += ml(cx, cy - 6, ["Value creation", "and protection"], "g-acc-t", 18);
    return svg(650, 380, b, "Delapan prinsip ISO 31000:2018");
  }

  /* ---------- Topik 5 ---------- */
  function board(v) {
    var b = "";
    if (v === "one") {
      b += rect(150, 10, 260, 46, "g-box") + t(280, 39, "Shareholders (pemegang saham)", "g-tb");
      b += arrow(250, 58, 250, 98) + t(242, 82, "appointment & review", "g-te");
      b += arrow(310, 98, 310, 58) + t(318, 82, "reporting & accountability", "g-tl");
      b += rect(100, 100, 360, 152, "g-box", 10) + t(280, 120, "Board of Directors (satu dewan)", "g-tb");
      b += rect(120, 132, 320, 50, "g-soft") + t(280, 152, "Non-executive directors · Chairman", "g-t") + t(280, 171, "outsiders · fungsi pengawasan", "g-ts");
      b += rect(120, 192, 320, 50, "g-soft") + t(280, 212, "Executive directors · CEO", "g-t") + t(280, 231, "insiders · manajemen", "g-ts");
      b += arrow(280, 254, 280, 286);
      b += rect(150, 288, 260, 40, "g-dashbox") + t(280, 313, "Managers / administrators", "g-t");
      b += t(280, 350, "Dipakai di AS, Inggris, Australia · UK: Chairman ≠ CEO · USA: Chairman & CEO dirangkap", "g-ts");
      return svg(560, 362, b, "Struktur one-tier board");
    }
    b += rect(150, 10, 260, 46, "g-box") + t(280, 39, "Pemegang saham (RUPS)", "g-tb");
    b += arrow(280, 58, 280, 98) + t(290, 82, "mengangkat & memberhentikan", "g-tl");
    b += ln(150, 33, 60, 33) + ln(60, 33, 60, 266) + arrow(60, 266, 148, 266);
    b += t(48, 150, "juga mengangkat Direksi", "g-ts", ' transform="rotate(-90 48 150)"');
    b += rect(150, 100, 260, 54, "g-box") + t(280, 123, "Dewan Komisaris", "g-tb") + t(280, 143, "supervisory & advisory · komite", "g-ts");
    b += arrow(250, 156, 250, 238) + arrow(310, 238, 310, 156);
    if (v === "two-q") b += t(200, 206, "?", "g-big-q");
    else b += ml(242, 182, ["information ·", "approval · control", "· guidance"], "g-te", 16);
    b += ml(318, 182, ["information ·", "reports ·", "discussion"], "g-tl", 16);
    b += rect(150, 240, 260, 54, "g-box") + t(280, 263, "Direksi", "g-tb") + t(280, 283, "eksekutif · management board", "g-ts");
    b += arrow(280, 296, 280, 318);
    b += rect(150, 320, 260, 36, "g-dashbox") + t(280, 343, "Manajemen & seluruh karyawan", "g-t");
    return svg(560, 366, b, "Struktur two-tier board di Indonesia");
  }

  function kpikri(v) {
    var b = rect(10, 78, 124, 70, "g-now", 10) + ml(72, 108, ["Kondisi", "saat ini"], "g-tb", 19);
    b += rect(160, 16, 380, 194, "g-dashbox", 22) + t(350, 36, "Ketidakpastian", "g-ts");
    b += rect(190, 44, 320, 54, "g-up", 8) + t(350, 66, "+ Peluang", "g-tb") + t(350, 86, "diidentifikasi & diukur: f(dampak, kemungkinan)", "g-ts");
    b += arrow(136, 118, 598, 118);
    b += t(350, 112, "proses bisnis", "g-ts");
    b += rect(190, 138, 320, 54, "g-dn", 8) + t(350, 160, "− Ancaman", "g-tb") + t(350, 180, "diidentifikasi & diukur: f(dampak, kemungkinan)", "g-ts");
    b += rect(600, 30, 170, 176, "g-box", 10);
    b += rect(600, 30, 170, 38, "g-up", 10) + t(685, 55, "KPI", "g-tb");
    b += ml(685, 112, ["Sasaran", "masa depan"], "g-tb", 19);
    b += rect(600, 168, 170, 38, "g-dn", 10) + t(685, 193, "KRI", "g-tb");
    if (v !== "polos") {
      b += t(10, 238, "Upside risk: good things do not happen → no creation of value", "g-tl");
      b += t(10, 258, "Downside risk: bad things happen → damage to the value of the organization", "g-tl");
    }
    return svg(780, v === "polos" ? 220 : 270, b, "Peran kritis dewan: peluang, ancaman, KPI, KRI", "wide");
  }

  function interlink(v) {
    var b = "";
    function corner(x, y, l) { return rect(x, y, 180, 64, "g-red", 6) + ml(x + 90, y + 28, l, "g-wt", 18); }
    b += corner(10, 16, ["Sustainable", "Goals (3P)"]) + corner(430, 16, ["Stakeholder", "Engagement"]);
    b += corner(10, 290, ["Public", "Accountability"]) + corner(430, 290, ["Public", "Scrutiny"]);
    b += ln(194, 48, 234, 48, "g-sep") + ln(386, 48, 426, 48, "g-sep") + ln(194, 322, 234, 322, "g-sep") + ln(386, 322, 426, 322, "g-sep");
    b += ln(100, 84, 100, 148, "g-sep") + ln(100, 226, 100, 286, "g-sep") + ln(520, 84, 520, 148, "g-sep") + ln(520, 226, 520, 286, "g-sep");
    b += ml(310, 40, ["Managed Growth", "(Sustainable Value", "Creation)"], "g-t", 17);
    if (v === "q") b += t(310, 330, "?", "g-big-q");
    else b += ml(310, 316, ["Managed Risk and", "Crisis Prevention"], "g-t", 17);
    b += ml(100, 174, ["Balanced", "Stakeholder", "Value"], "g-t", 17);
    b += ml(520, 182, ["Code of", "Conduct"], "g-t", 17);
    b += '<circle class="g-ink" cx="310" cy="187" r="62"/>';
    b += ml(310, 176, ["Good Corporate", "Governance", "BoD & BoC"], "g-inv", 16);
    b += arrow(310, 123, 310, 94) + arrow(310, 251, 310, 286) + arrow(246, 187, 178, 187) + arrow(374, 187, 452, 187);
    return svg(620, 366, b, "Keterkaitan corporate governance dan manajemen risiko");
  }

  var FIGS = {
    tangga: tangga, venn: venn, waktu: waktu, silo: silo, coso2017: coso2017, coso2004: coso2004,
    iso31000: iso31000, prinsip: prinsip, board: board, kpikri: kpikri, interlink: interlink
  };

  window.FIG = function (spec) {
    if (!spec) return "";
    var i = spec.indexOf(":"), name = i === -1 ? spec : spec.slice(0, i), v = i === -1 ? "" : spec.slice(i + 1);
    var f = FIGS[name];
    if (!f) return "";
    if (name === "board" && ["two", "two-q", "one"].indexOf(v) === -1) return "";
    return f(v);
  };

  window.KASUS = {
    rax: {
      title: "Kasus RAX (materi Chapter 1)",
      text: "RAX adalah perusahaan manufaktur yang sudah beroperasi lebih dari 50 tahun di industri fashion. RAX mengalami pergeseran tren bisnis yang cukup drastis, seiring perubahan tren fashion yang sangat cepat.\n\nKarena RAX adalah perusahaan keluarga yang sangat memegang nilai-nilai leluhurnya, RAX tidak mampu merespons situasi ini. Akibatnya RAX terpapar masalah reputasi (reputational problem) karena berita buruk tentangnya menyebar di media internasional.\n\nMasalah ini makin parah ketika konsumen kehilangan minat menggunakan layanan RAX, dan akhirnya membawa krisis bagi RAX.\n\nRAX juga tidak mengelola krisis itu dengan baik. RAX menyatakan bangkrut setelah memiliki utang US$100 miliar, sebuah bencana (disaster) yang jelas bagi perusahaan."
    },
    nusakopi: {
      title: "Kasus PT Nusa Kopi (ilustrasi)",
      text: "PT Nusa Kopi mengelola 40 kedai kopi dan menargetkan 100 kedai pada akhir 2027.\n\nSetiap departemen mengelola risikonya sendiri:\n• Keuangan memantau risiko kurs, karena biji kopi premium sebagian diimpor.\n• Pembelian memantau pasokan biji kopi lokal, yang 70% berasal dari satu daerah.\n• Pemasaran memantau citra merek.\n• TI memantau gangguan aplikasi pemesanan.\n\nLaporan risiko tiap departemen tidak pernah digabungkan. Tahun ini rupiah melemah, daerah pemasok utama gagal panen, dan pesaing baru memulai perang harga, semuanya pada saat yang sama. Margin anjlok dan rencana ekspansi terancam, padahal masing-masing risiko itu sebenarnya sudah tercatat di departemennya."
    },
    rsmedika: {
      title: "Kasus RS Medika (ilustrasi)",
      text: "RS Medika adalah rumah sakit swasta dengan 200 tempat tidur.\n\n• Seluruh urusan manajemen risiko diserahkan kepada satu staf di unit mutu; bagian lain tidak terlibat.\n• Formulir dan kriteria risikonya disalin langsung dari template milik sebuah bank.\n• Daftar risiko hanya diperbarui tiga tahun sekali, padahal dalam setahun terakhir terbit aturan baru BPJS dan muncul dua rumah sakit pesaing.\n• Perawat enggan melaporkan insiden keselamatan pasien karena takut disalahkan.\n• Penilaian risiko dibuat berdasarkan perasaan direksi, tanpa data insiden.\n• Dokter dan perwakilan pasien tidak pernah dimintai pendapat.\n• Insiden yang terjadi tidak pernah dievaluasi untuk diambil pelajarannya."
    },
    pesawat: {
      title: "Kasus #1 Sesi 1: Who would you trust with your life?",
      text: "Bayangkan kamu harus terbang dari Bandung ke Singapura malam ini. Sebelum naik pesawat, kamu mengetahui bahwa:\n• maskapai melewatkan sebagian pemeriksaan perawatan (maintenance checks) untuk menghemat biaya;\n• sebagian pilot belum menyelesaikan pelatihan wajibnya;\n• laporan keselamatan disembunyikan dari regulator.\n\nDosen bertanya: berapa dari kalian yang masih mau naik pesawat itu?"
    },
    universitas: {
      title: "Kasus #2 Sesi 1: Cerita dua universitas",
      text: "Universitas A: dosen datang tepat waktu; ujian adil; bantuan biaya jatuh ke mahasiswa yang layak; aturan akademik diterapkan konsisten; keluhan mahasiswa didengar.\n\nUniversitas B: sebagian mahasiswa bisa membeli nilai; catatan kehadiran dimanipulasi; beasiswa jatuh ke kerabat atau teman; keluhan diabaikan; aturan berlaku berbeda untuk orang yang berbeda.\n\nDosen bertanya: kamu memilih kuliah di universitas mana, dan mengapa?"
    },
    jembatan: {
      title: "Kasus #3 Sesi 1: Cerita jembatan",
      text: "Pemerintah kota membangun jembatan dengan anggaran Rp2 triliun. Sebagian pejabat diam-diam menerima suap, kontraktor memakai material lebih murah di bawah spesifikasi, dan laporan inspeksi dipalsukan. Jembatan diresmikan dan warga merayakannya.\n\nDua tahun kemudian jembatan runtuh. Keluarga kehilangan orang tercinta, usaha berhenti beroperasi, dan kota kehilangan kepercayaan.\n\nDosen bertanya: apa penyebab runtuhnya jembatan? Apakah masalah teknik (engineering)?"
    },
    motor: {
      title: "Kasus #5 Sesi 1: Naik motor",
      text: "“Siapa di antara kalian yang memakai helm?”\n\nManajemen risiko yang baik: memakai helm, memeriksa rem, menaati aturan lalu lintas, tidak mengetik pesan sambil berkendara.\n\nManajemen risiko yang buruk: tanpa helm, ngebut melewati batas, main HP sambil berkendara, mengabaikan rambu peringatan.\n\nDosen bertanya: siapa yang lebih mungkin sampai dengan selamat?"
    }
  };
})();
