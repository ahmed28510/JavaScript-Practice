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
var abh = 8;
var bah = 6;
console.log("abh =", abh, "& bah =", bah);
console.log("Increment of abh is:", "abh++ =", ++abh);
console.log("Decrement of bah is:", "bah-- =", --bah);

// Assignment Operators
var abh = 10;
var bah = 5;
console.log("abh =", abh, "& bah =", bah);
abh += bah;
console.log("After abh += bah, abh =", abh);
bah -= abh;
console.log("After bah -= abh, bah =", bah);
bah *= abh;
console.log("After bah *= abh, bah =", bah);
bah /= abh;
console.log("After bah /= abh, bah =", bah);
bah %= abh;
console.log("After bah %= abh, bah =", bah);


// Comparison Operators
var abh = 10;
var bah = 5;
console.log("abh =", abh, "& bah =", bah);
console.log("Is abh equal to bah?", abh == bah);
console.log("Is abh not equal to bah?", abh != bah);
console.log("Is abh greater than bah?", abh > bah);
console.log("Is abh less than bah?", abh < bah);
console.log("Is abh greater than or equal to bah?", abh >= bah);
console.log("Is abh less than or equal to bah?", abh <= bah);

// Logical Operators
var abh = true;
var bah = false;
console.log("abh =", abh, "& bah =", bah);
console.log("Is abh and bah both true?", abh && bah);
console.log("Is either abh or bah true?", abh || bah);
console.log("Is abh not true?", !abh);


// Ternary Operator
var age = 18;
var isAdult = (age >= 18) ? "Yes, you are an adult." : "No, you are not an adult.";
console.log("Age:", age);
console.log(isAdult);

// Typeof Operator
var abh = 10;
var bah = "Hello";
console.log("Type of abh:", typeof abh);
console.log("Type of bah:", typeof bah);

// Instanceof Operator
var date = new Date();
console.log("Is date an instance of Date?", date instanceof Date);

// Delete Operator
var obj = { name: "John", age: 30 };
console.log("Before delete:", obj);
delete obj.age;
console.log("After delete:", obj);

// Comma Operator
var abh = (1, 2, 3);
console.log("Value of abh after comma operator:", abh);

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
// Function Expression
var add = function (a, b) {
    var sum = a + b;
    var difference = a - b;
    var product = a * b;
    var quotient = a / b;
    var userInput = prompt("Enter a number to add to the sum:");
    var userInputNumber = parseFloat(userInput);
    sum += userInputNumber;
    return sum;
};

// function call
var result = add(5, 3);
var result2 = greet("Alice");
if (result2 === "Hello, Alice!") {
    for (let i = 0; i < 3; i++) {
        console.log("The greeting is for Alice.");
    }  if (result2 !== "Hello, Alice!") {
        console.log("The greeting is not for Alice.");
    }
}
console.log("Result of addition:", result);

// Arrow Function
var multiply = (a, b) => {
    var product = a * b;
    var userInput = prompt("Enter a number to multiply with the product:");
    var userInputNumber = parseFloat(userInput);
    product *= userInputNumber;
    return product;
};

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


// Sir code taking input and making table from JavaScript and append the value in it

var todos = [];

function addTodo(e) {
  e.preventDefault();
  todos.push(inputValue);

  // Fetching data
  var inputValue = document.getElementById('todo-input').value;
  var todoTable = document.getElementById('todo-table');
  var todoTableWithoutJunk = removeJunkArtifacts(todoTable);
  var tableBody = todoTableWithoutJunk.childNodes[0];
  var tableHeading = document.createElement('tr');
  var tableHeadingCell = document.createElement('th');
  var tableHeadingCellText = document.createTextNode('Tasks');

  tableBody.innerHTML = '';
  
  tableBody.appendChild(tableHeading);


  for (var i = 0; i < todos.length; i++) {
    
    // creating elements node
    var tableRow = document.createElement('tr');
    var tableCell1 = document.createElement('td');
    var tableCell2 = document.createElement('td');
    var tableCell1_Text_Node = document.createTextNode(todos[i]);
    var tableCell2_Button = document.createElement('button');
    var button_Text_Node = document.createTextNode('Remove');
    tableCell2_Button.appendChild(button_Text_Node);

    // appending/adding elements node
    tableHeadingCell.appendChild(tableHeadingCellText);
    tableHeading.appendChild(tableHeadingCell);
    tableCell1.appendChild(tableCell1_Text_Node);
    tableCell2.appendChild(tableCell2_Button);
    tableRow.appendChild(tableCell1);
    tableRow.appendChild(tableCell2);
    tableBody.appendChild(tableRow);


  }
}


// Making table from JavaScript Ahmed's code

var todoContainer = document.getElementById('todo-container')
var todoTable = document.createElement('table');
todoTable.setAttribute('border','1px solid black')
todoContainer.appendChild(todoTable);

var tbody = document.createElement('tbody');
todoTable.appendChild(tbody);

var tableRow1 = document.createElement('tr');
tbody.appendChild(tableRow1);

var tableHeading = document.createElement('th');
tableRow1.appendChild(tableHeading);


var tableHeading_Text_Node = document.createTextNode('Task')
tableHeading.appendChild(tableHeading_Text_Node);


var tableRow2 = document.createElement('tr')
tbody.appendChild(tableRow2);

var tableCell1 = document.createElement('td');
tableRow2.appendChild(tableCell1);

