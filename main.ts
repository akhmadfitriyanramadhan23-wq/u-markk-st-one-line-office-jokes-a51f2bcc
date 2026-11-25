import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: three concrete beats — the page that matters,
// 4:59 PM, the day before the review — and the laugh lands in the
// last few words, on the org chart. A real office detail, one reading,
// no setup to explain; the punch is an image, not a label.
const lines = [
  "The office printer only jams on the page I actually need, at 4:59 PM, the day before my review — so I put it on the org chart, right above me.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-199 characters and exactly one line.
const codePoints = [...text.replace(/\n$/, "")].length;
if (codePoints < 1 || codePoints > 199) {
  throw new Error(`entry must be 1-199 characters, got ${codePoints}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
