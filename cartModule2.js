// Initial shopping cart array [4]
let shoppingCart = ['Phone', 'Laptop', 'Steam Deck', 'PS5'];

// Function to add a shopping item to the cart using push() [3, 4]
function addItem(item) {
    shoppingCart.push(item);
    console.log(`${item} added to the cart.`);
}

// Function to remove 1 latest shopping item using pop() [3, 4]
function removeLastItem() {
    const removedItem = shoppingCart.pop();
    console.log(`${removedItem} removed from the cart.`);
}

// Function to show the shopping item list as a string [3, 4]
function showCart() {
    console.log("Current Cart List:", shoppingCart.toString());
}

// Exporting the functions to be used in another module [1]
module.exports = { addItem, removeLastItem, showCart };