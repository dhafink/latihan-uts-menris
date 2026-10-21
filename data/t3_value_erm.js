// Topik 3 — The Value of ERM
// Belum ada foto materi tortoic untuk chapter ini. Soal disusun dari literatur standar:
// ISO 31000:2018 (purpose: creation and protection of value), COSO ERM 2017 (risk appetite, enhanced value),
// dan konsep upside/downside risk dari slide Sesi 2.
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
}
);
