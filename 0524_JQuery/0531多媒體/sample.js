const itemObj = {
    0: {id: '0', name: '樂事洋芋片-海苔口味', description: '樂事只選用當令新鮮馬鈴薯，鮮切成金黃香脆洋芋片；以剛剛好的調味與天然薯香搭成完美絕配。最好吃的樂事洋芋片，隨時享受簡單的快樂！', price: '25', img: 'chips.jpg'},
    1: {id: '1', name: '維力炸醬麵', description: '維力炸醬麵，麵體Q、料香濃，乾麵附湯一包兩吃，道地家鄉口味是全家大小百吃不厭的好口味！', price: '20', img: 'noodle.jpg'},
    2: {id: '2', name: '麥香奶茶', description: '奶茶-獨特大麥香味讓人回味無窮', price: '15', img: 'milktea.jpg'},
    3: {id: '3', name: '麥香紅茶', description: '紅茶-獨特大麥香味讓人回味無窮', price: '15', img: 'blacktea.jpg'},
    4: {id: '4', name: '麥香綠茶', description: '綠茶-獨特大麥香味讓人回味無窮', price: '15', img: 'greentea.jpg'},
};

window.onload = function() {
    addListener();
    generateItems();
};

function openModal(title, text, price, img) {
    $("#modalTitle").text(title);
    $("#modalImg").attr("src", './img/' + img);
    $("#modalText").text(text);
    $("#modalPrice").text('售價：$' + price);
    $("#detailModal").css("display", "inline");
    $("#num").val("0");
}

function closeModal() {
    $('#detailModal').css("display", "none");
}

function addToCart() {
    alert('購物車測試');
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

function generateItems() {
    let objLength = Object.keys(itemObj).length;
    let needAppendElement = $("#contentDetail");
    for(let i=0; i<objLength; i++) {
        needAppendElement.append(newCardItem(itemObj[i.toString()]));
    }
}

function newCardItem(item) {
    let temp = '';
    temp += '<div class="cardItem">';
    temp += '  <img class="card-img-top" src="./img/' + item.img + '"></img>';
    temp += '  <div class="card-body">';
    temp += '    <p class="card-text" style="height: 3rem;">' + item.name + '</p>';
    temp += '    <a class="btn btn-secondary" style="width: 7rem;" href="./sample2.html?id=' + item.id + '">查看詳情</a>';
    temp += '  </div>';
    temp += '</div>';
    return temp;
}