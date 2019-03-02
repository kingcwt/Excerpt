let s=/(s)/;
let r='s_s-_s';

// let c=s.exec(r);
// console.log(c);

let c='hello world'.replace(/(\w+)\s(\w+)/,'$2 $1');
console.log(c);