// if (true) {
//
//    function fx() {
//         console.log(1);}
// }
//
// console.log(fx.name);


var multiline = function (fn) {
    var arr = fn.toString().split('\n');
    console.log(arr.length);
    return arr.slice(1, arr.length - 1).join('\n');
};

function f() {/*
  这是一个
  多行注释
*/}

console.log(multiline(f));
// " 这是一个
//   多行注释"