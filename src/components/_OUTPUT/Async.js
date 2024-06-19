async function test() {
  return "Hello";
}
console.log(test());
// Promise {<fulfilled>: "Hello"}

async function test() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
  });
  let result = await promise;
  console.log(result);
}
test();
console.log("End");
// End, Done! (after 1 second)

function outer() {
  var x = 10;
  return {
    getX: function () {
      return x;
    },
  };
}
const obj = outer();
console.log(obj.getX());
// 10
