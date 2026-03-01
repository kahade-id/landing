# Kahade Design System — Refactor Spec

> **Scope:** Pure visual/design refactor. No routing changes, no business logic, no new UI libraries.
> **Target tone:** monochrome · minimal · modern · calm · premium · trustworthy · fintech/product-grade

---

## Core Principles

1. **One visual language** — every section must speak the same design dialect
2. **Primitives-first** — no inline styles; use reusable Tailwind classes/`@apply` primitives
3. **Semantic opacity levels** — limit to: `text-black/60` (body), `text-black/40` (meta), `text-black/25` (disabled), `border-black/8` (subtle), `border-black/12` (default), `border-black/20` (emphasis)
4. **Locked radius system** — `rounded-md` (button/input), `rounded-xl` (card), `rounded-full` (pill/avatar/icon-circle)
5. **Disciplined typography** — serif/display font selectively; card/utility/dropdown headings use sans-serif product style
6. **Dark section unity** — all dark surfaces (pricing, security, CTA) share same tone, border, and surface depth

---

## Primitive Classes to Build in `globals.css`

### Section Shell
```css
.section-shell          /* py-20 md:py-28 lg:py-32 px-4 md:px-6 */
.section-shell-sm       /* py-14 md:py-20 px-4 md:px-6 */
```

### Section Heading Block
```css
.section-heading-block  /* text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4 */
.section-label          /* badge-pill + small uppercase tracking label above heading */
.section-title          /* heading scale: text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight */
.section-subtitle       /* text-base md:text-lg text-black/60 max-w-xl mx-auto */
```

### Card Shells
```css
.card-shell             /* bg-white border border-black/8 rounded-xl p-6 md:p-8 */
.card-shell-sm          /* bg-white border border-black/8 rounded-xl p-4 md:p-6 */
.card-shell-dark        /* bg-zinc-950 border border-white/8 rounded-xl p-6 md:p-8 text-white */
```

### Badge / Pill System
```css
.badge-pill             /* inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium */
.badge-pill-light       /* badge-pill + bg-black/5 text-black/70 border border-black/8 */
.badge-pill-dark        /* badge-pill + bg-white/10 text-white/80 border border-white/12 */
.badge-pill-accent      /* badge-pill + bg-black text-white */
```

### Meta Label
```css
.meta-label             /* text-xs text-black/40 font-medium tracking-wide */
.meta-label-dark        /* text-xs text-white/40 font-medium tracking-wide */
```

### Icon Box
```css
.icon-box               /* inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/5 */
.icon-box-sm            /* inline-flex items-center justify-center w-8 h-8 rounded-lg bg-black/5 */
.icon-box-dark          /* inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/8 */
```

### Button System
```css
.btn                    /* base: inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md text-sm font-medium transition-all duration-150 */
.btn-sm                 /* h-9 px-4 text-xs */
.btn-lg                 /* h-13 px-7 text-base */
.btn-primary            /* btn + bg-black text-white hover:bg-black/80 active:scale-[0.98] */
.btn-secondary          /* btn + bg-black/5 text-black hover:bg-black/10 border border-black/10 */
.btn-ghost              /* btn + text-black/70 hover:bg-black/5 hover:text-black */
.btn-dark-primary       /* btn + bg-white text-black hover:bg-white/90 (for dark sections) */
.btn-dark-secondary     /* btn + bg-white/8 text-white hover:bg-white/12 border border-white/12 */
```

### CTA Group
```css
.cta-group              /* flex flex-col sm:flex-row items-center gap-3 */
```

### Divider
```css
.divider-line           /* w-full h-px bg-black/8 */
.divider-line-dark      /* w-full h-px bg-white/8 */
```

### Trust Row
```css
.trust-row              /* flex flex-wrap items-center justify-center gap-x-6 gap-y-2 */
.trust-item             /* flex items-center gap-2 text-sm text-black/50 */
```