var tableCell_Text_Node = document.createTextNode('Ahmed');
tableCell1.appendChild(tableCell_Text_Node);

var tableCell2 = document.createElement('td');
tableRow2.appendChild(tableCell2);

var button = document.createElement('button');
var button_Text_Node = document.createTextNode('Remove');
button.appendChild(button_Text_Node);
tableCell2.appendChild(button);

console.log(todoContainer)


// Bilal code about making table

var todoContainer = document.getElementById('todo-container');

var table = document.createElement('table');
table.setAttribute('id', 'todo-table');
table.setAttribute('border', '1 px solid black');

var tbody = document.createElement('tbody');

var tableRow1 = document.createElement('tr');
var tableRow2 = document.createElement('tr');
var button=document.createElement('button')
var button_text_node=document.createTextNode('Remove')
button.appendChild(button_text_node);

var tableHeading1 = document.createElement('th');
var tableHeading1_text_node = document.createTextNode('task');

tableHeading1.appendChild(tableHeading1_text_node);

var tablecell1 = document.createElement('td');
var tablecell2 = document.createElement('td');

var tablecell1_text_node = document.createTextNode('bilal');
var tablecell2_text_node = document.createTextNode();

tablecell2.appendChild(button);
tablecell1.appendChild(tablecell1_text_node);
tablecell2.appendChild(tablecell2_text_node);

tableRow1.appendChild(tableHeading1);

tableRow2.appendChild(tablecell1);
tableRow2.appendChild(tablecell2);

tbody.appendChild(tableRow1);
tbody.appendChild(tableRow2);

table.appendChild(tbody);
todoContainer.appendChild(table);


// Make a dynamic table using objects

var plans = [{
  name: 'basic',
  monthly: '$3.99',
  space: '100GB',
  data_limit: '1000GB/month',
  site_pages: '10'
}, {
  name: 'professional',
  monthly: '$5.99',
  space: '500GB',
  data_limit: '5000GB/month',
  site_pages: '50'
},
{
  name: 'ultimate',
  monthly: '$9.99',
  space: '2000GB',
  data_limit: '20000GB/month',
  site_pages: '500'
}];

var benefits = [{
  name: 'Monthly',
  key: 'monthly'
}, {
  name: 'Disk Space',
  key: 'space'
}, {
  name: 'Data Transfer',
  key: 'data_limit'
}, {
  name: 'Site Pages',
  key: 'site_pages'
}];


var container = document.getElementById('table-container');
var table = document.createElement('table');
var headerRow = document.createElement('tr');
var emptyCell = document.createElement('th');
table.setAttribute('border', '1px solid black');
table.setAttribute('class', 'table');
headerRow.appendChild(emptyCell);

// code to dynamically appending table header row
for (var i = 0; i < plans.length; i++) {
  var planTitle = document.createElement('th');
  var planTitleText = document.createTextNode(plans[i].name);
  planTitle.setAttribute('class', plans[i].name)
  planTitle.appendChild(planTitleText);
  headerRow.appendChild(planTitle);
};
table.appendChild(headerRow);


for (var i = 0; i < benefits.length; i++) {
  //Benefit Title Row
  var benefitRow = document.createElement('tr');
  var benefitType = document.createElement('td');
  var benefitTitle = document.createTextNode(benefits[i].name);
  benefitType.appendChild(benefitTitle);
  benefitRow.appendChild(benefitType);



  for (var j = 0; j < plans.length; j++) {
    var planTitle = document.createElement('td');
    var planTitleText = document.createTextNode(plans[j][benefits[i].key]);
    planTitle.appendChild(planTitleText);
    benefitRow.appendChild(planTitle)
  }

  table.appendChild(benefitRow)
}
container.appendChild(table)

// Form Validation

function checkUsername(username) {
  if (username.includes(' ')) {
    throw 'No empty spaces are allowed in username';
  };

  if (username.length < 5) {
    throw 'Username length should be greater than 5';
  };
};


function checkPassword(password, confirm_password) {
  var specialChar = ['#', '@', '%', ';'];
    var passwordRules = {
    hasNumber: false,
    hasSpecialCharacters: false
  };

  if (password !== confirm_password) {
       throw 'Password and Confirm Password is not matching'
  };

  if (password.includes(' ') || confirm_password.includes(' ')) {
    throw 'No empty spaces are allowed in password';
  };
  // m7@uhazzib
    for (var i = 0; i < password.length; i++) {
    var currentCharInNum = Number(password[i]);
    var isCurrentCharNaN = isNaN(currentCharInNum);

    if(!isCurrentCharNaN) {
      passwordRules.hasNumber = true;
    };

    if(specialChar.includes(password[i])) {
      passwordRules.hasSpecialCharacters = true;
    }

      if(specialChar.includes(password[i])) {
      passwordRules.hasSpecialCharacters = true;
    }

  };

  if(!passwordRules.hasNumber) {
    throw 'Password should contain number';
  }

  if(!passwordRules.hasSpecialCharacters) {
    throw 'Password should contain special characters';
  }
};
function signup(e) {
  e.preventDefault();

  try {
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm-password').value;
    if (!username || !password || !confirm_password || !email) {
      throw 'Please provide required fields';
    };

    checkUsername(username);
    checkPassword(password, confirm_password)

  } catch (error) {
    alert(error);
  }
}


