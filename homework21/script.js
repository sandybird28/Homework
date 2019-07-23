//1
let wrd='сон', arr =  ['собака', 'кот', 'слон', 'жираф'];

 function searchArrayWord(wrd, arr){
     for(i=0 ; i<arr.length ; i++){
        if(wrd==arr[i]){
            return true;
        }
    }
    return false;     
};
console.log( searchArrayWord(wrd, arr));

//2

arr =  [1,2,3,7,6,9];

function mean(arr){
    let sum = 0;
    for(i=0; i<arr.length;i++){
        sum = sum+arr[i];    
    }
    return sum/arr.length;
}
console.log(mean(arr));

//3

let arr2=[1,3,5,6,7,9];

function rew(arr){
    let rewArr=[];
    for(i=0, j=arr.length-1 ; j>=0 ; j--, i++){
        rewArr[i]=arr[j];
    }
    return rewArr;
}

console.log(arr2);
console.log(rew(arr2));

//4

let obj={ 'html':'HTML', 'css':'CSS', 'js':'ECMA' }, arrKey=[], k=0;

for(key in obj){
    arrKey[k]=key; 
    k++;
}

console.log(arrKey);

//5

obj = {
    'name': 'Имя покупателя',
    'phone number': 'Телефон покупателя',
    'customer address': 'Адрес покупателя',
    'total cost': 'Общая сумма заказа',
    'total weight': 'Общий вес заказа',
    'purchased item':{
        'item-1':{
            'name':'Чашка',
            'cost':100,
            'weight':200
        },
        'item-2':{
            'name':'Ложка',
            'cost':30,
            'weight':100
        },
        'item-3':{
            'name':'Чайник',
            'cost':550,
            'weight':2000
        },
        'item-4':{
            'name':'Кружка',
            'cost':150,
            'weight':400
        }
    }
}

console.log(obj);