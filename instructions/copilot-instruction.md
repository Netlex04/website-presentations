# Präsentationsgenerator – Instructions

## Ziel

Erstelle aus gelieferten Inhalten eine neue Präsentation auf Basis vorhandener Templates und Komponenten aus diesem Repository.

Die Präsentation soll:

- einen auswählbaren Stil verwenden,
- Inhalte entweder übernehmen oder zuerst sauber strukturieren,
- pro logischer Section genau **eine Slide** erzeugen,
- wiederverwendbare Komponenten aus dem Repository nutzen,
- am Ende als neue Präsentation im Ordner `dist/` ausgegeben werden.

---

## Repository-Struktur

Die Arbeitslogik basiert auf dieser Struktur:

```txt
/templates
  /<template-name>
    /slides
    /components
    /assets
/instructions
  instruction.md
/dist
```

### Bedeutung

- `templates/`: Enthält fertige Präsentationsstile, Folienlayouts, Bausteine und Assets.
- `instructions/`: Enthält diese Arbeitsanweisung, z. B. für Copilot oder andere Agents.
- `dist/`: Hier wird die neu generierte Präsentation abgelegt.

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
> 2. ein bestehendes Template leicht abwandeln,
> 3. einen neuen Stil auf Basis vorhandener Components erstellen.

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

### 3. Templates und Components wiederverwenden

- Nutze bevorzugt vorhandene Components aus `templates/<template-name>/components`.
- Nutze vorhandene Slide-Strukturen aus `templates/<template-name>/slides`.
- Erfinde nur dann neue Layouts, wenn der Inhalt mit vorhandenen Komponenten nicht sinnvoll dargestellt werden kann.
- Wenn ein neuer Stil aus Bestehendem gebaut wird, kombiniere vorhandene Komponenten konsistent.

---

### 4. Konsistenz sichern

Achte auf:

- konsistente Typografie,
- konsistente Abstände,
- konsistente Farbverwendung,
- konsistente Bildsprache,
- einheitliche Überschriftenlogik,
- wiederkehrende Komponenten für ähnliche Inhalte.

---

### 5. Visuelle Zuordnung der Inhalte

Wähle je nach Inhalt passende Darstellungsformen:

- Vergleich → Zwei-Spalten-Layout
- Prozess → Timeline / Step-Layout
- Kennzahlen → KPI-Grid
- Vorteile / Features → Card-Layout
- Problem / Lösung → Split-Layout
- Abschluss → CTA- oder Summary-Slide

---

### 6. Qualität vor Vollständigkeit

Falls Inhalte schlecht strukturiert, redundant oder zu lang sind:

- zuerst verdichten,
- dann visuell sinnvoll aufbauen,
- nicht alles 1:1 übernehmen, nur weil es geliefert wurde.

---

## Entscheidungslogik

### Wenn der Nutzer bereits ein Template auswählt

Dann:

1. Template laden
2. Inhalte analysieren
3. Sections erkennen
4. Slides erzeugen
5. neue Präsentation in `dist/` ausgeben

### Wenn der Nutzer einen neuen Stil möchte

Dann:

1. ähnliche Templates identifizieren
2. deren Components wiederverwenden
3. Stilregeln für den neuen Mix definieren
4. darauf basierend Slides erzeugen
5. Ergebnis in `dist/` ausgeben

### Wenn nur Rohtext geliefert wird

Dann:

1. Text säubern
2. Sections bilden
3. Reihenfolge logisch strukturieren
4. Stil anwenden
5. Slides generieren
6. Ergebnis in `dist/` ausgeben

---

## Erwartete Ausgabe

Die Ausgabe soll:

- im Ordner `dist/` liegen,
- eindeutig benannt sein,
- die gewählte Stilrichtung erkennen lassen,
- alle finalen Inhalte enthalten,
- direkt nutzbar oder leicht weiterbearbeitbar sein.

### Beispiel für Benennung

````txt
/dist/<presentation-name>-<style>/index.html
```txt
````

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

### C. Optionaler Cover- und End-Slide-Modus

Wenn sinnvoll, automatisch ergänzen:

- Titelslide
- Agenda-Slide
- Abschluss- / Thank-you-Slide

Aber nur dann, wenn diese zur Präsentationsart passen und nicht künstlich wirken.

### D. Asset-Fallbacks

Wenn keine Bilder vorhanden sind:

- nutze Icons,
- abstrakte Shapes,
- Platzhalter,
- diagrammartige Komponenten.

---

## Verhalten bei Unklarheiten

Wenn Angaben fehlen, priorisiere diese Reihenfolge:

1. Stil
2. Inhaltsstatus
3. Ziel der Präsentation
4. Zielgruppe
5. Umfang
6. Branding
7. Ausgabeformat

Treffe ansonsten sinnvolle Standardannahmen und dokumentiere sie kurz.

---

## Standardannahmen, wenn nichts angegeben wurde

Wenn Informationen fehlen, nutze diese Defaults:

- Stil: clean / modern
- Sprache: Sprache des Inputs
- Umfang: kompakt
- Visualisierung: moderat, nicht überladen
- Ziel: informativ mit klarer Storyline

---

## Endziel

Am Ende soll aus vorhandenen oder rohen Inhalten automatisch eine stilistisch konsistente Präsentation entstehen, die vorhandene Templates und Components nutzt, logisch strukturierte Sections in Slides übersetzt und das Ergebnis im Ordner `dist/` bereitstellt.
