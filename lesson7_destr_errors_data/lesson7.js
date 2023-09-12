let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()); // starts from 0
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime()); // 01 01 1970 unix

let date1 = new Date(1693933225588);
console.log(date1);

let date2 = new Date("Aug 02 1996 04:15:17");
console.log(date2)

let date3 = new Date(1996, 7, 2, 4, 15, 17);
console.log(date3);

//create random ID
let user1 = {
    id: new Date().getTime(),
    name: "vasya",
    bday: new Date(1622558899788)
}

let user2 = {
    id: new Date().getTime(),
    name: "petya",
    bday: new Date(1622558191788)
}
console.log(user1);
console.log(user2);

// handling errors

console.log('start');
try {
    console.log(variable)
} catch (error) {
    console.log(error)
} finally {
    console.log('end')
}

// throw statement
function calc(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        throw new Error("Arguments can't be text. Pls provide both numbers")
    }
    return num1 * num2;
}

try {
    calc(2, "gg")
} catch (e) {
    console.log(e);
}

// The optional chaining operator ?.
let obj = {};

if (obj.innerObject) {
    console.log(obj.innerObject.id)
}
console.log(obj?.innerObject?.id)

// shorthand notation - available when the property name matches the variable name.
let name = "vasya";

let user3 = {
    id: 1,
    name // name:name
}
console.log(user3);

//destructuring
//object destr
let car = {
    id: 1,
    producer: "subaru",
    model: "wrx"
}
// let id = car.id;
// let model = car.model;

let {id, model} = car;
console.log(id);
console.log(model);

function extractor({id, model}) {
    return {
        carId: id,
        carModel: model
    }
}

console.log(extractor(car)); //{carId: 1, carModel: 'wrx'}

let car2 = {
    id: 2,
    producer: "producer",
    model: "cayenne",
    power: 450
}

let {id: cId, model: cModel} = car2; // create new names of variables,because variables with name "id" and "model" already exists in 87 line.
console.log(cId, cModel);

//array destr

let arrayOfUsers = [
    {name: "vasya", age: 26},
    {name: "kolya", age: 31},
    {name: "anna", age: 55},
    {name: "oleh", age: 5},
    {name: "ruslan", age: 6}
]

let [u1, u2, , u4] = arrayOfUsers;
console.log(u1);
console.log(u2);
console.log(u4);

// spred operator

// let user4 = {name: "vasya", age: 26};
// let user5 = user4;
// user5.id = 5;
// console.log(user4); // also will have id
// console.log(user5);

let user4 = {
    name: "vasya",
    age: 26
};
let user5 = {...user4, id:5};// user5.id = 5; we can change the name in the same way(name: new name)

console.log(user4); // {name: 'vasya', age: 26}
console.log(user5); // {name: 'vasya', age: 26, id: 5}

// inner objects

let user6 = {
    name: "vasya",
    age: 26,
    wife:{
        name:"Marina"
    }
};

let user7 = {...user6};
user7.wife.name = "Anna";
console.log(user7);
console.log(user6); // wife:Anna . Spred doesn't work with inner objects. They still have the same reference and can be changed in the original obj too.

//JSON - works with inner objects, BUT doesn't work with functions.

let jsonUser = JSON.stringify(user6); // convert into JSON format
console.log(jsonUser);
let parseUser = JSON.parse(jsonUser); // convert back to the object
console.log(parseUser);

console.log(user6 === parseUser);
console.log(user6.wife === parseUser.wife);

//Object.assign
let user8 = {
    name: "vasya",
    age: 26,
    wife:{
        name:"Marina"
    },
    func(){

    }
}
let user9 = Object.assign({},user8);
console.log(user9);
console.log(user9 === user8);
console.log(user9.wife === user8.wife);
console.log(user9.func() === user8.func());

//**
let user10 = {
    name: "vasya",
    age: 26,
    wife:{
        name:"Marina"
    },
    foo(a,b){
        return a+b
    }
};
let user11 = Object.assign(user10);

console.log(user10.foo(10,20));
user11.foo = function (a,b){return  a*b}
user11.wife.name = "iiiii"

console.log(user11.foo(10, 20));
console.log(user10.foo(2,7))
console.log(user10)


//Date object is used to work with dates and times. This will give us the current date and time.
//We can get various components of a Date object like the year, month, day, hour, etc., using specific methods
//We can get the timestamp (the number of milliseconds since January 1, 1970) of a Date object using the getTime() method.

//try...catch is a mechanism for handling exceptions or errors that might occur during the execution of code.
//The try block contains the code where an exception might occur.
//  The catch block contains the code that handles the exception.
// The finally block is optional and is used for code that you want to execute regardless of whether an exception was thrown or not.

//throw statement is used to manually create and throw custom exceptions.

// The optional chaining operator ?.  -  It's used to simplify property access when dealing with potentially undefined or null values in object chains.
// The optional chaining operator (?.) is used to safely access properties of an object when you're not sure if those properties exist.
//. If any part of the chain is undefined, the result of the entire expression will be undefined rather than throwing an error.

//Destructuring is a feature that allows to extract values from objects or arrays and assign them to variables.
//  Object destructuring allows to extract values from objects by specifying the property names we want to access inside curly braces {}
//  Array destructuring allows to extract values from arrays based on their positions.

//The spread operator (...) is a feature that allows you manipulate arrays and objects in various ways:
//      1. Create copies of arrays and objects
//      2. Concatenating Arrays
//      3. Adding Elements to Arrays([...originalArray, 4])
//      4. Merge objects into a new one (inner objects still have the same reference)
//      5. Clone an object and update specific properties in a single expression
// Spred doesn't work with inner objects. They still  have the same reference and can be changed in the original obj too.

// JSON.stringify() is used to convert a JavaScript object or value into a JSON string.
// JSON.parse() is used to parse a JSON string and convert it into a JavaScript object.
// JSON (JavaScript Object Notation) can represent objects, arrays, strings, numbers, booleans, and null, but not functions or undefined.

//Object.assign()  is used to  copy the values of all enumerable properties from one or more source objects into a target object.
// If the properties themselves are objects or functions, those objects and functions are still referenced and not deeply cloned.