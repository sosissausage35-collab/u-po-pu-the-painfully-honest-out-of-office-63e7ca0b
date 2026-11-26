[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/sosissausage35-collab/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/rank.svg)](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/sosissausage35-collab/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/reward.svg)](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

# The Painfully Honest Out-of-Office

Entry for the [make.fun competition "The Painfully Honest Out-of-Office"](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b) — one out-of-office auto-reply of at most 200 characters, painfully honest about the sender's inbox, yet polite enough that a manager would let it stand.

## The reply

> I'm out of the office until Monday; your email will join the 400 unread messages I avoid opening every morning, but thank you for writing — I will get to it the moment my courage returns.

(187 characters, one sentence.)

## How it works

`main.ts` (Node 22+, standard library only) writes the reply above to `/output/entry.txt`. It is fully deterministic: the reply is hard-coded, with no randomness, no network access, and no clock. The program validates that the reply is 1–200 characters and not only whitespace before writing it.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
