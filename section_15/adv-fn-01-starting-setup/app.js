// Pure Function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

// Impure Function
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));
console.log(previousResult);

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("NEW HOBBY");
  console.log(h);
}

printHobbies(hobbies);
console.log(hobbies);

let multiplier = 1.1;

function createTaxCalulator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}

// multiplier = 1.2;

const calculateVatAmount = createTaxCalulator(0.19)(200);
const calculateIncomeTaxAmount = createTaxCalulator(0.25)(200);

// console.log(calculateVatAmount(100));
// console.log(calculateVatAmount(200));
// console.log(calculateIncomeTaxAmount(200));

console.log(calculateVatAmount);
console.log(calculateIncomeTaxAmount);

let userName = "Max";

function greetUser() {
  // let name = "Anna";
  console.log("Hi " + name);
}

let name = "Maximilian";

userName = "Manuel";

greetUser();

{
  const age = 30;
  console.log(age); // 30
}

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);
  return n === 1 ? x : x * powerOf(x, n - 1);
}
console.log(powerOf(2, 3)); // 2*2*2

const myself = {
  name: "Max",
  friends: [
    {
      name: "Manuel",
      friends: [
        {
          name: "Chris",
          friends: [
            {
              name: "Hari",
            },
            {
              name: "Amilia",
            },
          ],
        },
      ],
    },
    {
      name: "Julia",
    },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));
