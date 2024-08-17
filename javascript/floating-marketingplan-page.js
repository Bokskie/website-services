document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.services-marketingplan-box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
               
                entry.target.classList.add('visible');
            } 
         
        });
    }, {
        threshold: 0.1  
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});
