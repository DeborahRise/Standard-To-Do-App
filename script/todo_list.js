let taskList = [];
let schedule =[];

const displayTodo = () => {
    let todoHtml = "";
    for (let i = 0; i<taskList.length; i++) {
        const taskId = `task-${i}`
        todoHtml += `<div id="${taskId}" class="tasklist" style="margin-bottom: 10px;">
            <div>${taskList[i] || 'empty task'}</div>
            <div> ${schedule[i] || '--'} </div>
            <button class="delete-button" onclick="deleteTask(${i})">Delete</button>
            <select name="TaskStatus" id="TaskStatus" onchange="handleChange(${i}, this)">
                    <option value="undone">Undone</option>
                    <option value="done">Done</option>
                </select>
        </div>`;
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

const handleChange = (index, selectElement) => {
    const selectedOption = selectElement.value;
    const taskId = `task-${index}`;
    const taskElement = document.getElementById(taskId);

    if (selectedOption === 'done') {
        taskElement.classList.remove("tasklist")
        taskElement.classList.add("tasklist2")
    } else if (selectedOption === 'undone')  {
        taskElement.classList.remove("tasklist2")
        taskElement.classList.add("tasklist")
    }
}

console.log('vaerify', taskList)