# 🥗 TuttiFoodi – Zufälliger Rezept-Picker / Random Recipe Picker

![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License Badge](https://img.shields.io/badge/License-MIT-green)
![Status Badge](https://img.shields.io/badge/Status-Active-success)

Ein leichtgewichtiges, charmantes **Web-Tool**, das hilft, schneller zu entscheiden, **was du heute essen willst**.  
Mit einem Klick öffnet sich **eine zufällige Seite** aus einer Rezeptsammlung (PDF) – perfekt, wenn du zu viele Lieblingsgerichte hast und dich nicht entscheiden kannst.

---

## 🧭 Inhaltsverzeichnis / Table of Contents
- [✨ Features](#-features)
- [🧩 Funktionsweise / How It Works](#-funktionsweise--how-it-works)
- [🧰 Eigene Sammlung verwenden / Customize](#-eigene-sammlung-verwenden--customize)
- [🖼️ Vorschau / Preview](#-vorschau--preview)
- [💡 Idee / Idea](#-idee--idea)
- [📜 Lizenz / License](#-lizenz--license)

---

## ✨ Features

🇩🇪 **Deutsch**
- 🔀 Wählt zufällig ein Rezept aus einer mehrseitigen PDF-Datei  
- 🌐 Öffnet das Rezept direkt im Browser oder in einem neuen Tab  
- ⚙️ Einfach anpassbar für eigene Rezeptsammlungen  
- 🧩 Kein Server nötig – läuft komplett **lokal im Browser**

🇬🇧 **English**
- 🔀 Randomly selects a recipe from a multi-page PDF  
- 🌐 Opens the recipe directly in your browser or a new tab  
- ⚙️ Easily customizable for your own recipe collection  
- 🧩 No server required – runs fully **offline in your browser**

---

## 🧩 Funktionsweise / How It Works

🇩🇪 Das Tool nutzt den eingebauten PDF-Viewer des Browsers.  
🇬🇧 The tool uses your browser’s built-in PDF viewer.

Die Logik ist in wenigen Zeilen JavaScript umgesetzt:

```js
const pdfBase = "tex/TuttiFoodi/main.pdf#page=";
```
```js
const pageCount = 123; // total pages;


---

## ⚡ Schnellstart / Quick Start

1) **Repo klonen / Clone** oder Dateien herunterladen.  
2) Öffne **`index.html`** direkt im Browser.  
3) Klicke auf **“Random Recipe”**.

> **Hinweis / Note:** Bei lokalen `file://` Pfaden funktioniert die PDF-Anzeige in modernen Browsern i. d. R. ohne Server. Falls dein Browser blockt: starte kurz einen simplen Server (z. B. `python -m http.server 8000`) und öffne `http://localhost:8000`.

---
