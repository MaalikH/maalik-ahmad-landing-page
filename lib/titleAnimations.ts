import { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export interface TitleAnimationConfig {
  sectionRef: RefObject<HTMLDivElement>;
  titleRef: RefObject<HTMLDivElement>;
  contentElements?: HTMLElement[]; // For elements that should fade with title (like cards)
  pinTrigger?: ScrollTrigger; // Reference to main pin ScrollTrigger
  customFadeInStart?: string; // Override default fade-in start
  customFadeInEnd?: string; // Override default fade-in end
  customFadeOutOffset?: number; // Override default fade-out offset (default: 300px)
  initialOpacity?: number; // Starting opacity (default: 0.2)
  finalOpacity?: number; // Ending opacity (default: 1.0)
  enableMarkers?: boolean; // Show debug markers (default: false)
}

export interface TitleAnimationCleanup {
  fadeInTrigger: ScrollTrigger;
  fadeOutTween: GSAPTween;
  cleanup: () => void;
}

/**
 * Creates standardized title fade-in/fade-out animations for sections
 * Maintains exact behavior as current Services implementation
 */
export function createStandardizedTitleAnimation(
  config: TitleAnimationConfig
): TitleAnimationCleanup | null {
  const {
    sectionRef,
    titleRef,
    contentElements = [],
    pinTrigger,
    customFadeInStart = "top bottom-=200px",
    customFadeInEnd = "top top+=120px", 
    customFadeOutOffset = 300,
    initialOpacity = 0.2,
    finalOpacity = 1.0,
    enableMarkers = false
  } = config;

  const sectionEl = sectionRef.current;
  const titleEl = titleRef.current;

  if (!sectionEl || !titleEl) {
    console.warn('TitleAnimations: Missing required elements');
    return null;
  }

  // All elements that should fade together (title + any content elements)
  const fadeElements = [titleEl, ...contentElements];

  // 1. Fade-in ScrollTrigger (before pinning)
  const fadeInTrigger = ScrollTrigger.create({
    trigger: sectionEl,
    start: customFadeInStart,
    end: customFadeInEnd,
    markers: enableMarkers,
    onUpdate: (self) => {
      const progress = self.progress;
      const opacity = initialOpacity + (progress * (finalOpacity - initialOpacity));
      gsap.set(fadeElements, { opacity: opacity, immediateRender: true });
    }
  });

  // 2. Fade-out tween (after pinning, using pin trigger reference)
  const fadeOutTween = gsap.to(fadeElements, {
    opacity: 0,
    ease: "none",
    immediateRender: false,
    scrollTrigger: {
      trigger: sectionEl,
      start: pinTrigger ? () => pinTrigger.end : "bottom top",
      end: pinTrigger ? () => pinTrigger.end + customFadeOutOffset : `bottom top-=${customFadeOutOffset}px`,
      scrub: true,
      markers: enableMarkers,
      invalidateOnRefresh: true
    }
  });

  // 3. Cleanup function
  const cleanup = () => {
    fadeInTrigger?.kill();
    fadeOutTween?.kill();
  };

  return {
    fadeInTrigger,
    fadeOutTween,
    cleanup
  };
}

/**
 * Helper function to set initial title opacity
 */
export function setInitialTitleOpacity(
  titleRef: RefObject<HTMLDivElement>, 
  contentElements: HTMLElement[] = [],
  opacity: number = 0.2
) {
  const titleEl = titleRef.current;
  if (!titleEl) return;

  const elements = [titleEl, ...contentElements];
  gsap.set(elements, { opacity: opacity });
}