document.addEventListener('DOMContentLoaded', function () {
    function handleScroll() {
        const images = document.querySelectorAll('.services-luxury-content-images');
        const paragraphs = document.querySelectorAll('.services-luxury-paragraph');
        const footerContent = document.querySelector('.services-luxury-footer-content');
        const footerBoxes = document.querySelectorAll('.services-luxury-footer-box');
        const windowHeight = window.innerHeight;

        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            if (rect.top < windowHeight - 100) {
                image.classList.add('visible');
            }
        });

        paragraphs.forEach(paragraph => {
            const rect = paragraph.getBoundingClientRect();
            if (rect.top < windowHeight - 100) {
                paragraph.classList.add('visible');
            }
        });

        const footerContentRect = footerContent.getBoundingClientRect();
        if (footerContentRect.top < windowHeight - 100) {
            footerContent.classList.add('visible');
        }
        footerBoxes.forEach(box => {
            const rect = box.getBoundingClientRect();
            if (rect.top < windowHeight - 100) {
                box.classList.add('visible');
            }
        });
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
});
