const API_KEY = "97e436a5199046d76cc48c9b893ef4a1";     //내 API_KEY

function onGeoOk(position) {
    const lat = position.coords.latitude;   //위도
    const lng = position.coords.longitude;  //경도
    //url에 &units=metric 추가해서 온도를 섭씨로 구한다
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



