// const items = [
//     ['樂事洋芋片-海苔口味','樂事只選用當令新鮮馬鈴薯，鮮切成金黃香脆洋芋片；以剛剛好的調味與天然薯香搭成完美絕配。最好吃的樂事洋芋片，隨時享受簡單的快樂！','25','chips.jpg'],
//     ['維力炸醬麵','維力炸醬麵，麵體Q、料香濃，乾麵附湯一包兩吃，道地家鄉口味是全家大小百吃不厭的好口味！','20','noodle.jpg'],
//     ['麥香奶茶','獨特大麥香味讓人回味無窮','15','milktea.jpg'],
//     ['麥香紅茶','獨特大麥香味讓人回味無窮','15','blacktea.jpg'],
//     ['麥香綠茶','獨特大麥香味讓人回味無窮','15','greentea.jpg']
// ];

const itemObj = {
    0: {id:'0', name: '韓國不倒翁 起司風味乾拌杯麵 (55g)', description: '★韓國原裝進口★宵夜的好選擇★濃郁起士香~~魅力無法檔', price: 'NT$49', img: 'KR/000001_1573719792.png'},
    1: {id:'1', name: '韓國不倒翁Q拉麵(純麵條)5入', description: '韓國原裝進口,麵條Q彈耐煮不易軟爛,火鍋或湯麵都可使用', price: 'NT$89', img: 'KR/000001_1576813452.png'},
    2: {id:'2', name: '韓國農心爽口烏龍麵(4入)', description: '◆道地韓國口味◆口味獨特◆超Q嚼勁十足，湯頭也十分夠味◆宵夜最佳選擇', price: 'NT$155', img: 'KR/000001_1578641782.jpg'},
    3: {id:'3', name: '韓國《農心》辛拉麵(4入)', description: '◆湯頭獨特、香氣十足◆麵Q帶勁◆道地韓國味', price: 'NT$155', img: 'KR/000001_1657005962.jpg'},
    4: {id:'4', name: '韓國火魔王辣味乾炒拉麵130g', description: '1.韓國最夯火魔王拉麵2.辣度高達14,444SHU3.辣的乾麵最對味4.使用卡羅萊納死神辣椒', price: 'NT$119', img: 'KR/000001_1673081145.jpg'},
    5: {id:'5', name: '韓國 少林麻辣麵(135gX4入)', description: '銷售逆風成長泡麵，韓國月銷百萬包,正宗韓國麻辣，堪稱吃一口讓辣辣控停不下來,烹煮完美比例:450cc水量煮4分半鐘', price: 'NT$276', img: 'KR/000001_1679378677.jpg'},
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
    temp+='         <a href="./detail_kr.html?id=' + item.id + '">';
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

//調整數量
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