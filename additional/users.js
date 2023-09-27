fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{
            let div = document.createElement('div');
            users.forEach(user =>{
                let h1 = document.createElement('h1');
                let a = document.createElement('a');
                a.href = `user.html?id=${user.id}`
                a.innerText = `${user.id} ${user.name}`
                h1.appendChild(a);
                div.appendChild(h1);
                }
            )
            document.body.appendChild(div);
        })