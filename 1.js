var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};


var props = [];
var i = 0;


for (var keys in obj) {
    if (obj.hasOwnProperty(keys)) {
        props[i++] = keys;
    }
}


//
// let aln=Object.keys(obj);
// console.log(aln);
// console.log(aln.length);


// console.log(props);


// var obk={
//     p1:1,
//     p2:2,
// };
//
// with(obk){
//     p1=5;
//     p2=6;
// }
// console.log(obk);

// var aln=['a'];
// aln.length=3;
// console.log(aln);
// aln.length=0;
// console.log(aln);


//声明函数的三种方式
/*function 声明*/
function fn1(n) {
    console.log(n);
}

fn1('aln');

/*函数表达式*/
var aln = function (n) {
    console.log(n);
};
aln('aln');

/*function 构造函数*/
var foo = new Function(
    'a',
    'b',
    'return a+b'
);
var f = foo(1, 2);
console.log(f);


console.log('----------------------------------');


// function fib(num) {
//     if (num === 0) return 0;
//     if (num === 1) return 1;
//     return fib(num - 2) + fib(num - 1);
// }
// console.log(fib(6));
// fib(4)+fib(5);
// =>  fib(2)+fib(3)+fib(3)+fib(4)
// => fib(0)+fib(1)+fib(1)+fib(2)+fib(1)+fib(2)+fib(2)+fib(3)
// =>0+1+1+fib(0)+fib(1)+1+fib(0)+fib(1)+fib(0)+fib(1)+fib(1)+fib(2)
// =>0+1+1+0+1+1+0+1+0+1+1+fib(0)+fib(1)
// =>0+1+1+0+1+1+0+1+0+1+1+0+1;

