let a = {
    x: 20,
    y:10,
    moveTo: function (newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}
console.log(a.x, a.y);
a.moveTo(10, 5);
console.log(a.x, a.y);

function Point(x, y) {
    this.x = x;
    this.y = y;
}
let A = new Point(12, 50);
let B = new Point(6,14);
console.log(A);
console.log(B);