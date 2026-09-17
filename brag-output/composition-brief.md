# Hyperframes Composition Brief: AA Fencing LLC

## Objective
Create a ~22s landscape launch/brag video announcing the new AA Fencing LLC website (aafencing-llc.com). Gritty local-contractor trailer energy: real jobs, real Rochester yards, 30+ years, union contractor.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: ~22s

## Source Material
- Project root: /Users/zmeakin/aa-fencing-llc-website
- Primary files read: src/AAFencingSite.jsx
- Product name: AA Fencing LLC
- Tagline / strongest claim: "Rochester's Trusted Fence Company" · "We don't cut corners, and we don't dump dry concrete mix into dry dirt holes."
- Key visuals to recreate: real fence photos (residential vinyl, commercial security, stamped concrete), the site's before/after slider (residential-2.png → fence-2.jpeg), the credentials ticker, the 4.25★/53 reviews proof, EST. 1992 lockup with AA logo.
- Copy that must appear verbatim:
  - ROCHESTER'S TRUSTED FENCE COMPANY
  - UNION CONTRACTOR SINCE 1992
  - ELITE FENCE PRODUCTS AUTHORIZED DEALER
  - 4.25 / 5 — from 53 reviews
  - "Even better than we hoped!" — Rebecca B., Chili, NY
  - EST. 1992 · ROCHESTER, NY
  - aafencing-llc.com

## Creative Direction
- Tone preset: cinematic
- Creative direction: gritty local-contractor trailer, real jobs, no fluff, built to last
- Angle: let the real work carry it — bold type, dramatic slow push on real photos, hard green accents, confident restrained pacing.
- Hook: black → green rail draws → "ROCHESTER'S TRUSTED FENCE COMPANY" slams over a darkened real fence photo, green pulse dot, logo settles.
- Outro: EST. 1992 · ROCHESTER, NY + AA logo + aafencing-llc.com, hard clean stop.
- Avoid: generic SaaS language, abstract filler, unrelated redesign, em-dashes in on-screen copy, cheesy stingers.

## Visual Identity
- Background: #000000 / #111111
- Text: #ffffff
- Accent: #1f8b2e (brand green)
- Display font: Impact / condensed heavy sans (industrial trailer feel; system-safe, no web fetch)
- Body font: Inter / system sans
- Visual references: real gallery + site photos, green rail accent, AA-Logo-02.png

## Storyboard
See brag-output/brag-plan.md. Scene summary (beat-aligned to track vol-11, 114.8 BPM):
1. Hook — 0–3.7s — rail draw, headline slam (beat 1.60), logo settle.
2. Montage — 3.7–9.5s — 3 real photos: VINYL PRIVACY (3.70), COMMERCIAL SECURITY & BOLLARDS (5.80), STAMPED CONCRETE & LANDSCAPING (7.91); metal thunk each.
3. Before/After — 9.5–13.2s — residential-2 → fence-2 divider sweep, AFTER pop (beat 12.65).
4. Credentials — 13.2–16.9s — 3 stacked lines every-other-beat, full-set hold.
5. Proof — 16.9–19.5s — 4.25★ / 53 reviews + real quote.
6. Close — 19.5–22.1s — EST. 1992 impact (beat 20.02), logo + URL.

## Audio
- Audio role: cinematic/driving bed with motion-matched accents.
- Music: assets/music/track.mp3 (happy-beats-business-moves vol-11, 114.8 BPM).
- Music treatment: play under from 0, steady volume ~0.6, hard trailer stop at end (final impact rings).
- Music cue guidance: cues in assets/music/track.cues.json. Strong cues locked: 1.60 (headline), 12.65 (after pop), 20.02 (EST impact). Montage + credentials snapped to beat grid.
- Audio-reactive treatment: subtle — deterministic beat-synced green-glow pulse (~0.52s / 114 BPM) on the rail/accent. True RMS/frequency extraction skipped (hyperframes-creative extraction helper not loaded in this run); documented, not blocking.
- Audio-coupled moments: montage cuts (metal thunk), before/after sweep (whoosh/rollover), credential lines (light ticks), proof stars (shimmer), EST. 1992 (heavy metal impact).
- SFX: metal-thunk.ogg, sweep.ogg, tick.ogg, shimmer.ogg, impact-heavy.ogg, settle.ogg (in assets/sfx/).

## Hyperframes Instructions
Single-file GSAP composition per scaffold contract: one paused root timeline on window.__timelines["main"], data-start/data-duration per scene, class="clip". System-safe fonts only (no network fetch). Run `hyperframes check` before render.
