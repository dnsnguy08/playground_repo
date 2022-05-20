var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// get and display the view to local storage
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // initiate inner HTML content of todoList to a string
  // set content of todo counter to the length of the todos list 
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // Iterate through list of todos and add a list element for each index.
  // Append a 'Complete' button at the end of list item
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
function init() {
  // TODO: What is the purpose of the following line of code?
  // get the value of the 'todos' key in local storage and assign to a variable
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // if we have some todo value, add to todos list
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // render list elements and counter based on the todos length
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // converted object values to string then store it in 'todos'
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// clear previous entry, Add event listener for submission of todo, assign todo text to a variable
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // if no text found, do nothing.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
 // push the todo text to the todos list and save, reset todo input value
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  // Store todos from input values in the todos list
  // Get and display the todo from local storage 
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// listen for click event
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // if button was clicked, modify list by removing 1 element at its index.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // update the todos array inside of localStorage
    storeTodos();
    // get the updated todos from localstorage
    renderTodos();
  }
});

init();
