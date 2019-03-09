
// let Vfunc=function () {
//   this.price='100';
// };
//
// let b= new Vfunc();
// console.log(b);



let a={
  p:[1,2,3]  ,
  d:{
      a:function () {
          console.log(this);
      }
  }
};

a.d.a();