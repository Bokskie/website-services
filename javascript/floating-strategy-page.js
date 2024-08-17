document.addEventListener('DOMContentLoaded', function () {
    function handleScroll() {
        const elements = document.querySelectorAll(
            '.services-strategy-header-name, .services-strategy-sub-header, .services-strategy-header-paragraph'
        );
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }


    handleScroll();


    window.addEventListener('scroll', handleScroll);
});
