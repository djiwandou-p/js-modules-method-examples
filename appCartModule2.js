// Importing the required functions from the internal module [2]
const { addItem, removeLastItem, showCart } = require("./cartModule2");

// Initial shopping cart array [4]
let shoppingCart = ['Phone', 'Laptop', 'Steam Deck', 'PS5'];

// 1. Add a shopping item to the shopping cart [5]
addItem('Webcam'); 

// 2. Change your mind and remove 1 latest shopping item only [5]
removeLastItem();

// 3. Show the shopping item list [5]
showCart();