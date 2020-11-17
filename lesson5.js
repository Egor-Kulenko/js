//типы данных: Number, Boolean, String

let a; //undefined
console.log(a);
// null 
let age = 16;
let access = age >= 12 ? "yes" : "no";
console.log(access);
// условия (условные выражения)
// 
let $ = 19;
//if ($ < 100) console.log("Выживем!");
if ($ > 50) {$ -= 50; console.log($);} else {
    console.log(`Бедный доллар - стоит ${$}`);
}
console.log();
console.log();
console.log();

let cash = 500;
if (cash >= 20000000) {
    console.log("Ура! Я бду без денег и дураком ");
} else if (cash >= 25000) { 
    console.log("Я стану музыкантом");
} else {
    console.log("Копим дальше на квартиру");
}

if (age >= 18 && age <= 59) {
    console.log("Вам ещё работать очень много");
} else if (age > 59) {
    console.log("Пора на пенсию, Дед");
} else if (age > 1 && age <= 17) {
    console.log("Тебе рано работать, иди учись!");
}
