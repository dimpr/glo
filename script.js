let date = new Date();
let weekDay = date.getUTCDay() - 1;
let week = ['Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'];

for (let i = 0; i < (week.length); i++) {

    let p = document.createElement('p');
    p.innerHTML = week[i];
    document.body.append(p);

    if (weekDay === i) {
        p.className = "currentDay";
    }

    if ((i === 5) || (i === 6)) {
        p.className = "weekends";
    }
}

// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";


// dateObj.getDay()
// 0, 6
// Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице
// 1) Создать массив week и записать в него дни недели в виде строк
// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)
// 2) Запушить проект в репозиторий для усложненных заданий на Github

// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

// document.body.append(div);

// <script>
//   ol.before('before'); // вставить строку "before" перед <ol>
//   ol.after('after'); // вставить строку "after" после <ol>

//   let liFirst = document.createElement('li');
//   liFirst.innerHTML = 'prepend';
//   ol.prepend(liFirst); // вставить liFirst в начало <ol>

//   let liLast = document.createElement('li');
//   liLast.innerHTML = 'append';
//   ol.append(liLast); // вставить liLast в конец <ol>
// </script>