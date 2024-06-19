const obj1 = { a: 1, b: 2 };
const obj2 = obj1;
obj2.a = 3;
console.log(obj1.a);
// Answer: 3 (because obj2 is a reference to the same object as obj1)

const obj1 = { a: 1 };
const obj2 = Object.assign({}, obj1);
obj2.a = 2;
console.log(obj1.a);
// Answer: 1 (because Object.assign creates a shallow copy of obj1)

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.b.c = 3;
console.log(obj1.b.c);
// 3 (because the spread operator creates a shallow copy, so the nested object is still referenced)

const obj1 = { a: 1 };
const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.a = 2;
console.log(obj1.a);
// Answer: 1 (because JSON.parse(JSON.stringify(obj1)) creates a deep copy)

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = Object.assign({}, obj1);
obj2.b.c = 3;
console.log(obj1.b.c);
// 3 (because Object.assign creates a shallow copy, so the nested object is still referenced)

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.b.c = 3;
console.log(obj1.b.c);
// Answer: 2 (because JSON.parse(JSON.stringify(obj1)) creates a deep copy)

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.b = { c: 3 };
console.log(obj1.b.c);
console.log(obj2.b.c);
// Answer: 2, 3 (because the spread operator creates a shallow copy, but assigning a new object to b in obj2 does not affect obj1)

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj3);
// Answer: { a: 1, b: 2 }, { a: 1, b: 2 } (because Object.assign merges obj2 into obj1 and returns obj1)

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1, b: { ...obj1.b } };
obj2.b.c = 3;
console.log(obj1.b.c);
console.log(obj2.b.c);
// 2, 3 (because obj2.b is a new object created using spread, creating a shallow copy of obj1.b)

const obj1 = { a: 1, b: { c: { d: 2 } } };
const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.b.c.d = 3;
console.log(obj1.b.c.d);
console.log(obj2.b.c.d);
// Answer: 2, 3 (because JSON.parse(JSON.stringify(obj1)) creates a deep copy)

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = Object.assign({}, obj1);
obj2.b = { c: 3 };
const obj3 = Object.assign({}, obj1);
console.log(obj1.b.c);
console.log(obj2.b.c);
console.log(obj3.b.c);
// 2, 3, 2 (because obj2.b is a new object and obj3 is a shallow copy of the original obj1)

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = Object.assign({}, obj1);
obj2.b.c = 3;
const obj3 = Object.assign({}, obj1);
console.log(obj1.b.c);
console.log(obj2.b.c);
console.log(obj3.b.c);
// 3,3,3
