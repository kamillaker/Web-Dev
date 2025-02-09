function addTask() {
    let taskInput = document.querySelector(".inputtar");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        li.classList.toggle("done", this.checked);
    };

    let span = document.createElement("span");
    span.textContent = taskText;

    let deleteButton = addDeleteButton(); 

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}


function addDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");

    let trashIcon = document.createElement("img");
    trashIcon.src = "trash.webp"; 
    trashIcon.alt = "Delete";
    trashIcon.classList.add("trash-icon");

    deleteButton.appendChild(trashIcon);
    deleteButton.onclick = function() {
        this.parentElement.remove(); 
    };

    return deleteButton;
}
