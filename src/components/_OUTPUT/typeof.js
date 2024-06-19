// Undefined
let a;
console.log(typeof a); // "undefined"

// Null
let b = null;
console.log(typeof b); // "object"

// String
let c = "Hello, world!";
console.log(typeof c); // "string"

// Number
let d = 42;
console.log(typeof d); // "number"

// Boolean
let e = true;
console.log(typeof e); // "boolean"

// Object
let f = { name: "Alice" };
console.log(typeof f); // "object"

// Array (also an object)
let g = [1, 2, 3];
console.log(typeof g); // "object"

// Function
function h() {}
console.log(typeof h); // "function"

// Symbol
let i = Symbol("sym");
console.log(typeof i); // "symbol"

// Variable not defined
console.log(typeof j); // "undefined" (assuming j is not declared)

// BigInt
let k = 123n;
console.log(typeof k); // "bigint"

// NaN (Not-a-Number)
let l = NaN;
console.log(typeof l); // "number"

// Infinity
let m = Infinity;
console.log(typeof m); // "number"
