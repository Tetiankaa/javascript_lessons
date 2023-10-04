//console.log("Hello world");
// window.alert("HELLO")

// let age1; // declaration
// let age2 = 10; // assigment
//
// let firstName = "Tanya" //string
// let student = false // boolean
// let myAge = 27; // number
// console.log("I'm", myAge, "years old")
//
// document.getElementById("p1").innerHTML = "Hello " + firstName; // string concatenation

// const PI = 3.14; //can't be reassigned

//operands(values, variables etc.)
//operators(+ - * / %)

// let n = 20;
// n = n - 1; // n+=1
// n = n + 1; // n-=1
// n = n * 2; // n*=2
// n = n / 2; // n/=2
// let extra = n % 3; // remainder of division
// console.log(extra);
//
// document.getElementById("button").onclick = function () {
//     let username = document.getElementById("text").value;
//     document.getElementById("label").innerHTML = "Hello " + username;
// }

//type conversion
// let x;
// let y;
// let o;
//
// x = Number("25");
// y = String(789);
// o = Boolean("");
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(o, typeof o);
//
// //Math
// let PI = Math.PI;
// console.log(PI);
//
// let q = 4.4;
// console.log(Math.round(q));
//
// let w = 5.99;
// console.log(Math.floor(w));
// console.log(Math.ceil(w));
//
// let kv = 4;
// console.log(Math.pow(kv, 3));
// console.log(Math.sqrt(kv));
// console.log(Math.abs(kv)) //  It negates the native sign of a number and returns the relevant positive value
//
// console.log(Math.max(q, w, kv));
// console.log(Math.min(q, w, kv));
//
// let random = Math.floor(Math.random() * 10) + 5;
// console.log(random);
//
// document.getElementById("btn").onclick = function () {
//
//     let a = +document.getElementById("aSide").value;
//
//     let b = +document.getElementById("bSide").value;
//
//     let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//
//     document.getElementById("cSide").innerHTML = "Side C: " + c;
// }
//******
// let count = 0;
// document.getElementById("decreaseBtn").onclick = function () {
//     count--;
//     document.getElementById("countLabel").innerHTML = count;
// }
//
// document.getElementById('increaseBtn').onclick = function () {
//     count++;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("resetBtn").onclick = function () {
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }

// string methods

// let text = "  Hello world";
//
// console.log(text.length);
// console.log(text.charAt(8));
// console.log(text.indexOf("o"));
// console.log(text.lastIndexOf("o"));
// console.log(text.trim());
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.replaceAll("o", "*"));
//
// let fullName = "Tetiana Korsun";
//
// let firstNAme = fullName.slice(0, fullName.indexOf(" "));
// let lastNAme = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstNAme);
// console.log(lastNAme);

// method chaining - calling one method after another in the continuous line of code

// let user = "Tetiana  ";
//
// let firstLetter = user.charAt(0).toLowerCase().trim();
// console.log(firstLetter);

// if statement - a basic form of decision making
// let age = 10;
//
// if (age < 0) {
//     console.log("You haven't been born yet")
// } else if (age > 65) {
//     console.log("You are a senior citizen")
// } else if (age > 20) {
//     console.log("You are an adult ")
// } else {
//     console.log("you are a child")
// }

// switch statement - examines a value for a match against many case clauses

// let color = "red";
//
// switch (color) {
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("wait");
//         break;
//     case "green":
//         console.log("go")
//         break;
//     default:
//         console.log("wrong value")
// }

// OR ||, && AND conditions.- give the ability to check more than 1 condition concurrently

// let temperature = -5;
//
// if (temperature > 0 && temperature <= 30) {
//     console.log("It's warm outside")
// } else {
//     console.log("the weather is bad");
// }
//
// if (temperature < 0 || temperature > 35) {
//     console.log("The weather is bad")
// } else {
//     console.log("the weather is good")
// }

// ! NOT logical operator - reverse a conditional value

// let temp = -20;
//
// if (!(temp > 0)) {
//     console.log("It's cold outside")
// } else {
//     console.log("It's warm outside")
// }
//
// let sunny = false;
// if (!sunny) {
//     console.log("It's cloudy outside")
// } else {
//     console.log("It's sunny outside")
// }

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

