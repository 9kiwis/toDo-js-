function addTask(event) {
    event.preventDefault();
    var taskInput = document.getElementById('input');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var taskList = document.getElementById('tasks');

        var taskElement = document.createElement('li');
        taskElement.className = 'task';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', markTaskAsCompleted);
        taskElement.appendChild(checkbox);

        var label = document.createElement('label');
        label.textContent = taskText;
        taskElement.appendChild(label);

        var deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', removeTask);
        taskElement.appendChild(deleteButton);

        taskList.appendChild(taskElement);

        taskInput.value = '';

        numberTasks();
    }
}

function removeTask(event) {
    var taskElement = event.target.parentNode;
    var taskList = document.getElementById('tasks');
    taskList.removeChild(taskElement);

    numberTasks();
}

function markTaskAsCompleted(event) {
    var taskElement = event.target.parentNode;

    if (event.target.checked) {
        taskElement.classList.add('completed');
    } else {
        taskElement.classList.remove('completed');
    }
}

function numberTasks() {
    var taskList = document.getElementById('tasks');
    var tasks = taskList.getElementsByClassName('task');

    for (var i = 0; i < tasks.length; i++) {
        tasks[i].setAttribute('data-task-number', i + 1);
    }
}

var todoForm = document.getElementById('form');
todoForm.addEventListener('submit', addTask);

var taskList = document.getElementById('tasks');
taskList.addEventListener('change', function (event) {
    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox'){
        markTaskAsCompleted(event);
    }
});

taskList.addEventListener('click', function (event) {
    if (event.target.className === 'delete-button') {
        removeTask(event);
    }
});