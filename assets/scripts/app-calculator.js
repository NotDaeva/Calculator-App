const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
let lastOperator = null;

modulusBtn.addEventListener("click", () => runOperation('%'));
addBtn.addEventListener("click", () => runOperation('+'));
subtractBtn.addEventListener("click", () => runOperation('-'));
multiplyBtn.addEventListener("click", () => runOperation('x'));
divideBtn.addEventListener("click", () => runOperation('/'));

solveBtn.addEventListener("click", solve);
deleteBtn.addEventListener("click", resetNumber)
clearBtn.addEventListener("click", resetCalculation)

buttonDecimal.addEventListener("click", () => writeNumber("."));
button0.addEventListener("click", () => writeNumber(0));
button1.addEventListener("click", () => writeNumber(1));
button2.addEventListener("click", () => writeNumber(2));
button3.addEventListener("click", () => writeNumber(3));
button4.addEventListener("click", () => writeNumber(4));
button5.addEventListener("click", () => writeNumber(5));
button6.addEventListener("click", () => writeNumber(6));
button7.addEventListener("click", () => writeNumber(7));
button8.addEventListener("click", () => writeNumber(8));
button9.addEventListener("click", () => writeNumber(9));

function resetNumber() {
    resultTxt.textContent = "0";
}

function resetCalculation() {
    resetNumber();
    currentResult = defaultResult;
    calculationTxt.textContent = "";
    lastOperator = null;
}

function solve() {
    if (lastOperator) {
        runOperation(lastOperator);
    }
    displayResult(currentResult, calculationTxt.textContent);
}

function writeNumber(number) {
    if (resultTxt.textContent === "0" && number != ".") {
        resultTxt.textContent = number;
    } else {
        resultTxt.textContent += number;
    }
}

function getUserNum() {
  return parseFloat(resultTxt.textContent);
}

function writeCalculationTxt(operator, initialResult, enteredNum) {
  const calculationDescription = `${initialResult} ${operator} ${enteredNum}`;
  displayResult(currentResult, calculationDescription);
  resetNumber();
}

function writeLogEntry(operator, initialResult, enteredNum, currentResult) {
  const logEntry = {
    operation: operator,
    prevResult: initialResult,
    num: enteredNum,
    result: currentResult,
  };
  logEntries.push(logEntry);
}

function runOperation(operator) {
  const enteredNum = getUserNum();
  const initialResult = currentResult;

  switch (operator) {
    case '%':
      currentResult %= enteredNum;
      break;
    case '+':
      currentResult += enteredNum;
      break;
    case '-':
      currentResult -= enteredNum;
      break;
    case 'x':
      currentResult *= enteredNum;
      break;
    case '/':
      currentResult /= enteredNum;
      break;
  }

  writeCalculationTxt(operator, initialResult, enteredNum);
  writeLogEntry(operator, initialResult, enteredNum, currentResult);

  lastOperator = operator === '=' ? null : operator;
}

function modulus() {
  runOperation('%');
}

function add() {
  runOperation('+');
}

function subtract() {
  runOperation('-');
}

function multiply() {
  runOperation('x');
}

function divide() {
  runOperation('/');
}
