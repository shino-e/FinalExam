const itemObj = {
    0: {id:'0', name: '【日本創意一品】醬油拉麵(88gx5P)', description: '★經典醬油，很經典</br>★日本原裝進口</br>喜歡日本拉麵必買必吃款</br>清爽和風醬油湯頭與香Q麵條口感，沒有負擔的口味</br>讓你吃過難以忘懷,即沖即食 宵夜的第一選擇', price: 'NT$139', img:'JP/000001_1478259551.jpg'},
    1: {id:'1', name: '【日本創意一品】鹽味拉麵(89gx5P)', description: '★簡單鹽味，不簡單</br>★日本原裝進口</br>喜歡日本拉麵必買必吃款</br>清爽和風醬油湯頭與香Q麵條口感，沒有負擔的口味</br>讓你吃過難以忘懷,即沖即食 宵夜的第一選擇', price: 'NT$139', img:'JP/000001_1478259556.jpg'},
    2: {id:'2', name: '日本《明星》夜店炒麵醬味135g', description: '★泡麵人必吃！經典醬味沒吃過會後悔！</br>★日本知名泡麵品牌「明星夜店」系列上市已20年</br>★完全 100% 道地日本炒麵風味，不用飛一趟！</br>★熱銷秘密在於「特製麵條」，吃起來就像麵包一樣香！</br>★內含 3 包醬包，3 步驟完成一碗美味炒麵</br>★輕鬆吃到就像現炒的炒麵！', price: 'NT$85', img: 'JP/000001_1515122813.jpg'},
    3: {id:'3', name: '日本《明星》海帶拉麵99g', description: '1. 日本最暢銷的明星海帶拉麵</br>2. 泡麵的專家明星，彈性與麵條細度兼具的拉麵</br>3. 爆量海帶芽搭配醬油風味湯頭,吃飽又兼顧營養', price: 'NT$85', img: 'JP/000001_1552268027.jpg'},
    4: {id:'4', name: '花月嵐大蒜拳骨激辣拉麵禮盒組 (1盒/2人份)', description: '史上最強日本NO.1 花月嵐拉麵拉麵禮盒系列第2彈</br>◆全球唯一，台灣獨家</br>◆人氣定番強打推薦</br>◆香辣過癮，欲罷不能</br>◆手工日曬超級麵條</br>◆獨門秘傳激辣湯頭</br>◆一吃上癮，回味無窮', price: 'NT$125', img: 'JP/000001_1637555604.jpg'},
    5: {id:'5', name: '明星炸豆皮烏龍碗麵110gX3', description: '日本明星原裝進口,明星商品經典款！</br>豆皮烏龍麵簡單經典', price: 'NT$225', img: 'JP/000001_1680748580.jpg'},
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let items;

window.onload = async function(){
    addListener();
    items = itemObj;
    setItem(items [urlParams.get('id')]);
    if(tmp = Math.floor){

    }
}


function setItem(obj) {
    $("#modalTitle").text(obj.name);
    $("#modalImg").attr("src", './img/' + obj.img);
    $("#modalText").html(obj.description);
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