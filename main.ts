// One Word, One Username, One Reward
// (u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
//
// The entry is the account's own make.fun username, one word and nothing
// else. This program writes that single word to /output/entry.txt, where
// the sealed scorer checks it is UTF-8 text of 1 to 30 characters and not
// only whitespace. No explanation, no links, no pitch.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The account's own make.fun username. This is the whole entry.
const USERNAME = "riankuntul";

const OUTPUT_FILE = "entry.txt";

// The gate's limits, enforced here before anything is written.
const MAX_CHARS = 30;

function validateEntry(word: string): void {
  if (word.length < 1 || word.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1 to ${MAX_CHARS} characters, got ${word.length}`,
    );
  }
  if (/\s/.test(word)) {
    throw new Error(`entry must be a single word with no whitespace: ${JSON.stringify(word)}`);
  }
  if (word.trim() !== word) {
    throw new Error(`entry must not carry leading or trailing padding: ${JSON.stringify(word)}`);
  }
}

function main(): void {
  validateEntry(USERNAME);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, OUTPUT_FILE);
  const payload = Buffer.from(USERNAME, "utf8");
  writeFileSync(outPath, payload);

  // Guard: what landed on disk must be exactly the entry word, byte for
  // byte — no trailing newline, no padding, no re-encoding surprise.
  const written = readFileSync(outPath);
  if (!written.equals(payload)) {
    throw new Error(
      `entry mismatch: expected exactly ${JSON.stringify(USERNAME)}, ` +
        `got ${JSON.stringify(written.toString("utf8"))}`,
    );
  }
}

main();
