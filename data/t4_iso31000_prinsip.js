// Topik 4 — ISO 31000 Architecture: Risk Management Principles
// Belum ada foto materi tortoic untuk topik ini. Soal disusun dari ISO 31000:2018
// (purpose, delapan prinsip) dan arsitektur principles–framework–process.
// T4-11..T4-18 = soal tambahan bahasa Inggris bergaya Review Questions tortoic.
window.QUESTIONS.push(
{
  id: "T4-01", topic: 4, level: "konsep", src: "literatur", fig: "iso31000:q",
  figCap: "Arsitektur ISO 31000:2018. Nama ketiga komponennya disembunyikan.",
  q: "ISO 31000:2018 tersusun dari tiga komponen seperti di gambar. Apa saja ketiganya?",
  options: [
    "Principles, Framework, Process",
    "Governance & Culture, Strategy, Performance",
    "Identify, Assess, Treat",
    "Plan, Do, Check"
  ],
  answer: 0,
  explain: "Tiga komponen ISO 31000:2018 adalah Principles, Framework, dan Process. Principles menjadi dasar, Framework menyatukan manajemen risiko ke dalam organisasi, dan Process adalah langkah-langkah menilai serta menangani risiko.",
  why: [
    null,
    "Ini sebagian komponen COSO ERM 2017, bukan ISO 31000.",
    "Ini ringkasan langkah proses, bukan tiga komponen ISO 31000.",
    "Ini siklus PDCA, bukan komponen ISO 31000."]
},
{
  id: "T4-02", topic: 4, level: "konsep", src: "literatur",
  q: "Mana yang BUKAN salah satu dari delapan prinsip ISO 31000:2018?",
  options: ["Inclusive", "Dynamic", "Human and cultural factors", "Risk elimination"],
  answer: 3,
  explain: "Delapan prinsip ISO 31000:2018: integrated; structured and comprehensive; customized; inclusive; dynamic; best available information; human and cultural factors; continual improvement. Risk elimination bukan prinsip, karena risiko tidak bisa dihilangkan sepenuhnya.",
  why: [
    "Inclusive termasuk delapan prinsip ISO 31000:2018.",
    "Dynamic termasuk delapan prinsip ISO 31000:2018.",
    "Human and cultural factors termasuk delapan prinsip ISO 31000:2018.",
    null]
},
{
  id: "T4-03", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "PT Sinar Logistik",
  ctx: "Di PT Sinar Logistik, risiko tidak lagi dibahas terpisah setahun sekali. Risiko dibahas saat menyusun anggaran, saat merencanakan strategi, dan setiap kali perusahaan memutuskan proyek baru.",
  q: "Prinsip ISO 31000:2018 mana yang paling cocok dengan praktik ini?",
  options: ["Inclusive", "Integrated", "Dynamic", "Customized"],
  answer: 1,
  explain: "Integrated: manajemen risiko menjadi bagian dari semua kegiatan organisasi, bukan kegiatan terpisah. Di sini risiko ikut dibahas dalam anggaran, strategi, dan keputusan proyek.",
  why: [
    "Inclusive soal melibatkan pemangku kepentingan, bukan menyatukan risiko dengan kegiatan.",
    null,
    "Dynamic soal cepat menanggapi perubahan keadaan.",
    "Customized soal menyesuaikan cara kerja dengan kondisi organisasi."]
},
{
  id: "T4-04", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Rumah sakit daerah",
  ctx: "Sebuah rumah sakit daerah tidak menyalin begitu saja template manajemen risiko milik bank. Cara kerja manajemen risikonya disesuaikan dengan kondisi di dalam dan di luar rumah sakit, serta dengan sasaran pelayanan pasiennya.",
  q: "Prinsip ISO 31000:2018 mana yang paling cocok dengan praktik ini?",
  options: ["Customized", "Structured and comprehensive", "Best available information", "Continual improvement"],
  answer: 0,
  explain: "Customized: kerangka dan proses manajemen risiko disesuaikan dengan kondisi dan sasaran organisasi itu sendiri. Template bank tidak cocok untuk risiko keselamatan pasien.",
  why: [
    null,
    "Structured and comprehensive soal cara yang rapi agar hasilnya konsisten dan bisa dibandingkan.",
    "Best available information soal kualitas data yang dipakai.",
    "Continual improvement soal terus memperbaiki diri dari pengalaman."]
},
{
  id: "T4-05", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Rencana pabrik baru",
  ctx: "Sebelum membangun pabrik baru, perusahaan mengajak warga sekitar, pemasok, serikat pekerja, dan dinas lingkungan hidup berdiskusi tentang risiko proyek. Pengetahuan, pendapat, dan cara pandang mereka dipakai dalam penilaian risiko.",
  q: "Prinsip ISO 31000:2018 mana yang paling cocok dengan praktik ini?",
  options: ["Integrated", "Dynamic", "Inclusive", "Human and cultural factors"],
  answer: 2,
  explain: "Inclusive: pemangku kepentingan dilibatkan secara tepat dan tepat waktu, sehingga pengetahuan dan pendapat mereka ikut dipertimbangkan. Hasilnya manajemen risiko jadi lebih lengkap.",
  why: [
    "Integrated soal menyatukan risiko dengan kegiatan organisasi, bukan melibatkan pihak luar.",
    "Dynamic soal cepat menanggapi perubahan keadaan.",
    null,
    "Human and cultural factors soal pengaruh perilaku dan budaya manusia."]
},
{
  id: "T4-06", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Bank dan perubahan pasar",
  ctx: "Setelah ada aturan baru dan pesaing digital masuk pasar, sebuah bank memperbarui daftar risikonya setiap bulan, tidak lagi menunggu tinjauan tahunan. Tujuannya agar bank cepat menyadari dan menanggapi perubahan.",
  q: "Prinsip ISO 31000:2018 mana yang paling cocok dengan praktik ini?",
  options: ["Continual improvement", "Customized", "Structured and comprehensive", "Dynamic"],
  answer: 3,
  explain: "Dynamic: risiko bisa muncul, berubah, atau hilang saat keadaan berubah. Manajemen risiko harus cepat menyadari dan menanggapi perubahan itu.",
  why: [
    "Continual improvement soal belajar dari pengalaman; kasus ini soal menanggapi perubahan keadaan.",
    "Customized soal menyesuaikan dengan kondisi organisasi, bukan kecepatan menanggapi perubahan.",
    "Structured and comprehensive soal hasil yang konsisten dan bisa dibandingkan.",
    null]
},
{
  id: "T4-07", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Peluncuran produk baru",
  ctx: "Saat menilai risiko penjualan produk baru, tim memakai data penjualan masa lalu, informasi pasar terbaru, dan perkiraan para ahli. Mereka juga mencatat kelemahan data dan ketidakpastian perkiraan itu, lalu segera membagikan hasilnya kepada pihak terkait.",
  q: "Prinsip ISO 31000:2018 mana yang paling cocok dengan praktik ini?",
  options: ["Inclusive", "Best available information", "Integrated", "Dynamic"],
  answer: 1,
  explain: "Best available information: penilaian risiko memakai data masa lalu, informasi terbaru, dan perkiraan masa depan, sambil menyadari kelemahan datanya. Informasinya juga harus tepat waktu, jelas, dan bisa diakses pihak terkait.",
  why: [
    "Inclusive soal melibatkan pemangku kepentingan, bukan kualitas informasi.",
    null,
    "Integrated soal menyatukan risiko dengan kegiatan organisasi.",
    "Dynamic soal cepat menanggapi perubahan keadaan."]
},
{
  id: "T4-08", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Laporan nyaris celaka di pabrik",
  ctx: "Di sebuah pabrik, karyawan enggan melaporkan kejadian nyaris celaka (near miss) karena takut disalahkan atasan. Akibatnya banyak potensi kecelakaan tidak pernah tercatat. Manajemen lalu membangun budaya melapor tanpa menyalahkan.",
  q: "Prinsip ISO 31000:2018 mana yang paling cocok dengan masalah dan perbaikan ini?",
  options: ["Structured and comprehensive", "Customized", "Human and cultural factors", "Best available information"],
  answer: 2,
  explain: "Human and cultural factors: perilaku dan budaya manusia sangat memengaruhi manajemen risiko. Budaya takut disalahkan membuat risiko tersembunyi, jadi perbaikannya juga lewat perubahan budaya.",
  why: [
    "Masalahnya bukan cara kerja yang tidak rapi, tapi budaya yang membuat orang takut melapor.",
    "Customized soal menyesuaikan cara kerja dengan kondisi organisasi.",
    null,
    "Datanya memang jadi kurang, tapi akar masalahnya budaya."]
},
{
  id: "T4-09", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Evaluasi setelah insiden",
  ctx: "Setiap kali terjadi insiden, perusahaan mengadakan evaluasi setelah kejadian (post-incident review). Pelajaran yang didapat dipakai untuk memperbarui prosedur dan bahan pelatihan, sehingga manajemen risikonya terus membaik.",
  q: "Prinsip ISO 31000:2018 mana yang paling cocok dengan praktik ini?",
  options: ["Dynamic", "Integrated", "Inclusive", "Continual improvement"],
  answer: 3,
  explain: "Continual improvement: manajemen risiko terus diperbaiki lewat pembelajaran dan pengalaman. Evaluasi setelah insiden mengubah pengalaman buruk menjadi prosedur yang lebih baik.",
  why: [
    "Dynamic soal cepat menanggapi perubahan keadaan, bukan belajar dari pengalaman.",
    "Integrated soal menyatukan risiko dengan kegiatan organisasi.",
    "Inclusive soal melibatkan pemangku kepentingan.",
    null]
},
{
  id: "T4-10", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Grup usaha dengan lima anak perusahaan",
  ctx: "Sebuah grup usaha dengan lima anak perusahaan memakai satu cara penilaian risiko yang sama: ukuran dampak dan kemungkinan yang seragam, serta format laporan yang sama. Hasilnya konsisten dan bisa dibandingkan antar-anak perusahaan.",
  q: "Prinsip ISO 31000:2018 mana yang paling cocok dengan praktik ini?",
  options: ["Customized", "Structured and comprehensive", "Inclusive", "Dynamic"],
  answer: 1,
  explain: "Structured and comprehensive: cara kerja yang rapi dan menyeluruh menghasilkan hasil yang konsisten dan bisa dibandingkan (consistent and comparable results).",
  why: [
    "Customized berarti menyesuaikan dengan kondisi masing-masing; kasus ini justru menekankan keseragaman.",
    null,
    "Inclusive soal melibatkan pemangku kepentingan.",
    "Dynamic soal cepat menanggapi perubahan keadaan."]
},
{
  id: "T4-11", topic: 4, level: "konsep", src: "literatur",
  q: "How many risk management principles are there in ISO 31000:2018?",
  options: ["5", "8", "11", "20"],
  answer: 1,
  explain: "ISO 31000:2018 punya 8 prinsip. Versi lamanya (2009) punya 11 prinsip, sedangkan 20 adalah jumlah prinsip COSO ERM 2017.",
  why: [
    "Lima adalah jumlah komponen COSO ERM 2017.",
    null,
    "Sebelas adalah jumlah prinsip ISO 31000 versi 2009.",
    "Dua puluh adalah jumlah prinsip COSO ERM 2017."]
},
{
  id: "T4-12", topic: 4, level: "konsep", src: "literatur",
  q: "Which principle says that risk management is part of all activities in an organization?",
  options: ["Integrated", "Inclusive", "Customized", "Dynamic"],
  answer: 0,
  explain: "Integrated: risk management is an integral part of all organizational activities. Manajemen risiko menyatu dengan strategi, anggaran, operasi, dan proyek.",
  why: [
    null,
    "Inclusive soal melibatkan pemangku kepentingan.",
    "Customized soal menyesuaikan dengan kondisi dan sasaran organisasi.",
    "Dynamic soal cepat menanggapi perubahan keadaan."]
},
{
  id: "T4-13", topic: 4, level: "konsep", src: "literatur",
  q: "A structured and comprehensive approach to risk management leads to…",
  options: [
    "Faster decisions without any data",
    "No more uncertainty",
    "Consistent and comparable results",
    "Lower insurance premiums"
  ],
  answer: 2,
  explain: "Structured and comprehensive: cara kerja yang rapi dan menyeluruh menghasilkan hasil yang konsisten dan bisa dibandingkan, misalnya antar-unit atau antar-tahun.",
  why: [
    "Cara kerja yang rapi justru butuh data dan metode yang jelas.",
    "Ketidakpastian tidak bisa dihilangkan.",
    null,
    "Premi asuransi tidak dibahas dalam prinsip ini."]
},
{
  id: "T4-14", topic: 4, level: "konsep", src: "literatur",
  q: "What does the principle “customized” mean?",
  options: [
    "The framework and process are copied from another industry’s best-practice template",
    "The framework and process are adjusted to fit the organization’s own context and objectives",
    "The framework and process are designed only by outside consultants",
    "The framework and process are updated only once every few years"
  ],
  answer: 1,
  explain: "Customized: kerangka dan proses manajemen risiko disesuaikan dengan kondisi dan sasaran organisasi sendiri. Contohnya, rumah sakit tidak boleh sekadar menyalin template bank.",
  why: [
    "Menyalin template industri lain justru bertentangan dengan prinsip customized.",
    null,
    "Prinsip ini tidak mengatur siapa yang merancang.",
    "Jarang diperbarui justru bertentangan dengan prinsip dynamic."]
},
{
  id: "T4-15", topic: 4, level: "konsep", src: "literatur",
  q: "Which principle says that risks can appear, change, or disappear when the situation inside or outside the organization changes?",
  options: ["Continual improvement", "Best available information", "Dynamic", "Human and cultural factors"],
  answer: 2,
  explain: "Dynamic: risiko bisa muncul, berubah, atau hilang saat keadaan berubah. Karena itu manajemen risiko harus cepat menyadari dan menanggapi perubahan.",
  why: [
    "Continual improvement soal belajar dari pengalaman.",
    "Best available information soal kualitas informasi yang dipakai.",
    null,
    "Human and cultural factors soal pengaruh perilaku dan budaya."]
},
{
  id: "T4-16", topic: 4, level: "konsep", src: "literatur",
  q: "Under the principle “best available information”, the information used should be…",
  options: [
    "Based only on past data",
    "Kept secret from all stakeholders",
    "Perfect and free of uncertainty before any decision is made",
    "Timely, clear, and available to the right stakeholders, with its limitations taken into account"
  ],
  answer: 3,
  explain: "Best available information: memakai data masa lalu, informasi terbaru, dan perkiraan masa depan, sambil menyadari kelemahannya. Informasinya harus tepat waktu, jelas, dan bisa diakses pihak terkait.",
  why: [
    "Data masa lalu saja tidak cukup; perlu juga informasi terbaru dan perkiraan masa depan.",
    "Informasi justru harus tersedia bagi pihak terkait.",
    "Informasi sempurna tidak pernah ada; kelemahannya cukup diperhitungkan.",
    null]
},
{
  id: "T4-17", topic: 4, level: "konsep", src: "literatur",
  q: "Which principle says that human behaviour and culture strongly affect every part of risk management?",
  options: ["Inclusive", "Human and cultural factors", "Integrated", "Structured and comprehensive"],
  answer: 1,
  explain: "Human and cultural factors: perilaku dan budaya manusia sangat memengaruhi semua bagian manajemen risiko. Sejalan dengan pesan bahwa governance pada akhirnya soal perilaku manusia.",
  why: [
    "Inclusive soal melibatkan pemangku kepentingan.",
    null,
    "Integrated soal menyatukan risiko dengan semua kegiatan organisasi.",
    "Structured and comprehensive soal hasil yang konsisten dan bisa dibandingkan."]
},
{
  id: "T4-18", topic: 4, level: "konsep", src: "literatur",
  q: "Involving stakeholders at the right time, so that their knowledge and views are considered, describes which principle?",
  options: ["Inclusive", "Dynamic", "Customized", "Continual improvement"],
  answer: 0,
  explain: "Inclusive: pemangku kepentingan dilibatkan secara tepat dan tepat waktu, sehingga pengetahuan dan pendapat mereka ikut dipertimbangkan. Hasilnya kesadaran risiko lebih baik.",
  why: [
    null,
    "Dynamic soal cepat menanggapi perubahan keadaan.",
    "Customized soal menyesuaikan dengan kondisi organisasi.",
    "Continual improvement soal belajar dari pengalaman."]
}
);
