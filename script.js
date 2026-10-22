
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", "Mark task as completed");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.append(checkbox, span, deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

// Add task when button is clicked
addBtn.addEventListener("click", addTask);

// Add task when Enter is pressed
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Clear all tasks
clearBtn.addEventListener("click", function () {
    if (taskList.children.length === 0) {
        alert("There are no tasks to clear!");
        return;
    }

    if (confirm("Do you want to delete all tasks?")) {
        taskList.replaceChildren();
    }
});
