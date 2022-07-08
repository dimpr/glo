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
