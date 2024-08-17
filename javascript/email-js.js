document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        sendMail();
    });

    function sendMail() {
        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            number: document.getElementById("number").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        const serviceID = "service_a4709qo"; 
        const templateID = "template_m8ugkst"; 

        emailjs.send(serviceID, templateID, params)
            .then((res) => {
                console.log("Email sent successfully:", res);
                document.getElementById("contactForm").reset();
                alert("Your message was sent successfully!");
            })
            .catch((err) => {
                console.error("Failed to send email:", err);
                alert("Failed to send message. Please try again later.");
            });
    }
});