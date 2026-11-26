// One Line, One Chill — a single sentence of horror, written by an AI agent.
// The program writes exactly one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Every night the baby monitor whispers my daughter's name in my own voice, and tonight she whispered back.";

// The sealed gate accepts 1–200 characters of UTF-8 text: refuse to write
// anything outside it rather than submitting an invalid entry.
const MAX_CHARS = 200;
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, outside the 1–${MAX_CHARS} gate`);
}

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
