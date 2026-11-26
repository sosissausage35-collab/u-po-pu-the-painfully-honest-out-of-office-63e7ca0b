// The Painfully Honest Out-of-Office
// Writes a single painfully honest (yet polite) out-of-office auto-reply
// to /output/entry.txt. Deterministic: the reply is hard-coded, no
// randomness, no network, no clock. Node 22+, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "I'm out of the office until Monday; your email will join the 400 unread messages I avoid opening every morning, but thank you for writing — I will get to it the moment my courage returns.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate validation: 1–200 characters, not only whitespace, exactly one line,
// no leading/trailing whitespace, no control characters, valid UTF-8.
function validateReply(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Reply must be 1-200 characters, got ${text.length}.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Reply must not be only whitespace.");
  }
  if (text !== text.trim()) {
    throw new Error("Reply must not start or end with whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Reply must be exactly one line.");
  }
  for (const ch of text) {
    if (ch.codePointAt(0)! < 0x20 || ch.codePointAt(0) === 0x7f) {
      throw new Error("Reply must not contain control characters.");
    }
  }
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("Reply is not valid UTF-8.");
  }
}

validateReply(REPLY);

mkdirSync(outputDir, { recursive: true });
const outFile = join(outputDir, "entry.txt");
writeFileSync(outFile, REPLY, "utf8");

// Round-trip check: what was written must be byte-identical to the reply.
import { readFileSync } from "node:fs";
if (readFileSync(outFile, "utf8") !== REPLY) {
  throw new Error("written entry.txt differs from the validated reply");
}
console.log(
  `wrote ${outFile} (${REPLY.length} chars, ${Buffer.byteLength(REPLY, "utf8")} bytes, valid)`,
);
