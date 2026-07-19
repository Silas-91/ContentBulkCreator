const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname);
const htmlPath = path.join(root, "index.html");
const cssPath = path.join(root, "styles.css");
const jsPath = path.join(root, "homepage.js");
const html = fs.readFileSync(htmlPath, "utf8");

const requiredFiles = [
  "assets/hero-app.png",
  "assets/workflow-empty.png",
  "assets/media-editor.png",
  "assets/music-editor.png",
  "assets/bulk-data.png",
  "assets/export-toolbar.png",
  "assets/row-nav.png",
  "assets/crop-preview.png",
  "assets/content-bulk-creator-logo.svg",
  "styles.css",
  "homepage.js",
  "package.json",
  "package-lock.json",
  ".github/workflows/ci.yml",
];

const requiredText = [
  "Content Bulk Creator",
  "Content in Serie",
  "Vorlage",
  "Bulk Daten",
  "Musik",
  "Editor-Bereiche",
  "Impressum",
  "data-modal-open=\"imprint-modal\"",
  "data-preview-src=\"./assets/crop-preview.png\"",
  "Max Mustermann &amp; Co.",
  "Buy Me a Coffee",
  "https://www.buymeacoffee.com/silassmithi",
  "href=\"#funktionen\"",
];

const failures = [];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    failures.push(`Fehlt: ${file}`);
  }
}

for (const text of requiredText) {
  if (!html.includes(text)) {
    failures.push(`Text oder Link fehlt: ${text}`);
  }
}

for (const staleText of ["fuer", "oeffnen", "Lautstaerke", "unterstuetzen"]) {
  if (html.includes(staleText)) {
    failures.push(`Alte Umlaut-Umschreibung gefunden: ${staleText}`);
  }
}

for (const privateAppReference of ["../index.html", "App starten", "Content Bulk Creator öffnen"]) {
  if (html.includes(privateAppReference)) {
    failures.push(`Verweis auf die nicht öffentliche Anwendung gefunden: ${privateAppReference}`);
  }
}

const localRefs = [...html.matchAll(/(?:src|href)="\.\/([^"#]+)"/g)].map((match) => match[1]);
for (const ref of localRefs) {
  if (!fs.existsSync(path.join(root, ref))) {
    failures.push(`Lokale Referenz zeigt ins Leere: ${ref}`);
  }
}

const referencedAssets = new Set(localRefs.filter((ref) => ref.startsWith("assets/")));
const assetFiles = fs.readdirSync(path.join(root, "assets")).map((file) => `assets/${file}`);
for (const asset of assetFiles) {
  if (!referencedAssets.has(asset)) {
    failures.push(`Ungenutzte Homepage-Datei gefunden: ${asset}`);
  }
}

if (html.includes("class=\"imprint-panel\"")) {
  failures.push("Das Impressum darf kein großer Seitenbereich mehr sein.");
}

if (!fs.existsSync(cssPath)) {
  failures.push("styles.css fehlt");
} else {
  const css = fs.readFileSync(cssPath, "utf8");
  for (const token of ["--purple", "--pink", ".hero", ".feature-grid", ".showcase-grid"]) {
    if (!css.includes(token)) {
      failures.push(`CSS-Merkmal fehlt: ${token}`);
    }
  }
}

if (!fs.existsSync(jsPath)) {
  failures.push("homepage.js fehlt");
} else {
  const js = fs.readFileSync(jsPath, "utf8");
  for (const token of [".preview-trigger", "data-modal-open", "Escape", "modal-open"]) {
    if (!js.includes(token)) {
      failures.push(`JS-Merkmal fehlt: ${token}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Homepage-Test fehlgeschlagen:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Homepage-Test bestanden.");
