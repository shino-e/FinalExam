const itemObj = {
    0: {id:'0', name: '維力一度贊 紅燒牛肉(3包/袋)', description: '★獨特口味，老饕最愛</br>★台灣速食麵老字號品牌', price: 'NT$135', img: 'TW/000001_1589276665.jpg'},
    1: {id:'1', name: '來一客杯麵 _鮮蝦魚板風味麵(3杯/組)', description: '★在地熟悉的味道</br>★親切料理的堅持</br>★道地的傳統美味</br>★吃出台灣味', price: 'NT$68', img: 'TW/000001_1620801190.jpg'},
    2: {id:'2', name: '維力 炸醬麵重量包123g(4包/袋)', description: '★台灣泡麵史最具代表性商品</br>★懷念的好味道</br>★麵體Q、料香濃</br>★獨特口味，老饕最愛', price: 'NT$85', img: 'TW/000001_1621820801.jpg'},
    3: {id:'3', name: '《滿漢大餐》珍味牛肉麵 (3包入)', description: '★在地熟悉的味道</br>★親切料理的堅持</br>★道地的傳統美味</br>★吃出台灣味', price: 'NT$145', img: 'TW/000001_1637031306.jpg'},
    4: {id:'4', name: '味丹《味味A》排骨雞湯麵(5包)', description: '風行台灣數十年的經典速食麵</br>沒有吃過味味A 的話，那你就別說自己有吃過速食麵！</br>不禁讓人驚嘆「厚∼有夠香！」你還在等什麼！', price: 'NT$85', img: 'TW/000001_1659318666.jpg'},
    5: {id:'5', name: '台酒TTL 花雕雞麵(200gx3包/袋)', description: '使用台酒遵循古法釀製的料理花雕酒，搭配濃郁藥膳湯頭，香Q的細麵與雞肉塊料理包</br>讓忙碌的現代消費者，能即時享用到中華美食文化的精華佳餚</br>品嚐傳統經典的好滋味!', price: 'NT$149', img: 'TW/000001_1663118593.jpg'},
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