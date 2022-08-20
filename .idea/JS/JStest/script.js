var h2 = document.getElementById('Result');
var result;

function handlePlusBtn() {
  var number1 = Number(document.getElementById("firstNumber").value);
  var number2 = Number(document.getElementById("secondNumber").value);

  result = number1 + number2;
  h2.innerText = 'Result : ' + result;
}
function handleMinusBtn() {
  var number1 = Number(document.getElementById("firstNumber").value);
  var number2 = Number(document.getElementById("secondNumber").value);

  result = number1 - number2;
  h2.innerText = 'Result : ' + result;
}
function handleMultiplicationBtn() {
  var number1 = Number(document.getElementById("firstNumber").value);
  var number2 = Number(document.getElementById("secondNumber").value);

  result = number1 * number2;
  h2.innerText = 'Result : ' + result;
}
function handleDivisionBtn() {
  var number1 = Number(document.getElementById("firstNumber").value);
  var number2 = Number(document.getElementById("secondNumber").value);

  result = number1/number2;
  h2.innerText = 'Result : ' + result;
}
