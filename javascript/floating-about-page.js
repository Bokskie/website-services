document.addEventListener('DOMContentLoaded', function () {
    function handleScroll() {
        const elements = document.querySelectorAll('.services-about-content, .services-about-image, .services-about-footer');
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

    const toggleButton = document.querySelector('.services-about-toggle-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            const text1 = document.getElementById('text1');
            const text2 = document.getElementById('text2');
            text1.classList.toggle('hidden');
            text2.classList.toggle('hidden');
            toggleButton.textContent = text2.classList.contains('hidden') ? 'Benefits' : 'Less';
        });
    }
});
