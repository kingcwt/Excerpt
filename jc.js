// function P() {
//
//     this.name = 'parent';
//
// }
//
// P.prototype.method = function () {
//
//     console.log(this.name);
//
// };
//
// function C() {
//
//     this.x = 'children';
//     P.call(this);
//
// }
// C.prototype=new P();
// let n = new C();
//
// console.log(n.name);
// console.log(n.x);
// n.method();

// function P(){
//
//     this.name='parent';
//
// }
//
// P.prototype.method=function(){
//
//     console.log(this.name);
//
// };
//
// function C(){
//
//     this.x='children';
//
// }
//
// C.prototype=new P();
//
// let n=new C();
//
// console.log(n.name);
// console.log(n.x);
// n.method();

// function P(){
//
//     this.name='parent';
//
// }
//
// P.prototype.method=function(){
//
//     console.log(this.name);
//
// };
//
// function C(){
//
//     P.call(this);
//
//     this.x='children';
//
// }
//
// C.prototype=Object.create(P.prototype);
// C.prototype.constructor=C;
// let n=new C();
//
// console.log(n.name);  //parent
// console.log(n.x);  //children
// n.method();  //parent
//
// function Object_create(ele) {
//     //处理Object.create方法不兼容
//     function fn() {}
//     fn.prototype=ele;
//     return new fn();
// }

// function P(){
//
//     this.name='parent';
//
// }
//
// P.prototype.method=function(){
//
//     console.log(this.name);
//
// };
//
// function C(){
//
//     this.x='children';
//     P.call(this);
//
// }
// C.prototype=new P();
// C.prototype.constructor=C;
// let n=new C();
//
// console.log(n.name); //parent
// console.log(n.x); //children
// n.method();  //报错

function P(){

    this.name='parent';

}

P.prototype.method=function(){

    console.log(this.name);

};

function C(){

    this.x='children';
    let temp=new P();
    for(let key in temp){

        this[key]=temp[key]

    }
    temp=null;
}


let n=new C();

console.log(n.name); //parent
console.log(n.x); //children
n.method();  //parent