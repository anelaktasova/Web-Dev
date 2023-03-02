const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListEl = document.getElementById('todos-list');
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let EditTodoId = -1;

renderTodos();

form.addEventListener('submit', function (event) {

    if (todoInput.value == ""){
    alert("You must write something")
    }
    else{
    event.preventDefault();
    saveTodo();
    renderTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
    }
  
});


function saveTodo() {
  const todoValue = todoInput.value;
  const isDuplicate = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());

      todos.push({
        value: todoValue,
        checked: false,
        color:'#00FF00',
      });
    }
    todoInput.value = '';

function renderTodos() {
  if (todos.length === 0) {
    todosListEl.innerHTML = '<center style = "color : rgb(143, 175, 229)">You don\'t have tasks today</center> ';
    return;
  }
  todosListEl.innerHTML = '';
  todos.forEach((todo, index) => {
    todosListEl.innerHTML += `
    <div class="todo" id=${index}>
      <i 
        class="bi ${todo.checked ? 'bi-check-circle-fill' : 'bi-circle'}"
        style="color : rgb(143, 175, 229)"
        data-action="check"
      ></i>
      <p class="${todo.checked ? 'checked' : ''}" data-action="check">${todo.value}</p>
      <i class="bi bi-trash" data-action="delete"></i>
    </div>
    `;
  });
}

todosListEl.addEventListener('click', (event) => {
  const target = event.target;
  const parentElement = target.parentNode;
  if (parentElement.className !== 'todo') return;
  const todo = parentElement;
  const todoId = Number(todo.id);
  const action = target.dataset.action;
  action === 'check' && checkTodo(todoId);
  action === 'delete' && deleteTodo(todoId);
});
function checkTodo(todoId) {
  todos = todos.map((todo, index) => ({
    ...todo,
    checked: index === todoId ? !todo.checked : todo.checked,
  }));
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}
function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);
  EditTodoId = -1;
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}