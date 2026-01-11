(function() {
    emailjs.init("0Veq71X19eL9ZabFX"); // المفتاح العام الصحيح
})();

function sendMail() {
    var serviceID = "service_44mpv0i"; // معرف الخدمة الصحيح
    var templateID = "template_contact"; // تأكد من مطابقة الاسم في صفحة القوالب

    // سحب القيم من مربعات النص في موقعك
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
        alert("فشل الإرسال: " + JSON.stringify(err));
    });
}
