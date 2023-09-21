const loginForm     = document.querySelector("#login-form");
const loginInput    = document.querySelector("#login-form input");
const greeting      = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;   // '', "" 는 작동하지않는다 `만 작동한다
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log("그냥 커밋테스트 코드 추가");
}
 


loginForm.addEventListener("submit", onLoginSubmit);
 


