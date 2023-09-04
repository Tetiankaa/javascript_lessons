//string methods
let str = 'hello world';
console.log(str.concat('!!!'));
console.log(str.toUpperCase());

let cap = 'HELLO';
console.log(cap.toLowerCase());
console.log(cap.startsWith("H")); // true
console.log(cap.startsWith("h")); // false
console.log(cap.endsWith('O'));

console.log(cap.substring(0,2));
console.log(cap.indexOf('L'));
console.log(cap.lastIndexOf("L"));
console.log(cap.charAt(4));

let cookie = "name=vasya;surname=pupkin;age=31";
let tupleArray = cookie.split(";");
console.log(tupleArray);

let obj = {};

for (const keyValuePair of tupleArray) {
   let splited = keyValuePair.split("=");
    obj[splited[0]] = splited[1];
}
console.log(obj);

let phone = '+380 (067) 555-22-33';
let updatedPhone = phone.replace('-','');
console.log(updatedPhone);

let phone2 = '+380 (093) 222-33-55';
let updatedPhone2 = phone2
    .replaceAll('-', ' ')
    .replaceAll('(','')
    .replaceAll(')','');

console.log(updatedPhone2)

let string = "   hello  world   "
let exampleTrim = string.trim();
console.log(exampleTrim)

//array methods
let arr = [];
let newSizeOfArray = arr.push('hello','tanya');
console.log(newSizeOfArray);

arr.unshift("!!!");
console.log(arr);

let shiftedElement = arr.shift();
console.log(shiftedElement);

let poppedElement = arr.pop();
console.log(poppedElement);
console.log(arr);

let array = [11,22,33,44];
let s = array.join('**');
console.log(s);

let nums1 = [55,99,33];
let words = ['aa','dd'];
let newArr =nums1.concat(words);
console.log(newArr);

let qwe = ['ff',77,true,'fdf'];
let slice = qwe.slice(1,3);
console.log(slice);

qwe.splice(1,2,'add new element');
console.log(qwe);

console.log(qwe.includes('ff'));

console.log(qwe.reverse());

//!!!!!!!!!!!!!!!!!!!!!
let array2 = [11,22,33,44,55,66,77,88];
array2.forEach(item => console.log(item));

let evenNumbers =  array2.filter(item =>item%2 ===0);
console.log(evenNumbers);

let users = [
    {name:"tanya",age:33},
    {name:"vasya",age:21},
    {name:"olha",age:48}
];
let addSurname = users.map(function (element){
    element.id = 1 ;
    return element;
});
console.log(addSurname);

let users2 = [
    {name:"tanya",age:33},
    {name:"vasya",age:21},
    {name:"olha",age:48},
    {name:"anna",age:90},
];
let sortByAge = users2.sort((u1,u2)=>u1.age-u2.age)
console.log(sortByAge);

let users3 = [
    {name:"tanya",age:33},
    {name:"vasya",age:21},
    {name:"olha",age:48},
    {name:"anna",age:90},
];
let sortByName = users3.sort((u1,u2)=>u1.name.localeCompare(u2.name));
console.log(sortByName);


let users4 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// let reduce = users4.reduce(function (accumulator,user) {
//     if (user.status){
//         accumulator[0].push(user)
//     }else {
//         accumulator[1].push(user)
//     }
//
//     return accumulator;
// },[[],[]])
//
// console.log(reduce)

let reduce = users4.reduce(function (accumulator,user) {

    if (user.status){
        accumulator.yes.push(user)
    }else {
        accumulator.no.push(user)
    }
    return accumulator;
},{yes:[],no:[]});
console.log(reduce);

//JavaScript provides a variety of built-in string methods that allow to manipulate and work with strings.
//   concat(string1, string2, ...): Concatenates two or more strings together.
//   toUpperCase() and toLowerCase(): Convert a string to uppercase or lowercase.
//   startsWith(): returns true if a string starts with a specified string. The startsWith() method is case sensitive.
//   endsWith(): returns true if a string ends with a specified string. The endsWith() method is case sensitive.
//   substring(startIndex, endIndex): Returns a substring from the specified start index (inclusive) to the end index (exclusive).
//   indexOf(substring) and lastIndexOf(substring): Returns the index of the first or last occurrence of a substring.
//   split(separator): Splits a string into an array of substrings based on the specified separator.
//   replace(oldValue, newValue): Replaces occurrences of a substring with another substring.
//   replaceAll(): returns a new string with all values replaced.
//   charAt(index): Returns the character at the specified index in a string.
//   trim(): Removes whitespace from the beginning and end of a string.


//JavaScript provides a wide range of built-in array methods that allow to perform various operations on arrays.
//   push(item): Adds one or more elements to the end of an array and returns size of new array
//   unshift(item): Adds one or more elements to the beginning of an array.
//   shift(): Removes and returns the first element from an array.
//   pop(): Removes and returns the last element from an array.
//   join(separator): Converts all elements of an array into a string, separated by the specified separator.
//   concat(array): Combines two or more arrays and returns a new array.
//   slice(startIndex, endIndex): Returns a shallow copy of a portion of an array from the specified start index to the end index (exclusive).
//   splice(): adds or removes array elements.
//   includes(): returns true if an array contains a specified string.
//   reverse(): reverses the order of the elements in an array.
//   indexOf(item) and lastIndexOf(item): Returns the index of the first or last occurrence of an item in the array.

//   The forEach method is used to iterate over elements in an array and perform a specified operation on each element.
//   It's a higher-order function that takes a callback function as its parameter.

//   The filter() method allows to create a new array containing all elements from the original array
//   that pass a certain condition specified by callback function. It doesn't modify the original array.

//   The map() method  allows you to create a new array by applying a given function
//   to each element of the original array. It doesn't modify the original array

//   The sort() method is used to sort the elements of an array in place and returns the sorted array.
//   By default, it sorts elements as strings and changes the original array.

//   The reduce() method is used to "reduce" an array into a single value by applying a specified function to each element of the array.

//   The find() method  allows to search for an element in an array based on a provided condition.
//   It returns the first element in the array that satisfies the given condition.
//
//   The some() method tests whether at least one element in the array passes the given condition.
//   It stops iterating once it finds such an element and returns true. If no element passes the condition, it returns false.
//
//   The every() method tests whether all elements in the array pass the given condition.
//   It stops iterating and returns false as soon as it finds an element that doesn't meet the condition.
//   If all elements pass the condition, it returns true.