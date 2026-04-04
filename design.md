# Design System — antolinjm

Single source of truth for visual design decisions across the portfolio site, interactive tools, and LinkedIn infographics.

**What this covers:** color palettes, typography, spacing, shadows, border-radii, semantic colors, hard rules.
**What this does not cover:** animation patterns (→ CLAUDE.md), content writing (→ skills/), tool architecture (→ CLAUDE.md).

---

## 2. Canonical palette — Warm Beige (default)

Use this for all new work unless there is a deliberate reason to use a variant (see section 3).

```css
/* Backgrounds & surfaces */
--bg:           #f5f4f0;   /* page canvas */
--surface:      #eeede8;   /* first lift — sidebar, panel backgrounds */
--card:         #eceae4;   /* standard card */
--card-lift:    #e7e3da;   /* featured / champion card */
--page-frame:   #e2e0d9;   /* body outside canvas (infographics only) */
--dim:          #d8d7d0;   /* badge containers, pill backgrounds, dead fills */

/* Text */
--ink:          #1a1a18;   /* primary — near-black, not pure black */
--muted:        #6b6b65;   /* secondary — labels, captions, eyebrows */
--branding:     #c8c6bf;   /* footer / watermark — very faint */

/* Accent */
--accent:       #c8440a;   /* burnt orange — one element per composition */

/* Borders */
--border:       #d4d2cb;   /* standard — tonal, subtle */
--border-deep:  #c0bfb8;   /* stronger — active elements, range thumb tracks */

/* Indicator dots */
--dot-off:      #d4d2cb;   /* inactive */
--dot-on:       #9a9990;   /* active, non-accent */
```

**Token drift resolution (for existing files):**
- Canonical text token: `--ink` (not `--text`)
- Canonical muted: `#6b6b65` (RFM/Process Flow tools use `#888880` locally — acceptable when needed for contrast on canvas, but new files default to `#6b6b65`)
- Canonical card: #eceae4 (not #e8e7e2)
- Canonical border: #d4d2cb` (not #d0cfc8)

---

## 3. Palette variants

Each variant defines the full token set so a file can swap palettes by changing ~14 hex values in `:root`. Variant selection requires a deliberate reason — see rules in section 9.

### Warm Dark

**When to use:** canvas-heavy animated tools with glowing particle elements. The orange reads as ember/fire against dark. The RFM Visualizer is the prototype for this palette.

**Personality:** cinematic, late-night data terminal.

```css
--bg:           #141412;
--surface:      #1a1a17;
--card:         #1f1f1b;
--card-lift:    #252520;
--page-frame:   #0e0e0c;
--dim:          #2a2a26;

--ink:          #f0ede6;   /* warm off-white */
--muted:        #8a8a82;
--branding:     #3a3a36;

--accent:       #c8440a;   /* same burnt orange — reads as ember */

--border:       #2a2a26;
--border-deep:  #3a3a35;

--dot-off:      #2e2e2a;
--dot-on:       #5a5a54;
```

Shadow adjustments for Warm Dark (the standard `rgba(26,26,24,x)` shadow is invisible on dark):
```
Standard card:       0 2px 24px rgba(0, 0, 0, 0.4)
Featured card:       0 2px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(200, 68, 10, 0.4)
```

---

### Cool Neutral

**When to use:** a tool with predominantly numerical/table-heavy data where the warm beige feels too soft. More enterprise, analytical dashboard feel.

**Personality:** live data feed, high information density.

```css
--bg:           #f4f5f6;
--surface:      #eceef0;
--card:         #e8eaec;
--card-lift:    #e0e3e6;
--page-frame:   #dde0e3;
--dim:          #d4d7da;

--ink:          #18191c;
--muted:        #636870;
--branding:     #b8bcc2;

--accent:       #2d5be3;   /* slate blue — not the electric #3066ff */

--border:       #ced2d8;
--border-deep:  #b8bdc5;

--dot-off:      #ced2d8;
--dot-on:       #8d949e;
```

---

### Ink

**When to use:** editorial or text-forward infographics — quotes, principles, frameworks where maximum contrast at large type sizes is the visual strategy.

**Personality:** aged paper, press-ready, prestigious.

```css
--bg:           #f2f0eb;
--surface:      #e6e3dc;
--card:         #dedad1;
--card-lift:    #d5d1c6;
--page-frame:   #ccc9bf;
--dim:          #c8c4ba;

--ink:          #0f0f0d;   /* true near-black — stronger than Warm Beige */
--muted:        #58584f;
--branding:     #a8a59c;

--accent:       #c8440a;   /* reads as a stamp / seal */

--border:       #c0bdb4;
--border-deep:  #a8a49a;

--dot-off:      #c0bdb4;
--dot-on:       #8a8780;
```

