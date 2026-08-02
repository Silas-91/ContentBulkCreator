const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname);
const htmlPath = path.join(root, "index.html");
const cssPath = path.join(root, "styles.css");
const jsPath = path.join(root, "homepage.js");
const html = fs.readFileSync(htmlPath, "utf8");

const requiredFiles = [
  "assets/editor-overview.png",
  "assets/login.png",
  "assets/template-upload.png",
  "assets/template-history.png",
  "assets/bulk-upload.png",
  "assets/bulk-grid.png",
  "assets/music-upload.png",
  "assets/music-controls.png",
  "assets/image-properties.png",
  "assets/text-properties.png",
  "assets/export-format.png",
  "assets/export-resolution.png",
  "assets/export-review.png",
  "assets/content-bulk-creator-logo.svg",
  "styles.css",
  "homepage.js",
  "package.json",
  "package-lock.json",
  "README.md",
  ".github/workflows/ci.yml",
];

const requiredText = [
  "Content Bulk Creator",
  "Content in Serie",
  "Vorlage",
  "Bulk-Daten",
  "Musik",
  "Ein Login. Ein klarer Produktionsweg.",
  "Der Workflow im Detail",
  "Eigenschaften",
  "Export prüfen",
  "Impressum",
  "data-modal-open=\"imprint-modal\"",
  "data-preview-src=\"./assets/editor-overview.png\"",
  "Max Mustermann &amp; Co.",
  "Projekt unterstützen",
  "https://www.buymeacoffee.com/silassmithi",
  "href=\"#workflow\"",
  "href=\"#ueberblick\"",
  "href=\"#eigenschaften\"",
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
  for (const token of ["--violet", "--magenta", ".hero", ".journey", ".process-chapter", ".property-grid", ".export-section"]) {
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
