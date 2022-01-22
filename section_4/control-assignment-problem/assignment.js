const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert("Your number reached the limit");
}

let arr = [8, 9, 2, 3, 5, 6];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let num of arr.reverse()) {
  console.log(num);
}

const anotherRandomNumber = Math.random();

if (
  (randomNumber > 0.7 && anotherRandomNumber > 0.7) ||
  randomNumber <= 0.2 ||
  anotherRandomNumber <= 0.2
) {
  alert("Higher than 0.7 or lower than 0.2");
}