// for (let a = 1; a <= 10; a++) {
//     console.log(a);
// }
// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }
//
// // break - breaks out of a loop entirely
// // continue - skip a current iteration of a loop
//
// for (let a = 0; a <= 10; a++) {
//     if (a === 5) {
//         break;
//     }
//     console.log(`The numbers is ${a}`)
// }
//
// for (let a = 0; a <= 10; a++) {
//     if (a === 5) {
//         continue;
//     }
//     console.log(`${a}`)
// }

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

// startProgram();
//
// function startProgram() {
//     let username = "Tetiana";
//     let age = 30;
//
//     happyBirthday(username, age);
// }
//
// function happyBirthday(name, age) {
//     console.log(`Happy birthday ${name}. You are ${age}`)
// }

// return - returns value back to the place where you invoked a function

// let area = function (width, height) {
//     return width * height;
// }
// console.log("The area is " + area(2, 5));

//ternary operator - shortcut for if/else statement
//condition ? true : false

// let ageValue = 5;
//
// ageValue < 0 ? console.log("Age can't be less than zero") : console.log(`You are ${ageValue} years old`)

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

// let qwe = "Hello";
// let asd = "world";
// let embedded = `${qwe} ${asd}`;
// console.log(embedded);

// toLocaleString() - returns a string with a language sensitive representation of this number
// number.toLocalString(locale,{options})
//
// let myNum = 1234567.89;
// console.log(myNum.toLocaleString())
// console.log(myNum.toLocaleString('ua-UA', {style: "currency", currency: "UAH"}));
// console.log(myNum.toLocaleString('sk-SK', {style: "currency", currency: "EUR"}));
// console.log(myNum.toLocaleString('pl-PL', {style: "currency", currency: "PLN"}));

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

// document.getElementById("submitTemp").onclick = function () {
//     let temp = +document.getElementById("temp").value;
//
//     if (document.getElementById("cItem").checked) {
//         temp = toCelsius(temp);
//         document.getElementById("result").innerHTML = temp + "°C";
//     } else if (document.getElementById("fItem").checked) {
//         temp = toFahrenheit(temp);
//         document.getElementById("result").innerHTML = temp + "°F";
//     } else {
//         document.getElementById("result").innerHTML = "Select a unit"
//     }
// }

// function toCelsius(temperature) {
//     return (temperature - 32) * (5 / 9);
// }
//
// function toFahrenheit(temperature) {
//     return (temperature * 9 / 5) + 32
// }

// array - an ordered list of multiple values
// let fruits = ["banana", "kiwi", "apple", "peach", "melon"];
// console.log(fruits);
// console.log(fruits[0]);
//
// fruits.push("pear"); // add to the end of an array
// fruits.unshift("grape"); // add to the beginning of an array
// fruits.pop();// removes last element
// fruits.shift(); // removes first element
// fruits.indexOf("kiwi");
// console.log(fruits.length);

// iterate over arrays
// let prices = [5, 3, 20, 99, 150];
// for (let i = 0; i < prices.length; i++) {
//     console.log(prices[i]);
// }
//
// for (let i = prices.length - 1; i >= 0; --i) {
//     console.log(prices[i]);
// }
//
// for (let price of prices) {
//     console.log(price);
// }

// sort an array of strings (changes the original array)

// let sortFruits = fruits.sort((a,b)=>b.localeCompare(a));
// console.log(sortFruits);

// let sortFruits = fruits.sort().reverse();
// console.log(sortFruits)
//
// // 2D array - an array of arrays
//
// let vegetables = ["onions", "potatoes", "carrots"];
// let meat = ["fish", "chicken", "pork"];
//
//
// let groceryList = [vegetables, meat];
// console.log(groceryList);
//
// groceryList[1][1] = "beef";
// for (const item of groceryList) {
//     for (const eachElement of item) {
//         console.log(eachElement);
//     }
// }

