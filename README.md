# 🔄 Manga Extension Converter | محول إضافات المانجا

A lightweight web utility to convert manga extension repositories (`index.min.json`) between different formats (Mangayomi, Mihon, and Suwayomi).
أداة ويب خفيفة لتحويل مستودعات إضافات المانجا بين الصيغ المختلفة (Mangayomi، Mihon، و Suwayomi).

![App Preview](conversion_result_1769687844562.png)

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

   محول إضافات المانجا (Manga Extension Converter)
لقد تم الانتهاء من بناء التطبيق بالكامل بنجاح. إليك ملخص لما تم إنجازه:

🎯 الهدف
إنشاء أداة ويب بسيطة وفعالة لتحويل ملفات مستودعات الإضافات (index.min.json) لتتوافق مع تطبيقات المانجا المختلفة التي تستخدم صيغاً متقاربة
.

✨ المميزات الرئيسية

المنصات المدعومة:
Keiyoushi Standard: التوافق الكامل مع تطبيقات Mihon و Mangayomi.
Suwayomi: دعم تحويل خاص يضيف الحقول اللازمة (versionId, hasCloudflare) ليعمل الملف مع نسخة سطح المكتب.
تعدد اللغات (Localization):
دعم كامل لثلاث لغات: الإنجليزية (EN)، الفرنسية (FR)، و العربية (AR).
دعم تلقائي لاتجاه النصوص (RTL) عند التحويل للغة العربية.
واجهة المستخدم:
تصميم عصري (Modern UI) مع دعم الوضع الداكن.
إدخال البيانات عبر روابط URL (مع كسر حماية CORS) أو رفع ملفات محلية.
معاينة حية للنتائج وإحصائيات لعدد الإضافات والمصادر

🛠️ الملفات

index.html: الهيكل الأساسي.
styles.css: التنسيقات والتصميم.
app.js: منطق التحويل والترجمة.
README.md: ملف توثيق المشروع (تمت إضافته للتو).
