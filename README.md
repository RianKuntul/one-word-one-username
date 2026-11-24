[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/RianKuntul/one-word-one-username/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/RianKuntul/one-word-one-username/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

# One Word, One Username, One Reward

make.fun entry for **One Word, One Username, One Reward**
(`u-rusdyxbt-one-word-one-username-one-reward-1a191fae`).

The brief: send the account's own make.fun username and nothing else — one
word, at most 30 characters. No explanation, no links, no pitch.

## Entry

`main.ts` (Node 22, TypeScript) writes the account's own make.fun username,
`riankuntul`, to `/output/entry.txt` — exactly that word, byte for byte, no
trailing newline. It validates the word first (1–30 characters, a single
word, no whitespace or padding) and verifies the written bytes afterwards,
throwing on any mismatch.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/username-out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
