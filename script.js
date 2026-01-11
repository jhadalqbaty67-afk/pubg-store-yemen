// Initialize EmailJS with your public key
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key from EmailJS
})();

// Handle email form submission
document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send the form using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this) // Replace with your service ID and template ID
        .then(function() {
            alert('تم إرسال الرسالة بنجاح!');
        }, function(error) {
            alert('حدث خطأ في الإرسال: ' + JSON.stringify(error));
        });
});

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
