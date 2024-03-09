let taskList = document.getElementById("taskList");
let addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener('click', addTask)

function addTask() {
    let taskDesc = document.getElementById("task-listener");
    if (taskDesc.value.trim() === "") {
        alert("Empty Task")
        return
    } else {
        let tasks = document.createElement("li");
        tasks.classList.add("tasks")
        tasks.innerHTML = `
            <label class="task-cont">
            <input type="checkbox" class="ui-checkbox">
            <span class="task-desc">${taskDesc.value}</span>
            </label>
            <img class="task-del" src="./assets/icons/delete-01-stroke-rounded.svg" alt="delete">
        `
        taskList.appendChild(tasks)
        taskDesc.value = ""
        saveData()
    }
}

taskList.addEventListener('click', (e) => {
    if (e.target.tagName === "lABEL") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
    saveData()
}, false)

function saveData() {
    let storedData = localStorage.setItem('data', taskList.innerHTML);
}

function fetchData() {
    taskList.innerHTML = localStorage.getItem('data');
}

fetchData()