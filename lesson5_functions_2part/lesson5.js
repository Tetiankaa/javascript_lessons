let users = [
    {name: "vasya", age: 26, status: true},
    {name: "maksim", age: 22, status: false},
    {name: "anna", age: 29, status: true},
    {name: "olena", age: 45, status: false},
    {name: "tetiana", age: 66, status: true}
];
foo(users); //function declaration
function foo(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

// printUsers(users); won't be printed
let printUsers = function (array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
printUsers(users); //function expression

// arrow function
let printU = array => {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}
printU(users);

(function (array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
})(users) // rarely used

//callback
let createNewArray = (array, callback) => {
    let newArray = [];
    for (const item of array) {
        if (callback(item)){
            newArray.push(item);
        }
    }
    return newArray;
}
let conditionAge = user => user.age > 30;
let conditionName = user => user.name.length >4;

console.log(createNewArray(users, conditionAge));
console.log(createNewArray(users, conditionName));

let user = {
    id:2,
    name:"tanya",
    age:27,
    message:(msg)=>console.log(`${msg}`), // this is method
    sayHello: function (){ console.log(`Hello ${this.name}`)}
}
user.message("hi buddy");
user.sayHello();


//In a function declaration, the function name is followed by parentheses, and the function body is enclosed in curly braces.
// This type of function can be used anywhere in the scope, even before the function declaration in the code.
//
// In a function expression, the function is assigned to a variable.They are only accessible after the point in the code where they are defined.

//Arrow functions allow you to write shorter function expressions without using the function keyword and without the need for curly braces
// if the function body consists of a single expression.Arrow functions do not have their own "this" value.
// Instead, they inherit the this value from the enclosing lexical scope.
//Arrow functions do not have  arguments object.
// Arrow functions have return statement by default.

//A callback is a function that is passed as an argument to another function.
//Callbacks are commonly used for asynchronous operations, event handling, or to allow customizable behavior in higher-order functions.

//The this value refers to the current context or the object that a function is executed in.
//  In the global scope or when not inside any function, this refers to the global object. In a web browser, the global object is usually window.
//  When a function is called as a method of an object, this refers to the object that owns the method.
// When a function is used as a constructor to create objects, this refers to the newly created instance.
