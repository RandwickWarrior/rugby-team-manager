# Rugby Team Manager — Project Guide

App to manage parent contact, player availability, team selection, match stats
and entry into Rugby Xplorer for **Coogee Seahorses JRUFC**.

Live site: https://randwickwarrior.github.io/rugby-team-manager/

## Current status / next steps

*Last updated: 29 Jul 2026. Keep this section current — update it whenever
results are entered or work changes.*

The draw was extended: the season now runs to **13 rounds** for both teams
(R11–R13 in August were added to `fixtures.js` on 29 Jul 2026). R10 is no
longer the final round.

- **Seahorses (Fri):** R1–R9 recorded (4W–4L, R6 washout). R10–R13 to play.
  - R9 (Fri 24 Jul v Clovelly Eagles Blue) recorded as **W 59–19**.
  - Remaining: R10 Fri 31 Jul v Rockdale, R11 Fri 7 Aug v Burraneer Blue,
    R12 Fri 14 Aug v Maroubra Missiles, R13 Fri 21 Aug v Oatley.
- **Barbarians (Sun):** R1–R9 recorded (5W–1L–2D, R6 washout). R10–R13 to play.
  - R9 (Sun 26 Jul v Norths Pirates) recorded as **D 12–12**.
  - Remaining: R10 Sun 2 Aug v Wakehurst, R11 Sun 9 Aug v Wahroonga Gold,
    R12 Sun 16 Aug v Mosman Dolphins, R13 Sun 23 Aug v Hornsby Lions.

**R13 is the last round of the regular season** (Fri 21 Aug / Sun 23 Aug).
**Finals** continue the round numbering with the stage in the opponent field:
- Barbarians **R14** = Sun 30 Aug, 10:00am, Nagle Park Field 1 v
  `Hornsby Lions (Semi Final)`.
- Barbarians **R15** = Sun 6 Sep, 11:10am, Granville Park Field 2 v
  `Hunters Hill Black (Grand Final)`.

Add further finals the same way as they are confirmed.

**Immediate next steps:**
1. All rounds through R9 are now recorded (Seahorses R9 W 59–19, Barbarians R9
   D 12–12). Next results due are R10 onward for both teams.
2. After each match, add the result the same way.
3. Sanity-check the coaches report / availability % once played rounds have
   results (this is where the "only 8 rounds" and ">100%" bugs tend to appear).

## What this is

A **static, no-build web app** — a set of standalone HTML files, each a full
page with inline `<style>` and `<script>`. There is no framework, bundler, or
package.json. You edit an `.html` file and it ships as-is. Vanilla JS only.

Two teams run through the same app:
- **Seahorses** — play **Friday** nights
- **Barbarians** — play **Sunday** mornings

## Pages (all at repo root)

| File | Purpose |
|------|---------|
| `index.html` | Home / landing page with links to every tool |
| `availability-fri.html` | Seahorses (Friday) availability form |
| `availability-sun.html` | Barbarians (Sunday) availability form |
| `team-manager.html` | Team selection: PIN gate, squad stats, drag-and-drop field/list selection |
| `match-stats.html` | Per-match statistics |
| `coaches-report.html` | Coaches report — availability grid + season stats, CSV export |
| `training.html` | Training attendance |
| `index.html.html` | ⚠️ Stray/legacy backup file — not linked from anywhere. Ignore unless cleaning up. |

## Data & backend

- **`fixtures.js` is the single source of truth** for all fixtures (rounds,
  dates, opponents, venues, times, results). **Edit ONLY this file** when adding
  rounds or entering results — every page loads it. Do not duplicate fixture
  data into individual pages.
- Player availability and other live data are stored via a **Google Apps Script
  web app** (a `script.google.com/macros/s/.../exec` endpoint the pages POST/GET
  against). Treat that URL as the backend API.
- **`html2canvas`** (loaded from CDN) powers "copy as image" / shareable
  match-day badges (used for WhatsApp sharing).

## Conventions & gotchas

- **Season length is currently 13 rounds** for both teams (originally 10; the
  draw was extended in Aug 2026 — and may extend further). A recurring bug class
  has been "only fetched 8 rounds" / hard-coded round counts — derive rounds
  dynamically from `fixtures.js`, never hard-code the count. The active pages
  already do this (`SEASON_FIXTURES.<team>.length`), so adding rounds to
  `fixtures.js` flows through automatically.
- Results use short codes in `fixtures.js`: `W 36–12`, `L 21–35`, `D 26–26`,
  `Washout`, or `''` (not yet played). Note the en-dash `–` in scores.
- `team-manager.html` is behind a **PIN gate** (coaches only).
- Availability % must be computed against *played* rounds, not all scheduled
  rounds, or it can exceed 100%.
- Keep each page self-contained (inline CSS/JS). Shared data goes through
  `fixtures.js`, not shared stylesheets.

## Running locally

A static file server is all that's needed. The repo ships a launch config
(`.claude/launch.json`) that runs:

```
npx --yes serve -l 3456 .
```

Then open http://localhost:3456. Any static server works (e.g.
`python -m http.server`).

## Deploy

Pushing to the default branch publishes via **GitHub Pages** to
https://randwickwarrior.github.io/rugby-team-manager/. No build step.
