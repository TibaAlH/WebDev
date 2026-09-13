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
  `<li id="item-${todoList[i].id}">
    <input type="checkbox" id="todo-${todoList[i].id}" ${checked} >
    <label for="todo-${todoList[i].id}">${todoList[i].task}</label>
    <button id="delete-${todoList[i].id}">Delete</button>
  </li>`);

  const checkbox = document.querySelector(`#todo-${todoList[i].id}`);
  checkbox.addEventListener("change", function(){
    todoList[i].completed = checkbox.checked;
    console.log(todoList);
  })
  const button= document.querySelector(`#delete-${todoList[i].id}`)
  button.addEventListener("click", function() {
    const ul= document.querySelector("#todo-list");
    const li= document.querySelector(`#item-${todoList[i].id}`);
    ul.removeChild(li);
    todoList.splice(i, 1);
    console.log(todoList);
  }
  );
  
}

const addBtn= document.querySelector(".add-btn");
const dialog= document.querySelector("#addDialog");
addBtn.addEventListener("click", function() {
  dialog.showModal();
});
const saveBtn= document.querySelector("#saveBtn");
const item= document.querySelector("#item");
saveBtn.addEventListener("click", function(){
  const newItem={
    id: todoList.length + 1,
    task: item.value,
    completed: false,
  };
  todoList.push(newItem);
  document.querySelector("ul").insertAdjacentHTML("beforeend",
    `<li id="item-${newItem.id}">
      <input type="checkbox" id="todo-${newItem.id}">
      <label for="todo-${newItem.id}">${newItem.task}</label>
      <button id="delete-${newItem.id}">Delete</button>
    </li>`);
  dialog.close();
  console.log(todoList);
})
