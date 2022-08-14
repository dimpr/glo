const btn = document.getElementById('btn');
const btn1 = document.getElementById('e_btn');
const text = document.getElementById('text');
const span = document.getElementById('range-span');
const square = document.getElementById('square');
const range = document.getElementById('range');
const circle = document.getElementById('circle');

let newcolor = '';

const getColor = function (event) {
    newcolor = event.target.value;
}

const changeColor = function () {
    square.style.backgroundColor = newcolor;
}

const rmBtn = function () {
    console.dir(btn1);
    btn1.style.display = 'none';
}

const changeRadius = function (e) {
    circle.style.width = e.target.value + '%';
    circle.style.height = e.target.value + '%';
    span.textContent = e.target.value + '%';
}

btn.addEventListener('click', changeColor);
text.addEventListener('input', getColor);
btn1.addEventListener('click', rmBtn);
range.addEventListener('input', changeRadius);

