/*
while - цикл

*/
/*let apples = 5;
let peoples = 15;
while(apples < peoples) {
    console.log("Не хватает яблок, купим ещё!");
    apples = apples + 1
} 
console.log("Все получили по яблоку");*/

let age, present = 0, pig = 0, oldment = 18;
age = Math.floor(Math.random() * 18);
while (age < oldment) {
    present += 10;
    pig += present;
    age++;
    console.log(`Клаве ${age} лет!\nПапа
    подарил Клаве ${present}$.\nТеперь у Клавы есть ${pig}$\n`);
}
console.log(`За весь период Клава накопила ${pig}$`);
