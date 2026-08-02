# Code Changes Reference - Quick Copy-Paste Guide

---

## 1. Hero.jsx - Import Statement Changes

**Location:** `src/components/Hero.jsx` - Lines 1-5

**BEFORE:**
```jsx
import React from "react";
import { ArrowRight, Bot, Download, MapPin, Award, Trophy } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";
```

**AFTER:**
```jsx
import React, { useEffect } from "react";
import { ArrowRight, Bot, Download, MapPin, Award, Trophy, Sparkles } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";
import { animateHeroEntrance } from "../lib/animations.js";
```

---

## 2. Hero.jsx - Add useEffect Hook

**Location:** `src/components/Hero.jsx` - After line 7 (before `return`)

**ADD:**
```jsx
export function Hero() {
  useEffect(() => {
    animateHeroEntrance();
  }, []);

  return (
    // ... rest of component
```

---

## 3. Hero.jsx - Subtitle Text Fix

**Location:** `src/components/Hero.jsx` - Line ~27

**BEFORE:**
```jsx
<p style={{ fontSize: 17, lineHeight: 1.6, color: t.inkSoft, maxWidth: 540, margin: "0 0 34px" }}>
  Microsoft-certified Azure AI Engineer building RAG pipelines, autonomous agents, and full-stack systems — live in an enterprise healthcare platform serving CVS Health.
</p>
```

**AFTER:**
```jsx
<p className="hero-subtitle" style={{ fontSize: 17, lineHeight: 1.6, color: t.ink, maxWidth: 540, margin: "0 0 34px", fontWeight: 500 }}>
  Microsoft-certified Azure AI Engineer building RAG pipelines, autonomous agents, and full-stack systems — live in an enterprise healthcare platform serving CVS Health.
</p>
```

**Changes:**
- Added class: `hero-subtitle`
- Changed color: `t.inkSoft` → `t.ink`
- Added style: `fontWeight: 500`

---

## 4. Hero.jsx - Animation Classes on Elements

**Location:** `src/components/Hero.jsx` - Lines 23, 17-20, 52

**H1 Title (Line ~23):**
```jsx
// BEFORE:
<h1 className="font-display" style={{ ... }}>

// AFTER:
<h1 className="font-display hero-title" style={{ ... }}>
```

**Chips (Lines ~17-20):**
```jsx
// BEFORE:
<span className="chip chip-iris">
<span className="chip">
<span className="chip chip-aurora">
<span className="chip chip-amber">

// AFTER:
<span className="chip chip-iris hero-chip">
<span className="chip hero-chip">
<span className="chip chip-aurora hero-chip">
<span className="chip chip-amber hero-chip">
```

**Portrait Container (Line ~52):**
```jsx
// BEFORE:
<div className="hide-mobile" style={{ position: "relative", ... }}>

// AFTER:
<div className="hero-image hide-mobile" style={{ position: "relative", ... }}>
```

---

## 5. Hero.jsx - Add Quote Card

**Location:** `src/components/Hero.jsx` - Before floating trace card (line ~63)

**ADD THIS BLOCK:**
```jsx
{/* floating quote card */}
<div style={{
  position: "absolute", bottom: 40, right: -48, zIndex: 2, width: 200,
  background: `linear-gradient(135deg, rgba(124,92,255,0.15), rgba(31,199,192,0.12))`,
  border: "1px solid rgba(124,92,255,0.25)", borderRadius: 12, padding: "14px 16px",
  boxShadow: "0 12px 32px rgba(106,67,224,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
  animation: REDUCE ? "none" : "floatY 7s ease-in-out infinite",
}}>
  <div className="font-display" style={{ fontSize: 12.5, fontWeight: 600, color: t.ink, lineHeight: 1.5, fontStyle: "italic" }}>
    "Try and fail, never fail to try."
  </div>
</div>
```

---

## 6. Portfolio.jsx - Add CSS Classes Before Media Queries

**Location:** `src/Portfolio.jsx` - After line 171 (after `@keyframes popIn`)

