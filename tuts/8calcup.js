let calculation = localStorage.getItem('calculation') || '';

console.log(calculation)

function calcLogic(value) {
    localStorage.getItem("calculation")
    if (value == '=') {
        calculation = eval(calculation);
    } else {
        calculation += value;
    }
    saveCalc();
    console.log(calculation);
}

function saveCalc() {
    localStorage.setItem('calculation', calculation)
}
