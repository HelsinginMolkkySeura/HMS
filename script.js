document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling

        navList.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
            navList.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});
