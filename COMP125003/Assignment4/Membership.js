var attrib = "color: red; padding:2px; text-align:left; vertical-align: middle; font-size:x-small";
var validated = false;
var error = false;
var idNumber = "2019" + Math.floor(Math.random() * 100) + 1;   
// validate first name
function validateFirst() {
    var firstName = document.getElementById("txtFirst").value;
    if (firstName.length <= 0) {
        document.getElementById("msgFirst").innerHTML = "Please inform your First Name";
        msgFirst.setAttribute("style", attrib);
        error = true;
    }
    else {
        document.getElementById("msgFirst").innerHTML = "";
    }
}
//validate last name
function validateLast(){
    var lastName = document.getElementById("txtLast").value;
    if (lastName.length <= 0) {
        document.getElementById("msgLast").innerHTML = "Please inform your Last Name";
        msgLast.setAttribute("style", attrib);
        error = true;
    }
    else {
        document.getElementById("msgLast").innerHTML = "";
    }
}
// validate address
function validateAddress() {
    var address = document.getElementById("txtAddress").value;
    if (address.length <= 0) {
        document.getElementById("msgAddress").innerHTML = "Please inform your Address";
        msgAddress.setAttribute("style", attrib);
        error = true;
    }
    else {
        document.getElementById("msgAddress").innerHTML = "";
    }
}
// validate city
function validateCity() {
    var city = document.getElementById("txtCity").value;
    if (city.length <= 0) {
        document.getElementById("msgCity").innerHTML = "Please inform your City";
        msgCity.setAttribute("style", attrib);
        error = true;
    }
    else {
        document.getElementById("msgCity").innerHTML = "";
    }
}
// validate postal code
function validateZip() {
    var zip = document.getElementById("txtZip").value;
    if (zip.length <= 0) {
        document.getElementById("msgZip").innerHTML = "Please inform your Postal Code";
        msgZip.setAttribute("style", attrib);
        error = true;
    }
    else {
        var zipCode = document.getElementById("txtZip").value.toUpperCase();
        var zipPattern = new RegExp(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i);
        var validZip = zipPattern.test(zipCode);
        if (!validZip) {
            document.getElementById("msgZip").innerHTML = "Invalid Postal Code";
            var ageZip = document.getElementById("msgZip");
            ageZip.setAttribute("style", attrib);
            error = true;
        }
        else {
            document.getElementById("msgZip").innerHTML = "";
        }
    }
}
// validate province
function validateProvince() {
    var province = document.getElementById("txtProvince").value;
    if (province.length <= 0) {
        document.getElementById("msgProvince").innerHTML = "Please inform your Province";
        msgProvince.setAttribute("style", attrib);
        error = true;
    }
    else {
        document.getElementById("msgProvince").innerHTML = "";
    }
}
// validate age
function validateAge() {
    var valAge = document.getElementById("txtAge").value;
    if (valAge.length <= 0) {
        document.getElementById("msgAge").innerHTML = "Please inform your Age";
        msgAge.setAttribute("style", attrib);
        error = true;
    }
    else {
        var age = parseInt(document.getElementById("txtAge").value);
        try {
            if (age < 18) {
                throw "Invalid age. Members must be 18 years or older.";
                error = true;
            }
            else {
                throw "";
            }
        }
        catch (msg) {
            document.getElementById("msgAge").innerHTML = msg;
            var ageMsg = document.getElementById("msgAge");
            ageMsg.setAttribute("style", attrib);
        }
    }
}
function validateEmail() {
    var emailAdd = document.getElementById("txtEmail").value;
    if (emailAdd.length <= 0) {
        document.getElementById("msgEmail").innerHTML = "Please inform your e-mail";
        msgEmail.setAttribute("style", attrib);
        error = true;
    }
    else {
        // convert email address to lowercase
        var emailAddress = document.getElementById("txtEmail");
        emailAddress.value = emailAddress.value.toLowerCase();
        var mailMsg = document.getElementById("msgEmail");
        try {
            if ((emailAddress.value.search("@") === -1) ||
                (emailAddress.value.lastIndexOf(".") === -1)) {
                throw "Invalid e-mail address";
                error = true;
            }
            else {
                throw "";
            }
        }
        catch (msg) {
            document.getElementById("msgEmail").innerHTML = msg;
            mailMsg.setAttribute("style", attrib);
        }   
    }
}
//validate password and confirmation
function validatePsw() {
    var psw1Input = document.getElementById("psw1");
    var psw1Value = document.getElementById("psw1").value;
    var pswMsg = document.getElementById("msgPsw");
    pswMsg.setAttribute("style", attrib);
    if (psw1Value.lenght <= 0) {
        document.getElementById("msgPsw").innerHTML = "Please inform your Password";
        error = true;
        window.alert("entrou");
    } else if (psw1Input.value.length < 6) {
        document.getElementById("msgPsw").innerHTML = "Password must be at least 6 characters";
        error = true;
           }
    else {
        document.getElementById("msgPsw").innerHTML = "";
         }
}
function validatePsw2() {
    var psw1Comp = document.getElementById("psw1");
    var psw2Input = document.getElementById("psw2");
    var pswMsg2 = document.getElementById("msgPsw2");
    pswMsg2.setAttribute("style", attrib);
    if (psw1Comp.value.localeCompare(psw2Input.value) !== 0) {
        document.getElementById("msgPsw2").innerHTML = "Passwords must match";
        error = true;
        }
        else {
        document.getElementById("msgPsw2").innerHTML = "";
        }
}
function validateForm() {     
    error = false;
    validateFirst();
    validateLast();
    validateAddress();
    validateCity();
    validateZip();
    validateProvince();
    validatePsw();
    validatePsw2();
    validateEmail();
    if (error == false) {
        validated = true;
        confirmRegistration();
    }
}
function confirmRegistration() {
    //display the Profile ID number created
    document.getElementById("msgID").innerHTML = "";
    document.getElementById("msgID").innerHTML = idNumber;
    //message of successful registration
    var msgSuccess = "Your profile " + idNumber + " has been created successfully. Thank you for your registration!";
    window.alert(msgSuccess);
    resetForm();
}
function resetForm() {
    location = location;
    attrib = "color: red; padding:2px; text-align:left; vertical-align: middle; font-size:x-small";
    validated = false;
    error = false;
}
var txtFirst = document.getElementById("txtFirst");
txtFirst.addEventListener("focusout", validateFirst);
var txtLast = document.getElementById("txtLast");
txtLast.addEventListener("focusout", validateLast);
var txtAddress = document.getElementById("txtAddress");
txtAddress.addEventListener("focusout", validateAddress);
var txtCity = document.getElementById("txtCity");
txtCity.addEventListener("focusout", validateCity);
var txtZip = document.getElementById("txtZip");
txtZip.addEventListener("focusout", validateZip);
var txtProvince = document.getElementById("txtProvince");
txtProvince.addEventListener("focusout", validateProvince);
var txtAge = document.getElementById("txtAge");
txtAge.addEventListener("focusout", validateAge);
var txtEmail = document.getElementById("txtEmail");
txtEmail.addEventListener("focusout", validateEmail);
var txtPsw1 = document.getElementById("psw1");
txtPsw1.addEventListener("focusout", validatePsw);
var txtPsw2 = document.getElementById("psw2");
txtPsw2.addEventListener("focusout", validatePsw2);
