// const items = [
//     ['樂事洋芋片-海苔口味','樂事只選用當令新鮮馬鈴薯，鮮切成金黃香脆洋芋片；以剛剛好的調味與天然薯香搭成完美絕配。最好吃的樂事洋芋片，隨時享受簡單的快樂！','25','chips.jpg'],
//     ['維力炸醬麵','維力炸醬麵，麵體Q、料香濃，乾麵附湯一包兩吃，道地家鄉口味是全家大小百吃不厭的好口味！','20','noodle.jpg'],
//     ['麥香奶茶','獨特大麥香味讓人回味無窮','15','milktea.jpg'],
//     ['麥香紅茶','獨特大麥香味讓人回味無窮','15','blacktea.jpg'],
//     ['麥香綠茶','獨特大麥香味讓人回味無窮','15','greentea.jpg']
// ];

const itemObj = {
    0: {name: '養養 香濃酸辣蝦味麵350g', description: '泰國第一品牌,超香濃的酸辣湯頭,帶有鮮蝦味,配上軟Q麵條,要來挑戰饕客們的味蕾', price: 'NT$99', img: 'SEA/000001_1579079857.jpg'},
    1: {name: 'KOOL 螃蟹味鹹蛋黃乾拌麵4入(368g)', description: '★Kool鹹蛋黃乾拌麵系列帶來全新風味-螃蟹風味!★香Q麵條完美地和新鮮的螃蟹風味粉結合★快來嚐一口吧，您絕對不想放下筷子!', price: 'NT$119', img: 'SEA/000001_1581671164.jpg'},
    2: {name: 'MAMEE 金廚南洋咖哩風味麵(404g)', description: '♨馬來西亞原裝進口♨♨冬天來碗熱呼呼的泡麵♨♨知名品牌MAMME金廚♨♨獨特南洋咖哩風味♨♨濃郁湯頭配上軟Q麵條♨♨絕對讓饕客們愛不釋手♨', price: 'NT$106', img: 'SEA/000001_1624526771.jpg'},
    3: {name: '益福檳城白咖哩麵105g*4包/袋', description: '馬來西亞33年知名老品牌,麵條Q彈有勁,不軟爛,使用天然辛香料,口味獨特', price: 'NT$119', img: 'SEA/000001_1633749445.jpg'},
    4: {name: '印尼炒麵-原味(85g*40包)', description: '◎外箱有些微凹損，不影響內容物，介意勿下單◎眾多網友強推的必吃炒麵◎全球十大美味泡麵◎一包量適合女生的食量剛剛好◎便宜又好吃的宵夜好伙伴', price: 'NT$449', img: 'SEA/000001_1668390992.jpg'},
    5: {name: '越南瑞法河粉(牛肉風味)70g*3入組', description: '★原材料精選越南優質大米★傳統工藝製成的河粉,米香濃郁,嫩滑爽口★湯頭精心研製,美味可口', price: 'NT$147', img: 'SEA/000001_1683083438.png'},
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