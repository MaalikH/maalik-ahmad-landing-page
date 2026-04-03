---
title: "March: Five Products, One Month"
date: "2026-04-03"
excerpt: "Nudge submitted to the App Store. BookRecs.ai is live. WebSwift.ai has a landing page. Neus is taking shape. And I turned an old project into a Mac app in a week. Here's everything that shipped in March."
author: "Maalik Ahmad Hornbuckle"
---

We're back to the builder updates.

January was about how AI changed the way I work. February I took a step back and wrote something personal about my family's history. March is different. March is about shipping.

Five products moved forward this month. Let me walk through each one.

---

## Nudge -Submitted to the App Store

If you've been following along, you saw Nudge in January when it was "almost done." Well, it took two more months to close that gap. Turns out, "almost ready" and "actually ready" are very different places.

Nudge is a motivational notification app for iPhone. You set your goals, pick a tone, and it sends you AI-written messages throughout the day to keep you going. Six tones, from gentle to aggressive. Every message is unique to you. This month I rewired the AI engine, tested different versions of the messages to find what sounds best, simplified how the AI writes from 125 lines of instructions down to 15, set up subscriptions, and submitted to Apple. Waiting on review now.

<div style="display: flex; justify-content: center; gap: 1rem; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/nudge-lockscreen-single.png" alt="Nudge lock screen notification" style="width: 250px; border-radius: 8px;" />
  <img src="/images/blog/march-2026/nudge-lockscreen-multiple.png" alt="Multiple Nudge notifications on lock screen" style="width: 250px; border-radius: 8px;" />
</div>

---

## BookRecs.ai -Deployed

This one didn't exist on March 1st. 17 days later it was live.

I tried asking AI directly for book recommendations. It was repetitive, it made up books that don't exist, and honestly it was a solid 5 out of 10. So I built something better. BookRecs.ai runs two engines: one analyzes your taste mathematically across 100,000+ books, the other is an AI reasoning about your reading history on its own. They compare notes and pick the best match. It's an 8 out of 10 with room to improve -and at $1.99/mo you can't beat the value. Paid users also get reading plans -a sequenced path of books toward a goal like "I want to understand behavioral economics." I built it to prove that the workflow I described in January could take something from zero to launch in under three weeks. It did.

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/bookrec-home.png" alt="BookRecs.ai home screen" style="width: 100%; max-width: 700px; border-radius: 8px;" />
</div>

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/bookrec-recommendation.png" alt="BookRecs.ai recommendation" style="width: 100%; max-width: 700px; border-radius: 8px;" />
</div>

---

## WebSwift.ai -Landing Page Live

People ask me to build their website all the time. Friends, family, people I meet. I don't have time for one-off client work, but the need is real. Most website builders expect you to drag and drop your way through a blank canvas. You shouldn't need to be a designer to have a website. So I'm building the thing that does it for you.

WebSwift makes professional websites for small service businesses -plumbers, stylists, trainers, therapists. Answer a few questions, get a real site. Or paste your Google Business listing and it pulls everything in automatically. Starting at $5/mo.

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/webswift-questionnaire.png" alt="WebSwift questionnaire - pick your category" style="width: 100%; max-width: 700px; border-radius: 8px;" />
</div>

Once you're through the questionnaire, you get a full dashboard to manage your site -edit pages, update content, connect a domain.

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/webswift-dashboard.png" alt="WebSwift site dashboard" style="width: 100%; max-width: 700px; border-radius: 8px;" />
</div>

Here are a couple of the templates in action:

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/webswift-template-anderson.png" alt="WebSwift template - Anderson CPA & Advisory" style="width: 100%; max-width: 700px; border-radius: 8px;" />
</div>

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/webswift-template-harbor.png" alt="WebSwift template - Harbor Foundation" style="width: 100%; max-width: 700px; border-radius: 8px;" />
</div>

The landing page just went live with an email list. I'm collecting signups while I finish the core product. Hoping to launch soon. Check it out at [webswift.ai](https://webswift.ai).

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/webswift-landing.png" alt="WebSwift.ai landing page" style="width: 100%; max-width: 700px; border-radius: 8px;" />
</div>

---

## Book Highlights Viewer -Old Project, New Life

A few years ago I built myself a tool to filter and browse my Apple Books highlights. It solved a real problem for me -if you highlight a lot when you read, there's no good way to search, filter, or organize any of it. I still see people asking for exactly this online today. So this month I gave my old code to Claude and we turned it into a native Mac app and a mobile app with an importer.

The math is simple. Millions of people use Apple Books. A percentage of them are power readers who highlight heavily. If I can reach even a small slice of those people with a $4.99 Mac app and a monthly subscription on mobile, that's a real business from a tool I already built for myself. Both apps have been submitted.

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/highlights-books.png" alt="Book Highlights - Library view" style="width: 100%; max-width: 700px; border-radius: 8px;" />
</div>

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/highlights-viewer.png" alt="Book Highlights - All highlights view" style="width: 100%; max-width: 700px; border-radius: 8px;" />
</div>

---

## Neus -A News App That Shows Every Side

There's a war going on between Iran and America right now. Depending on which app you open, you'll get a completely different version of what's happening. That's the problem. You shouldn't have to wonder if what you're reading is biased -you should be able to see for yourself. Neus shows you the same story from multiple outlets, side by side. One card per event, every perspective in one place.

This month I got the core working -the feed, in-app reader, onboarding, subscriptions with a free trial. Still building, but it's close.

<div style="display: flex; justify-content: center; gap: 1rem; margin: 1.5rem 0;">
  <img src="/images/blog/march-2026/neus-1.png" alt="Neus news feed" style="width: 250px; border-radius: 8px;" />
  <img src="/images/blog/march-2026/neus-2.png" alt="Neus story card" style="width: 250px; border-radius: 8px;" />
  <img src="/images/blog/march-2026/neus-3.png" alt="Neus multi-perspective view" style="width: 250px; border-radius: 8px;" />
</div>

---

## Closing

January I talked about how the way I build changed. March is what that change looks like in practice. One app submitted, one live, one landing page collecting signups, a news app taking shape, and an old project turned into a Mac app in a week.

I'm not trying to ship fast for the sake of it. I'm trying to build things that actually work for people. April is about what happens after you ship. I'll tell you how it goes.

See you at the end of next month.
