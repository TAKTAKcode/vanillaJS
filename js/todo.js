const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

/**
 * toDoList 저장 (작성 시 localStorage에 저장)
 */
function saveToDos () {
    localStorage.setItem("todos", JSON.stringify(toDos));

}

/**
 * toDoList 삭제 ("X" button 클릭 시)
 */
function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
}

/**
 * 입력한 ToDo 추가 함수
 */
function paintToDo (newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

/**
 * ToDo 입력 제출 시 이벤트
 */
function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);     //목록에 보여지도록 추가
    saveToDos();            //localStorage에 추가
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("this is turn of ", item));
}



