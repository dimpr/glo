// let userNum, botNum;

// const getRandom = function () {
//     let a = Math.floor(Math.random() * 100) + 1;
//     console.log("Бот загадал " + a);
//     return a;
// }

// const getUserNum = function () {
//     let b = +prompt("Угадай число от 1 до 100", "");
//     console.log("Человек загадал " + b);
//     return b;
// }

// const isNumber = function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
// }

// botNum = getRandom();


// const game = function (x) {

//     userNum = getUserNum();
//     console.log(x);

//     if (isNumber(userNum)) {

//         if (userNum === x) {
//             return alert("Поздравляю, Вы угадали!!!");
//         } else if (userNum > x) {
//             alert("Загаданное число меньше");
//             game(x);
//         } else if (userNum < x) {
//             alert("Загаданное число больше");
//             game(x);
//         } else if (userNum === null) {
//             return alert("Игра окончена");
//         }
//     } else {
//         alert("Введи число!");
//         game(x);
//     }
// }

// game(botNum);






const game = function () {

    let userNum,
        botNum;

    let getRandom = function () {
        let a = Math.floor(Math.random() * 100) + 1;
        console.log("Бот загадал " + a);
        return a;
    }

    let getUserNum = function () {
        let b = prompt("Угадай число от 1 до 100", "");
        console.log("Человек загадал " + b);
        return b;
    }

    let isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    botNum = getRandom();
    comparison();

    function comparison() {

        userNum = getUserNum();

        if (userNum === null) {
            return alert("Игра окончена");
        }
        if (!isNumber(userNum)) {
            comparison();
        }
        if (userNum === botNum) {
            return alert("Поздравляю, Вы угадали!!!");
        } else if (userNum > botNum) {
            alert("Загаданное число меньше");
            comparison();
        } else if (userNum < botNum) {
            alert("Загаданное число больше");
            comparison();
        }

    }
}


game();