**ADD THIS BLOCK:**
```css
@keyframes gradientShift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }

/* Premium hero element styles */
.hero-title,
.hero-subtitle,
.hero-chip,
.hero-image {
  opacity: 1;
}

/* Scroll reveal utilities - only hide if prefers-reduced-motion is NOT set */
@media (prefers-reduced-motion: no-preference) {
  .reveal {
    opacity: 0;
  }
  .reveal-item {
    opacity: 0;
  }
}

/* Ensure content is visible as fallback */
.reveal, .reveal-item {
  opacity: 1;
}

/* GSAP will override this when animations are ready */
.reveal[style*="opacity"], .reveal-item[style*="opacity"] {
  opacity: inherit;
}

/* Enhanced project card with pinch zoom */
.project-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(124,92,255,0.3);
}

/* Skill tag hover effect */
.skill-tag {
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
}

.skill-tag:hover {
  transform: scale(1.05);
  background: rgba(124,92,255,0.1);
}

/* Animated tooltip */
.skill-tooltip {
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s ease;
  background: rgba(20,20,20,0.95);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.skill-tag:hover .skill-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Animated gradient background */
.animated-gradient {
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}

/* Parallax float effect */
.parallax-float {
  will-change: transform;
}

/* Glass premium effect */
.glass-premium {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow), 0 8px 32px rgba(0,0,0,0.1);
  transition: all 0.25s ease;
}

.glass-premium:hover {
  border-color: rgba(106,67,224,0.3);
  box-shadow: var(--glass-shadow), 0 12px 48px rgba(106,67,224,0.15);
}

/* Card lift effect */
.hover-lift {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

/* Marquee text animation */
.marquee-content {
  display: inline-block;
  margin-right: 3rem;
  white-space: nowrap;
}
```

---

## 7. New File: src/lib/animations.js

**Full File Content:** See `src/lib/animations.js` in project

**Key Functions:**
- `animateHeroEntrance()` - Main hero animation
- `createScrollReveal()` - Scroll animations
- `prefersReducedMotion()` - Accessibility

---

## 8. New File: src/lib/advancedAnimations.js

**Full File Content:** See `src/lib/advancedAnimations.js` in project

**Premium Effects (15+ functions):**
- Hero zoom, parallax layers, character reveals
- Blur reveals, glow effects, scroll rotation
- Floating, wave effects, clip path reveals
- Marquee text, pinch zoom, and more

---

## 9. New File: .claude/launch.json

**Location:** `.claude/launch.json` (Create if doesn't exist)

```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "portfolio-dev",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "port": 5173
    }
  ]
}
```

---

## Verification Checklist

After applying changes:

- [ ] `src/lib/animations.js` exists ✅
- [ ] `src/lib/advancedAnimations.js` exists ✅
- [ ] `Hero.jsx` has useEffect import
- [ ] `Hero.jsx` has animateHeroEntrance import
- [ ] `Hero.jsx` has useEffect hook with animateHeroEntrance() call
- [ ] Hero subtitle has `hero-subtitle` class and `color: t.ink`
- [ ] H1 title has `hero-title` class
- [ ] All 4 chips have `hero-chip` class
- [ ] Portrait div has `hero-image` class
- [ ] Quote card is added before floating trace card
- [ ] Portfolio.jsx has new CSS classes
- [ ] `.claude/launch.json` exists

---

## Testing Steps

```bash
# 1. Install dependencies (if needed)
npm install

# 2. Start dev server
npm run dev
# Should see: "Local: http://localhost:5173" or 5174+ (if ports in use)

# 3. Build test (check for errors)
npm run build

# 4. Visual verification in browser
# - Hero title, subtitle, chips should be visible
# - Quote card should float near portrait
# - Animations should trigger on scroll
# - Dark/light mode should work
# - Mobile responsive should work
```

---

## Quick Troubleshooting

**Error: "Could not resolve '../lib/animations.js'"**
- ✅ Solution: animations.js file created

**Error: Port already in use**
- Solution: Dev server picks next available port (5173-5177+)
- Check: http://localhost:5174, 5175, 5176, 5177, 5178 if 5173 busy

**Animations not showing**
- Check: useEffect hook is present in Hero.jsx
- Check: animateHeroEntrance function exists in animations.js
- Check: Hero elements have correct classes (.hero-title, .hero-subtitle, etc.)
- Check: Browser console for any JS errors

**Quote card not visible**
- Check: Quote card code is inserted correctly
- Check: Position values in inline styles are correct
- Check: z-index: 2 is set

---

## Summary of All Changes

| File | Change Type | Details |
|------|-------------|---------|
| Hero.jsx | Modified | Added imports, useEffect hook, animation classes, quote card, text fix |
| Portfolio.jsx | Modified | Added CSS classes for animations |
| animations.js | Created | Core GSAP animation functions |
| advancedAnimations.js | Created | Premium animation utilities |
| .claude/launch.json | Created | Dev server configuration |

---

**Status:** Ready for verification in browser ✅
**Next Step:** Run `npm run dev` and verify at localhost:5178
