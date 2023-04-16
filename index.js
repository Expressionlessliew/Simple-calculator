const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const button = document.getElementById("save");

const result = document.getElementById("output");

let input;
let input2;
let ans;

number1.addEventListener("input", onChange);
number2.addEventListener("input", onChange2);
button.addEventListener("click", Calculate);

function onChange(event) {
  input = parseFloat(event.target.value);
}

function onChange2(event) {
  input2 =  parseFloat(event.target.value);
}

function Calculate() {
  let operator = document.getElementById("operator").value;
  console.log(operator)
  switch (operator) {
    case "+":
      ans = input + input2;
      break;

    case "-":
      ans = input - input2;
      break;

    case "/":
      ans = input / input2;
      break;

    case "*":
      ans = input * input2;
      break;

    default : 
       ans = "invaild operator";
       break;
  }
  result.innerHTML = ans
}
