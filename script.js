(function() {
    // ربط الحساب بمفتاحك العام
    emailjs.init("0Veq71X19eL9ZabFX");
})();

function sendMail() {
    var serviceID = "service_44mpv0i";
    var templateID = "template_contact";

    // جلب البيانات من الحقول في HTML
    var params = {
        name: document.querySelector("input[type='text']").value,
        email: document.querySelector("input[type='email']").value,
        message: document.querySelector("textarea").value
    };

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert("تم إرسال طلب الشحن بنجاح! سنتواصل معك قريباً.");
    })
    .catch(err => {
        console.log("خطأ في الإرسال:", err);
        alert("حدث خطأ، يرجى المحاولة لاحقاً.");
    });
}
