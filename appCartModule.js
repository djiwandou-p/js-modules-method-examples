// Importing the specific function from our internal module [7]
const { isExist } = require("./cartModule");

// Our shopping cart data
const shoppingCart = ['Phone', 'Laptop', 'Steam Deck', 'PS5'];
const itemToSearch = 'Laptop';

// Searching for the item and logging the result
if (isExist(shoppingCart, itemToSearch)) {
    console.log(`Success: ${itemToSearch} is in your shopping cart!`);
} else {
    console.log(`Alert: ${itemToSearch} was not found in your cart.`);
}