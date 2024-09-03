let day = document.getElementById('day');
let month = document.getElementById('month');

let today = new Date();
console.log(today);

const allMonth = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Декабрь',
]

day.innerHTML = (today.getDate()<10 ? '0' : '') + today.getDate();
month.innerHTML = allMonth[today.getMonth()];

