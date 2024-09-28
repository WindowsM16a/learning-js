const product1 = {
    name: "Basketball",
    price: 2095,
}

const product2 = {
    name: "Golf Ball",
    price: 5000,
}

const product3 = {
    name: "Pampers",
    price: 2095,
}

const product4 = {
    name: "Pampers",
    price: 2095,
}

console.log(product1);
console.log(product2);

// product1.price += 500;
// console.log(`the updated price: ${product1.price}`);

// product1['delivery-time'] = "3 days";

// console.log(product1);


function comparePrice(product1, product2) {
    if (product1['price'] < product2['price']) {
        console.log(product1)
    } else if (product2['price'] < product1['price']) {
        console.log(product2)
    } else {
        console.log("Prices are equal")
    }
}
comparePrice(product1, product2);


function isSameProduct(product3,product4) {
    if (product3.name === product4.name && product3.price === product4.price) {
        return true;
    } else {
        return false;
    }
}

console.log(isSameProduct(product3, product4));

var text = "GoOd MoRNINg ";
var resultLower = text.toLowerCase();
var resultUpper = text.toUpperCase();
var repeatTxt = resultLower.repeat(2);

console.log(resultLower);
console.log(resultUpper);
console.log(repeatTxt);
