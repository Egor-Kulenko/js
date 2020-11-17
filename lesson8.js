let pigr = 0;
let pigd = 0;
let age = 0;
let oldment = 18;
let gift = 0;
let dinner = 0;
let dollarc = 78.0921;
let mg = 1500;
let daysw = 5;
let weeksy = 37;

for (age = 1; age <= oldment; age++) {
    gift += 10;
    pigd += gift;
    if (age >= 7) {
        for (let weeks = 0; weeks < weeksy; weeks++){
            pigr += mg;
            console.log(`В ${weeks + 1} учебная неделя`);
            for (let days = 0; days < daysw; days++) {
                dinner = Math.random() * (251-150) + 150;
                dinner = Math.floor(dinner);
                console.log(`Клава потратила на обед ${dinner} руб.`);
                pigr -= dinner;
            }
        }
    }
    console.log(`За год Клава накопила ${pigd}$ и ${pigr} руб.\n `);
}
pigr += +(pigd * dollarc).toFixed(2);
console.log(`За ${age} лет Клава накопила ${pigr} руб.`);