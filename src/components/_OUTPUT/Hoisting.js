console.log(x);
var x = 5;

// undefined

function foo() {
  console.log(a);
  var a = 10;
}
foo();
// undefined

console.log(foo());
function foo() {
  return "Hello";
}
// Hello;
console.log(foo);
function foo() {
  return "Hello";
}
function foo() {
  return "Hello";
}

var a = 1;
function test() {
  console.log(a);
  var a = 2;
  console.log(a);
}
test();

// Answer: undefined, 2 (because the local variable a inside the function is hoisted)

let a = 1;
function test() {
  console.log(a);
  var a = 2;
  console.log(a);
}
test();
// 1,2

var a = 1;
function test() {
  console.log(a);
  a = 2;
  console.log(a);
}
test();
// 1,2

console.log(a);
var a = 1;
function a() {}
console.log(a);

// function a() {}, 1 (because the function declaration is hoisted over the variable declaration, but the assignment a = 1 overrides the function)

function example() {
  console.log(value);
  let value = "Hoisting with let";
  console.log(value);
}
example();
// ReferenceError: Cannot access 'value' before initialization (because let does not hoist the variable declaration in the same way var does)
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);

// 1 (because the function a declaration inside b hoists and shadows the outer a variable within the function scope)
function test() {
  if (false) {
    var x = 1;
  }
  console.log(x);
}
test();
// Answer: undefined (because the x variable is hoisted, even though the code inside the if block does not execute)
