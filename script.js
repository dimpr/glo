let fullPrice,
    title,
    screens,
    screenPrice,
    servicePercentPrice,
    allServicePrices,
    rollback = 30,
    service1,
    service2,
    servicePrice1,
    servicePrice2,
    adaptive;


const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
    while (!isNumber(screenPrice)) {
        screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
    }
    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "");
        }
        sum += +prompt("Сколько это будет стоить?", 12000);
    }
    return sum;
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
}

const getTitle = function (str) {
    title = str[0].toUpperCase().trim() + str.toLowerCase().slice(1);
    return title;
}

function getServicePercentPrices() {
    return fullPrice - (fullPrice * (rollback / 100));
}

const rollBackMessage = function (price) {
    if (fullPrice >= 30000) {
        return "Даем скидку в 10%";
    } else if ((fullPrice >= 15000) && (fullPrice < 30000)) {
        return "Даем скидку в 5%";
    } else if ((0 <= fullPrice) && (fullPrice < 15000)) {
        return "Скидка не предусмотрена";
    } else if (fullPrice < 0) {
        return "Что то пошло не так";
    }
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrices = getServicePercentPrices();

console.log(screens);
console.log(allServicePrices);
console.log("Полная стоимость" + fullPrice);
console.log("Скидка: " + RollBackMessage(fullPrice));
console.log("Заголовок: " + getTitle(title));
console.log("Полная стоимость с вычитом отката: " + servicePercentPrices);
console.log("Доп сервис №1 " + service1);
console.log("Доп сервис №2 " + service2);
showTypeOf(getTitle(title));
showTypeOf(screenPrice);
showTypeOf(adaptive);
