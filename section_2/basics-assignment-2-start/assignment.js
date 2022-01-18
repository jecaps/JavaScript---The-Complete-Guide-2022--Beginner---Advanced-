const task3Element = document.getElementById("task-3");

function someFunction() {
  alert("Some text");
}

function someFunctionAgain(name) {
  alert(name);
}

someFunction();
someFunctionAgain("Andreas");

task3Element.addEventListener("click", someFunction);

function brandNewFunction(str1, str2, str3) {
  return str1 + " " + str2 + " " + str3;
}

alert(brandNewFunction("Andreas", "Jerika", "Kanz"));
