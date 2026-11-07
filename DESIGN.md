---
name: Craft Editorial Portfolio
colors:
  surface: '#f9f9f8'
  surface-dim: '#dadad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e8e8e7'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#47464b'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1f0'
  outline: '#77767b'
  outline-variant: '#c8c5cb'
  surface-tint: '#5f5e61'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1e'
  on-primary-container: '#858387'
  inverse-primary: '#c8c5ca'
  secondary: '#5d5e66'
  on-secondary: '#ffffff'
  secondary-container: '#e3e1ec'
  on-secondary-container: '#63646c'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e1e6'
  primary-fixed-dim: '#c8c5ca'
  on-primary-fixed: '#1b1b1e'
  on-primary-fixed-variant: '#47464a'
  secondary-fixed: '#e3e1ec'
  secondary-fixed-dim: '#c6c5cf'
  on-secondary-fixed: '#1a1b22'
  on-secondary-fixed-variant: '#46464e'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f9f9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-hero:
    fontFamily: Instrument Serif
    fontSize: 3.5rem
    fontWeight: '400'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Instrument Serif
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Instrument Serif
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Instrument Serif
    fontSize: 1.625rem
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Instrument Serif
    fontSize: 1.5rem
    fontWeight: '400'
    lineHeight: '1.35'
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Instrument Serif
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Instrument Serif
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.75'
  body-md:
    fontFamily: Instrument Serif
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.65'
  body-sm:
    fontFamily: Instrument Serif
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.06em
  nav-link:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
  space-2xl: 5rem
---

## Brand & Style

This design system embodies an editorial, craft-first aesthetic tailored for senior software engineering portfolios, technical essays, and open-source catalogs. It blends the intellectual weight of classic print publishing with the utilitarian clarity of modern developer interfaces.

The emotional signature is quiet authority, thoughtful craftsmanship, and literary clarity:
- **Tone:** Intellectual, understated, deliberate, and calm.
- **Visual Identity:** Warm paper backdrop, razor-sharp serif headlines, crisp sans-serif navigation, and monospaced accents for technical metadata.
- **Key Metaphors:** Pressed ink on cotton paper, linocut divider flourishes, and neatly cataloged index cards.

## Colors

The palette is anchored on high-contrast monochrome tones with warm paper off-whites and muted semantic accents:

- **Canvas & Surface:** Light paper (`#FBFBFA`) establishes the primary canvas, supported by subtle container tones (`#F4F4F5` and `#EDEDEC`) for cards and elevated modules.
- **Ink & Typography:** Primary ink (`#18181B`) for dominant headings and reading text; secondary ink (`#71717A`) for dates, metadata, and abstracts.
- **Borders & Rules:** Subtle delineations use muted zinc borders (`#E4E4E7`), simulating dry mechanical ruling pens.
- **Accent Tags:** Micro-badges utilize low-saturation pastels with contrasting dark text: soft mint (`#ECFDF5` / `#047857`) for engineering, warm amber (`#FEF3C7` / `#B45309`) for personal essays, subtle sky (`#E0F2FE` / `#0369A1`) for systems/data, and soft violet (`#F3E8FF` / `#6B21A8`) for theory.

## Typography

The typographic hierarchy relies on a dual-engine architecture:
- **Literary Voice:** Instrument Serif delivers editorial gravity to article headlines, essay intros, and author statements. It introduces organic rhythm through delicate letter shapes and italicized callouts.
- **Interface Structure:** Instrument Serif serves body text, navigation elements, form controls, and structured list items, guaranteeing clarity across low-density screens and responsive viewports.
- **Technical Annotations:** JetBrains Mono appears in metadata tags (e.g., dates, word counts, and language specs) to preserve technical context without cluttering the editorial reading experience.

## Layout & Spacing

The layout is structured around an editorial single-column spine with responsive dual-column expansions for modular lists:

- **Max Reading Measure:** The primary article and index column is clamped between `680px` and `740px`, centered within the viewport to guarantee optimal typographic line lengths (60–75 characters per line).
- **Dual Column Modules:** Sections such as "Latest posts" and "Curated" or "Open source" sit side-by-side on desktop displays (`>= 768px`) with a `gutter-desktop` of `2.5rem` and stack vertically on mobile screens.
- **Rhythm & Dividers:** Vertical rhythm follows generous padding (`space-xl` to `space-2xl`) between logical chapters, separated by hand-drawn or subtle mechanical hairpins (`1px` border lines with variable masking).

## Elevation & Depth

This system avoids heavy drop shadows and extruded neomorphic bevels in favor of architectural, tactile flatness:

- **Low-Contrast Hairline Outlines:** Surfaces exist on flat coordinate planes, distinguished solely by hairline borders (`1px solid #E4E4E7`) and subtle value shifts in canvas tones (`#FBFBFA` over `#F4F4F5`).
- **Interactive Depth:** Hovering interactive cards or post links introduces a subtle micro-shift: the background shifts to a faint tinted gray (`#F4F4F5`), and borders darken cleanly to `#D4D4D8` without elevation changes.
- **Overlays & Modals:** Search overlays and popovers use crisp borders accompanied by an ambient, low-opacity veil (`rgba(24, 24, 27, 0.04)` with `12px` gaussian blur), retaining the feel of tracing paper laid atop a printed manuscript.

## Shapes

The geometric personality adheres to level `2` roundedness, providing refined corners inspired by modern component libraries:

- **Base Components:** Inputs, cards, and structured modules use `0.5rem` (8px) radius, preventing harsh industrial corners while avoiding overly bubbly geometry.
- **Interactive Badges & Pills:** Header links, RSS triggers, and filter chips use rounded pill envelopes (`9999px`) to distinguish actionable targets from structured rectangular content.
- **Technical Frames:** Code examples and open-source cards employ clean `0.5rem` outer frames with hairline boundary definitions.

## Components

### Header & Navigation
- **Structure:** Floating, minimal bar with site title set in expressive tracking, coupled with horizontal pill navigation.
- **Action Pills:** Primary actions (e.g., GitHub, Theme toggle, RSS) are rendered as compact capsules (`px-3 py-1.5`) with hairline borders or solid charcoal fills (`#18181B`) and inverted text.

### Buttons & Inputs
- **Primary Button:** Solid charcoal surface (`#18181B`), crisp white text, `0.5rem` border-radius, with tactile press state (`scale-[0.98]`).
- **Search & Subscribe Inputs:** Warm white background, inset border with hairline stroke (`#E4E4E7`), placeholder text in muted zinc (`#A1A1AA`), accompanied by internal shortcut badges (`⌘K`).
- **Newsletter Box:** Hand-crafted, sketched or dashed hairline container with balanced internal padding (`space-lg`), centered layout, and inline email capture.

### Article Rows & Lists
- **Item Treatment:** Unboxed list rows featuring large Instrument Serif headline anchors, publication dates in clean monospace uppercase, short summary excerpts in Instrument Serif, and trailing metadata (word counts and topic chips).
- **Hover Micro-interaction:** Underlines appear smoothly under headlines or slight title color shift toward secondary charcoal.

### Chips & Badges
- **Category Chips:** Compact padding (`px-2 py-0.5`), rounded-md radius, subtle pastel fills (mint, violet, amber, sky) paired with dark, high-legibility typographic labels.
- **Meta Indicators:** Bullet dividers (`·`), reading length, and date tags styled in muted neutral typography (`#71717A`).

### Open Source Cards
- **Grid Treatment:** Two-column card grid with hairline borders, top-right technical label (e.g., `PHP`, `TYPESCRIPT`, `TEXT`), medium serif or sans title, and functional summary text.