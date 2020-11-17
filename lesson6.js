let sub = "ворон", verb = "сидел"
let n = Math.floor(Math.random() * 100);
if(n % 100 < 11 || n % 100 > 14) {

if(n % 10 === 1) {
   sub += "а";
   verb += "а";

} else if (n % 10 >= 2 && n % 10 <= 4) {
    sub += "ы";
   verb += "и";
} else {
    verb += "о";
}
}

console.log(`На ветке ${verb} ${n} ${sub} `)

const AGE = 15; 

console.log(Math.PI);
console.log(Math.E);
/* 
Math.sin(x)
Math.cos(x)
Math.tg(x)
Math.ctg(x)

*/
// Math.pow(x, step) - возведение в степень  x ** step
//Math.sqrt(x) - взять квадратный корень
// Math.random()- получает случайное в диапозоне от 0 до 1
console.log(Math.ceil(Math.random() * 100));
