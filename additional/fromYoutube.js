console.log("Hello world");
// window.alert("HELLO")

let age1; // declaration
let age2 = 10; // assigment

let firstName = "Tanya" //string
let student = false // boolean
let myAge = 27; // number
console.log("I'm", myAge, "years old")

document.getElementById("p1").innerHTML = "Hello " + firstName; // string concatenation

// const PI = 3.14; //can't be reassigned

//operands(values, variables etc.)
//operators(+ - * / %)

let n = 20;
n = n - 1; // n+=1
n = n + 1; // n-=1
n = n * 2; // n*=2
n = n / 2; // n/=2
let extra = n % 3; // remainder of division
console.log(extra);

document.getElementById("button").onclick = function () {
    let username = document.getElementById("text").value;
    document.getElementById("label").innerHTML = "Hello " + username;
}

//type conversion
let x;
let y;
let o;

x = Number("25");
y = String(789);
o = Boolean("");
console.log(x, typeof x);
console.log(y, typeof y);
console.log(o, typeof o);

//Math
let PI = Math.PI;
console.log(PI);

let q = 4.4;
console.log(Math.round(q));

let w = 5.99;
console.log(Math.floor(w));
console.log(Math.ceil(w));

let kv = 4;
console.log(Math.pow(kv, 3));
console.log(Math.sqrt(kv));
console.log(Math.abs(kv)) //  It negates the native sign of a number and returns the relevant positive value

console.log(Math.max(q, w, kv));
console.log(Math.min(q, w, kv));

let random = Math.floor(Math.random() * 10) + 5;
console.log(random);

document.getElementById("btn").onclick = function () {

    let a = +document.getElementById("aSide").value;

    let b = +document.getElementById("bSide").value;

    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cSide").innerHTML = "Side C: " + c;
}
//******
let count = 0;
document.getElementById("decreaseBtn").onclick = function () {
    count--;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById('increaseBtn').onclick = function () {
    count++;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

// string methods

let text = "  Hello world";

console.log(text.length);
console.log(text.charAt(8));
console.log(text.indexOf("o"));
console.log(text.lastIndexOf("o"));
console.log(text.trim());
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.replaceAll("o", "*"));

let fullName = "Tetiana Korsun";

let firstNAme = fullName.slice(0, fullName.indexOf(" "));
let lastNAme = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstNAme);
console.log(lastNAme);

// method chaining - calling one method after another in the continuous line of code

let user = "Tetiana  ";

let firstLetter = user.charAt(0).toLowerCase().trim();
console.log(firstLetter);

// if statement - a basic form of decision making
let age = 10;

if (age < 0) {
    console.log("You haven't been born yet")
} else if (age > 65) {
    console.log("You are a senior citizen")
} else if (age > 20) {
    console.log("You are an adult ")
} else {
    console.log("you are a child")
}

// switch statement - examines a value for a match against many case clauses

let color = "red";

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("wait");
        break;
    case "green":
        console.log("go")
        break;
    default:
        console.log("wrong value")
}

// OR ||, && AND conditions.- give the ability to check more than 1 condition concurrently

let temperature = -5;

if (temperature > 0 && temperature <= 30) {
    console.log("It's warm outside")
} else {
    console.log("the weather is bad");
}

if (temperature < 0 || temperature > 35) {
    console.log("The weather is bad")
} else {
    console.log("the weather is good")
}

// ! NOT logical operator - reverse a conditional value

let temp = -20;

if (!(temp > 0)) {
    console.log("It's cold outside")
} else {
    console.log("It's warm outside")
}

let sunny = false;
if (!sunny) {
    console.log("It's cloudy outside")
} else {
    console.log("It's sunny outside")
}

// while - repeat some code while some condition is true

// let username = "";
// while (username === "" || username===null){
//     username=window.prompt("Enter your name")
// }
// console.log("Hello", username);

//do while - do smth,then check the condition, repeat if condition is true

// let username;
// do {
//     username=window.prompt("Enter your name")
// }while (username === "" || username===null)
// console.log("Hello " + username);

// for loop - repeat some code a certain amount of time

for (let a = 1; a <= 10; a++) {
    console.log(a);
}
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// break - breaks out of a loop entirely
// continue - skip a current iteration of a loop

for (let a = 0; a <= 10; a++) {
    if (a === 5) {
        break;
    }
    console.log(`The numbers is ${a}`)
}

