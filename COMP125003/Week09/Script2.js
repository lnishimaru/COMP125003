"use strict";

// global variable
var queryArray = [];

function populateInfo() {
    if (location.search) {
        var queryData = location.search;
        var hiddenInputs = document.querySelectorAll("input[type=hidden]");
        queryData = queryData.substring(1, queryData.length);
        queryArray = queryData.split("&");
        for (var i = 0; i < queryArray.length; i++) {
            hiddenInputs[i].value = queryArray[i].substring(queryArray[i].lastIndexOf("=") + 1);
        }
    }
}

/*function createCookies() {
    var formFields = document.querySelectorAll("input[type=hidden], input[type=radio], textarea");
    var expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + 7);
    for (var i = 0; i < formFields.length; i++) {
        var currentValue = decodeURIComponent(formFields[i].value);
        currentValue = currentValue.replace(/\+/g, " ");
        document.cookie = formFields[i].name + "=" + currentValue +
            "; expires=" + expiresDate.toUTCString();
    }
}*/

if (window.addEventListener) {
    window.addEventListener("load", populateInfo, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", populateInfo);
}