// spread operator - unpacks the elements
//
// let class1 = ["Spongebob", "Patrick", "Sandy"];
// let class2 = ["Squidward", "Mr.Crabs", "Plankton"];
//
// // class1.push(class2);
// // console.log(class1);//['Spongebob', 'Patrick', 'Sandy', Array(3)]
//
// class1.push(...class2);
// console.log(class1); // ['Spongebob', 'Patrick', 'Sandy', 'Squidward', 'Mr.Crabs', 'Plankton']
//
// let nums = [2, 63, 4, 88, 12, 36, 55];
//
// //let maximum = Math.max(nums);
// //console.log(maximum); //NaN
//
// let maximum = Math.max(...nums); //"spread" its elements into individual arguments
// console.log(maximum); //88
//
// //rest parameters - represents an indefinite numbers of parameters
//
// function sum(...numbers) {
//     let total = 0;
//     for (const number of numbers) {
//         total += number;
//     }
//     return total;
// }
//
// let summary = sum(1, 5); // we can pass as more values as we wanted
// console.log(summary);
//
// // callback - a function that is passed as an argument to another function
//
// function subtraction(a, b, callBack) {
//     let result = a - b;
//     callBack(result);
// }
//
// function displayConsole(output) {
//     console.log(output);
// }
//
// subtraction(10, 6, displayConsole);
//
// // array.forEach() - executes a provided callback function once for each array element
//
// let students = ["marina", "vlad", "katerina"];
//
// function capitalize(element, index, array) {
//     return array[index] = element[0].toUpperCase() + element.substring(1);
// }
//
// function print(element) {
//     console.log(element)
// }
//
// students.forEach(capitalize);
// students.forEach(print);
//
// // array.map() - executes a provided callback function once for each array element AND creates a new array
//
// let numbers1 = [1, 2, 3, 4, 5];
// let squares = numbers1.map(square);
// console.log(squares);
//
// function square(a) {
//     return Math.pow(a, 2);
// }
//
// // array.filter() - creates a new array with all elements that pass a certain condition specified by callback func
//
// let greaterThanTwo = numbers1.filter(a => a > 2);
// console.log(greaterThanTwo);
//
// // array.reduce() - reduces an array into a single value
//
// let prices2 = [10, 20, 30, 40, 50];
// let reduce = prices2.reduce(checkOut);
// console.log(`The total amount is ${reduce}$`);
//
// function checkOut(total, number) {
//     console.log(total)
//     return total + number;
// }
//
// // array.sort() - sort elements in the array in place and return a sorted array
//
// let grades = [80, 10, 50, 40, 60, 90];
//
// function descendingSort(x, y) {
//     return y - x;
// }
//
// function ascendingSort(x, y) {
//     return x - y;
// }
//
// let sort = grades.sort(ascendingSort);
// console.log(sort);
//
// // arrow functions - compact alternative to a traditional functions
//
// let numbers3 = [50, 10, 30, 40, 570, 100];
// [570, 10, 40, 100, 50, 30];
// numbers3.sort((a, b) => b - a).forEach(item => console.log(item));
//
// //*****
// let cards = ['ace', 'jack', 'queen', 'king', 'joker', 6, 7, 8, 9, 10];
// console.log(cards)
//
// function shuffle(array) {
//     let currentIndex = array.length;
//
//     while (currentIndex !== 0) {
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex--;
//
//         let temporaryVar = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryVar;
//     }
//     return array;
// }
//
// let shuffledCards = shuffle(numbers3);
// console.log(shuffledCards);
//
// // nested functions - func inside other func
//
// let userName = "User586914_*_*";
// let userInbox = 3;
//
// function login() {
//
//     displayUserName();
//     displayUserInbox();
//
//     function displayUserName() {
//         console.log(`Welcome ${userName}`)
//     }
//
//     function displayUserInbox() {
//         console.log(`You have ${userInbox} new messages`)
//     }
// }
//
// login();
//
// // Map - object that holds key-value pairs of any data type
//
// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10],
//     ["underwear", 50]
// ]);
//
// store.forEach((value, key) => console.log(`${key} ${value}`));
//
// console.log(store.get("jeans"));
// console.log(store.set("hat", 25));
// console.log(store);
//
// store.delete("socks");
// console.log(store);
// console.log(store.has("socks"));
//
// // object - a group of properties and methods.
// // Properties - what an object has
// // Methods - what an object can do
//
// const car1 = {
//     model: "Mustang",
//     color: "red",
//     year: 2023,
//     drive: function () {
//         console.log("You drive the car");
//     },
//     brake: function () {
//         console.log("You step on the brakes");
//     }
// }
//
// console.log(car1);
// console.log(car1.model);
// console.log(car1.year);
// car1.drive();
//
// // "this" keyword - refers to the object we are currently working with
// const car2 = {
//     model: "Mustang",
//     color: "red",
//     year: 2023,
//     drive: function () {
//         console.log(`You drive the ${this.model}`);
//     },
//     brake: function () {
//         console.log("You step on the brakes");
//     }
// }
// car2.drive();
//
// // class - a blueprint for creating objects
// // constructor - method of a class accepts arguments and assigns properties
//
// class Player {
//     score = 0;
//
//     pause() {
//         console.log("You paused the game")
//     }
//
//     exit() {
//         console.log("You exited the game")
//     }
// }
//
// let player1 = new Player();
// player1.score += 5;
// console.log(player1);
// player1.exit();
// player1.pause();
//
// class Student {
//
//     constructor(name, age) {
//         this.age = age;
//         this.name = name;
//     }
//
//     study() {
//         console.log(`${this.name} is studying`)
//     }
// }
//
// let student1 = new Student("Tetiana", 27);
// console.log(student1);
// student1.study();
//
// // static - belongs to the class, not the objects
//
// // class Car {
// //     static numberOfCars = 0;
// //     constructor(model) {
// //         this.model = model;
// //         Car.numberOfCars +=1;
// //     }
// // }
// //
// // const car3 = new Car("Mustang");
// // const car4 = new Car("Corvette");
// // const car5 = new Car("BMW");
// // console.log(Car.numberOfCars)
//
// // inheritance - a child class can inherit all the methods and properties from another class
//
// // class Animal {
// //     eat(){
// //         console.log(`This ${this.name} is eating`);
// //     }
// //     sleep(){
// //         console.log(`This ${this.name} is sleeping`)
// //     }
// // }
// //
// // class Rabbit extends Animal{
// //         name = 'rabbit';
// //
// //     run(){
// //         console.log(`This ${this.name} is running`)
// //     }
// // }
// //
// // let rabbit = new Rabbit();
// // rabbit.run();
// // rabbit.eat();
// // rabbit.sleep();
//
// // super keyword - refers to the parent class. Commonly used to invoke constructor of a parent class.
//
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Dog extends Animal {
//
//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }
//
// let dog = new Dog("Big", 4, 20);
// console.log(dog);
//
// // get - binds an object property to a function when that property is accessed
// // set - binds an object property to a function when that property is assigned a value
//
// class Car {
//     constructor(power) {
//         this._power = power;
//         this._gas = 25;
//     }
//
//     get power() {
//         return `${this._power} hp`
//     }
//
//     get gas() {
//         return `${this._gas}L (${this._gas / 50 * 100})%`;
//     }
//
//     set gas(value) {
//         if (value > 50) {
//             this._gas = 50;
//         } else if (value < 0) {
//             this._gas = 0;
//         } else {
//             this._gas = value
//         }
//
//     }
// }
//
// let car6 = new Car(400);
// console.log(car6.power);
// car6.gas = -20;
// console.log(car6.gas)
//
// // anonymous objects - obj without a name, not directly referenced, no need for unique names
//
// class Card {
//     constructor(value, suit) {
//         this.value = value;
//         this.suit = suit;
//     }
// }
//
// let cards2 = [
//     new Card("A", "hearts"),
//     new Card("A", "spades"),
//     new Card("A", "diamonds"),
//     new Card("A", "clubs")
// ]
//
// cards2.forEach(card => console.log(`${card.value} ${card.suit}`));

// error - obj with a desc of smth went wrong (can't open a file, lose connection, user types incorrect input, type error)

// try{
//     let x =window.prompt("Enter a number");
//     x = Number(x);
//
//     if (isNaN(x)) throw new Error("That wasn't a number!");
//     if (x == "") throw new Error("That was empty");
//
//     console.log(`${x} is a number`)
// } catch (e){
//     console.log(e)
// } finally {
//     console.log("This always executes")
// }

// setTimeout - invokes a func after a number of milliseconds

// setTimeout(function () {
//     console.log("heloooooo")
// },3000);

// setInterval - repeatedly invokes a func after a number of milliseconds

// let count2 = 0;
// let max = 2;
// const myTimer = setInterval(function () {
//     count2 +=1;
//     console.log(count2);
//     if (count2>=max){
//         clearInterval(myTimer);
//         console.log('done')
//     }
// },1000)

// Date object is used to work with dates and times

//let date = new Date();
// console.log(date.getDate());
// console.log(date.getFullYear())
// console.log(date.getMonth()); // current month - 1
// console.log(date.getDay()); // the number of current day of a week from Monday
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
//
// console.log(date.setFullYear(2024));
// console.log(date.setMonth(2));
// console.log(date.setHours(11));
// let date1 = new Date(2024,7,2,4,30,25,3);
// console.log(date1);
// let date2 = new Date("July 5, 2025 18:30:36");
// console.log(date2);

// function formatDate(date) {
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getUTCDate();
//
//     return `${day}.${month}.${year}`
// }
//
// console.log(formatDate(date));

// clock program
//
// const oclock = document.getElementById('oclock');
// updateTime();
// setInterval(updateTime, 1000)
//
// function updateTime() {
//     let date = new Date();
//     oclock.innerHTML = formatTime(date);
//
//     function formatTime(date) {
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let amOrPm = hours >= 12 ? 'PM' : 'AM';
//
//         hours = (hours % 12) || 12;
//         hours = formatZeroes(hours);
//         minutes = formatZeroes(minutes);
//         seconds = formatZeroes(seconds);
//         return `${hours}:${minutes}:${seconds} ${amOrPm}`;
//     }
//     function formatZeroes(time) {
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;
//     }
// }

// synchronous code - in an ordered sequence

// asynchronous code - out of sequence (access a database, fetch a file)

// console.log('start synchronous code');
// setTimeout(()=>console.log('asynchronous code end execution'),3000);
// console.log('end synchronous code');

// console.time - to track how long an operation takes time to complete

// console.time('Response time');
//
// console.timeEnd('Response time');

// promise - object that encapsulates the result of an asynchronous operation

// const promise = new Promise((resolve, reject)=>{
//     let fileLoaded = true;
//     if (fileLoaded){
//         resolve("file loaded")
//     }else {
//         reject("FILE NOT LOADED")
//     }
// });
//
// promise.then(value => console.log(value))
//     .catch(error => console.log(error));

// const  wait = time => new Promise(resolve => {
//     setTimeout(resolve,time)
// })
//     wait(3000).then(()=>console.log('thanks for waiting'));

// async - makes a function return a promise

// async function loadFile(){
//     let fileLoaded = true;
//
//     if (!fileLoaded){
//         return 'File loaded';
//     } else {
//         throw  'File not loaded';
//     }
// }
//
// loadFile().then(value => console.log(value)).catch(e=>console.log(e));

//await - make an async function wait for a Promise
// async function loadFile(){
//     let fileLoaded = true;
//
//     if (fileLoaded){
//         return 'File loaded';
//     } else {
//         throw  'File not loaded';
//     }
// }
//
// async function startProcess(){
//     try {
//         let message = await loadFile();
//         console.log(message);
//     }catch (e) {
//         console.log(e);
//     }
// }
// startProcess();

// modulus - import,export items from other modules into your current module (script -> type:"module")

//import * as myModule from  './javascriptFile.js';
// import {item1, item2, ...} from './javascriptFile.js';

// DOM - document object model (API) - an interface for changing the content of a page
//
// const h1 = document.getElementById('heading');
// h1.style.color = 'pink';
//
// const fruits = document.getElementsByName('fruits');
// console.log(fruits);
// fruits.forEach(element => console.log(element.value))
//
// const forItems = document.querySelectorAll("[for]");
// forItems.forEach(value => console.log(value));
//
// const heading1 = document.querySelectorAll("h1");
// console.log(heading1);

//
// let element = document.getElementById('fruits');
// let firstChild = element.firstElementChild;
// firstChild.style.background = 'yellow';
// let lastChild = element.lastElementChild;
// lastChild.style.background = 'lightgreen';
//
// let element2 = document.getElementById('vegetables');
// console.log(element2.parentElement);
// console.log(element2.previousElementSibling);
// console.log(element2.nextElementSibling);
// console.log(element2.children);
// console.log(Array.from(element2.children));
//
// // add/change HTML elements
//
// const nameTag = document.createElement('h1');
// nameTag.textContent = "HELLO";
// document.body.appendChild(nameTag);
//
// let listItem = document.createElement('li');
// listItem.textContent = 'pineapple';
// // element.prepend(listItem); // add to the begining of an element
//
// element2.insertBefore(listItem,element2.getElementsByTagName('li')[1]);

// add/remove css property

// let fruits = document.getElementById('fruits');
// fruits.style.border = '2px solid red';
// fruits.style.backgroundColor = 'lightgrey';

//events

// let btn = document.getElementById('btn');
// // btn.onclick = printMessage;
//window.onload = printMessage;

// function printMessage() {
//     let h1 = document.createElement('h1');
//     h1.innerText = 'you triggered an event';
//     document.body.append(h1);
// }
//
// let itemDiv = document.getElementById('div-element');

// itemDiv.onmousemove = ()=>{itemDiv.style.backgroundColor = 'pink'};
// itemDiv.onmouseout = ()=>{itemDiv.style.backgroundColor = '#abe8ab'};
//
// itemDiv.onmousedown = ()=>{itemDiv.style.backgroundColor = 'pink'};
// itemDiv.onmouseup = ()=>{itemDiv.style.backgroundColor = '#abe8ab'};

// addEventListener - possibility to add many event handlers to one element
//
// const createH1 = document.createElement('h1');
// createH1.innerText = "Hello my dear friend!"
// document.body.append(createH1);
//
// function changeStyle() {
//     createH1.style.fontStyle = 'italic';
// }
// function changeColor() {
//     createH1.style.background = 'red';
// }
// createH1.addEventListener('mouseover',changeStyle);
// createH1.addEventListener('mouseout',changeColor);
//
// let outerDiv = document.getElementById('outerDiv');
// let innerDiv = document.getElementById('innerDiv');
//
// function changeColor() {
//     console.log(`${this.id}`)
//     this.style.background = 'pink';
// }
//
// outerDiv.addEventListener('click',changeColor,true);
// innerDiv.addEventListener('click',changeColor);

// toggle
//
// let button = document.getElementById('mtBtn');
// let image = document.getElementById('image');
//
// button.addEventListener('click',()=>{
//     if (image.style.visibility === 'hidden'){
//         image.style.visibility = 'visible';
//     }else {
//         image.style.visibility = 'hidden';
//     }
// })

// detect key presses

// window.addEventListener('keydown', event => console.log(event));

// let div = document.getElementById('myDiv');
// let x = 0;
// let y = 0;
// window.addEventListener('keydown',(event)=>{
//
//
//         switch (event.key) {
//             case "ArrowDown" :
//                 y+=5;
//                 div.style.top = y +'px';
//                 break;
//             case "ArrowUp" :
//                 y -=5;
//                 div.style.top = y +'px';
//                 break;
//             case "ArrowRight" :
//                 x+=5;
//                 div.style.left = x+'px';
//                 break;
//             case "ArrowLeft" :
//                 x-=5;
//                 div.style.left = x + 'px';
//                 break;
//         }
// })

// animations
//
// let div = document.getElementById('myDiv');
// let btn = document.getElementById('myBtn');
//
// btn.addEventListener('click', () => {
//     let timerId = null;
//     // let x = 0;
//     // let y = 0;
//     let degrees = 0;
//
//     timerId = setInterval(frame, 5);
//     // function frame() {
//     //     if (x >=200){
//     //         clearInterval(timerId)
//     //     }else {
//     //         x +=25;
//     //         div.style.left = x + 'px';
//     //     }
//     // }
//
//     // function frame() {
//     //     if (x >= 200 || y >= 200) {
//     //         clearInterval(timerId)
//     //     } else {
//     //         x += 25;
//     //         y += 25;
//     //         div.style.left = x + 'px';
//     //         div.style.top = y + 'px';
//     //     }
//     // }
//
//     function frame() {
//         if (degrees>=360){
//             clearInterval(timerId)
//         }else {
//             degrees += 2;
//             div.style.transform = "rotateY("+degrees+"deg)"; // the same with rotateX, rotateZ
//         }
//     }
// })

// canvas API

// let canvas = document.getElementById('myCanvas');
// let context = canvas.getContext("2d");
//
// // DRAW LINES
// context.strokeStyle = 'purple';
// context.lineWidth = 5;

// context.beginPath();
// context.moveTo(0,0); //the lines start
// context.lineTo(250,250); //the lines end
// context.lineTo(250,500);
// context.moveTo(500,0);
// context.lineTo(250,250);
// context.stroke();

//DRAW TRIANGLE

// context.fillStyle = 'blue';
// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,500);
// context.lineTo(500,500);
// context.lineTo(250,0);
// //context.stroke();
// context.fill();

//DRAW RECTANGLE

// context.strokeStyle = 'lightpink';
// context.fillStyle = 'pink';
// context.fillRect(0,0,300,300);
// context.strokeRect(0,0,300,300);
// context.fill();

// DRAW CIRCLE
// (x,y,radius,sAngle, eAngle, counterclockwise)

// context.beginPath();
// context.fillStyle = 'lightblue';
// context.strokeStyle = 'darkblue';
// context.arc(250,250,100,0,2*Math.PI)
// context.stroke();
// context.fill();

// DRAW TEXT
// context.font = "50px MV BOLI";
// context.fillStyle = 'grey';
// context.textAlign = 'center';
// context.fillText("Hello",canvas.width/2,canvas.height/2);

// window

// console.log('height:'+ window.innerHeight);
// console.log('width:'+ innerWidth);
// console.log(window.location.href);
// console.log(window.location.host);

// let btn = document.getElementById('button');
// // btn.addEventListener('click',()=> window.close())
// btn.onclick =()=>window.open(`https://www.google.com/`);

// cookie - a small text file stored on your computer used to remember information about the user (name=value pairs)

// console.log(navigator.cookieEnabled);
//
// document.cookie = "name=tanya; SameSite=None"; //SameSite prevents the browser from sending this cookie along with cross-site requests.
// console.log(document.cookie);
// let expires = (new Date(Date.now() + 365 * 86400 * 1000)).toUTCString();
// console.log(expires)
//
// let date = new Date();
// date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
// date.toUTCString();
// console.log(date)
//
// document.cookie = "cookiename=cookieValue; expires=" + expires + ";path=/;";
// document.cookie = "name3=value3; expires="+date+";path=/;";
// console.log(document.cookie);
//
// console.log(getCookie("name3"));
//
// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     console.log(value)
//     const parts = value.split(`; ${name}=`);
//     console.log(parts)
//     if (parts.length ===2) return parts.pop().split(';').shift();
// }

// stopwatch program

// const timeDisplay = document.getElementById('timeDisplay');
// const startBtn = document.getElementById('startButton');
// const pauseBtn = document.getElementById('pauseButton');
// const resetBtn = document.getElementById('resetButton');
//
// let startTime =0;
// let elapsedTime = 0;
// let paused = true;
// let intervalId;
// let hours = 0;
// let minutes = 0;
// let seconds = 0;
//
// startBtn.addEventListener('click', ()=>{
//     if (paused){
//         paused=false;
//         startTime = Date.now() - elapsedTime;
//         console.log('startTime'+startTime)
//         intervalId = setInterval(updateTime,1000)
//     }
// })
// pauseBtn.addEventListener('click',()=>{
//     if (!paused){
//         paused = true;
//         elapsedTime = Date.now() - startTime;
//         console.log('pause elapsed time' + elapsedTime)
//         clearInterval(intervalId);
//     }
// })
// resetBtn.addEventListener('click',()=>{
//     paused = true;
//     clearInterval(intervalId);
//      startTime =0;
//      elapsedTime = 0;
//      hours = 0;
//      minutes = 0;
//      seconds = 0;
//     timeDisplay.textContent = "00:00:00";
// })
//
// function updateTime() {
//     elapsedTime = Date.now() - startTime;
//     console.log('elapsedTime'+elapsedTime)
//
//     seconds = Math.floor((elapsedTime / 1000) %60);
//     console.log('seconds' + seconds)
//     minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//     console.log('minutes'+minutes)
//     hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
//
//     seconds = pad(seconds);
//     minutes = pad(minutes);
//     hours = pad(hours);
//
//     timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
//     function pad (unit) {
//         // return (("0") + unit).length > 2 ? unit : "0"+unit;
//         return ("0" + unit).slice(-2);
//     }
// }
