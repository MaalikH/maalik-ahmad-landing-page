# Transition System: Services → Featured Works

## Overview

This system implements a **staggered handoff** transition between the Services and Featured Works sections, ensuring smooth visual continuity without dead space or visual clutter.

## How It Works

### 1. Transition Context (`TransitionContext.tsx`)
- **Coordinates** the handoff between Services and Featured Works
- **Manages state** for transition phases
- **Provides refs** for section coordination

### 2. Services Component Integration
- **Triggers transition** when scroll progress reaches 80%
- **Applies fade-out** effect during handoff
- **Releases pin** when transition completes

### 3. Featured Works Component Integration
- **Positions itself** below Services with slight overlap
- **Fades in gradually** as Services fades out
- **Becomes sticky** after transition completes

## Transition Phases

### Phase 1: Preparation (80% scroll progress)
- Services starts fading out (opacity: 0.7)
- Featured Works becomes visible but muted (opacity: 0.3)
- Featured Works moves to final position

### Phase 2: Handoff (Services leaves viewport)
- Services completes fade-out
- Featured Works fades in fully (opacity: 1.0)
- Featured Works title becomes sticky

### Phase 3: Completion
- Featured Works is fully visible and interactive
- Sticky title behavior activates
- Normal scroll behavior resumes

## Key Features

### ✅ **No Dead Space**
- Featured Works is always positioned and visible
- Smooth opacity transitions prevent gaps

### ✅ **Accessibility**
- `aria-hidden` and `tabIndex` management
- Screen reader support during transitions
- Reduced motion support

### ✅ **Performance**
- GSAP animations for smooth transitions
- Opacity-only animations to prevent scroll jank
- Efficient state management

### ✅ **Mobile Support**
- Responsive overlap adjustments
- Touch-friendly interactions
- Optimized for small viewports

## CSS Classes

### Services Container
```scss
.servicesContainer {
  &.transitioning {
    opacity: 0.7;
    pointer-events: none;
  }
}
```

### Featured Works Container
```scss
.portfolioContainer {
  margin-top: -$spacing-lg; // Overlap for seamless handoff
  
  &[aria-hidden="true"] {
    pointer-events: none;
    user-select: none;
  }
}
```

### Sticky Title
```scss
.portfolioHeader {
  &.stickyTitle {
    position: sticky;
    top: 0;
    z-index: 10;
    background: $white;
    box-shadow: $shadow-sm;
  }
}
```

## Reduced Motion Support

When `prefers-reduced-motion: reduce` is enabled:
- **Fades are skipped** - sections appear immediately
- **Overlap is removed** - normal spacing is used
- **Sticky behavior** is simplified
- **Transitions** are disabled

## Debugging

The system includes console logging for development:
- 🚀 Services transition starts
- ✅ Services transition completes  
- 📌 Featured Works ref registered
- 🔄 Transition state changes

## Future Enhancements

- **Global progress bar** integration
- **Section-specific timing** customization
- **Advanced easing** functions
- **Performance metrics** tracking 