const todo = document.querySelector(".todo");
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const ulList = document.querySelector(".todo-list ul");
const error = document.querySelector(".error-info");

const newTodo = () => {
	let newToDoItem = document.createElement("li");
	newToDoItem.textContent = todoInput.value;
	ulList.append(newToDoItem);
	todoInput.value = "";

	toolsPanel(newToDoItem); // możesz dodać parametr i
};

const toolsPanel = (newToDoItem) => {
	const toolsDiv = document.createElement("div");
	toolsDiv.classList.add("tools");
	newToDoItem.append(toolsDiv);
	const toolsDone = document.createElement("button");
	toolsDone.classList.add("cmplBtn");
	toolsDone.textContent = "Zrobione";
	toolsDiv.append(toolsDone);
	const toolsDel = document.createElement("button");
	toolsDel.classList.add("delBtn");
	toolsDel.textContent = "Usuń";
	toolsDiv.append(toolsDel);
};

const checkClick = (e) => {
	if (e.target.matches(".cmplBtn")) {
		e.target.closest("li").classList.toggle("completed");
	} else if (e.target.matches(".delBtn")) {
		delTask(e);
	}
};

const delTask = (e) => {
	e.target.closest("li").remove();
};

addBtn.addEventListener("click", newTodo);
ulList.addEventListener("click", checkClick);
