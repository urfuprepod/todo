function setTodo(objTodo) {
    const todo = document.createElement('div');
    todo.className = 'todo';
    todo.innerHTML = `
    <span class="todo-name">${objTodo.todo}</span>
    <div class="todo-buttons">
    <button class="todo-done">Изменить статус выполнения</button>
    <button class="todo-delete">Удалить</button>
    </div>
    `;
    container.append(todo);
};

async function createTodo(e) {
    if (e.key === 'Enter' && e.target.value) {
        const todo = e.target.value;
        const response = await fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                todo: todo,
                completed: false,
                userId: 5,
              })
        }).then(res => res.json());
        setTodo(response);
    }
}

async function getTodos() {
    const response = await fetch('https://dummyjson.com/todos').then(res => res.json());
    return response.todos;
}

async function main() {
    const todos = await getTodos();
    todos.forEach((el) => setTodo(el))
}

const container = document.querySelector('.todos-container');
const input = document.querySelector('.todo-input');
input.addEventListener('keyup', createTodo)

main();
