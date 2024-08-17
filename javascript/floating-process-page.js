document.addEventListener('DOMContentLoaded', function () {
    // Select the list items for both processes
    const sellingItems = document.querySelectorAll('.services-selling-process-container li');
    const buyingItems = document.querySelectorAll('.services-buying-process-container li');

    // Create an intersection observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class when the element is in view
                entry.target.classList.add('visible');
            }
            // Optionally, remove 'visible' class if you want to reset the animation
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    }, {
        threshold: 0.1  // Adjust based on when you want the items to become visible
    });

    // Observe each list item
    sellingItems.forEach(item => {
        observer.observe(item);
    });
    buyingItems.forEach(item => {
        observer.observe(item);
    });
});
