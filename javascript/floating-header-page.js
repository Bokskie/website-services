document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const headerBottom = document.querySelector('.header-bottom-container');

    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop) {
            header.classList.remove('visible');
            headerBottom.classList.remove('visible');
        } else {
            header.classList.add('visible');
            headerBottom.classList.add('visible');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});
