document.addEventListener('DOMContentLoaded', () => {
    const navCollapse = document.querySelector('.nav-collapse');
    const navLinks = document.querySelector('.nav-links');
    
    if (navCollapse && navLinks) {
        navCollapse.addEventListener('click', () => {
            navCollapse.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
});
