// let d=new Date();
// console.log(d);
// console.log(d.getTime());   //返回距离1970 1/1 0000000 的毫秒数
// console.log(d.getDate());   //返回今天月份的那一天
// console.log(d.getDay());    //返回今天星期几
// console.log(d.getYear());   //返回距离1900年几年
// console.log(d.getFullYear());  //返回当年
// console.log(d.getMonth());   //返回当月数减一  年月份是从0-11
// console.log(d.getHours());   //返回当前对应的小时
// console.log(d.getMinutes()); //返回当前对应的分钟
// console.log(d.getSeconds());  //返回对应的秒数
// console.log(d.getMilliseconds()); //返回对应的毫秒数
// console.log(d.getTimezoneOffset());
function leftDays() {
    var today = new Date();
    var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
    var msPerDay = 24*60*60*1000;
    console.log(endYear.getTime(),'',today.getTime(),'',msPerDay);
    // console.log(Math.round((1577807999999 - 1551407403942)/1000/60/60));
    return  Math.round((endYear.getTime() - today.getTime()) / msPerDay);
}
console.log(leftDays());