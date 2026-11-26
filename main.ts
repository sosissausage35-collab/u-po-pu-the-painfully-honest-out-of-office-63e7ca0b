// The Painfully Honest Out-of-Office
// Writes a single painfully honest (yet polite) out-of-office auto-reply
// to /output/entry.txt. Deterministic: the reply is hard-coded, no
// randomness, no network, no clock. Node 22+, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "I'm out of the office until Monday; your email will join the 400 unread messages I avoid opening every morning, but thank you for writing — I will get to it the moment my courage returns.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (REPLY.length < 1 || REPLY.length > 200) {
  throw new Error(`Reply must be 1-200 characters, got ${REPLY.length}.`);
}
if (REPLY.trim().length === 0) {
  throw new Error("Reply must not be only whitespace.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), REPLY, "utf8");
