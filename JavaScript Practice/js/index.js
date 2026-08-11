// Simple Arithmetic Operations
let a = 10;
let b = 5;
console.log("a =", a,"& b =", b);
console.log("Addition of a and b is:", "a + b =", a + b);
console.log("Subtraction of a and b is:", "a - b =", a - b);
console.log("Multiplication of a and b is:", "a * b =", a * b);
console.log("Division of a and b is:", "a / b =", a / b);
console.log("Modulus of a and b is:", "a % b =", a % b);

// Simple Mathematical Operations looks like a calculator
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
var result = number1 + " " + operator + " " + number2 + " = " + output.innerHTML;   