### Dark Section
```css
.dark-section           /* bg-zinc-950 text-white */
.dark-section-surface   /* bg-zinc-900 border border-white/8 */
```

### Inner Page Hero
```css
.inner-page-hero        /* pt-24 pb-16 md:pt-32 md:pb-20 border-b border-black/8 */
.inner-page-title       /* text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight */
.inner-page-lead        /* text-base md:text-lg text-black/60 max-w-2xl mt-4 */
```

---

## Typography Scale

| Token | Class | Usage |
|-------|-------|-------|
| Display | `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter` | Hero H1 only |
| H1 | `text-4xl md:text-5xl font-semibold tracking-tight` | Page/section hero |
| H2 | `text-3xl md:text-4xl font-semibold tracking-tight` | Section title |
| H3 | `text-xl md:text-2xl font-semibold` | Card title, subsection |
| H4 | `text-base md:text-lg font-semibold` | List heading, label |
| Body | `text-base text-black/70 leading-relaxed` | Default body |
| Small | `text-sm text-black/60` | Supporting text |
| Meta | `text-xs text-black/40 tracking-wide` | Labels, timestamps |

> **Rule:** Serif/display font (if used) restricted to Hero H1 and hero/editorial subheadings only. All other headings use sans-serif.

---

## Spacing Rhythm

| Context | Value |
|---------|-------|
| Section vertical padding | `py-20 md:py-28 lg:py-32` |
| Section heading → first content | `mt-12 md:mt-16` |
| Card internal padding | `p-6 md:p-8` |
| Card grid gap | `gap-4 md:gap-6` |
| List/stack gap | `space-y-3` or `gap-3` |
| Inline elements gap | `gap-2` or `gap-3` |
| CTA button group gap | `gap-3` |

---

## Radius System

| Element | Token |
|---------|-------|
| Button / input | `rounded-md` |
| Card | `rounded-xl` |
| Badge / pill | `rounded-full` |
| Icon box (default) | `rounded-xl` |
| Icon box (small) | `rounded-lg` |
| Dropdown | `rounded-xl` |
| Modal | `rounded-2xl` |

---

## Dark Section Surface Spec

All dark areas (Pricing dark, Security, CTA) must share:
- Background: `bg-zinc-950`
- Surface cards: `bg-zinc-900` or `bg-white/4`
- Border: `border-white/8` default, `border-white/12` emphasis
- Body text: `text-white/70`
- Heading text: `text-white`
- Meta text: `text-white/40`
- Accent: `text-white` or `bg-white` (for buttons)

---

## Motion Rules

- **Duration:** `duration-150` for micro-interactions (hover, active), `duration-300` for transitions, `duration-500` for reveals
- **Easing:** `ease-out` default
- **Marquee:** slow, subtle, `pause-on-hover`
- **Scroll reveals:** `opacity-0 translate-y-4` → `opacity-100 translate-y-0`, once only
- **No** continuous loops except marquee
- **No** dramatic scale/rotation effects
- Animation delay utility: max 6 steps (`delay-0` `delay-75` `delay-150` `delay-300` `delay-500` `delay-700`)

---

## Files to Refactor

- [ ] `src/app/globals.css` — build primitives, clean architecture
- [ ] `src/components/layout/Header.tsx`
- [ ] `src/components/sections/HeroSection.tsx`
- [ ] `src/components/sections/ProblemSection.tsx`
- [ ] `src/components/sections/HowItWorksSection.tsx`
- [ ] `src/components/sections/PricingSection.tsx`
- [ ] `src/components/sections/TestimonialsSection.tsx`
- [ ] `src/components/sections/SecuritySection.tsx`
- [ ] `src/components/sections/FAQSection.tsx`
- [ ] `src/components/sections/CTASection.tsx`
- [ ] `src/components/layout/Footer.tsx`
- [ ] `src/components/common/SimplePage.tsx`
