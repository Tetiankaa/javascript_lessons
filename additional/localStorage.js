const inputField = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const todoForm = document.forms['todo-form'];

function showTasks() {
    let data = JSON.parse(localStorage.getItem('Task_Data')) || [];

    data.forEach(item=>{
        let li = document.createElement('li');
        li.innerHTML = item.task;
        li.dataset.taskId = item.id;

        let span = document.createElement('span');
        span.innerHTML = "\u00D7";

        li.appendChild(span);
        listContainer.appendChild(li);

        if (item.done){
            li.classList.add('checked');
        }

    })
}
todoForm.addEventListener('submit',function (e) {
    e.preventDefault();
    let task = inputField.value;
    const ID = Math.floor(Math.random() * 1000).toString();

    let li = document.createElement('li');
    li.innerHTML = task;
    li.dataset.taskId = ID;

    let span = document.createElement('span');
    span.innerHTML = "\u00D7";

    li.appendChild(span);
    listContainer.appendChild(li);

    saveTask(task,false,ID);

    inputField.value = '';
})
function saveTask(task,done,id) {
    let data = JSON.parse(localStorage.getItem("Task_Data")) || [];
    data.push({task,done,id});
    localStorage.setItem("Task_Data",JSON.stringify(data));
}
function removeTask(li) {
    const foundId = li.dataset.taskId;
    li.remove();

    let array = JSON.parse(localStorage.getItem('Task_Data')) || [];

    const newData = array.filter(item=>item.id !== foundId);

    localStorage.setItem('Task_Data', JSON.stringify(newData));
}
listContainer.addEventListener('click',function (e) {
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');

        let idd = e.target.dataset.taskId;
        let checked = e.target.classList.contains('checked');

        let data = JSON.parse(localStorage.getItem('Task_Data'));
        let index = data.findIndex(item=>item.id === idd);
        if (index !== -1){
            data[index].done = checked;
            localStorage.setItem('Task_Data', JSON.stringify(data));
        }
        }else if (e.target.tagName === 'SPAN'){

        removeTask(e.target.parentElement);
    }
},false)

showTasks();
