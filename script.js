let operator = '';
let first = 0;
let second = 0;
const display = document.querySelector('#display');
function addThem(first, second) {
    return (first + second);
}
function subtractThem(first, second) {
    return (first - second);
}
function multiplyThem(first, second) {
    return (first * second);
}
function divideThem(first, second) {
    return (first / second);
}
function operate(operator, first, second) {
    let output = (operator === 'plus') ? addThem(first, second) :
    (operator === 'minus') ? subtractThem(first, second) :
    (operator === 'times') ? multiplyThem(first, second) :
    (operator === 'divided') ? divideThem(first, second) :
    'error'
    return output;
}
function updateDisplay(num) {
    if (num === 'clear') {
        display.textContent = '0';
    } else if (display.textContent.length === 10) {
        return;
    } else {
        display.textContent = display.textContent + num;
    }
}
function updateOperator(op) {
    operator = op;
    first = parseFloat(display.textContent);
    updateDisplay('clear');
    };

function provideResult() {
    second = parseFloat(display.textContent);
    display.textContent = operate(operator, first, second);
}


const zero = document.querySelector('#zero');
zero.addEventListener('click', () => updateDisplay('0'));
const one = document.querySelector('#one');
one.addEventListener('click', () => updateDisplay('1'));
const two = document.querySelector('#two');
two.addEventListener('click', () => updateDisplay('2'));
const three = document.querySelector('#three');
three.addEventListener('click', () => updateDisplay('3'));
const four = document.querySelector('#four');
four.addEventListener('click', () => updateDisplay('4'));
const five = document.querySelector('#five');
five.addEventListener('click', () => updateDisplay('5'));
const six = document.querySelector('#six');
six.addEventListener('click', () => updateDisplay('6'));
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => updateDisplay('7'));
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => updateDisplay('8'));
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => updateDisplay('9'));

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => updateDisplay('clear'));
const unary = document.querySelector('#unary');
const percent = document.querySelector('#percent');
const divided = document.querySelector('#divided');
divided.addEventListener('click', () => updateOperator('divided'));
const times = document.querySelector('#times');
times.addEventListener('click', () => updateOperator('times'));
const minus = document.querySelector('#minus');
minus.addEventListener('click', () => updateOperator('minus'));
const plus = document.querySelector('#plus');
plus.addEventListener('click', () => updateOperator('plus'));
const dot = document.querySelector('#dot');
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => provideResult());





