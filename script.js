// Initialize EmailJS with your public key
(function() {
    emailjs.init("0Veq71X19eL9ZabFX");
})();

// Handle email form submission
document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        game_code: document.getElementById('game-code').value,
        message: document.getElementById('message').value
    };

    // Send the email using EmailJS
    sendMail(params);
});

function sendMail(params) {
    // المفاتيح التي استخرجناها من حسابك
    var serviceID = "service_44mpv0i";
    var templateID = "template_contact";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert("تم إرسال طلب الشحن بنجاح! سنتواصل معك قريباً.");
    })
    .catch(err => {
        console.log("خطأ في الإرسال:", err);
        alert("حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.");
    });
}

// Optional: Add functionality for UC selection (if needed)
document.querySelectorAll('.uc-option').forEach(function(option) {
    option.addEventListener('click', function() {
        // Remove selected class from all options
        document.querySelectorAll('.uc-option').forEach(function(opt) {
            opt.classList.remove('selected');
        });
        // Add selected class to clicked option
        this.classList.add('selected');
    });
});




