const quotes = [
    {
        quote :
        "준비하지 않은 자는 기회가 와도 소용없다.",
        author :
        "알렉시스 드 토크빌"
    },
    {
        quote :
        "노력에 집착하라. 숙명적인 노력을.",
        author :
        "레오나르도 다 빈치"
    },
    {
        quote :
        "내일이란 오늘의 다른 이름일 뿐.",
        author :
        "윌리엄 포크너"
    },
    {
        quote :
        "강인한 의지 없이는 뛰어난 재능도 없다.",
        author :
        "오노레 드 발자크"
    },
    {
        quote :
        "나는 날마다 모든 면에서 점점 좋아지고 있다.",
        author :
        "에밀쿠에"
    },
    {
        quote :
        "불가능한 일을 해보는 것은 신나는 일이다.",
        author :
        "월트 디즈니"
    },
    {
        quote :
        "할 수 있다고 믿는 사람은 결국 그렇게 된다.",
        author :
        "샤론 드골"
    },
    {
        quote :
        "당신이 포기할 때, 나는 시작한다.",
        author :
        "엘론 머스크"
    },
    {
        quote :
        "나는 이룰 때까지 노력할 것이다.",
        author :
        "브라이언 트레이시"
    },
    {
        quote :
        "한번 포기하면 습관이 된다. 절대 포기하지 말아라.",
        author :
        "마이클 조던"
    },
    {
        quote :
        "나이가 성숙을 보장하지는 않는다.",
        author :
        "라와나 블랙웰"
    },
    {
        quote :
        "성공은 꿈꾸고, 믿고, 대담해지고, 실천하는데서 오는 것이다.",
        author :
        "존 디줄리어스 3세"
    },
    {
        quote :
        "삶은 당신이 만드는 것이다. 이전에도 그랬고 앞으로도 그럴 것이다.",
        author :
        "그랜마 모세"
    },
    {
        quote :
        "행운의 여신은 용기 있는 자를 좋아한다.",
        author :
        "버질"
    },
    {
        quote :
        "모험은 그 자체만으로도 해볼 만한 가치가 있다.",
        author :
        "아멜리아 에어하트"
    },
    {
        quote :
        "꿈이 없다면 아무 일도 일어나지 않는다.",
        author :
        "칼 샌드버그"
    },
    {
        quote :
        "내일이 곧 지금이다.",
        author :
        "엘리너 루즈벨트"
    },
    {
        quote :
        "자기 신뢰 없이는 성공하지 못한다.",
        author :
        "랄프 왈도 에머슨"
    }
]; //18개

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];       //배열크기만큼의 랜덤 수 범위를 돌려서 내림처리 후 보여주기

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;