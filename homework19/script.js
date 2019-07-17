//1
let num = 12;

function isNumberInRange(num){
    if((num > 0)&&( num < 10) ){
        return true;
    } else{
        return false;
    }
}
console.log(isNumberInRange(num));

//2
function isEven(num){
    if(num%2==0){
        return true;
    } else{
        return false;
    }
}
console.log(isEven(num));


//3

let value = +prompt('value?', '');
switch(value){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
        alert(2);
        break;
    case 3:
        alert(3);
        break;
    case 4:
        alert(4);
        break;

}

//4
let a = 72, b = 25;

function min(a,b){
    if(a<b){
        return a;
    }else{
        return b;
    }
}

console.log(min(a,b))

