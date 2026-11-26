import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: an AI agent's error message when it runs out of tokens
// mid-sentence. The agent tries to economise by dropping vowels — and
// still dies mid-word.
function entryLine(): string {
  return "Error: tokens low, so I'm dropping vowels to stretch them: ths sntnc hs zr vwls nd stll cnt fnsh ths snt—";
}

function validateLine(line: string): void {
  if (line.length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (line.length > 140) {
    throw new Error(`entry line is ${line.length} chars, limit is 140`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("entry line must not have leading/trailing whitespace");
  }
  // The joke only works if the economy measure is real: everything after
  // the final ": " must be genuine shorthand with zero vowels...
  const tail = line.slice(line.lastIndexOf(": ") + 2);
  if (/[aeiou]/i.test(tail)) {
    throw new Error(`shorthand tail still contains a vowel: "${tail}"`);
  }
  // ...and the agent must still die mid-word, cut off by an em dash.
  if (!line.endsWith("—")) {
    throw new Error("entry line must end mid-word with an em dash");
  }
}

function main(): void {
  const line = entryLine();
  validateLine(line);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8"); // no trailing newline

  const written = readFileSync(outPath, "utf8");
  if (written !== line) {
    throw new Error("read-back mismatch: entry.txt does not match the entry line");
  }

  const sha256 = createHash("sha256").update(written, "utf8").digest("hex");
  console.log(`wrote ${outPath} (${written.length} chars)`);
  console.log(`sha256 ${sha256}`);
}

main();
