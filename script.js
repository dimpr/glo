
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
        app.title = prompt("Как называется ваш проект?", "Калькулятор верстки");

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать?", "Простые");
            let price = 0;
            do {
                price = +prompt("Сколько будет стоить данная работа?", 13000);
            } while (!app.isNumber(price));

            app.screens.push({ id: i, name, price });
        }

        for (let i = 0; i < 2; i++) {

            let name = prompt("Какой дополнительный тип услуги нужен?", "Простой");
            let price = 0;

            do {
                price = prompt("Сколько это будет стоить?", 11000);
            } while (!app.isNumber(price))

            app.services[name] = +price;

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
        console.log("Заголовок: " + app.title);
        console.log("Полная стоимость с вычитом отката: " + app.servicePercentPrices);
        console.log(app.screens);
    }

}

app.start();
