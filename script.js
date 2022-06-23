let fullPrice,
    title,
    servicePercentPrice,
    allServicePrices;
let rollback = 30;

// let title = prompt("Как называется ваш проект?", "");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let adaptive = prompt("Нужен ли адаптив на сайте?", " ");
let service1 = prompt("Какой дополнительный тип услуги нужен?", "");
let servicePrice1 = +prompt("Сколько это будет стоить?", 12000);
let service2 = prompt("Какой дополнительный тип услуги нужен?", "");
let servicePrice2 = +prompt("Сколько это будет стоить?", 12000);

const getAllServicePrices = function () {
    allServicePrices = servicePrice1 + servicePrice2;
}

function getFullPrice() {
    fullPrice = screenPrice + allServicePrices;

    if (fullPrice >= 30000) {
        console.log("Даем скидку в 10%");
    } else if ((fullPrice >= 15000) && (fullPrice < 30000)) {
        console.log("Даем скидку в 5%");
    } else if ((0 <= fullPrice) && (fullPrice < 15000)) {
        console.log("Скидка не предусмотрена");
    } else if (fullPrice < 0) {
        console.log("Что то пошло не так");
    }

}



function getTitle(str) {
    //Убираем пробелы
    title = str.trim();
    //Пишем с заглавной
    title = title[0].toUpperCase() + title.toLowerCase().slice(1);

    console.log(title);
    return title;
}

function getServicePercentPrices() {
    servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
    return servicePercentPrice;
}


console.log(screens);
getAllServicePrices();
getFullPrice();
console.log("Полная стоимость с вычитом отката: ", getServicePercentPrices());
getTitle(prompt("Как называется ваш проект?", "sdfsadfsdf"));
