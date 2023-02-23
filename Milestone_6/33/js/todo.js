function loadTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodo(data));
}

function displayTodo(todos) {
  // Get the container
  const todoContainer = document.getElementById("todo-container");

  for (const todo of todos) {
    // Create the child element
    const todoDiv = document.createElement("div");
    // Set innerText/innerHTML
    todoDiv.innerHTML = `
    <h3>Title: ${todo.title}</h3>
    <p>User: ${todo.userId}</p>
    <p>Is completed: ${
      todo.completed === true ? "complete" : "not complete"
    }</p>
    `;
    // appendChild
    todoContainer.appendChild(todoDiv);
  }
}

loadTodo();
