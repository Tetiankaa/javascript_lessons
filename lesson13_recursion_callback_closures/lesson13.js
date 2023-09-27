const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;
console.log(randomData.match(regexpFourDigits));

const aliceExcerpt =
    "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g; // \b indicates a boundary (i.e. do not start matching in the middle of a word)
console.log(aliceExcerpt.match(regexpWordStartingWithA));

//closures

function userBuilder(name){
    const ID = new Date().getTime();
    const user = {ID,name};

    return {
        setName(newName){
            if (newName !== user.name){
                user.name =newName;
            }else {
                console.log("The same name has written! Please type in the new name or just keep the previous name");
            }
        },
        getInfo(){
            console.log(user);
        }
    }
}

const user1 = userBuilder('Tetiana');
user1.getInfo();
user1.setName("Katerina");
user1.getInfo();

//recursion

function recIteration(array, index) {
    console.log(array[index]);
    index++;
    if (index<array.length){
        recIteration(array,index);
    }
}

recIteration([11,22,33],0);

let arr = [11,22,33,[44,55],[66,77,[88,99]]];
//console.log(arr.flat(3))
// const  flatten2 = array =>{
//     return array.reduce((acc,value)=>{
//
//         if (Array.isArray(value)){
//             return acc.concat(flatten2(value))
//         }else {
//             return  acc.concat(value)
//         }
//
//     },[])
// }
//
// console.log(flatten2(arr));

let resultArr = [];

function arrayFlatten(array) {
    for (const item of array) {
        if (Array.isArray(item)){
            arrayFlatten(item);
        }else {
            resultArr.push(item);
        }
    }
}
arrayFlatten(arr);
console.log(resultArr);

// callback function

function filter(array,callback){
    let result = [];
    for (const item of array) {
        if (callback(item)){
            result.push(item);
        }
    }

    return result;
}

console.log(filter([11, 22, 33, 44, 55, 66], item => item % 2 === 0));

// new Set

let set = new Set([11,22,33,11,33,55]);
console.log(set);
set.add('gg');
set.add('tt');
console.log(set);
console.log(set.size);
set.delete(11);
console.log(set);
let array = Array.from(set);
console.log(array)

// new Map

let map = new Map();
let f1 = {name:"roma"};
let f2 = {name:"sasha"};
let f3 = {name:"anton"};

map.set('profesor',f1);
map.set('director',f2);
map.set('student',f3);

console.log(map);

console.log(map.keys());
console.log(map.values());

// const text = 'Hello world, hello JavaScript, world of programming';
// const words = text.split(/\W+/); // Split by non-word characters
// console.log(words)
// const wordFrequency = new Map();
//
// for (const word of words) {
//     let lowercaseWord = word.toLowerCase();
//
//     if (wordFrequency.has(lowercaseWord)){
//         wordFrequency.set(lowercaseWord,wordFrequency.get(lowercaseWord) + 1);
//     }else {
//         wordFrequency.set(lowercaseWord,1);
//     }
// }
//
// console.log(wordFrequency);



// Regular expressions - provide a way to search for, extract, or replace text based on specific patterns.
//[abc]	Find any character between the brackets (also [0-9])
// [^abc]	Find any character NOT between the brackets (also [^0-9])
//\w	Find a word character (also \d - digit, \s - whitespace)
// \W	Find a non-word character (\D - not digit,  \S - not whitespace)

// Closure is a function that has access to variables from its outer function, even after that outer function has finished executing.

// Recursion is a programming technique in which a function calls itself to solve a problem.

// Set is a built-in object that allows you to store unique values of any data type, whether primitive values or object references
// mySet.has(1), mySet.delete(1);, mySet.add(1);,mySet.size, mySet.clear();

// Map is a built-in object that allows to store key-value pairs.
