# Bold Presentation Template

## Overview

This template is a **bold, high-contrast, reusable presentation system** built with pure HTML, CSS, and minimal JavaScript.

It is designed for workflows where:

- content is inserted later
- each logical section becomes exactly **one slide**
- slide layouts are reused across multiple presentations
- the final generated presentation is exported to `/dist/.../index.html`

Compared to the `clean` template, this one is more expressive:

- stronger typography
- darker surfaces
- vivid accent colors
- more visual energy
- more contrast between sections and components

It is well suited for:

- startup pitches
- agency decks
- product launches
- creative strategy presentations
- bold internal presentations
- visually stronger storytelling

---

## File Structure

```txt
/templates/bold/
  index.html
  styles.css
  script.js
  README.md
```

---

## Files

- **index.html** → Core presentation structure with all available slide types
- **styles.css** → Bold visual system, color variables, layout rules, responsive behavior
- **script.js** → Keyboard navigation, slide tracking, progress bar, navigation dots

---

## Core Concept

### 1. One Section = One Slide

Each slide is defined as:

```html
<section class="slide ..." data-slide-type="..."></section>
```

Rules:

- One logical section = one slide
- Do not split a section across multiple slides unless necessary
- Small related points can be grouped into a single slide
- Every slide should communicate one clear core message

---

### 2. Available Slide Types

| Type      | Purpose                                 |
| --------- | --------------------------------------- |
| `hero`    | Intro / title / opening statement       |
| `text`    | Focused text-based explanation          |
| `split`   | Two-column layout with content + visual |
| `cards`   | Feature grid or grouped highlights      |
| `process` | Steps / workflow / sequence             |
| `kpi`     | Metrics / key figures / results         |
| `visual`  | Full-bleed visual placeholder           |
| `closing` | Final summary / CTA / closing statement |

---

## How to Use

### Duplicate a Slide

1. Copy any `<section class="slide ...">` block
2. Paste it after an existing slide
3. Update the `data-slide-type` if needed
4. Replace placeholder content inside brackets

Example:

```html
<section class="slide slide-cards" data-slide-index="3"></section>
```

---

### Replace Content

Focus on these classes when inserting generated content.

#### Core Content

- `.slide-label` → small pill/tag label
- `.slide-title` → main heading
- `.slide-subtitle` → supporting text
- `.slide-body` → main content wrapper

#### Text / Lists

- `.lead-text` → strong intro paragraph
- `.feature-list` → highlighted bullet list
- `<p>` inside `.text-flow` or `.slide-body` → paragraph content

#### Cards

- `.card-title` → card heading
- `.card-text` → card description

#### Process

- `.step-title` → step heading
- `.step-text` → step description

#### KPIs

- `.kpi-value` → main number
- `.kpi-label` → metric name
- `.kpi-context` → optional metric context

#### Visuals

- `.visual-placeholder` → framed visual placeholder
- `.visual-fullscreen` → full-slide visual area
- `.overlay-content` → caption or explanation over visual

#### Closing

- `.action-placeholder` → CTA, contact, next step, or closing action block

---

## Placeholder System

All placeholder content is intentionally wrapped in brackets:

```txt
[Example Content]
```

Meaning:

- placeholder text should be replaced during presentation generation
- bracketed content is not meant to stay in the final output
- placeholders may be removed or fully overwritten

Examples:

- `[Presentation Title]`
- `[Key Metric]`
- `[Insert image or visual here]`
- `[Step name]`

---

## Design Characteristics

This template is intentionally more expressive than a minimal deck.

### Visual Style

- dark background
- bright accent colors
- oversized headings
- strong pills, dividers, and highlight areas
- energetic but still structured and reusable

### Visual Strengths

- high contrast
- clear hierarchy
- impactful KPI areas
- strong hero slides
- visually distinct sections

### Use this template when

Choose `bold` if the presentation should feel:

- more dynamic than `clean`
- more attention-grabbing
- more visual and energetic
- more pitch-like or launch-oriented

Use `clean` instead when the deck should feel:

- quieter
- more neutral
- more corporate-minimal
- more restrained

---

## Styling & Customization

### CSS Variables

The main design system is controlled in `:root`.

Examples:

```css
:root {
  --bg-primary: #0a0a0f;
  --accent-primary: #00f5d4;
  --accent-secondary: #ff006e;
  --text-primary: #ffffff;
}
```

You can quickly adapt:

- background colors
- accent palette
- spacing
- typography scale
- border radius
- shadows

### Recommended Customizations

For lightweight style changes, prefer editing:

- accent colors
- pill colors
- glow/shadow intensity
- spacing values
- display text scale

Avoid changing the overall structure unless a new slide type is required.

---

## Navigation & Interaction

Handled in `script.js`.

Included behavior:

- keyboard navigation
- scroll-based navigation
- progress bar
- navigation dots
- active slide tracking
- accessibility updates (`aria-current`, progress state)

Supported keys:

- `ArrowDown`, `ArrowRight`, `Space`, `PageDown` → next slide
- `ArrowUp`, `ArrowLeft`, `PageUp` → previous slide
- `Home` → first slide
- `End` → last slide

---

## Accessibility Notes

This template includes:

- semantic slide sections
- keyboard navigation
- visible focus styles
- screen-reader-only instruction text
- reduced motion handling for users who prefer less animation

When extending the template:

- preserve heading structure
- keep contrast strong
- ensure placeholder replacements remain readable
- do not hide critical information behind visual effects

---

## Best Practices

- Keep one strong message per slide
- Use short, high-impact headlines
- Prefer concise supporting text
- Use `split`, `cards`, and `kpi` slides for visual rhythm
- Do not overload the bold style with too much copy
- Keep CTA and closing areas simple and intentional
- Replace every bracketed placeholder before final export

---

## Usage in Generator Workflow

This template is designed for an automated presentation workflow:

1. Select template `bold`
2. Parse incoming content
3. Convert content into logical sections
4. Match each section to the best slide type
5. Replace placeholders in `index.html`
6. Keep or lightly adapt `styles.css`
7. Copy template files into:

```txt
/dist/<presentation-name>-bold/
```

Expected output:

```txt
/dist/<presentation-name>-bold/index.html
/dist/<presentation-name>-bold/styles.css
/dist/<presentation-name>-bold/script.js
```

---

## Suggested Content Mapping

Use these mappings as a default:

- Intro / title → `hero`
- Main explanation → `text`
- Comparison / explanation with visual → `split`
- Features / benefits → `cards`
- Workflow / sequence → `process`
- Metrics / results → `kpi`
- Screenshot / diagram / image → `visual`
- Final summary / CTA → `closing`

---

## Goal

Provide a reusable, visually strong foundation for generating high-impact presentations without external dependencies, frameworks, or commercial presentation tools.
