const itemObj = {
    0: {id:'0', name: '養養 香濃酸辣蝦味麵350g', description: '泰國第一品牌</br>超香濃的酸辣湯頭</br>帶有鮮蝦味</br>配上軟Q麵條</br>要來挑戰饕客們的味蕾', price: 'NT$99', img: 'SEA/000001_1579079857.jpg'},
    1: {id:'1', name: 'KOOL 螃蟹味鹹蛋黃乾拌麵4入(368g)', description: '★Kool鹹蛋黃乾拌麵系列帶來全新風味-螃蟹風味!</br>★香Q麵條完美地和新鮮的螃蟹風味粉結合</br>★快來嚐一口吧，您絕對不想放下筷子!', price: 'NT$119', img: 'SEA/000001_1581671164.jpg'},
    2: {id:'2', name: 'MAMEE 金廚南洋咖哩風味麵(404g)', description: '♨馬來西亞原裝進口♨</br>♨冬天來碗熱呼呼的泡麵♨</br>♨知名品牌MAMME金廚♨</br>♨獨特南洋咖哩風味♨</br>♨濃郁湯頭配上軟Q麵條♨</br>♨絕對讓饕客們愛不釋手♨', price: 'NT$106', img: 'SEA/000001_1624526771.jpg'},
    3: {id:'3', name: '益福檳城白咖哩麵105g*4包/袋', description: '馬來西亞33年知名老品牌</br>麵條Q彈有勁,不軟爛</br>使用天然辛香料,口味獨特', price: 'NT$119', img: 'SEA/000001_1633749445.jpg'},
    4: {id:'4', name: '印尼炒麵-原味(85g*40包)', description: '◎外箱有些微凹損，不影響內容物，介意勿下單</br>◎眾多網友強推的必吃炒麵</br>◎全球十大美味泡麵</br>◎一包量適合女生的食量剛剛好</br>◎便宜又好吃的宵夜好伙伴', price: 'NT$449', img: 'SEA/000001_1668390992.jpg'},
    5: {id:'5', name: '越南瑞法河粉(牛肉風味)70g*3入組', description: '★原材料精選越南優質大米</br>★傳統工藝製成的河粉,米香濃郁,嫩滑爽口</br>★湯頭精心研製,美味可口', price: 'NT$147', img: 'SEA/000001_1683083438.png'},
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

async function getData2() {
    let response = await fetch('https://tqs0p3lx9g.execute-api.us-east-1.amazonaws.com/default/CYCU0531');
    let obj = await response.json();
    console.log('fetch ok!');
    return obj.items;
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