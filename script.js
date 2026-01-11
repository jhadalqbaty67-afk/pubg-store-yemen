(function() {
    // المفتاح العام من حسابك
    emailjs.init("0Veq71X19eL9ZabFX");
})();

function sendMail() {
    var serviceID = "service_44mpv0i";
    var templateID = "template_contact";

    // جلب القيم من العناصر في HTML - تأكد أن الـ id مطابق
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert("تم إرسال طلب الشحن بنجاح! سنتواصل معك قريباً.");
        // تفريغ الحقول بعد الإرسال
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch(err => {
        console.error("خطأ:", err);
        alert("حدث خطأ في الإرسال، يرجى المحاولة لاحقاً.");
    });
}





