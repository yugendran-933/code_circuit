/**
 * Course Path Visualization - JavaScript
 * Handles course path interactivity and module switching
 */

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the module selector
    initModuleSelector();
    
    // Initialize milestone hover effects
    initMilestoneEffects();

    // Set first module as active by default
    document.querySelector('.path-module:first-child').classList.add('active');
    document.querySelector('.module-option:first-child').classList.add('active');
});

/**
 * Initializes the module selector functionality
 */
function initModuleSelector() {
    const moduleOptions = document.querySelectorAll('.module-option');
    const pathModules = document.querySelectorAll('.path-module');
    
    if (moduleOptions.length > 0) {
        moduleOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Get the target module
                const targetModule = this.getAttribute('data-target');
                
                // Remove active class from all options and modules
                moduleOptions.forEach(opt => opt.classList.remove('active'));
                pathModules.forEach(module => module.classList.remove('active'));
                
                // Add active class to clicked option and corresponding module
                this.classList.add('active');
                document.getElementById(targetModule).classList.add('active');
            });
        });
    }
}

/**
 * Initializes milestone hover and interaction effects
 */
function initMilestoneEffects() {
    const milestones = document.querySelectorAll('.milestone');
    
    if (milestones.length > 0) {
        milestones.forEach(milestone => {
            // On milestone hover
            milestone.addEventListener('mouseenter', function() {
                const milestoneIndex = Array.from(milestones).indexOf(this);
                highlightPathTo(milestoneIndex);
            });
            
            // Reset on mouse leave
            milestone.addEventListener('mouseleave', function() {
                resetPathHighlight();
            });
        });
    }
}

/**
 * Highlights the path up to a specific milestone
 * @param {number} milestoneIndex - The index of the milestone to highlight up to
 */
function highlightPathTo(milestoneIndex) {
    // Implementation will depend on your specific path structure
    // This is a placeholder for custom path highlighting logic
    console.log('Highlighting path to milestone: ' + milestoneIndex);
    
    // Example: Add a class to milestones up to this index
    const milestones = document.querySelectorAll('.milestone');
    milestones.forEach((milestone, index) => {
        if (index <= milestoneIndex) {
            milestone.classList.add('active');
        }
    });
}

/**
 * Resets path highlighting
 */
function resetPathHighlight() {
    const milestones = document.querySelectorAll('.milestone');
    milestones.forEach(milestone => {
        milestone.classList.remove('active');
    });
}