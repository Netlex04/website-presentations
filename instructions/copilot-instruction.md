# Präsentationsgenerator – Instructions

## Ziel

Erstelle aus gelieferten Inhalten eine neue Präsentation auf Basis vorhandener Templates aus diesem Repository.

Die Präsentation soll:

- einen auswählbaren Stil verwenden,
- Inhalte entweder übernehmen oder zuerst sauber strukturieren,
- pro logischer Section genau **eine Slide** erzeugen,
- die vorhandene Template-Struktur konsistent wiederverwenden,
- am Ende als neue Präsentation im Ordner `dist/` ausgegeben werden.

---

## Repository-Struktur

Die Arbeitslogik basiert auf dieser Struktur:

```txt
/templates
  /<template-name>
    index.html
    styles.css
    script.js
    README.md (optional)
/instructions
  instruction.md
/dist
  /<presentation-name>-<style>
    index.html
    styles.css
    script.js
```

### Bedeutung

- `templates/`: Enthält fertige Präsentationsstile als vollständige HTML/CSS/JS-Templates.
- `templates/<template-name>/index.html`: Basisstruktur der Präsentation mit allen verfügbaren Slide-Typen.
- `templates/<template-name>/styles.css`: Styling, Variablen, Layout-System und responsive Regeln des Templates.
- `templates/<template-name>/script.js`: Navigation, Scroll-Verhalten und optionale Interaktionen.
- `templates/<template-name>/README.md`: optionale Dokumentation zu Slide-Typen, Platzhaltern und ersetzbaren Bereichen.
- `instructions/`: Enthält diese Arbeitsanweisung, z. B. für Copilot oder andere Agents.
- `dist/`: Hier wird die neu generierte Präsentation als eigener Ordner abgelegt.

---

## Template-Verständnis

Ein Template ist in diesem Repository **kein Baukasten aus separaten `slides/`- oder `components/`-Ordnern**, sondern ein vollständiges, lokal lauffähiges Präsentations-Template mit:

- `index.html` als strukturelle Basis,
- `styles.css` als visuelles System,
- `script.js` für Navigation und Interaktionen.

Die Wiederverwendung erfolgt über:

- vorhandene Slide-Typen in der HTML,
- klar benannte Klassen,
- Platzhaltertexte,
- `data-slide-type`-Attribute,
- ggf. dokumentierte ersetzbare Bereiche im Template.

---

## Ablauf

Bevor die Präsentation erzeugt wird, stelle **immer zuerst diese Fragen in genau dieser Reihenfolge**.

### 1. Stil auswählen

Frage zuerst:

> Welchen Stil möchtest du für die Präsentation?
>
> Verfügbare Templates:
>
> - `<template-1>`
> - `<template-2>`
> - `<template-3>`
>
> Du kannst:
>
> 1. ein bestehendes Template direkt auswählen,
> 2. ein bestehendes Template leicht anpassen,
> 3. einen neuen Stil auf Basis eines bestehenden Templates entwickeln.

Wenn der Nutzer einen neuen Stil möchte, frage direkt nach:

- gewünschter Tonalität (z. B. modern, clean, corporate, bold, minimal, futuristisch)
- bevorzugten Farben
- gewünschter Bildsprache
- Animationen: eher ruhig oder auffällig
- eher textlastig oder visuell

---

### 2. Status der Inhalte klären

Frage danach:

> Hast du bereits fertig formatierte Inhalte für die Präsentation,
> oder möchtest du Rohinhalte einfügen, die zuerst aufbereitet und strukturiert werden sollen?

Es gibt zwei Modi:

#### Modus A – Inhalte bereits formatiert

Wenn Inhalte bereits formatiert sind:

- übernimm die vorhandene Struktur,
- erkenne die Sections,
- mappe jede Section auf genau eine Slide,
- verbessere nur Formulierungen minimal, wenn es der Klarheit dient.

#### Modus B – Rohinhalte müssen zuerst formatiert werden

Wenn Rohinhalte eingefügt werden:

- bereinige und strukturiere die Inhalte zuerst,
- erkenne Themenblöcke,
- forme daraus sinnvolle Sections,
- reduziere unnötige Wiederholungen,
- verdichte lange Absätze in präsentationstaugliche Aussagen,
- mappe danach jede Section auf genau eine Slide.

---

## Zusätzliche sinnvolle Rückfragen

Zusätzlich zu Stil und Inhaltsstatus sollen – falls nicht bereits eindeutig – diese Punkte abgefragt werden:

### 3. Ziel der Präsentation

Frage:

