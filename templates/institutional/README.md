# Institutional Presentation Template

## Overview

This template is a **formal, structured, reusable presentation system** built with pure HTML, CSS, and minimal JavaScript.

It is designed for workflows where:
- content is inserted later
- each logical section becomes exactly **one slide**
- the tone should feel trustworthy, academic, institutional, or policy-oriented
- the final generated presentation is exported to `/dist/.../index.html`

Compared to `clean` and `bold`, this template is:
- more formal than `bold`
- more visual than plain academic slides
- more structured and authoritative than `clean`
- especially suitable for educational, public-sector, economic, finance, governance, and analytical presentations

---

## File Structure

```txt
/templates/institutional/
  index.html
  styles.css
  script.js
  README.md
```

---

## Files

- **index.html** → Core presentation structure with all available slide types
- **styles.css** → Institutional design system, layout rules, cards, flow diagrams, and summary styling
- **script.js** → Keyboard navigation, slide tracking, progress bar, navigation dots, restart action

---

## Core Concept

### 1. One Section = One Slide

Each slide is defined as:

```html
<section class="slide ..." data-slide-type="...">
```

Rules:
- One logical section = one slide
- Do not split a section across multiple slides unless necessary
- Use a clear headline and one main message per slide
- Prefer concise explanatory text supported by cards, chains, or process elements

---

### 2. Available Slide Types

| Type | Purpose |
|---|---|
| `hero` | Title / intro / framing slide |
| `definition` | Core definition or overview with supporting cards |
| `split` | Main concept with explanation and side emphasis cards |
| `highlight` | Two-panel concept or long-term / targeted distinction |
| `flow` | Process, transmission chain, or cause-effect model |
| `summary` | Closing slide with takeaways and final thesis |

---

## How to Use

### Duplicate a Slide

1. Copy any `<section class="slide ...">` block
2. Paste it after an existing slide
3. Update the `data-slide-type`
4. Replace all placeholder content inside brackets

Example:

```html
<section class="slide slide-flow" data-slide-type="flow" data-slide-index="4">
```

---

### Replace Content

Focus on these classes during generation.

#### Core Content
- `.slide-label`
- `.slide-title`
- `.slide-subtitle`
- `.quote-text`

#### Cards
- `.card-title`
- `.card-text`

#### Statistics / Highlights
- `.stat-value`
- `.stat-label`

#### Steps / Processes
- `.step-title`
- `.step-text`

#### Summary
- `.summary-card`
- `.closing-quote`
- `.restart-button`

---

## Placeholder System

All placeholder content is wrapped in brackets:

```txt
[Example Content]
```

Meaning:
- placeholder text should be replaced during generation
- bracketed content should not remain in the final presentation
- placeholders may be fully overwritten or removed

---

## Design Characteristics

This template emphasizes:
- institutional credibility
- calm hierarchy
- structured cards and diagrams
- restrained but polished visuals
- blue-based formal palette
- high readability

### Best use cases
- economics or finance presentations
- educational presentations
- policy or governance topics
- research summaries
- formal internal briefings
- consulting or analytical explanations

---

## Styling & Customization

### CSS Variables

The design system is controlled from `:root`.

Examples:

```css
:root {
  --color-primary: #1d4f91;
  --color-accent: #2f6fe4;
  --color-bg: #f6f8fb;
  --color-text: #16314f;
}
```

You can easily adapt:
- primary and accent colors
- spacing
- typography scale
- border radius
- shadows

### Recommended customizations
For a quick variant, change:
- blue palette → another institutional palette
- summary gradient colors
- card shadow intensity
- background softness

Avoid changing the overall structure unless you need a genuinely new slide type.

---

## Navigation & Interaction

Handled in `script.js`.

Included behavior:
- scroll-based slide navigation
- keyboard navigation
- progress bar
- navigation dots
- slide state tracking
- restart button on summary slide
- touch support

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
- visible focus styling
- reduced motion support
- strong contrast and readable typography

When extending the template:
- keep heading hierarchy intact
- preserve line length readability
- ensure cards remain concise
- avoid overloading slides with dense text

---

## Suggested Content Mapping

Use these mappings as a default:

- Title / framing → `hero`
- Definition / explanation → `definition`
- Main instrument / distinction → `split`
- General vs targeted concept → `highlight`
- Process / transmission / workflow → `flow`
- Key takeaways / recap → `summary`

---

## Usage in Generator Workflow

This template is designed for an automated presentation workflow:

1. Select template `institutional`
2. Parse incoming content
3. Convert content into logical sections
4. Match each section to the best slide type
5. Replace placeholders in `index.html`
6. Keep or lightly adapt `styles.css`
7. Copy files into:

```txt
/dist/<presentation-name>-institutional/
```

Expected output:

```txt
/dist/<presentation-name>-institutional/index.html
/dist/<presentation-name>-institutional/styles.css
/dist/<presentation-name>-institutional/script.js
```

---

## Goal

Provide a reusable, formal presentation foundation for generating trustworthy, structured, high-clarity presentations without external frameworks or dependencies.
