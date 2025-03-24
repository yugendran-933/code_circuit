/**
 * Robotics Class Website - Main JavaScript
 * Handles interactive elements like mobile menu and language selection
 */

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    initMobileMenu();
    
    // Language selector functionality
    initLanguageSelector();
});

/**
 * Initializes the mobile menu toggle functionality
 */
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Toggle menu icon animation if desired
            // mobileToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.mobile-menu-toggle') && 
                !event.target.closest('.main-nav') && 
                mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    }
}

/**
 * Initializes the language selector functionality
 */
function initLanguageSelector() {
    const languageSelect = document.querySelector('.language-dropdown select');
    
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            if (selectedLanguage) {
                // You can implement language switching logic here
                console.log('Language changed to:', selectedLanguage);
                
                // Example: You could redirect to language-specific pages
                // window.location.href = '/' + selectedLanguage + '/index.html';
                
                // Or set a cookie/localStorage value for language preference
                // localStorage.setItem('preferredLanguage', selectedLanguage);
            }
        });
    }
}

//google form 
// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal and buttons
    const modal = document.getElementById('booking-modal');
    const bookButtons = document.querySelectorAll('.book-button');
    const closeModal = document.querySelector('.close-modal');
    
    // Open modal when any Book button is clicked
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close modal when X is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close modal when clicking outside the content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
});