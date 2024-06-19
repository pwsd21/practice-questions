if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback, thisArg) {
    // Check if `this` is null or undefined
    if (this == null) {
      throw new TypeError(
        "Array.prototype.myFilter called on null or undefined"
      );
    }
    // Check if `callback` is not a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const result = []; // Initialize an empty array to store filtered elements
    const array = Object(this); // Convert `this` to object (Array) using Object()
    const len = array.length >>> 0; // Convert array length to unsigned 32-bit integer

    // Iterate through each element in the array
    for (let i = 0; i < len; i++) {
      if (i in array) {
        // Check if the index exists in the array
        const element = array[i]; // Get the current element
        // Call the callback function with specified `thisArg`, element, index, and the array itself
        if (callback.call(thisArg, element, i, array)) {
          result.push(element); // If callback returns true, add element to result array
        }
      }
    }

    return result; // Return the filtered array
  };
}

// Usage example
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.myFilter(function (number) {
  return number % 2 === 0; // Filter condition: keep even numbers
});

console.log(evenNumbers); // Output: [2, 4]
