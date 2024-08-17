document.addEventListener('DOMContentLoaded', function () {
    const contents = document.querySelectorAll('.services-design-content');
    const images = document.querySelectorAll('.services-design-image');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
 
                entry.target.classList.add('visible');
            }

        });
    }, {
        threshold: 0.1 
    });

    contents.forEach(content => {
        observer.observe(content);
    });
    images.forEach(image => {
        observer.observe(image);
    });
});
