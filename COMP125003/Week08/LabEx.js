// JavaScript source code
function validateName() {
    var unInput = document.getElementById("txtName");
    try {
        // replace with conditional expression
        if (unInput.value.length == 0) {
            throw "Please, inform your name";
        }
    }
    catch (msg) {
        // display error message
        window.alert(msg);
    }
}
function setUpPages() {
    AddEvents();
}
function AddEvents() {
    window.addEventListener("submit", validateName, false);
}
if (window.addEventListener) {
    window.addEventListener("load", setUpPages, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPages, validateEmail);
}

