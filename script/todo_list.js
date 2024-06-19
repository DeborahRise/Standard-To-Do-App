let taskList = (localStorage.getItem('taskList')) ? JSON.parse(localStorage.getItem('taskList')) : [];
let schedule = localStorage.getItem('schedule') ? JSON.parse(localStorage.getItem('schedule')) : [];
let statusList = localStorage.getItem('statusList') ? JSON.parse(localStorage.getItem('statusList')) : [];

const formatdate = (datetime) => {
    const dateObj = new Date(datetime);
    const pattern = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        // minute: '2-digit',
        hour24: true
    };
    return dateObj.toLocaleString('en-US', pattern);
};

const displayTodo = () => {
    let todoHtml = "";
    taskList.forEach((task, i) => {
        const taskId = `task-${i}`
                const status = statusList[i] || 'undone';
                const statusClass = status === 'done' ? 'tasklist2' : 'tasklist'
                const formatted_date = formatdate(schedule[i]);
                todoHtml += `<div id="${taskId}" class="${statusClass}" style="margin-bottom: 10px;">
                    <div>${taskList[i] || 'empty task'}</div>
                    <div> ${formatted_date || '--'} </div>
                    <button class="delete-button" onclick="deleteTask(${i})">Delete</button>
                    <select name="TaskStatus" id="TaskStatus-${i}" onchange="handleChange(${i}, this)">
                            <option value="undone" ${status === 'undone' ? 'selected' : ''}>Undone</option>
                            <option value="done" ${status === 'done' ? 'selected' : ''}>Done</option>
                        </select>
                </div>`;
    });
    document.querySelector('.js-tasklist').innerHTML = todoHtml;
}

addingInput = document.querySelector('.js-input-task');
addingInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter"){
        addTask();
    }
});

const addingTask = document.querySelector('.js-add-button');
addingTask.addEventListener('click', () => {
    addTask();
});
const addTask = () => {
    let taskName = document.querySelector('.js-input-task').value;
    let taskDate = document.querySelector('.js-input-datetime').value
    taskList.push(taskName);
    schedule.push(taskDate);
    statusList.push('undone');
    displayTodo();
    document.querySelector('.js-input-task').value = "";
    locStorage();
};

const deleteTask = (index) => {
    taskList.splice(index, 1)
    schedule.splice(index, 1)
    statusList.splice(index, 1)
    displayTodo();
    locStorage();
};

const handleChange = (index, selectElement) => {
    const selectedOption = selectElement.value;
    const taskId = `task-${index}`;
    const taskElement = document.getElementById(taskId);

    if (selectedOption === 'done') {
        taskElement.classList.remove("tasklist")
        taskElement.classList.add("tasklist2")
        localStorage.setItem('taskList', JSON.stringify(taskList));
        localStorage.setItem('schedule', JSON.stringify(schedule));
    } else if (selectedOption === 'undone')  {
        taskElement.classList.remove("tasklist2")
        taskElement.classList.add("tasklist")
    }
    statusList[index] = selectedOption;
    locStorage();
}
const locStorage = () => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    localStorage.setItem('schedule', JSON.stringify(schedule));
    localStorage.setItem('statusList', JSON.stringify(statusList));
}
displayTodo();
