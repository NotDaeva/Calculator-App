
// OPERATION BUTTONS
const modulusBtn = document.getElementById("btn-modulus");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

// NUMBER BUTTONS
const buttonDecimal = document.getElementById("btn-dot");
const button0 = document.getElementById("btn-0");
const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const button3 = document.getElementById("btn-3");
const button4 = document.getElementById("btn-4");
const button5 = document.getElementById("btn-5");
const button6 = document.getElementById("btn-6");
const button7 = document.getElementById("btn-7");
const button8 = document.getElementById("btn-8");
const button9 = document.getElementById("btn-9");

// COMMAND BUTTONS
const clearBtn = document.getElementById("btn-clear");
const deleteBtn = document.getElementById("btn-delete");
const solveBtn = document.getElementById("btn-solve");

const resultTxt = document.getElementById("result-txt");
const calculationTxt = document.getElementById("calculation-txt");

function displayResult(result, txt) {
    resultTxt.textContent = result;
    calculationTxt.textContent = txt;
}