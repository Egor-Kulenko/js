/*

object - объект - набор неупорялоченных пар "ключ-значени"
*/
let obj = {}; //пустой объект
let cap = {
    russua: "Moscow",
    ukraine: "Kiev",
    japan: "Tokyo",
    usa: "Washington"
}
cap.russua = "Москва";
delete cap.usa;
//console.log(cap);
let cnt = "japan";
//console.log(cap[cnt]);

let car = {
    model: "lada kalina",
    color: "red",
    year: 2000,
    automat: false,
    user: {
        name: "Egor",
        rights: 25879
    },
    benzin: "dt"

}
/*

вывести фразу - у Егора есть машина 2000 года красного цвета с механ коробкой передач


*/