---

## 4. Typography system

### Font roles

| Role | Family | Context |
|---|---|---|
| Data / mono | IBM Plex Mono | Tools — headers, labels, body, data values, nav |
| Body / sans | IBM Plex Sans | Infographics — titles, body copy, card names |
| Display | Syne 700/800 | Canvas-heavy animated tools only. **Never in infographics.** |

IBM Plex Mono is the default in tools. IBM Plex Sans is the default in infographics. The two contexts do not swap defaults.

### Google Fonts imports by context

```
Tools (mono only):      family=IBM+Plex+Mono:wght@400;500;600
Tools (with display):   family=IBM+Plex+Mono:wght@400;500;600&family=Syne:wght@700;800
Infographics:           family=IBM+Plex+Sans:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500
```

### Size hierarchy

Font sizes in tools: always `rem`. Font sizes in infographics: always `px`.

| Role | Tools (rem) | Infographics (px) | Weight | Notes |
|---|---|---|---|---|
| Tiny label / subscript | 0.62rem | 10–11px | 500 | Heatmap headers, footnotes |
| Micro label | 0.65–0.68rem | 11–12px | 500 | Table cells, signal dots |
| Eyebrow / caption | 0.72–0.76rem | 12–14px | 500 | Section labels, uppercase trackers |
| Body small | 0.80–0.82rem | 14–15px | 400 | Sidebar body, secondary text |
| Body | 0.88–0.90rem | 17–19px | 400 | Main reading text |
| Body large | — | 20–22px | 400 | Infographic card body |
| Section heading | 1.1–1.2rem | 21–28px | 700 | Card headings, panel titles |
| Tool title | 1.4–1.5rem | — | 600 | Tool main title bar |
| Infographic title | — | 48–76px | 700 | Primary display title |
| Hero number (infographic) | — | 76–140px | 700 | The single hero stat |
| Hero number (tool display) | Syne, 1.5–1.6rem | — | 800 | Animated summary stats only |

### Letter-spacing

| Context | Value |
|---|---|
| Uppercase eyebrow labels | `0.08–0.14em` |
| Tool headings / titles | `-0.02em` |
| Infographic display titles | `-0.025–0.03em` |
| Branding / watermark | `0.06em` |
| Body text | `0` |

### Line-height

| Context | Value |
|---|---|
| Display titles | `1.0–1.08` |
| Section headings | `1.2–1.25` |
| Body copy | `1.4–1.55` |
| Sidebar small text | `1.6–1.75` |

---

## 5. Spacing system

### Tools (rem-based, responsive)

| Concept | Value | Used for |
|---|---|---|
| space-1 | 0.25rem (4px) | Micro gaps, dot separators |
| space-2 | 0.35–0.40rem (6px) | Tight internal padding |
| space-3 | 0.50–0.55rem (8–9px) | Between related elements |
| space-4 | 0.60–0.70rem (10–11px) | Card internal row gaps |
| space-5 | 1.0rem (16px) | Standard section gap |
| space-6 | 1.2–1.3rem (19–21px) | Panel padding |
| space-7 | 1.4rem (22px) | Header bottom margins |
| page-x | 1.4rem (22px) | Horizontal nav / panel padding |
| page-y | 2.5–2.6rem (40–42px) | Vertical page padding |

### Infographics (px-based, fixed canvas)

| Context | Value |
|---|---|
| Canvas outer padding (standard) | 56px all sides |
| Canvas outer padding (minimum) | 48px |
| Gap between major sections | 24–36px |
| Card internal padding | 32–40px |
| Gap between cards in a grid | 14–24px |
| Section header to content | 20–28px |
| Footer / branding area top margin | 28–36px |

---

## 6. Border-radius system

Never mix infographic scale (18–22px) with tool scale (2–4px) within the same file.

| Context | Value | Notes |
|---|---|---|
| Infographic cards | 18–22px | Generous, warm. 20px default. |
| Tool panels / cards | 2–4px | Data-terminal aesthetic. |
| Tool input fields | 3–4px | Matches tool card scale. |
| Tool pills / badges | 2–3px | Not fully rounded. |
| Filter / sort buttons (pill) | 20px | Fully rounded — interactive controls only. |
| Modal | 12px | Midpoint between infographic and tool scales. |
| Export buttons (infographic chrome) | 6px | Outside canvas; slightly softer. |
| Range input thumb | 2px | Near-square for data terminal feel. |

