const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];  //이미지의 개수만큼 범위 돌려서 랜덤으로 보여주기

const bgImage = document.createElement("img");      //배경은 js에서 생성해서 html로 던져주기 위해 createElement 사용

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage);     //documetn.body
//document.body.prepend(bgImage);