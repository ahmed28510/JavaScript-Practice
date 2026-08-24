// Simple Arithmetic Operations
let a = 10;
let b = 5;
console.log("a =", a, "& b =", b);
console.log("Addition of a and b is:", "a + b =", a + b);
console.log("Subtraction of a and b is:", "a - b =", a - b);
console.log("Multiplication of a and b is:", "a * b =", a * b);
console.log("Division of a and b is:", "a / b =", a / b);
console.log("Modulus of a and b is:", "a % b =", a % b);

//Unary Operators
var a = 8;
var b = 6;
console.log("a =", a, "& b =", b);
console.log("Increment of a is:", "a++ =", ++a);
console.log("Decrement of b is:", "b-- =", --b);

// Assignment Operators
var a = 10;
var b = 5;
console.log("a =", a, "& b =", b);
a += b;
console.log("After a += b, a =", a);
a -= b;
console.log("After a -= b, a =", a);
a *= b;
console.log("After a *= b, a =", a);
a /= b;
console.log("After a /= b, a =", a);
a %= b;
console.log("After a %= b, a =", a);


// Comparison Operators
var a = 10;
var b = 5;
console.log("a =", a, "& b =", b);
console.log("Is a equal to b?", a == b);
console.log("Is a not equal to b?", a != b);
console.log("Is a greater than b?", a > b);
console.log("Is a less than b?", a < b);
console.log("Is a greater than or equal to b?", a >= b);
console.log("Is a less than or equal to b?", a <= b); 

// Logical Operators
var a = true;
var b = false;
console.log("a =", a, "& b =", b);
console.log("Is a and b both true?", a && b);
console.log("Is either a or b true?", a || b);
console.log("Is a not true?", !a);


// Ternary Operator
var age = 18;
var isAdult = (age >= 18) ? "Yes, you are an adult." : "No, you are not an adult.";
console.log("Age:", age);
console.log(isAdult);

// Typeof Operator
var a = 10;
var b = "Hello";
console.log("Type of a:", typeof a);
console.log("Type of b:", typeof b);

// Instanceof Operator
var date = new Date();
console.log("Is date an instance of Date?", date instanceof Date);

// Delete Operator
var obj = { name: "John", age: 30 };
console.log("Before delete:", obj);
delete obj.age;
console.log("After delete:", obj);

// Comma Operator
var a = (1, 2, 3);
console.log("Value of a after comma operator:", a);

// Conditional (Ternary) Operator
var age = 20;
var canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log("Age:", age);
console.log(canVote);

// Void Operator
function myFunction() {
    console.log("This function returns undefined.");
}   

// The void operator can be used to evaluate an expression and return undefined
var result = void myFunction();
console.log("Result of void operator:", result);

// Type Conversion
var num = "10";
var str = 20;
console.log("Type of num:", typeof num);
console.log("Type of str:", typeof str);

//Conditional Statements
let number = 10;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative."); 
} else {
    console.log("The number is zero.");
}

// looping Statements
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
    if (i === 3) {
        console.log("Breaking the loop at iteration 3.");
        break;
    }else {
        console.log("Continuing the loop.");
        continue;
    }
}
// Function Declaration
function greet(name) {
    for (let i = 0; i < 3; i++) {
        console.log("Hello, " + name + "!");
    }if (name === "Alice") {
        console.log("Welcome, Alice!");
    }else {
        console.log("You are not Alice.");
    }
    return "Hello, " + name + "!";

}

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


function submitAge() {
    var currentUserAge = Number(document.getElementById("age").value);
    var institute = document.getElementById("institute").value;
    console.log(institute, 'institute');
    var isUserAllowed;
    if (currentUserAge === 17 || currentUserAge === 18 && institute === 'saylani') {
        isUserAllowed = true;

    }
    console.log(isUserAllowed);
}


var number1 = prompt('Enter number 1')
var number2 = prompt('Enter number 2')
if (number1 === number2) {
    console.log('both numbers are equale', number1, number2)
} else if (number1 > number2) {
    console.log('number 1 is greather than number 2', number1)
} else {
    console.log('number 2 is greather than number 1', number2)
}




// // Password Vaidetor

var password = ("6785899");
var userpassword = prompt('Enter your password');
if (userpassword === password) {
    alert("your password is correct you are logedin")
} else {
    alert("your password is incorrect!")
}


var countries = ['Pakistan', 'Iran', 'UAE', 'Chaina', 'Nipal'];
console.log(countries)

var colors = ['Red', 'Purple', 'Green', 'Blue',];
console.log(colors);
var userinput1 = prompt("which color you want to add at the beginning of array");
colors.unshift(userinput1);
console.log(colors);
var userinput2 = prompt("which color you want to add at the end of array");
colors.push(userinput2);
console.log(colors);

colors.shift(userinput1);

colors.pop(userinput2);
console.log(colors);

var userinput3 = +prompt("Which position of index you want to delete from an array");
var userinput4 = +prompt("How many element you want to delete from an array");
colors.splice(userinput3, userinput4);
console.log(colors);


var array = ['This', 'Is', 'Batch', '22']
array = console.log(array);

var animals = ['dog', 'cat', 'donkey', 'zebra', 'lion'];
animals = animals.sort();
console.log(animals);

var userprompt = prompt('Enter table number');
var tablelimt = prompt('Enter table limit');
for (var i = 1; i <= tablelimt; i++) {
    document.write(userprompt + "x" + i + "=" + userprompt * i + "<br>");


}



var cleanestcities = ["Karachi", "Lahore", "Peshwar", "Hydrabad"]
var userprompt = prompt("Enter city name ");
var match = false;

