const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;

  taskList.appendChild(listItem);

  taskInput.value = "";

  listItem.querySelector(".delete-btn").onclick = () => listItem.remove();
}

addTaskBtn.onclick = addTask;
