// Topik 2 — Enterprise Risk Management Frameworks
// Belum ada foto materi tortoic untuk chapter ini. Soal disusun dari literatur standar:
// COSO ERM 2004 (Integrated Framework), COSO ERM 2017 (Integrating with Strategy and Performance), ISO 31000:2009/2018,
// serta deskripsi program "ISO 31000 ERM Fundamentals" (CRMS Indonesia/ERM Academy).
// T2-09..T2-16 = soal tambahan bahasa Inggris bergaya Review Questions tortoic.
window.QUESTIONS.push(
{
  id: "T2-01", topic: 2, level: "konsep", src: "literatur",
  q: "Apa beda utama manajemen risiko tradisional (silo) dengan Enterprise Risk Management (ERM)?",
  options: [
    "ERM hanya mengurus risiko keuangan, sedangkan pendekatan silo mengurus semua jenis risiko",
    "ERM mengelola risiko seluruh perusahaan secara terpadu dan mengaitkannya dengan strategi dan sasaran; pada pendekatan silo, tiap unit mengurus risikonya sendiri-sendiri",
    "Pendekatan silo lebih menyeluruh karena tiap unit paling paham risikonya sendiri",
    "ERM mengambil alih semua tanggung jawab risiko dari unit bisnis dan menyerahkannya ke bagian manajemen risiko"
  ],
  answer: 1,
  explain: "Pada pendekatan silo, keuangan, operasional, pemasaran, dan TI mengurus risikonya masing-masing tanpa melihat hubungan antar-risiko. ERM melihat semua risiko perusahaan sebagai satu kesatuan, lintas unit, dan mengaitkannya dengan strategi serta sasaran perusahaan.",
  why: [
    "ERM mencakup semua jenis risiko, bukan cuma keuangan.",
    null,
    "Tiap unit memang paham risikonya, tapi pendekatan silo tidak melihat efek gabungan antar-risiko.",
    "ERM tidak menghapus peran unit bisnis; pemilik risiko tetap di unit, ERM menyatukan gambarannya."]
},
{
  id: "T2-02", topic: 2, level: "kasus", src: "literatur", kasus: "nusakopi",
  q: "Apa kelemahan utama cara PT Nusa Kopi mengelola risiko?",
  options: [
    "Risiko diurus terpisah per departemen, sehingga pimpinan tidak melihat hubungan dan efek gabungan antar-risiko",
    "Perusahaan sama sekali belum pernah mencatat risikonya",
    "Risiko kurs tidak relevan untuk bisnis kedai kopi",
    "Perang harga dari pesaing bukan risiko karena datang dari luar perusahaan"
  ],
  answer: 0,
  explain: "Semua risikonya sudah tercatat, tapi di departemen masing-masing. Tidak ada yang melihat bahwa rupiah melemah, gagal panen, dan perang harga bisa terjadi bersamaan dan bersama-sama mengancam rencana ekspansi. ERM menutup celah ini dengan melihat semua risiko sebagai satu kesatuan.",
  why: [
    null,
    "Setiap departemen sudah memantau risikonya; masalahnya bukan tidak ada catatan.",
    "Sebagian biji kopi diimpor, jadi kurs jelas memengaruhi biaya.",
    "Risiko bisa datang dari luar; yang penting dampaknya pada sasaran perusahaan."]
},
{
  id: "T2-03", topic: 2, level: "konsep", src: "literatur",
  q: "Apa saja lima komponen COSO ERM 2017 (Enterprise Risk Management — Integrating with Strategy and Performance)?",
  options: [
    "Internal Environment; Objective Setting; Event Identification; Risk Assessment; Risk Response",
    "Communication & Consultation; Scope, Context & Criteria; Risk Assessment; Risk Treatment; Monitoring & Review",
    "Governance & Culture; Strategy & Objective-Setting; Performance; Review & Revision; Information, Communication & Reporting",
    "Integration; Design; Implementation; Evaluation; Improvement"
  ],
  answer: 2,
  explain: "Lima komponen COSO ERM 2017: Governance & Culture; Strategy & Objective-Setting; Performance; Review & Revision; serta Information, Communication & Reporting. Kelimanya dijabarkan menjadi 20 prinsip.",
  why: [
    "Ini sebagian dari 8 komponen COSO ERM 2004, versi lama.",
    "Ini tahapan proses manajemen risiko ISO 31000.",
    null,
    "Ini elemen framework ISO 31000."]
},
{
  id: "T2-04", topic: 2, level: "konsep", src: "literatur", fig: "coso2004:atas",
  figCap: "Kubus COSO ERM 2004. Sisi atasnya disembunyikan.",
  q: "Gambar di atas adalah kubus COSO ERM 2004. Apa isi empat kotak bertanda “?” di sisi atas kubus?",
  options: [
    "Entity-Level, Division, Business Unit, Subsidiary",
    "Financial, Customer, Internal Process, Learning & Growth",
    "Identify, Analyze, Evaluate, Treat",
    "Strategic, Operations, Reporting, Compliance"
  ],
  answer: 3,
  explain: "Sisi atas kubus berisi empat kategori tujuan: Strategic, Operations, Reporting, Compliance. Sisi depan berisi 8 komponen (Internal Environment sampai Monitoring). Sisi samping berisi tingkat organisasi (Entity-Level, Division, Business Unit, Subsidiary).",
  why: [
    "Ini isi sisi samping kubus, yaitu tingkat organisasi.",
    "Ini empat perspektif Balanced Scorecard, bukan COSO.",
    "Ini mirip langkah proses penilaian risiko, bukan isi kubus COSO.",
    null]
},
{
  id: "T2-05", topic: 2, level: "konsep", src: "literatur",
  q: "Mana pernyataan yang benar tentang ISO 31000?",
  options: [
    "ISO 31000 berisi pedoman (guidelines) yang bisa dipakai organisasi jenis dan ukuran apa pun, dan tidak dibuat untuk sertifikasi",
    "ISO 31000 adalah standar persyaratan yang wajib disertifikasi oleh lembaga luar",
    "ISO 31000 hanya berlaku untuk bank dan perusahaan asuransi",
    "ISO 31000 menggantikan semua peraturan pemerintah tentang manajemen risiko"
  ],
  answer: 0,
  explain: "Judul ISO 31000:2018 adalah Risk management — Guidelines. Isinya pedoman umum yang bisa disesuaikan untuk organisasi apa pun dan semua jenis risiko. Karena berupa pedoman, ISO 31000 tidak dibuat untuk sertifikasi.",
  why: [
    null,
    "ISO 31000 itu pedoman, bukan persyaratan, jadi tidak untuk sertifikasi.",
    "ISO 31000 bisa dipakai organisasi apa pun, termasuk pemerintah dan nirlaba.",
    "ISO 31000 bersifat sukarela dan tidak menggantikan peraturan."]
},
{
  id: "T2-06", topic: 2, level: "konsep", src: "literatur",
  q: "Apa perubahan penting dari ISO 31000:2009 ke ISO 31000:2018?",
  options: [
    "ISO 31000:2018 mulai bisa disertifikasi oleh lembaga luar",
    "Jumlah prinsip diringkas dari 11 menjadi 8, dan peran pimpinan puncak serta integrasi manajemen risiko ke seluruh organisasi lebih ditekankan",
    "Definisi risiko diubah menjadi “kemungkinan rugi secara finansial”",
    "Proses manajemen risiko dihapus dan diganti kubus COSO"
  ],
  answer: 1,
  explain: "Versi 2018 meringkas prinsip dari 11 menjadi 8, dengan tujuan value creation and protection di tengahnya. Peran pimpinan puncak (leadership and commitment) dan integrasi manajemen risiko ke seluruh organisasi lebih ditekankan. Definisi risiko tetap: effect of uncertainty on objectives.",
  why: [
    "Versi 2018 tetap berupa pedoman dan tidak untuk sertifikasi.",
    null,
    "Definisinya tetap “effect of uncertainty on objectives”, dan pengaruhnya bisa positif maupun negatif.",
    "ISO 31000:2018 tetap punya proses; kubus adalah ciri COSO ERM 2004."]
},
{
  id: "T2-07", topic: 2, level: "konsep", src: "literatur",
  q: "Di ISO 31000:2018, apa beda framework dan process?",
  options: [
    "Framework adalah langkah identifikasi sampai penanganan risiko, sedangkan process adalah susunan organisasi pendukungnya",
    "Framework hanya untuk perusahaan besar, sedangkan process untuk perusahaan kecil",
    "Keduanya sama; bedanya hanya istilah terjemahan",
    "Framework menyiapkan fondasi di organisasi (kepemimpinan, integrasi, desain, implementasi, evaluasi, perbaikan); process adalah langkah-langkah untuk menilai dan menangani risiko"
  ],
  answer: 3,
  explain: "Framework membuat manajemen risiko menyatu dengan kegiatan organisasi. Intinya leadership and commitment, dikelilingi integration, design, implementation, evaluation, dan improvement. Process adalah langkah kerjanya: komunikasi, konteks, penilaian risiko, penanganan risiko, pemantauan, dan pelaporan.",
  why: [
    "Definisinya kebalik.",
    "Framework dan process sama-sama berlaku untuk organisasi apa pun.",
    "Keduanya bagian yang berbeda dalam ISO 31000.",
    null]
},
{
  id: "T2-08", topic: 2, level: "kasus", src: "literatur", kasus: "nusakopi",
  ctxTitle: "PT Nusa Kopi memilih acuan ERM",
  ctx: "Setelah margin anjlok, dewan komisaris PT Nusa Kopi meminta direksi memilih acuan ERM. Direktur risiko mengusulkan ISO 31000:2018 sebagai acuan utama, ditambah COSO ERM 2017 untuk mengaitkan risiko dengan strategi dan kinerja. Seorang komisaris menolak: “Pilih satu saja. Memakai dua acuan itu menyalahi aturan.”",
  q: "Siapa yang lebih tepat, dan kenapa?",
  options: [
    "Direktur risiko; kedua acuan saling melengkapi, dan perusahaan boleh menyesuaikan acuan dengan kebutuhannya",
    "Komisaris; perusahaan hanya boleh memakai satu acuan ERM",
    "Komisaris; COSO hanya mengatur pengendalian internal sehingga tidak cocok untuk ERM",
    "Komisaris; ISO 31000 hanya boleh dipakai setelah perusahaan tersertifikasi"
  ],
  answer: 0,
  explain: "Tidak ada aturan yang melarang memakai dua acuan. ISO 31000 bersifat umum dan bisa disesuaikan dengan kondisi perusahaan, sedangkan COSO ERM 2017 kuat dalam mengaitkan risiko dengan strategi dan kinerja. Keduanya bisa saling melengkapi.",
  why: [
    null,
    "Tidak ada aturan seperti itu; perusahaan bebas memilih dan menyesuaikan acuan.",
    "COSO ERM memang kerangka manajemen risiko perusahaan, berbeda dari COSO Internal Control.",
    "ISO 31000 tidak dibuat untuk sertifikasi, jadi tidak ada syarat seperti itu."]
},
{
  id: "T2-09", topic: 2, level: "konsep", src: "literatur",
  q: "Which of the following best describes the scope of Enterprise Risk Management (ERM)?",
  options: [
    "Risks are managed only by the finance department",
    "A company-wide process that covers all business units and departments from start to end",
    "A one-time risk assessment before launching a new project",
    "A compliance report sent to regulators every year"
  ],
  answer: 1,
  explain: "ERM mencakup seluruh perusahaan: melintasi semua unit dan departemen, dan melihat proses dari awal sampai akhir. Jadi ERM bukan urusan satu bagian saja.",
  why: [
    "ERM mencakup seluruh perusahaan, bukan satu departemen.",
    null,
    "ERM berjalan terus-menerus, bukan sekali jalan.",
    "ERM bukan sekadar laporan kepatuhan; ia dipakai untuk mengambil keputusan."]
},
{
  id: "T2-10", topic: 2, level: "konsep", src: "literatur",
  q: "How many components and principles does COSO ERM 2017 have?",
  options: [
    "8 components and 4 objective categories",
    "3 components and 8 principles",
    "5 components and 20 principles",
    "11 principles and 1 framework"
  ],
  answer: 2,
  explain: "COSO ERM 2017 punya 5 komponen (Governance & Culture; Strategy & Objective-Setting; Performance; Review & Revision; Information, Communication & Reporting) yang dijabarkan menjadi 20 prinsip.",
  why: [
    "8 komponen dan 4 kategori tujuan adalah ciri COSO ERM 2004.",
    "3 komponen dan 8 prinsip mirip susunan ISO 31000:2018, bukan COSO.",
    null,
    "11 prinsip adalah ISO 31000 versi 2009."]
},
{
  id: "T2-11", topic: 2, level: "konsep", src: "literatur",
  q: "Which of the following is NOT one of the 8 components of COSO ERM 2004?",
  options: ["Event Identification", "Risk Response", "Monitoring", "Review & Revision"],
  answer: 3,
  explain: "8 komponen COSO ERM 2004: Internal Environment, Objective Setting, Event Identification, Risk Assessment, Risk Response, Control Activities, Information & Communication, dan Monitoring. Review & Revision adalah komponen COSO ERM 2017.",
  why: [
    "Event Identification termasuk komponen COSO ERM 2004.",
    "Risk Response termasuk komponen COSO ERM 2004.",
    "Monitoring termasuk komponen COSO ERM 2004.",
    null]
},
{
  id: "T2-12", topic: 2, level: "konsep", src: "literatur",
  q: "In the COSO ERM 2004 cube, which side shows Entity-Level, Division, Business Unit, and Subsidiary?",
  options: [
    "The objective categories (top of the cube)",
    "The levels of the organisation (side of the cube)",
    "The components (front of the cube)",
    "The risk treatment options"
  ],
  answer: 1,
  explain: "Kubus COSO ERM 2004 punya tiga sisi: kategori tujuan di atas (Strategic, Operations, Reporting, Compliance), 8 komponen di depan, dan tingkat organisasi di samping (Entity-Level, Division, Business Unit, Subsidiary).",
  why: [
    "Sisi atas berisi Strategic, Operations, Reporting, Compliance.",
    null,
    "Sisi depan berisi 8 komponen, dari Internal Environment sampai Monitoring.",
    "Pilihan penanganan risiko bukan salah satu sisi kubus COSO."]
},
{
  id: "T2-13", topic: 2, level: "konsep", src: "literatur",
  q: "What is the full title of ISO 31000:2018?",
  options: [
    "Risk management — Guidelines",
    "Risk management — Requirements for certification",
    "Enterprise Risk Management — Integrating with Strategy and Performance",
    "Internal Control — Integrated Framework"
  ],
  answer: 0,
  explain: "Judul lengkapnya ISO 31000:2018 Risk management — Guidelines. Karena berupa pedoman, standar ini bisa dipakai organisasi apa pun dan tidak dibuat untuk sertifikasi.",
  why: [
    null,
    "ISO 31000 bukan standar persyaratan sertifikasi.",
    "Ini judul COSO ERM 2017.",
    "Ini judul COSO Internal Control."]
},
{
  id: "T2-14", topic: 2, level: "konsep", src: "literatur",
  q: "What is at the centre of the ISO 31000:2018 risk management framework?",
  options: ["Risk assessment", "Integration", "Leadership and commitment", "Recording and reporting"],
  answer: 2,
  explain: "Pusat framework ISO 31000:2018 adalah leadership and commitment dari pimpinan puncak, dikelilingi integration, design, implementation, evaluation, dan improvement.",
  why: [
    "Risk assessment adalah langkah dalam process, bukan pusat framework.",
    "Integration adalah salah satu elemen di sekeliling pusat framework.",
    null,
    "Recording and reporting adalah langkah dalam process."]
},
{
  id: "T2-15", topic: 2, level: "konsep", src: "literatur",
  q: "Which of the following is a step in the ISO 31000:2018 risk management PROCESS (not the framework)?",
  options: ["Design", "Risk treatment", "Implementation", "Improvement"],
  answer: 1,
  explain: "Langkah process ISO 31000:2018: communication & consultation; scope, context & criteria; risk assessment; risk treatment; monitoring & review; recording & reporting. Design, implementation, dan improvement adalah bagian framework.",
  why: [
    "Design adalah bagian framework.",
    null,
    "Implementation adalah bagian framework.",
    "Improvement adalah bagian framework."]
},
{
  id: "T2-16", topic: 2, level: "konsep", src: "literatur",
  q: "Why do organisations use an ERM framework such as ISO 31000 or COSO ERM?",
  options: [
    "To guarantee that no risk will ever happen",
    "To replace the board of directors",
    "To avoid the need to set objectives",
    "To help manage risk well at every level of the organisation and in its own context"
  ],
  answer: 3,
  explain: "Framework ERM membantu manajemen risiko berjalan baik di semua tingkat organisasi dan sesuai kondisi organisasi itu sendiri.",
  why: [
    "Tidak ada framework yang bisa menjamin risiko tidak terjadi.",
    "Framework membantu dewan, bukan menggantikannya.",
    "Risk selalu dikaitkan dengan tujuan; tanpa tujuan tidak ada risk.",
    null]
}
);
