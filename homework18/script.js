//1
let num;

num = '1';
console.log(num);
if(num ==='1'){
    console.log('Верно!');
}else{
    console.log('Не верно!');
}

num = 1;
console.log(num);
if(num ==='1'){
    console.log('Верно!');
}else{
    console.log('Не верно!');
}

num = 3;
console.log(num);
if(num ==='1'){
    console.log('Верно!');
}else{
    console.log('Не верно!');
}

//2
let item = true;

console.log(item);
if(item != true){
    console.log('Верно!');
}else{
    console.log('Не верно!');
}
(item==true)?console.log('Не верно!'):console.log('Верно!');

item = false;

console.log(item);
if(item != true){
    console.log('Верно!');
}else{
    console.log('Не верно!');
}
(item==true)?console.log('Не верно!'):console.log('Верно!');

//3 

let a = 4;

console.log(a);
if( a > 0 && a < 4){
    console.log('Верно!');
}else{
    console.log('Не верно!');
}

a = 0;
console.log(a);
if( a > 0 && a < 4){
    console.log('Верно!');
}else{
    console.log('Не верно!');
}

a = -3;
console.log(a);
if( a > 0 && a < 4){
    console.log('Верно!');
}else{
    console.log('Не верно!');
}

a = 2;
console.log(a);
if( a > 0 && a < 4){
    console.log('Верно!');
}else{
    console.log('Не верно!');
}

//4

let b = 6;
a = 5;

if(( a > 3 && a < 12)||(b >= 7 && b < 15)){
    console.log('Верно!');
}else{
    console.log('Не верно!');
}

//5

let month = 3;

if((month >=1 && month<=2)||(month==12)){
    console.log('Зима');
}else if(month>=3&&month<=5){
    console.log('Весна')
}else if(month>=6&&month<=8){
    console.log('Лето')
}else if(month>=9&&month<=11){
    console.log('Осень')
}else {
    console.log('В году только 12 месяцев)')
}


//6


for (let i=0; i<=100; i++){
    if (i%2 == 0){
        console.log(i);
    }
}