/**
 * Robotics Class Website - Main JavaScript
 * Handles interactive elements like mobile menu and language selection
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initLanguageSelector();
    initModalFunctionality();
    initFaqAccordion();
});

function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        document.addEventListener('click', event => {
            if (!event.target.closest('.mobile-menu-toggle') &&
                !event.target.closest('.main-nav') &&
                mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    }
}

function initLanguageSelector() {
    const languageSelect = document.querySelector('.language-dropdown select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            localStorage.setItem('preferredLanguage', this.value);
            console.log('Language changed to:', this.value);
        });
    }
}
/**
 * Initializes the modal functionality for booking forms
 */
function initModalFunctionality() {
    const modal    = document.getElementById('booking-modal');
    // bind to both the explicit class and the header/mobile book-button
    const triggers = document.querySelectorAll('.open-booking-modal, .book-button');
    const closeBtn = modal.querySelector('.close-modal');

    console.log('› booking-modal found:', !!modal);
    console.log('› modal triggers found:', triggers.length);

    if (!modal || !triggers.length || !closeBtn) return;

    triggers.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}


function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
                faqItems.forEach(other => {
                    if (other !== item && other.classList.contains('active')) {
                        other.classList.remove('active');
                    }
                });
            });
        });
    }
}
