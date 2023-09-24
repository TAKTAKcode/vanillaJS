const clock = document.querySelector("h2#clock");

// clock.innerText = "taktaktak";

/**
 * 시간세팅 (시분초 2자리로 통일. 문자열 변환 후 "0" 추가)
 */
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");      //시간
    const minutes = String(date.getMinutes()).padStart(2, "0");  //분
    const seconds = String(date.getSeconds()).padStart(2, "0");  //초
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock();                         //화면 오픈시 바로 세팅

setInterval(getClock, 1000);        //1초(1000ms)마다 갱신 
//setTimeout(getClock, 1000);        //1초 후에 한번 작동하고 끝