---

## 7. Shadow system

All shadows are ambient-only. No hard drop shadows.

The `rgba(26, 26, 24, x)` base matches `--ink` at low opacity — tonally warm, not pure black.

```
/* Warm Beige / Cool Neutral / Ink */
Standard card:            0 2px 40px rgba(26, 26, 24, 0.05)
Featured card:            0 2px 40px rgba(26, 26, 24, 0.07)
Featured + ghost border:  0 2px 40px rgba(26, 26, 24, 0.07), 0 0 0 1.5px rgba(200, 68, 10, 0.35)

/* Warm Dark */
Standard card:            0 2px 24px rgba(0, 0, 0, 0.4)
Featured + ghost border:  0 2px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(200, 68, 10, 0.4)
```

The ghost border uses `box-shadow`, not `border`. Never a solid `border-color` line on a card.

---

## 8. Semantic / data colors

These are consistent across all palette variants. They do not change when the base palette changes.

```css
/* Status — badges, benchmark cards, indicators */
--good:     #2a7a3b;    --good-bg: #d4edda;
--warn:     #b87a00;    --warn-bg: #fff3cd;
--bad:      #c8440a;    --bad-bg:  #fde8e2;

/* Data coloring — process / segment tools */
--hot:      #dc2626;    /* high urgency / recent / critical */
--warm:     #d97706;    /* mid recency / warning */
--cold:     #16a34a;    /* lower urgency / healthy / available */
--cool:     #0891b2;    /* timing / duration / latency */
```

**Note on `--bad` and `--accent`:** they share the value #c8440a` intentionally. In a single view, distinguish by context — `--accent` for positive emphasis (the featured element), `--bad` for negative state in a status indicator. They can coexist in the same tool.

---

## 9. Implementation rules (non-negotiable)

### Color

1. **No CSS variables inside `#canvas`** in infographic files. `html2canvas` cannot resolve `var(--x)`. All colors inside the canvas must be hardcoded hex.

2. **Accent #c8440a on exactly one element per composition.** Best candidates: the key stat/number, the champion card title, one word in the display title. Acceptable: a thin horizontal rule. Never: multiple cards, large background fills, decorative borders.

3. **No hard borders as section or card separators.** Use tonal layering: `--bg` → `--surface` → `--card` → `--card-lift`. The ghost accent border (via `box-shadow`) is acceptable on a single featured card. `border: 1px solid` is acceptable only on interactive input elements (form fields, range sliders) where visual affordance requires it.

4. **Semantic colors** (`--good`, `--warn`, `--bad`, `--hot`, etc.) may appear on multiple elements. Rule 2 applies only to #c8440a as an emphasis signal, not as a status indicator.

### Typography

5. **Never use Syne in infographic files.** IBM Plex Sans weight 700 is the display font for infographics.

6. **Font sizes in infographics: `px` only. Font sizes in tools: `rem` only.** Do not mix units.

7. **IBM Plex Mono is the default face in tools. IBM Plex Sans is the default in infographics.** The two contexts do not swap defaults.

### Animation

8. **No animations in infographic files — ever.** This includes `@keyframes`, `animation:`, `transition:` on content elements, and `opacity: 0` or `transform` initial states. All content must be fully visible at render time.

9. **Tools use `requestAnimationFrame` for canvas animation**, not CSS animation on content.

### Palette

10. **Warm Beige is the default.** Any deviation requires a deliberate reason. Pre-approved uses: Warm Dark for canvas-heavy animated tools with glowing elements. Cool Neutral and Ink require a conscious decision per file.

### Structure

11. **Infographic files:** `#canvas` has fixed `px` dimensions, all content inside, no CSS variables, no animations. Export buttons and body chrome are outside the canvas. `<body>` background is `--page-frame: #e2e0d9`.

12. **Tool files:** all palette tokens declared in `:root`. Canvas elements read variables for color assignments. Hardcoded hex is acceptable only for semantic data colors in specific data-story contexts.

---

## 10. Context notes

### Tools

- Layout: CSS Grid, full-viewport (`height: 100vh`). Nav bar: 34–36px. Title bar: 56–72px.
- Sidebar width (right): 272–290px.
- Scrolling in panels: `overflow-y: auto` with custom scrollbar using `--dim`.
- Title convention: `<title>Tool Name — antolinjm</title>`

