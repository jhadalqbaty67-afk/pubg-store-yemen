(function() {
    // ربط الحساب بمفتاحك العام
    emailjs.init("0Veq71X19eL9ZabFX");
})();

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
    });
}
