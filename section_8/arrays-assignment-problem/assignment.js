// 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const filteredNums = numbers.filter((num) => num > 5);
console.log(filteredNums);

const mappedNums = numbers.map((num) => ({ num: num }));
console.log(mappedNums);

const multipliedNums = numbers.reduce((prev, cur) => prev * cur, 1);
console.log(multipliedNums);

// 2
function findMax(...nums) {
  let maxNum = 0;
  for (let num of nums) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

console.log(findMax(...numbers));

// 3
function findMinMax(...nums) {
  let maxNum = nums[0];
  let minNum = nums[0];
  for (let num of nums) {
    if (num > maxNum) {
      maxNum = num;
    }
    if (num < minNum) {
      minNum = num;
    }
  }
  return [maxNum, minNum];
}

const [min, max] = findMinMax(...numbers);
console.log(min, max);

const numberSet = new Set();
numberSet.add(2);
numberSet.add(5);
numberSet.add(8);
numberSet.add(8);

console.log(numberSet);
