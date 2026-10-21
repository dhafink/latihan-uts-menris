# Latihan UTS Manajemen Risiko

Latihan soal UTS Manajemen Risiko (Corporate Governance & Risk Management, UNPAR):
**80 soal pilihan ganda** dan **12 soal essay** dari 5 topik.

**Buka latihannya:** https://dhafink.github.io/latihan-uts-menris/

| Topik | Materi | Pilihan ganda | Essay |
|---|---|---|---|
| 1 | Fundamentals to Risk Management (tortoic Chapter 1) | 20 | 3 |
| 2 | Enterprise Risk Management Frameworks | 16 | 2 |
| 3 | The Value of ERM | 16 | 2 |
| 4 | ISO 31000 Architecture – Risk Management Principles | 18 | 3 |
| 5 | Governance & Risk Management (slide kuliah Sesi 1–2) | 10 | 2 |

Ada 40 soal berbahasa Inggris dengan gaya Review Questions tortoic: 10 soal asli Chapter 1 dan 30 soal tambahan.
Soal lainnya berbahasa Indonesia. Semua pembahasan berbahasa Indonesia.

## Cara pakai
**Pilihan ganda**
1. Pilih topik, jumlah soal, dan apakah urutan soal mau diacak.
2. Klik jawaban. Jawaban benar berwarna hijau, pilihan yang salah berwarna merah, lalu pembahasannya muncul.
3. Di akhir sesi ada skor per topik dan tombol **Ulangi yang salah**.
   Kalau ada jawaban salah, muncul foto penyemangat dengan pesan yang diketik. Kalau semuanya benar, muncul hujan love.

**Essay**
1. Klik **Mulai latihan essay**.
2. Tulis jawabanmu di kotak jawaban.
3. Klik **Lihat jawaban model**, lalu centang poin yang sudah kamu tulis untuk mendapat skor mandiri.

Progres, riwayat, dan jawaban essay tersimpan di browser masing-masing. Tidak perlu akun.
Shortcut keyboard di soal pilihan ganda: `1`–`4` atau `A`–`D` untuk memilih jawaban, `Enter` untuk lanjut.

## Sumber soal
Setiap soal diberi label sumbernya:
- **Review Question asli Ch.1**: 10 soal kuis asli Chapter 1 tortoic, dalam bahasa Inggris.
- **Materi tortoic Ch.1**: disusun dari materi *Risk vs Problem* dan *Risk, Problem, Crisis, and Disaster*, termasuk kasus RAX.
- **Slide dosen**: dari slide *Governance and Risk Management* Sesi 1 dan *Corporate Governance* Sesi 2.
- **Literatur ISO/COSO**: topik 2–4 disusun dari ISO 31000:2018/2009 serta COSO ERM 2004 dan 2017, karena materi tortoic chapter itu belum tersedia.

Soal cerita dilengkapi kotak kasus. Soal tentang diagram dilengkapi gambar, misalnya tangga *uncertainty → disaster*, arsitektur ISO 31000, 8 prinsip, kubus COSO, struktur dewan, dan diagram Alijoyo.

Soal-soal ini adalah bahan latihan, bukan bocoran soal ujian. Tetap cocokkan dengan materi kuliah.

## Menjalankan di komputer sendiri
Double-click `jalankan.bat` (butuh Python), lalu buka http://localhost:8766.

Bank soal ada di folder `data/`: satu file per topik ditambah `essay.js`. Gambar dan teks kasus ada di `pendukung.js`.
Untuk mengecek validitas bank soal setelah mengedit, jalankan `node cek_soal.js`.
