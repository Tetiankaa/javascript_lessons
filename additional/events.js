// window.onload = function () {
//     console.log('load')
// }
// document.onreadystatechange = function () {
//     if (document.readyState === 'interactive'){
//         document.body.innerText = 'loading start'
//     }
//     if (document.readyState === 'complete'){
//         document.body.innerText = 'loading complete'
//     }
// }

// let div = document.getElementById('main');
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of products) {
//     let productBlock = document.createElement('div');
//
//     let h2 = document.createElement('h2');
//     let img = document.createElement('img');
//
//     h2.innerText = `${product.title} ${product.price} EUR`
//     img.src = product.image;
//     img.alt = product.title;
//
//    let btn =  document.createElement('button');
//     btn.innerText = 'add to cart';
//
//     btn.onclick = function () {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         cart.push(product);
//         localStorage.setItem('cart',JSON.stringify(cart));
//     }
//
//     productBlock.append(h2,img,btn);
//     div.appendChild(productBlock);
// }
//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let block = document.getElementById('count');

let count = localStorage.getItem('count') || 0;
let newCount = (+count + 1).toString();

block.innerText = newCount;
localStorage.setItem('count', newCount);
//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та
// час відвідування сторінки.
let json = localStorage.getItem('sessions');
let sessions = json ? JSON.parse(json) : [];


sessions.push({date: new Date()});
localStorage.setItem('sessions', JSON.stringify(sessions));

//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

//
// let users = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
//     {id: 5, name: 'max', age: 30, status: true},
//     {id: 6, name: 'anya', age: 31, status: false},
//     {id: 7, name: 'oleg', age: 28, status: false},
//     {id: 8, name: 'andrey', age: 29, status: true},
//     {id: 9, name: 'masha', age: 30, status: true},
//     {id: 10, name: 'karina', age: 31, status: false},
//     {id: 11, name: 'marina', age: 31, status: false},
//     {id: 12, name: 'maks', age: 30, status: true},
//     {id: 13, name: 'kolya', age: 29, status: true},
//     {id: 14, name: 'olya', age: 28, status: false},
//     {id: 15, name: 'max', age: 30, status: true},
//     {id: 16, name: 'anya', age: 31, status: false},
//     {id: 17, name: 'oleg', age: 28, status: false},
//     {id: 18, name: 'andrey', age: 29, status: true},
//     {id: 19, name: 'masha', age: 30, status: true},
//     {id: 20, name: 'katya', age: 31, status: false},
//     {id: 21, name: 'vasya', age: 31, status: false},
//     {id: 22, name: 'vira', age: 30, status: true},
//     {id: 23, name: 'kolya', age: 29, status: true},
//     {id: 24, name: 'svitlana', age: 28, status: false},
//     {id: 25, name: 'max', age: 30, status: true},
//     {id: 26, name: 'anya', age: 31, status: false},
//     {id: 27, name: 'oleg', age: 28, status: false},
//     {id: 28, name: 'andrey', age: 29, status: true},
//     {id: 29, name: 'masha', age: 30, status: true},
//     {id: 30, name: 'mykola', age: 31, status: false},
//     {id: 31, name: 'ivan', age: 31, status: false},
//     {id: 32, name: 'petya', age: 30, status: true},
//     {id: 33, name: 'boris', age: 29, status: true},
//     {id: 34, name: 'olya', age: 28, status: false},
//     {id: 35, name: 'max', age: 30, status: true},
//     {id: 36, name: 'anya', age: 31, status: false},
//     {id: 37, name: 'oleg', age: 28, status: false},
//     {id: 38, name: 'viktoria', age: 29, status: true},
//     {id: 39, name: 'masha', age: 30, status: true},
//     {id: 40, name: 'anna', age: 31, status: false},
//     {id: 41, name: 'vasya', age: 31, status: false},
//     {id: 42, name: 'galyna', age: 30, status: true},
//     {id: 43, name: 'kolya', age: 29, status: true},
//     {id: 44, name: 'olya', age: 28, status: false},
//     {id: 45, name: 'petro', age: 30, status: true},
//     {id: 46, name: 'anya', age: 31, status: false},
//     {id: 47, name: 'oleg', age: 28, status: false},
//     {id: 48, name: 'olha', age: 29, status: true},
//     {id: 49, name: 'masha', age: 30, status: true},
//     {id: 50, name: 'olya', age: 31, status: false},
//     {id: 51, name: 'maks', age: 31, status: false},
//     {id: 52, name: 'petya', age: 30, status: true},
//     {id: 53, name: 'anna', age: 29, status: true},
//     {id: 54, name: 'olya', age: 28, status: false},
//     {id: 55, name: 'oleksandr', age: 30, status: true},
//     {id: 56, name: 'anya', age: 31, status: false},
//     {id: 57, name: 'oleg', age: 28, status: false},
//     {id: 58, name: 'andrey', age: 29, status: true},
//     {id: 59, name: 'boris', age: 30, status: true},
//     {id: 60, name: 'olya', age: 31, status: false},
//     {id: 61, name: 'vasya', age: 31, status: false},
//     {id: 62, name: 'oksana', age: 30, status: true},
//     {id: 63, name: 'kolya', age: 29, status: true},
//     {id: 64, name: 'olya', age: 28, status: false},
//     {id: 65, name: 'max', age: 30, status: true},
//     {id: 66, name: 'anya', age: 31, status: false},
//     {id: 67, name: 'oleg', age: 28, status: false},
//     {id: 68, name: 'andrey', age: 29, status: true},
//     {id: 69, name: 'masha', age: 30, status: true},
//     {id: 70, name: 'olya', age: 31, status: false},
//     {id: 71, name: 'vasya', age: 31, status: false},
//     {id: 72, name: 'petya', age: 30, status: true},
//     {id: 73, name: 'kolya', age: 29, status: true},
//     {id: 74, name: 'olya', age: 28, status: false},
//     {id: 75, name: 'max', age: 30, status: true},
//     {id: 76, name: 'anya', age: 31, status: false},
//     {id: 77, name: 'oleg', age: 28, status: false},
//     {id: 78, name: 'andrey', age: 29, status: true},
//     {id: 79, name: 'masha', age: 30, status: true},
//     {id: 80, name: 'olya', age: 31, status: false},
//     {id: 81, name: 'vasya', age: 31, status: false},
//     {id: 82, name: 'petya', age: 30, status: true},
//     {id: 83, name: 'kolya', age: 29, status: true},
//     {id: 84, name: 'olya', age: 28, status: false},
//     {id: 85, name: 'max', age: 30, status: true},
//     {id: 86, name: 'anya', age: 31, status: false},
//     {id: 87, name: 'oleg', age: 28, status: false},
//     {id: 88, name: 'andrey', age: 29, status: true},
//     {id: 89, name: 'masha', age: 30, status: true},
//     {id: 90, name: 'olya', age: 31, status: false},
//     {id: 91, name: 'vasya', age: 31, status: false},
//     {id: 92, name: 'petya', age: 30, status: true},
//
// ];
//
// let prevBtn = document.getElementById('prevBtn');
// let nextBtn = document.getElementById('nextBtn');
//
// let page = 1;
//
// function displayUsers(page, usersPerPage = 20) {
//     let wrapper = document.getElementById('main');
//
//     let startIndex = (page - 1) * usersPerPage;
//     let endIndex = page * usersPerPage;
//     if (startIndex > 0) {
//         prevBtn.removeAttribute('disabled');
//
//     } else {
//         prevBtn.setAttribute('disabled', 'disabled');
//     }
//
//     if (endIndex < users.length) {
//         nextBtn.removeAttribute('disabled');
//     } else {
//         nextBtn.setAttribute('disabled', 'disabled');
//         endIndex = users.length;
//     }
//     let arr = [];
//     for (let i = startIndex; i < endIndex; i++) {
//         let element = document.createElement('div');
//         let h3 = document.createElement('h3');
//         let p = document.createElement('p');
//
//         h3.innerText = `ID: ${users[i].id}, name:${users[i].name}`;
//         p.innerText = `Age: ${users[i].age}`;
//         element.append(h3, p);
//
//         arr.push(element);
//     }
//     wrapper.replaceChildren(...arr);
// }
//
// displayUsers(page);
// prevBtn.addEventListener('click', () => displayUsers(page -= 1));
// nextBtn.addEventListener("click", () => displayUsers(page += 1));