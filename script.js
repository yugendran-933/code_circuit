document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if(mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile nav if open
                if(mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileNavToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Course filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    if(filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Show/hide courses based on filter
                courseCards.forEach(card => {
                    if(filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        if(card.classList.contains(filter)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Testimonial Slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    
    if(testimonials.length > 0) {
        // Function to show current testimonial
        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            
            testimonialDots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            testimonials[index].style.display = 'block';
            testimonialDots[index].classList.add('active');
        }
        
        // Initialize with first testimonial
        showTestimonial(currentTestimonial);
        
        // Previous button
        document.querySelector('.testimonial-prev').addEventListener('click', function() {
            currentTestimonial--;
            if(currentTestimonial < 0) {
                currentTestimonial = testimonials.length - 1;
            }
            showTestimonial(currentTestimonial);
        });
        
        // Next button
        document.querySelector('.testimonial-next').addEventListener('click', function() {
            currentTestimonial++;
            if(currentTestimonial >= testimonials.length) {
                currentTestimonial = 0;
            }
            showTestimonial(currentTestimonial);
        });
        
        // Dot navigation
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showTestimonial(index);
                currentTestimonial = index;
            });
        });
        
        // Auto-rotate testimonials
        setInterval(function() {
            currentTestimonial++;
            if(currentTestimonial >= testimonials.length) {
                currentTestimonial = 0;
            }
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if(faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Toggle active class
                this.classList.toggle('active');
                
                // Toggle visibility of answer
                const answer = this.nextElementSibling;
                if(answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if(email) {
                // In a real application, you would send this to your server
                console.log('Newsletter signup:', email);
                
                // Show success message
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Thank you for subscribing!';
                successMessage.className = 'success-message';
                
                this.innerHTML = '';
                this.appendChild(successMessage);
            }
        });
    }
    
// Course registration modal
const registerButtons = document.querySelectorAll('.register-btn');
const modal = document.getElementById('registration-modal');
const closeModal = document.querySelector('.close-modal');

if(registerButtons.length > 0 && modal) {
    registerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get course info
            const courseName = this.getAttribute('data-course');
            document.getElementById('modal-course-name').textContent = courseName;
            
            // Update the iframe src with course parameter
            const iframe = document.getElementById('google-form-iframe');
            if(iframe) {
                // Base Google Form URL
                let baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc3uYpjhXYbSPsxyh4KB2axkWartHOBG7wue50BOCALjjkF4g/viewform";
                
                // Try both common entry field formats
                iframe.src = baseUrl + "?embedded=true&entry.1530364862=" + encodeURIComponent(courseName);
            }
            
            // Show modal
            modal.style.display = 'flex';
        });
    });
    
    // Close modal when clicking X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        
        // Reset iframe src
        const iframe = document.getElementById('google-form-iframe');
        if(iframe) {
            iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSc3uYpjhXYbSPsxyh4KB2axkWartHOBG7wue50BOCALjjkF4g/viewform?embedded=true";
        }
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if(e.target === modal) {
            modal.style.display = 'none';
            
            // Reset iframe src
            const iframe = document.getElementById('google-form-iframe');
            if(iframe) {
                iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSc3uYpjhXYbSPsxyh4KB2axkWartHOBG7wue50BOCALjjkF4g/viewform?embedded=true";
            }
        }
    });
} 
    // Animated counter for stats
    const counters = document.querySelectorAll('.counter');
    
    if(counters.length > 0) {
        const counterObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        const counter = entry.target;
                        const target = parseInt(counter.getAttribute('data-target'));
                        let count = 0;
                        const updateCounter = () => {
                            const increment = target / 100;
                            if(count < target) {
                                count += increment;
                                counter.textContent = Math.ceil(count);
                                setTimeout(updateCounter, 10);
                            } else {
                                counter.textContent = target;
                            }
                        };
                        updateCounter();
                        observer.unobserve(counter);
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    if('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        let lazyLoadThrottleTimeout;
        
        function lazyLoad() {
            if(lazyLoadThrottleTimeout) {
                clearTimeout(lazyLoadThrottleTimeout);
            }
            
            lazyLoadThrottleTimeout = setTimeout(function() {
                const scrollTop = window.pageYOffset;
                lazyImages.forEach(img => {
                    if(img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                
                if(lazyImages.length === 0) {
                    document.removeEventListener('scroll', lazyLoad);
                    window.removeEventListener('resize', lazyLoad);
                    window.removeEventListener('orientationChange', lazyLoad);
                }
            }, 20);
        }
        
        document.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationChange', lazyLoad);
    }
});