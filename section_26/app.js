// Library Land
const uid = Symbol("uid");
console.log(uid);

const user = {
  // id: "p1",
  [uid]: "p1",
  name: "Max",
  age: 30,
  [Symbol.toStringTag]: "User",
};

user[uid] = "p3";

// Appp Land => Using the Library

user.id = "p2"; // this should not be possible

console.log(user[Symbol("uid")]);
console.log(Symbol("uid") === Symbol("uid"));
console.log(user.toString());

const company = {
  curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  },
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

let employee = company.next();

while (!employee.done) {
  console.log(employee.value);
  employee = company.next();
}
