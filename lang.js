function setLang(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('sisplace-lang', lang);

    document.querySelectorAll('[data-en]').forEach(function(el) {
        el.textContent = lang === 'es' ? el.dataset.es : el.dataset.en;
    });

    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
}

document.addEventListener('DOMContentLoaded', function() {
    var saved = localStorage.getItem('sisplace-lang') || 'en';
    if (saved === 'es') setLang('es');

    var btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.addEventListener('click', function() {
            var current = document.documentElement.lang || 'en';
            setLang(current === 'es' ? 'en' : 'es');
        });
    }
});
