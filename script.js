// let fullPrice,
//     title,
//     screens,
//     screenPrice,
//     servicePercentPrice,
//     allServicePrices,
//     rollback = 30,
//     service1,
//     service2,
//     servicePrice1,
//     servicePrice2,
//     adaptive;




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
            sum += +prompt("Сколько это будет стоить?", 12000);
        }
        return sum;
    },

    getFullPrice: function () {
        return app.screenPrice + app.allServicePrices;
    },

    getTitle: function () {
        let str = app.title.trim();
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    },

    getServicePercentPrices: function () {
        return app.fullPrice - (app.fullPrice * (app.rollback / 100));
    },

    RollBackMessage: function (price) {
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
        console.log("Скидка: " + app.RollBackMessage(app.fullPrice));
        console.log("Заголовок: " + app.getTitle(app.title));
        console.log("Полная стоимость с вычитом отката: " + app.servicePercentPrices);
        console.log("Доп сервис №1 " + app.service1);
        console.log("Доп сервис №2 " + app.service2);
    }

}

app.start();


// asking();
// allServicePrices = getAllServicePrices();
// fullPrice = getFullPrice();
// servicePercentPrices = getServicePercentPrices();

// const showTypeOf = function (variable) {
//     console.log(variable, typeof variable);
// }

// showTypeOf(getTitle(title));
// showTypeOf(screenPrice);
// showTypeOf(adaptive);

// 1) Перенести все функции в объект (сделать их методами объекта)
// 2) Создать в объекте метод start и перенести в него вызов метода asking и переопределение свойств. Вне самого объекта запускаем только метод start который в нужном порядке выполнит все действия.
// 3) Создать в объекте метод logger который будет выводить в консоль необходимую информацию. Данный метод запускаем в самом конце метода start (после того как все расчеты уже были произведены)
// 4) Вывести в консоль из метода logger все свойства и методы объекта appData с помощью цикла for in
// Таким образом вне объекта теперь должен быть только вызов метода start( )
// Поправить весь проект, ошибок в консоли быть не должно, а в консоль должна выводится необходимая информация!

// Сделать проверку при получении данных:
// - ответ на вопрос "Как называется ваш проект?" - строка
// - ответ на вопрос "Какие типы экранов нужно разработать?" - строка
// - ответ на вопрос "Сколько будет стоить данная работа?" - число
// - ответ на вопрос "Какой дополнительный тип услуги нужен?" - строка
// - ответ на вопрос "Сколько это будет стоить?" - число
// Что значит проверка данных: где должен быть текст там только текст(голые цифры не должно пропускать, а текст с цифрами - должно. Пример: "Купил ВАЗ 2108" - ок, "4567989" - нет), где цифры только цифры!
// Если проверку не прошло, то переспрашивать

// 2) Проверить, чтобы все работало и не было ошибок в консоли
// 3) Добавить папку с уроком на свой GitHub