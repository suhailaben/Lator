let operator = '';
const display = document.querySelector('#display');
let history = [];
let accumulator = null;
let lightBulb = false;
function addThem(first, second) {
    return (Math.round(((first + second) + Number.EPSILON) * 100) / 100);
}
function subtractThem(first, second) {
    return (Math.round(((first - second) + Number.EPSILON) * 100) / 100);
}
function multiplyThem(first, second) {
    return (Math.round(((first * second) + Number.EPSILON) * 100) / 100);
}
function divideThem(first, second) {
    return (Math.round(((first / second) + Number.EPSILON) * 100) / 100);
}
function operate() {
    let output;
    if (accumulator !== null) {
        output = (operator === 'plus') ? addThem(accumulator, getLast()) :
        (operator === 'minus') ? subtractThem(accumulator, getLast()) :
        (operator === 'times') ? multiplyThem(accumulator, getLast()) :
        (operator === 'divided') ? divideThem(accumulator, getLast()) :
        'error'
    } else {
        output = (operator === 'plus') ? addThem(getFormer(), getLast()) :
        (operator === 'minus') ? subtractThem(getFormer(), getLast()) :
        (operator === 'times') ? multiplyThem(getFormer(), getLast()) :
        (operator === 'divided') ? divideThem(getFormer(), getLast()) :
        'error'
    }
    return output;
}
function updateDisplay(num) {
    if (lightBulb) {
        display.textContent = '';
        lightBulb = false;
    }
    if (num === 'clear') {
        display.textContent = '0';
    } else if (display.textContent.length === 10) {
        return;
    } else {
        if (display.textContent === '0'){
            display.textContent = num;
        } else {
            display.textContent = display.textContent + num;
        }
    }
}
function useOperator(op) {
    updateHistory(display.textContent);

    if (history.length > 1) {
        accumulator = operate()
    } 
    operator = op;
    lightBulb = true;
    };
function provideResult() {
    if (history.length === 0) {
        return;
    }
    updateHistory(display.textContent);
    display.textContent = operate();
    history = [];
}
function updateHistory(num) {
    history.push(parseFloat(num));
    return history;
}
function getLast() {
    let length = history.length;
    return history[(length - 1)];
}
function getFormer() {
    let length = history.length;
    return history[(length - 2)];
}
function clearCalc() {
    history = [];
    updateDisplay('clear');
    accumulator = null;
    operator = '';
}
function updateAccumulator(num) {
    accumulator = parseFloat(num);
}
function addDecimal() {
    if (display.textContent.includes('.')) {
        if (lightBulb) {
            updateDisplay('.')
        } else {
            return;
        }
    } else {
        updateDisplay('.')
    }
}
function changeUnary() {
    display.textContent = ( - (parseFloat(display.textContent)));
}
function getPercent() {
    let percent = display.textContent / 100;
    display.textContent = percent;
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
clear.addEventListener('click', clearCalc);
const unary = document.querySelector('#unary');
unary.addEventListener('click', changeUnary);
const percent = document.querySelector('#percent');
percent.addEventListener('click', getPercent);
const divided = document.querySelector('#divided');
divided.addEventListener('click', () => useOperator('divided'));
const times = document.querySelector('#times');
times.addEventListener('click', () => useOperator('times'));
const minus = document.querySelector('#minus');
minus.addEventListener('click', () => useOperator('minus'));
const plus = document.querySelector('#plus');
plus.addEventListener('click', () => useOperator('plus'));
const dot = document.querySelector('#dot');
dot.addEventListener('click', addDecimal);
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => provideResult());

document.addEventListener("keydown", KeyCheck);
function KeyCheck(e)
{
   var KeyID = e.keyCode;
   switch(KeyID)
   {case 8:
    if ((display.textContent).length === 1) {
        display.textContent = '0';
    } else {
        display.textContent = (display.textContent).slice(0, -1);
    }
      break; 
   }
}