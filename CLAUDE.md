# CLAUDE.md

## Project Overview

Personal portfolio and interactive tools site for José Manuel Antolín — a BI & Analytics professional. Static site hosted on GitHub Pages. No build step, no dependencies, no package manager.

## Architecture

- **Portfolio**: `index.html` + `styles.css` + `js/*.js` — editorial portfolio site using the Editorial design palette (see `DESIGN.md` section 11)
- **Tools**: Self-contained single HTML files in `tools/` — each is a standalone interactive visualization

## Tools Philosophy

The `tools/` directory contains interactive analytical tools that showcase what the user can do professionally. These are **not just calculators** — they should feel **live, visual, and interesting**. Each tool is a portfolio piece meant to be shared (e.g., on LinkedIn).

### Design Principles for Tools

1. **Each tool should have its own visual identity.** Don't reskin an existing tool. Different layout, different color treatment, different interaction model. They share a base aesthetic but should feel distinct from each other.

2. **Visualization first, calculation second.** The primary experience should be something moving, glowing, or reacting. If it also calculates useful numbers, great — but the visual is the hero. Think "interactive demo" not "form with results."

3. **Animations make it real.** Use `requestAnimationFrame`, canvas, CSS transitions. Dots flowing, bars growing, things pulsing. Static is boring. The user should feel like they're watching a live system.

4. **Screenshot-friendly.** The tool should look great as a single screenshot for social media. Key visuals should fit in the viewport without scrolling. Think about what the LinkedIn preview will look like.

5. **Self-contained.** Each tool is a single `.html` file with all CSS and JS inline. The only allowed external dependencies are Google Fonts and CDN libraries like Chart.js. No local file dependencies between tools.

### Shared Design Tokens

The canonical design token system lives in **[DESIGN.md](DESIGN.md)** — including the Warm Beige default palette, Warm Dark variant (for canvas-heavy tools), Cool Neutral and Ink variants, and all typography, spacing, shadow, and border-radius specs. The non-negotiable implementation rules are in `DESIGN.md` section 9.

Minimum token set for a new tool: `--bg`, `--surface`, `--card`, `--card-lift`, `--ink`, `--muted`, `--accent`, `--border`, `--border-deep`, `--dim`, `--branding`.

Fonts by context:
- **Main site** (`index.html`): `Space Grotesk` (headings), `Inter` (body), `IBM Plex Mono` (labels/eyebrows/nav). See `design.md` section 11.
- **Tools**: `IBM Plex Mono` (headers, labels, data). Some tools add `Syne` 700/800 for hero numbers in canvas-heavy animated contexts. See `design.md` section 4.


### Tool Title Convention

HTML `<title>`: `Tool Name — antolinjm`

### Existing Tools (reference)

- **LTV/CAC Calculator** — Two-column layout, input panel left, output cards + Chart.js charts right. Classic dashboard feel.
- **RFM Visualizer** — Canvas-based particle animation with sidebar controls. Dynamic clustering, spring physics. The most "alive" of the tools.
- **Process Flow Analyzer** — (In progress) Animated pipeline with flowing tokens, Gantt chart, thermal color encoding.

## Code Conventions

- Vanilla JS only. No frameworks, no transpilation.
- CSS custom properties for theming.
- Semantic HTML structure.
- Responsive design (tools should degrade gracefully on mobile, but desktop is the primary target).
- Keep files reasonably sized — don't over-abstract, but don't write 3000-line monsters either.

## Git & Deployment

- `main` branch deploys to GitHub Pages automatically.
- Commit messages should be concise and descriptive.
- No build step — what you see in the repo is what gets served.
