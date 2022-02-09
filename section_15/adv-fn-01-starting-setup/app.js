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

function createTaxCalulator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalulator(0.19)(200);
const calculateIncomeTaxAmount = createTaxCalulator(0.25)(200);

// console.log(calculateVatAmount(100));
// console.log(calculateVatAmount(200));
// console.log(calculateIncomeTaxAmount(200));

console.log(calculateVatAmount);
console.log(calculateIncomeTaxAmount);
