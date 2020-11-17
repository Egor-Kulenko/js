/*
array - массив
массив - упорядоченная последовательность чего-то
[] - пустой массив
["sdhfid", 2, "dedx", 0, 1, true, undefined, 23];

*/
/*let hoy = ["печенька", 2, "Хоп хей лалалей", 0, 1, true, undefined, 23];
console.log(hoy.length);*/

let num = [];
function getNumber(max, min) {
    return Math.floor(Math.random() * (max - min) - min);
}
let i = 0;
while (i < 100) {
    num[i] = getNumber(101, 1);
    i++;
}
console.log(num);