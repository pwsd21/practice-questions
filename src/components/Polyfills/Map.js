if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.myMap called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const result = new Array(this.length);
    const array = Object(this);
    const len = array.length >>> 0;

    for (let i = 0; i < len; i++) {
      if (i in array) {
        result[i] = callback.call(thisArg, array[i], i, array);
      }
    }

    return result;
  };
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.myMap(function (number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
