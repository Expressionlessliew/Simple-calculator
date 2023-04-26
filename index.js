const check = document.getElementById("check");
const check2 = document.getElementById("check2");
const nombor = /^\d+$/;
let isans;
let isans2;

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
number2.addEventListener("input", onCheck2);
button.addEventListener("click", Calculate);
DELETE.addEventListener("click", clear);

function clear() {
  number1.value = "";
  number1.placeholder="input your first number";

  result.innerHTML = " ";
  check2.innerHTML = " ";

  number2.value = "";
  number2.placeholder="input your number";

  check.innerHTML = " ";
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
    
    } else {
      check.innerHTML = "invalid number";
    }
  }
}

function onCheck2() {
  isans2 = input2;
  if (isans2 != null) {
    if (nombor.test(isans2)) {
      
    } else {
      check2.innerHTML = "Invalid number";
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
