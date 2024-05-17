// Call

if (!Function.prototype.call) {
  Function.prototype.call = function (context, ...args) {
    context = context || window;
    const uniqueId = "call_" + Date.now();
    context[uniqueId] = this;
    const result = context[uniqueId](...args);
    delete context[uniqueId];
    return result;
  };
}

// Apply

if (!Function.prototype.apply) {
  Function.prototype.apply = function (context, argsArray) {
    context = context || window;
    const uniqueId = "apply_" + Date.now();
    context[uniqueId] = this;
    const result = context[uniqueId](...argsArray);
    delete context[uniqueId];
    return result;
  };
}

// Bind

if (!Function.prototype.bind) {
  Function.prototype.bind = function (context, ...args) {
    const fn = this;
    return function (...boundArgs) {
      return fn.apply(context, args.concat(boundArgs));
    };
  };
}
