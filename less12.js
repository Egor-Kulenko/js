/*
Катя - управляющая кафе GumErCafe
Каркаде: 120 / 0,3 - 39 - 100 г
Американо: 230 / 0,2 -   зерна - 580/500 г
Латте: 300/ 0,5          parmalat - 85/1
Чай 120 / 0,3             чай 345/100шт

аренда - 380 000 / мес
кофемашинка - 299 000 тыс

Посещение - от 10 до 300
*/
let bill = 0;
let rent = 380000;
let month = 12;
let menu = {
    zikoriy:{
        price: 120,
        v: 0.3,
        order: +((15 * 39) / 100).toFixed(2)
    },
    americano:{
        price: 120,
        v: 0.2,
        order: +((7 * 580) / 500).toFixed(2)
    },
    latte:{
        price: 300,
        v: 0.5,
        order: +((7 * 580) / 500).toFixed(2) + 
        ((300 * 85) / 950).toFixed(2)

    },
    tea:{
        price: 120,
        v: 0.3,
        order: +(345 / 100).toFixed(2)
    },
    
    
}

function getNumber(max = 11, min = 0) {
    return Math.floor(Math.random() * (max - min) + min)
}
let order = ["zikoriy", "americano", "latte", "tea"];
function getOrder() {
    let prod = order[getNumber(order.length)];
    bill -= menu[prod].order;
    bill += menu[prod].price;
    console.log(`Купили чашку ${prod}`);
    let chance = getNumber(3);
    if (chance >= 2) {
        bill = getOrder(bill);
    }
    return bill;
}
while (month) {
    bill -= rent;
    for (let i = 0; i < 29; i++){
        let ppl = getNumber(151, 10);
        for (let j = 0; j < ppl; j++){
            bill = getOrder(bill);
        }
        console.log(`Сегодня в кафе побывало ${ppl} человек\nСумма на счету - ${bill} рублей`);
    }
    month--;
}