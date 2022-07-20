const game = function () {

    let userNum,
        botNum;

    const getRandom = function () {
        return Math.floor(Math.random() * 100) + 1;
    }

    const getUserNum = function () {
        let b = prompt("Угадай число от 1 до 100", "");
        console.log("Человек загадал " + b);
        return b;
    }

    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    botNum = getRandom();
    comparison();

    function comparison() {

        userNum = getUserNum();

        if (userNum !== null) {

            if (isNumber(userNum)) {

                if (userNum == botNum) {
                    alert("Поздравляю, Вы угадали!!!");
                    return;
                } else if (userNum > botNum) {
                    alert("Загаданное число меньше");
                    comparison();

                } else if (userNum < botNum) {
                    alert("Загаданное число больше");
                    comparison();
                }
            }
        } else {
            alert("Игра окончена");
        }
        console.log("Бот загадал " + botNum);
    }
}


game();

