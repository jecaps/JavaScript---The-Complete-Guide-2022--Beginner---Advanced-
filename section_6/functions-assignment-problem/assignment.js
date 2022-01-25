const sayHello = (name) => console.log("Hi " + name);

sayHello("Lilo");

const sayHello1 = (name, str) => console.log(str + " " + name);
const sayHello2 = () => console.log("Hello there!");
const sayHello3 = (name) => "Hi " + name;

sayHello1("Lilo", "Hey");
sayHello2();
console.log(sayHello3("Lilo"));

const sayHello4 = (name, str = "Hello there,") => console.log(str + " " + name);

sayHello4("Lilo", "Hey");
sayHello4("Lilo");

const checkInput = (cb, ...args) => {
  let ifEmpty = false;
  for (let arg of args) {
    if (!arg) {
      ifEmpty = true;
      break;
    }
  }
  if (!ifEmpty) {
    cb();
  }
};

checkInput(
  () => {
    console.log("None empty");
  },
  "Hi",
  "there",
  "Joe",
  "12"
);
