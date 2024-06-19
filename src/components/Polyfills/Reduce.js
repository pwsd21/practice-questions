if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    // Check if `this` is null or undefined
    if (this === null || this === undefined) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    // Check if `callback` is not a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = Object(this); // Convert `this` to object (Array) using Object()
    const length = array.length >>> 0; // Convert array length to unsigned 32-bit integer
    let accumulator = initialValue === undefined ? undefined : initialValue; // Initialize accumulator with initialValue if provided

    for (let i = 0; i < length; i++) {
      if (i in array) {
        // Check if the index exists in the array
        if (accumulator === undefined) {
          accumulator = array[i]; // Set accumulator to the first element if initialValue is not provided
        } else {
          // Call the callback function with accumulator, current element, index, and the array itself
          accumulator = callback.call(
            undefined,
            accumulator,
            array[i],
            i,
            array
          );
        }
      }
    }

    // If accumulator is still undefined after iteration and initialValue was not provided, throw error
    if (accumulator === undefined) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    return accumulator; // Return the final accumulated value
  };
}

// Usage example
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((acc, curr) => acc + curr, 0); // Summing up all elements starting with an initial value of 0
console.log(sum); // Output: 15
