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
>写于2018年10月1号，晚/
