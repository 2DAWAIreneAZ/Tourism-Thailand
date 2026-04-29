document.addEventListener('DOMContentLoaded', () => {
    // Nav collapse logic
    const navCollapse = document.querySelector('.nav-collapse');
    const navLinks = document.querySelector('.nav-links');
    
    if (navCollapse && navLinks) {
        navCollapse.addEventListener('click', () => {
            navCollapse.classList.toggle('active');
            navLinks.classList.toggle('active');
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
});
