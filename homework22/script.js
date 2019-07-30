'use strict';

// 1
let arr = [2, -5, 1, -2, 0, -3, 2, -14];

let positArr = arr.filter(function(number){
    return number>0;
});

let sqrtArr = positArr.map(function(name){
    return Math.sqrt(name);
});

console.log(sqrtArr);

//2

arr = [4, 3, 5, 5, 4, 8, 0, 6];

function sumTo0(arr){

    function find0(num){return num === 0;}

    if(arr.some(find0)){
        let cutArr=arr.slice(0,arr.indexOf(0));
        let sum0 = cutArr.reduce(function(sum,current){ return sum+current; },0);
        return sum0;
    } else{
        let sum0 = arr.reduce(function(sum,current){ return sum+current;},0);
        return sum0;
    }
}

console.log(sumTo0(arr));

//3

function summArguments(){
    let sum = 0;
    for (let i = 0; i < arguments.length; sum=sum+arguments[i], i++);
    return sum;
};

console.log(summArguments(2,5,3,-5));



