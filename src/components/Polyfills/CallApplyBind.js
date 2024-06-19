// Call

Function.prototype.myCall = function (context, ...args) {
  context = context || window; // If context is not provided, default to global object (window)
  let key = Symbol(); // Create a unique key using Symbol
  context[key] = this; // Assign the function to the context object under the unique key
  const res = context[key](...args); // Invoke the function with provided arguments using spread operator
  delete context[key]; // Delete the key from the context object to clean up
  return res; // Return the result of the function invocation
};

// Apply

Function.prototype.myApply = function (context, argsArray) {
  context = context || window; // If context is not provided, default to global object (window)
  let key = Symbol(); // Create a unique key using Symbol
  context[key] = this; // Assign the function to the context object under the unique key
  const res = context[key](...argsArray); // Invoke the function with arguments array using spread operator
  delete context[key]; // Delete the key from the context object to clean up
  return res; // Return the result of the function invocation
};

// Bind

if (!Function.prototype.bind) {
  Function.prototype.bind = function (context, ...args) {
    const fn = this; // Save reference to the original function
    return function (...boundArgs) {
      // Return a new function that, when called, will execute the original function with bound arguments
      return fn.apply(context, args.concat(boundArgs)); // Use apply to invoke the original function with context and combined arguments
    };
  };
}

// USAGE
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = {
  name: "John",
};

// Using myCall
const callResult = greet.myCall(person, "Hello", "!");
console.log(callResult); // Output: Hello, John!

// Using myApply
const applyResult = greet.myApply(person, ["Hello", "!"]);
console.log(applyResult); // Output: Hello, John!

// Using bind (polyfilled version)
const bindResult = greet.bind(person, "Hello", "!"); // bind returns a function
console.log(bindResult()); // Output: Hello, Johnpunc
