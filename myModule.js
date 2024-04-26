// myModule.js

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Export the function to make it accessible to other modules
module.exports = {
    isEven: isEven
};
