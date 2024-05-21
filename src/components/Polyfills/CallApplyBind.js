// Call

Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  let key = Symbol();
  context[key] = this;
  const res = context[key](...args);
  delete context[key];
  return res;
};

// Apply

Function.prototype.myApply = function (context, argsArray) {
  context = context || window;
  let key = Symbol();
  context[key] = this;
  const res = context[key](...argsArray);
  delete context[key];
  return res;
};

// Bind

if (!Function.prototype.bind) {
  Function.prototype.bind = function (context, ...args) {
    const fn = this;
    return function (...boundArgs) {
      return fn.apply(context, args.concat(boundArgs));
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

const polyfillResult = greet.myCall(person, "Hello", "!");
console.log(polyfillResult);

const bindResult = greet.myCall(person, ["Hello", "!"]);
console.log(bindResult);

const result = greet.myBind(person, "Hello", "punc");
console.log(result());
