// Translations
const translations = {
    en: {
        app_title: "Manga Extension Converter",
        app_subtitle: "Convert between Mangayomi • Mihon • Suwayomi",
        source_data: "📥 Data Source",
        url_tab: "URL Link",
        file_tab: "Upload File",
        enter_url: "Enter index.min.json URL",
        quick_links: "Quick Links:",
        drag_drop: "Drag file here or click to select",
        conversion_options: "⚙️ Conversion Options",
        source_format: "Source Format",
        auto_detect: "Auto Detect",
        target_format: "Target Format",
        convert_now: "Convert Now",
        converting: "Converting...",
        result: "📤 Result",
        extension: "Extension",
        source: "Source",
        download_json: "Download JSON",
        copy: "Copy",
        preview: "Preview",
        preview_hide: "Hide",
        footer_text: "Made with ❤️ for Manga lovers",
        error_invalid_json: "Invalid JSON file",
        error_no_input: "Please enter a URL or upload a file",
        error_fetch_fail: "Failed to fetch data",
        error_fetch_direct_fail: "Failed to fetch data. Check URL or use file upload.",
        copy_success: "Copied!",
        file_selected: "✓"
    },
    fr: {
        app_title: "Convertisseur d'Extensions Manga",
        app_subtitle: "Convertir entre Mangayomi • Mihon • Suwayomi",
        source_data: "📥 Source de Données",
        url_tab: "Lien URL",
        file_tab: "Téléverser Fichier",
        enter_url: "Entrez l'URL index.min.json",
        quick_links: "Liens Rapides :",
        drag_drop: "Glissez le fichier ici ou cliquez pour sélectionner",
        conversion_options: "⚙️ Options de Conversion",
        source_format: "Format Source",
        auto_detect: "Détection Auto",
        target_format: "Format Cible",
        convert_now: "Convertir Maintenant",
        converting: "Conversion en cours...",
        result: "📤 Résultat",
        extension: "Extension",
        source: "Source",
        download_json: "Télécharger JSON",
        copy: "Copier",
        preview: "Aperçu",
        preview_hide: "Masquer",
        footer_text: "Fait avec ❤️ pour les amateurs de Manga",
        error_invalid_json: "Fichier JSON invalide",
        error_no_input: "Veuillez entrer une URL ou téléverser un fichier",
        error_fetch_fail: "Échec de la récupération des données",
        error_fetch_direct_fail: "Échec. Vérifiez l'URL ou téléversez un fichier.",
        copy_success: "Copié !",
        file_selected: "✓"
    },
    ar: {
        app_title: "محول إضافات المانجا",
        app_subtitle: "تحويل بين Mangayomi • Mihon • Suwayomi",
        source_data: "📥 مصدر البيانات",
        url_tab: "رابط URL",
        file_tab: "رفع ملف",
        enter_url: "أدخل رابط index.min.json",
        quick_links: "روابط سريعة:",
        drag_drop: "اسحب الملف هنا أو انقر للاختيار",
        conversion_options: "⚙️ خيارات التحويل",
        source_format: "صيغة المصدر",
        auto_detect: "اكتشاف تلقائي",
        target_format: "صيغة الهدف",
        convert_now: "تحويل الآن",
        converting: "جاري التحويل...",
        result: "📤 النتيجة",
        extension: "إضافة",
        source: "مصدر",
        download_json: "تحميل JSON",
        copy: "نسخ",
        preview: "معاينة",
        preview_hide: "إخفاء",
        footer_text: "صُنع بـ ❤️ لمحبي المانجا",
        error_invalid_json: "ملف JSON غير صالح",
        error_no_input: "الرجاء إدخال رابط أو رفع ملف",
        error_fetch_fail: "فشل في جلب البيانات من الرابط",
        error_fetch_direct_fail: "فشل في جلب البيانات. تأكد من صحة الرابط أو استخدم رفع الملف.",
        copy_success: "تم النسخ!",
        file_selected: "✓"
    }
};

// Extension Converter App
class ExtensionConverter {
    constructor() {
        this.data = null;
        this.convertedData = null;
        this.currentLang = 'en';
        this.init();
    }