### Infographics

- `<body>`: `min-height: 100vh`, flex column centered, `gap: 20–24px`, `padding: 48px 0`, `background: #e2e0d9`.
- Canvas dimensions: see `skills/infographic.md` for the format table (1080×1080, 1080×1350, 1200×628, 1080×1920).
- Export buttons: outside `#canvas`, in `.export-bar`. `IBM Plex Mono`, `12px`, `500`, `0.08em` tracking, uppercase, transparent background, `#c4c2bb` border, `6px` radius.
- `html2canvas` settings: `scale: 2`, `useCORS: true`, `allowTaint: true`, `backgroundColor: '#f5f4f0'`.

### Main site (`index.html` / `styles.css`)

The main site uses the **Editorial** palette (section 11). It has its own typography (Space Grotesk + Inter + IBM Plex Mono) and color system (blue accent #3066ff) distinct from both the tool palette (Warm Beige, section 2) and infographic palette. See section 11 for full specs.

---

## 11. Main Site — Editorial palette

This palette applies **only** to `index.html` and `styles.css`. Tools continue to use the Warm Beige palette (section 2). Infographics continue to use their respective palettes per `skills/infographic.md`. The Editorial palette must never bleed into `tools/` or `infographics/`.

**Personality:** editorial portfolio, curated gallery, premium print publication.

### Palette

Light mode only — no dark mode.

```css
/* Backgrounds & surfaces */
--bg:             #fafafa;   /* page canvas — near-white */
--surface:        #f3f3f1;   /* tonal lift — section backgrounds */
--surface-lower:  #eeeeed;   /* deeper tonal lift — footer, inset areas */
--card:           #ffffff;   /* white card on tonal background */

/* Text */
--ink:            #1b1b1b;   /* primary — near-black, not pure black */
--muted:          #636870;   /* secondary — labels, captions, descriptions */
--branding:       #b0b0b0;   /* footer / watermark — very faint */

/* Accent */
--accent:         #3066ff;   /* tech blue — links, CTAs, active states */
--accent-dark:    #004be1;   /* hover / gradient start */

/* Borders */
--border:         rgba(0, 0, 0, 0.06);   /* ghost border — barely visible */
--border-strong:  rgba(0, 0, 0, 0.12);   /* fallback ghost border on chips/inputs */
```

### Typography

| Role | Family | Context |
|---|---|---|
| Headings / display | Space Grotesk 500–700 | Hero headline, section titles, site title |
| Body / prose | Inter 400–500 | Descriptions, paragraphs, consulting copy |
| Labels / data | IBM Plex Mono 400–500 | Eyebrows, nav links, tags, period labels |

Google Fonts import:
```
family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500
```

### The No-Line Rule

Sections are separated by **background color shifts**, never `border-bottom: 1px solid`. Alternate between `--bg` and `--surface` to create a seamless, tonal scroll. Cards use white (`--card`) on tonal backgrounds to "float" via contrast alone, with optional ambient shadow.

The only acceptable `border` usage:
- Ghost borders on interactive chips/inputs via `border: 1px solid var(--border-strong)`
- Tab underline indicators (`border-bottom` on active tab only)

### Shadows

Blue-tinted ambient shadows. No hard drop shadows.

```
Standard card:     0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03)
Featured card:     0 2px 8px rgba(0, 75, 225, 0.06), 0 8px 24px rgba(0, 0, 0, 0.05)
Nav glassmorphism: 0 1px 2px rgba(0, 0, 0, 0.04)
```

### Glassmorphism nav

```css
position: sticky;
top: 0;
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
background: rgba(250, 250, 250, 0.85);
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
```

Solid background fallback for browsers without `backdrop-filter` support: `background: #fafafa`.

### Layout

- Max-width: `1200px`, centered with `margin: 0 auto`
- Section padding: `80px 0` vertical rhythm between major sections
- Hero padding: `72px 0` top/bottom
- Card internal padding: `28–36px`
- Horizontal page padding: `40px` (desktop), `20px` (mobile)

### Border-radius

| Element | Value |
|---|---|
| Cards (experience, consulting, tools) | `12px` |
| Chips / tags | `20px` (fully rounded pill) |
| Buttons (CTA) | `8px` |
| Modal | `12px` |
| Book grid items | `4px` |

### Status indicator

The green "available" dot uses #16a34a with a CSS pulse animation (`@keyframes`). This is an interactive site element, not infographic content — animations are acceptable here.
