// Topik 1 — Fundamentals to Risk Management (tortoic Chapter 1)
// Sumber: foto materi Chapter 1 ("Risk vs Problem"; "Risk, Problem, Crisis, and Disaster"; "Review Questions").
// T1-01..T1-10 = Review Questions asli Chapter 1 (bahasa Inggris, src "review"). T1-11..T1-14 = dari isi materi.
// T1-15..T1-20 = soal tambahan bahasa Inggris bergaya Review Questions tortoic, disusun dari isi materi Chapter 1.
window.QUESTIONS.push(
{
  id: "T1-01", topic: 1, level: "konsep", src: "review",
  q: "What is the main difference between risk and problem?",
  options: [
    "Both risk and event have not happened yet. However, a problem could affect the achievement of objectives, while risk doesn’t affect it.",
    "Risk is a potential event that has not occurred yet, while problem is an event that is still occurring or occurred.",
    "Both risk and event have not happened yet. However, risk could affect the achievement of objectives, while problem doesn’t affect it.",
    "Problem is a potential event that has not occurred yet, while risk is an event that is still occurring or occurred."
  ],
  answer: 1,
  explain: "Materi “Risk vs Problem”: risk is an event that has not happened, yaitu potensi kejadian yang belum terjadi tetapi mungkin terjadi. Problem is a reality, yaitu kejadian yang sedang atau sudah terjadi. Jika sebuah risiko benar-benar terwujud menjadi kejadian nyata, risiko itu sudah menjadi problem.",
  why: [
    "Problem bukan sesuatu yang belum terjadi; problem adalah realita yang sedang atau sudah terjadi.",
    null,
    "Problem sudah terjadi, bukan belum terjadi, dan problem jelas mengganggu pencapaian sasaran.",
    "Definisinya terbalik: yang belum terjadi adalah risk, yang sedang/sudah terjadi adalah problem."]
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
  explain: "Problem dan crisis masih bisa dikelola dan diatasi. Disaster berbeda: begitu organisasi terkena disaster, ia tidak akan kembali ke keadaan semula. Disaster tidak bisa di-manage, hanya bisa dipulihkan (recover). Karena itu istilahnya disaster recovery, bukan disaster management.",
  why: [
    "Crisis masih bisa dikelola (crisis management). Hanya disaster yang tidak bisa di-manage.",
    "Disaster tidak bisa di-manage; organisasi hanya bisa melakukan recovery.",
    null,
    "Terbalik: crisis yang masih bisa dikelola, disaster yang hanya bisa dipulihkan."]
},
{
  id: "T1-03", topic: 1, level: "konsep", src: "review",
  q: "What are one of the conditions that may cause a crisis in your organisation?",
  options: [
    "Failure in minimizing the likelihood of risk, thus risk happened.",
    "Failure in maximizing the likelihood of a risk, thus risk doesn’t happen.",
    "Failure in maximizing the potential of upside risk and minimizing the potential of downside risk.",
    "Failure in protecting or creating new value in the organisation."
  ],
  answer: 3,
  explain: "Materi menyebut tiga kondisi crisis: (1) crisis phase, ketika organisasi menghadapi sangat banyak masalah dalam satu periode; (2) crisis condition, ketika masalah tidak bisa dikelola dan makin parah seiring waktu; (3) ketika organisasi failed protecting its value or failed in creating new value.",
  why: [
    "Risiko yang terjadi menjadi problem, belum tentu crisis. Opsi ini menggambarkan perubahan risk → problem.",
    "Pernyataan ini tidak logis: memaksimalkan kemungkinan risiko tidak membuat risiko batal terjadi.",
    "Opsi ini mirip konsep upside/downside risk, tetapi bukan rumusan kondisi crisis di materi.",
    null]
},
{
  id: "T1-04", topic: 1, level: "konsep", src: "review",
  q: "There are 2 types of organisational disaster. Which of the following is the type of disaster that could affect the organisational based on external context?",
  options: [
    "Human-based disaster: Tsunami, earthquake, and landslide.",
    "Human-based disaster: Terrorism, industrial accidents, and wildfire.",
    "Natural-based disaster: Terrorism, industrial accidents, and wildfire.",
    "Natural-based disaster: Tsunami, earthquake, and landslide."
  ],
  answer: 3,
  explain: "Natural-based disaster disebabkan faktor alam seperti gempa bumi, tsunami, dan tanah longsor, yang merusak organisasi dari luar (external context). Human-based disaster disebabkan kegagalan atau kesalahan manusia, seperti gedung runtuh, kebakaran hutan, atau gagal meluncurkan produk baru, yang merusak organisasi dari dalam (internal context).",
  why: [
    "Tsunami, gempa, dan longsor adalah bencana alam, bukan human-based.",
    "Contohnya memang human-based, tetapi human-based disaster berasal dari internal context, sedangkan soal menanyakan external context.",
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
  explain: "ISO 31000: risk is the effect of uncertainty on objectives, yaitu efek ketidakpastian terhadap sasaran. Ketidakpastian selalu ada di sekitar kita, tetapi hanya ketidakpastian yang dapat memengaruhi sasaran yang menjadi risiko.",
  why: [
    "Urutannya terbalik: yang benar efek ketidakpastian terhadap sasaran, bukan efek sasaran terhadap ketidakpastian.",
    "Kalimat ini benar sebagai pembeda risk dan problem, tetapi bukan definisi risk menurut ISO 31000.",
    "Risk belum terjadi. Kejadian yang sudah terjadi adalah problem.",
    null]
},
{
  id: "T1-06", topic: 1, level: "konsep", src: "review",
  q: "What is the act of restoring the organisation from the state caused by disaster called as?",
  options: ["Risk Management", "Disaster Recovery", "Disaster Management", "Crisis Recovery"],
  answer: 1,
  explain: "Disaster tidak bisa di-manage, hanya bisa dipulihkan. Tindakan memulihkan organisasi dari kondisi akibat disaster disebut disaster recovery (recovery strategy). Materi menegaskan: there is no such thing as “Disaster Management”.",
  why: [
    "Risk management bekerja sebelum hal buruk terjadi, bukan untuk memulihkan setelah disaster.",
    null,
    "Materi menegaskan tidak ada “disaster management”, karena disaster tidak bisa dikelola.",
    "Crisis masih bisa dikelola (crisis management). Pemulihan setelah disaster disebut disaster recovery."]
},
{
  id: "T1-07", topic: 1, level: "konsep", src: "review",
  q: "What is the condition when an organisation faces so many problems in a certain period of time?",
  options: ["Crisis Condition", "Incident", "Crisis Phase", "Disaster"],
  answer: 2,
  explain: "Crisis phase: kondisi ketika organisasi menghadapi sangat banyak masalah dalam periode waktu tertentu. Bedakan dengan crisis condition, yaitu ketika organisasi tidak mampu mengelola masalahnya sehingga masalah itu makin parah seiring waktu.",
  why: [
    "Crisis condition muncul ketika masalah tidak bisa dikelola dan memburuk seiring waktu, bukan karena banyak masalah sekaligus.",
    "Istilah incident tidak dipakai materi untuk kondisi ini.",
    null,
    "Disaster adalah kondisi yang tidak bisa kembali ke keadaan semula, bukan kumpulan banyak masalah."]
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
  explain: "Dua jenis disaster organisasi: natural-based disaster (faktor alam, merusak dari luar/external context) dan human-based disaster (kegagalan atau kesalahan manusia, merusak dari dalam/internal context).",
  why: [
    "Materi tidak membagi disaster menjadi business dan organisational disaster.",
    null,
    "Business disaster bukan salah satu jenis disaster di materi.",
    "Business disaster bukan salah satu jenis disaster di materi."]
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
  explain: "Materi: all risks are uncertain, but not all uncertainties are risks. Risiko hanyalah sebagian ketidakpastian, yaitu yang dapat memengaruhi sasaran; ketidakpastian lain yang tidak signifikan bagi sasaranmu bukan risikomu. (Di soal aslinya opsi C dan D tertulis sama persis, jadi satu opsi di sini diganti dengan pengecoh lain.)",
  why: [
    null,
    "Risiko adalah potensi kejadian; ia belum tentu terjadi, jadi tidak pasti berubah menjadi problem.",
    "Tidak semua ketidakpastian adalah risiko; hanya yang dapat memengaruhi sasaran.",
    "Banyak ketidakpastian yang tidak signifikan bagi sasaran, sehingga tidak menjadi risiko."]
},
{
  id: "T1-10", topic: 1, level: "konsep", src: "review",
  q: "Which of the following has a broader scope compared to risk?",
  options: ["Problem", "Uncertainty", "Opportunity", "Disaster"],
  answer: 1,
  explain: "Uncertainty cakupannya lebih luas daripada risk. Ketidakpastian selalu terjadi di dunia sekitar kita, sedangkan risk hanyalah sebagian ketidakpastian yang dapat memengaruhi sasaran.",
  why: [
    "Problem adalah risiko yang sudah terwujud; cakupannya tidak lebih luas dari risk.",
    null,
    "Opportunity (peluang) adalah salah satu sisi efek risiko, bukan konsep yang lebih luas.",
    "Disaster adalah kondisi terparah setelah crisis, bukan konsep yang lebih luas dari risk."]
},
{
  id: "T1-11", topic: 1, level: "konsep", src: "materi",
  q: "Menurut materi “Risk vs Problem”, banyak orang memiliki dua anggapan keliru tentang risiko. Kedua anggapan itu adalah…",
  options: [
    "Risiko selalu berdampak negatif, dan risiko selalu bisa dihindari",
    "Risiko hanya urusan bagian keuangan, dan risiko hanya ada di perusahaan besar",
    "Risiko adalah masalah berskala kecil, dan risiko adalah masalah yang tidak bisa diukur dengan angka",
    "Risiko sama dengan bencana, dan risiko sama dengan krisis"
  ],
  answer: 2,
  explain: "Materi menyebut dua anggapan: risk is a low-scale level of problem dan risk is a problem that could not be measured by number. Keduanya salah. Menurut ISO 31000 risiko adalah efek ketidakpastian terhadap sasaran, dan risiko adalah konsep yang berbeda dari masalah: risiko belum terjadi, masalah sudah menjadi realita.",
  why: [
    "Anggapan ini memang keliru, tetapi bukan dua anggapan yang dibahas di materi Risk vs Problem.",
    "Anggapan ini juga keliru, tetapi bukan yang dibahas di materi.",
    null,
    "Materi memang membedakan risk, crisis, dan disaster, tetapi dua anggapan keliru yang disebut adalah soal masalah berskala kecil dan tidak terukur."]
},
{
  id: "T1-12", topic: 1, level: "aplikasi", src: "materi", fig: "waktu",
  ctxTitle: "Kasus toko roti Rina",
  ctx: "Hari ini (Oktober 2026) Rina memutuskan membuka cabang kedua toko rotinya. Ia berharap keputusan ini membuat omzet naik 30% pada Oktober 2027. Sepanjang setahun itu, harga tepung bisa naik, pesaing bisa membuka toko di dekatnya, dan selera pelanggan bisa berubah.",
  q: "Menurut materi Chapter 1, mengapa keputusan Rina mengandung risiko?",
  options: [
    "Karena setiap keputusan bisnis pasti berubah menjadi masalah",
    "Karena omzet bukan sasaran yang bisa diukur dengan angka",
    "Karena cabang baru selalu merugi pada tahun pertama",
    "Karena ada jeda waktu antara keputusan saat ini dan sasaran di masa depan, dan dalam jeda itu ada banyak ketidakpastian yang bisa memengaruhi sasaran"
  ],
  answer: 3,
  explain: "Materi: setiap orang membuat keputusan di masa kini dengan harapan mendapat manfaat di masa depan, dan manfaat itulah sasaran (objectives). Ada time interval antara keputusan dan tercapainya sasaran, dan selama jeda itu ada banyak ketidakpastian. Ketidakpastian yang bisa memengaruhi sasaran Rina (harga tepung, pesaing, selera pelanggan) adalah risikonya.",
  why: [
    "Risiko belum tentu terjadi, jadi keputusan tidak pasti berubah menjadi masalah.",
    "Omzet justru sasaran yang terukur; materi juga menolak anggapan bahwa risiko tidak bisa diukur.",
    "Ini generalisasi yang tidak ada di materi. Risiko bersumber dari ketidakpastian, bukan dari kepastian rugi.",
    null]
},
{
  id: "T1-13", topic: 1, level: "kasus", src: "materi", kasus: "rax", fig: "tangga:polos",
  q: "Pada kasus RAX, masalah reputasi tidak tertangani dan makin parah ketika konsumen kehilangan minat, sampai membawa krisis. Menurut materi, krisis seperti ini termasuk…",
  options: [
    "Crisis phase, karena RAX menghadapi banyak masalah sekaligus dalam satu periode",
    "Crisis condition, karena masalah yang tidak bisa dikelola makin memburuk seiring waktu",
    "Disaster, karena RAX tidak bisa kembali ke keadaan semula",
    "Risk, karena kerugiannya belum terjadi"
  ],
  answer: 1,
  explain: "Crisis condition terjadi jika organisasi tidak mampu mengelola masalahnya dan masalah itu makin parah seiring waktu. Pada RAX, satu masalah (reputasi akibat berita buruk) terus memburuk sampai konsumen pergi. Tahap disaster baru terjadi belakangan, ketika RAX bangkrut dengan utang US$100 miliar.",
  why: [
    "Crisis phase menekankan banyaknya masalah dalam satu periode. Kasus RAX menekankan satu masalah yang makin parah.",
    null,
    "Disaster baru terjadi saat RAX bangkrut. Pada tahap ini RAX masih dalam krisis yang seharusnya masih bisa dikelola.",
    "Masalah reputasi dan hilangnya konsumen sudah terjadi, jadi bukan lagi risk."]
},
{
  id: "T1-14", topic: 1, level: "aplikasi", src: "materi",
  ctxTitle: "Rapat direksi pabrik garmen",
  ctx: "Dalam rapat, direktur sebuah pabrik garmen berkata: “Kita tidak perlu repot memetakan risiko. Cukup siapkan tim penanganan masalah, tim krisis, dan rencana pemulihan bencana. Kalau ada apa-apa, tim itu yang turun tangan.”",
  q: "Berdasarkan kesimpulan Chapter 1, tanggapan yang paling tepat untuk pernyataan direktur itu adalah…",
  options: [
    "Setuju, karena crisis management adalah cara terbaik mencapai sasaran",
    "Kurang tepat; pabrik juga perlu menyusun “disaster management” agar bencana bisa dikelola",
    "Kurang tepat; cara terbaik meningkatkan peluang mencapai sasaran adalah menerapkan risk management, karena masalah bisa dicegah sebelum terjadi",
    "Setuju, karena rencana pemulihan bencana mencegah semua masalah"
  ],
  answer: 2,
  explain: "Kesimpulan Chapter 1: dari lima terminologi (uncertainty, risk, problem, crisis, disaster), the best option to increase the likelihood of achieving your objective is by implementing the risk management, bukan problem management, crisis management, atau disaster recovery plan. Pertanyaan penutupnya: mengapa bersiap mengelola masalah kalau kamu bisa mencegahnya sebelum terjadi?",
  why: [
    "Crisis management baru bekerja setelah masalah membesar. Materi menyebut risk management sebagai pilihan terbaik.",
    "Materi menegaskan tidak ada “disaster management”; disaster hanya bisa dipulihkan (recovery).",
    null,
    "Disaster recovery plan bekerja setelah bencana terjadi; ia tidak mencegah masalah."]
},
{
  id: "T1-15", topic: 1, level: "konsep", src: "materi",
  q: "Many people assume that risk is a low-scale level of problem. Why is this assumption incorrect?",
  options: [
    "Because risk is the effect of uncertainty on objectives, a different concept from problem, since risk has not happened yet",
    "Because risk is always bigger than a problem",
    "Because risk is a problem that could not be measured by number",
    "Because problems only happen in large organisations"
  ],
  answer: 0,
  explain: "Materi Risk vs Problem: anggapan “risk is a low-scale level of problem” keliru. Risiko adalah konsep yang sama sekali berbeda dari masalah. Menurut ISO 31000 risiko adalah effect of uncertainty on objectives dan belum terjadi; masalah adalah realita yang sedang atau sudah terjadi.",
  why: [
    null,
    "Risiko dan masalah dibedakan berdasarkan sudah/belum terjadinya, bukan besar-kecilnya.",
    "Ini anggapan keliru kedua yang juga dibantah materi; risiko bukan “masalah yang tidak terukur”.",
    "Materi tidak mengaitkan perbedaan risk dan problem dengan ukuran organisasi."]
},
{
  id: "T1-16", topic: 1, level: "konsep", src: "materi",
  q: "Everyone makes decisions in the present, hoping that those decisions could provide benefits or outcomes in the future. In Chapter 1, these future benefits are called…",
  options: ["Uncertainties", "Objectives", "Problems", "Controls"],
  answer: 1,
  explain: "Materi: “we can call these future benefits as our objectives”. Keputusan dibuat di masa kini (present), sasarannya ada di masa depan (future), dan di antaranya ada jeda waktu yang penuh ketidakpastian.",
  why: [
    "Uncertainties adalah hal-hal tidak pasti di dalam jeda waktu, bukan manfaat yang diharapkan.",
    null,
    "Problem adalah risiko yang sudah terjadi.",
    "Controls tidak dibahas sebagai istilah untuk manfaat masa depan."]
},
{
  id: "T1-17", topic: 1, level: "konsep", src: "materi", fig: "waktu",
  q: "Why are there always uncertainties between making a decision and achieving an objective?",
  options: [
    "Because every decision is made without any information",
    "Because objectives are always set by other people",
    "Because there is a time interval between when a person makes a decision and until that person achieves the objective",
    "Because problems always happen right after a decision is made"
  ],
  answer: 2,
  explain: "Materi: there is a time interval between when a person makes a decision and until that person achieves their objective; within that time, there are lots of uncertainties. Ketidakpastian yang dapat memengaruhi sasaran itulah yang disebut risiko.",
  why: [
    "Keputusan bisa saja dibuat dengan informasi lengkap; ketidakpastian tetap ada karena masa depan belum terjadi.",
    "Siapa yang menetapkan sasaran tidak menentukan ada-tidaknya ketidakpastian.",
    null,
    "Masalah tidak selalu muncul setelah keputusan; risiko belum tentu terjadi."]
},
{
  id: "T1-18", topic: 1, level: "kasus", src: "materi", kasus: "rax",
  q: "In the RAX case, what was the main reason RAX was incapable of responding to the drastic business trend shifting?",
  options: [
    "RAX lacked working capital",
    "RAX was hit by a natural-based disaster",
    "As a family company, RAX really cared for its ancestral values",
    "RAX’s suppliers stopped delivering materials"
  ],
  answer: 2,
  explain: "Materi: “Since RAX is a family company that really cares for its ancestral values, it makes them incapable to respond these situations.” Pergeseran tren fashion yang cepat adalah risiko yang tidak direspons, sehingga berujung pada masalah reputasi, krisis, lalu disaster.",
  why: [
    "Kasus tidak menyebut kekurangan modal sebagai penyebab.",
    "Kasus RAX tidak melibatkan bencana alam; disaster-nya berupa kebangkrutan.",
    null,
    "Kasus tidak menyebut masalah pemasok."]
},
{
  id: "T1-19", topic: 1, level: "kasus", src: "materi", kasus: "rax", fig: "tangga:polos",
  q: "Which event in the RAX case marks the point where RAX’s condition became a disaster?",
  options: [
    "Fashion trends started to shift rapidly",
    "Bad news about RAX spread in international media",
    "Consumers lost their interest in using RAX’s services",
    "RAX declared bankruptcy after having US$100 billion in debt"
  ],
  answer: 3,
  explain: "Materi: “RAX declared bankruptcy after having US$100 Billion in debt — and it is a clear disaster for RAX company.” Disaster adalah kondisi yang tidak bisa kembali ke keadaan semula. Urutannya: pergeseran tren (risk) → berita buruk (reputational problem) → konsumen pergi (crisis) → bangkrut (disaster).",
  why: [
    "Pergeseran tren masih berupa risiko bagi sasaran RAX.",
    "Berita buruk yang menyebar adalah reputational problem.",
    "Konsumen yang kehilangan minat membawa RAX ke krisis, belum disaster.",
    null]
},
{
  id: "T1-20", topic: 1, level: "aplikasi", src: "materi",
  q: "A company’s warehouse collapses because the management repeatedly ignored maintenance reports, destroying the organisation from within. Based on Chapter 1, this is categorised as…",
  options: [
    "Natural-based disaster (external context)",
    "Human-based disaster (internal context)",
    "Crisis phase",
    "Risk"
  ],
  answer: 1,
  explain: "Human-based disaster disebabkan kegagalan atau kesalahan manusia, misalnya gedung runtuh (collapsed building), kebakaran, atau gagal meluncurkan produk baru, dan merusak organisasi dari dalam (internal context). Natural-based disaster disebabkan faktor alam dan datang dari luar.",
  why: [
    "Penyebabnya kelalaian manusia, bukan faktor alam.",
    null,
    "Crisis phase adalah banyak masalah dalam satu periode; gedung runtuh yang menghancurkan organisasi adalah disaster.",
    "Kejadiannya sudah terjadi, jadi bukan lagi risiko."]
}
);
