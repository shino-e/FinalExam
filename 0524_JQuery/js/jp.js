// const items = [
//     ['樂事洋芋片-海苔口味','樂事只選用當令新鮮馬鈴薯，鮮切成金黃香脆洋芋片；以剛剛好的調味與天然薯香搭成完美絕配。最好吃的樂事洋芋片，隨時享受簡單的快樂！','25','chips.jpg'],
//     ['維力炸醬麵','維力炸醬麵，麵體Q、料香濃，乾麵附湯一包兩吃，道地家鄉口味是全家大小百吃不厭的好口味！','20','noodle.jpg'],
//     ['麥香奶茶','獨特大麥香味讓人回味無窮','15','milktea.jpg'],
//     ['麥香紅茶','獨特大麥香味讓人回味無窮','15','blacktea.jpg'],
//     ['麥香綠茶','獨特大麥香味讓人回味無窮','15','greentea.jpg']
// ];

const itemObj = {
    0: {name: '【日本創意一品】醬油拉麵(88gx5P)', description: '★經典醬油，很經典★日本原裝進口,喜歡日本拉麵必買必吃款,清爽和風醬油湯頭與香Q麵條口感,沒有負擔的口味,讓你吃過難以忘懷,即沖即食 宵夜的第一選擇', price: 'NT$139', img: 'JP/000001_1478259551.jpg'},
    1: {name: '【日本創意一品】鹽味拉麵(89gx5P)', description: '★簡單鹽味，不簡單★日本原裝進口,喜歡日本拉麵必買必吃款,清爽和風醬油湯頭與香Q麵條口感,沒有負擔的口味,讓你吃過難以忘懷,即沖即食 宵夜的第一選擇', price: 'NT$139', img: 'JP/000001_1478259556.jpg'},
    2: {name: '日本《明星》夜店炒麵醬味135g', description: '★泡麵人必吃！經典醬味沒吃過會後悔！★日本知名泡麵品牌「明星夜店」系列上市已20年★完全 100% 道地日本炒麵風味，不用飛一趟！★熱銷秘密在於「特製麵條」，吃起來就像麵包一樣香！★內含 3 包醬包，3 步驟完成一碗美味炒麵★輕鬆吃到就像現炒的炒麵！', price: 'NT$85', img: 'JP/000001_1515122813.jpg'},
    3: {name: '日本《明星》海帶拉麵99g', description: '1. 日本最暢銷的明星海帶拉麵2. 泡麵的專家明星，彈性與麵條細度兼具的拉麵3. 爆量海帶芽搭配醬油風味湯頭,吃飽又兼顧營養', price: 'NT$85', img: 'JP/000001_1552268027.jpg'},
    4: {name: '花月嵐大蒜拳骨激辣拉麵禮盒組 (1盒/2人份)', description: '史上最強日本NO.1 花月嵐拉麵拉麵禮盒系列第2彈◆全球唯一，台灣獨家◆人氣定番強打推薦◆香辣過癮，欲罷不能◆手工日曬超級麵條◆獨門秘傳激辣湯頭◆一吃上癮，回味無窮', price: 'NT$125', img: 'JP/000001_1637555604.jpg'},
    5: {name: '明星炸豆皮烏龍碗麵110gX3', description: '日本明星原裝進口,明星商品經典款！豆皮烏龍麵簡單經典', price: 'NT$225', img: 'JP/000001_1680748580.jpg'},
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
    temp+='         <a href="#">';
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