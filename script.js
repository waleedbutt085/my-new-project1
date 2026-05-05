// Get elements from HTML
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task when button clicked
addBtn.addEventListener('click', addTask);

// Add task when Enter key pressed
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    // Check if input is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create new task element
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-buttons">
            <button class="complete-btn">✓ Done</button>
            <button class="delete-btn">🗑 Delete</button>
        </div>
    `;

    // Add task to list
    taskList.appendChild(taskItem);

    // Clear input
    taskInput.value = '';
    taskInput.focus();

    // Add event listeners to buttons
    const completeBtn = taskItem.querySelector('.complete-btn');
    const deleteBtn = taskItem.querySelector('.delete-btn');

    // Complete task
    completeBtn.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
        completeBtn.textContent = taskItem.classList.contains('completed') ? '↺ Undo' : '✓ Done';
    });

    // Delete task
    deleteBtn.addEventListener('click', function() {
        taskItem.remove();
    });
}
