// check if input is array
function isArray(input) {
    if (Array.isArray(input)) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isArray('w3resource');
isArray([1, 2, 4, 0]);

// some method - checks for any passing elements.

const nums = [20, 50, 12, 36, 55];

console.log(nums.some(value => value < 10));

// every method checks if every element passes a test.

console.log(nums.every(value => value > 10));

//reduce method reduces arrays to a single value.

console.log(nums.reduce((accumulator, value) => accumulator + value, 0));

//Map method creates a new array from a function run on each array element.

console.log(nums.map(value => value * 2));

//The flat method flattens multidimensional arrays to a dictated level.

let multiArrays = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
console.log(multiArrays.flat(3));

// filter method tests an array and returns any element that satisfies the test parameters.
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 4, 8, 9, 10, 11, 12, 13]
console.log(array.filter(num => num >= 0 && num < 10));

//forEach() method executes a function for each element in an array.
array.forEach(item => console.log(item));

//find index method returns the index of the first element in an array to pass a test.

console.log(array.findIndex(num => num === 4)); // 7
console.log(array.findLastIndex(num => num === 4)); // 11

//find method tests an array and returns the first element that satisfies the test parameters.

console.log(array.find(num => num === 4));

//sort method is used to organize items in an array. Changes the original array.

//console.log(array.sort((x, y) => y - x));

//concat method returns an array of one or more joined arrays.

const alpha = ['a', 'b', 'c'];
const numeric = [1, 2, 3];
let alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric);

//fill method fills values with the provided value from start to end.
const original = [1, 2, 3]
const result = original.fill(4)// [4, 4, 4]
console.log(result);

//includes method checks if an array contains a specific element

console.log(numeric.includes(3));

//reverse method reverses the order of elements in an array.
console.log(numeric.reverse())

//flat map method returns a function against each array element and then flattens it.

const array2 = [[1], [2], [3], [4], [5]]

console.log(array2.flatMap(value => value)); //[1, 2, 3, 4, 5]

//slice - make a shallow copy of a portion of items in an array into a completely new array object.

let array1 = ['mango', 'orange', 'pineapple', 'apple', 'grapes'];
console.log(array1.slice(1, 4));
console.log(array1);

//splice - can add and remove items. Changes the original array and returns removed items

console.log(array1.splice(0, 3, "kiwi"));
console.log(array1);


let arr = ['RED', 'GREEN', 'BLUE', 'YELLOW'];
for (let I = 0; I < 10; I++) {
    let pos = I % arr.length;
    console.log(arr[pos])
}

//Write a function that creates a new array with given values : (3, 'a') => ['a', 'a', 'a']
let a = [3, 'a'];

function fill(array, value) {
    array.fill(value).push(value);
    return array;
}

console.log(fill(a, "a"));

// another solution

let fillTwo = (arraySize, value) => new Array(arraySize).fill(value);
console.log(fillTwo(3, 'a'))

//Write a function that reverts the input array. Please, do not use array.reverse(); to make this task more enjoyable.

//reverse
let array3 = [1, 2, 3];

// console.log(array3.reverse());

// for loop
function reversesOrderOfArray(arr) {
    let reversedArray = [];
    for (let q = arr.length - 1; q >= 0; q--) {
        reversedArray.push(arr[q])
    }
    return reversedArray;
}

// let reversed = reversesOrderOfArray(array3);
// console.log(reversed);

//sort

// let reversed = array3.sort((a,b)=>b-a);
// console.log(reversed);

//map

let reversed = array3.map((value, index, givenArr) => givenArr[givenArr.length - index - 1])
console.log(reversed);

//* Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
//  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

let array4 = [0, 1, false, 2, undefined, '', 3, null];

// let compact = array4.filter(value => value);
// console.log(compact);

//OR

function clearArray(array) {
    return array.filter(value => {
        return (
            value !== false &&
            value !== 0 &&
            value !== "" &&
            value !== undefined &&
            value !== null &&
            !isNaN(value)
        )

    })
}

let clear = clearArray(array4);
console.log(clear);

// * Task description: Write a method that returns an object composed of key-value pairs.
//  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
let array5 = [['a', 1], ['b', 2]];

//reduce
// let createObject = array5.reduce((acc,value)=>{
//     if (Array.isArray(value))
//             acc[value[0]] = value[1];
//     return acc;
// },{});
//
// console.log(createObject);

let createObj = array5.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {});
console.log(createObj);

//map
let createObject2 = array5.map(function (value) {
    let object = {};
    if (Array.isArray(value)) {
        object[value[0]] = value[1];
    }
    return object;
})
console.log(createObject2);

//* Task description: Write a method that returns an array without listed values
//  * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]

let array6 = [1, 2, 3, 1, 2];

// function deleteOneTwo(array) {
//    return  array.filter(element => {
//        return (
//            element !== 1 && element !== 2
//        )
//         })
// }
// console.log(deleteOneTwo(array6));

let without1 = (array, ...args) => {
    let filteredArray = [...array];
    for (let a = 0; a < args.length; a++) {
        filteredArray = filteredArray.filter(element => element !== args[a])
    }
    return filteredArray;
}

console.log(without1(array6, 2));

let without2 = function (array){
    let filteredArray = [...array];
    for (let i = 0; i < arguments.length; i++) {
       filteredArray=filteredArray.filter(item=>item !== arguments[i]);
    }
    return filteredArray;
}

console.log(without2(array6,3,1));

// * Task description: Write a method that returns a duplicate-free array
//  * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]

let array7 = [1, 2, 3, 1, 2];

let unique1 = array=>array.filter((element,index)=>array.indexOf(element)===index);
console.log(unique1(array7));

let unique2 = array=>Array.from(new Set(array));
console.log(unique2(array7));

// * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
//  * Expected Result: ([1, 2, 3], [1, 2, 3]) => true

let firstArray = [1, 2,4, 3];
let secondArray = [1, 2,5, 3];

function compareArrays(arr1,arr2) {
    if (arr1.length !== arr2.length){
        return false;
    }

    let compare = arr1.map((value,index)=>arr2[index]===value);
    console.log(compare)
    return !compare.includes(false);
}

console.log(compareArrays(firstArray,secondArray));

// * Task description: Write a method that turns a deep array into a plain array
//  * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

let array8 = [1, 2, [3, 4, [5]]];

//flat
function flatten1(array) {
   return  array.flat(Infinity);
}

console.log(flatten1(array8));

//reduce

const  flatten2 = array =>{
    return array.reduce((acc,value)=>{

        if (Array.isArray(value)){
           return acc.concat(flatten2(value))
        }else {
            return  acc.concat(value)
        }

    },[])
}

console.log(flatten1(array8));
