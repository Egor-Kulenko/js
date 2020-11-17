function startgame(){
const word = "Коллайдер";
let errCnt = 6;
let guessWord = "";
//while 
console.log(word);
console.log(word.charAt(9));
console.log(word.length);

for (let i = 0; i < word.length; i++) {
    guessWord += "-";
}
console.log(guessWord);
console.log(word.length === guessWord.length);

while (errCnt) {
    let char = prompt('Введите букву');
    let newWord = "";
    for (let i = 0; i < word.length; i++){
        if (char === word.charAt(i)) {
            newWord += char;
            //guessWord.charAt(i) = char;
        } else { 
            newWord += guessWord.charAt(i);
        }
    }
    if (guessWord === newWord){
        errCnt --;
    } else {
        guessWord = newWord;
    }
   if (guessWord.toLowerCase() === word.toLowerCase) {
       console.log("Victory!");
       break;
   }
}
console.log("Game over!");
}