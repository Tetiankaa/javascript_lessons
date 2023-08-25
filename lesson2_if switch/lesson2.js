//arrays
let users = ['maks',  'vasya','tanya'];
console.log(users);
console.log(users.length);
console.log(users[1]);

console.log(users[users.length-1]); // tanya

// add elements to the end of an array
users[3] = 'katya';
console.log(users);
users.push('olena');
console.log(users);
users[users.length] = 'vira';
console.log(users);

let animals = [['cats', 'dogs','ducks'],['snack','parrot']];
console.log(animals);
console.log(animals[1][1]);

//objects
let user = {
    id:1,
    name:'vasya',
    age:16,
    status:false
};
console.log(user);
console.log(user.id);
console.log(user['id']);

user.skills = ['java','python'];
console.log(user);
console.log(user.skills[0]);

user.skills.push('javascript');
console.log(user.skills);

//primitive
    let a =54;
    let aCopy = a;
    aCopy =1;
    console.log(a);
    console.log(aCopy);

//reference
    let origin = {};
    let clone = origin;
    clone.name = 'oleg';
    console.log(clone);
    console.log(origin);

    origin.age = 5;
    console.log(clone);

//if else
// let age = +prompt("enter your age"); //convert string to the number
//
// if (age>0 && age<18){
//     console.log('You cant go ahead')
// }else if (age>=18 && age<=40){
//     console.log("Go to the second page")
// }else if(age>40){
//     console.log("Go to the third page")
// }else {
//     console.log("Only numbers accepted")
// }

let color = 'red';

switch (color){
    case 'red':
        console.log('stop');
        break;

    case 'yellow' :
        console.log('wait');
        break;

    case 'green' :
        console.log('go');
        break;

    default:
        console.log('something wrong is happened')
}




//An array is an ordered collection of values, where each value is identified by an index.
// Arrays can hold values of any data type, including other arrays and objects. Arrays are created using square brackets [].
// Arrays are zero-indexed, meaning the first element is accessed using index 0, the second with index 1, and so on.
// We can access elements in an array using their index.

// The length property returns the total number of elements in the array.
// The push() method is used to add one or more elements to the end of an array.

//An object is an unordered collection of key-value pairs.
// Each key is a unique string (or Symbol) that acts as an identifier for a value.
// Objects can hold values of any data type, including functions and other objects.
// Objects are created using curly braces {}.
// We can access the values in an object using dot notation or bracket notation.

//Arrays and objects are reference types, which means they are passed by reference, not by value.
// When you assign an array or object to another variable, both variables reference the same underlying data.

//The if...else statement is used for conditional branching.
// It allows to execute different blocks of code based on whether a specified condition evaluates to true or false.

//The logical OR operator (||) returns true if at least one of the conditions is true.
//The logical AND operator (&&) returns true only if all of the conditions are true.

//The switch statement is way to handle conditional branching,
// specifically when we have a single expression that needs to be compared to multiple values.
// It provides a more organized and readable way to handle multiple if...else statements.