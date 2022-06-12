// let title = "Придумать какой-нибудь заголовок",
// screens = "Простые, Сложные, Интерактивные",
// screenPrice = 5,
// rollback = 99,
// fullPrice = 100,
// adaptive = true;
let rollback = 50;

//  console.log(typeof (title));
//  console.log(typeof (fullPrice));
//  console.log(typeof (adaptive));
//  console.log(screens.length);
//  console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани");
//  console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");
//  console.log(screens.toLowerCase().split(", "));
//  console.log(fullPrice * (rollback / 100));

let title = prompt("Как называется ваш проект?", "");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let adaptive = prompt("Нужен ли адаптив на сайте?", " ");

let service1 = prompt("Какой дополнительный тип услуги нужен?", "");
let servicePrice1 = +prompt("Сколько это будет стоить?", 12000);

let service2 = prompt("Какой дополнительный тип услуги нужен?", "");
let servicePrice2 = +prompt("Сколько это будет стоить?", 12000);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - rollback);

console.log(servicePercentPrice);

if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
} else if ((fullPrice >= 15000) && (fullPrice < 30000)) {
    console.log("Даем скидку в 5%");
} else if ((0 <= fullPrice) && (fullPrice < 15000)) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
}
