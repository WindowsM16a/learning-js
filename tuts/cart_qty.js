var cart_qty = 0;

function updateCartQuantity(change) {
    if (change > 0 && change + cart_qty > 10) {
        alert("The cart is full")
        return;
    } 
    if (change < 0 && change + cart_qty < 0) {
        alert("The cart is empty")
        return;
    }

    cart_qty = cart_qty + change;

    if (change === 0) {
        console.log("Cart was cleared")
        return;
    }

    console.log(`Cart quantity: ${cart_qty}`)
    
}



// function updateCartQuantity(change) {
//     if (cart_qty <= change){
//         alert('Not enough items in the cart')
//         console.log(`Cart quantity: ${cart_qty}`);
//       } else{
//         cart_qty -= 2;
//         console.log(`Cart quantity: ${cart_qty}`);
//       }
// }


// var fahrenheit;
// var celsius;



// fahrenheit = (celsius * 9 / 5) + 32;

// fahrenheit = prompt("Enter the value for fahrenheit");
// celsius = ((fahrenheit - 32) * (5 / 9));

// console.log(celsius)

// process.stdin.on('data', data => {
//     console.log(`You typed: ${data.toString()}`);
//     process.exit();
// });
// console.log("Type something and press enter:");


