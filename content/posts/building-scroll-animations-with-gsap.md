---
title: "Building Scroll Animations with GSAP and ScrollTrigger"
date: "2026-01-28"
excerpt: "A deep dive into creating performant, complex scroll-driven animations using GSAP's ScrollTrigger plugin. Learn how to pin sections, orchestrate timelines, and handle responsive behavior."
author: "Maalik Ahmad Hornbuckle"
---

# Building Scroll Animations with GSAP and ScrollTrigger

Scroll-driven animations have become a staple of modern web experiences. When done right, they create an engaging, cinematic feel that guides users through your content. In this post, I'll share what I've learned building complex scroll animations for my portfolio site.

## Why GSAP?

There are many animation libraries out there, but GSAP (GreenSock Animation Platform) stands out for several reasons:

- **Performance**: GSAP is incredibly optimized and handles complex animations smoothly
- **Browser compatibility**: Works consistently across all major browsers
- **ScrollTrigger plugin**: Purpose-built for scroll-driven animations
- **Timeline control**: Precise sequencing and orchestration of multiple animations

> GSAP isn't just an animation library—it's a complete animation platform that handles the complexity so you can focus on creativity.

## Getting Started with ScrollTrigger

First, install GSAP and the ScrollTrigger plugin:

```bash
npm install gsap
```

Then register the plugin in your component:

```javascript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

## Basic Scroll Animation

Here's a simple fade-in animation triggered by scroll:

```javascript
useEffect(() => {
  gsap.from(".element", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".element",
      start: "top 80%",
      end: "top 50%",
      scrub: true
    }
  });
}, []);
```

The `scrub: true` option ties the animation progress directly to scroll position, creating that smooth, connected feel.

## Pinning Sections

One of ScrollTrigger's most powerful features is **pinning**. This locks an element in place while the user scrolls, perfect for horizontal scroll sections or reveal effects:

```javascript
ScrollTrigger.create({
  trigger: ".section",
  start: "top top",
  end: "+=1000",
  pin: true,
  pinSpacing: true
});
```

### Tips for Pinning

1. **Use `pinSpacing: true`** to automatically add space for the pinned duration
2. **Set clear start/end points** to control exactly when pinning begins and ends
3. **Test on different screen sizes** - pinning behavior can vary on mobile

## Timeline Orchestration

For complex animations with multiple elements, use GSAP timelines:

```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=2000",
    scrub: 1,
    pin: true
  }
});

tl.to(".cards", { x: -500, duration: 2 })
  .to(".title", { opacity: 0, duration: 0.5 }, "-=0.5")
  .to(".next-section", { opacity: 1, duration: 0.5 });
```

The timeline approach gives you precise control over sequencing and makes complex animations manageable.

## Responsive Considerations

Scroll animations often need different behavior on mobile. Use ScrollTrigger's `matchMedia` for responsive animations:

```javascript
ScrollTrigger.matchMedia({
  "(min-width: 992px)": function() {
    // Desktop animations
    gsap.to(".cards", {
      x: -500,
      scrollTrigger: { /* config */ }
    });
  },
  "(max-width: 991px)": function() {
    // Mobile - simpler or no animation
  }
});
```

## Performance Tips

1. **Use `will-change` sparingly** - only on elements that will animate
2. **Prefer transforms over layout properties** - `transform` and `opacity` are GPU-accelerated
3. **Clean up on unmount** - always kill ScrollTriggers when components unmount
4. **Use `fastScrollEnd: true`** for better performance during fast scrolling

```javascript
useEffect(() => {
  const trigger = ScrollTrigger.create({ /* config */ });

  return () => {
    trigger.kill();
  };
}, []);
```

## Conclusion

GSAP and ScrollTrigger provide a powerful foundation for building scroll-driven experiences. Start simple, test thoroughly across devices, and always prioritize performance.

The key is to enhance the user experience without overwhelming it. Subtle, purposeful animations guide users through your content and create memorable interactions.

Happy animating!
