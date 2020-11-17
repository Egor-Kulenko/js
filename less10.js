/*
Функции
*/
// f(x) = 2x + 10
function line(x = 5) {
    let y = 2 * x + 10
    return y;
}
let n = line(2);
console.log(n);
console.log(line(gtNumber(10)));
//line(1);
//line(6);
//line(8);
function gtNumber(max = 101, min = 0) {
return Math.floor(Math.random() * (max - min) + min);
}
console.log(gtNumber(10));