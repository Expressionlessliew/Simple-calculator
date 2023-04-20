const check = document.getElementById("check");
const nombor = /^\d+$/;
let isans;

//number
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const button = document.getElementById("save");
const result = document.getElementById("output");
const DELETE = document.getElementById("delete");
let input;
let input2;
let ans;

//function
number1.addEventListener("input", onChange);
number1.addEventListener("input", onCheck);
number2.addEventListener("input", onChange2);
button.addEventListener("click", Calculate);
DELETE.addEventListener("click", clear);

function clear() {
  number1.innerHTML = "";
  result.innerHTML = "";
  
  number2.innerHTML = "";
  check.innerHTML = "";
}

function onChange(event) {
  input = parseFloat(event.target.value);
}

function onChange2(event) {
  input2 = parseFloat(event.target.value);
}

function onCheck() {
  isans = input;
  if (isans != null) {
    if (nombor.test(isans)) {
      check.innerhtml = "Valid number";
    } else {
      check.innerHTML = "invalid number";
    }
  }
}

function Calculate() {
  let operator = document.getElementById("operator").value;
  console.log(operator);
  switch (operator) {
    case "+":
      ans = isans + input2;
      break;

    case "-":
      ans = isans - input2;
      break;

    case "/":
      ans = isans / input2;
      break;

    case "*":
      ans = isans * input2;
      break;

    default:
      ans = "invaild operator";
      break;
  }
  result.innerHTML = ans;
}
