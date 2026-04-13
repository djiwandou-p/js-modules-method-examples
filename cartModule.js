// Function to check if an item exists in the cart list
function isExist(itemList, targetItem) {
    // Returns true if the item is found, false otherwise
    return itemList.includes(targetItem);
}

// Exporting the function so it can be accessed by other modules [5]
module.exports = { isExist };