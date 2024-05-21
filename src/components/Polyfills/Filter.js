if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.myFilter called on null or undefined"
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const result = [];
    const array = Object(this);
    const len = array.length >>> 0;

    for (let i = 0; i < len; i++) {
      if (i in array) {
        const element = array[i];
        if (callback.call(thisArg, element, i, array)) {
          result.push(element);
        }
      }
    }

    return result;
  };
}

// Usage

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.myFilter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]
