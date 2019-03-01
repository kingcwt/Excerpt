//
// function P() {
//     this.name='aln';
// }
//
// function C() {
//     this.age=18;
//    let temp=new P;
//     for(let key in temp){
//        this[key]=temp[key];
//    }
//    temp=null;
// }
//
// P.prototype.get=function () {
//     console.log('get');
// };
// //
// // C.prototype=new P();
// //
// // let f=new C();
// //
// // console.log(f.name);
// // // console.log(f.age);
// // // f.get();
// // console.log(f.__proto__.__proto__);
//
// let f=new C();
//
//
// // console.log(f.name);
// f.get();
//
function create(fn) {
    function X() {}
    X.prototype=fn;
    return new X();
}

function P() {
    this.name='cc';
}
function C() {
    this.age=18;
    P.call(this)
}


P.prototype.get=function () {
    console.log(this.name,'x');
};

C.prototype=create(P.prototype);
C.prototype.constructor=C;
let f=new C();
console.log(f.name);
f.get();
console.log(C.prototype.constructor);
