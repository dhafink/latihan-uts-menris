// Topik 3 — The Value of ERM
// Belum ada foto materi tortoic untuk topik ini. Soal disusun dari literatur standar:
// ISO 31000:2018 (purpose: creation and protection of value), COSO ERM 2017 (risk appetite, enhanced value),
// dan konsep upside/downside risk dari slide kuliah.
// T3-09..T3-16 = soal tambahan bahasa Inggris bergaya Review Questions tortoic.
window.QUESTIONS.push(
{
  id: "T3-01", topic: 3, level: "konsep", src: "literatur",
  q: "Apa tujuan (purpose) manajemen risiko menurut ISO 31000:2018?",
  options: [
    "Menghilangkan seluruh risiko organisasi",
    "Memenuhi permintaan regulator",
    "Menciptakan dan melindungi nilai (creation and protection of value)",
    "Memindahkan semua risiko ke perusahaan asuransi"
  ],
  answer: 2,
  explain: "ISO 31000:2018: the purpose of risk management is the creation and protection of value. Artinya manajemen risiko ada untuk menciptakan nilai baru dan menjaga nilai yang sudah dimiliki. Frasa ini juga yang ditaruh di pusat delapan prinsip ISO 31000.",
  why: [
    "Risiko tidak mungkin dihilangkan seluruhnya; manajemen risiko hanya menaikkan peluang berhasil.",
    "Patuh pada regulator hanya salah satu manfaat, bukan tujuan utamanya.",
    null,
    "Asuransi hanyalah salah satu cara menangani risiko, bukan tujuan manajemen risiko."]
},
{
  id: "T3-02", topic: 3, level: "konsep", src: "literatur",
  q: "Efek risiko terhadap sasaran bisa positif atau negatif. Efek yang positif, yaitu peluang yang bisa menambah nilai, disebut…",
  options: ["Upside risk", "Downside risk", "Residual risk", "Inherent risk"],
  answer: 0,
  explain: "Efek risiko bisa positif, negatif, atau keduanya. Sisi positif disebut upside risk (peluang), sisi negatif disebut downside risk (ancaman). ERM mengelola keduanya.",
  why: [
    null,
    "Downside risk adalah sisi negatif, yaitu ancaman yang merusak nilai.",
    "Residual risk adalah risiko yang masih tersisa setelah risiko ditangani.",
    "Inherent risk adalah risiko sebelum ada pengendalian apa pun."]
},
{
  id: "T3-03", topic: 3, level: "konsep", src: "literatur",
  q: "Mana yang BUKAN manfaat menerapkan ERM?",
  options: [
    "Mengurangi kejutan (surprises) dan kerugian operasional",
    "Memperbaiki kualitas keputusan dan pembagian sumber daya",
    "Membantu organisasi menangkap peluang",
    "Menjamin organisasi tidak akan pernah rugi"
  ],
  answer: 3,
  explain: "ERM mengurangi kejutan dan kerugian, memperbaiki keputusan, dan membantu menangkap peluang. Tapi ERM tidak bisa menjamin organisasi tidak pernah rugi. ERM hanya menaikkan peluang berhasil dan menurunkan peluang gagal.",
  why: [
    "Ini manfaat ERM: risiko yang sudah diantisipasi tidak lagi jadi kejutan.",
    "Ini manfaat ERM: keputusan memperhitungkan risiko, jadi sumber daya lebih tepat sasaran.",
    "Ini manfaat ERM: sisi peluang (upside) ikut dikelola.",
    null]
},
{
  id: "T3-04", topic: 3, level: "kasus", src: "literatur",
  ctxTitle: "Kasus PT Arunika dan PT Bintang",
  ctx: "PT Arunika dan PT Bintang sama-sama membuat keripik singkong.\n\nPT Arunika sudah menerapkan ERM. Risiko gagal panen singkong sudah dipetakan, dua pemasok cadangan di provinsi lain sudah dikontrak, dan stok bahan baku untuk tiga minggu sudah disiapkan. PT Bintang belum pernah memetakan risikonya.\n\nSaat banjir merusak panen di daerah pemasok utama, PT Bintang berhenti produksi selama sebulan. PT Arunika tetap berproduksi dan memenangkan kontrak dua jaringan minimarket yang sebelumnya dipasok PT Bintang.",
  q: "Nilai ERM apa yang paling terlihat dari kasus ini?",
  options: [
    "ERM membuat banjir dan gagal panen tidak terjadi",
    "ERM melindungi nilai (produksi tetap jalan) sekaligus menciptakan nilai (merebut kontrak baru saat pesaing terganggu)",
    "ERM hanya berguna bagi perusahaan besar yang diawasi regulator",
    "ERM berguna terutama karena laporan risikonya lengkap"
  ],
  answer: 1,
  explain: "Kasus ini menunjukkan dua sisi nilai ERM sekaligus. Produksi PT Arunika tetap jalan (nilai terlindungi) dan ia mendapat kontrak baru (nilai tercipta). ERM tidak mencegah banjir, tapi membuat dampaknya bisa dikendalikan.",
  why: [
    "ERM tidak bisa mencegah kejadian alam; yang dikelola adalah dampaknya.",
    null,
    "Contohnya justru produsen keripik biasa, jadi ERM cocok untuk organisasi ukuran apa pun.",
    "Laporan hanya alat; nilainya ada pada tindakan nyata seperti pemasok cadangan dan stok."]
},
{
  id: "T3-05", topic: 3, level: "konsep", src: "literatur",
  q: "Apa arti risk appetite (selera risiko)?",
  options: [
    "Daftar semua risiko yang sudah terjadi tahun lalu",
    "Batas nilai pertanggungan asuransi perusahaan",
    "Jenis dan besar risiko yang mau diterima organisasi untuk mengejar sasaran atau nilainya",
    "Keinginan direksi untuk menghindari semua risiko"
  ],
  answer: 2,
  explain: "COSO ERM 2017: risk appetite adalah the types and amount of risk an organization is willing to accept in pursuit of value. Selera risiko menjadi patokan: keputusan dengan risiko di luar selera itu perlu ditinjau ulang.",
  why: [
    "Risiko yang sudah terjadi namanya masalah (problem), bukan selera risiko.",
    "Asuransi adalah alat memindahkan risiko, bukan selera risiko.",
    null,
    "Selera risiko justru menyatakan risiko mana yang mau diambil, bukan menghindari semuanya."]
},
{
  id: "T3-06", topic: 3, level: "aplikasi", src: "literatur",
  ctxTitle: "Kebijakan direktur utama",
  ctx: "Direktur utama sebuah startup logistik memerintahkan: tidak boleh ada proyek baru, ekspansi, atau produk baru sampai semua risikonya bisa dipastikan nol.",
  q: "Apa akibat yang paling mungkin dari kebijakan ini?",
  options: [
    "Nilai perusahaan bisa turun karena peluang ikut hilang; tanpa berani mengambil risiko yang terukur, tidak ada nilai baru yang tercipta",
    "Perusahaan pasti aman karena risikonya sudah nol",
    "Perusahaan akan tumbuh lebih cepat karena biaya mitigasi berkurang",
    "Tidak ada akibat apa pun selama laporan keuangannya wajar"
  ],
  answer: 0,
  explain: "Risiko tidak mungkin dibuat nol, karena ketidakpastian selalu ada. Menunggu risiko nol sama saja tidak pernah mengambil keputusan, sehingga peluang hilang (good things do not happen, no creation of value). ERM mendorong mengambil risiko yang terukur, bukan menghindari semuanya.",
  why: [
    null,
    "Risiko nol tidak pernah bisa dicapai.",
    "Tanpa proyek dan produk baru, sumber pertumbuhan justru hilang.",
    "Peluang yang hilang tetap menggerus nilai walaupun laporan keuangannya wajar."]
},
{
  id: "T3-07", topic: 3, level: "kasus", src: "literatur", kasus: "nusakopi",
  ctxTitle: "PT Nusa Kopi setelah menerapkan ERM",
  ctx: "Setelah menerapkan ERM, direksi PT Nusa Kopi kini melihat risiko kurs, pasokan biji kopi, perang harga, dan gangguan aplikasi dalam satu peta risiko. Peta itu dikaitkan dengan target 100 kedai pada akhir 2027.",
  q: "Keputusan mana yang paling menunjukkan nilai ERM?",
  options: [
    "Setiap departemen tetap menangani risikonya sendiri dengan anggaran yang sama seperti tahun lalu",
    "Membatalkan semua rencana ekspansi supaya tidak ada risiko",
    "Mendahulukan anggaran untuk risiko gabungan yang paling mengancam target ekspansi (misalnya menambah pemasok dari daerah lain), dan menunda kedai baru di kota yang paling berisiko",
    "Menunggu masalah terjadi, lalu membentuk tim krisis"
  ],
  answer: 2,
  explain: "Nilai ERM muncul saat peta risiko yang utuh dipakai untuk mengambil keputusan. Anggaran diarahkan ke risiko yang paling mengancam target, dan rencana disesuaikan. Ekspansi tetap jalan (nilai tercipta) dengan risiko yang terkendali (nilai terlindungi).",
  why: [
    "Ini kembali ke cara lama yang terkotak-kotak; peta risiko tidak dipakai.",
    "Membatalkan semua ekspansi berarti tidak ada nilai baru yang tercipta.",
    null,
    "Ini menunggu sampai terlambat; manajemen risiko bekerja sebelum masalah terjadi."]
},
{
  id: "T3-08", topic: 3, level: "konsep", src: "literatur",
  q: "Bagaimana ERM memandang manajemen risiko?",
  options: [
    "Kegiatan tahunan mengisi formulir untuk regulator",
    "Bagian dari pengambilan keputusan strategis untuk mencapai sasaran dan menciptakan nilai, bukan sekadar urusan kepatuhan atau menekan kerugian",
    "Tugas tambahan bagian audit internal",
    "Urusan membeli polis asuransi"
  ],
  answer: 1,
  explain: "ERM menaruh risiko di tengah strategi dan pengambilan keputusan. COSO ERM 2017 bahkan diberi subjudul Integrating with Strategy and Performance. Prinsip pertama ISO 31000:2018 juga integrated: manajemen risiko menyatu dengan semua kegiatan organisasi.",
  why: [
    "Ini pandangan formalitas yang justru ingin diubah oleh ERM.",
    null,
    "Audit internal hanya memeriksa secara independen; pengelola risikonya tetap manajemen.",
    "Asuransi hanya satu cara memindahkan risiko."]
},
{
  id: "T3-09", topic: 3, level: "konsep", src: "literatur",
  q: "Risk is the effect of uncertainty on objectives. This effect can be…",
  options: ["Only negative", "Only positive", "Positive, negative, or both", "Neither positive nor negative"],
  answer: 2,
  explain: "Efek berarti penyimpangan dari yang diharapkan, dan bisa positif, negatif, atau keduanya. Karena itu ERM mengelola dua sisi: upside risk (peluang) dan downside risk (ancaman).",
  why: [
    "Risiko tidak hanya negatif; ada juga sisi peluang.",
    "Risiko tidak hanya positif; ada juga sisi ancaman.",
    null,
    "Penyimpangan dari harapan pasti mengarah ke positif dan/atau negatif."]
},
{
  id: "T3-10", topic: 3, level: "konsep", src: "literatur", fig: "kpikri:polos",
  q: "When “bad things happen” and damage the value of the organisation, this side of risk is called…",
  options: ["Upside risk", "Downside risk", "Opportunity", "Risk appetite"],
  answer: 1,
  explain: "Downside risk: bad things happen, sehingga nilai organisasi rusak. Upside risk: good things do not happen, sehingga tidak ada nilai yang tercipta. Ancaman dipantau dengan KRI, peluang dengan KPI.",
  why: [
    "Upside risk adalah peluang yang gagal ditangkap, bukan hal buruk yang terjadi.",
    null,
    "Opportunity adalah sisi positif, bukan hal buruk.",
    "Risk appetite adalah besar risiko yang mau diterima organisasi."]
},
{
  id: "T3-11", topic: 3, level: "konsep", src: "literatur",
  q: "If an organisation misses an opportunity (“good things do not happen”), what is the result?",
  options: [
    "No creation of value",
    "Damage to the value of the organization",
    "A natural-based disaster",
    "An increase in risk appetite"
  ],
  answer: 0,
  explain: "Kalau peluang (upside risk) tidak ditangkap, good things do not happen dan tidak ada nilai baru yang tercipta. Karena itu ERM tidak boleh hanya fokus menghindari kerugian.",
  why: [
    null,
    "Ini akibat downside risk, yaitu hal buruk yang terjadi.",
    "Bencana alam tidak ada hubungannya dengan peluang yang terlewat.",
    "Selera risiko tidak berubah karena peluang terlewat."]
},
{
  id: "T3-12", topic: 3, level: "konsep", src: "literatur",
  q: "How does ERM add value to an organisation?",
  options: [
    "ERM eliminates all risks",
    "ERM only reduces insurance costs",
    "ERM moves the responsibility for risk to regulators",
    "ERM increases the chance of achieving objectives by managing both threats and opportunities"
  ],
  answer: 3,
  explain: "ERM tidak menghilangkan risiko. ERM menaikkan peluang mencapai sasaran dengan mengendalikan ancaman (melindungi nilai) dan menangkap peluang (menciptakan nilai).",
  why: [
    "Risiko tidak bisa dihilangkan seluruhnya.",
    "Hemat biaya asuransi bukan inti nilai ERM.",
    "Tanggung jawab risiko tetap di dalam organisasi, terutama dewan dan manajemen.",
    null]
},
{
  id: "T3-13", topic: 3, level: "aplikasi", src: "literatur",
  q: "Which of the following is an example of value PROTECTION?",
  options: [
    "Launching a new product line after studying market opportunities",
    "Entering a new market while competitors are in trouble",
    "Preparing backup suppliers so production continues when the main supplier fails",
    "Increasing the marketing budget without any analysis"
  ],
  answer: 2,
  explain: "Melindungi nilai berarti menjaga apa yang sudah dimiliki dari ancaman. Pemasok cadangan membuat produksi tetap jalan saat pemasok utama gagal, sehingga pendapatan dan kepercayaan pelanggan terjaga.",
  why: [
    "Meluncurkan produk baru adalah menciptakan nilai, bukan melindungi.",
    "Masuk pasar baru saat pesaing terganggu adalah menciptakan nilai.",
    null,
    "Menambah anggaran tanpa analisis bukan praktik ERM."]
},
{
  id: "T3-14", topic: 3, level: "aplikasi", src: "literatur",
  q: "Which of the following is an example of value CREATION?",
  options: [
    "Installing fire extinguishers in the warehouse",
    "Expanding into a new city after checking that the risk is within the risk appetite",
    "Buying insurance for company vehicles",
    "Backing up company data every day"
  ],
  answer: 1,
  explain: "Menciptakan nilai berarti menangkap peluang dengan mengambil risiko yang terukur dan masih dalam selera risiko. Ekspansi setelah dianalisis adalah contohnya. Tiga opsi lain termasuk melindungi nilai.",
  why: [
    "Alat pemadam melindungi aset dari kebakaran, jadi termasuk melindungi nilai.",
    null,
    "Asuransi kendaraan memindahkan risiko kerugian, jadi termasuk melindungi nilai.",
    "Backup data melindungi dari kehilangan data, jadi termasuk melindungi nilai."]
},
{
  id: "T3-15", topic: 3, level: "konsep", src: "literatur",
  q: "According to ISO 31000:2018, risk management that creates and protects value helps to…",
  options: [
    "Improve performance, encourage innovation, and support the achievement of objectives",
    "Reduce the number of employees",
    "Remove the need for a strategy",
    "Guarantee profit every year"
  ],
  answer: 0,
  explain: "ISO 31000:2018: risk management improves performance, encourages innovation and supports the achievement of objectives. Inilah wujud nyata dari tujuan menciptakan dan melindungi nilai.",
  why: [
    null,
    "Mengurangi karyawan bukan tujuan manajemen risiko.",
    "Manajemen risiko justru menyatu dengan strategi.",
    "Tidak ada yang bisa menjamin laba; risiko selalu ada."]
},
{
  id: "T3-16", topic: 3, level: "aplikasi", src: "literatur",
  ctxTitle: "Perawatan mesin",
  ctx: "Sebuah pabrik mengeluarkan anggaran kecil untuk merawat mesin utamanya secara rutin. Berkat itu, kerusakan yang bisa menghentikan produksi selama sebulan berhasil dihindari.",
  q: "What does this case show?",
  options: [
    "Crisis management is the best way to achieve objectives",
    "Preventive maintenance is a disaster recovery strategy",
    "Risk management removes any chance of machine breakdowns",
    "Preventing problems before they happen is better than preparing to manage them after they happen"
  ],
  answer: 3,
  explain: "Lebih baik mencegah masalah sebelum terjadi daripada bersiap mengatasinya setelah terjadi. Biaya perawatan yang kecil melindungi nilai yang jauh lebih besar, dan itulah nilai ERM.",
  why: [
    "Crisis management baru bekerja setelah masalah membesar.",
    "Disaster recovery adalah pemulihan setelah bencana, bukan pencegahan.",
    "Perawatan menurunkan kemungkinan rusak, tapi tidak menghilangkannya.",
    null]
}
);
