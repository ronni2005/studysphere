const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("task");
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button onclick="toggleComplete(this)">✅</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
});

function toggleComplete(button) {
  const task = button.closest("li");
  task.classList.toggle("completed");
}

function deleteTask(button) {
  const task = button.closest("li");
  task.remove();
}
