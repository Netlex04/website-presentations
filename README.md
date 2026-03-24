# Präsentationsmodus (HTML-Slides)

Eine einfache HTML-basierte Präsentation, die direkt aus dem Browser läuft. Ideal für Live-Demos oder Vorträge ohne zusätzliche Tools.

## 🚀 Schnell starten (empfohlen)

Die Präsentation muss über einen lokalen HTTP-Server laufen, damit der Chrome-`--app`-Modus funktioniert.

### 1) HTTP-Server starten

#### a) Live Server (VS Code)

1. Öffne den Ordner `presentation` in VS Code.
2. Installiere die Erweiterung **Live Server** (falls noch nicht installiert).
3. Rechtsklicke auf `index.html` → **"Open with Live Server"**.

> ✅ Vorteil: Automatisches Neuladen bei Änderungen.

#### b) Schneller Webserver (Python)

Falls du keinen Live-Server nutzen möchtest, kannst du einen minimalen HTTP-Server starten:

```bash
cd presentation
python3 -m http.server 5500
```

### 2) Chrome im App-Modus starten (optional)

Um die Präsentation _wie eine App_ anzuzeigen (ohne Tabs/Adressleiste), starte Chrome mit dem App-Parameter.

#### macOS

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --app=http://127.0.0.1:5500/index.html
```

#### Windows

```bash
chrome --app=http://127.0.0.1:5500/index.html
```

> ✔️ Wichtig: Ein lokaler HTTP-Server (Live Server oder Python) muss laufen, damit der Chrome App-Modus die Seite laden kann.

---

## 📝 Inhalt

- `index.html`: Präsentation (Scroll-Slider mit Keyboard-Navigation)
- `*.png`: Bilder für die Folien

Viel Erfolg bei der Präsentation! 🎉
