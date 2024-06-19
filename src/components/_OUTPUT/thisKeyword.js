const person = {
  name: "Alice",
  greet: () => "Hello, " + this.name,
};
console.log(person.greet());

// Hello, undefined

const obj = {
  value: 10,
  increment: () => {
    const innerFunc = () => this.value++;
    innerFunc();
  },
};
obj.increment();
console.log(obj.value);
// OUTPUT: 10

const obj = {
  value: 10,
  increment: function () {
    const innerFunc = () => this.value++;
    innerFunc();
  },
};
obj.increment();
console.log(obj.value);

// OUTPUT: 11

const person = {
  age: 25,
  grow: () => {
    setTimeout(() => {
      this.age++;
      console.log(this.age);
    }, 1000);
  },
};
person.grow();

// NaN after 1 sec

const person = {
  age: 25,
  grow: function () {
    setTimeout(() => {
      this.age++;
      console.log(this.age);
    }, 1000);
  },
};
person.grow();

// 26 after 1 sec
