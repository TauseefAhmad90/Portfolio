// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Adds a dark, semi-transparent background when you scroll down
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
            navbar.style.transition = 'all 0.3s ease';
        } else {
            // Returns to transparent at the very top
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID from the href (e.g., "#chi-sono")
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
// 3. Scroll Reveal Animations
    // Seleziona tutti gli elementi con la classe 'reveal'
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // L'animazione parte quando il 15% dell'elemento è visibile
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Aggiunge la classe 'active' per far apparire l'elemento
                entry.target.classList.add('active');
                // Smette di osservare l'elemento una volta apparso
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });