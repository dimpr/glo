
const app = {
    title: "",
    screens: "",
    screenPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    rollback: 15,
    service1: "",
    service2: "",
    adaptive: true,

    start: function () {
        app.asking();
        app.allServicePrices = app.getAllServicePrices();
        app.fullPrice = app.getFullPrice();
        app.servicePercentPrices = app.getServicePercentPrices();
        app.title = app.getTitle();
        app.logger();
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking: function () {
        app.title = prompt("Как называется ваш проект?", "");
        app.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
        app.screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);

        while (!app.isNumber(app.screenPrice)) {
            app.screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
        }
        app.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                app.service1 = prompt("Какой дополнительный тип услуги нужен?", "");
            } else if (i === 1) {
                app.service2 = prompt("Какой дополнительный тип услуги нужен?", "");
            }
            do {
                price = prompt("Сколько это будет стоить?", 12000);
            } while (!app.isNumber(price))

            sum += +price;
        }

        return sum;
    },

    getFullPrice: function () {
        return +app.screenPrice + app.allServicePrices;
    },

    getTitle: function () {
        let str = app.title.trim();
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    },

    getServicePercentPrices: function () {
        return app.fullPrice - (app.fullPrice * (app.rollback / 100));
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
        console.log("Полная стоимость" + app.fullPrice);
        console.log("Скидка: " + app.getRollBackMessage(app.fullPrice));
        console.log("Заголовок: " + app.getTitle(app.title));
        console.log("Полная стоимость с вычитом отката: " + app.servicePercentPrices);
        console.log("Доп сервис №1 " + app.service1);
        console.log("Доп сервис №2 " + app.service2);

        for (let key in app) {
            console.log(key);
        }
    }

}

app.start();
