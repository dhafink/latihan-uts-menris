// Topik 4 — ISO 31000 Architecture: Risk Management Principles
// Belum ada foto materi tortoic untuk chapter ini. Soal disusun dari ISO 31000:2018 klausul 3–4
// (purpose, delapan prinsip) dan arsitektur principles–framework–process.
// T4-11..T4-18 = soal tambahan bahasa Inggris bergaya Review Questions tortoic.
window.QUESTIONS.push(
{
  id: "T4-01", topic: 4, level: "konsep", src: "literatur", fig: "iso31000:q",
  figCap: "Arsitektur ISO 31000:2018. Nama ketiga komponen disembunyikan.",
  q: "Gambar memperlihatkan arsitektur ISO 31000:2018 yang terdiri atas tiga komponen. Ketiga komponen itu adalah…",
  options: [
    "Principles, Framework, Process",
    "Governance & Culture, Strategy, Performance",
    "Identify, Assess, Treat",
    "Plan, Do, Check"
  ],
  answer: 0,
  explain: "Arsitektur ISO 31000:2018 terdiri atas Principles (klausul 4), Framework (klausul 5), dan Process (klausul 6). Prinsip menjadi landasan, framework mengintegrasikan manajemen risiko ke dalam organisasi, dan process diterapkan secara sistematis pada tingkat strategis, operasional, program, maupun proyek.",
  why: [
    null,
    "Ini sebagian komponen COSO ERM 2017.",
    "Ini penyederhanaan langkah proses, bukan tiga komponen arsitektur.",
    "Ini siklus PDCA, bukan arsitektur ISO 31000."]
},
{
  id: "T4-02", topic: 4, level: "konsep", src: "literatur",
  q: "Manakah yang BUKAN salah satu dari delapan prinsip manajemen risiko ISO 31000:2018?",
  options: ["Inclusive", "Dynamic", "Human and cultural factors", "Risk elimination"],
  answer: 3,
  explain: "Delapan prinsip ISO 31000:2018: integrated; structured and comprehensive; customized; inclusive; dynamic; best available information; human and cultural factors; continual improvement. Semuanya mengarah ke tujuan di pusatnya, yaitu value creation and protection. Risk elimination bukan prinsip, karena risiko tidak bisa dihilangkan sepenuhnya.",
  why: [
    "Inclusive adalah prinsip ISO 31000:2018.",
    "Dynamic adalah prinsip ISO 31000:2018.",
    "Human and cultural factors adalah prinsip ISO 31000:2018.",
    null]
},
{
  id: "T4-03", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "PT Sinar Logistik",
  ctx: "Di PT Sinar Logistik, pembahasan risiko tidak lagi dibuat terpisah setahun sekali. Risiko dibahas dalam rapat penyusunan anggaran, dalam perencanaan strategi, dan setiap kali perusahaan memutuskan proyek baru.",
  q: "Praktik ini paling mencerminkan prinsip ISO 31000:2018 yang mana?",
  options: ["Inclusive", "Integrated", "Dynamic", "Customized"],
  answer: 1,
  explain: "Integrated: risk management is an integral part of all organizational activities. Manajemen risiko menjadi bagian tak terpisahkan dari semua aktivitas organisasi, termasuk anggaran, strategi, dan keputusan proyek, bukan kegiatan terpisah.",
  why: [
    "Inclusive menyangkut pelibatan pemangku kepentingan, bukan menyatunya manajemen risiko dengan aktivitas organisasi.",
    null,
    "Dynamic menyangkut tanggapan terhadap perubahan konteks dan risiko.",
    "Customized menyangkut penyesuaian kerangka dan proses dengan konteks organisasi."]
},
{
  id: "T4-04", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Rumah sakit daerah",
  ctx: "Sebuah rumah sakit daerah tidak menyalin begitu saja template manajemen risiko milik bank. Kerangka dan proses risikonya disesuaikan dengan konteks eksternal dan internal rumah sakit serta sasaran pelayanan pasiennya.",
  q: "Praktik ini paling mencerminkan prinsip ISO 31000:2018 yang mana?",
  options: ["Customized", "Structured and comprehensive", "Best available information", "Continual improvement"],
  answer: 0,
  explain: "Customized: kerangka dan proses manajemen risiko disesuaikan dan proporsional dengan konteks eksternal dan internal organisasi yang terkait dengan sasarannya. Template bank tidak cocok untuk risiko keselamatan pasien.",
  why: [
    null,
    "Structured and comprehensive menyangkut pendekatan terstruktur yang menghasilkan hasil konsisten dan bisa dibandingkan.",
    "Best available information menyangkut kualitas data dan informasi yang dipakai.",
    "Continual improvement menyangkut perbaikan terus-menerus lewat pembelajaran dan pengalaman."]
},
{
  id: "T4-05", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Rencana pabrik baru",
  ctx: "Sebelum membangun pabrik baru, perusahaan mengajak warga sekitar, pemasok, serikat pekerja, dan dinas lingkungan hidup berdiskusi tentang risiko proyek. Pengetahuan, pandangan, dan persepsi mereka dipakai dalam penilaian risiko.",
  q: "Praktik ini paling mencerminkan prinsip ISO 31000:2018 yang mana?",
  options: ["Integrated", "Dynamic", "Inclusive", "Human and cultural factors"],
  answer: 2,
  explain: "Inclusive: pelibatan pemangku kepentingan yang tepat dan tepat waktu memungkinkan pengetahuan, pandangan, dan persepsi mereka dipertimbangkan. Hasilnya kesadaran yang lebih baik dan manajemen risiko yang lebih terinformasi.",
  why: [
    "Integrated menyangkut menyatunya manajemen risiko dengan aktivitas organisasi, bukan pelibatan pihak luar.",
    "Dynamic menyangkut tanggapan terhadap perubahan konteks.",
    null,
    "Human and cultural factors menyangkut pengaruh perilaku dan budaya manusia terhadap manajemen risiko."]
},
{
  id: "T4-06", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Bank dan perubahan pasar",
  ctx: "Setelah regulasi baru terbit dan pesaing digital masuk pasar, sebuah bank memperbarui profil risikonya setiap bulan, tidak lagi menunggu tinjauan tahunan. Tujuannya agar bank bisa mengantisipasi, mendeteksi, dan menanggapi perubahan tepat waktu.",
  q: "Praktik ini paling mencerminkan prinsip ISO 31000:2018 yang mana?",
  options: ["Continual improvement", "Customized", "Structured and comprehensive", "Dynamic"],
  answer: 3,
  explain: "Dynamic: risiko bisa muncul, berubah, atau hilang ketika konteks eksternal dan internal berubah. Manajemen risiko mengantisipasi, mendeteksi, mengakui, dan menanggapi perubahan itu secara tepat dan tepat waktu.",
  why: [
    "Continual improvement menekankan perbaikan lewat pembelajaran dan pengalaman. Kasus ini menekankan respons terhadap perubahan konteks.",
    "Customized menyangkut penyesuaian dengan konteks organisasi, bukan kecepatan menanggapi perubahan.",
    "Structured and comprehensive menyangkut konsistensi dan keterbandingan hasil.",
    null]
},
{
  id: "T4-07", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Peluncuran produk baru",
  ctx: "Saat menilai risiko penjualan produk baru, tim memakai data penjualan historis, informasi pasar terkini, dan perkiraan para ahli. Mereka juga mencatat keterbatasan data dan ketidakpastian dalam perkiraan itu, lalu membagikan hasilnya tepat waktu kepada pihak terkait.",
  q: "Praktik ini paling mencerminkan prinsip ISO 31000:2018 yang mana?",
  options: ["Inclusive", "Best available information", "Integrated", "Dynamic"],
  answer: 1,
  explain: "Best available information: masukan manajemen risiko didasarkan pada informasi historis dan terkini serta ekspektasi masa depan, dengan memperhitungkan keterbatasan dan ketidakpastian informasi itu. Informasi harus tepat waktu, jelas, dan tersedia bagi pemangku kepentingan terkait.",
  why: [
    "Inclusive menyangkut pelibatan pemangku kepentingan, bukan kualitas informasi.",
    null,
    "Integrated menyangkut menyatunya manajemen risiko dengan aktivitas organisasi.",
    "Dynamic menyangkut tanggapan terhadap perubahan konteks."]
},
{
  id: "T4-08", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Laporan nyaris celaka di pabrik",
  ctx: "Di sebuah pabrik, karyawan enggan melaporkan kejadian nyaris celaka (near miss) karena takut disalahkan atasan. Akibatnya banyak potensi kecelakaan tidak pernah tercatat. Manajemen kemudian membangun budaya pelaporan tanpa menyalahkan.",
  q: "Prinsip ISO 31000:2018 yang paling relevan dengan masalah dan perbaikan ini adalah…",
  options: ["Structured and comprehensive", "Customized", "Human and cultural factors", "Best available information"],
  answer: 2,
  explain: "Human and cultural factors: perilaku manusia dan budaya sangat memengaruhi semua aspek manajemen risiko di setiap tingkat dan tahap. Budaya takut disalahkan membuat risiko tersembunyi; ini sejalan dengan pesan Sesi 1 bahwa governance pada akhirnya soal perilaku manusia.",
  why: [
    "Masalahnya bukan metode yang tidak terstruktur, tetapi budaya yang membuat orang enggan melapor.",
    "Customized menyangkut penyesuaian kerangka dengan konteks organisasi.",
    null,
    "Data memang jadi kurang, tetapi akar masalahnya budaya. Perbaikannya pun berupa perubahan budaya."]
},
{
  id: "T4-09", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Tinjauan pasca-insiden",
  ctx: "Setiap kali terjadi insiden, perusahaan mengadakan tinjauan pasca-kejadian (post-incident review). Pelajaran yang didapat dipakai untuk memperbarui prosedur dan materi pelatihan, sehingga manajemen risikonya terus menjadi lebih baik.",
  q: "Praktik ini paling mencerminkan prinsip ISO 31000:2018 yang mana?",
  options: ["Dynamic", "Integrated", "Inclusive", "Continual improvement"],
  answer: 3,
  explain: "Continual improvement: manajemen risiko terus diperbaiki melalui pembelajaran dan pengalaman. Tinjauan pasca-insiden mengubah pengalaman buruk menjadi perbaikan prosedur.",
  why: [
    "Dynamic menekankan respons tepat waktu terhadap perubahan konteks, bukan belajar dari pengalaman.",
    "Integrated menyangkut menyatunya manajemen risiko dengan aktivitas organisasi.",
    "Inclusive menyangkut pelibatan pemangku kepentingan.",
    null]
},
{
  id: "T4-10", topic: 4, level: "aplikasi", src: "literatur",
  ctxTitle: "Grup usaha dengan lima anak perusahaan",
  ctx: "Sebuah grup usaha dengan lima anak perusahaan menetapkan satu metode penilaian risiko yang sama: kriteria dampak dan kemungkinan yang seragam serta format laporan yang sama. Hasilnya konsisten dan bisa dibandingkan antar-anak perusahaan.",
  q: "Praktik ini paling mencerminkan prinsip ISO 31000:2018 yang mana?",
  options: ["Customized", "Structured and comprehensive", "Inclusive", "Dynamic"],
  answer: 1,
  explain: "Structured and comprehensive: pendekatan yang terstruktur dan menyeluruh terhadap manajemen risiko menghasilkan hasil yang konsisten dan bisa dibandingkan (consistent and comparable results).",
  why: [
    "Customized berarti menyesuaikan dengan konteks tiap organisasi. Kasus ini justru menekankan keseragaman agar hasil bisa dibandingkan.",
    null,
    "Inclusive menyangkut pelibatan pemangku kepentingan.",
    "Dynamic menyangkut tanggapan terhadap perubahan konteks."]
},
{
  id: "T4-11", topic: 4, level: "konsep", src: "literatur",
  q: "How many risk management principles are listed in ISO 31000:2018?",
  options: ["5", "8", "11", "20"],
  answer: 1,
  explain: "ISO 31000:2018 memuat 8 prinsip: integrated; structured and comprehensive; customized; inclusive; dynamic; best available information; human and cultural factors; continual improvement. Versi 2009 memuat 11 prinsip, sedangkan 20 adalah jumlah prinsip COSO ERM 2017.",
  why: [
    "Lima adalah jumlah komponen COSO ERM 2017.",
    null,
    "Sebelas adalah jumlah prinsip ISO 31000:2009.",
    "Dua puluh adalah jumlah prinsip COSO ERM 2017."]
},
{
  id: "T4-12", topic: 4, level: "konsep", src: "literatur",
  q: "Which principle states that risk management is an integral part of all organizational activities?",
  options: ["Integrated", "Inclusive", "Customized", "Dynamic"],
  answer: 0,
  explain: "Integrated: risk management is an integral part of all organizational activities. Manajemen risiko bukan kegiatan terpisah, melainkan menyatu dengan strategi, anggaran, operasi, dan proyek.",
  why: [
    null,
    "Inclusive menyangkut pelibatan pemangku kepentingan.",
    "Customized menyangkut penyesuaian dengan konteks dan sasaran organisasi.",
    "Dynamic menyangkut tanggapan terhadap perubahan konteks dan risiko."]
},
{
  id: "T4-13", topic: 4, level: "konsep", src: "literatur",
  q: "According to ISO 31000:2018, a structured and comprehensive approach to risk management contributes to…",
  options: [
    "Faster decisions without any data",
    "The elimination of all uncertainties",
    "Consistent and comparable results",
    "Lower insurance premiums"
  ],
  answer: 2,
  explain: "Structured and comprehensive: a structured and comprehensive approach to risk management contributes to consistent and comparable results. Hasil penilaian risiko antar-unit atau antar-periode jadi bisa dibandingkan.",
  why: [
    "Pendekatan terstruktur justru membutuhkan data dan metode yang jelas.",
    "Ketidakpastian tidak bisa dihilangkan.",
    null,
    "Premi asuransi tidak disebut dalam prinsip ini."]
},
{
  id: "T4-14", topic: 4, level: "konsep", src: "literatur",
  q: "The principle “customized” means that the risk management framework and process are…",
  options: [
    "Copied from the best-practice template of another industry",
    "Customized and proportionate to the organization’s external and internal context related to its objectives",
    "Designed only by external consultants",
    "Updated only once every few years"
  ],
  answer: 1,
  explain: "Customized: the risk management framework and process are customized and proportionate to the organization’s external and internal context related to its objectives. Rumah sakit tidak boleh sekadar menyalin template bank.",
  why: [
    "Menyalin template industri lain justru bertentangan dengan prinsip customized.",
    null,
    "Prinsip ini tidak mengatur siapa yang merancang.",
    "Jarang diperbarui bertentangan dengan prinsip dynamic."]
},
{
  id: "T4-15", topic: 4, level: "konsep", src: "literatur",
  q: "Which principle emphasises that risks can emerge, change or disappear as an organization’s external and internal context changes?",
  options: ["Continual improvement", "Best available information", "Dynamic", "Human and cultural factors"],
  answer: 2,
  explain: "Dynamic: risks can emerge, change or disappear as an organization’s external and internal context changes. Risk management anticipates, detects, acknowledges and responds to those changes and events in an appropriate and timely manner.",
  why: [
    "Continual improvement menyangkut perbaikan lewat pembelajaran dan pengalaman.",
    "Best available information menyangkut kualitas informasi yang dipakai.",
    null,
    "Human and cultural factors menyangkut pengaruh perilaku dan budaya."]
},
{
  id: "T4-16", topic: 4, level: "konsep", src: "literatur",
  q: "Under the principle “best available information”, the information used in risk management should be…",
  options: [
    "Based only on historical data",
    "Kept confidential from all stakeholders",
    "Perfect and free of uncertainty before any decision is made",
    "Timely, clear and available to relevant stakeholders, taking into account its limitations and uncertainties"
  ],
  answer: 3,
  explain: "Best available information: inputs are based on historical and current information, as well as on future expectations. Risk management explicitly takes into account any limitations and uncertainties; information should be timely, clear and available to relevant stakeholders.",
  why: [
    "Informasi historis saja tidak cukup; perlu informasi terkini dan ekspektasi masa depan.",
    "Informasi justru harus tersedia bagi pemangku kepentingan terkait.",
    "Informasi sempurna tidak pernah ada; keterbatasannya harus diperhitungkan, bukan ditunggu hilang.",
    null]
},
{
  id: "T4-17", topic: 4, level: "konsep", src: "literatur",
  q: "Which principle states that human behaviour and culture significantly influence all aspects of risk management at each level and stage?",
  options: ["Inclusive", "Human and cultural factors", "Integrated", "Structured and comprehensive"],
  answer: 1,
  explain: "Human and cultural factors: human behaviour and culture significantly influence all aspects of risk management at each level and stage. Ini sejalan dengan Sesi 1: governance pada akhirnya soal perilaku manusia.",
  why: [
    "Inclusive menyangkut pelibatan pemangku kepentingan.",
    null,
    "Integrated menyangkut menyatunya manajemen risiko dengan semua aktivitas.",
    "Structured and comprehensive menyangkut konsistensi dan keterbandingan hasil."]
},
{
  id: "T4-18", topic: 4, level: "konsep", src: "literatur",
  q: "Appropriate and timely involvement of stakeholders, so that their knowledge, views and perceptions are considered, describes which principle?",
  options: ["Inclusive", "Dynamic", "Customized", "Continual improvement"],
  answer: 0,
  explain: "Inclusive: appropriate and timely involvement of stakeholders enables their knowledge, views and perceptions to be considered. This results in improved awareness and informed risk management.",
  why: [
    null,
    "Dynamic menyangkut tanggapan terhadap perubahan konteks.",
    "Customized menyangkut penyesuaian dengan konteks organisasi.",
    "Continual improvement menyangkut perbaikan lewat pembelajaran dan pengalaman."]
}
);
