let firstNumber;
let secondNumber;

function addition() {
    getData();
    console.log(firstNumber, secondNumber);
    let result = firstNumber + secondNumber;
    document.getElementById('result').value = result;
    changeButtonColor('additionButton');
    restoreButtonColor('subtractButton');
    restoreButtonColor('multiplyButton');
    restoreButtonColor('divisionButton');
}

function subtraction() {
    getData();
    let result = firstNumber - secondNumber;
    document.getElementById('result').value = result;
    changeButtonColor('subtractButton');
    restoreButtonColor('additionButton');
    restoreButtonColor('multiplyButton');
    restoreButtonColor('divisionButton');
}

function multiplication() {
    getData();
    let result = firstNumber * secondNumber;
    document.getElementById('result').value = result;
    changeButtonColor('multiplyButton');
    restoreButtonColor('subtractButton');
    restoreButtonColor('additionButton');
    restoreButtonColor('divisionButton');
}

function division() {
    getData();
    if (secondNumber === 0) {
        alert("Cannot divide by zero!");
        return;
    }
    let result = firstNumber / secondNumber;
    document.getElementById('result').value = result;
    changeButtonColor('divisionButton');
    restoreButtonColor('subtractButton');
    restoreButtonColor('multiplyButton');
    restoreButtonColor('additionButton');
}

function clearForm() {
    document.getElementById('calculatorForm').reset();
    document.getElementById('result').value = '';
}

function getData() {
    firstNumber = parseFloat(document.getElementById('firstNumber').value);
    secondNumber = parseFloat(document.getElementById('secondNumber').value);
}

function changeButtonColor(buttonId) {
    document.getElementById(buttonId).style.backgroundColor = "#6c757d";
    document.getElementById(buttonId).style.borderColor = "#6c757d";
}
function restoreButtonColor(buttonId) {
    document.getElementById(buttonId).style.backgroundColor = "#0d6efd";
    document.getElementById(buttonId).style.borderColor = "#0d6efd";

}