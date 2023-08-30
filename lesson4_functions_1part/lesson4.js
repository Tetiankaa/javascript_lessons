let users = [
    {name: "vasya", age: 26, status: true},
    {name: "maksim", age: 22, status: false},
    {name: "anna", age: 29, status: true},
    {name: "olena", age: 45, status: false},
    {name: "tetiana", age: 66, status: true}
]
let animals = [
    {name: "dog", age: 4},
    {name: "cat", age: 8},
    {name: "chicken", age: 1},
    {name: "duck", age: 2}
]

function loop(array) {
    if (array.length) {
        for (const element of array) {
            console.log(element)
        }
    } else {
        console.error("Only arrays with data are accepted")
    }
}

loop(users);
loop(animals);
loop([]);

function calc(a, b, c = 100) {
    console.log(a + b + c);
}

calc(1, 5);

//arguments
function foo(){
    console.log(arguments); // create pseudo array with elements
}
foo(5,6,1,47);

function foo2(){
   console.log(Array.from(arguments)); // convert elements to an array
   // console.log([...arguments])
}
foo2(5,6,1,47);

function foo3(){
    let arr = Array.from(arguments);
    let result = 0;

    for (const number of arr) {
        result = result + number;
    }
    console.log('result is '+result)

}
foo3(5,10,5,5);

let a = foo3(1,2,3); // needed return statement in function

//rest parameter
function func(firstItem,secondItem,...restItems){
    console.log('first '+firstItem);
    console.log('second'+secondItem);
    console.log('rest parameters '+restItems);
}
func(5,5,22,66,115,'fffg');

function calculator(...arr){
    let result=0;
    for (const number of arr) {
        if (number>10){
            break; // break loop
        }
        result = result + number;
    }
    return result;
}
let qwe = calculator(1,8,1,3,25,5,3);
console.log(qwe);

function  calculator2(...arr){
    let result = 0;
    for (const arrElement of arr) {
        if (arrElement>30){
            continue; // break current iteration
        }
        result = result + arrElement;
    }
    return result;
}
let asd = calculator2(2,8,31,5,55,55,10);
console.log(asd);

//A function is a block of code that performs a specific task or set of tasks. Functions are reusable.
// A function is defined using the function keyword, followed by a name for the function,
// a set of parameters enclosed in parentheses, and a block of code enclosed in curly braces.

//The arguments object provides a way to access the arguments that were passed to the function
// when it was called, regardless of whether the function explicitly declares parameters.

//The return statement is used to return a particular value from the function.
// When a return statement is executed, the function's execution is immediately stopped,
// and the value specified in the return statement is sent back to the caller.

//Using the rest parameter, a function can accept any number of arguments, including none.
// The rest parameter collects any remaining arguments into a real array.
// The rest parameter must be the last parameter, because it collects all the remaining arguments.