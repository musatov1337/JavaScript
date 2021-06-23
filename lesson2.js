//1 Задача
//В случае когда ++a возвращается увеличенное значение.
//В случае когда a++ будет увеличение на само себя и вернет исходное значение до этого.

//2 Задача
//2. Undifiend, но если вести просто x то он будет равен 5;

//3 Задача
if (a <= 0 || b <= 0) {
    alert(a * b);
} else {
    if (a >= 0 || b >= 0) {
        alert(a - b);
    } if (a => 0 || b <= 0) {
        alert(a + b);
    } else {
        if (a <= 0 || b >= 0) {
            alert(a + b);
        }
    }

}
//4 Задача
var a = Number(prompt("Введите число от 0 до 15"));
switch (a) {
    case 0:
        console.log("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 1:
        console.log("2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 2:
        console.log("3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 3:
        console.log("4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 4:
        console.log("6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 5:
        console.log("6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 6:
        console.log("7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 7:
        console.log("8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 8:
        console.log("9, 10, 11, 12, 13, 14, 15");
        break;
    case 9:
        console.log("10, 11, 12, 13, 14, 15");
        break;
    case 10:
        console.log("11, 12, 13, 14, 15");
        break;
    case 11:
        console.log("12, 13, 14, 15");
        break;
    case 12:
        console.log("13, 14, 15");
        break;
    case 13:
        console.log("14, 15");
        break;
    case 14:
        console.log("15");
        break;
    case 15:
        console.log("15");
        break;
    default:
        console.log("Неизвестное значение")
}

//5 Задача

var num1 = Number(prompt("Первое число"))
var num2 = Number(prompt("Второе число"))

function add(num1, num2) {
    return console.log(num1 + num2);
}
add(num1, num2);

function sub(num1, num2) {
    return console.log(num1 - num2);
}
sub(num1, num2);

function multi(num1, num2) {
    return console.log(num1 * num2);
}
multi(num1, num2);

function division(num1, num2) {
    return console.log(num1 / num2);
}
division(num1, num2);

//6 Задача
var arg1 = Number(prompt("Первое число"));
var arg2 = Number(prompt("Второе число"));
var operation = prompt("Операция +, - , *, /");

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            console.log(arg1 + arg2);
            break;
        case "-":
            console.log(arg1 - arg2);
            break;
        case "/":
            console.log(arg1 / arg2);
            break;
        case "*":
            console.log(arg1 * arg2);
            break;
        default:
            console.log("Неверные значения");
    }
}
mathOperation(arg1, arg2, operation);

//7 Задача
//0 - это число
//Null - это ссылка на место в памяти которое ничего не содержит.