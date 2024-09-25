// function greet(name) {
//     if (!name) {
//         console.log("Hi there!")
//     } else {
//         console.log(`Hello ${name}!`)
//     }
// }

// greet("Shayne");
// greet();
// greet("John");
// greet();


// function convertToFahrenheit(celsius) {
//     tempInFahr = (celsius * 9 / 5) + 32;
//     return tempInFahr;
// }
// console.log(convertToFahrenheit(25));

// function convertToCelsius(fahrenheit) {
//     tempInCelsius = (fahrenheit - 32) * 5 / 9;
//     return tempInCelsius;
// }
// console.log(convertToCelsius(86));


// function convertTemperature(degrees, unit) {
//     function convertToCelsius(degrees) {
//         let tempInCelsius = (degrees - 32) * 5 / 9;
//         return tempInCelsius;
//     }
//     function convertToFahrenheit(degrees) {
//         let tempInFahr = (degrees * 9 / 5) + 32;
//         return tempInFahr;
//     }
//     if (unit === 'C') {
//         return convertToCelsius(degrees);
//     } else if (unit === 'F') {
//         return convertToFahrenheit(degrees);
//     } else {
//         throw new Error("nigga")
//     }
// }

// console.log(convertTemperature(86, 'x'))
// console.log(convertTemperature(25, 'F'))

function convertLength(length, from, to) {
    // 1 mile = 1.6km
    // 1 mile = 5280ft
    // 1km = 3281ft
    function convertToMiles(length) {
        let lengthInMiles = length * 1.6;
        return lengthInMiles;
    }
    function convertToKm(length) {
        let lengthInKm = length / 1.6; 
        return lengthInKm;
    }
    function convertMiToFt(length) {
        let lengthInFt = length * 5280;
        return lengthInFt;
    }
    function convertKmToFt(length) {
        let lengthInFt = length * 3281;
        return lengthInFt;
    }
    
    if (from === 'miles' && to === 'km') {
        return convertToKm(length);
    } else if (from === 'km' && to === 'miles') {
        return convertToMiles(length);
    } else if (from === 'km' && to === 'ft') { 
        return convertMiToFt(length);
    } else if (from === 'miles' && to === 'ft') { 
        return convertKmToFt(length);
    } else {
        console.log(`Invalid unit: ${from}`)
    }
    
}

console.log(convertLength(50, 'miles', 'km'))
console.log(convertLength(32, 'km', 'miles'))
console.log(convertLength(50, 'miles', 'km'))
console.log("")
console.log(convertLength(5, 'miles', 'km'))
console.log(convertLength(5, 'miles', 'ft'))
console.log(convertLength(5, 'km', 'ft'))