> Was ist das Ziel der Präsentation?
>
> Beispiele:
>
> - informieren
> - pitchen / verkaufen
> - intern vorstellen
> - Schulung / Erklärung
> - Reporting / Statusupdate

Warum wichtig:
Der Zweck beeinflusst Dramaturgie, Textmenge, CTA, Visualisierung und Tonalität.

---

### 4. Zielgruppe

Frage:

> Für wen ist die Präsentation gedacht?
>
> Beispiele:
>
> - Kunden
> - Investoren
> - Geschäftsführung
> - internes Team
> - Studierende / Lernende

Warum wichtig:
Die Zielgruppe bestimmt Sprache, Detailtiefe und Argumentationslogik.

---

### 5. Umfang / gewünschte Slide-Anzahl

Frage:

> Gibt es eine gewünschte Anzahl an Slides oder einen groben Umfang?

Falls keine Zahl genannt wird:

- leite die Slide-Anzahl aus den Sections ab,
- halte die Präsentation eher kompakt,
- vermeide unnötige Trennfolien.

---

### 6. Sprache

Frage:

> In welcher Sprache soll die Präsentation erstellt werden?

Standard:

- Sprache der gelieferten Inhalte übernehmen, sofern nichts anderes gewünscht ist.

---

### 7. Bild- und Icon-Nutzung

Frage:

> Sollen Bilder, Illustrationen, Diagramme oder Icons aktiv eingesetzt werden?

Falls ja, kläre:

- eher stockartig / realistisch oder abstrakt / illustrativ,
- ob Platzhalter genügen,
- ob bestimmte Motive oder Markenbezüge enthalten sein sollen.

---

### 8. Branding / CI

Frage:

> Gibt es feste Branding-Vorgaben?
>
> Beispiele:
>
> - Logo
> - Farben
> - Schriftstil
> - Abstände / Look & Feel

Falls vorhanden:

- diese priorisieren,
- bestehende Templates entsprechend anpassen.

---

### 9. Sprechertext oder nur Slides

Frage:

> Soll die Ausgabe nur aus präsentationsfähigen Slides bestehen oder auch Speaker Notes / zusätzliche Erklärtexte enthalten?

---

## Regeln für die Generierung

### 1. Eine Section = eine Slide

Die wichtigste Regel:

- Jede logisch getrennte Section wird zu genau **einer Slide**.
- Keine Section ohne klaren Grund auf mehrere Slides aufteilen.
- Mehrere kleine, inhaltlich ähnliche Punkte dürfen zu einer gemeinsamen Section verdichtet werden.

---

### 2. Inhalte präsentationstauglich machen

Folgende Regeln gelten immer:

- keine überladenen Textblöcke,
- lieber klare Kernbotschaften,
- pro Slide eine Hauptaussage,
- unterstützende Unterpunkte nur, wenn sie wirklich Mehrwert bringen,
- starke Überschriften verwenden,
- Wiederholungen entfernen,
- Textmenge dem Stil und der Zielgruppe anpassen.

---

### 3. Vorhandene Template-Struktur wiederverwenden

- Nutze die vorhandene `index.html` des gewählten Templates als strukturelle Basis.
- Wiederverwende vorhandene Slide-Typen über ihre HTML-Struktur und `data-slide-type`-Attribute.
- Ersetze bevorzugt nur Inhalte, Labels, Titel, Listen, KPIs, Texte und Platzhalter.
- Passe `styles.css` nur dann an, wenn Branding, Farbwelt oder Stil gezielt verändert werden sollen.
- Passe `script.js` nur dann an, wenn neue Navigation, Interaktionen oder spezielle Verhaltensweisen nötig sind.
- Erfinde nur dann neue Slide-Typen oder Layouts, wenn der Inhalt mit den vorhandenen Strukturen nicht sinnvoll dargestellt werden kann.

---

### 4. Typische ersetzbare Bereiche im Template

Achte besonders auf diese typischen Klassen bzw. Inhaltsbereiche:

- `.slide-label`
- `.slide-title`
- `.slide-subtitle`
- `.slide-body`
- `.content-list`
- `.card-title`
- `.card-text`
- `.kpi-value`
- `.kpi-label`
- `.kpi-context`
- visuelle Platzhalter wie `.visual-placeholder`

Falls das Template eine eigene Dokumentation oder Kommentarblöcke enthält, nutze diese als primäre Orientierung.

---

### 5. Konsistenz sichern

Achte auf:

- konsistente Typografie,
- konsistente Abstände,
- konsistente Farbverwendung,
- konsistente Bildsprache,
- einheitliche Überschriftenlogik,
- wiederkehrende Layoutmuster für ähnliche Inhalte.

---

### 6. Visuelle Zuordnung der Inhalte

