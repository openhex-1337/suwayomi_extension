
![Manga Extension Converter](https://raw.githubusercontent.com/openhex-1337/suwayomi_extension/refs/heads/main/Manga%20Extension%20Converter.png)
# 🔄 Manga Extension Converter | محول إضافات المانجا

A lightweight web utility to convert manga extension repositories (`index.min.json`) between different formats (Mangayomi, Mihon, and Suwayomi).
أداة ويب خفيفة لتحويل مستودعات إضافات المانجا بين الصيغ المختلفة (Mangayomi، Mihon، و Suwayomi).


## ✨ Features | المميزات

- **Multi-Format Support:** Convert between Keiyoushi standard (Mihon/Mangayomi) and Suwayomi.
  - *Suwayomi Support:* Automatically adds required fields (`versionId`, `hasCloudflare`).
- **Multi-Language:** Fully localized interface in English 🇺🇸, French 🇫🇷, and Arabic 🇸🇦.
- **RTL Support:** Automatic Right-to-Left layout adjustment for Arabic.
- **Flexible Input:**
  - Paste URL (with CORS proxy support).
  - Upload local `.json` files.
- **Smart Output:**
  - Live JSON preview.
  - One-click Copy/Download.
  - Extension & Source counters.

## 🛠️ Tech Stack | التقنيات المستخدمة

- **HTML5:** Semantic structure.
- **CSS3:** Modern implementation with CSS Variables, Flexbox/Grid, and Animations.
- **JavaScript (ES6+):** Logic for fetching, parsing, and converting JSON data client-side.
- **No Frameworks:** Pure Vanilla JS for maximum performance and simplicity.

## 🚀 How to Use | طريقة الاستخدام

1. Open `index.html` in any modern web browser.
2. **Input Source:** Paste a repository URL or upload a file.
3. **Select Formats:** Choose your source (or auto-detect) and target format.
4. **Convert:** Click the convert button.
5. **Languages:** Use the top-left switcher to change languages (EN/FR/AR).

## 📂 Project Structure | هيكل المشروع

- `index.html`: Main user interface.
- `styles.css`: Styling and themes.
- `app.js`: Application logic and translations.

