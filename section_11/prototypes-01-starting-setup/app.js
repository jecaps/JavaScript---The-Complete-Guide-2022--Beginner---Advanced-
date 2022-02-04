class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = "Max";

  constructor() {
    // super();
    this.age = 30;
    // this.greet = function() {...}
  }

  greet = () => {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  };

  // greet() {
  //   console.log(
  //     "Hi, I am " + this.name + " and I am " + this.age + " years old."
  //   );
  // }
}

// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   // this.greet = function() {...}

// }

// Person.prototype.greet() = function () {
//   console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.")
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object);

const p = new Person();
const p2 = new Person();
p.greet();
console.log(p);

const button = document.getElementById("btn");
button.addEventListener("click", p.greet);
