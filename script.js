(function() {
    // المفتاح العام من حسابك
    emailjs.init("0Veq71X19eL9ZabFX");
})();

function sendMail() {
    // المعرفات الخاصة بالخدمة والقالب
    var serviceID = "service_44mpv0i";
    var templateID = "template_contact";

    // جلب البيانات من الحقول
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


