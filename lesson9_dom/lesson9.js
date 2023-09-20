// console.log(document);
// console.log(document.head);
// console.log(document.body);

//find element by ID
let ul2 = document.getElementById('list-2');
console.log(ul2);

console.log(ul2.classList);
ul2.classList.add('newClass')

ul2.style.background = 'green';

//find elements by CLASS

let ulList = document.body.getElementsByClassName('menu');
console.log(ulList);

//find element by TAG
let li = document.getElementsByTagName('li');
console.log(li); // find all li elements in the document

let li2 = ul2.getElementsByTagName('li');
console.log(li2); // find li elements in the certain element

for (const li of li2) {
   li.innerText = "hello";
}

let targetId = document.getElementById('target');
targetId.innerHTML = '<h2>Heading</h2>';

let lis = document.querySelectorAll('.menu:first-of-type>li');
console.log(lis);

let ul1 = document.getElementsByClassName('menu')[0];

console.log(ul1.children);
console.log(ul1.childNodes);

let p =document.createElement('p');
p.innerText = 'lorem ipsum';
p.classList.add('xxx');
p.setAttribute('id','paragraph');
//document.body.appendChild(p);

let cloneP = p.cloneNode();
cloneP.innerText = 'text text';

document.body.append(p,cloneP,p.cloneNode(true));



// DOM represents the document as a tree of objects.These objects can be manipulated to change the content, structure, or style of the page.

//document.getElementById - is used to access and manipulate HTML elements based on their id attribute.

//document.getElementsByClassName: is used for selecting one or more elements by their class name.

//document.getElementsByTagName - is used for selecting elements by their tag name.

// classList.add() method is used to add one or more class names to the class attribute of an HTML element

// style.background - is used to change style of the selected element

// innerText property - allows to get or set the text content of an element, but it excludes hidden elements by applying CSS.

// innerHTML property - allows to get or set the HTML content within an HTML element.

//querySelectorAll method is used to select and retrieve a list of all the HTML elements that match a CSS selector.

// children - returns a collection (HTMLCollection) of only the element nodes among an element's child nodes.

//childNodes - returns a NodeList containing all element's child nodes, including element nodes, text nodes, comments, and other types of nodes.

// createElement - is used to create new HTML element

// setAttribute - is used to change existing attributes or add new ones.

//appendChild is used to add a single node within the DOM

//append is used to add multiple nodes and text to a parent element

//cloneNode() is  used to clone an entire element, or just the node itself without its children.