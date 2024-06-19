if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArg) {
    // Check if `this` is null or undefined
    if (this == null) {
      throw new TypeError("Array.prototype.myMap called on null or undefined");
    }
    // Check if `callback` is not a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const result = new Array(this.length); // Create a new array to store mapped values
    const array = Object(this); // Convert `this` to object (Array) using Object()
    const len = array.length >>> 0; // Convert array length to unsigned 32-bit integer

    // Iterate through each element in the array
    for (let i = 0; i < len; i++) {
      if (i in array) {
        // Check if the index exists in the array
        // Call the callback function with specified `thisArg`, element, index, and the array itself
        result[i] = callback.call(thisArg, array[i], i, array);
      }
    }

    return result; // Return the new array with mapped values
  };
}

// Usage example
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.myMap(function (number) {
  return number * 2; // Map function: double each number
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
