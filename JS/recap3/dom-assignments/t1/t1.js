// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
for (let i = 0; i < todoList.length; i++) {
  let checked = '';
  if (todoList[i].completed === true) {
    checked = 'checked';
  }
  document.querySelector("ul").insertAdjacentHTML("beforeend", 
  `<li>
    <input type="checkbox" id="todo-${todoList[i].id}" ${checked} >
    <label for="todo-${todoList[i].id}">${todoList[i].task}</label>
  </li>`);
}

