// let azj=new Boolean(true);
// console.log(azj);


// function azj(min,max) {
//     return Math.floor(Math.random()*(max-min+1))+min;
// }
//
//
// console.log(azj(1, 6));


function flyRandom(length) {
    let
        mathStr='0123456789ABCDEFGHIjKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        str='';

    for(let i=0;i<length;i++){
     str+=mathStr[Math.floor(Math.random()*mathStr.length)];
    }

    return str;
}
console.log(flyRandom(4));