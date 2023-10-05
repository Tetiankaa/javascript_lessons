const container = document.getElementById('container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const LIMIT = 10;

const url = 'https://dummyjson.com/users?limit=0&skip=0';

async function showUsers(){
    const response = await fetch(url);
    const {users} = await response.json();

    let currentPage = 1;

    displayAll(users,currentPage);

    prevBtn.addEventListener('click',()=>{
        displayAll(users,currentPage -= 1);
    })
    nextBtn.addEventListener('click',()=>{
        displayAll(users,currentPage +=1);
    })
}

function displayAll(array,page) {
    const countPage = Math.ceil(array.length / LIMIT);

    let start = (page - 1) * LIMIT;
    let end = page * LIMIT;

    if (start>0){
        prevBtn.removeAttribute('disabled')
    }else {
        prevBtn.setAttribute('disabled',true)
    }

    if (end< array.length){
        nextBtn.removeAttribute('disabled')
    }else {
        nextBtn.setAttribute('disabled',true);
        end = array.length;
    }

    let arr = [];
    for (let i = start; i < end; i++) {
        let userDiv = document.createElement('div');
        let paragraph = document.createElement('p');
        buildUserDetails(array[i], paragraph);
        userDiv.appendChild(paragraph);
        arr.push(userDiv);
    }

    container.replaceChildren(...arr);

    for (let i = 1; i <= countPage; i++) {
        let button = document.createElement('button');
        button.innerHTML = `${i}`;
        button.classList.add('buttonNum');
        button.setAttribute('page-index',i);
        container.appendChild(button);
    }

    document.querySelectorAll('.buttonNum').forEach(btn=>{
        let btnIndex = Number(btn.getAttribute('page-index'));

        if (btnIndex){
            btn.addEventListener('click',()=>{
                displayAll(array,btnIndex);
            })
        }
    })
}

function buildUserDetails(user,paragraph){
    for (const key in user) {
        if (typeof user[key] === 'object'){
            buildObjectDetails(key,user[key],paragraph);
        }else if (typeof user[key] === 'string' && isImageUrl(user[key])){
            buildImage(key,user[key],paragraph);
        }else {
            buildKeyValue(key,user[key],paragraph);
        }
    }
    
}

function isImageUrl(textToCheck) {
    const imageUrlPattern = /\.(.jpg|jpeg|png|gif|bmp|webp)$/i;
    return imageUrlPattern.test(textToCheck);
}
    function buildImage(key,value,tag) {
        let infoParagraph = document.createElement('p');
        let span = document.createElement('span');
        span.innerHTML = `<b>${key}:</b>`
        let image = document.createElement('img');
        image.src = value;
        infoParagraph.append(span,image);
        tag.appendChild(infoParagraph);
    }
function buildObjectDetails(key,value,tag) {
    let span = document.createElement('span');
    span.innerHTML = `<b>${key}:</b>`;
    let infoParagraph = document.createElement('p');
    infoParagraph.classList.add('pink');
    let infoParagraph2 = document.createElement('p');
    infoParagraph.append(span,infoParagraph2)
    tag.appendChild(infoParagraph);
    buildUserDetails(value,infoParagraph2);
}

function buildKeyValue(key,value,tag) {
    let infoParagraph = document.createElement('p');
    let span = document.createElement('span');
    span.innerHTML = `<b>${key}:</b>`;
    const text = document.createTextNode(` ${value}`);
    infoParagraph.append(span,text);
    tag.appendChild(infoParagraph);
}

showUsers();