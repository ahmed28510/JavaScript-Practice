var number1 = + prompt("Enter the first number:");
var operator = prompt("Enter the operator");
var number2 = + prompt("Enter the second number:");

var output = document.getElementById("output");
if (operator === "+") {
    output.innerHTML = number1 + number2;
}
else if (operator === "-") {
    output.innerHTML = number1 - number2;
}
else if (operator === "*") {
    output.innerHTML = number1 * number2;
}
else if (operator === "/") {
    output.innerHTML = number1 / number2;
}