var display1 = document.getElementById("card-mumbai")
var rem1 = document.getElementById("add1");

var display2 = document.getElementById("card-manali")
var rem2 = document.getElementById("add2");


var display3 = document.getElementById("card-darj")
var rem3 = document.getElementById("add3");


var display4 = document.getElementById("card-haridwar")
var rem4 = document.getElementById("add4");


var display5 = document.getElementById("card-kashmir")
var rem5 = document.getElementById("add5");


var display6 = document.getElementById("card-bangalore")
var rem6 = document.getElementById("add6");
var flag1 = 0
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;
var flag6 = 0;

function Logoutt() {
    window.close();
}

function AddMumbai() {
    if (flag1 == 0) {
        display1.innerHTML = "Added Successfully"
        display1.style.color = "red"
        rem1.innerHTML = "Remove"
        flag1 = 1
    }
    else {
        display1.innerHTML = ""
        rem1.innerHTML = "Add"
        flag1 = 0;
    }
}

function AddManali() {
    if (flag2 == 0) {
        display2.innerHTML = "Added Successfully"
        display2.style.color = "red"
        rem2.innerHTML = "Remove"
        flag2 = 1
    }
    else {
        display2.innerHTML = ""
        rem2.innerHTML = "Add"
        flag2 = 0;
    }
}

function AddDarjeling() {
    if (flag == 0) {
        display3.innerHTML = "Added Successfully"
        display3.style.color = "red"
        rem3.innerHTML = "Remove"
        flag3 = 1
    }
    else {
        display3.innerHTML = ""
        rem3.innerHTML = "Add"
        flag3 = 0;
    }
}

function AddHaridwar() {
    if (flag4 == 0) {
        display4.innerHTML = "Added Successfully"
        display4.style.color = "red"
        rem4.innerHTML = "Remove"
        flag4 = 1
    }
    else {
        display4.innerHTML = ""
        rem4.innerHTML = "Add"
        flag4 = 0;
    }
}

function AddKashmir() {
    if (flag5 == 0) {
        display5.innerHTML = "Added Successfully"
        display5.style.color = "red"
        rem5.innerHTML = "Remove"
        flag5 = 1
    }
    else {
        display5.innerHTML = ""
        rem5.innerHTML = "Add"
        flag5 = 0;
    }
}

function AddBangalore() {
    if (flag6 == 0) {
        display6.innerHTML = "Added Successfully"
        display6.style.color = "red"
        rem6.innerHTML = "Remove"
        flag6 = 1
    }
    else {
        display6.innerHTML = ""
        rem6.innerHTML = "Add"
        flag6 = 0;
    }
}