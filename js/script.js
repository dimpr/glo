const title = document.getElementsByTagName('h1')[0].innerHTML;
console.log(title);

const handlerBtn = document.getElementsByClassName('handler_btn');
console.dir(handlerBtn);

const plusBtn = document.querySelector(".screen-btn");
console.dir(plusBtn);

const otherItemsPercent = document.querySelectorAll(".other-items.percent");
console.dir(otherItemsPercent);

const otherItemsNumber = document.querySelectorAll(".other-items.number");
console.dir(otherItemsNumber);

const inputRange = document.querySelector(".rollback input[type='range']");
console.dir(inputRange);

const rangeValue = document.querySelector(".rollback span.range-value");
console.dir(rangeValue);

const totalInput = document.getElementsByClassName("total-input");
console.dir(totalInput);

let allScreen = document.querySelectorAll(".screen");
console.dir(allScreen);


const app = {
    title: "",
    screens: [],
    screenPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    rollback: 15,
    services: {},
    adaptive: true,

    start: function () {
        app.asking();
        app.addPrices();
        app.getFullPrice();
        app.getServicePercentPrices();
        app.getTitle();
        app.logger();
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking: function () {

        do {
            app.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
        } while (app.isNumber(app.title));


        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt("Какие типы экранов нужно разработать?", "Простые");
            } while (app.isNumber(name));

            let price = 0;
            do {
                price = +prompt("Сколько будет стоить данная работа?", 13000);
            } while (!app.isNumber(price));

            app.screens.push({ id: i, name, price });
        }

        for (let i = 0; i < 2; i++) {

            let name
            do {
                name = prompt("Какой дополнительный тип услуги нужен?", "Простой");
            } while (app.isNumber(name));

            let price = 0;

            do {
                price = prompt("Сколько это будет стоить?", 11000);
            } while (!app.isNumber(price))

            if (name in app.services) {
                app.services[name + i] = +price;
            } else {
                app.services[name] = +price;
            }
        }

        app.adaptive = confirm("Нужен ли адаптив?");
    },

    addPrices: function () {
        const scr = app.screens;
        app.screenPrice = scr.reduce(function (total, amount) {
            return total += amount.price;
        }, 0);

        console.log("Цена за поэкранные " + app.screenPrice);

        for (let key in app.services) {
            app.allServicePrices += app.services[key];
        }
        console.log("Цена за сервисы " + app.allServicePrices);
    },

    getFullPrice: function () {
        app.fullPrice = +app.screenPrice + app.allServicePrices;
    },

    getTitle: function () {
        let str = app.title.trim();
        app.title = str[0].toUpperCase() + str.slice(1).toLowerCase();
    },

    getServicePercentPrices: function () {
        app.servicePercentPrices = app.fullPrice - (app.fullPrice * (app.rollback / 100));
    },

    getRollBackMessage: function (price) {
        if (app.fullPrice >= 30000) {
            return "Даем скидку в 10%";
        } else if ((app.fullPrice >= 15000) && (app.fullPrice < 30000)) {
            return "Даем скидку в 5%";
        } else if ((0 <= app.fullPrice) && (app.fullPrice < 15000)) {
            return "Скидка не предусмотрена";
        } else if (app.fullPrice < 0) {
            return "Что то пошло не так";
        }
    },

    logger: function () {
        console.log(app.screens);
        console.log(app.allServicePrices);
        console.log("Полная стоимость " + app.fullPrice);
        console.log("Скидка: " + app.getRollBackMessage(app.fullPrice));
        console.log("Заголовок: " + app.title, typeof app.title);
        console.log("Полная стоимость с вычитом отката: " + app.servicePercentPrices);
        console.log(app.screens);
        console.dir(app.services);
    }

}

app.start();


