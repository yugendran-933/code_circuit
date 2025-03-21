document.addEventListener('DOMContentLoaded', function() {
    // Translations object
    const translations = {
        'en': {
            'nav_home': 'Home',
            'nav_courses': 'Courses',
            'nav_about': 'About Us',
            'nav_team': 'Our Team',
            'nav_faq': 'FAQ',
            'nav_contact': 'Contact',
            'nav_login': 'Login',
            'hero_title': 'Build the Future with Robotics',
            'hero_text': 'Learn robotics from industry experts and gain hands-on experience with real-world projects. From beginner to advanced, we have courses for all skill levels.',
            'btn_explore': 'Explore Courses',
            'btn_learn_more': 'Learn More',
            // Add all your website text here
        },
        'es': {
            'nav_home': 'Inicio',
            'nav_courses': 'Cursos',
            'nav_about': 'Sobre Nosotros',
            'nav_team': 'Nuestro Equipo',
            'nav_faq': 'Preguntas Frecuentes',
            'nav_contact': 'Contacto',
            'nav_login': 'Iniciar Sesión',
            'hero_title': 'Construye el Futuro con Robótica',
            'hero_text': 'Aprende robótica de expertos de la industria y obtén experiencia práctica con proyectos del mundo real. Desde principiante hasta avanzado, tenemos cursos para todos los niveles.',
            'btn_explore': 'Explorar Cursos',
            'btn_learn_more': 'Más Información',
            // Add Spanish translations
        },
        // Add more languages as needed
    };

    // Function to change language
    function changeLanguage(lang) {
        // Store user preference
        localStorage.setItem('preferred_language', lang);
        
        // Update all text elements with data-i18n attributes
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Add event listener to language selector
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
        
        // Set initial language
        const storedLang = localStorage.getItem('preferred_language');
        const browserLang = navigator.language.split('-')[0];
        const initialLang = storedLang || (translations[browserLang] ? browserLang : 'en');
        
        languageSelect.value = initialLang;
        changeLanguage(initialLang);
    }
});