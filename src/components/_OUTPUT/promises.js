setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => {
  setTimeout(() => console.log("Timeout in Promise"), 0);
  console.log("Promise");
});
console.log("Immediate");

// Answer: Immediate, Promise, Timeout, Timeout in Promise

console.log("Start");
setTimeout(() => console.log("Timeout 1"), 0);
Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout in Promise"), 0);
});
console.log("End");

// Answer: Start, End, Promise 1, Timeout 1, Timeout in Promise

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved after 1 second");
  }, 1000);
});

promise1.then((result) => console.log(result));
setTimeout(() => console.log("Timeout"), 500);
console.log("End of script");

// Answer: End of script, Timeout (after 0.5 seconds), Resolved after 1 second (after 1 second)

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First resolve"), 100);
});

promise
  .then((result) => {
    console.log(result);
    return "Second resolve";
  })
  .then((result) => console.log(result));

setTimeout(() => console.log("Timeout 1"), 50);
setTimeout(() => console.log("Timeout 2"), 150);

// Answer: Timeout 1 (after 50ms), First resolve (after 100ms), Second resolve, Timeout 2 (after 150ms)

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Timeout in Promise");
    resolve("Resolved in Promise");
  }, 200);
});

setTimeout(() => console.log("setTimeout 1"), 100);
setTimeout(() => console.log("setTimeout 2"), 300);

promise.then((result) => console.log(result));
console.log("Immediate");

// Answer: Immediate, setTimeout 1 (after 100ms), Timeout in Promise (after 200ms), Resolved in Promise, setTimeout 2 (after 300ms)

setTimeout(() => console.log("setTimeout 1"), 0);
Promise.resolve()
  .then(() => console.log("Promise 1"))
  .then(() => console.log("Promise 2"));

(async () => {
  console.log("Async Start");
  await Promise.resolve();
  console.log("Async End");
})();

console.log("End");

// Answer: Async Start, End, Promise 1, Promise 2, Async End, setTimeout 1
