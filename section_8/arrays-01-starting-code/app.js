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

const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading"); // Adds elements at the end of the array
hobbies.unshift("Coding"); // Adds elements at the beginning of the array
const poppedValue = hobbies.pop(); // Removes elements from the end of the array
hobbies.shift(); // Removes elements from the beginning of the array
console.log(hobbies);

hobbies[1] = "Coding";
// hobbies[5] = "Reading"; // rarely used
console.log(hobbies, hobbies[4]);
