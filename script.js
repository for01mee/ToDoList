// Get references to HTML elements
const inputbox = document.querySelector(".inputbox input");
const add = document.querySelector("#addbutton");
const todolist = document.querySelector(".itemlist");
const pendingTasks = document.querySelector(".pendingTasks");
const clearall = document.querySelector(".clearall");

// Function to show/hide the "Add" button based on user input
inputbox.onkeyup = () => {
  let UserEnterValue = inputbox.value;
  if (UserEnterValue.trim() != 0) {
    add.style.display = "block"; // Show the "Add" button
  } else {
    add.style.display = "none"; // Hide the "Add" button
  }
};

var item = [];

// Function to add a task to the array and update the UI
add.onclick = () => {
  item.push(inputbox.value); // Add the user input to the array
  showcase(); // Update the UI
};

// Function to display all the added tasks in the UI
function showcase() {
  let ListTag = "";
  item.forEach((element, index) => {
    ListTag += `<li>
                 <label class="box">
                    <input class="checkinput" type="checkbox">
                    <span class="checkmark"></span>${element}
                  </label>
                  <span class="icon">
                    <i class="del uil uil-plus-circle" onclick="deleteTask(${index})"></i>
                  </span>
                </li>`;
  });
  todolist.innerHTML = ListTag; // Update the task list
  inputbox.value = ""; // Clear the input box
  add.style.display = "none"; // Hide the "Add" button
  pendingTasks.textContent = item.length; // Update the pending task count
}

// Function to delete a task from the array and update the UI
function deleteTask(index) {
  item.splice(index, 1); // Remove the task from the array
  showcase(); // Update the UI
}

// Function to delete all tasks from the array and update the UI
clearall.onclick = () => {
  item = []; // Empty the array
  showcase(); // Update the UI
};

// Function to delete all completed tasks from the array and update the UI
document.querySelector(".clearcomtask").onclick = () => {
  var inputElems = document.querySelectorAll(".checkinput");
  var temp = [];
  for (var i = 0; i < item.length; i++) {
    if (inputElems[i].checked === true) {
      temp.push(item[i]);
    }
  }
  var j = 0;
  for (i = 0; i < item.length; i++) {
    if (item[i] === temp[j]) {
      item.splice(i, 1);
      j++;
      i--;
    }
  }
  showcase(); // Update the UI
};

// Function to mark all tasks as complete
document.querySelector(".complete").onclick = () => {
  checked(true); // Mark all tasks as checked
};

// Function to mark all tasks as incomplete
document.querySelector(".uncomplete").onclick = () => {
  checked(false); // Mark all tasks as unchecked
};

// Function to check or uncheck all tasks
function checked(params) {
  var inputElems = document.querySelectorAll(".checkinput");
  for (var i = 0; i < item.length; i++) {
    if (params == true) {
      inputElems[i].checked = true;
    } else {
      inputElems[i].checked = false;
    }
  }
}
