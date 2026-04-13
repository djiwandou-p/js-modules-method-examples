// 1. Define the initial data
const paymentMethod = "credit card";
const paymentNumber = "998877";
const date = "2026-04-13";

// 2. Generate the receipt number
// We use toUpperCase() to ensure all letters are capitalized [2].
// We use concat() to join the strings together in the specific format [2].
const receiptNumber = "INV/"
    .concat(paymentMethod.toUpperCase())
    .concat("/")
    .concat(paymentNumber)
    .concat("/")
    .concat(date);

console.log("Transaction Receipt:", receiptNumber);
// Output: INV/CREDIT CARD/998877/2026-04-13