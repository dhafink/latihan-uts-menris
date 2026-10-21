// Validasi bank soal: node cek_soal.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: { QUESTIONS: [], ESSAYS: [] } };
vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: path.basename(f) });
run(path.join(__dirname, "pendukung.js"));
const dir = path.join(__dirname, "data");
for (const f of fs.readdirSync(dir).filter(f => f.endsWith(".js")).sort()) run(path.join(dir, f));

const { QUESTIONS: Q, ESSAYS: E, FIG, KASUS } = ctx.window;
const TARGET = { 1: 20, 2: 16, 3: 16, 4: 18, 5: 10 };  // total 80 soal pilihan ganda
const SRC = ["review", "materi", "literatur", "slide"];
const errors = [];
const perTopic = {}, levels = {}, srcCount = {};
const answerPos = [0, 0, 0, 0];
let withFig = 0, withCtx = 0;

function checkSupport(tag, q) {
  if (q.fig) { withFig++; if (!FIG(q.fig)) errors.push(`${tag}: fig "${q.fig}" tidak dikenal`); }
  if (q.kasus && !KASUS[q.kasus]) errors.push(`${tag}: kasus "${q.kasus}" tidak dikenal`);
  if (q.ctx || q.kasus) withCtx++;
  if (!SRC.includes(q.src)) errors.push(`${tag}: src tidak dikenal (${q.src})`);
  srcCount[q.src] = (srcCount[q.src] || 0) + 1;
}

const ids = new Set();
for (const q of Q) {
  const tag = q.id || "(tanpa id)";
  if (ids.has(q.id)) errors.push(`${tag}: ID duplikat`);
  ids.add(q.id);
  if (!/^T[1-5]-\d{2}$/.test(q.id)) errors.push(`${tag}: format ID salah`);
  if (+q.id.slice(1, 2) !== q.topic) errors.push(`${tag}: topic tidak cocok dengan ID`);
  if (!["konsep", "aplikasi", "kasus"].includes(q.level)) errors.push(`${tag}: level tidak dikenal (${q.level})`);
  if (!q.q || !q.q.trim()) errors.push(`${tag}: teks soal kosong`);
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${tag}: harus 4 opsi`);
  else if (new Set(q.options).size !== 4) errors.push(`${tag}: ada opsi kembar`);
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) errors.push(`${tag}: answer tidak valid`);
  if (!q.explain || q.explain.length < 40) errors.push(`${tag}: pembahasan terlalu pendek/kosong`);
  if (!Array.isArray(q.why) || q.why.length !== 4) errors.push(`${tag}: why harus 4 elemen`);
  else q.why.forEach((w, i) => {
    if (i === q.answer && w) errors.push(`${tag}: why[${i}] harus null (jawaban benar)`);
    if (i !== q.answer && !w) errors.push(`${tag}: why[${i}] kosong`);
  });
  if (q.level === "kasus" && !q.ctx && !q.kasus) errors.push(`${tag}: soal kasus tanpa konteks (ctx/kasus)`);
  checkSupport(tag, q);
  perTopic[q.topic] = (perTopic[q.topic] || 0) + 1;
  answerPos[q.answer]++;
  levels[q.level] = (levels[q.level] || 0) + 1;
}
for (const t of Object.keys(TARGET)) if ((perTopic[t] || 0) !== TARGET[t]) errors.push(`Topik ${t}: ${perTopic[t] || 0} soal (target ${TARGET[t]})`);

const eids = new Set(), ePerTopic = {};
for (const q of E) {
  const tag = q.id || "(essay tanpa id)";
  if (eids.has(q.id)) errors.push(`${tag}: ID essay duplikat`);
  eids.add(q.id);
  if (!/^E[1-5]-\d{2}$/.test(q.id)) errors.push(`${tag}: format ID essay salah`);
  if (+q.id.slice(1, 2) !== q.topic) errors.push(`${tag}: topic tidak cocok dengan ID`);
  if (!q.q || !q.q.trim()) errors.push(`${tag}: teks soal kosong`);
  if (!Array.isArray(q.points) || q.points.length < 3 || q.points.some(p => !p || p.length < 15)) errors.push(`${tag}: points minimal 3 butir yang berisi`);
  if (!q.model || q.model.length < 200) errors.push(`${tag}: jawaban model terlalu pendek`);
  checkSupport(tag, q);
  ePerTopic[q.topic] = (ePerTopic[q.topic] || 0) + 1;
}

console.log(`Pilihan ganda  : ${Q.length} soal · ${Object.entries(perTopic).map(([t, n]) => `T${t}=${n}`).join("  ")}`);
console.log(`Essay          : ${E.length} soal · ${Object.entries(ePerTopic).map(([t, n]) => `E${t}=${n}`).join("  ")}`);
console.log(`Level PG       : ${Object.entries(levels).map(([l, n]) => `${l}=${n}`).join("  ")}`);
console.log(`Sumber         : ${Object.entries(srcCount).map(([s, n]) => `${s}=${n}`).join("  ")}`);
console.log(`Bergambar      : ${withFig} · berkonteks kasus: ${withCtx}`);
console.log(`Posisi kunci PG: A=${answerPos[0]} B=${answerPos[1]} C=${answerPos[2]} D=${answerPos[3]} (diacak lagi saat tampil)`);
if (errors.length) { console.log(`\n${errors.length} masalah:`); errors.forEach(e => console.log(" - " + e)); process.exit(1); }
console.log("\nOK — semua soal valid.");
