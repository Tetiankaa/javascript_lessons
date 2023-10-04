const container = document.getElementById('container');

const url = 'https://dummyjson.com/users?limit=0&skip=0';

async function showUsers(){
    const response = await fetch(url);
    const {users} = await response.json();
    
   users.forEach(user=>{
       const userDiv = document.createElement('div');
       const paragraph = document.createElement('p');
       builder(user, paragraph);
       
       userDiv.appendChild(paragraph);
       container.appendChild(userDiv);
   })
}

function builder(user,p){
    for (const key in user) {
        if (typeof user[key] === 'object'){
            pBuilder(key,user[key],p);
        }else if (typeof user[key] === 'string' && isImageUrl(user[key])){
            imgBuilder(key,user[key],p);
        }else {
            build(key,user[key],p);
        }
    }
    
}

function isImageUrl(textToCheck) {
    const imageUrlPattern = /\.(.jpg|jpeg|png|gif|bmp|webp)$/i;
    return imageUrlPattern.test(textToCheck);
}
    function imgBuilder(key,value,tag) {
        let par = document.createElement('p');
        let span = document.createElement('span');
        span.innerHTML = `<b>${key}:</b>`
        let image = document.createElement('img');
        image.src = value;
        par.append(span,image);
        tag.appendChild(par);
    }
function pBuilder(key,value,tag) {
    let span = document.createElement('span');
    span.innerHTML = `<b>${key}:</b>`;
    let par = document.createElement('p');
    par.classList.add('pink');
    let par2 = document.createElement('p');
    par.append(span,par2)
    tag.appendChild(par);
    builder(value,par2);
}

function build(key,value,tag) {
    let par = document.createElement('p');
    let span = document.createElement('span');
    span.innerHTML = `<b>${key}:</b>`;
    const text = document.createTextNode(` ${value}`);
    par.append(span,text);
    tag.appendChild(par);
}

showUsers();