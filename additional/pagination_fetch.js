// let container = document.getElementById('container');
// let prevBtn = document.getElementById('prev-btn');
// let nextBtn = document.getElementById('next-btn');

// fetch('https://dummyjson.com/products?limit=0&skip=0')
//     .then(response => response.json())
//     .then(({products}) => {
//         console.log(products)
//         let page = 1;
//
//         displayProducts(products,page);
//         prevBtn.addEventListener('click', () => displayProducts(products,page -= 1));
//         nextBtn.addEventListener('click', () => displayProducts(products,page +=1));
//
//     })
//
// function displayProducts(array,page, limitPerPage = 15) {
//     let startIndex = (page - 1) * limitPerPage;
//     let endIndex = page * limitPerPage;
//
//     if (startIndex > 0) {
//         prevBtn.removeAttribute('disabled');
//     } else {
//         prevBtn.setAttribute('disabled', true);
//     }
//
//     if (endIndex < array.length) {
//         nextBtn.removeAttribute('disabled')
//     } else {
//         nextBtn.setAttribute('disabled', true);
//         endIndex = array.length;
//     }
//
//     let arr = [];
//     for (let i = startIndex; i < endIndex; i++) {
//         let div = document.createElement('div');
//         let h3 = document.createElement('h3');
//
//         h3.innerText = `${array[i].title}`;
//         div.append(h3);
//         arr.push(div);
//     }
//     container.replaceChildren(...arr);
// }

// 2 solution

let container = document.getElementById('container');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');

fetch('https://dummyjson.com/products?limit=0&skip=0')
    .then(response => response.json())
    .then(({products}) => {
        let page = 1;

        displayProducts(products, page);
        prevBtn.addEventListener('click', () => {
            displayProducts(products, page -= 1)
        });
        nextBtn.addEventListener('click', () => {
            displayProducts(products, page += 1)
        });

    })

function displayProducts(array, page, limit = 15) {
    let countOfPages = Math.ceil(array.length / limit);

    let startIndex = (page - 1) * limit;
    let endIndex = page * limit;

    if (startIndex > 0) {
        prevBtn.removeAttribute('disabled')
    } else {
        prevBtn.setAttribute('disabled', true)
    }

    if (endIndex < array.length) {
        nextBtn.removeAttribute('disabled')
    } else {
        nextBtn.setAttribute('disabled', true);
        endIndex = array.length;
    }

    let arr = [];
    for (let i = startIndex; i < endIndex; i++) {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');

        h3.innerText = `${array[i].id} ${array[i].title}`;
        div.append(h3);
        arr.push(div);
    }
    container.replaceChildren(...arr);

    for (let i = 1; i <= countOfPages; i++) {
        let button = document.createElement('button');
        button.innerText = `${i}`;
        button.classList.add('pagination-number');
        button.setAttribute('page-index', i);
        container.appendChild(button);
    }

    document.querySelectorAll('.pagination-number').forEach(btn => {
        const pageIndex = Number(btn.getAttribute('page-index'));

        if (pageIndex) {
            btn.addEventListener('click', () => {
                displayProducts(array, pageIndex)
            })
        }
    })
}