const title = document.getElementsByTagName('h1')[0];
const plusBtn = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const rangeValue = document.querySelector(".rollback span.range-value");

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");


const app = {
    title: "",
    screens: [],
    screenPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    allServicePrices: 0,
    rollback: 15,
    servicesPercent: {},
    servicesNumber: {},
    adaptive: true,

    init: function () {
        app.addTitle();

        startBtn.addEventListener('click', app.start);
        plusBtn.addEventListener('click', app.addSceenBlock);

    },
    addTitle: function () {
        document.title = title.textContent;
    },
    start: function () {
        alert('VVV');
        app.addSceens();
        app.addServices();
        app.addPrices();
        // app.getServicePercentPrices();

        console.log(app);
        app.showResult();
    },
    showResult: function () {
        total.value = app.screenPrice;
        totalCountOther.value = app.servicePricesPercent + app.servicePricesNumber;
        fullTotalCount.value = app.fullPrice;
    },
    addSceens: function () {
        screens = document.querySelectorAll(".screen"); //? почему его скопировали сюда? зачем переопределили?

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            app.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
        });
    },
    addServices: function () {

        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                app.servicesPercent[label.textContent] = +input.value;
            }

        });

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                app.servicesNumber[label.textContent] = +input.value;
            }
        });
    },

    addSceenBlock: function () {
        const cloneScreens = screens[0].cloneNode(true);

        screens[screens.length - 1].after(cloneScreens);
    },

    addPrices: function () {
        const scr = app.screens;
        app.screenPrice = scr.reduce(function (total, amount) {
            return total += amount.price;
        }, 0);

        for (let key in app.servicesNumber) {
            app.servicePricesNumber += app.servicesNumber[key];
        }

        for (let key in app.servicesPercent) {
            app.servicePricesPercent += (app.screenPrice * (app.servicesPercent[key] / 100));
        }

        app.fullPrice = +app.screenPrice + app.servicePricesPercent + app.servicePricesNumber;
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
}

app.init();






// logger: function () {
//     console.log(app.screens);
//     console.log(app.allServicePrices);
//     console.log("Полная стоимость " + app.fullPrice);
//     console.log("Скидка: " + app.getRollBackMessage(app.fullPrice));
//     console.log("Заголовок: " + app.title, typeof app.title);
//     console.log("Полная стоимость с вычитом отката: " + app.servicePercentPrices);
//     console.log(app.screens);
//     console.dir(app.services);
// }