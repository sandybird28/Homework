//1
console.log('Первое задание\n ')

function fib(n){
    if(n<=1){
        return n ;
    } else{
        return fib(n-1)+fib(n-2);
    }
}
console.log('8-е число Фибоначчи - '+fib(8));
console.log('9-е число Фибоначчи - '+fib(9));
console.log('10-е число Фибоначчи - '+fib(10));
console.log('15-е число Фибоначчи - '+fib(15));

function fib2(n){
    let a=1, b=1, c=1;

    for(i=2;i<n;i++){
        a=b; 
        b=c;
        c=a+b;
    }
    return c;
}

let n = prompt('введи n','1, 2, 3...');
for(i2=1;i2<=n;i2++){
    console.log(i2+'-е число Фибоначчи - '+fib2(i2));
};


//2
console.log('\nВторое задание\n ')

let num = 0;
n = 1000;

while(n>50){
    n=n/2;
    num++;
    console.log(num +'-я иттерация, результат деления - '+n);
}
