//Задача 1
let num = Number(prompt("Введите число от  1 до 999"));

function objectNumber(num) {
    if (num / 100 >= 1 && num <= 999) {
        let hund = Math.floor(num / 100);
        let tenner = Math.floor((num - (hund * 100)) / 10);
        let units = num - ((hund * 100) + (tenner * 10));
        const numObj = {
            "сотни": hund,
            "десятки": tenner,
            "единицы": units
        };
        console.log(numObj);
    } else {
        const numObj = {
            "Объект": "Пустой"
        };
        console.log(numObj)
        console.log("Введите число от  1 до 999");
    }
}

//Задача 2
function addToBasket(arr, name, price) {
    arr.push({
        product: name,
        price: price,
    });
}
var basket = [{
    name: 'GeForce 780',
    price: 12000
},
{
    name: 'Asus ROG',
    price: 17000
},
{
    name: 'Intel Pentium',
    price: 7500
}];

function countBasket(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].price;
    }
    return sum;
}
alert('Общая стоимость составляет: ' + countBasketPrice(basket));
