const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult += parseInt(userInput.value); //Can also use the plus(+) sign in FRONT of the string to convert strings to numbers
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);
