// Topik 1 — Fundamentals to Risk Management (tortoic Chapter 1)
// Sumber: foto materi Chapter 1 ("Risk vs Problem"; "Risk, Problem, Crisis, and Disaster"; "Review Questions").
// T1-01..T1-10 = Review Questions asli Chapter 1 (bahasa Inggris, src "review"; hanya salah ketik yang dirapikan).
// T1-11..T1-14 = dari isi materi. T1-15..T1-20 = soal tambahan bahasa Inggris bergaya Review Questions tortoic.
window.QUESTIONS.push(
{
  id: "T1-01", topic: 1, level: "konsep", src: "review",
  q: "What is the main difference between risk and problem?",
  options: [
    "Both risk and problem have not happened yet. However, a problem could affect the achievement of objectives, while risk doesn’t affect it.",
    "Risk is a potential event that has not occurred yet, while problem is an event that is still occurring or occurred.",
    "Both risk and problem have not happened yet. However, risk could affect the achievement of objectives, while problem doesn’t affect it.",
    "Problem is a potential event that has not occurred yet, while risk is an event that is still occurring or occurred."
  ],
  answer: 1,
  explain: "Risk adalah kejadian yang belum terjadi, tapi mungkin terjadi. Problem adalah kenyataan: kejadian yang sedang atau sudah terjadi. Kalau sebuah risk benar-benar terjadi, ia berubah menjadi problem.",
  why: [
    "Problem bukan hal yang belum terjadi; problem sudah atau sedang terjadi.",
    null,
    "Problem sudah terjadi, dan problem jelas mengganggu pencapaian tujuan.",
    "Kebalik: yang belum terjadi itu risk, yang sudah/sedang terjadi itu problem."]
},
{
  id: "T1-02", topic: 1, level: "konsep", src: "review",
  q: "Sometimes, people may interpret disaster and crisis with the same meaning. However, it actually has different meanings, what is the main difference between disaster and crisis?",
  options: [
    "Both crisis and disaster are something that you cannot necessarily manage, instead you could only recover from it",
    "Both crisis and disaster are something that you can still manage and recover from.",
    "You can still manage and overcome a crisis. Disaster, on the other hand, is something that you cannot necessarily manage, instead you could only recover from it",
    "You can still manage and overcome disaster. Crisis, on the other hand, is something that you cannot necessarily manage, instead you could only recover from it"
  ],
  answer: 2,
  explain: "Crisis masih bisa dikelola dan diatasi. Disaster tidak: organisasi yang terkena disaster tidak bisa kembali seperti semula, jadi hanya bisa dipulihkan. Karena itu namanya disaster recovery, bukan disaster management.",
  why: [
    "Crisis masih bisa dikelola; yang hanya bisa dipulihkan itu disaster.",
    "Disaster tidak bisa dikelola, hanya bisa dipulihkan.",
    null,
    "Kebalik: crisis yang masih bisa dikelola, disaster yang hanya bisa dipulihkan."]
},
{
  id: "T1-03", topic: 1, level: "konsep", src: "review",
  q: "What is one of the conditions that may cause a crisis in your organisation?",
  options: [
    "Failure in minimizing the likelihood of risk, thus risk happened.",
    "Failure in maximizing the likelihood of a risk, thus risk doesn’t happen.",
    "Failure in maximizing the potential of upside risk and minimizing the potential of downside risk.",
    "Failure in protecting or creating new value in the organisation."
  ],
  answer: 3,
  explain: "Crisis bisa muncul dari tiga kondisi: terlalu banyak masalah dalam satu periode (crisis phase), masalah yang tidak tertangani dan makin parah (crisis condition), atau organisasi gagal melindungi nilainya atau gagal menciptakan nilai baru.",
  why: [
    "Risk yang terjadi berubah menjadi problem, belum tentu crisis.",
    "Kalimat ini tidak masuk akal: memperbesar kemungkinan risk tidak membuatnya batal terjadi.",
    "Mirip konsep upside/downside risk, tapi bukan penyebab crisis yang dimaksud.",
    null]
},
{
  id: "T1-04", topic: 1, level: "konsep", src: "review",
  q: "There are 2 types of organisational disaster. Which of the following is the type of disaster that could affect the organisation from the external context?",
  options: [
    "Human-based disaster: Tsunami, earthquake, and landslide.",
    "Human-based disaster: Terrorism, industrial accidents, and wildfire.",
    "Natural-based disaster: Terrorism, industrial accidents, and wildfire.",
    "Natural-based disaster: Tsunami, earthquake, and landslide."
  ],
  answer: 3,
  explain: "Natural-based disaster disebabkan alam (gempa, tsunami, longsor) dan merusak organisasi dari luar (external context). Human-based disaster disebabkan kesalahan manusia (gedung runtuh, kebakaran, produk baru gagal) dan merusak dari dalam (internal context).",
  why: [
    "Tsunami, gempa, dan longsor itu bencana alam, bukan human-based.",
    "Contohnya memang human-based, tapi human-based datang dari dalam (internal), bukan dari luar.",
    "Terorisme, kecelakaan industri, dan kebakaran hutan bukan bencana alam.",
    null]
},
{
  id: "T1-05", topic: 1, level: "konsep", src: "review",
  q: "What is the definition of “risk” according to ISO 31000?",
  options: [
    "Risk is the effect of objectives on uncertainties.",
    "Risk is an event that has not happened and becomes a problem when it happens.",
    "Risk is an event that has happened and could affect the achievement of objectives.",
    "Risk is the effect of uncertainties on objectives."
  ],
  answer: 3,
  explain: "Menurut ISO 31000, risk adalah effect of uncertainty on objectives: pengaruh ketidakpastian terhadap tujuan. Ketidakpastian selalu ada, tapi hanya yang bisa memengaruhi tujuanlah yang disebut risk.",
  why: [
    "Urutannya kebalik: pengaruh ketidakpastian terhadap tujuan, bukan sebaliknya.",
    "Kalimat ini benar untuk membedakan risk dan problem, tapi bukan definisi ISO 31000.",
    "Risk belum terjadi; yang sudah terjadi itu problem.",
    null]
},
{
  id: "T1-06", topic: 1, level: "konsep", src: "review",
  q: "What is the act of restoring the organisation from the state caused by disaster called as?",
  options: ["Risk Management", "Disaster Recovery", "Disaster Management", "Crisis Recovery"],
  answer: 1,
  explain: "Disaster tidak bisa dikelola, hanya bisa dipulihkan. Upaya memulihkan organisasi setelah disaster disebut disaster recovery. Istilah “disaster management” tidak dipakai.",
  why: [
    "Risk management bekerja sebelum hal buruk terjadi, bukan memulihkan setelahnya.",
    null,
    "Tidak ada “disaster management”, karena disaster tidak bisa dikelola.",
    "Crisis masih bisa dikelola; pemulihan setelah disaster disebut disaster recovery."]
},
{
  id: "T1-07", topic: 1, level: "konsep", src: "review",
  q: "What is the condition when an organisation faces so many problems in a certain period of time?",
  options: ["Crisis Condition", "Incident", "Crisis Phase", "Disaster"],
  answer: 2,
  explain: "Crisis phase: organisasi menghadapi banyak sekali masalah dalam satu periode. Bedakan dengan crisis condition, yaitu satu masalah yang tidak tertangani dan makin parah seiring waktu.",
  why: [
    "Crisis condition itu masalah yang makin parah karena tidak tertangani, bukan banyak masalah sekaligus.",
    "Incident tidak dipakai untuk menyebut kondisi ini.",
    null,
    "Disaster itu kondisi yang tidak bisa kembali seperti semula, bukan kumpulan banyak masalah."]
},
{
  id: "T1-08", topic: 1, level: "konsep", src: "review",
  q: "Disaster is a danger that an organisation should always consider and be cautious of. Which of the following are the types of organisational disaster?",
  options: [
    "Business disaster and organisational disaster",
    "Human-based and natural-based disaster",
    "Natural-based disaster and business disaster",
    "Human-based disaster and business disaster"
  ],
  answer: 1,
  explain: "Ada dua jenis disaster: natural-based (karena alam, datang dari luar) dan human-based (karena kesalahan manusia, datang dari dalam).",
  why: [
    "Pembagian business dan organisational disaster tidak ada.",
    null,
    "Business disaster bukan salah satu jenis disaster.",
    "Business disaster bukan salah satu jenis disaster."]
},
{
  id: "T1-09", topic: 1, level: "konsep", src: "review",
  q: "Which of the following statements is correct?",
  options: [
    "All risks are uncertain, but not all uncertainties are risks",
    "All risks will definitely turn into problems in the future.",
    "All listed or discovered uncertainties are considered as risk.",
    "All uncertainties will definitely affect the achievement of objectives."
  ],
  answer: 0,
  explain: "Semua risk pasti tidak pasti, tapi tidak semua ketidakpastian adalah risk. Ketidakpastian baru disebut risk kalau bisa memengaruhi tujuanmu. (Di soal aslinya ada dua opsi yang sama persis, jadi satu opsi diganti.)",
  why: [
    null,
    "Risk belum tentu terjadi, jadi tidak pasti berubah menjadi problem.",
    "Tidak semua ketidakpastian adalah risk; hanya yang memengaruhi tujuan.",
    "Banyak ketidakpastian yang tidak berpengaruh pada tujuan, jadi bukan risk."]
},
{
  id: "T1-10", topic: 1, level: "konsep", src: "review",
  q: "Which of the following has a broader scope compared to risk?",
  options: ["Problem", "Uncertainty", "Opportunity", "Disaster"],
  answer: 1,
  explain: "Uncertainty (ketidakpastian) lebih luas daripada risk. Ketidakpastian selalu ada di sekitar kita, sedangkan risk hanya sebagian kecilnya, yaitu yang bisa memengaruhi tujuan.",
  why: [
    "Problem adalah risk yang sudah terjadi, cakupannya tidak lebih luas.",
    null,
    "Opportunity (peluang) adalah salah satu sisi risk, bukan konsep yang lebih luas.",
    "Disaster adalah kondisi terparah setelah crisis, bukan konsep yang lebih luas."]
},
{
  id: "T1-11", topic: 1, level: "konsep", src: "materi",
  q: "Ada dua anggapan keliru yang sering muncul tentang risiko. Apa saja?",
  options: [
    "Risiko selalu berdampak negatif, dan risiko selalu bisa dihindari",
    "Risiko hanya urusan bagian keuangan, dan risiko hanya ada di perusahaan besar",
    "Risiko dianggap masalah berskala kecil, dan risiko dianggap masalah yang tidak bisa diukur dengan angka",
    "Risiko sama dengan bencana, dan risiko sama dengan krisis"
  ],
  answer: 2,
  explain: "Dua anggapan keliru itu: risk adalah masalah berskala kecil (a low-scale level of problem) dan risk adalah masalah yang tidak bisa diukur angka. Keduanya salah, karena risk bukan masalah: risk belum terjadi, sedangkan masalah sudah terjadi.",
  why: [
    "Anggapan ini memang keliru, tapi bukan dua anggapan yang dimaksud.",
    "Anggapan ini juga keliru, tapi bukan dua anggapan yang dimaksud.",
    null,
    "Risk memang beda dengan disaster dan crisis, tapi dua anggapan yang dimaksud soal masalah kecil dan tidak terukur."]
},
{
  id: "T1-12", topic: 1, level: "aplikasi", src: "materi", fig: "waktu",
  ctxTitle: "Toko roti Rina",
  ctx: "Hari ini (Oktober 2026) Rina memutuskan membuka cabang kedua toko rotinya. Ia berharap omzetnya naik 30% pada Oktober 2027. Selama setahun itu, harga tepung bisa naik, pesaing bisa buka toko di dekatnya, dan selera pelanggan bisa berubah.",
  q: "Kenapa keputusan Rina mengandung risiko?",
  options: [
    "Karena setiap keputusan bisnis pasti berubah menjadi masalah",
    "Karena omzet bukan sasaran yang bisa diukur dengan angka",
    "Karena cabang baru selalu merugi pada tahun pertama",
    "Karena ada jeda waktu antara keputusan hari ini dan sasaran di masa depan, dan selama jeda itu banyak hal tidak pasti yang bisa memengaruhi sasaran"
  ],
  answer: 3,
  explain: "Keputusan dibuat hari ini, tapi hasilnya (sasaran) baru terlihat nanti. Di antara keduanya ada jeda waktu yang penuh ketidakpastian. Hal tidak pasti yang bisa memengaruhi sasaran Rina, seperti harga tepung, pesaing, dan selera pelanggan, itulah risikonya.",
  why: [
    "Risiko belum tentu terjadi, jadi keputusan tidak pasti berubah menjadi masalah.",
    "Omzet justru sasaran yang terukur, dan risiko pun bisa diukur.",
    "Ini anggapan umum yang keliru; risiko datang dari ketidakpastian, bukan dari kepastian rugi.",
    null]
},
{
  id: "T1-13", topic: 1, level: "kasus", src: "materi", kasus: "rax", fig: "tangga:polos",
  q: "Masalah reputasi RAX tidak tertangani dan makin parah ketika konsumen kehilangan minat, sampai akhirnya menjadi krisis. Krisis seperti ini termasuk jenis apa?",
  options: [
    "Crisis phase, karena RAX menghadapi banyak masalah sekaligus dalam satu periode",
    "Crisis condition, karena masalah yang tidak tertangani makin memburuk seiring waktu",
    "Disaster, karena RAX tidak bisa kembali seperti semula",
    "Risk, karena kerugiannya belum terjadi"
  ],
  answer: 1,
  explain: "Crisis condition terjadi kalau masalah tidak bisa ditangani dan makin parah seiring waktu. Pada RAX, satu masalah (reputasi buruk) terus memburuk sampai konsumen pergi. Disaster baru terjadi belakangan, saat RAX bangkrut dengan utang US$100 miliar.",
  why: [
    "Crisis phase itu banyak masalah dalam satu periode; kasus RAX adalah satu masalah yang makin parah.",
    null,
    "Disaster baru terjadi saat RAX bangkrut; di tahap ini krisisnya masih bisa ditangani.",
    "Masalah reputasi dan hilangnya konsumen sudah terjadi, jadi bukan risk lagi."]
},
{
  id: "T1-14", topic: 1, level: "aplikasi", src: "materi",
  ctxTitle: "Rapat direksi pabrik garmen",
  ctx: "Dalam rapat, direktur sebuah pabrik garmen berkata: “Kita tidak perlu repot memetakan risiko. Cukup siapkan tim penanganan masalah, tim krisis, dan rencana pemulihan bencana. Kalau ada apa-apa, tim itu yang turun tangan.”",
  q: "Tanggapan apa yang paling tepat untuk pernyataan direktur itu?",
  options: [
    "Setuju, karena crisis management adalah cara terbaik mencapai sasaran",
    "Kurang tepat; pabrik juga perlu menyusun “disaster management” agar bencana bisa dikelola",
    "Kurang tepat; cara terbaik meningkatkan peluang mencapai sasaran adalah menerapkan risk management, karena masalah bisa dicegah sebelum terjadi",
    "Setuju, karena rencana pemulihan bencana bisa mencegah semua masalah"
  ],
  answer: 2,
  explain: "Cara terbaik meningkatkan peluang mencapai sasaran adalah risk management, bukan problem management, crisis management, atau disaster recovery plan. Untuk apa repot menangani masalah kalau masalahnya bisa dicegah sebelum terjadi?",
  why: [
    "Crisis management baru bekerja setelah masalah membesar.",
    "Disaster tidak bisa dikelola, jadi “disaster management” tidak ada; yang ada disaster recovery.",
    null,
    "Rencana pemulihan bencana dipakai setelah bencana terjadi; ia tidak mencegah masalah."]
},
{
  id: "T1-15", topic: 1, level: "konsep", src: "materi",
  q: "Some people think risk is just a small problem. Why is this wrong?",
  options: [
    "Because risk is a different concept from problem: risk is the effect of uncertainty on objectives and has not happened yet",
    "Because risk is always bigger than a problem",
    "Because risk is a problem that cannot be measured by numbers",
    "Because problems only happen in large organisations"
  ],
  answer: 0,
  explain: "Risk bukan “masalah kecil”. Risk adalah konsep yang berbeda dari problem: risk adalah pengaruh ketidakpastian terhadap tujuan dan belum terjadi, sedangkan problem sudah terjadi.",
  why: [
    null,
    "Risk dan problem dibedakan dari sudah/belum terjadinya, bukan dari besar-kecilnya.",
    "Ini anggapan keliru lainnya; risk bisa diukur.",
    "Perbedaan risk dan problem tidak ada hubungannya dengan ukuran organisasi."]
},
{
  id: "T1-16", topic: 1, level: "konsep", src: "materi",
  q: "We make decisions today, hoping they will bring benefits in the future. What do we call these future benefits?",
  options: ["Uncertainties", "Objectives", "Problems", "Controls"],
  answer: 1,
  explain: "Manfaat yang kita harapkan di masa depan disebut objectives (tujuan/sasaran). Keputusan dibuat hari ini, sasarannya tercapai nanti, dan di antaranya ada banyak ketidakpastian.",
  why: [
    "Uncertainties adalah hal-hal tidak pasti di antara keputusan dan sasaran, bukan manfaat yang diharapkan.",
    null,
    "Problem adalah risk yang sudah terjadi.",
    "Controls bukan sebutan untuk manfaat di masa depan."]
},
{
  id: "T1-17", topic: 1, level: "konsep", src: "materi", fig: "waktu",
  q: "Why is there always uncertainty between making a decision and achieving an objective?",
  options: [
    "Because every decision is made without any information",
    "Because objectives are always set by other people",
    "Because there is a time gap between making the decision and achieving the objective",
    "Because problems always happen right after a decision is made"
  ],
  answer: 2,
  explain: "Ada jeda waktu (time interval) antara saat keputusan dibuat dan saat tujuan tercapai. Selama jeda itu banyak hal bisa berubah. Ketidakpastian yang bisa memengaruhi tujuan itulah yang disebut risk.",
  why: [
    "Keputusan bisa saja dibuat dengan informasi lengkap; ketidakpastian tetap ada karena masa depan belum terjadi.",
    "Siapa yang menentukan tujuan tidak memengaruhi ada atau tidaknya ketidakpastian.",
    null,
    "Masalah tidak selalu muncul setelah keputusan; risk belum tentu terjadi."]
},
{
  id: "T1-18", topic: 1, level: "kasus", src: "materi", kasus: "rax",
  q: "Why couldn’t RAX respond to the fast-changing fashion trends?",
  options: [
    "RAX did not have enough working capital",
    "RAX was hit by a natural disaster",
    "As a family company, RAX held on too tightly to its ancestral values",
    "RAX’s suppliers stopped delivering materials"
  ],
  answer: 2,
  explain: "RAX adalah perusahaan keluarga yang sangat memegang nilai-nilai leluhurnya, sehingga tidak mampu mengikuti perubahan tren fashion. Risiko itu tidak ditangani, lalu berubah menjadi masalah reputasi, krisis, dan akhirnya disaster.",
  why: [
    "Kasus tidak menyebut kekurangan modal.",
    "Kasus RAX tidak melibatkan bencana alam; disaster-nya berupa kebangkrutan.",
    null,
    "Kasus tidak menyebut masalah pemasok."]
},
{
  id: "T1-19", topic: 1, level: "kasus", src: "materi", kasus: "rax", fig: "tangga:polos",
  q: "Which event shows that RAX’s situation became a disaster?",
  options: [
    "Fashion trends started to change quickly",
    "Bad news about RAX spread in international media",
    "Consumers lost interest in RAX’s products",
    "RAX declared bankruptcy with US$100 billion in debt"
  ],
  answer: 3,
  explain: "Kebangkrutan dengan utang US$100 miliar adalah disaster, karena RAX tidak bisa kembali seperti semula. Urutannya: tren berubah (risk) → berita buruk (problem) → konsumen pergi (crisis) → bangkrut (disaster).",
  why: [
    "Perubahan tren masih berupa risk.",
    "Berita buruk yang menyebar adalah problem (masalah reputasi).",
    "Konsumen yang pergi membawa RAX ke crisis, belum disaster.",
    null]
},
{
  id: "T1-20", topic: 1, level: "aplikasi", src: "materi",
  q: "A company’s warehouse collapses because the managers kept ignoring maintenance reports. The damage destroys the company from within. What type of disaster is this?",
  options: [
    "Natural-based disaster (external context)",
    "Human-based disaster (internal context)",
    "Crisis phase",
    "Risk"
  ],
  answer: 1,
  explain: "Human-based disaster disebabkan kesalahan manusia, misalnya gedung runtuh, kebakaran, atau peluncuran produk yang gagal, dan merusak organisasi dari dalam. Natural-based disaster disebabkan alam dan datang dari luar.",
  why: [
    "Penyebabnya kelalaian manusia, bukan alam.",
    null,
    "Crisis phase itu banyak masalah dalam satu periode; gudang runtuh yang menghancurkan perusahaan adalah disaster.",
    "Kejadiannya sudah terjadi, jadi bukan risk lagi."]
}
);
