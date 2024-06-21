let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculateResult();
    }
    firstOperand = parseFloat(currentInput);
    operator = op;
    currentInput = '';
}

function calculateResult() {
    if (currentInput === '' || operator === null || firstOperand === null) return;
    let secondOperand = parseFloat(currentInput);
    let result = 0;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    display.innerText = result;
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
}
