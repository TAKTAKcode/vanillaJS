const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

/**
 * toDoList 저장 (작성 시 localStorage에 저장)
 */
function saveToDos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

/**
 * toDoList 삭제 ("X" button 클릭 시)
 */
function deleteToDo (event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

/**
 * 입력한 ToDo 추가 함수
 */
function paintToDo (newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text: newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);     //목록에 보여지도록 추가
    saveToDos();            //localStorage에 추가
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


function listFilter() {


}

[1, 2, 3, 4].filter(listFilter)

listFilter(1) = 1
listFilter(2) = 2
listFilter(3) = 3
listFilter(4) = 4



