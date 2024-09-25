let calculation = '';
console.log(calculation)

function calcLogic(value) {
    if (value == '=') {
        calculation = eval(calculation);
    } else {
        calculation += value;
    }
    console.log(calculation)
}
