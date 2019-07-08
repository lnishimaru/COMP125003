var totalRows = 0;
var totalCols = 0;
var red = 0;
var blue = 255;
var green = 200;
function resetForm() {
    document.getElementById("Cols").value = 0;
    document.getElementById("Rows").value = 0;
    red = 0;
    blue = 255;
    green = 200;
    totalRows = 15;
    totalCols = 15;
    createEventListeners();
}
function reloadPage() {
    location.reload();
    document.getElementById("Button1").disabled = false;
    document.getElementById("Rows").disabled = false;
    document.getElementById("Cols").disabled = false;
}
function drawTable() { 
    // get the reference for the body
    var div1 = document.getElementById('div1');
    // creates a <table> element
    var tbl = document.createElement("table");
    tbl.setAttribute("id", "MyTable", "style", "font-family: Arial, Helvetica, sans-serif; color: white; margin-left: auto; margin-right: auto; width: 970px; position:relative;");
    // create rows
    totalRows = document.getElementById("Rows").value;
    totalCols = document.getElementById("Cols").value;
    for (var r = 0; r < totalRows; r++) {
        var row = document.createElement("tr");
        // create columns
        for (var c = 0; c < totalCols; c++) {
            var cell = document.createElement("td");;
            cell.setAttribute("id", "cells" + c);
            var cellText = document.createTextNode(r + "." + c);
            cell.appendChild(cellText);
            row.appendChild(cell);
            var attrib = "background-color: rgb(" + red + "," + green + "," + blue + "); color: white; padding:2px; text-align:center; vertical-align: middle; ";
            cell.setAttribute("style", attrib);
            red = red + 1;
            green = green - 1;
            blue = blue - 1;
        }
        tbl.appendChild(row); // add the row to the end of the table body
        antRows = totalRows;
    }
    div1.appendChild(tbl); // appends <table> into <div1>
    document.getElementById("Button1").disabled = true;
    document.getElementById("Rows").disabled = true;
    document.getElementById("Cols").disabled = true;
}
function createEventListeners() {
    document.getElementById("Button1").addEventListener("click", drawTable, false);
    document.getElementById("Button2").addEventListener("click", reloadPage, false);
}
//window.onload = drawTable; 
window.addEventListener("load", resetForm, false);