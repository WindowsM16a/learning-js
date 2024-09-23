const date = new Date();
var hour = date.getHours();
var name = "Shayne";
var age = 6;
const isHoliday = !true;
const isEligible = !isHoliday && (age <= 6 || age >= 65);

// const message = (isEligible) ? "Discount" : "No discount";
// console.log(message);

if (isEligible) {
    console.log("Discount")
} else {
    console.log("No discount");
}
console.log(`Age: ${age}, Is Holiday: ${isHoliday}, Eligible for discount: ${isEligible}`);

// if (age <= 20 || age >= 65) {
//     console.log("Discount")
// } else {
//     console.log("No discount")
// }

// <= 6 or => 65
// console.log(hour);

// const message2 = (hour > 6 && hour < 12) ? `Good morning ${name}!` : (hour > 13 && hour < 117) ? `Good afternoon ${name}` : console.log`Good night ${name}!`;
// console.log(message2);

// if (hour > 6 && hour < 12) {
//     console.log(`Good morning ${name}!`)
// } else if (hour > 13 && hour < 17){
//     console.log(`Good afternoon ${name}!`)
// }else {
//     console.log(`Good night ${name}!`)
// }



