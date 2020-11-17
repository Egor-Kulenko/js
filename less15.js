let words = ["tea", "coffe", "milk"];
const getWord = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getWord(words));
