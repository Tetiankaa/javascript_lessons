//setTimeout, Asynchronous operations
setTimeout(function () {
    console.log('1');
}, 1000)
console.log('2');
console.log('3');

// setInterval(function () {
//     console.log("hello");
// },1000);

//  FETCH
fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then((productsResponse)=>{
        let {products} = productsResponse;


        for (const product of products) {

            let div = document.createElement('div');

            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let img = document.createElement('img');

            h2.innerText = product.title;
            p.innerText = product.description;
            img.src = product.thumbnail;

            div.append(h2,p,img);

            document.body.appendChild(div);
        }
        }
    )

// new Promise

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('1');
//         resolve();
//     },1000)
// });
//
// let promise2 = promise1.then(value => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('2')
//             resolve();
//         },1500)
//     })
// });
//
// promise2.then(value => {
//     setTimeout(()=>{
//         console.log('3')
//     },2000)
// })

// let promise = new Promise((resolve, reject) => {
//     let x = 1;
//     setTimeout(() => {
//         console.log(x);
//         if (true){
//             resolve(x);
//         }else {
//             reject("wrong value")
//         }
//
//     }, 1000)
// }).then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             value++;
//             console.log(value);
//             resolve(value);
//         }, 1000)
//     })
// }).then(y => {
//     setTimeout(() => {
//         y += 5;
//         console.log(y)
//     })
// })
//     .catch(reason => console.log(reason))


// Promise.all

let firstRequest = fetch('https://dummyjson.com/products/search?q=laptop').then(res=>res.json());
let secondRequest = fetch('https://dummyjson.com/products/search?q=tv').then(res=>res.json());
let thirdRequest = fetch('https://dummyjson.com/products/search?q=phone').then(res=>res.json());

let allRequests = Promise.all([firstRequest,secondRequest,thirdRequest]);
allRequests.then(value => {
    console.log(value);
    let response1 = value[0];
    let response2 = value[1];
    let response3 = value[2];
    console.log(response1.products);
    console.log(response2.products);
    console.log(response3.products);
})

// async await
 async function doAsyncFetch(url1,url2,url3){
    let response1 = await fetch(url1).then(value => value.json());
    let response2 = await fetch(url2).then(value => value.json());
    let response3 = await fetch(url3).then(value => value.json());

    return [response1.products,response2.products,response3.products]
 }
 doAsyncFetch('https://dummyjson.com/products/search?q=laptop','https://dummyjson.com/products/search?q=tv','https://dummyjson.com/products/search?q=phone')
     .then(value => console.log(value));


//***
// function doFetch(url) {
//     return fetch(url).then(res => res.json())
// }
//
// doFetch('https://dummyjson.com/quotes?skip=0&limit=100').then(quotes => {
//     let [...quotess] = quotes.quotes;
//
//     for (const quote of quotess) {
//         let div = document.createElement('div');
//
//         let h4 = document.createElement('h4');
//         let p  = document.createElement('p');
//
//         h4.innerText = `${quote.author} ${quote.id}` ;
//         p.innerText = quote.quote;
//
//         div.append(h4,p);
//         document.body.appendChild(div);
//     }
// })



//Asynchronous operations refer to tasks that don't block the execution of other code.
// They allow your program to continue running while waiting for a particular task to complete.

//setTimeout and setInterval: These functions allow you to execute code after a specified delay or at regular intervals without blocking the main thread.

//API stands for Application Programming Interface
//APIs define the methods and data formats that applications can use to request and exchange information.

//fetch function - is used to retrieve data from a server or send data to a server.

//Promise object represents a value that may not be available yet but will be in the future. Promises support chaining, where we can attach multiple "then" handlers
// .then  -  specify what to do when the data is successfully fetched and processed.
// .catch  - is used to handle errors if the Promise is rejected
// Promise object can be:
// - pending - working, the result is undefined.
// - fulfilled - the result is a value
// - rejected -  the result is an error object

//Promise.all - takes an array of promises as input and return a single Promise
//Promise.race - takes a list of promises as input and returns a promise as soon as one of the promises from the array is resolved

//Async/await - simplifies asynchronous code by allowing functions to pause execution until asynchronous operations are completed.