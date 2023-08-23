//increment and decrement
let x = 0;
x +=10; // x = x + 10

x++;
++x;
console.log(x);

let a = 0;
let b = a++;
console.log('a '+a);
console.log('b '+b);

let c = 0;
let d = ++c;
console.log('c ' + c);;
console.log('d ' + d);

//for loop
let users = [
    {name:"tanya", age:27, status:false},
    {name:"olha", age:28, status:true},
    {name:"viktor", age:20, status:false},
    {name:"katya", age:50, status:false}
];

// document.write(`<div>${users[0].name} </div>`);
// document.write(`<div>${users[1].name} </div>`);

//itar
for (let i=0;i<users.length;i++){
    let user = users[i];
    document.write(`<div>${user.name}</div>`)
}

for (let i = 0, y=100; i < users.length; i++, y +=100) {
    const user = users[i];
    document.write(`<div>${user.name} ${y}</div>`)
}
//ritar
for (let i = users.length - 1; i >= 0; i--) {
    const user = users[i];
    document.write(`<div>${user.name}</div>`)
}

//forof
for (const user of users) {
    document.write(`<div>${user.name} ${user.age}</div>`)
}

for (const user of users) {
    if (!user.status){
        document.write(`<div>${user.name} ${user.status} </div>`)
    }
}


for (const user of users) {
    //itin
    for (const userKey in user) {
        console.log(userKey, user[userKey])
    }
    console.log('---')
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(i,j)
    }
}

let i=0;
while (i<users.length){
    console.log(users[i].name);
    i++;
}

let count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);



//The increment (++) and decrement (--) operators are used to increase or decrease the value of a variable by 1.
//Prefix Increment (++variable): increases the value of the variable and returns the updated value.
//Prefix Decrement (--variable): decreases the value of the variable and returns the updated value.
//Postfix Increment (variable++): returns the current value of the variable and then increases it
//Postfix Decrement (variable--): returns the current value of the variable and then decreases it.

//document.write() is a method that is used to write content directly to the HTML document.

//The for loop is a fundamental control structure that allows to repeatedly execute a block of code for a specified number of times.
// It's especially useful for iterating over arrays, performing numerical calculations, and executing a sequence of actions.
//As long as the condition is true, the loop will continue to execute

// The for of loop allows to iterate over all elements without dealing with indexes.

//The for in loop is used to iterate over the keys (property names) of the object.

//The while loop  allows to repeatedly execute a block of code as long as a specified condition is true.

//The do...while  defines a code block to be executed once, and repeated as long as a condition is true.
// The do...while is used when you want to run a code block at least one time.

