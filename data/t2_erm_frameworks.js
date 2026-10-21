// Topik 2 — Enterprise Risk Management Frameworks
// Belum ada foto materi tortoic untuk chapter ini. Soal disusun dari literatur standar:
// COSO ERM 2004 (Integrated Framework), COSO ERM 2017 (Integrating with Strategy and Performance), ISO 31000:2009/2018,
// serta deskripsi program "ISO 31000 ERM Fundamentals" (CRMS Indonesia/ERM Academy).
window.QUESTIONS.push(
{
  id: "T2-01", topic: 2, level: "konsep", src: "literatur",
  q: "Perbedaan utama pendekatan manajemen risiko tradisional (silo) dengan Enterprise Risk Management (ERM) adalah…",
  options: [
    "ERM hanya mengurus risiko keuangan, sedangkan pendekatan silo mengurus semua jenis risiko",
    "ERM mengelola risiko secara terintegrasi di seluruh organisasi sebagai satu portofolio yang dikaitkan dengan strategi dan sasaran; pendekatan silo membuat tiap unit mengelola risikonya sendiri-sendiri",
    "Pendekatan silo lebih menyeluruh karena tiap unit paling memahami risikonya sendiri",
    "ERM mengambil alih seluruh tanggung jawab risiko dari unit bisnis dan menyerahkannya ke bagian manajemen risiko"
  ],
  answer: 1,
  explain: "Manajemen risiko tradisional bersifat silo: keuangan, operasional, pemasaran, dan TI masing-masing mengelola risikonya tanpa melihat keterkaitan antar-risiko. ERM bersifat company-wide: risiko seluruh organisasi dipandang sebagai satu portofolio, melintasi unit dan departemen, dan dikaitkan dengan strategi serta sasaran perusahaan.",
  why: [
    "Keliru: ERM mencakup semua jenis risiko (strategis, operasional, keuangan, kepatuhan), bukan hanya keuangan.",
    null,
    "Tiap unit memang paham risikonya, tetapi pendekatan silo tidak melihat efek gabungan antar-risiko, jadi justru kurang menyeluruh.",
    "ERM tidak menghapus peran unit bisnis. Pemilik risiko tetap di unit; ERM mengintegrasikan pandangannya."]
},
{
  id: "T2-02", topic: 2, level: "kasus", src: "literatur", kasus: "nusakopi",
  q: "Kelemahan utama cara PT Nusa Kopi mengelola risiko adalah…",
  options: [
    "Risiko dikelola terkotak-kotak per departemen, sehingga keterkaitan dan efek gabungan antar-risiko tidak terlihat oleh pimpinan",
    "Perusahaan sama sekali belum pernah mencatat risikonya",
    "Risiko kurs tidak relevan bagi bisnis kedai kopi",
    "Perang harga dari pesaing bukan risiko karena berasal dari luar perusahaan"
  ],
  answer: 0,
  explain: "Semua risiko sebenarnya sudah tercatat, tetapi di departemen masing-masing (silo). Tidak ada yang melihat bahwa pelemahan rupiah, gagal panen di daerah pemasok utama, dan perang harga bisa terjadi bersamaan dan bersama-sama mengancam sasaran ekspansi. ERM menutup celah ini dengan memandang risiko sebagai satu portofolio yang dikaitkan dengan sasaran perusahaan.",
  why: [
    null,
    "Kasus menyebut setiap departemen sudah memantau risikonya; masalahnya bukan ketiadaan catatan.",
    "Sebagian biji kopi premium diimpor, jadi kurs jelas memengaruhi biaya dan sasaran.",
    "Risiko bisa berasal dari luar (konteks eksternal); yang menentukan adalah dampaknya pada sasaran."]
},
{
  id: "T2-03", topic: 2, level: "konsep", src: "literatur",
  q: "COSO ERM 2017 berjudul “Enterprise Risk Management — Integrating with Strategy and Performance”. Lima komponennya adalah…",
  options: [
    "Internal Environment; Objective Setting; Event Identification; Risk Assessment; Risk Response",
    "Communication & Consultation; Scope, Context & Criteria; Risk Assessment; Risk Treatment; Monitoring & Review",
    "Governance & Culture; Strategy & Objective-Setting; Performance; Review & Revision; Information, Communication & Reporting",
    "Integration; Design; Implementation; Evaluation; Improvement"
  ],
  answer: 2,
  explain: "COSO ERM 2017 punya lima komponen yang saling terkait: Governance & Culture; Strategy & Objective-Setting; Performance; Review & Revision; serta Information, Communication & Reporting. Kelima komponen ini dijabarkan menjadi 20 prinsip. Versi ini menggantikan COSO ERM 2004 yang berbentuk kubus dengan delapan komponen.",
  why: [
    "Ini sebagian dari delapan komponen COSO ERM 2004 (Integrated Framework), versi sebelum 2017.",
    "Ini tahapan proses manajemen risiko ISO 31000, bukan komponen COSO.",
    null,
    "Ini elemen framework ISO 31000:2018 (di sekeliling leadership & commitment), bukan komponen COSO."]
},
{
  id: "T2-04", topic: 2, level: "konsep", src: "literatur", fig: "coso2004:atas",
  figCap: "Kubus COSO ERM 2004 (Integrated Framework). Sisi atas disembunyikan.",
  q: "Gambar adalah kubus COSO ERM 2004. Sisi atas kubus yang ditandai “?” berisi empat kategori sasaran (objectives), yaitu…",
  options: [
    "Entity-Level, Division, Business Unit, Subsidiary",
    "Financial, Customer, Internal Process, Learning & Growth",
    "Identify, Analyze, Evaluate, Treat",
    "Strategic, Operations, Reporting, Compliance"
  ],
  answer: 3,
  explain: "Kubus COSO ERM 2004 punya tiga dimensi: empat kategori sasaran di sisi atas (Strategic, Operations, Reporting, Compliance), delapan komponen di sisi depan (Internal Environment sampai Monitoring), dan tingkat entitas di sisi samping (Entity-Level, Division, Business Unit, Subsidiary).",
  why: [
    "Ini tingkat entitas di sisi samping kubus, bukan kategori sasaran.",
    "Ini empat perspektif Balanced Scorecard, bukan COSO ERM.",
    "Ini mirip langkah penilaian dan perlakuan risiko, bukan kategori sasaran COSO.",
    null]
},
{
  id: "T2-05", topic: 2, level: "konsep", src: "literatur",
  q: "Pernyataan yang tepat tentang ISO 31000 adalah…",
  options: [
    "ISO 31000 berisi pedoman (guidelines) yang dapat diterapkan oleh organisasi jenis dan ukuran apa pun, dan tidak dimaksudkan untuk sertifikasi",
    "ISO 31000 adalah standar persyaratan yang wajib disertifikasi oleh lembaga eksternal",
    "ISO 31000 hanya berlaku untuk bank dan perusahaan asuransi",
    "ISO 31000 menggantikan semua peraturan pemerintah tentang manajemen risiko"
  ],
  answer: 0,
  explain: "Judul ISO 31000:2018 adalah Risk management — Guidelines. Isinya pedoman generik yang bisa disesuaikan untuk organisasi apa pun, di sektor apa pun, dan untuk semua jenis risiko. Karena berupa pedoman, bukan persyaratan, ISO 31000 tidak dimaksudkan untuk sertifikasi pihak ketiga.",
  why: [
    null,
    "ISO 31000 adalah guidelines, bukan requirements, sehingga tidak dimaksudkan untuk sertifikasi.",
    "ISO 31000 bersifat generik dan bisa dipakai organisasi apa pun, termasuk sektor publik dan nirlaba.",
    "ISO 31000 adalah standar sukarela; ia tidak menggantikan regulasi, justru membantu organisasi mematuhinya."]
},
{
  id: "T2-06", topic: 2, level: "konsep", src: "literatur",
  q: "Perubahan penting dari ISO 31000:2009 ke ISO 31000:2018 adalah…",
  options: [
    "ISO 31000:2018 mulai dapat disertifikasi oleh lembaga eksternal",
    "Prinsip disederhanakan dari 11 menjadi 8, serta peran kepemimpinan puncak dan integrasi manajemen risiko ke dalam organisasi lebih ditekankan",
    "Definisi risiko diubah menjadi “kemungkinan kerugian finansial”",
    "Proses manajemen risiko dihapus dan diganti dengan kubus COSO"
  ],
  answer: 1,
  explain: "Revisi 2018 menyederhanakan ISO 31000:2009. Prinsipnya diringkas dari 11 menjadi 8, dengan value creation and protection sebagai tujuan di pusatnya. Peran pimpinan puncak (leadership and commitment) dan integrasi manajemen risiko ke dalam tata kelola serta aktivitas organisasi lebih ditekankan, begitu pula sifat proses yang iteratif. Definisi risiko tetap effect of uncertainty on objectives.",
  why: [
    "Versi 2018 tetap berupa guidelines dan tidak dimaksudkan untuk sertifikasi.",
    null,
    "Definisi tetap “effect of uncertainty on objectives”, dan efeknya bisa positif maupun negatif.",
    "ISO 31000:2018 tetap memuat proses; kubus adalah ciri COSO ERM 2004."]
},
{
  id: "T2-07", topic: 2, level: "konsep", src: "literatur",
  q: "Dalam ISO 31000:2018, apa beda framework dengan process manajemen risiko?",
  options: [
    "Framework adalah langkah identifikasi sampai perlakuan risiko, sedangkan process adalah susunan organisasi pendukungnya",
    "Framework hanya untuk perusahaan besar, sedangkan process untuk perusahaan kecil",
    "Keduanya sama; perbedaannya hanya istilah terjemahan",
    "Framework menyiapkan fondasi dan pengaturan organisasi (kepemimpinan, integrasi, desain, implementasi, evaluasi, perbaikan); process adalah langkah sistematis untuk menilai dan menangani risiko"
  ],
  answer: 3,
  explain: "Framework membantu organisasi mengintegrasikan manajemen risiko ke aktivitas dan fungsi pentingnya. Pusatnya leadership and commitment, dikelilingi integration, design, implementation, evaluation, dan improvement. Process adalah penerapan sistematis kebijakan, prosedur, dan praktik: komunikasi dan konsultasi; ruang lingkup, konteks, dan kriteria; asesmen risiko (identifikasi, analisis, evaluasi); perlakuan risiko; pemantauan dan tinjauan; serta pencatatan dan pelaporan.",
  why: [
    "Definisinya terbalik.",
    "Framework dan process sama-sama berlaku untuk organisasi apa pun; ISO 31000 bersifat generik.",
    "Keduanya komponen yang berbeda dalam arsitektur ISO 31000.",
    null]
},
{
  id: "T2-08", topic: 2, level: "kasus", src: "literatur", kasus: "nusakopi",
  ctxTitle: "Kasus PT Nusa Kopi: memilih acuan ERM",
  ctx: "Setelah margin anjlok, dewan komisaris PT Nusa Kopi meminta direksi memilih acuan ERM. Direktur risiko mengusulkan ISO 31000:2018 sebagai acuan utama prinsip, kerangka, dan proses, ditambah COSO ERM 2017 untuk mengaitkan risiko dengan strategi dan kinerja. Seorang komisaris menolak: “Pilih satu saja. Memakai dua acuan itu menyalahi aturan.”",
  q: "Siapa yang lebih tepat, dan mengapa?",
  options: [
    "Direktur risiko; kedua kerangka saling melengkapi, dan organisasi boleh menyesuaikan kerangka dengan konteks dan kebutuhannya",
    "Komisaris; organisasi hanya boleh memakai satu kerangka ERM",
    "Komisaris; COSO hanya mengatur pengendalian internal sehingga tidak relevan untuk ERM",
    "Komisaris; ISO 31000 hanya boleh dipakai setelah perusahaan tersertifikasi"
  ],
  answer: 0,
  explain: "Tidak ada aturan yang melarang memakai lebih dari satu kerangka. ISO 31000 dan COSO ERM sama-sama leading practices ERM. ISO 31000 bersifat generik dan menekankan penyesuaian dengan konteks (prinsip customized), sedangkan COSO ERM 2017 kuat dalam mengaitkan risiko dengan strategi dan kinerja. Keduanya bisa saling melengkapi.",
  why: [
    null,
    "Tidak ada ketentuan seperti itu; organisasi bebas memakai dan menyesuaikan kerangka yang cocok.",
    "COSO ERM (2004 dan 2017) adalah kerangka manajemen risiko perusahaan, berbeda dari COSO Internal Control.",
    "ISO 31000 tidak dimaksudkan untuk sertifikasi, jadi tidak ada syarat seperti itu."]
}
);
