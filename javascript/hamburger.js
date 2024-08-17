document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.header-navigation');
    const closeIcon = document.querySelector('.icon-close');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        hamburger.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        nav.classList.remove('active');
        closeIcon.style.display = 'none';
        hamburger.style.display = 'block';
    });
});
