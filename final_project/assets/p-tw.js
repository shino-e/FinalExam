// const items = [
//     ['樂事洋芋片-海苔口味','樂事只選用當令新鮮馬鈴薯，鮮切成金黃香脆洋芋片；以剛剛好的調味與天然薯香搭成完美絕配。最好吃的樂事洋芋片，隨時享受簡單的快樂！','25','chips.jpg'],
//     ['維力炸醬麵','維力炸醬麵，麵體Q、料香濃，乾麵附湯一包兩吃，道地家鄉口味是全家大小百吃不厭的好口味！','20','noodle.jpg'],
//     ['麥香奶茶','獨特大麥香味讓人回味無窮','15','milktea.jpg'],
//     ['麥香紅茶','獨特大麥香味讓人回味無窮','15','blacktea.jpg'],
//     ['麥香綠茶','獨特大麥香味讓人回味無窮','15','greentea.jpg']
// ];

const itemObj = {
    0: {id:'0', name: '維力一度贊 紅燒牛肉(3包/袋)', description: '★獨特口味，老饕最愛★台灣速食麵老字號品牌', price: 'NT$135', img: 'TW/000001_1589276665.jpg'},
    1: {id:'1', name: '來一客杯麵 _鮮蝦魚板風味麵(3杯/組)', description: '★在地熟悉的味道★親切料理的堅持★道地的傳統美味★吃出台灣味', price: 'NT$68', img: 'TW/000001_1620801190.jpg'},
    2: {id:'2', name: '維力 炸醬麵重量包123g(4包/袋)', description: '★台灣泡麵史最具代表性商品★懷念的好味道★麵體Q、料香濃★獨特口味，老饕最愛', price: 'NT$85', img: 'TW/000001_1621820801.jpg'},
    3: {id:'3', name: '《滿漢大餐》珍味牛肉麵 (3包入)', description: '<br>★在地熟悉的味道</br>★親切料理的堅持★道地的傳統美味★吃出台灣味', price: 'NT$145', img: 'TW/000001_1637031306.jpg'},
    4: {id:'4', name: '味丹《味味A》排骨雞湯麵(5包)', description: '風行台灣數十年的經典速食麵,沒有吃過味味A 的話，那你就別說自己有吃過速食麵！不禁讓人驚嘆「厚∼有夠香！」你還在等什麼！', price: 'NT$85', img: 'TW/000001_1659318666.jpg'},
    5: {id:'5', name: '台酒TTL 花雕雞麵(200gx3包/袋)', description: '使用台酒遵循古法釀製的料理花雕酒，搭配濃郁藥膳湯頭，香Q的細麵與雞肉塊料理包，讓忙碌的現代消費者，能即時享用到中華美食文化的精華佳餚，品嚐傳統經典的好滋味。', price: 'NT$149', img: 'TW/000001_1663118593.jpg'},
};

window.onload = function() {
    addListener();
    generateItems();
};

function addListener() {
    
}
function generateItems() {
    let objLength = Object.keys(itemObj).length;
    let needAppendElement = $("#contentDetail");
    for(let i=0; i<objLength; i++) {
        // 新增child動作
        needAppendElement.append(newCardItem(itemObj[i.toString()]));
    }
}


function newCardItem(item) {
    let temp = '';
    // 寫child的架構
    temp+='<div class="cardItem">';
    temp+='         <a href="./detail_tw.html?id=' + item.id + '">';
    temp+='             <img class="card-img-top" src="./img/' +item.img+ '"></img>';
    temp+='             <div class="card-body">';
    temp+='             <h3 class="card-text" style="height: 3rem;">'+item.name+'</h3>';
    temp+='         </a>';
    temp+='        <p class="card-text" style="height: 3rem;">'+item.price+'</p>';
    temp+='        <a class="btn btn-secondary" style="width: 7rem;" onClick="openModal(\''+item.name+'\',\' '+item.description+'\', \''+item.price+'\', \''+item.img+'\')">加入購物車</a>';
    temp+='    </div>';
    temp+='</div> ';
    return temp;
}

function openModal(title, text, price, img) {
    $("#modalTitle").text(title);
    $("#modalImg").attr("src", './img/' + img);
    $("#modalPrice").text('售價：$' + price);
    $("#detailModal").css("display", "inline");
    $("#num").val("0");
}

function closeModal() {
    $('#detailModal').css("display", "none");
}

function addToCart() {
    alert('已加入購物車!');
}