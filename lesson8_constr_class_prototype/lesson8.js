//constructors
function User(id, name) {
    this.id = id;
    this.name = name;
}

let user1 = new User(8, "Tanya");
let user2 = new User(10,"Olena");
console.log(user1);
console.log(user2);

// call() and apply() method
function Person(name,age){
    this.name=name;
    this.age=age;
    this.greeting=function (message,itemToBuy) {
        return `${message} my name is ${this.name}, my age is ${this.age} years old. I'd like to buy ${itemToBuy}`
    };
}

let person1 = new Person("Oleh",30);
let person2 = {
    name:"Vlad",
    age:25
}
console.log(person1.greeting.call(person2,"hi","apples"));// or like an array (person2,["hi","apples"])
console.log(person1.greeting.apply(person2,["hi","a pie"])); // an array of arguments

//bind()
let func = person1.greeting.bind(person2);
console.log(func("hello","oranges"));

// prototype
let users = [
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

Array.prototype.print = function () {
    for (const item of this) {
        console.log(item)
    }
}
users.print();
let nums = [22,66,22];
nums.print();

function Student(name,surname) {
    this.name=name;
    this.surname=surname;
}
let student1 = new Student("Tetiana","Korsun");

Student.prototype.info = function () {
    return `Name: ${this.name}, surname: ${this.surname}` //add new property
}

console.log(student1.info());

//classes
class User2 {

   constructor(id,name) {
       this.id=id;
       this.name=name;
   }
   greeting(){
       console.log(`hello my name is ${this.name}`)
   }
}

let user3 = new User2(2,"Katya");
console.log(user3);
user3.greeting();

class Customer extends User2{
    constructor(id, name, products) {
        super(id, name);
        this.products = products;
    }
}

let user4 = new Customer(5,"Marina",["milk","meat","potatoes"]);
console.log(user4);

// another way to make it without using classes

function User3(id,name) {
    this.name=name;
    this.id=id;
}

function Customer2(id,name,products) {
    User3.call(this,id,name);
    this.products=products;
}


// Constructors are templates for creating multiple objects with similar properties and behaviors.
//It is considered good practice to name constructor functions with an upper-case first letter.

//With call() method, an object can use a method belonging to another object.
// We can pass arguments separately or like an array.

//apply() is used when you want to pass an array of arguments to a function.

//bind() method allows to create a new function with a specified this value and, optionally, a set arguments.
// It doesn't immediately invoke the function but returns a new function that you can call later.

//The prototype is a shared blueprint for objects that defines their common properties and methods, allowing objects to inherit and share behavior.
//Prototype allows to add new properties to object constructors.
//Also enable objects to inherit properties and methods from other objects
//When a certain method(or property) is called, it first checks inside the object but when it doesn't find, then search moves on Object’s prototype.

// Classes are a template for creating objects.
//Constructor method is called when an object is created from a class.
//extends Keyword: It's used to create a subclass that inherits from a parent class.
//super keyword is used to call the constructor of the parent class and to access and call methods from the parent class.

