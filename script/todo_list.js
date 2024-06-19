let taskList = [];
let schedule =[];

const displayTodo = () => {
    let todoHtml = "";
    for (let i = 0; i<taskList.length; i++) {
        todoHtml += ` <p> ${taskList[i] || 'empty task'} ${schedule[i] || '--'} 
        <button onclick="deleteTask(${i})">Delete</button></p>`
    }
    document.querySelector('.js-tasklist').innerHTML = todoHtml;
}


const addTask = () => {
    let taskName = document.querySelector('.js-input-task').value;
    let taskDate = document.querySelector('.js-input-datetime').value
    taskList.push(taskName);
    schedule.push(taskDate);
    displayTodo();
    document.querySelector('.js-input-task').value = "";
};

const deleteTask = (index) => {
    taskList.splice(index, 1)
    schedule.splice(index, 1)
    displayTodo();
};

console.log('vaerify', taskList)