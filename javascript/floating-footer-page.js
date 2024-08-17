document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(
        '.services-footer-address, .services-footer-contact-info, .services-footer-social-media, .services-footer-logo, .services-footer-post, .services-footer-news, .services-footer-email-input, .services-footer-check-box, .services-footer-button, .services-footer-last-content'
    );


    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
       
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
});
