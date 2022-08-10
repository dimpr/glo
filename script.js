const Book2 = document.querySelectorAll('.book:nth-child(1) li');
console.dir(Book2);

const Book5 = document.querySelectorAll('.book:nth-child(6) li');
console.dir(Book5);

const allBooks = document.querySelectorAll('.book');
console.log(allBooks[1]);

allBooks[1].after(allBooks[0]);
allBooks[4].after(allBooks[3]);
allBooks[5].after(allBooks[2]);

document.querySelector(".adv").remove();

const cloneParagraph = allBooks[2].querySelector('ul>li').cloneNode();
cloneParagraph.textContent = 'Глава 8: За пределами ES6';
allBooks[2].querySelector('li:nth-last-child(2)').append(cloneParagraph);

allBooks[4].querySelector('h2').innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>';

document.querySelector('body').classList.add('trueBackground');

Book2[9].after(Book2[2]);
Book2[3].after(Book2[8]);
Book2[8].before(Book2[6]);

Book5[5].before(Book5[2]);
Book5[1].after(Book5[9]);
Book5[7].after(Book5[5]);