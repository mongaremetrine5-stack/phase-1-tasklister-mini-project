document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const input = document.getElementById('new-task-description');
    const taskText = input.value;

    if (taskText.trim() === '') return;

    const taskList = document.getElementById('tasks');
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);

     input.value = '';
  });
});
