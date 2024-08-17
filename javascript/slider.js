document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.services-luxury-contents');
    const slides = document.querySelectorAll('.services-luxury-content');
    const prevButton = document.querySelector('.arrow-left');
    const nextButton = document.querySelector('.arrow-right');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlide() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    function goToNextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlide();
        }
    }

    function goToPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide();
        }
    }

    nextButton.addEventListener('click', () => {
        goToNextSlide();
    });

    prevButton.addEventListener('click', () => {
        goToPrevSlide();
    });

    updateSlide();
});
