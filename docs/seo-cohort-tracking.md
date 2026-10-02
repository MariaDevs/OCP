# Cohort tracking: informational vs commercial posts

## Why this exists

Clicks fell three weeks running (31 → 15 → 10 → 13) while rankings held or improved.
On 2026-10-02 we confirmed why, for at least one page: Google shows an **AI Overview**
for `como retirar dinero de yape casino` that answers the question completely in five
steps and cites onlinecasinoperu.com as its first source. The searcher gets the answer
without visiting. That generates an impression and no click.

If that effect is general, then informational "cómo / qué es" posts — the pattern
batches 7-9 deliberately chased — are structurally disadvantaged, and commercial or
brand-intent posts should hold their clicks better, because an AI summary cannot
replace seeing an actual offer and signing up.

**This file tracks whether that is true, instead of assuming it.**

## Cohorts

**A — Informational** (a complete answer is possible in-SERP):
- como-retirar-dinero-casino-yape-peru
- como-depositar-con-plin-casino-online-peru
- como-verificar-cuenta-casino-online-peru
- como-cumplir-wagering-mas-rapido-casino-online
- cuanto-puedo-retirar-casino-online-peru
- casino-online-peru-sin-verificacion
- casinos-menor-wagering-peru-2026
- blackjack-online-peru-guia-estrategia
- book-of-dead-guia-peru, gates-of-olympus-guia-peru, sweet-bonanza-guia-peru
- rtp-y-volatilidad-tragamonedas, jackpots-progresivos-casino-peru

**B — Commercial / brand** (the user wants the operator or the offer):
- betsafe-peru-resena-2026, betsafe-opiniones-peru,
  bono-bienvenida-betsafe-como-reclamarlo, como-retirar-dinero-betsafe-peru *
- 20bet-peru-resena-2026, ivibet-peru-resena-2026, 1xbet-peru-resena-2026,
  betsson-peru-resena-2026, codere-peru-resena-2026
- tiradas-gratis-sin-deposito-peru-2026, bono-bienvenida-vs-sin-deposito-peru

\* `como-retirar-dinero-betsafe-peru` is deliberately a hybrid (brand + "cómo").
If cohort B holds up but this one post behaves like cohort A, that is itself the
signal — it isolates format from intent.

## Baseline (last full week before the Betsafe cluster went live)

Cluster published 2026-09-30, so it contributes nothing yet. This is the "before".

### Week 2026-09-23 → 09-29

| Cohort | Clicks | Impressions | CTR |
|---|---|---|---|
| A — informational | 9 | 198 | 4.5% |
| B — commercial | 0 | 15 | 0% |

Cohort A's 9 clicks are entirely the Yape post (9 clicks / 184 impressions, pos 5.07)
— the same page the AI Overview cites. Cohort B is effectively pre-launch: only the
Betsafe review (13 impressions, pos 6.5) and the bonus comparison (2) had any data.

### Week 2026-09-16 → 09-22 (prior week, for trend)

| Cohort | Clicks | Impressions | CTR |
|---|---|---|---|
| A — informational | 5 | 231 | 2.2% |
| B — commercial | 0 | 2 | 0% |

## What to measure next

Pull `dimensions: ["page"]` filtered to `/blog/` for the week, split by cohort, and
record clicks / impressions / CTR per cohort below. Useful checkpoints:

- **2026-10-06** — first full week with the Betsafe cluster live
- **2026-10-13** — cluster indexed and settled

Read it as:
- **B's CTR clearly above A's** → the AI Overview theory holds; shift batches toward
  brand and commercial intent
- **Both similar** → the click decline is something else (seasonality, the Yape post's
  own queries cooling); do not rewrite strategy on it
- **B gets impressions but no clicks either** → the problem is not intent but the site's
  authority on brand terms; different fix entirely

Caveat: cohort B is small and new. One week of it is weak evidence. Two consistent
weeks before acting.

## Log

| Week | A clicks | A impr | A CTR | B clicks | B impr | B CTR | Note |
|---|---|---|---|---|---|---|---|
| 09-16 → 09-22 | 5 | 231 | 2.2% | 0 | 2 | 0% | baseline, pre-cluster |
| 09-23 → 09-29 | 9 | 198 | 4.5% | 0 | 15 | 0% | baseline, pre-cluster |
