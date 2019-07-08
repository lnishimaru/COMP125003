//calculates BMR 
var bmr = 0;
var isMetric = true;
// calculates all costs based on staff and adds to total cost
function calcBMR() {
    var height1 = document.getElementById("txtHeight1");
    var height2 = document.getElementById("txtHeight2");
    var weight1 = document.getElementById("txtWeight1");
    var weight2 = document.getElementById("txtWeight2");
    var age = document.getElementById("age");
    var gender = document.getElementById("genderM").checked;
    isMetric = document.getElementById("metricSys").checked;
    var calories = 0;
    var activity = "1";
    var radio1 = document.getElementById("Radio1").checked;
    var radio2 = document.getElementById("Radio2").checked;
    var radio3 = document.getElementById("Radio3").checked;
    var radio4 = document.getElementById("Radio4").checked;
    var radio5 = document.getElementById("Radio5").checked;
    //Mifflin-St Jeor Equation for male in metric system
    if (isMetric) {
        if (gender) {
            bmr = 10 * (parseInt(weight1.value, 10) + (parseInt(weight2.value, 10) / 100)) + 6.25 * (((parseInt(height1.value, 10)) * 100) + parseInt(height2.value, 10)) - 5 * parseInt(age.value, 10) + 5;
        }
        else {
            bmr = 10 * (parseInt(weight1.value, 10) + (parseInt(weight2.value, 10) / 100)) + 6.25 * (((parseInt(height1.value, 10)) * 100) + parseInt(height2.value, 10)) - 5 * parseInt(age.value, 10) - 161;
        }
    }
    else {
        if (gender) {
            bmr = (4.536 * (parseInt(weight1.value, 10) * 14 + (parseInt(weight2.value, 10)))) + (15.88 * (parseInt(height1.value, 10)) * 12 + parseInt(height2.value, 10)) - (5 * parseInt(age.value, 10) + 5);
        }
        else {
            bmr = (4.536 * (parseInt(weight1.value, 10) * 14 + (parseInt(weight2.value, 10)))) + (15.88 * (parseInt(height1.value, 10)) * 12 + parseInt(height2.value, 10)) - (5 * parseInt(age.value, 10)) - 161;
        }
    }
    if (radio1) {
        calories = bmr * 1.2;
    }
    if (radio2) {
        calories = bmr * 1.375;
    }
    if (radio3) {
        calories = bmr * 1.55;
    }
    if (radio4) {
        calories = bmr * 1.725;
    }
    if (radio5) {
        calories = bmr * 1.9;
    }
    // inner html - 'vai dentro do span o campo nnnn: <span id="estimate"> nnnn </span> 
    //display the result in the span tag
    document.getElementById("result").innerHTML = "Your BMR: " + bmr.toLocaleString();
    document.getElementById("cal").innerHTML = "Maintanence Calories: " + calories.toLocaleString();
}
function printSystem() {
    var syst = document.getElementById("imperialSys").checked;
    if (syst) {
        document.getElementById("measure1").innerHTML = " ft";
        document.getElementById("measure2").innerHTML = " in";
        document.getElementById("measure3").innerHTML = " st";
        document.getElementById("measure4").innerHTML = " lb";
    }
    else {
        document.getElementById("measure1").innerHTML = " m ";
        document.getElementById("measure2").innerHTML = " cm";
        document.getElementById("measure3").innerHTML = " kg";
        document.getElementById("measure4").innerHTML = " g";
    }
}
// sets all form field values to defaults
function resetForm() {
    document.getElementById("metricSys").checked = "checked";
    document.getElementById("measure1").innerHTML = " m";
    document.getElementById("measure2").innerHTML = " cm";
    document.getElementById("measure3").innerHTML = " kg";
    document.getElementById("measure4").innerHTML = " g";
    document.getElementById("result").innerHTML = "Your BMR: ";
    document.getElementById("cal").innerHTML = "Maintance Calories: ";
    //document.getElementById("photoghrs").value = 2;
    //document.getElementById("membook").checked = memoryBook;
    //document.getElementById("reprodrights").checked = reproductionRights;
    //document.getElementById("distance").value = 0;
    //calcStaff();
    createEventListeners();
}

// creates event listeners
// <input type="checkbox" onchange="javascripcode;"> - mixes javascript and HTML
// or ... create event handler: the method addEventListener(event,name of method, false - will be handled by the method, will not go to the parent)
function createEventListeners() {
    document.getElementById("txtWeight2").addEventListener("change", calcBMR, false);
    document.getElementById("imperialSys").addEventListener("change", printSystem, false);
    document.getElementById("metricSys").addEventListener("change", printSystem, false);
    document.getElementById("Button1").addEventListener("click", calcBMR, false);
    document.getElementById("Reset1").addEventListener("click", resetForm, false);
}

// resets form when page is reloaded
// INSTRUCTOR NOTE: Code in Step 2 on p. 82 is incorrect; should be as follows:
window.addEventListener("load", resetForm, false);