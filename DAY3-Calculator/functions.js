let currentInput = '';
let result = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    document.getElementById('display').value = '0';
}
function clearLastCharacter() {
    currentInput = currentInput.slice(0, -1); 
    document.getElementById('display').value = currentInput;
}
function calculateResult() {
    try {
        result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}
