const product1 = {
    name: "Basketball",
    price: 2095,
}

const product2 = {
    name: "Golf Ball",
    price: 5000,
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


function isSameProduct(product1,product2) {
    
}
