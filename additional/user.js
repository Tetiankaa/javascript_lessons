let id = new URL(location.href).searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>response.json())
        .then(user=>{
            let div = document.createElement('div');
            let ul = document.createElement('ul');
            userBuilder(user,ul);
            div.appendChild(ul);
            document.body.appendChild(div);
        })

// function userBuilder(userObject,tag){
//     for (const key in userObject) {
//         if (typeof userObject[key] !== 'object'){
//             let li = document.createElement('li');
//             li.innerText = `${key}: ${userObject[key]}`
//             tag.appendChild(li);
//         } else {
//             let ul = document.createElement('ul');
//             ul.innerText = `${key}: `;
//             tag.appendChild(ul);
//             userBuilder(userObject[key],ul);
//         }
//     }
// }

function userBuilder(object, ulList) {
    for (const key in object) {
        if (typeof object[key] === 'object' ){
            ulBuilder(key,object[key],ulList)
        }else {
            liBuilder(key,object[key],ulList);
        }
    }
}

function liBuilder(key,value,tag) {
    let li = document.createElement('li');
    li.innerText = `${key}: ${value}`;
    tag.appendChild(li);
}

function ulBuilder(key,value,tag) {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    ul.innerText = `${key}: `;
    li.appendChild(ul);
    tag.appendChild(li);
    userBuilder(value,ul);
}