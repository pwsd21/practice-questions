if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    if (this === null || this === undefined) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = Object(this);
    const length = array.length >>> 0;
    let accumulator = initialValue === undefined ? undefined : initialValue;

    for (let i = 0; i < length; i++) {
      if (i in array) {
        if (accumulator === undefined) {
          accumulator = array[i];
        } else {
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

    if (accumulator === undefined) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    return accumulator;
  };
}

const array = [1, 2, 3, 4, 5];
const sum = array.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
