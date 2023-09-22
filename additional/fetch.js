// fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users=>{
//
//             for (const user of users) {
//                 fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
//                     .then(response=>response.json())
//                     .then(posts=>{
//                         for (const postsOfUser of posts) {
//                             let div  = document.createElement('div');
//                             let h2 = document.createElement('h2');
//                             let h3 = document.createElement('h3');
//                             let p = document.createElement('p');
//                             h2.innerText = `${user.name} id: ${user.id}`;
//                             h3.innerText = postsOfUser.title;
//                             p.innerText = postsOfUser.body;
//
//                             div.append(h2,h3,p);
//                             document.body.appendChild(div);
//                         }
//
//                     })
//
//             }
//
//         })

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users=>{
//         const userPromises = users.map(user=>{
//             return fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
//                 .then(response=>response.json())
//                 .then(posts=>{
//                     return {user,posts};
//
//                 });
//         });
//         return Promise.all(userPromises)
//     })
//     .then(userPostData=> {
//         console.log(userPostData)
//             for (const data of userPostData) {
//                 const {user, posts} = data;
//
//                 for (const postsOfUser  of posts) {
//                     let div = document.createElement('div');
//                     let h2 = document.createElement('h2');
//                     let h3 = document.createElement('h3');
//                     let p = document.createElement('p');
//                     h2.innerText = `${user.name} id: ${user.id}`;
//                     h3.innerText = postsOfUser.title;
//                     p.innerText = postsOfUser.body;
//
//                     div.append(h2, h3, p);
//                     document.body.appendChild(div);
//                 }
//
//
//             }
//         }).catch(error=>{
//             console.error(error)
// })

//***

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(users => {
//         Promise.all(users.map(user => {
//             return new Promise((resolve, reject) => {
//                 fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
//                     .then(r => r.json())
//                     .then(posts => {
//                         resolve({posts, user})
//                     })
//             })
//         })).then(arr => {
//
//             for (const item of arr) {
//                 let {posts, user} = item;
//                 console.log(posts);
//                 console.log(user);
//             }
//         })
//     })

// //***
// const foo = async ()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//
//     const promise =await Promise.all(users.map(async user=>{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
//         return await response.json();
//     }));
//     console.log(promise);
// }
//
// void foo();



