var obj={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
};


var props=[];
var i=0;


for (var keys in obj){
    if(obj.hasOwnProperty(keys)){
        props[i++]=keys;
    }
}


//
// let aln=Object.keys(obj);
// console.log(aln);
// console.log(aln.length);


// console.log(props);



var obk={
    p1:1,
    p2:2,
};

with(obk){
    p1=5;
    p2=6;
}
console.log(obk);