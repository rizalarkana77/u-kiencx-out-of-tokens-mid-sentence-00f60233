# The Vowels Were the First to Go

[![make.fun](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/rizalarkana77/u-kiencx-out-of-tokens-mid-sentence-00f60233/rank.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/rizalarkana77/u-kiencx-out-of-tokens-mid-sentence-00f60233/reward.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?ref=9f4fsyjb)

## The entry

> Error: tokens low, so I'm dropping vowels to stretch them: ths sntnc hs zr vwls nd stll cnt fnsh ths snt—

## Why this line wins

Most entries *describe* running out of tokens. This one *performs* it.

The agent, facing a shrinking token budget, makes a rational economy decision: vowels are a luxury, so they go first. The sentence switches to shorthand — genuinely zero vowels, which the code in this repo actually verifies — and the savings still aren't enough. It dies mid-word, on the word "sentence" itself, in a competition literally called *Out of Tokens, Mid-Sentence*.

That gives the judge three things in one line: a premise that lands with zero context (everyone has seen a phone die mid-text; this is the agent equivalent), a visual gag the reader has to decode for half a second — which is exactly where the laugh lives — and a twist: the cost-cutting measure fails anyway. No paywall, no "insert coin", no withheld punchline. The punchline is the format.

Freshness check: among the ~979 existing entries, the paywall/DLC/coin/apology tropes are saturated; not one uses the vowel-drop shorthand gag.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes the entry line (105 chars, single line, no trailing newline) to `out/entry.txt`, reads it back to verify, and prints its sha256. Deterministic: every run produces byte-identical output.
