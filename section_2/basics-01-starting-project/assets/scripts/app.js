const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult += enteredNumber; //Can also use the plus(+) sign in FRONT of the string to convert strings to numbers
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