for (let a = 0; a <= 10; a++) {
    if (a === 5) {
        continue;
    }
    console.log(`${a}`)
}

// nested loop - a loop inside another loop

// let symbol = prompt("Enter a sybmol");
// let rows = +prompt("Enter a number of rows");
// let columns = +prompt("Enter a number of columns");
//
// for (let a=1;a<=rows;a++){
//     for (let j=1;j<=columns;j++){
//         document.getElementById("myRectangle").innerHTML += symbol;
//     }
//     document.getElementById("myRectangle").innerHTML+='<br>';
// }

//function - define code once, and use it many times.

startProgram();

function startProgram() {
    let username = "Tetiana";
    let age = 30;

    happyBirthday(username, age);
}

function happyBirthday(name, age) {
    console.log(`Happy birthday ${name}. You are ${age}`)
}

// return - returns value back to the place where you invoked a function

let area = function (width, height) {
    return width * height;
}
console.log("The area is " + area(2, 5));

//ternary operator - shortcut for if/else statement
//condition ? true : false

let ageValue = 5;

ageValue < 0 ? console.log("Age can't be less than zero") : console.log(`You are ${ageValue} years old`)

// let - variables are limited to block scope {}
// var - variables are limited to function (){}

//global variable - is defined outside of any function
// if var will be global variable it can change browser's window properties

for (let i = 0; i < 3; i++) {
}
//console.log(i) //i is not defined

for (var a = 0; a < 3; a++) {
}
console.log(a) // the output : 3
//BUT
function some() {
    var b = 0;
}

// console.log(b); //b is not defined

// template literals - delimited with(`), allows embedded variables and expressions

let qwe = "Hello";
let asd = "world";
let embedded = `${qwe} ${asd}`;
console.log(embedded);

// toLocaleString() - returns a string with a language sensitive representation of this number
// number.toLocalString(locale,{options})

let myNum = 1234567.89;
console.log(myNum.toLocaleString())
console.log(myNum.toLocaleString('ua-UA', {style: "currency", currency: "UAH"}));
console.log(myNum.toLocaleString('sk-SK', {style: "currency", currency: "EUR"}));
console.log(myNum.toLocaleString('pl-PL', {style: "currency", currency: "PLN"}));

//Number guessing game

// const  answer = Math.floor(Math.random()*3+1);
// let guesses = 0;
//
// document.getElementById("submitBtn").onclick=function () {
//     let guess = document.getElementById("number").value;
//     guesses++;
//     console.log(guesses);
//     console.log("entered" + guess)
//     console.log("answer" + answer)
//
//     if (guess == answer){
//         alert(`The number is ${answer}. It took you ${guesses} guesses`);
//     }else if (guess<answer){
//         alert("Too small");
//     }else {
//         alert("Too large");
//     }
// }

// convert temp to Celsius or Fahrenheit

document.getElementById("submitTemp").onclick = function () {
    let temp = +document.getElementById("temp").value;

    if (document.getElementById("cItem").checked) {
        temp = toCelsius(temp);
        document.getElementById("result").innerHTML = temp + "°C";
    } else if (document.getElementById("fItem").checked) {
        temp = toFahrenheit(temp);
        document.getElementById("result").innerHTML = temp + "°F";
    } else {
        document.getElementById("result").innerHTML = "Select a unit"
    }
}

function toCelsius(temperature) {
    return (temperature - 32) * (5 / 9);
}

function toFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32
}

// array - an ordered list of multiple values
let fruits = ["banana", "kiwi", "apple", "peach", "melon"];
console.log(fruits);
console.log(fruits[0]);

fruits.push("pear"); // add to the end of an array
fruits.unshift("grape"); // add to the beginning of an array
fruits.pop();// removes last element
fruits.shift(); // removes first element
fruits.indexOf("kiwi");
console.log(fruits.length);

// iterate over arrays
let prices = [5, 3, 20, 99, 150];
for (let i = 0; i < prices.length; i++) {
    console.log(prices[i]);
}

for (let i = prices.length - 1; i >= 0; --i) {
    console.log(prices[i]);
}

for (let price of prices) {
    console.log(price);
}

// sort an array of strings (changes the original array)

// let sortFruits = fruits.sort((a,b)=>b.localeCompare(a));
// console.log(sortFruits);

let sortFruits = fruits.sort().reverse();
console.log(sortFruits)

// 2D array - an array of arrays

