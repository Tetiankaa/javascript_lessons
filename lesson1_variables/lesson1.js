console.log("This is your first text in the console.log");

const PI = 3.14;
console.log(PI);

//string
let variable1 = "variable1";
let variable2 = 'variable2';
let variable3 = `variable3`;
console.log(variable1);
console.log(variable2);
console.log(variable3);

let concatenation1 = `${variable1} ${variable2} ${variable3}`;
let concatenation2 = variable1 + ' ' + variable2 + ' ' + variable3;
let concatenation3 = variable1.concat(variable2).concat(variable3);
console.log(concatenation1);
console.log(concatenation2);
console.log(concatenation3);

//numbers
let number1 = 10;
let number2 = 3;

let add = number1+number2;
let subtraction = number1-number2;
let multi = number1*number2;
let division = number1/number2;
let modulus = number1%number2;

//boolean
let bool1 = 5;
let bool2 = 2;
let bool3 = true;
console.log(bool1>bool2);
console.log(bool1<bool2);

console.log(typeof bool1);
console.log(typeof bool3);

let a = 'hello';
let b = 4;
let c = true;
let d = 5;
console.log(a + b);
console.log(a + d + c);
console.log(b + d + a)

console.log(!!false);
console.log(!!undefined);
console.log(!!0);
console.log(!!NaN);
console.log(!!"");
console.log(!!null);

console.log(!!"gg");

console.log(!5);
console.log(!!5);

console.log(prompt("enter your age"));


//JavaScript is a versatile and widely-used programming language that is primarily used for adding interactivity,
// dynamic behavior, and functionality to websites and web applications.

//console.log() is a function provided by browsers and the Node.js runtime that allows you to output information
// to the browser's developer console or the terminal. It's a valuable tool for debugging and understanding what's happening in your code

//Variables are used to store and manage data within scripts.
// - let variables  are block-scoped and are only available inside the block where they're defined.
// - var variables  are function-scoped and are available throughout the function in which they're declared.
// - const variables are block-scoped and cannot be re-assigned or re-declared once they are assigned a value.
//Commonly accepted naming conventions for variables:
// Camel Case(the first word is lowercase),
// Pascal Case(the first letter of each word is capitalized),
// Snake case(underscores _),
// Kebab case(hyphens -)

//JavaScript has several data types that are used to represent different kinds of values.
// These data types can be categorized into two main groups: primitive data types and reference data types.
// Primitive Data Types:
//
// Number: Represents numeric values. It includes both integer and floating-point numbers.
// String: Represents sequences of characters (text).
// Boolean: Represents true or false values.
// Undefined: Represents a variable that has been declared but has no assigned value.
// Null: Represents the intentional absence of any object value.
// BigInt: Represents integers with arbitrary precision. Created by appending n to the end of an integer literal.
//
// Reference Data Types:
//
// Object: Represents a collection of key-value pairs. Objects can contain properties and methods.
// Array: Represents an ordered list of values. Arrays can hold values of any data type.
// Function: Represents a block of code that can be invoked and executed.

//String Concatenation means appending one or more strings to the end of another string.
// We can concatenate two or more strings using the + operator, the concat() method or using Template Literals.
// Template literals allow to embed expressions and variables directly within the string using dollar and curly brackets ${}:

//JavaScript supports various arithmetic operations on numbers, including addition, subtraction, multiplication, division, modulus(returns the remainder of the division)

//The typeof operator is used to determine the data type of a value or expression. It returns a string that indicates the data type of the operand.
// - It returns "object" for arrays and objects. Arrays are a type of object and the typeof operator doesn't differentiate between them.
// - It returns "function" for functions.
// - It returns "undefined" for variables that are declared but not assigned a value.
// - It returns  "number" for numbers
// - It returns "string" for string
// - It returns "boolean" for booleans

//Casting refers to the process of converting a value from one data type to another.
// You can explicitly convert other data types to strings using the String() function or the .toString() method.
// You can explicitly convert strings or other types to numbers using the Number() function or the parseInt() and parseFloat() functions or adding + before string
// For converting to integers, you can use the parseInt() function with a specified radix (usually 10).
// You can convert values to booleans using the Boolean() function or adding !!(logical NOT operator ) before value

// In JavaScript, there are several values that are considered falsy when cast to a boolean. :
// 1. false: The false boolean literal itself.
// 2.  0: The number zero.
// 3. '' (empty string): An empty string is considered falsy.
// 4. null: Represents the absence of any value or object.
// 5. undefined: A variable that has been declared but not assigned a value.
// 6. NaN: Represents a value that is Not-A-Number
// All other values in JavaScript are considered truthy when cast to a boolean.

//The prompt() function is a built-in JavaScript function that displays a dialog box with an optional message and an input field.
// It allows you to get user input from the user. The user can type in a value and press "OK" or "Cancel". If the user clicks "OK",
// the entered value is returned as a string; if the user clicks "Cancel", null is returned.