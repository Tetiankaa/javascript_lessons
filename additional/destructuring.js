let person = {
    name: "Tanya",
    age: 21,
    gender: "female",
    friend: {
        name: "Yevhen",
        age: 24,
        gender: "male"
    }
}
let {name, age, gender = "F"} = person; //It's impossible reassign value
console.log(name, age, gender);

let {name: name2, age: age2} = person;
console.log(age2);
console.log(name2);

//assign variables from nested elements
let {friend: {name: friendName, age: friendAge}} = person;
console.log(friendName);
console.log(friendAge);

//arrays

let array = [1, 2, 3, 4, 5];

// let[a, , , b] = array;
// console.log(a,b);

let [a, b, ...rest] = array;
console.log(a);
console.log(b);
console.log(rest);

// destructuring in functions
let user = {name: 'vasya', age: 31, status: false};

function extractName({name}) {
    console.log(name);
}

extractName(user);

// spread

const user2 = {
    name: "Anna",
    age: 30
}

const copied = {...user2, age: 60, occupation: "web developer"};
console.log(copied);

const copied2 = Object.assign({}, copied, {age: 70});
console.log(copied2);

//add the elements of an existing array into a new array
let certsToAdd = ["React", "Python"];

let certifications = ["Html", "css", "javascript", ...certsToAdd, "angular"];
console.log(certifications);

//pass elements of an array as arguments to a function

function addNumbers(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];
console.log(addNumbers(...numbers));

//copy arrays
let arr1 = [1, 2];
let arr2 = [...arr1];
console.log(arr2);

//concatenate arrays
let arr3 = [11, 22, 33];
let arr4 = [44, 55, 66];
let arr5 = [...arr3, ...arr4];
console.log(arr5);

//
function multiply(multiplier, ...args) {
    return args.map(item => item * multiplier);
}

console.log(multiply(2, ...numbers));

//swap variables

let c = 1;
let d = 2;

[c, d] = [d, c];
console.log(c);
console.log(d);

let e = 1;
let f = 5;
let g = 6;
let k = 2;

[e, f, g, k] = [g, e, k, f];
console.log(e, f, g, k);

const colors = [];

const [firstColor = "white"] = colors;  //If the array doesn't have any element at the index 0, the 'white' default value is assigned.
console.log(firstColor);

const nums = [1, 2, 3];

let [, ...restArgs] = nums;
console.log(restArgs);

let big = {
    foo: "value Foo",
    bar: "value Bar"
}
let {foo, ...small} = big;
console.log(small);

//destructure a string to characters:

let str = "";

let [firstChar = ""] = str; // return an empthy string instead of "underfind"
console.log(firstChar);

function namesList() {
    return ["one", 'two', 'three']
}

let [firstName, , secondName] = namesList();
console.log(firstName);
console.log(secondName);

//Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

function sum(...numbers) {
    let initNumber = 0;
    for (const number of numbers) {
        initNumber += number;
    }
    return initNumber;
}

let numbers2 = [10, 50, 100, 40];
console.log(sum(...numbers2));

//Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings),
// and returns the sum of only the numbers.

function addOnlyNums(...args) {
    let initNumber = 0;
    for (const item of args) {
        if (typeof item === 'number') {
            initNumber += item;
        }
    }
    return initNumber;
}

let array3 = [1, 'cat', 3, 4];

console.log(addOnlyNums(...array3));

//- Write a function called `countTheArgs` that can take any number of arguments, and returns the number of arguments that are passed in.

function countTheArgs(...args) {
    return args.length;
}

console.log(countTheArgs('cat','dog'));

//Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).
function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

let firstArr = ["abc", "def", "ghkl"];
let secondArr = [22, 33, 44];

let thirdArr = combineTwoArrays(firstArr, secondArr);
console.log(thirdArr);

//Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

function sumEveryOther(...args) {
    let acc = args[0];
    for (let i = 1; i < args.length; i++) {
        if (i % 2 === 0) {
            acc += args[i];
        }

    }
    return acc;
}

let numss = [5, 6, 3, 4, 1];
console.log(sumEveryOther(...numss));

//Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.

function onlyUniques1(...args) {
    return  Array.from(new Set(args))
}

console.log(onlyUniques1(1, 4, 7, 1, 2, 7, 4));
console.log(onlyUniques1('cat', 'cat', 'dog', 'pig'));

// or
function onlyUniques2(...args) {
   return  args.filter((value,index)=>args.indexOf(value)===index);
}
console.log(onlyUniques2(1, 4, 7, 1, 2, 7, 4));
console.log(onlyUniques2('cat', 'cat', 'dog', 'pig'));

//Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array.
function combineAllArrays(...arr) {
    return [].concat(...arr);
}

console.log(combineAllArrays(numss,firstArr,secondArr));

//Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all of the squares.

function squareAndSum1(...args) {
    let squaredArr = [];
    let num = 0;
    for (const item of args) {
        squaredArr.push( Math.pow(item,2))
    }
    for (const squaredItem of squaredArr) {
     num += squaredItem;
    }
    return num;
}

console.log(squareAndSum1(1,2));

// or

function squareAndSum2(...args) {
    return args.reduce((acc,value)=> acc + value ** 2,0);
}
console.log(squareAndSum2(1,2));