    init() {
        // Initialize Language
        this.setLanguage('en');

        // Language Switcher
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.setLanguage(e.target.dataset.lang));
        });

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target));
        });

        // Quick links
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.getElementById('url-input').value = e.target.dataset.url;
            });
        });

        // File input
        document.getElementById('file-input').addEventListener('change', (e) => {
            this.handleFileUpload(e);
        });

        // Convert button
        document.getElementById('convert-btn').addEventListener('click', () => {
            this.convert();
        });

        // Result actions
        document.getElementById('download-btn').addEventListener('click', () => {
            this.downloadResult();
        });

        document.getElementById('copy-btn').addEventListener('click', () => {
            this.copyToClipboard();
        });

        document.getElementById('preview-btn').addEventListener('click', () => {
            this.togglePreview();
        });
    }

    setLanguage(lang) {
        if (!translations[lang]) return;
        this.currentLang = lang;

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update preview button text if active
        const previewBtn = document.getElementById('preview-btn');
        if (previewBtn) {
            const isHidden = document.getElementById('preview-area').classList.contains('hidden');
            const icon = isHidden ? '👁️' : '👁️'; // Icon stays same, logic handles text
            const key = isHidden ? 'preview' : 'preview_hide';
            previewBtn.innerHTML = `<span>${icon}</span> <span data-i18n="${key}">${translations[lang][key]}</span>`;
        }
    }

    t(key) {
        return translations[this.currentLang][key] || key;
    }

    switchTab(clickedBtn) {
        // Update buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        clickedBtn.classList.add('active');

        // Update content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(clickedBtn.dataset.tab).classList.add('active');
    }

    handleFileUpload(e) {
        const file = e.target.files[0];
        if (file) {
            document.getElementById('file-name').textContent = `${this.t('file_selected')} ${file.name}`;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    this.data = JSON.parse(event.target.result);
                } catch (err) {
                    this.showError(this.t('error_invalid_json'));
                }
            };
            reader.readAsText(file);
        }
    }

    async convert() {
        this.hideError();
        this.showLoading();

        try {
            // Get data from URL or file
            const urlInput = document.getElementById('url-input').value.trim();

            if (urlInput) {
                await this.fetchFromUrl(urlInput);
            } else if (!this.data) {
                throw new Error(this.t('error_no_input'));
            }

            // Detect source format if auto
            const sourceFormat = document.getElementById('source-format').value;
            const targetFormat = document.getElementById('target-format').value;

            // Convert the data
            this.convertedData = this.convertData(this.data, sourceFormat, targetFormat);

            // Show results
            this.showResults();

        } catch (error) {
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    }

    async fetchFromUrl(url) {
        try {
            // Use a CORS proxy for cross-origin requests
            const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url);

            const response = await fetch(proxyUrl);
            if (!response.ok) {
                throw new Error(this.t('error_fetch_fail'));
            }

            this.data = await response.json();
        } catch (error) {
            // Try direct fetch as fallback
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error();
                this.data = await response.json();
            } catch {
                throw new Error(this.t('error_fetch_direct_fail'));
            }
        }
    }

    convertData(data, sourceFormat, targetFormat) {
        // Detect format if auto
        if (sourceFormat === 'auto') {
            sourceFormat = this.detectFormat(data);
        }

        // Clone data
        let result = JSON.parse(JSON.stringify(data));

        // Apply transformations based on target format
        result = result.map(ext => {
            // Clone extension
            let converted = { ...ext };

            // Transform sources
            if (converted.sources) {
                converted.sources = converted.sources.map(source => {
                    let newSource = { ...source };

                    if (targetFormat === 'suwayomi') {
                        // Add Suwayomi specific fields
                        if (!('versionId' in newSource)) {
                            newSource.versionId = 1;
                        }
                        if (!('hasCloudflare' in newSource)) {
                            newSource.hasCloudflare = 0;
                        }
                    } else {
                        // Remove Suwayomi specific fields for Mangayomi/Mihon
                        delete newSource.versionId;
                        delete newSource.hasCloudflare;
                    }

                    return newSource;
                });
            }

            // Update name prefix if needed
            if (targetFormat === 'mangayomi') {
                converted.name = converted.name.replace(/^Tachiyomi:\s*/, 'Mangayomi: ');
            } else if (targetFormat === 'mihon') {
                converted.name = converted.name.replace(/^(Tachiyomi|Mangayomi):\s*/, 'Mihon: ');
            } else if (targetFormat === 'suwayomi') {
                converted.name = converted.name.replace(/^(Mangayomi|Mihon):\s*/, 'Tachiyomi: ');
            }

            return converted;
        });

        return result;
    }

    detectFormat(data) {
        if (!Array.isArray(data) || data.length === 0) {
            return 'keiyoushi';
        }

        // Check for Suwayomi specific fields
        const firstExt = data[0];
        if (firstExt.sources && firstExt.sources.length > 0) {
            const firstSource = firstExt.sources[0];
            if ('versionId' in firstSource || 'hasCloudflare' in firstSource) {
                return 'suwayomi';
            }
        }

        return 'keiyoushi';
    }

    showResults() {
        const resultsSection = document.getElementById('results');
        resultsSection.classList.remove('hidden');

        // Calculate stats
        const extCount = this.convertedData.length;
        let sourceCount = 0;
        this.convertedData.forEach(ext => {
            if (ext.sources) {
                sourceCount += ext.sources.length;
            }
        });

        document.getElementById('ext-count').textContent = extCount;
        document.getElementById('source-count').textContent = sourceCount;

        // Prepare preview
        document.getElementById('json-preview').textContent =
            JSON.stringify(this.convertedData.slice(0, 3), null, 2) +
            (this.convertedData.length > 3 ? '\n\n... and more' : '');
    }

    downloadResult() {
        const targetFormat = document.getElementById('target-format').value;
        const blob = new Blob([JSON.stringify(this.convertedData)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `index.min.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    async copyToClipboard() {
        try {
            await navigator.clipboard.writeText(JSON.stringify(this.convertedData));

            const copyBtn = document.getElementById('copy-btn');
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = `<span>✓</span> ${this.t('copy_success')}`;

            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
            }, 2000);
        } catch (error) {
            this.showError('Failed to copy');
        }
    }

    togglePreview() {
        const previewArea = document.getElementById('preview-area');
        previewArea.classList.toggle('hidden');

        const previewBtn = document.getElementById('preview-btn');
        const isHidden = previewArea.classList.contains('hidden');
        const key = isHidden ? 'preview' : 'preview_hide';

        previewBtn.innerHTML = `<span>👁️</span> <span data-i18n="${key}">${this.t(key)}</span>`;
    }

    showLoading() {
        document.getElementById('loading').classList.remove('hidden');
        document.getElementById('results').classList.add('hidden');
    }

    hideLoading() {
        document.getElementById('loading').classList.add('hidden');
    }

    showError(message) {
        const errorDiv = document.getElementById('error-message');
        document.getElementById('error-text').textContent = message;
        errorDiv.classList.remove('hidden');
    }

    hideError() {
        document.getElementById('error-message').classList.add('hidden');
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    new ExtensionConverter();
});
