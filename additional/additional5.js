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

document.getElementById("button").onclick= function (){
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
console.log(x,typeof x);
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
console.log(Math.pow(kv,3));
console.log(Math.sqrt(kv));
console.log(Math.abs(kv)) //  It negates the native sign of a number and returns the relevant positive value

console.log(Math.max(q,w,kv));
console.log(Math.min(q,w,kv));

let random = Math.floor(Math.random()*10) + 5;
console.log(random);

document.getElementById("btn").onclick = function (){

    let a = + document.getElementById("aSide").value;

    let b = + document.getElementById("bSide").value;

    let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

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
console.log(text.replaceAll("o","*"));

let fullName = "Tetiana Korsun";

let firstNAme = fullName.slice(0,fullName.indexOf(" "));
let lastNAme = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstNAme);
console.log(lastNAme);

// method chaining - calling one method after another in the continuous line of code

let user = "Tetiana  ";

let firstLetter = user.charAt(0).toLowerCase().trim();
console.log(firstLetter);

// if statement - a basic form of decision making
let age = 10;

if (age<0){
    console.log("You haven't been born yet")
}else if (age>65){
    console.log("You are a senior citizen")
}else if (age>20){
    console.log("You are an adult ")
}else {
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

if (temperature>0 && temperature<=30){
    console.log("It's warm outside")
}else {
    console.log("the weather is bad");
}

if (temperature<0 || temperature>35){
    console.log("The weather is bad")
}else {
    console.log("the weather is good")
}

// ! NOT logical operator

let temp = -20;

if (!(temp>0)){
    console.log("It's cold outside")
}else {
    console.log("It's warm outside")
}

let sunny = false;
if (!sunny){
    console.log("It's cloudy outside")
}else {
    console.log("It's sunny outside")
}






