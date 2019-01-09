# Project-notes

1-短信倒计时验证码-func:

```
  constructor() {
    super();
    this.state = {data: '获取'}
  }

    handleChange() {
      if (typeof this.state.data === 'number') return;
      let data = 60;
      this.Timer = setInterval(() => {this.setState({data: data === 0 ? '获取' : data--});}, 1000);
    }

    componentWillUnmount(){
      clearInterval(this.Timer);
    }

  <button onClick={this.handleChange.bind(this)} className={style.getHQ}>{this.state.data}</button>
```
![Alt text](./1537516202593.png)
![Alt text](./1537516154295.png)



2-字符串截取-正则捕获；
> reg.test  => true  false 
> reg.exec  => 不加g 只会捕获第一次匹配的结果 加g，第一次捕获第一次匹配的内容 第二次捕获第二次匹配的内容 ....具有懒惰性;
> str.match(reg); 捕获所有匹配到的内容 且以数组的形式返回;
>/*在做永城直销项目中对接淘宝接口时遇到要截取字符串中的数字所想：*/
```

function kingcwt(str) {
  /*满24元减5元*/
 return str.match(/\d+/g)[1];
  // let reg = /\d+/g;
  // let Arr = str.match(reg);
  // return Arr[1];
}
```

3-手机号码中间部分用*隐藏
```
      var reg = /^(\d{6})\d+(\d{4})$/;
      str.replace(reg,'$1****$2');
```
>写于2018年10月2号，晚/


----------------------------------------------------------------------
### 基础知识：
###操作数组

- Array.map()
> 此方法是将数组中的每个元素调用一个提供的函数，结果作为一个新的数组返回，并没有改变原来的数组 `有返回值`
```
let arr = [1, 2, 3, 4, 5]
    let newArr = arr.map(x => x*2)
    //arr= [1, 2, 3, 4, 5]   原数组保持不变
    //newArr = [2, 4, 6, 8, 10] 返回新数组
```
- Array.forEach()
>此方法是将数组中的每个元素执行传进提供的函数，没有返回值，直接改变原数组，注意和map方法区分 `改变原数组`
```
let arr = [1, 2, 3, 4, 5]
   num.forEach(x => x*2)
   // arr = [2, 4, 6, 8, 10]  数组改变,注意和map区分
```
- Array.filter()
>此方法是将所有元素进行判断，将满足条件的元素作为一个新的数组返回   `有返回值`
```
let arr = [1, 2, 3, 4, 5]
    const isBigEnough => value => value >= 3
    let newArr = arr.filter(isBigEnough )
    //newNum = [3, 4, 5] 满足条件的元素返回为一个新的数组
```
- Array.every()
>此方法是将所有元素进行判断返回一个布尔值，如果所有元素都满足判断条件，则返回true，否则为false;`返回一个布尔值`
```
let arr = [1, 2, 3, 4, 5]
    const isLessThan4 => value => value < 4
    const isLessThan6 => value => value < 6
    arr.every(isLessThan4 ) //false
    arr.every(isLessThan6 ) //true
```
- Array.some()
> 此方法是将所有元素进行判断返回一个布尔值，如果存在元素都满足判断条件，则返回true，若所有元素都不满足判断条件，则返回false：`返回一个布尔值`
```
let arr= [1, 2, 3, 4, 5]
    const isLessThan4 => value => value < 4
    const isLessThan6 => value => value > 6
    arr.some(isLessThan4 ) //true
    arr.some(isLessThan6 ) //false
```
- Array.reduce()
> 此方法是所有元素调用返回函数，返回值为最后结果,传入的值必须是函数类型：`返回值为最后的结果`
```
let arr = [1, 2, 3, 4, 5]
   const add = (a, b) => a + b
   let sum = arr.reduce(add)
   //sum = 15  相当于累加的效果
   与之相对应的还有一个 Array.reduceRight() 方法，区别是这个是从右向左操作的
```
- Array.push()
> 此方法是在数组的后面添加新加元素，此方法改变了数组的长度：`改变原数组`

- Array.pop()
>此方法在数组后面删除最后一个元素，并返回数组，此方法改变了数组的长度：`返回改变后数组`
```
let arr = [1, 2, 3, 4, 5]
let a=arr.pop()
console.log(arr) //[1, 2, 3, 4]
console.log(arr.length) //4
console.log(arr, a);// [1,2,3,4]    //5
```
