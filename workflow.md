# MaalikAhmad.tech — Motion & Flow Spec (Updated)

## Flow Order

**Hero → Services (pinned, horizontal) → Featured Works (pinned, horizontal) → About (pinned title w/ steps) → Contact → Footer**

---

## Global Behaviors

* **Titles stick:** Every section’s title pins to the top at the same offset; content plays beneath, then releases.
* **Scroll = timeline:** Vertical scroll drives each section’s mini-timeline. Pinned sections briefly “take over,” then release cleanly.
* **Progress indicator:** **Single global top progress bar** (red) that fills left → right with total page progress. **No corner ticker, no section dots.**
* **Reduced motion:** If `prefers-reduced-motion` → disable pinning, parallax, counters, and marquees; horizontals become swipe/static; progress bar updates linearly.
* **Mobile rules:** Keep sticky titles only if they don’t fight browser UI; horizontals become swipe carousels; pin durations shortened/removed.

---

## Section Specs

### 1) Hero (intro beat)

**State**

* Typing headline in place.
* Minimal nav; subtle “scroll ↓” cue that fades once scrolling begins.

**Motion**

* On load: headline lines reveal in a brief stagger; icons ease in.
* On scroll: hero exits with a soft upward fade (no pin).

**Accept if**

* First scroll is snappy; cue disappears after movement; no jank.

---

### 2) Services — Pinned Horizontal (first showcase)

**Layout**

* **Sticky title** (“Services / What I Do”) at **64px top offset** (shared across all sections).
* Left column: short subcopy that can change per card (optional).
* Right column: **horizontal card rail** (4 cards; **2 visible at a time**).

**Timeline (while pinned)**

1. **Intro (0–10%)** — Title pins; subtle underline grows; first two cards slide in from the left and settle.
2. **Rail move (10–80%)** — Rail translates left to reveal cards 3–4 with **snap points** per card.
3. **Wrap/Exit (80–100%)** — Rail slows, slightly scales down, **slides upward** and fades; title fades out; section releases to normal scroll.

**Mobile**

* No pinning; horizontal **swipe** carousel (1/4 → 4/4). Title is standard (non-sticky).

**Accept if**

* Exactly 2 cards visible on desktop; snap is crisp; release is smooth with no “spring back.”

---

### 3) Featured Works — Pinned Horizontal (gallery pass)

**Layout**

* Sticky title (“Featured Works”) at the same offset; compact subline (“A few things I’m proud of.”).
* **Wider card rail** with 4–6 tiles (image, title, 1-liner, tags). Keep copy tight.

**Timeline**

1. **Intro (0–10%)** — Title pins; first 2–3 tiles pop in via mask/scale.
2. **Rail move (10–85%)** — Translate left across the gallery; **snap per tile**; active tile lifts 1–2px and increases contrast.
3. **Exit (85–100%)** — “See all work →” appears; gallery fades up; title releases.

**Hover (desktop only)**

* Tiny lift **or** gloss (pick one). No heavy shadows.

**Mobile**

* Swipe carousel; taller tiles; “See all” becomes a button beneath.

**Accept if**

* Each tile becomes centered/active at least once; CTA appears only after the last tile is revealed.

---

### 4) About — Pinned Title with Three Steps

**Structure**

* **Step A – Bio paragraphs** (concise, readable).
* **Step B – Metrics** (3–4 counters: *8+ Years*, *15+ Enterprise Projects*, *5+ Fortune 500*).
* **Step C – Partner/Tech row** (logos: gentle marquee; pause on hover).

**Timeline (while pinned)**

1. **Bio (0–40%)** — Paragraphs **scroll up** under the pinned title; lines fade in on reveal. No marquee yet.
2. **Metrics (40–70%)** — Bio fades; counters **count up once** as they enter; subtle emphasis underline or ring per metric.
3. **Partners (70–100%)** — Metrics slide up; logos **marquee** left-to-right gently.

   * Reduced motion → static grid with simple fade; counters show final values (no animation).

**Exit**

* Title fades out; section releases to Contact.

