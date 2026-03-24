# Clean Presentation Template

## Overview

This template is a **clean, modern, reusable presentation system** built with pure HTML, CSS, and minimal JavaScript.

It is designed for workflows where:

- content is generated dynamically (e.g. via AI or scripts)
- each logical section becomes exactly **one slide**
- slides are composed using predefined layout patterns
- the final output is exported to `/dist/.../index.html`

---

## File Structure

/templates/clean/
index.html
styles.css
script.js
README.md

---

## Files

- **index.html** → Core structure with all available slide types
- **styles.css** → Design system (colors, spacing, layout, responsiveness)
- **script.js** → Navigation, scroll behavior, keyboard + touch controls

---

## Core Concept

### 1. One Section = One Slide

Each slide is defined as:

<section class="slide ..." data-slide-type="...">

Rules:

- One logical section = one slide
- Do not split a section across multiple slides unless necessary
- Combine small related points into one slide if possible

---

### 2. Slide Types

Available slide types:

- hero → Title / intro slide
- text → Text or bullet-based content
- two-column → Text + visual or comparison
- cards → Features / benefits grid
- process → Step-by-step / workflow
- kpi → Metrics / numbers
- image → Visual / diagram / screenshot
- closing → Summary / CTA

---

## How to Use

### Duplicate a Slide

1. Copy a <section class="slide ..."> block
2. Change the data-slide-type if needed
3. Replace content inside defined areas

Example:

<section class="slide slide-text" data-slide-type="text">

---

### Replace Content

Focus on these classes:

#### Core Content

- .slide-label → small label above title
- .slide-title → main heading
- .slide-subtitle → supporting text
- .slide-body → main content container

#### Lists & Text

- .content-list → bullet points
- <p> inside .slide-body → paragraphs

#### Cards

- .card-title → feature title
- .card-text → feature description

#### KPIs

- .kpi-value → number
- .kpi-label → label
- .kpi-context → additional context

#### Visuals

- .visual-placeholder → replace with image or diagram
- .image-caption → description of visual

---

## Placeholder System

All placeholder content is wrapped in brackets:

[Example Text]

Meaning:

- This content should be replaced during generation
- It is safe to remove or overwrite completely

---

## Styling & Customization

### CSS Variables

Edit styles globally via:

:root {
--color-accent: #3b82f6;
--color-bg: #ffffff;
--color-text: #212529;
}

You can quickly adapt:

- colors
- spacing
- typography
- layout density

---

## Navigation & Interaction

Handled in script.js:

- Scroll-based slide navigation
- Keyboard controls (Arrow keys, PageUp/Down, Home/End)
- Progress bar
- Navigation dots
- Touch/swipe support

---

## Best Practices

- Keep each slide focused on **one core message**
- Avoid long paragraphs
- Prefer bullet points or short statements
- Use the correct slide type for the content
- Keep visual consistency across slides

---

## Usage in Generator Workflow

This template is designed to be used by an automated system:

1. Select template (e.g. "clean")
2. Parse input content
3. Convert content into sections
4. Map each section to a slide type
5. Replace placeholder content in index.html
6. Copy files to:

/dist/<presentation-name>-clean/

---

## Goal

Provide a stable, reusable foundation for generating consistent, high-quality presentations without relying on external tools or frameworks.
