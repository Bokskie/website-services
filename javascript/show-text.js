document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.services-about-toggle-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            const text1 = button.previousElementSibling.previousElementSibling; 
            const text2 = button.previousElementSibling; 
            
        
            console.log('Button clicked');
            console.log('Text1:', text1);
            console.log('Text2:', text2);
            
           
            if (text1.classList.contains('.hidden')) {
                text1.classList.remove('.hidden'); 
                text2.classList.add('.hidden');
                button.textContent = 'Show Less'; 
            } else {
                text1.classList.add('.hidden'); 
                text2.classList.remove('.hidden'); 
                button.textContent = 'Show More'; 
            }
        });
    });
});
