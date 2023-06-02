const itemObj = {
    0: {name: '樂事洋芋片-海苔口味', description: '樂事只選用當令新鮮馬鈴薯，鮮切成金黃香脆洋芋片；以剛剛好的調味與天然薯香搭成完美絕配。最好吃的樂事洋芋片，隨時享受簡單的快樂！', price: '25', img: 'chips.jpg'},
    1: {name: '維力炸醬麵', description: '維力炸醬麵，麵體Q、料香濃，乾麵附湯一包兩吃，道地家鄉口味是全家大小百吃不厭的好口味！', price: '20', img: 'noodle.jpg'},
    2: {name: '麥香奶茶', description: '奶茶-獨特大麥香味讓人回味無窮', price: '15', img: 'milktea.jpg'},
    3: {name: '麥香紅茶', description: '紅茶-獨特大麥香味讓人回味無窮', price: '15', img: 'blacktea.jpg'},
    4: {name: '麥香綠茶', description: '綠茶-獨特大麥香味讓人回味無窮', price: '15', img: 'greentea.jpg'},
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let items;

window.onload = async function(){
    addListener();
    items = await getData2();
    setItem(items [urlParams.get('id')]);
    if(tmp = Math.floor){

    }
}

function getData1() {
    fetch('https://tqs0p3lx9g.execute-api.us-east-1.amazonaws.com/default/CYCU0531')
    .then((response) => {
        return response.json()
    }).then((obj) => {
        console.log('fetch ok!');
        return obj.items;
    });
}

async function getData2() {
    let response = await fetch('https://tqs0p3lx9g.execute-api.us-east-1.amazonaws.com/default/CYCU0531');
    let obj = await response.json();
    console.log('fetch ok!');
    return obj.items;
}

function setItem(obj) {
    $("#modalTitle").text(obj.name);
    $("#modalImg").attr("src", './img/' + obj.imgURL);
    $("#modalText").text(obj.description);
    $("#modalPrice").text('售價：$' + obj.price);
    $("#num").val("0");
}

function addListener() {
    let num = document.getElementById("num");
    document.getElementById("up").addEventListener("click", function() {
        num.value = parseInt(num.value)+1;
    });
    document.getElementById("down").addEventListener("click", function() {
        if(num.value <= 0) {
            num.value = 0;
        }else {
            num.value = parseInt(num.value)-1;
        }
    });
}