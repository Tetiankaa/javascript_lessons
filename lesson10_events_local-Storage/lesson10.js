// forms
//console.log(document.forms);
//let form1 = document.forms['form_1'];
// console.log(form1);
//
// console.log(form1.login);
// console.log(form1.password);
//
// const firstForm = document.forms[0];
// console.log(firstForm.elements);

let forms = document.forms;
console.log(forms.length);
console.log(forms[0].name);
console.log(forms.item(0).name);
console.log(forms[0].elements[1].name);
console.log(forms[0].elements[1].value);
console.log(forms.namedItem("form_2").innerHTML);

//events
// window.onload = function () {
//     console.log('the page was loaded');
// }

// window.onmousemove = function (event) {
//     console.log(event.clientX, event.movementY);
// }

let target = document.getElementsByClassName('target')[0];
let flag = false;
target.onclick = function () {
    if (!flag) {
        this.style.width = '200px';
        flag = !flag;
    } else {
        this.style.width = '100px';
        flag = !flag;
    }
}
//
// form1.onsubmit = function (event) {
//     event.preventDefault();
//     console.log('submit'); // is possible to use only 1 time
// }
//
// form1.addEventListener('submit', function (e) { // is possible to use many times
//     e.preventDefault();
//     console.log(this.login.value);
//     console.log(this.password.value);
// });
//
// form1.password.onfocus = function () {
//     this.type = 'text';
// }
// form1.password.onblur = function () {
//     this.type = 'password';
// }

// local storage

// form1.addEventListener('submit', function (e) {
//     e.preventDefault();
//     let login = this.login.value;
//     let password = this.password.value;
//
//     let obj = {login, password};
//     localStorage.setItem('userData', JSON.stringify(obj));
// });

console.log(localStorage.getItem('userData'));

const storedUser = JSON.parse(localStorage.getItem('userData'));
console.log(storedUser);

//****

let form2 = document.forms['form_2'];

let ls = JSON.parse(localStorage.getItem("products"));
if (!ls) {
    localStorage.setItem("products", JSON.stringify([]));
    ls = [];
}

form2.onsubmit = function (e) {
    e.preventDefault();

    let product = {
        title: this.title.value,
        quantity: this.quantity.value
    }

    ls.push(product);
    let jsonString = JSON.stringify(ls);
    localStorage.setItem("products", jsonString);
}

let itemsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
console.log(itemsFromLocalStorage);
for (let a = 0; a < itemsFromLocalStorage.length; a++) {
    let item = itemsFromLocalStorage[a];
    let div = document.createElement("div");
    div.innerText = item.title + " " + item.quantity + " pieces";
    div.style.fontSize = '20px';
    div.style.color = 'purple';
    document.body.append(div);
}

//document.forms - provides access to all the HTML forms within the current document
//document.forms['form_1'] - we can access form controls directly by name or ID
//elements property - is used to access its elements (input fields, buttons, etc.)

// Event is a specific action, such as a mouse click or keypress, that can trigger code to execute in response.

//window.onload is an event handler that's used to execute code when the entire web page has finished loading.
//window.onmousemove is an event handler that responds to mouse movement events on the webpage.
//onsubmit - this event is associated with an HTML <form> element and is triggered when the user clicks the submit button
//event.preventDefault() - is used to prevent default behaviors of an event

// addEventListener - function that we can attach to HTML elements to specify what should happen when a particular event occurs.

//onfocus: is triggered when an element becomes the active element
//onblur:  is triggered when an element loses focus

//Local Storage - is a key-value storage mechanism that allows web applications to store data locally within a user's browser.
//This data persists even after the user closes the browser or navigates away from the website.
//Storage limit is usually around 5-10 MB per domain

//localStorage.setItem - is used to store data
//localStorage.getItem  - is used to retrieve data
//localStorage.removeItem - is used to remove an item
//localStorage.clear() - is used to clear all data stored in local storage