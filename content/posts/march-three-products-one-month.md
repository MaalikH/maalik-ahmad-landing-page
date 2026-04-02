---
title: "March: Three Products, One Month"
date: "2026-03-26"
excerpt: "Nudge submitted to the App Store. BookRec drops tomorrow. WebSwift is taking shape. March was the month everything started shipping."
author: "Maalik Ahmad Hornbuckle"
---

We're back to the builder updates.

January was about how AI changed the way I work. February I took a step back and wrote something personal about my family's history. March is different. March is about shipping.

Three products moved forward this month. One just got submitted to Apple. One drops tomorrow. One is being built right now. Let me walk through all of it.

---

## Nudge — Submitted to the App Store

Nudge has been in development for about 11 months now. If you've been following along, you saw it in January when it was "almost ready." Well, it took two more months of real work to close that gap. "Almost ready" and "actually ready" are very different places.

Here's what March looked like inside Nudge:

I switched the entire AI backend from OpenAI to Anthropic's Claude. Then I ran three rounds of A/B testing on the notification prompts — testing different approaches to how the AI writes your messages. The winning variant shipped. I took the prompt system from 125 lines of instructions down to 15. Turns out, telling the AI less made it write better.

Beyond the AI work, I added Apple Sign-In, built a self-healing pipeline that automatically reschedules any missed notifications, wired up RevenueCat webhooks so your subscription status triggers the right behavior instantly, aligned the entire design system with Apple's Human Interface Guidelines, fixed a bug where the paywall wasn't showing when it should, built a pre-generated fallback system so you still get quality messages even if the AI has a bad day, and added daily notification caps by tier — Free gets 6 a day, Pro gets 10, Lifetime gets 20.

There was also a three-layer fix just to stop the AI from using em dashes. That one was personal.

28 commits this month. The app is submitted. If review goes smoothly, it should be live in about two weeks.

<div style="display: flex; justify-content: center; gap: 1rem; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/nudge-lockscreen-single.png" alt="Nudge lock screen notification" style="width: 200px; border-radius: 8px;" />
  <img src="/images/blog/march-2026/nudge-lockscreen-multiple.png" alt="Multiple Nudge notifications on lock screen" style="width: 200px; border-radius: 8px;" />
</div>

For the people who've been asking "when can I download it" — soon. For real this time.

---

## BookRec — Drops Tomorrow

This one is new. BookRec didn't exist on March 1st. It's 17 days old.

BookRec is a book recommendation app. Not a reading tracker, not a social platform, not a challenge app. Just recommendations. You tell it what you've read and liked, and it tells you what to read next — with a real explanation of why.

The system underneath is what I'm most proud of. It runs on a dual-engine architecture. One side builds a mathematical profile of your taste using embeddings and vector similarity — your ratings shape a taste vector, and the system searches a catalog of over 100,000 books for the closest matches. The other side is Claude, reasoning independently about what you'd enjoy based on your reading history. Then both sides meet. The system looks at where they agree, weighs confidence, and picks the best recommendation. Two sentences explaining why. No generic "you might also like" energy.

There's also a reading plan feature for paid users. You give it a goal — "I want to understand behavioral economics" or "I want to read more Black sci-fi" — and it builds a sequenced path of 5-10 books, each with a reason for its position in the order. Progress tracking, ratings, the whole thing.

25 feature specs. Three algorithm versions. Stripe integrated. Apple Sign-In done. Dropping tomorrow.

I built this fast because I wanted to prove something to myself: that the workflow I described in January — the one where AI accelerates every phase of building — could take a product from zero to launch in under three weeks. It did.

<!-- TODO: Add BookRec screenshots before publishing -->
<!-- <div style="display: flex; justify-content: center; gap: 1rem; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/bookrec-home.png" alt="BookRec home screen" style="width: 250px; border-radius: 8px;" />
  <img src="/images/blog/march-2026/bookrec-recommendation.png" alt="BookRec recommendation" style="width: 250px; border-radius: 8px;" />
</div> -->

---

## WebSwift — Building the Machine

WebSwift is the one that's been living in my head the longest.

Here's the problem: people ask me to build their website all the time. Friends, family, people I meet. I don't have time for one-off client work. But the need is real. Millions of small service businesses — plumbers, stylists, trainers, therapists — still don't have a website because every tool out there asks too much of them. Squarespace is beautiful but assumes you're a designer. Wix gives you a blank canvas and expects you to fill it. Most people don't want a canvas. They want a website.

WebSwift gives them one.

Two paths in. You can paste your Google Business or Yelp listing URL — the system extracts your name, services, photos, reviews, everything — and you have a live site in under two minutes. Or you can walk through a short questionnaire. Either way, the output is a real, mobile-responsive, SEO-ready website matched to your profession.

18 templates across 11 business categories, each with up to three style variants. The Pearl plan at $15 a month gets you a landing page, custom domain, email forwarding, contact form, Google Maps, and basic analytics. The Max plan at $30 a month adds a full multi-page site, blog, photo gallery, and an AI content assistant that writes your bio, service descriptions, taglines, SEO metadata, and blog posts for you. All of that runs on Cloudflare Workers AI at the edge — no external API keys, no latency.

This is active development right now. The core build is in progress. The roadmap after launch includes custom domains, an analytics dashboard, a referral program, and eventually white-label support for marketing agencies who want to offer this to their own clients.

The thesis is simple: if I can't build everyone's website myself, I'll build the thing that does it for them.

<div style="display: flex; justify-content: center; gap: 1rem; margin: 1.5rem 0; flex-wrap: wrap;">
  <img src="/images/blog/march-2026/webswift-onboarding.png" alt="WebSwift onboarding flow" style="max-width: 100%; border-radius: 8px;" />
  <img src="/images/blog/march-2026/webswift-gallery.png" alt="WebSwift template gallery" style="max-width: 100%; border-radius: 8px;" />
</div>

---

## Closing

January I talked about how the way I build changed. March is what that change produces.

One app submitted. One app launching. One platform being constructed. Three different products, three different markets, three different architectures — all moving at the same time.

The pace is real but so is the intention. I'm not trying to ship fast for the sake of it. I'm trying to build things that actually work for people. Nudge helps you stay consistent. BookRec helps you find your next favorite book. WebSwift gives a small business owner a professional web presence without the headache.

April is going to be about what happens after you ship. Nudge goes live. BookRec gets its first real users. WebSwift keeps building. I'll tell you how all of it goes.

See you at the end of next month.
