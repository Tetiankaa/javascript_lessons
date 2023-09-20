const paginatedList = document.getElementById('paginated-list');
const listItems = paginatedList.querySelectorAll('li');

const paginationNumbers = document.getElementById('pagination-numbers');

const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');

const limit = 10;
const countPage = Math.ceil(listItems.length / limit);
let currentPage;

const appendPageNumber = (index) => {
    const pageNumber = document.createElement('button');

    pageNumber.innerHTML = index;
    pageNumber.setAttribute('page-index', index);
    pageNumber.setAttribute("aria-label", "Page " + index);
    pageNumber.classList.add("pagination-number");

    paginationNumbers.appendChild(pageNumber);
}
const getPages = () => {
    for (let i = 1; i <= countPage; i++) {
        appendPageNumber(i);
    }
}
window.addEventListener('load', function () {
    getPages();
    setCurrentPage(1);

    prevBtn.addEventListener('click',function () {
        setCurrentPage(currentPage - 1);
    })

    nextBtn.addEventListener('click',function () {
        setCurrentPage(currentPage+1);
    })

    document.querySelectorAll(".pagination-number").forEach(button => {
        const pageIndex = Number(button.getAttribute('page-index'));

        if (pageIndex) {
            button.addEventListener('click', () => {
                setCurrentPage(pageIndex);
            })
        }
    })
})

function setCurrentPage(page) {
    currentPage = page;

    handleActivePage();
    handlePageButtonStatus();

    const prevRange = (page - 1) * limit;
    const currentRange = page * limit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");

        if (index >= prevRange && index < currentRange) {
            item.classList.remove("hidden");
        }
    })
}

function handleActivePage() {
    document.querySelectorAll(".pagination-number").forEach(button => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute('page-index'));

        if (pageIndex === currentPage) {
            button.classList.add("active");
        }
    })
}

function disabledBtn(button){
    button.classList.add('disabled');
    button.setAttribute("disabled",true);
}

function enableBtn(button) {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
}
function handlePageButtonStatus() {
    if (currentPage === 1){
        disabledBtn(prevBtn);
    }else {
        enableBtn(prevBtn);
    }

    if (countPage === currentPage){
        disabledBtn(nextBtn);
    }else {
        enableBtn(nextBtn);
    }
}
