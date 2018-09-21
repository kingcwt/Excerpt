# Project-notes

#####短信倒计时验证码-func:

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

