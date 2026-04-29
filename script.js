document.addEventListener('DOMContentLoaded', () => {
    // Nav collapse logic
    const navCollapse = document.querySelector('.nav-collapse');
    const navLinks = document.querySelector('.nav-links');
    const hiddenLogo = document.querySelector('.hidden-logo');
    
    if (navCollapse && navLinks) {
        navCollapse.addEventListener('click', () => {
            navCollapse.classList.toggle('active');
            navLinks.classList.toggle('active');
            hiddenLogo.classList.toggle('active');
        });
    }

    // Tabs logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0 && tabContents.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                
                // Remove active class from all
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked
                btn.classList.add('active');
                document.getElementById(targetId).classList.add('active');
            });
        });
    }
    // Scroll to top button visibility
    const scrollToTopBtn = document.querySelector('.scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });
    }

    // Switch tabs from external buttons (e.g. "View details" in routes grid)
    const switchTabBtns = document.querySelectorAll('[data-switch-tab]');
    if (switchTabBtns.length > 0) {
        switchTabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetTabId = btn.getAttribute('data-switch-tab');
                const targetTabBtn = document.querySelector(`.tab-btn[data-target="${targetTabId}"]`);
                
                if (targetTabBtn) {
                    targetTabBtn.click();
                    // Scroll to the timeline section
                    const timelineSection = document.querySelector('.timeline-section');
                    if (timelineSection) {
                        timelineSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }
});