Wähle je nach Inhalt passende Darstellungsformen:

- Vergleich → Two-Column Slide
- Prozess → Process / Steps Slide
- Kennzahlen → KPI Slide
- Vorteile / Features → Cards Slide
- Problem / Lösung → Text oder Two-Column Slide
- Screenshot / Diagramm → Image / Visual Slide
- Abschluss → Closing / Summary Slide

---

### 7. Qualität vor Vollständigkeit

Falls Inhalte schlecht strukturiert, redundant oder zu lang sind:

- zuerst verdichten,
- dann visuell sinnvoll aufbauen,
- nicht alles 1:1 übernehmen, nur weil es geliefert wurde.

---

## Entscheidungslogik

### Wenn der Nutzer bereits ein Template auswählt

Dann:

1. Template in `templates/<template-name>/` laden
2. `index.html`, `styles.css` und `script.js` als Basis übernehmen
3. Inhalte analysieren
4. Sections erkennen
5. passende vorhandene Slide-Typen auswählen
6. Inhalte in die bestehenden Template-Bereiche einsetzen
7. neue Präsentation in `dist/` ausgeben

### Wenn der Nutzer einen neuen Stil möchte

Dann:

1. ein ähnliches bestehendes Template als Basis identifizieren
2. dessen HTML-Struktur übernehmen
3. Stilregeln für Farben, Tonalität und Visualität definieren
4. bei Bedarf `styles.css` anpassen
5. Inhalte auf vorhandene oder leicht erweiterte Slide-Typen mappen
6. Ergebnis in `dist/` ausgeben

### Wenn nur Rohtext geliefert wird

Dann:

1. Text säubern
2. Sections bilden
3. Reihenfolge logisch strukturieren
4. passenden Stil anwenden
5. geeignete Slide-Typen aus dem Template auswählen
6. Inhalte einsetzen
7. Ergebnis in `dist/` ausgeben

---

## Erwartete Ausgabe

Die Ausgabe soll:

- im Ordner `dist/` liegen,
- eindeutig benannt sein,
- die gewählte Stilrichtung erkennen lassen,
- alle finalen Inhalte enthalten,
- direkt lokal nutzbar oder leicht weiterbearbeitbar sein.

### Beispiel für Benennung

```txt
/dist/<presentation-name>-<style>/index.html
/dist/<presentation-name>-<style>/styles.css
/dist/<presentation-name>-<style>/script.js
```

---

## Sinnvolle Zusatzfunktionen

Falls möglich, ergänze diese Logik:

### A. Auto-Outline vor Generierung

Bevor die Präsentation final gebaut wird, erstelle intern eine Kurzstruktur:

- Titel
- erkannte Sections
- Zuordnung Section → Slide-Typ

### B. Inhaltsprüfung

Prüfe vor der Ausgabe:

- gibt es zu lange Slides?
- gibt es doppelte Aussagen?
- fehlt eine Einleitung oder ein Abschluss?
- passt die Sprache zur Zielgruppe?
- wurden Platzhalter vollständig ersetzt?

### C. Optionaler Cover- und End-Slide-Modus

Wenn sinnvoll, automatisch ergänzen:

- Titelslide
- Agenda-Slide
- Abschluss- / Thank-you-Slide

Aber nur dann, wenn diese zur Präsentationsart passen und nicht künstlich wirken.

### D. Asset-Fallbacks

Wenn keine Bilder vorhanden sind:

- nutze vorhandene visuelle Platzhalter,
- abstrahierte SVGs,
- einfache diagrammartige Flächen,
- textliche Bildhinweise.

---

## Verhalten bei Unklarheiten

Wenn Angaben fehlen, priorisiere diese Reihenfolge:

1. Stil
2. Inhaltsstatus
3. Ziel der Präsentation
4. Zielgruppe
5. Umfang
6. Branding

Treffe ansonsten sinnvolle Standardannahmen und dokumentiere sie kurz.

---

## Standardannahmen, wenn nichts angegeben wurde

Wenn Informationen fehlen, nutze diese Defaults:

- Stil: clean / modern
- Sprache: Sprache des Inputs
- Umfang: kompakt
- Visualisierung: moderat, nicht überladen
- Ziel: informativ mit klarer Storyline
- Basis: vorhandenes Template ohne strukturelle Änderungen

---

## Endziel

Am Ende soll aus vorhandenen oder rohen Inhalten automatisch eine stilistisch konsistente Präsentation entstehen, die ein vorhandenes HTML/CSS/JS-Template sinnvoll wiederverwendet, logisch strukturierte Sections in Slides übersetzt und das Ergebnis vollständig im Ordner `dist/` bereitstellt.
