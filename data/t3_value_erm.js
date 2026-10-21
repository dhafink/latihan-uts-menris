// Topik 3 — The Value of ERM
// Belum ada foto materi tortoic untuk chapter ini. Soal disusun dari literatur standar:
// ISO 31000:2018 (purpose: creation and protection of value), COSO ERM 2017 (risk appetite, enhanced value),
// dan konsep upside/downside risk dari slide Sesi 2.
// T3-09..T3-16 = soal tambahan bahasa Inggris bergaya Review Questions tortoic.
window.QUESTIONS.push(
{
  id: "T3-01", topic: 3, level: "konsep", src: "literatur",
  q: "Menurut ISO 31000:2018, tujuan (purpose) manajemen risiko adalah…",
  options: [
    "Menghilangkan seluruh risiko organisasi",
    "Memenuhi permintaan regulator",
    "Menciptakan dan melindungi nilai (creation and protection of value)",
    "Memindahkan semua risiko ke perusahaan asuransi"
  ],
  answer: 2,
  explain: "ISO 31000:2018 menyatakan: the purpose of risk management is the creation and protection of value. Manajemen risiko meningkatkan kinerja, mendorong inovasi, dan mendukung pencapaian sasaran. Frasa value creation and protection inilah yang diletakkan di pusat delapan prinsip ISO 31000.",
  why: [
    "Risiko tidak bisa dihilangkan seluruhnya. Sesi 1 pun menegaskan: risk management does not eliminate risk.",
    "Kepatuhan hanya salah satu manfaat, bukan tujuan utama.",
    null,
    "Transfer ke asuransi hanyalah salah satu pilihan perlakuan risiko, bukan tujuan manajemen risiko."]
},
{
  id: "T3-02", topic: 3, level: "konsep", src: "literatur",
  q: "Dalam ERM, efek risiko terhadap sasaran bisa positif maupun negatif. Efek yang positif, yaitu peluang yang bisa menambah nilai, disebut…",
  options: ["Upside risk", "Downside risk", "Residual risk", "Inherent risk"],
  answer: 0,
  explain: "ISO 31000 menjelaskan efek (effect) sebagai penyimpangan dari yang diharapkan, yang bisa positif, negatif, atau keduanya. Sisi positif disebut upside risk (peluang); sisi negatif disebut downside risk (ancaman). ERM mengelola keduanya: menangkap peluang dan mengendalikan ancaman.",
  why: [
    null,
    "Downside risk adalah sisi negatif, yaitu ancaman yang merusak nilai.",
    "Residual risk adalah risiko yang tersisa setelah perlakuan risiko.",
    "Inherent risk adalah risiko sebelum ada pengendalian atau perlakuan."]
},
{
  id: "T3-03", topic: 3, level: "konsep", src: "literatur",
  q: "Manakah yang BUKAN manfaat penerapan ERM?",
  options: [
    "Mengurangi kejutan (surprises) dan kerugian operasional",
    "Memperbaiki kualitas keputusan dan alokasi sumber daya",
    "Membantu organisasi menangkap peluang",
    "Menjamin organisasi tidak akan pernah mengalami kerugian"
  ],
  answer: 3,
  explain: "ERM menambah nilai dengan mengurangi kejutan dan kerugian, memperbaiki keputusan dan alokasi modal, menyelaraskan selera risiko (risk appetite) dengan strategi, dan membantu menangkap peluang. Namun ERM tidak menjamin kerugian tidak akan pernah terjadi: ERM menaikkan peluang berhasil dan menurunkan peluang gagal, bukan menghilangkan risiko.",
  why: [
    "Ini manfaat ERM: risiko yang sudah diantisipasi tidak lagi menjadi kejutan.",
    "Ini manfaat ERM: keputusan diambil dengan memperhitungkan risiko, sehingga sumber daya diarahkan ke prioritas.",
    "Ini manfaat ERM: sisi upside risk ikut dikelola.",
    null]
},
{
  id: "T3-04", topic: 3, level: "kasus", src: "literatur",
  ctxTitle: "Kasus PT Arunika dan PT Bintang",
  ctx: "PT Arunika dan PT Bintang sama-sama memproduksi keripik singkong.\n\nPT Arunika sudah menerapkan ERM: risiko gagal panen singkong dipetakan, dua pemasok cadangan di provinsi lain sudah dikontrak, dan stok bahan baku untuk tiga minggu disiapkan. PT Bintang belum pernah memetakan risikonya.\n\nSaat banjir merusak panen di daerah pemasok utama, PT Bintang berhenti produksi selama sebulan. PT Arunika tetap berproduksi dan memenangkan kontrak dua jaringan minimarket yang sebelumnya dipasok PT Bintang.",
  q: "Nilai ERM yang paling tergambar dari kasus ini adalah…",
  options: [
    "ERM membuat banjir dan gagal panen tidak terjadi",
    "ERM melindungi nilai (produksi tetap berjalan) sekaligus menciptakan nilai (merebut kontrak baru saat pesaing terganggu)",
    "ERM hanya bernilai bagi perusahaan besar yang diawasi regulator",
    "ERM bernilai terutama karena laporan risikonya lengkap"
  ],
  answer: 1,
  explain: "Kasus ini memperlihatkan dua sisi tujuan manajemen risiko: protection of value (pasokan dan produksi PT Arunika terlindungi) dan creation of value (peluang kontrak baru tertangkap). ERM tidak mencegah banjir, tetapi membuat dampaknya pada sasaran bisa dikendalikan.",
  why: [
    "ERM tidak bisa mencegah kejadian alam; yang dikelola adalah dampaknya pada sasaran.",
    null,
    "Kasusnya justru produsen keripik biasa; ERM bisa diterapkan organisasi ukuran apa pun.",
    "Laporan hanyalah alat. Nilainya ada pada keputusan dan tindakan yang diambil (pemasok cadangan, stok)."]
},
{
  id: "T3-05", topic: 3, level: "konsep", src: "literatur",
  q: "Dalam ERM, istilah risk appetite (selera risiko) berarti…",
  options: [
    "Daftar seluruh risiko yang sudah terjadi tahun lalu",
    "Batas nilai pertanggungan asuransi perusahaan",
    "Jenis dan besaran risiko yang bersedia diterima organisasi dalam mengejar sasaran atau nilainya",
    "Keinginan direksi untuk menghindari semua risiko"
  ],
  answer: 2,
  explain: "COSO ERM 2017 mendefinisikan risk appetite sebagai the types and amount of risk, on a broad level, an organization is willing to accept in pursuit of value. Selera risiko menghubungkan manajemen risiko dengan strategi: keputusan yang risikonya di luar selera itu perlu ditinjau ulang.",
  why: [
    "Risiko yang sudah terjadi adalah masalah (problem), bukan selera risiko.",
    "Pertanggungan asuransi adalah alat transfer risiko, bukan selera risiko.",
    null,
    "Menghindari semua risiko berarti juga kehilangan peluang. Selera risiko justru menyatakan risiko mana yang mau diambil."]
},
{
  id: "T3-06", topic: 3, level: "aplikasi", src: "literatur",
  ctxTitle: "Kebijakan direktur utama",
  ctx: "Direktur utama sebuah startup logistik memerintahkan: tidak boleh ada proyek baru, ekspansi, atau produk baru sampai semua risikonya bisa dipastikan nol.",
  q: "Menurut cara pandang ERM, apa akibat paling mungkin dari kebijakan ini?",
  options: [
    "Nilai perusahaan bisa tergerus karena peluang ikut hilang; tanpa mengambil risiko yang terukur, tidak ada penciptaan nilai baru",
    "Perusahaan pasti aman karena risikonya sudah nol",
    "Perusahaan akan tumbuh lebih cepat karena biaya mitigasi berkurang",
    "Tidak ada akibat apa pun selama laporan keuangannya wajar"
  ],
  answer: 0,
  explain: "Risiko tidak mungkin dipastikan nol, karena ketidakpastian selalu ada. Menunggu risiko nol berarti tidak pernah mengambil keputusan, sehingga sisi upside hilang: good things do not happen, no creation of value (slide Sesi 2). ERM mendorong pengambilan risiko yang terukur dan sesuai selera risiko, bukan penghindaran total.",
  why: [
    null,
    "Risiko nol tidak pernah bisa dicapai; ketidakpastian selalu terjadi di sekitar kita.",
    "Tanpa proyek dan produk baru, sumber pertumbuhan justru hilang.",
    "Hilangnya peluang tetap menggerus nilai walaupun laporan keuangannya wajar."]
},
{
  id: "T3-07", topic: 3, level: "kasus", src: "literatur", kasus: "nusakopi",
  ctxTitle: "PT Nusa Kopi setelah menerapkan ERM",
  ctx: "Setelah menerapkan ERM, direksi PT Nusa Kopi kini melihat risiko kurs, pasokan biji kopi, persaingan harga, dan gangguan aplikasi dalam satu peta risiko yang dikaitkan dengan sasaran 100 kedai pada akhir 2027.",
  q: "Keputusan mana yang paling mencerminkan nilai ERM?",
  options: [
    "Setiap departemen tetap memitigasi risikonya sendiri dengan anggaran yang sama seperti tahun lalu",
    "Membatalkan seluruh rencana ekspansi supaya tidak ada risiko",
    "Memprioritaskan anggaran mitigasi pada risiko gabungan yang paling mengancam sasaran ekspansi (misalnya menambah pemasok di daerah lain) dan menunda pembukaan kedai di kota yang paling berisiko",
    "Menunggu masalah terjadi, lalu membentuk tim krisis"
  ],
  answer: 2,
  explain: "Nilai ERM muncul ketika pandangan risiko yang terintegrasi dipakai untuk mengambil keputusan: sumber daya diarahkan ke risiko yang paling memengaruhi sasaran, dan rencana disesuaikan dengan selera risiko. Ekspansi tetap berjalan (penciptaan nilai) dengan risiko yang terkendali (perlindungan nilai).",
  why: [
    "Ini kembali ke pola silo; peta risiko terintegrasi tidak dipakai untuk mengambil keputusan.",
    "Membatalkan semua ekspansi menghilangkan sisi penciptaan nilai.",
    null,
    "Ini reaktif. Risk management bekerja sebelum masalah terjadi."]
},
{
  id: "T3-08", topic: 3, level: "konsep", src: "literatur",
  q: "Cara pandang ERM terhadap manajemen risiko yang paling tepat adalah…",
  options: [
    "Kegiatan tahunan mengisi formulir untuk regulator",
    "Bagian dari pengambilan keputusan strategis untuk mencapai sasaran dan menciptakan nilai, bukan sekadar fungsi kepatuhan atau pengendalian kerugian",
    "Tugas tambahan bagian audit internal",
    "Fungsi pembelian polis asuransi"
  ],
  answer: 1,
  explain: "ERM menempatkan risiko di jantung strategi dan pengambilan keputusan. COSO ERM 2017 bahkan diberi subjudul Integrating with Strategy and Performance, dan prinsip pertama ISO 31000:2018 adalah integrated: manajemen risiko adalah bagian tak terpisahkan dari semua aktivitas organisasi.",
  why: [
    "Ini pandangan formalitas kepatuhan yang justru ingin diubah ERM.",
    null,
    "Audit internal memberi asurans independen; pengelolaan risiko tetap tanggung jawab manajemen dan pemilik risiko.",
    "Asuransi hanyalah salah satu cara transfer risiko."]
},
{
  id: "T3-09", topic: 3, level: "konsep", src: "literatur",
  q: "Based on the ISO 31000 definition of risk, the effect of uncertainty on objectives can be…",
  options: ["Only negative", "Only positive", "Positive, negative, or both", "Neither positive nor negative"],
  answer: 2,
  explain: "ISO 31000: an effect is a deviation from the expected; it can be positive, negative, or both. Karena itu ERM mengelola dua sisi: upside risk (peluang) dan downside risk (ancaman).",
  why: [
    "Risiko tidak hanya negatif; ada sisi peluang (upside).",
    "Risiko tidak hanya positif; ada sisi ancaman (downside).",
    null,
    "Efek berarti penyimpangan dari yang diharapkan, jadi pasti ke arah positif dan/atau negatif."]
},
{
  id: "T3-10", topic: 3, level: "konsep", src: "literatur", fig: "kpikri:polos",
  q: "When “bad things happen” and damage the value of the organisation, this side of risk is called…",
  options: ["Upside risk", "Downside risk", "Opportunity", "Risk appetite"],
  answer: 1,
  explain: "Downside risk: bad things happen → damage to the value of the organization. Upside risk: good things do not happen → no creation of value. Ancaman dipantau dengan KRI, peluang dengan KPI.",
  why: [
    "Upside risk adalah peluang yang gagal ditangkap, bukan hal buruk yang terjadi.",
    null,
    "Opportunity adalah sisi positif, bukan hal buruk.",
    "Risk appetite adalah besaran risiko yang bersedia diterima organisasi."]
},
{
  id: "T3-11", topic: 3, level: "konsep", src: "literatur",
  q: "When an organisation fails to capture an opportunity (“good things do not happen”), what is the consequence?",
  options: [
    "No creation of value",
    "Damage to the value of the organization",
    "A natural-based disaster",
    "An increase in risk appetite"
  ],
  answer: 0,
  explain: "Upside risk yang tidak dikelola membuat good things do not happen, sehingga tidak ada nilai yang tercipta (no creation of value). Inilah alasan ERM tidak boleh hanya fokus menghindari kerugian.",
  why: [
    null,
    "Ini akibat downside risk (bad things happen).",
    "Disaster alam tidak ada hubungannya dengan gagal menangkap peluang.",
    "Selera risiko tidak berubah karena peluang terlewat."]
},
{
  id: "T3-12", topic: 3, level: "konsep", src: "literatur",
  q: "Which statement best describes how ERM adds value to an organisation?",
  options: [
    "ERM eliminates all risks",
    "ERM only reduces insurance costs",
    "ERM transfers responsibility for risk to regulators",
    "ERM increases the likelihood of achieving objectives by managing both threats and opportunities"
  ],
  answer: 3,
  explain: "ERM tidak menghilangkan risiko. ERM menaikkan peluang mencapai sasaran dengan mengendalikan ancaman (melindungi nilai) dan menangkap peluang (menciptakan nilai). Ini sejalan dengan kesimpulan Chapter 1 dan pesan kasus motor di Sesi 1.",
  why: [
    "Risiko tidak bisa dihilangkan seluruhnya.",
    "Penghematan asuransi bukan inti nilai ERM.",
    "Tanggung jawab risiko tetap di dalam organisasi, terutama dewan dan manajemen.",
    null]
},
{
  id: "T3-13", topic: 3, level: "aplikasi", src: "literatur",
  q: "Which of the following is an example of value PROTECTION through ERM?",
  options: [
    "Launching a new product line after assessing market opportunities",
    "Entering a new market while competitors are disrupted",
    "Preparing backup suppliers so production continues when the main supplier fails",
    "Increasing the marketing budget without any analysis"
  ],
  answer: 2,
  explain: "Melindungi nilai berarti menjaga nilai yang sudah ada dari ancaman (downside risk). Pemasok cadangan membuat produksi tetap berjalan saat pemasok utama gagal, sehingga pendapatan dan kepercayaan pelanggan terlindungi.",
  why: [
    "Meluncurkan produk baru adalah penciptaan nilai (upside).",
    "Masuk pasar baru saat pesaing terganggu adalah penciptaan nilai.",
    null,
    "Menambah anggaran tanpa analisis bukan praktik ERM."]
},
{
  id: "T3-14", topic: 3, level: "aplikasi", src: "literatur",
  q: "Which of the following is an example of value CREATION through ERM?",
  options: [
    "Installing fire extinguishers in the warehouse",
    "Taking a measured risk to expand into a new city after analysing that it is within the risk appetite",
    "Buying insurance for company vehicles",
    "Backing up company data every day"
  ],
  answer: 1,
  explain: "Menciptakan nilai berarti menangkap peluang (upside risk) dengan mengambil risiko yang terukur dan sesuai selera risiko. Ekspansi setelah analisis adalah contohnya. Tiga opsi lain adalah perlindungan nilai.",
  why: [
    "Alat pemadam melindungi aset dari kebakaran (perlindungan nilai).",
    null,
    "Asuransi kendaraan mentransfer risiko kerugian (perlindungan nilai).",
    "Backup data melindungi dari kehilangan data (perlindungan nilai)."]
},
{
  id: "T3-15", topic: 3, level: "konsep", src: "literatur",
  q: "According to ISO 31000:2018, risk management that creates and protects value contributes to…",
  options: [
    "Improving performance, encouraging innovation, and supporting the achievement of objectives",
    "Reducing the number of employees",
    "Eliminating the need for a strategy",
    "Guaranteeing profit every year"
  ],
  answer: 0,
  explain: "ISO 31000:2018: the purpose of risk management is the creation and protection of value. It improves performance, encourages innovation and supports the achievement of objectives.",
  why: [
    null,
    "Pengurangan karyawan bukan tujuan manajemen risiko.",
    "Manajemen risiko justru terintegrasi dengan strategi.",
    "Tidak ada yang bisa menjamin laba; risiko tetap ada."]
},
{
  id: "T3-16", topic: 3, level: "aplikasi", src: "literatur",
  ctxTitle: "Perawatan mesin",
  ctx: "Sebuah pabrik mengeluarkan anggaran kecil untuk perawatan rutin mesin utama. Berkat itu, kerusakan yang bisa menghentikan produksi selama sebulan berhasil dihindari.",
  q: "What does this case illustrate, according to Chapter 1 and the value of ERM?",
  options: [
    "Crisis management is the best way to achieve objectives",
    "Preventive maintenance is a disaster recovery strategy",
    "Risk management eliminates any possibility of machine breakdowns",
    "Preventing problems before they occur is better than preparing to manage them after they occur"
  ],
  answer: 3,
  explain: "Kesimpulan Chapter 1: “Why should you prepare to manage your organisation problems, if you could prevent those problems before it occurs?” Biaya pencegahan kecil melindungi nilai yang jauh lebih besar; inilah nilai ERM.",
  why: [
    "Crisis management baru bekerja setelah masalah membesar.",
    "Disaster recovery adalah pemulihan setelah disaster, bukan pencegahan.",
    "Perawatan menurunkan kemungkinan kerusakan, tetapi tidak menghilangkannya.",
    null]
}
);
