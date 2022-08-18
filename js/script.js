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
const rollbackRange = document.getElementsByClassName('rollback');
const rollback = document.getElementById('total-count-rollback');


let screens = document.querySelectorAll(".screen");

let inputsScreen = document.querySelectorAll(".screen > .main-controls__select > select")[0];
console.log(inputsScreen);
let inputsScreenNumber = document.querySelectorAll(".screen > .main-controls__input > input")[0];
console.log(inputsScreenNumber);
startBtn.disabled = true;





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
    count: 0,

    // Продублировал функцию прослушки и логер тк не знал как ее назначить на уже созданный ряд изнутри клона, а если не внутри клона делать
    // то тогда не понятно как она будет получать клонированные колонки контекст вызова не работал

    logger: function (event) {
        if ((inputsScreen.selectedIndex > 0) && (inputsScreenNumber.value !== "")) {
            startBtn.disabled = false;
        }
    },

    checkChange: function () {
        inputsScreen.addEventListener('change', app.logger);
        inputsScreenNumber.addEventListener('input', app.logger);
    },

    //////////////////////////////

    init: function () {
        app.addTitle();
        startBtn.addEventListener('click', app.start);
        plusBtn.addEventListener('click', app.addSceenBlock);
        inputRange.addEventListener('input', app.changeRollbackRange);
        app.checkChange();
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    start: function () {
        app.addScreens();
        app.addServices();
        app.addPrices();
        // app.getServicePercentPrices();
        app.showResult();
    },

    showResult: function () {
        total.value = app.screenPrice;
        totalCountOther.value = app.servicePricesPercent + app.servicePricesNumber;
        fullTotalCount.value = app.fullPrice;
    },

    addScreens: function () {

        screens = document.querySelectorAll(".screen"); //почему мы ее переопределили? почему функция не может писать во внешнюю переменную…

        screens.forEach(function (screen, index) {


            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            app.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,

            });
            app.count += +input.value;
        });
    },

    /// сначала вывел логер в отдельную функцию но доллго не мог понять как в него передать обьект прослушки, все время выдавал ошибку решеил сделать стрелками
    addSceenBlock: function () {
        startBtn.disabled = true;
        const cloneScreens = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreens);

        console.log(cloneScreens);
        let cloneSelect = cloneScreens.querySelector('.main-controls__select > select');
        let cloneInput = cloneScreens.querySelector('.main-controls__input > input');

        cloneSelect.addEventListener('change', () => {
            if ((cloneSelect.selectedIndex > 0) && (cloneInput.value !== "")) {
                startBtn.disabled = false;
            }
        });

        cloneInput.addEventListener('input', () => {
            if ((cloneSelect.selectedIndex > 0) && (cloneInput.value !== "")) {
                startBtn.disabled = false;
            }
        });

    },

    changeRollbackRange: function (e) {
        rangeValue.textContent = e.target.value + '%';
        app.rollback = e.target.value;
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

        // Здесь странная логика была(был -), но к общей стоимости же надо добавить (+) откат чтобы получить "Стоимость с учетом отката"
        app.servicePercentPrices = app.fullPrice + (app.fullPrice * (app.rollback / 100));

        rollback.value = app.servicePercentPrices;

        totalCount.value = app.count;
    },

}

app.init();


