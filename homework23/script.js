'use strict';

//1

let day = new Date;
let nextDay = new Date(day.getFullYear(),day.getMonth(),day.getDate()+1,)
let minToNextDay = (nextDay - day)/60000;
console.log('До завтра осталось '+Math.round(minToNextDay)+' минут.');

//2

let startDay = new Date(day.getFullYear(),day.getMonth(),day.getDate(),);
let secFromStartDay = (day-startDay)/1000;
console.log('С начала текущего дня прошло '+Math.round(secFromStartDay)+' секунд');

//3

day = new Date(2013, 0, 25);
function dayName(dd){
    switch(dd.getDay()){
        case 0 : return 'Воскресенье';
        case 1 : return 'Понедельник';
        case 2 : return 'Вторник';
        case 3 : return 'Среда';
        case 4 : return 'Четверг';
        case 5 : return 'Пятница';
        case 6 : return 'Суббота';
    }
};
console.log(dayName(day));

//4

let birthDay = prompt('Введите дату своего рождения в формате ГГГГ-ММ-ДД','ГГГГ-ММ-ДД');

function dayToBirthDay(day){
    let d = Date.parse(day), c = new Date,  today = new Date;
    c.setTime(d);
    c.setFullYear(today.getFullYear());
    let dayToBD = (c - today)/86400000;
    if (dayToBD < 0){dayToBD += 365;}
    return Math.round(dayToBD);
};

console.log('До следующего Дня рожденья осталось '+dayToBirthDay(birthDay)+' дней!');