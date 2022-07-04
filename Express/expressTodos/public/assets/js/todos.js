const myTodos = document.querySelector('.todos');

fetch('/api/todos')
    .then(res => res.json())
    .then(todos => {
        console.log(todos)
        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i].todo;
            myTodos.appendChild(document.createElement('li')).textContent=`${todo}`;
        }
    });