/*
* 添加数组最后一项：push()方法  改变原数组
* 删除数组最后一项: pop()方法   改变原数组
* 删除数组第一项:shift()方法  改变原数组
* 添加数组第一项:unshift()方法  改变原数组
* reverse() 倒序
* join()数组按指定要求 分割返回一个字符串  有返回值
* concat() 数组合并 有返回值 不改变原数组
* slice(0,5) 按指定位置截取 包前不包后  返回截取后的数组
* splice(0,2)  改变原数组 返回截取后的数组
* sort((a,b)=>a-b)  数组排序  改变原数组 返回改变后的数组
* map((i,d,a)=>{return i*i})  返回新数组
* forEach()    只是展示 不返回
* some ()    有一项为true 返回true
* every()   每一项为true 才返回true 否则返回false
* reduce()   返回当前项和后一项累计相加的值
* filter()   返回满足条件的新数组
*
*
* */



//
// let  aln=new Function(
//     'a',
//     'b',
//     'return a+b'
// );
//
// console.log(aln(1, 2));
//
//
// f();
// function f() {
//     console.log(1);
// }
//
// if(true){
//     function f1() {
//         console.log('f1');
//     }
// }
//
// f1();


// function f2(a,b,c,d) {
//     console.log(f2.length);
// }
// f2();

// var obj={p:1};
//
// function f(o) {
//     o.p=2;
// }
//
// f(obj);

// console.log(obj.p);
//
// var aln=[1,2,3];
//
// function f1(aln) {
//     aln=[2,3,4]
// }
//
// f1(aln);
// console.log(aln);

//
// function f(a, a) {
//     console.log(a);
// }
//
// f(1, 2)
//
// var f=function () {
//     console.log(arguments, f);
// };
//
// f();


// let type=function (v) {
//
//     let s=Object.prototype.toString.call(v);
//     return s.match(/\[object (.*?)\]/)[1].toLowerCase();
//
//
// };
//
// console.log(type(''));

let arr=['1','3','2'];


arr6=arr.sort((a,b)=>a-b);
console.log(arr);
/*  改变原数组  */

// arr.pop();  //删除数组最后一项
// arr.push('c'); //往数组最后一项添加
// arr.shift();// 删除数组第一项
// arr.unshift('a');//往数组第一项添加
// arr.reverse(); //倒序 改变原数组
// let arr1=arr.splice(0,2);  //改变原数组 返回截取后的新数组  原数组发生改变




/*   返回新数组  不改变原数组*/

// arr1=arr.join(' ');   //不改变原数组
// arr3=arr.concat(['d','e','f']);   //  合并
// arr1=arr.slice(0,2);      截取 返回新数组

// console.log(arr);
// console.log(arr1);
//
// arr2=Array.prototype.join.call('hello','-');
// console.log(arr2);
//
// console.log(arr3);



// arr.sort((a,b)=>a-b);   //改变原数组
// arr1=arr.map((i,d)=>i+1);



// var arr2=['a','b','c'];
// var arr3=[1,2].map(function (e) {   //返回新数组
//   return  this[e];
// },arr2);

// arr.forEach((i=>{                   //遍历 没有返回值
//     console.log(i * i);
// }));


arr1=arr.some((i,d,a)=>{            //some方法 如果有一个符合条件 就返回true
  return i>2;
});

arr2=arr.every((i,d,a)=>{           //  every 方法   每一项的返回都为true 才返回true
   return i>2;
});

console.log(arr2);


arr4=arr.reduce((a,b)=>{                        //返回当前项和后一项的累计相加的值  reduceRight 是从右向左
    return Number(a)+Number(b);

},10);

// console.log(arr);
// console.log(arr4);

arr5=arr.indexOf('3',0);   //返回数组对应值的下标
console.log(arr5);
