// JavaScript source code
function validateEmail() {
    var emailInput = document.getElementById("emailbox");

    // convert email address to lowercase
    // replace with code to convert email address to lowercase
    emailInput.value = emailInput.value.toLowerCase();

    // copy valid email value to profile object
    profile.email = emailInput.value;
    // copy profile.email value to profile section
    document.getElementById("profileEmail").innerHTML = profile.email;
    // make profile section and email section visible
    document.getElementById("profile").style.display = "block";
    document.getElementById("emailSection").style.display = "block";
}

function setUpPages() {
    validateEmail();
}



if (window.addEventListener) {
    window.addEventListener("load", setUpPages, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPages, validateEmail);
}
