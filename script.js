let firstNumber;
let secondNumber;

function addition() {
    getData();
    console.log(firstNumber, secondNumber);
    let result = firstNumber + secondNumber;
    document.getElementById('result').value = result;
}

function subtraction() {
    getData();
    let result = firstNumber - secondNumber;
    document.getElementById('result').value = result;
}

function multiplication() {
    getData();
    let result = firstNumber * secondNumber;
    document.getElementById('result').value = result;
}

function division() {
    getData();
    if (secondNumber === 0) {
        alert("Cannot divide by zero!");
        return;
    }
    let result = firstNumber / secondNumber;
    document.getElementById('result').value = result;
}

function clearForm() {
    document.getElementById('calculatorForm').reset();
    document.getElementById('result').value = '';
}

function getData() {
    firstNumber = parseFloat(document.getElementById('firstNumber').value);
    secondNumber = parseFloat(document.getElementById('secondNumber').value);
}
