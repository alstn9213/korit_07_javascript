// DOM 요소 가져오기위한 변수 선언 및 초기화
const todoInput = document.getElementById('todo-input'); 
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos(){
  todoList.innerHTML = '';
  // todos 배열을 반복문으로 목록을 생성
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if(todo.completed) {  
      li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const span = document.createElement('span');
    span.className = 'todo-text'; 
    span.textContent = todo.text; 

    // 삭제 버튼 - button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times'; // x기호

    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);
    todoList.appendChild(li);

    checkbox.addEventListener('change', () => {
      todos[index].completed = checkbox.checked; 
      li.classList.toggle('completed', checkbox.checked);
      saveTodos();
    });

    deleteBtn.addEventListener('click', () => {
      const itemIndex = todos.findIndex(item => item.text === itemText);
      if(itemIndex !== -1) { 
        todos.splice(itemIndex, 1); 
        li.remove();
        saveTodos();
      }
    });
  });
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
  localStorage.setItem('temp', '안녕'); 
}

function addTodo() {
  const todoText = todoInput.value.trim(); 
  if(todoText === '') {
    alert('내용을 입력하세요');
    return; 
  } 

  const newTodo = {
    text: todoText,
    completed: false, 
  };

  todos.push(newTodo);
  todoInput.value = '';

  renderTodos(); 
  saveTodos(); 
}

addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    addTodo(); 
  }
});

window.onload = renderTodos();