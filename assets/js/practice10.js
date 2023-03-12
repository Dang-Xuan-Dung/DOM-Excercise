const input = document.querySelector('form input');
const ul = document.querySelector('.todos');
const form = document.querySelector('form');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

function addTodo(todo) {
  const item = document.createElement('li');

  item.setAttribute('class', todo.completed ? 'completed' : '');
  item.innerHTML = `
        <span>${todo.todoName}</span>
        <i class="fas fa-trash"></i>
    `;

  item.addEventListener('click', function () {
    this.classList.toggle('completed');
    updateTodos();
  });

  item.querySelector('i').addEventListener('click', (e) => {
    e.target.parentElement.remove();
    updateTodos();
  });

  ul.appendChild(item);
  updateTodos();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoName = input.value.trim();
  todoName != '' ? addTodo({ todoName, completed: false }) : undefined;
  input.value = '';
});

function updateTodos() {
  const list = document.querySelectorAll('li');

  const todos = [];

  list.forEach((item) => {
    todos.push({
      todoName: item.querySelector('span').innerHTML,
      completed: item.classList.contains('completed'),
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}