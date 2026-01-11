(function() {
    // المفتاح العام من حسابك
    emailjs.init("0Veq71X19eL9ZabFX");
})();

function sendMail() {
    // التأكد من معرف الخدمة ومعرف القالب
    var serviceID = "service_44mpv0i";
    var templateID = "template_contact";

    // سحب البيانات من الحقول - تأكد أن الـ id في HTML مطابق لهذه الأسماء
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send(serviceID, templateID, params)
    .then(function(res) {
        alert("تم إرسال طلبك بنجاح!");
    })
    .catch(function(err) {
        alert("حدث خطأ في الإرسال: " + JSON.stringify(err));
    });
}
