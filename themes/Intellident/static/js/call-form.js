(function(){
    "use strict";

    document.onload = function(){

        // MODAL TRANSLATIONS
        handleTranslations();

        // CAPTCHA VALIDATION
        validateCaptcha();

    }();

})();

function getSiteLng() {
    return (window.location.href.indexOf("/en/") > -1) ? 'en' : 'hu';
}

function handleTranslations(){
    document.getElementById('form-lang').value = getSiteLng() == 'hu' ? 'Magyar' : 'Külföldi';
    if (getSiteLng() == 'en') {
        document.getElementById('rc-form-title').innerText = "Request a Callback";
        document.getElementById('rc-form-description').innerText = "Please, send your name and phone number, we will call you soon!";
        document.getElementById('form-name').placeholder = "Name";
        document.getElementById('form-phone').placeholder = "Phone Number";
        document.getElementById('form-time-0').innerText = "We can call any time";
        document.getElementById('form-time-1').innerText = "Only between 8 and 12 p.m.";
        document.getElementById('form-time-2').innerText = "Only between 12 and 16 hours";
        document.getElementById('form-time-3').innerText = "Only between 16 and 20 hours";
        document.getElementById('form-submit').innerText = "Send";
        document.getElementById('form-submit').setAttribute('data-loading-text', 'Please wait...');
    }
}

function validateCaptcha(){
    setTimeout(() => {
        var recaptcha = document.forms["popup_appointment_form"]["g-recaptcha-response"];
        if (recaptcha != undefined && recaptcha != null) {
          var alertString = getSiteLng() == 'hu' ? "Kérem jelölje be a \"Nem vagyok robot\" felirat melletti négyzetet a reCaptcha ablakban." : "Please check the box \"I'm not a robot\" in the reCaptcha below.";
          recaptcha.required = true;
          recaptcha.oninvalid = function (e) {
            alert(alertString);
          }
        }
    }, 2000);
}