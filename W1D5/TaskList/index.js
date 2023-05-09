const addTask = document.getElementById('add-task');
const clearTasks = document.getElementById('clear-tasks');
const data = document.getElementById('data');
const task = document.getElementById('task');

let listOfTasks = loadTasksFromLocalDB();
refreshScreen();

loadTasksFromLocalDB();

function refreshScreen() {
    data.value = "";

    let text = "";

    listOfTasks.forEach(task => {
        text += task + "\n";
    })

    data.value = text;

}

function saveTaskToLocalDB(task) {
    localStorage.setItem('tasks', listOfTasks);
}

function loadTasksFromLocalDB() {
    const tasks = localStorage.getItem('tasks');
    if (tasks == null) return [];

    return tasks.split(',');

}

addTask.addEventListener('click', () => {
    if (task.value === "" || task.value == null) return
    listOfTasks.push(task.value)
    saveTaskToLocalDB();
    refreshScreen();
    task.value = null;
})

clearTasks.addEventListener('click', () => {
    listOfTasks = [];
    saveTaskToLocalDB();
    refreshScreen();
    loadTasksFromLocalDB();
})