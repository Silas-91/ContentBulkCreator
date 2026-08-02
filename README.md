# Content Bulk Creator – Homepage

Diese statische Homepage stellt den Content Bulk Creator vor. Ihr einziges Ziel ist, den Arbeitsablauf und die wichtigsten Funktionen verständlich zu zeigen, ohne auf die noch nicht öffentlich verfügbare Anwendung zu verlinken.

## Aufbau der Seite

Die Inhalte beginnen mit einem Überblick und folgen danach dem tatsächlichen Produktionsablauf:

1. mit dem persönlichen Konto anmelden
2. Vorlage als Bild, Video oder GIF laden
3. Bulk-Daten per CSV oder manuellem Grid verbinden
4. Musik hochladen und zeitlich abstimmen
5. Bild-, Video- und Texteigenschaften bearbeiten
6. Ausgabeformat festlegen und Export prüfen
7. Anleitung, Einstellungen, Shortcuts und Kontaktmöglichkeiten nutzen

Die Seite besteht aus folgenden Bereichen:

- kompakter Einstieg mit Produktversprechen und Editor-Vorschau
- Überblick über Login und alle folgenden Arbeitsschritte
- ausführliche Kapitel für Vorlage, Bulk-Daten und Musik
- getrennte Eigenschaften für Bild, Video und dynamische Texte
- Exportbereich für Format, Reihen, Auflösung, Qualität und abschließende Prüfung
- Hilfe- und Infobereich mit Anleitung, Einstellungen, Shortcuts sowie Kontakt & Feedback
- Beispiele für geeignete Content-Formate
- Einordnung als privat entwickeltes Hobbyprojekt und freiwillige Unterstützung über Buy Me a Coffee
- Impressum als Dialog

## Gestaltungsrichtung

Die Gestaltung verbindet die klare Ordnung der aktuellen Version mit der weicheren visuellen Tiefe der vorherigen Homepage.

- dunkle Arbeitsfläche in Anlehnung an die Anwendung
- Violett und Pink als Markenfarben, Cyan als funktionaler Akzent
- gut lesbare Systemschriften ohne externe Schrift-Abhängigkeit
- kompakte Screenshots statt großflächiger Produktbilder
- dezente Verläufe und Schatten zur Trennung der Bereiche
- eine verlinkte Produktführung als charakteristisches Element des Bulk-Workflows
- zurückhaltende Animationen, die bei reduzierter Bewegung deaktiviert werden

Die wichtigsten Designwerte sind als CSS-Variablen am Anfang von `styles.css` definiert.

Die Schrittmarken „01 / Vorlage“, „02 / Bulk-Daten“ und „03 / Musik“ sind deutlich hervorgehoben. Detailbilder in Eigenschaften, Export und Hilfe bleiben kompakt und können für eine größere Ansicht angeklickt werden.

## Dateien

```text
homepage/
├── .github/workflows/ci.yml  # Prüfung im öffentlichen Repository
├── assets/                   # Logo und verwendete Produkt-Screenshots
├── homepage.js               # Bildvorschau und Dialoge
├── index.html                # Inhalte und semantischer Seitenaufbau
├── robots.txt                # Suchmaschinenfreigabe und Sitemap-Verweis
├── sitemap.xml               # öffentliche Homepage-URL
├── styles.css                # Gestaltung und responsive Breakpoints
├── test-homepage.js          # Prüfung von Dateien, Links und Inhalten
├── package.json              # lokale und automatische Tests
└── package-lock.json         # festgeschriebene Abhängigkeiten
```

## Produktbilder

Es werden ausschließlich Bilder aus `homepage/assets/` verwendet:

- `editor-overview.png`: ausgefüllter Editor im Hero
- `login.png`: Anmeldung mit E-Mail-Adresse und Passwort
- `template-upload.png`: Upload einer Bild-, Video- oder GIF-Vorlage
- `template-history.png`: geladene Vorlage und Medienverlauf
- `bulk-upload.png`: CSV-Import
- `bulk-grid.png`: manuelle Datenpflege und verfügbare Datenfelder
- `music-upload.png`: Upload unterstützter Musikformate
- `music-controls.png`: Wiedergabe, Lautstärke, Track-Ausschnitt und Timeline
- `image-properties.png`: Transformation, Zuschnitt und Farbkorrektur
- `text-properties.png`: Bereich „Text bearbeiten“ mit Datenfeldverknüpfung, Schrift, Formatierung und Textdarstellung
- `video-controls.png`: Transformation, Wiedergabe, Ton, Loop und Lautstärke
- `video-properties.png`: Clip-Trimmen, Video-Zuschnitt, Farblook und Weichzeichnen
- `export-format.png`: Auswahl des Seitenverhältnisses
- `export-resolution.png`: Auswahl der Videoauflösung
- `export-review.png`: abschließende Zusammenfassung vor dem Export
- `help-menu.png`: zentraler Einstieg in Hilfe, Informationen, Kontakt und Einstellungen
- `help-guide.png`: thematisch gegliederte Schritt-für-Schritt-Anleitung
- `settings.png`: Sprache, Darstellung und persönliche Text-Standards
- `content-bulk-creator-logo.svg`: Logo und Favicon

Ein Klick auf einen Screenshot öffnet eine größere Vorschau. Die Vorschau lässt sich über die Schließen-Schaltfläche, einen Klick auf den Hintergrund oder mit `Escape` schließen.

Neue Dateien im Asset-Ordner müssen in der Homepage verwendet werden. Der Test meldet ungenutzte oder fehlende Bilder.

## Suchmaschinenoptimierung

Die Homepage enthält eine technische SEO-Grundlage:

- präziser Seitentitel und Beschreibung für Suchergebnisse
- Canonical-URL der öffentlichen GitHub-Pages-Seite
- Open-Graph- und Twitter-Metadaten für geteilte Links
- strukturierte Daten für Website und Webanwendung
- `robots.txt` und `sitemap.xml` für die Indexierung
- semantische Überschriften, verständliche Linktexte und beschreibende Alternativtexte

Die öffentliche Basis-URL lautet `https://silas-91.github.io/ContentBulkCreator/`. Bei einem späteren Wechsel auf eine eigene Domain müssen Canonical-URL, Social-Media-Metadaten, strukturierte Daten, Sitemap und Robots-Verweis gemeinsam angepasst werden.

## Responsive Verhalten

Die Seite ist für Desktop, Tablet und Smartphone ausgelegt.

- Desktop: zweispaltiger Hero, kompakter Ablauf und abwechselnde Detailkapitel
- Tablet: einspaltiger Hero, verkürzte Bildflächen und flexible Eigenschaften
- Smartphone: lineare Inhaltsfolge mit paarweise angeordneten Detailbildern

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
- Canonical-URL, strukturierte Daten, Sitemap und Robots-Verweis

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
