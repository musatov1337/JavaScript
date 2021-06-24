//1 Задание
let x = 2;
let y = 2;
let flag = 1;
while (x < 100) {
    y = 2;
    flag = 1;
    while (y < x) {
        if (x % y == 0) {
            flag = 0;
        }
        y++;
    }
    if (flag == 1) {
        console.log(x)
    }
    x++;
}

//2 Задание
let basket = new Map([["Видеокарта", 200000], ["Процессор", 80000], ["Мат.плата", 30000], ["Монитор", 45000]]);
let price = 0;

function countBasketPrice(basket) {
    for (let amount of basket.values()) {
        price += amount;
        alert(price);
    }
}
countBasketPrice(basket)
//3 Задание
for (let x = 0; x < 10; alert(x++)) { }
//4 Задание
let z = 1;
let pyramid = "";

for (let i = "x"; z < 20; z++) {
    pyramid += i;
    console.log(pyramid)
}