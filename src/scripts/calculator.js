let display_box = document.getElementById("display-box");
let num0 = document.getElementById("number_0");
let num1 = document.getElementById("number_1");
let num2 = document.getElementById("number_2");
let num3 = document.getElementById("number_3");
let num4 = document.getElementById("number_4");
let num5 = document.getElementById("number_5");
let num6 = document.getElementById("number_6");
let num7 = document.getElementById("number_7");
let num8 = document.getElementById("number_8");
let num9 = document.getElementById("number_9");
let symPlus = document.getElementById("symbolPlus");
let symMinus = document.getElementById("symbolMinus");
let symMultiply = document.getElementById("symbolMultiply");
let symDivide = document.getElementById("symbolDivide");
let symDecimal = document.getElementById("symbolDecimal");
let symEqual = document.getElementById("symbolEqual");
let clear_text = document.getElementById("clearText");
let delete_text = document.getElementById("deleteText");

num0.addEventListener("click", number0);
num1.addEventListener("click", number1);
num2.addEventListener("click", number2);
num3.addEventListener("click", number3);
num4.addEventListener("click", number4);
num5.addEventListener("click", number5);
num6.addEventListener("click", number6);
num7.addEventListener("click", number7);
num8.addEventListener("click", number8);
num9.addEventListener("click", number9);
symPlus.addEventListener("click", opPlus);
symMinus.addEventListener("click", opMinus);
symMultiply.addEventListener("click", opMultiply);
symDivide.addEventListener("click", opDivide);
symDecimal.addEventListener("click", opDecimal);
symEqual.addEventListener("click", opEqual);
clear_text.addEventListener("click", clearTxt);
delete_text.addEventListener("click", deleteTxt);

var txt = ""

// function displayBox() {
//     console.log("display Box clicked");
//     // display_box.textContent = "Hello";
// }

function number0() {
    txt += 0;
    display_box.textContent = txt;
    console.log("button 0 clicked");
}

function number1() {
    txt += 1;
    display_box.textContent = txt;
    console.log("button 1 clicked");
}

function number2() {
    txt += 2;
    display_box.textContent = txt;
    console.log("button 2 clicked");
}

function number3() {
    txt += 3;
    display_box.textContent = txt;
    console.log("button 3 clicked");
}

function number4() {
    txt += 4;
    display_box.textContent = txt;
    console.log("button 4 clicked");
}

function number5() {
    txt += 5;
    display_box.textContent = txt;
    console.log("button 5 clicked");
}

function number6() {
    txt += 6;
    display_box.textContent = txt;
    console.log("button 6 clicked");
}

function number7() {
    txt += 7;
    display_box.textContent = txt;
    console.log("button 7 clicked");
}

function number8() {
    txt += 8;
    display_box.textContent = txt;
    console.log("button 8 clicked");
}

function number9() {
    txt += 9;
    display_box.textContent = txt;
    console.log("button 9 clicked");
}

function opPlus() {
    txt += "+";
    display_box.textContent = txt;
    console.log("button + clicked");
}

function opMinus() {
    txt += "-";
    display_box.textContent = txt;
    console.log("button - clicked");
}

function opMultiply() {
    txt += "*";
    display_box.textContent = txt;
    console.log("button * clicked");
}

function opDivide() {
    txt += "/";
    display_box.textContent = txt;
    console.log("button / clicked");
}

function opDecimal() {
    txt += ".";
    display_box.textContent = txt;
    console.log("button . clicked");
}

function opEqual() {
    let res = eval(txt);
    display_box.textContent = res;
    console.log("button = clicked");
}

function clearTxt() {
    txt = ""
    display_box.textContent = txt;
    console.log("button clear clicked");
}

function deleteTxt() {
    txt = txt.slice(0, -1);
    display_box.textContent = txt;
    console.log("button delete clicked");
}