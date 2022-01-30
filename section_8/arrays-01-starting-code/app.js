// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(5);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["cooking", "sports"];
// const personalData = [30, "Max", { moreDetail: {} }];
// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading"); // Adds elements at the end of the array
// hobbies.unshift("Coding"); // Adds elements at the beginning of the array
// const poppedValue = hobbies.pop(); // Removes elements from the end of the array
// hobbies.shift(); // Removes elements from the beginning of the array
// console.log(hobbies);

// hobbies[1] = "Coding";
// // hobbies[5] = "Reading"; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, "Good Food");
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(-3, -1);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: "Max" }, { name: "Manuel" }];
// console.log(personData.indexOf({ name: "Manuel" }));

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === "Manuel";
// });

// manuel.name = "Anna";
// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === "Max";
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => a - b);
console.log(sortedPrices);
console.log(sortedPrices.reverse());

const filteredArray = prices.filter((price, index) => price > 6);
console.log(filteredArray);