**Accept if**

* Counters run only once; marquee speed is calm (≥20s per loop); reduced-motion removes count-up and marquee fully.

---

### 5) Contact (quick & warm)

**Content**

* One-sentence invite, email button, compact form (name, email, message).

**Motion**

* On submit: instant success check ✓ with micro-glow (\~1s).

**Accept if**

* Keyboard-only users can tab and submit easily; error messages are concise and accessible.

---

## Title Stickiness (shared spec)

* **Offset:** 64px from top (match nav height); consistent for all sections.
* **Enter:** Title slides in from 4–8px lower, settles with a soft ease.
* **Exit:** Title fades to \~0.85 opacity by 80% of section, then to 0 at release; no scale.

---

## Progress & Wayfinding (Updated)

* **Single global top progress bar (red):**

  * **Position:** fixed at the very top; integrated with nav bottom edge or directly beneath it.
  * **Height:** 3–4px desktop; 2–3px mobile.
  * **Behavior:** Fills from 0% → 100% based on total page scroll; continues updating during pinned sections.
  * **Reduced motion:** Linear updates (no easing).
  * **Accessibility:** Decorative (`aria-hidden="true"`); ensure sufficient contrast.
  * **QA:** Reaches 100% exactly at bottom; no jitter; respects safe-area insets.

> **Removed:** Corner ticker, section dot rails, and per-section progress UI.

---

## Tone & Copy (light, not too serious)

* **Hero subhead:** “I build web things that don’t take themselves too seriously.”
* **Services subtitle:** “What I actually do, minus the buzzwords.”
* **Featured Works subtitle:** “A few things I’m proud of.”
* **Contact CTA:** “Pitch me your idea in one sentence.”

---

## Animation Principles

* Durations: **300–600ms** for micro-reveals; easing: soft ease-out/cubic-bezier.
* **One accent motion per component** (hover lift *or* shine, not both).
* **No scroll-jank:** keep parallax/offsets under **8px**; avoid heavy filters/blurs.

---

## Performance Guardrails

* Animate with **transform/opacity**.
* Preload first images only; **lazy-load** others (esp. work tiles).
* Clamp scrubbing; avoid negative ranges; kill off-screen animations.

---

## Accessibility

* Full **reduced-motion** support.
* Horizontal rails support **keyboard** (left/right) and **drag**; **snap** between items.
* Logos have alt text; counters announce final numbers once (not the counting).
* Colors meet **WCAG AA** contrast (watch red on gray).

---

## Acceptance Criteria (QA Checklist)

* [ ] All section titles pin at identical offset and release cleanly.
* [ ] Services & Featured rails snap per card/tile and feel smooth.
* [ ] About runs as three distinct steps (Bio → Metrics → Partners) under one pinned title.
* [ ] **Global top progress bar** tracks total scroll; reaches 100% at page bottom.
* [ ] Reduced-motion disables pinning, counters, marquee; horizontals become swipe/static.
* [ ] No jank during fast scroll/flick; CPU/GPU remain stable.
* [ ] Keyboard navigation works for rails and form; focus states are visible.

---

### Scroll Libraries — Keep/Use (implementation map; no code)

* **If you already use GSAP + ScrollTrigger:** keep them.

  * *Use ScrollTrigger for*: pinning sections, scrubbing timelines, vertical→horizontal rail translations, and release points.
  * *Use GSAP core or Framer Motion (pick one)* for micro-reveals on cards, titles, and icons to avoid overlap.
* **Smooth scrolling:** keep **Lenis** *or* **Locomotive** (choose one). If paired with ScrollTrigger, wire them via the library’s scroller proxy so progress stays accurate.
* **Progress bar:** bind to the **native page scroll value** (or the smooth-scroll lib’s master progress). Keep it independent from per-section triggers so it remains continuous.
* **Avoid stacking** multiple smooth-scroll libs at once. One smoother + one trigger/timeline lib is ideal.
* **Fallbacks:** when libraries are disabled (reduced motion), rely on native position + IntersectionObserver reveals.
