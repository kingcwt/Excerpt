

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

var f=function () {
    console.log(arguments, f);
};

f();