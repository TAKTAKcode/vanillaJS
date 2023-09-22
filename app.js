const loginForm     = document.querySelector("#login-form");
const loginInput    = document.querySelector("#login-form input");
const greeting      = document.querySelector("#greeting");

const HIDDEN_CLASSNAME  = "hidden";
const USERNAME_KEY      = "username";

/**
 * Log In 버튼 클릭 시 이벤트
 */
function onLoginSubmit(event) {
    event.preventDefault();                         //브라우저의 기본 동작 막음 이후부터는 원하는 대로 조작 가능
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);     //입력한 이름을 localStorage를 통해 일시적으로 불러올 수 있음
    paintGreeting(username);
}

/**
 * show name 공통함수
 */
function paintGreeting (username) {
    greeting.innerText = `Hello ${username}`;       // '', "" 는 작동하지않는다 `만 작동한다 -> greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {   //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {                        //show the greeting
    paintGreeting(savedUsername);
}