for (var i = 0; i < cleanestcities.length; i++) {
    if (userprompt.toLocaleLowerCase() === cleanestcities[i].toLocaleLowerCase()) {
        match = true;
        alert(userprompt + " " + "is one of the cleanestcities");
    }
}
if (match == false) {
    alert(userprompt + " " + "is not one of the cleanestcities");
}



var city = prompt('Enter city name');
var initialChar = city.slice(0, 1);
var remainingChar = city.slice(1);
console.log(initialChar.toLocaleUpperCase() + remainingChar.toLocaleLowerCase());


var month = prompt('Enter month name');
if (month.length > 3) {
    var shortform = month.slice(0, 3);
}
console.log(shortform);


var str = prompt("Enter some text");
var numChar = str.length;
for (var i = 0; i < numChar; i++) {
    if (str.slice(i, i + 2) === "  ") {
        alert("No double spaces!");
        break;
    }
}

function submit() {
    var userInput = document.getElementById("textarea").value;
    var output = document.getElementById("output");
    var textIndex = userInput.indexOf("Israel");

    // 1 -> userInput.slice(0, 6) --> Enemie
    // 2 -> userInput.slice(1, 7) --> nemie

    // 18 -> userInput.slice(18, 24) --> Israel

    userInput = userInput.slice(0, textIndex) + "*******" + userInput.slice(textIndex + 7);
    for (var i = 0; i < userInput.length; i++) {
        if (userInput.slice(i, i + 6) === "Israel") {
            userInput = userInput.slice(0, i) + "*******" + userInput.slice(i + 7);
        }
    }

    //    // Enemie of Pak are Israel and USA
    output.innerHTML = userInput;

    console.log(userInput);
}

for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
        alert("Exclamation point found!");
        break;
    }
}

var userinput = prompt('Enter your name');
var index = userinput.indexOf("Pakistan");
console.log(index);


var string = 'Pakistan'
console.log(string.indexOf('i'));


var string2 = 'Bubble'
console.log(string2.lastIndexOf('b'));


console.log(string.charAt(3));


var string3 = 'Hydrabad';
console.log(string3.replace('Hydra', 'Islam'));

var string4 = 'we are the student of Batch#22 and attend modern web development and etocs class'
console.log(string4.replaceAll("and", "&"))

//Dies rolling

function roll() {
    var output = document.getElementById('output');
    var randomNumber = Math.random();
    var roundOfNumber = Math.ceil(randomNumber * 6);

    output.innerHTML = roundOfNumber;
}

var days = ['sun', 'mon', 'thes', 'wed', 'Thue', 'fri', 'sat'];
var rightnow = new Date();
var day = rightnow.getDay();
var month = rightnow.getMonth();
var dayofMonth = rightnow.getDate();
var currentYear = rightnow.getFullYear();
var currentHours = rightnow.getHours();
var currentMins = rightnow.getMinutes();
var currentsecs = rightnow.getSeconds();

console.log(day, 'day');
console.log(month, 'month');
console.log(dayofMonth, 'dayofMonth');
console.log(currentYear, 'currentYear');
console.log(currentHours, 'currentHours');
console.log(currentMins, 'currentMins');
console.log(currentsecs, 'currentsecs');

// console.log(days[day])

var ramadan = new Date("Februray 8,2027");
var currentDate = new Date();
var difference = (ramadan.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);
console.log(difference);


var month = rightnow.getMonth();
console.log(month, 'month');

var month = rightnow.getMonth();
var currentmonth = month2('Monday', 'Tuesday');
if (month === currentmonth) {

}

var days = ['sun', 'mon', 'thes', 'wed', 'Thue', 'fri', 'sat'];

var months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

var currentDate = new Date();

var currentDay = currentDate.getDay();
var currentMonth = currentDate.getMonth();

var currentDayName = days[currentDay];
var currentMonthName = months[currentMonth];

if (currentDay === 1 || currentDay === 2) {
    console.log('Its working day');
}

console.log(currentDayName, 'currentDayName');
console.log(currentMonthName, 'currentMonthName');

var currentDateMilliSec = currentDate.getTime();

var dayPassedSince1970 =
    currentDateMilliSec / (1000 * 60 * 60 * 24);

console.log(dayPassedSince1970, 'dayPassedSince1970');

var currentHours = currentDate.getHours();

if (currentHours > 11) {
    console.log("PM");
} else {
    console.log("AM");
}
console.log(currentHours, "currentHours");






var base = +prompt('Enter a Base^2 Value')
var perpendicular = +prompt('Enter a Perpendicular^2 Value')

function calculateSqure(num) {
    return num * num
   
}

function calculateHypotenuse() {
    var baseSqure = calculateSqure(base)
    var perpendicularSqure = calculateSqure(perpendicular)
    return baseSqure + perpendicularSqure
}

console.log(calculateHypotenuse())

function checkPalindrome(word) {
    return word.split('').reverse().join('')
}

console.log(checkPalindrome('hello'))

function checkPalindrome(word) {
    for (var i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length -1 -i]) {
            return false
        }

    }
    return true
}

console.log(checkPalindrome('momds'))


// Checking the longest word in a sentence using javascript or hand made function
function checkLongestWord(sentence) {
    var result;
    var length;
    var sentenceArray = sentence.split(" ");
    var longestlength = 0;
    for (var i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i].length > longestlength) {
            longestlength = sentenceArray[i].length;
            result = sentenceArray[i];
        }
    };
    return result;
}
console.log(checkLongestWord('Web Development Course'))