let vegetables = ["onions", "potatoes", "carrots"];
let meat = ["fish", "chicken", "pork"];


let groceryList = [vegetables, meat];
console.log(groceryList);

groceryList[1][1] = "beef";
for (const item of groceryList) {
    for (const eachElement of item) {
        console.log(eachElement);
    }
}

// spread operator - unpacks the elements

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Crabs", "Plankton"];

// class1.push(class2);
// console.log(class1);//['Spongebob', 'Patrick', 'Sandy', Array(3)]

class1.push(...class2);
console.log(class1); // ['Spongebob', 'Patrick', 'Sandy', 'Squidward', 'Mr.Crabs', 'Plankton']

let nums = [2, 63, 4, 88, 12, 36, 55];

//let maximum = Math.max(nums);
//console.log(maximum); //NaN

let maximum = Math.max(...nums); //"spread" its elements into individual arguments
console.log(maximum); //88

//rest parameters - represents an indefinite numbers of parameters

function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

let summary = sum(1, 5); // we can pass as more values as we wanted
console.log(summary);

// callback - a function that is passed as an argument to another function

function subtraction(a, b, callBack) {
    let result = a - b;
    callBack(result);
}

function displayConsole(output) {
    console.log(output);
}

subtraction(10, 6, displayConsole);

// array.forEach() - executes a provided callback function once for each array element

let students = ["marina", "vlad", "katerina"];

function capitalize(element, index, array) {
    return array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
    console.log(element)
}

students.forEach(capitalize);
students.forEach(print);

// array.map() - executes a provided callback function once for each array element AND creates a new array

let numbers1 = [1, 2, 3, 4, 5];
let squares = numbers1.map(square);
console.log(squares);

function square(a) {
    return Math.pow(a, 2);
}

// array.filter() - creates a new array with all elements that pass a certain condition specified by callback func

let greaterThanTwo = numbers1.filter(a => a > 2);
console.log(greaterThanTwo);

// array.reduce() - reduces an array into a single value

let prices2 = [10, 20, 30, 40, 50];
let reduce = prices2.reduce(checkOut);
console.log(`The total amount is ${reduce}$`);

function checkOut(total, number) {
    console.log(total)
    return total + number;
}

// array.sort() - sort elements in the array in place and return a sorted array

let grades = [80, 10, 50, 40, 60, 90];

function descendingSort(x, y) {
    return y - x;
}

function ascendingSort(x, y) {
    return x - y;
}

let sort = grades.sort(ascendingSort);
console.log(sort);

// arrow functions - compact alternative to a traditional functions

let numbers3 = [50,10,30,40,570,100]; [570,10,40,100,50,30];
numbers3.sort((a,b) => b-a).forEach(item => console.log(item));

//*****
let cards = ['ace','jack','queen','king','joker',6,7,8,9,10];
console.log(cards)
function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex !== 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex--;

        let temporaryVar = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryVar;
    }
    return array;
}
let shuffledCards = shuffle(numbers3);
console.log(shuffledCards);

// nested functions - func inside other func

let userName = "User586914_*_*";
let userInbox = 3;
function login() {

    displayUserName();
    displayUserInbox();
  function displayUserName() {
      console.log(`Welcome ${userName}`)
  }
  function displayUserInbox() {
      console.log(`You have ${userInbox} new messages`)
  }
}

login();

// Map - object that holds key-value pairs of any data type

const store = new Map([
   ["t-shirt",20],
    ["jeans",30],
    ["socks",10],
    ["underwear",50]
]);

store.forEach((value,key)=>console.log(`${key} ${value}`));

console.log(store.get("jeans"));
console.log(store.set("hat", 25));
console.log(store);

store.delete("socks");
console.log(store);
console.log(store.has("socks"));

// object - a group of properties and methods.
// Properties - what an object has
// Methods - what an object can do

const  car1 = {
    model:"Mustang",
    color:"red",
    year:2023,
    drive:function (){
        console.log("You drive the car");
    },
    brake:function () {
        console.log("You step on the brakes");
    }
}

console.log(car1);
console.log(car1.model);
console.log(car1.year);
car1.drive();

// "this" keyword - refers to the object we are currently working with
const  car2 = {
    model:"Mustang",
    color:"red",
    year:2023,
    drive:function (){
        console.log(`You drive the ${this.model}`);
    },
    brake:function () {
        console.log("You step on the brakes");
    }
}
car2.drive();

