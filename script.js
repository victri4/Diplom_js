let money = prompt('Ваш бюджет?');
let name = prompt('Название вашего магазина?');
let time ;

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {}, 
    open: false
}


for(let i = 0; i < 5; i++) {
    let a = prompt('Какой тип товаров будем продавать?');
    
    if ((typeof(a)) === 'string' && (typeof(a)) === null && a !='' && a.length < 50) {
        mainList.shopGoods[i] = a;  
    } else {
       alert('Неверный тип товара')
    }
}


alert(mainList.budget / 30);

console.log(mainList);