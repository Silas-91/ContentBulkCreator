# Content Bulk Creator – Homepage

Diese statische Homepage stellt den Content Bulk Creator vor. Ihr einziges Ziel ist, den Arbeitsablauf und die wichtigsten Funktionen verständlich zu zeigen, ohne auf die noch nicht öffentlich verfügbare Anwendung zu verlinken.

## Aufbau der Seite

Die Inhalte folgen dem tatsächlichen Produktionsablauf:

1. Vorlage als Bild, Video oder GIF laden
2. Bulk-Daten per CSV oder manuellem Grid verbinden
3. Bild, Text und Musik bearbeiten
4. gewünschte Reihen, Auflösung und Qualität exportieren

Die Seite besteht aus folgenden Bereichen:

- kompakter Einstieg mit Produktversprechen und Editor-Vorschau
- Produktionsstrecke mit vier nachvollziehbaren Schritten
- Funktionskarten für Bulk-Daten, Bildbearbeitung und Musik
- Exportbereich für Reihen, Auflösungen und Qualitätsstufen
- Beispiele für geeignete Content-Formate
- freiwillige Unterstützung über Buy Me a Coffee
- Impressum als Dialog

## Gestaltungsrichtung

Die Gestaltung verbindet die klare Ordnung der aktuellen Version mit der weicheren visuellen Tiefe der vorherigen Homepage.

- dunkle Arbeitsfläche in Anlehnung an die Anwendung
- Violett und Pink als Markenfarben, Cyan als funktionaler Akzent
- gut lesbare Systemschriften ohne externe Schrift-Abhängigkeit
- kompakte Screenshots statt großflächiger Produktbilder
- dezente Verläufe und Schatten zur Trennung der Bereiche
- eine Produktionsspur als charakteristisches Element des Bulk-Workflows
- zurückhaltende Animationen, die bei reduzierter Bewegung deaktiviert werden

Die wichtigsten Designwerte sind als CSS-Variablen am Anfang von `styles.css` definiert.

## Dateien

```text
homepage/
├── .github/workflows/ci.yml  # Prüfung im öffentlichen Repository
├── assets/                   # Logo und verwendete Produkt-Screenshots
├── homepage.js               # Bildvorschau und Dialoge
├── index.html                # Inhalte und semantischer Seitenaufbau
├── styles.css                # Gestaltung und responsive Breakpoints
├── test-homepage.js          # Prüfung von Dateien, Links und Inhalten
├── package.json              # lokale und automatische Tests
└── package-lock.json         # festgeschriebene Abhängigkeiten
```

## Produktbilder

Es werden ausschließlich Bilder aus `homepage/assets/` verwendet:

- `editor-overview.png`: ausgefüllter Editor im Hero
- `editor-start.png`: leerer Startzustand und Upload
- `import-bulk-data.png`: Vorlage und CSV-Import
- `image-editing.png`: Zuschnitt, Transformation und Farbkorrektur
- `music-editing.png`: Wiedergabe, Lautstärke und Track-Ausschnitt
- `export-resolution.png`: Auswahl der Videoauflösung
- `export-quality.png`: Auswahl der Exportqualität
- `content-bulk-creator-logo.svg`: Logo und Favicon

Ein Klick auf einen Screenshot öffnet eine größere Vorschau. Die Vorschau lässt sich über die Schließen-Schaltfläche, einen Klick auf den Hintergrund oder mit `Escape` schließen.

Neue Dateien im Asset-Ordner müssen in der Homepage verwendet werden. Der Test meldet ungenutzte oder fehlende Bilder.

## Responsive Verhalten

Die Seite ist für Desktop, Tablet und Smartphone ausgelegt.

- Desktop: zweispaltiger Hero, horizontale Produktionsspur und dreispaltige Funktionsübersicht
- Tablet: einspaltiger Hero und zweispaltige Funktionskarten
- Smartphone: lineare Inhaltsfolge, zweispaltige Prozessschritte und einspaltige Karten

Die Navigation wird auf kleinen Bildschirmen reduziert. Alle Bedienelemente besitzen sichtbare Tastaturfokusse. Für `prefers-reduced-motion` werden Übergänge abgeschaltet.

## Lokal ansehen

Im Projektverzeichnis kann ein einfacher lokaler Webserver gestartet werden:

```bash
python3 -m http.server 4173 --directory homepage
```

Die Homepage ist danach unter `http://localhost:4173/` erreichbar.

## Prüfungen

Abhängigkeiten einmalig installieren:

```bash
cd homepage
npm ci
```

Alle Prüfungen starten:

```bash
npm test
```

Dabei werden geprüft:

- notwendige Homepage-Dateien und Texte
- lokale Bild-, CSS- und JavaScript-Referenzen
- ungenutzte Assets
- unerwünschte Verweise auf die private Anwendung
- JavaScript-Syntax
- gültige HTML-Struktur und Barrierefreiheitsregeln

## Veröffentlichung und Synchronisation

Die Homepage wird im privaten Repository unter `homepage/` gepflegt. Der Workflow `.github/workflows/sync-homepage.yml` reagiert auf Änderungen innerhalb dieses Ordners und überträgt nur dessen Inhalt in das öffentliche Repository:

```text
Silas-91/BulkCreator (privat)
└── homepage/**
        ↓ bei Änderungen auf main
Silas-91/ContentBulkCreator (öffentlich)
        ↓
GitHub Pages
```

Andere Dateien aus dem privaten Repository werden nicht übertragen. Für den Zugriff auf das öffentliche Repository verwendet der Workflow das Repository-Secret `HOMEPAGE_SYNC_TOKEN`. Der geheime Wert darf niemals in Dateien oder Commits eingetragen werden.

Vor der Synchronisation führt der Workflow die Homepage-Tests aus. Nur eine erfolgreiche Version wird übertragen.

## Pflegehinweise

- Texte aus Sicht der Nutzer formulieren und konkrete Funktionen benennen.
- Neue Abschnitte nur ergänzen, wenn sie die Funktionsweise verständlicher machen.
- Screenshots möglichst ohne persönliche Daten oder nicht öffentliche Informationen erstellen.
- Bilder für die Website zuschneiden und komprimieren.
- Keine direkte Verknüpfung zur Anwendung ergänzen, solange diese nicht öffentlich erreichbar ist.
- Nach jeder Änderung `npm test` ausführen und Desktop sowie Smartphone visuell prüfen.

## Noch zu vervollständigen

Das derzeitige Impressum enthält Platzhalterdaten. Vor einer endgültigen öffentlichen Nutzung müssen diese durch die korrekten Pflichtangaben ersetzt werden.
