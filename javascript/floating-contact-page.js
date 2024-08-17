document.addEventListener('DOMContentLoaded', function () {
    function handleScroll() {
        const textHeaders = document.querySelectorAll('.services-contact-text-header');
        const textParagraphs = document.querySelectorAll('.services-contact-text-paragraph');
        const formHeader = document.querySelector('.form-header-name');
        const inputs = document.querySelectorAll('.contact_input input');
        const textarea = document.querySelector('.contact_message-textarea textarea');
        const submitBtn = document.querySelector('.submitBtn');
        const windowHeight = window.innerHeight;

        textHeaders.forEach(header => {
            const rect = header.getBoundingClientRect();
            if (rect.top < windowHeight - 100) {
                header.classList.add('visible');
            }
        });

        textParagraphs.forEach(paragraph => {
            const rect = paragraph.getBoundingClientRect();
            if (rect.top < windowHeight - 100) {
                paragraph.classList.add('visible');
            }
        });

        const formHeaderRect = formHeader.getBoundingClientRect();
        if (formHeaderRect.top < windowHeight - 100) {
            formHeader.classList.add('visible');
        }

        inputs.forEach(input => {
            const rect = input.getBoundingClientRect();
            if (rect.top < windowHeight - 100) {
                input.classList.add('visible');
            }
        });

        const textareaRect = textarea.getBoundingClientRect();
        if (textareaRect.top < windowHeight - 100) {
            textarea.classList.add('visible');
        }

        const submitBtnRect = submitBtn.getBoundingClientRect();
        if (submitBtnRect.top < windowHeight - 100) {
            submitBtn.classList.add('visible');
        }
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
});
