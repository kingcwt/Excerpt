
#### 正则

-----------------------------------

###什么是正则？
>正则就是一个规则，用来处理`字符串`的规则
>1、正则匹配
>编写一个规则 验证某个字符串是否符合这个规则 正则匹配使用的是test方法
>2、正则捕获
>编写一个规则 在一个字符串中把符合规则的内容都获取到 正则捕获使用的方法：正则的exec方法、字符串中的split、replace、match等方法都支持正则
```javascript
var reg=/^$/;//=>两个斜杠包含的内容就是正则 两个斜杠之间包含的全部内容都是元字符
```
###正则的元字符和修饰符
>任何一个正则都是有元字符和修饰符组成的
`修饰符`
g(global): 全局匹配
i(ignoreCase): 忽略大小写匹配
m(multiline):多行匹配
`元字符`
【量词元字符】
+：让前面的元字符出现一到多次
？：出现零到一次
*：出现零到多次
{n}：出现n次
{n,}：出现n到多次
{n,m}：出现n到m次
【特殊意义的元字符】
\：转义字符（把一个普通字符转变为有特殊意义的字符）
.：除了\n（换行符）以外的任意字符
\d：匹配一个0~9之间的数字
\D：匹配一个非0~9之间的数字（大写字母和小写字母正好是反向的）
\w：匹配一个0~9或字母或_之间的字符
\s：匹配一个任意空白字符
\b：匹配一个边界符
x|y：匹配x或者y中的一个
[a-z]：匹配a-z中的任意一个字符
[^a-z]：和上面的相反 匹配任意一个非a-z的字符
[xyz]：匹配x或者y或者z中的一个字符
[^xyz]：匹配除了xyz以外的任意字符
()：正则的小分组 匹配一个小分组（可以理解为大正则中的一个小正则）
?:：只匹配不捕获
?=：正向预查
?!：负向预查
.....
除了以上特殊元字符和量测元字符 其余都叫普通元字符：代表本身意义的元字符
###元字符详细解读
```javascript
var reg=/\d+/; //==>包含某某即可 这里说明包含1到多个数字即可
var str='zf2017px2018';
reg.test(str) ==>true

reg=/^\d+/;
reg.test(str) ==>false


reg=/^\d+$/; //==>只能是某某某的 这里说明只能是一到多个数字
reg.test('2017'); =>true;
reg.test('2017zf2018'); =>false
```
`\`
```javascript
var reg=/^2.3$/;  //->点在正则中的意识：匹配除了\n以外的任意字符 而不是单纯的小数点
reg.test('2.3'); =>true;
reg.test('2+3'); =>true;

var reg=/^2\.3$/; //=>使用转义字符把点转为普通字符
reg.test('2.3'); =>true;
reg.test('2+3'); =>false;
/\\/;  //==>正则中出现两个斜杠就是表示普通斜杠
```
`x|y`
```javascript
var reg=/^18|19$/; //=> 18 19 119 819 181 ...很多都符合这个规则
```
>`()` 正则中的分组 也可以理解为一个大正则中的一个正则 （包起来就是一个整体） 在正则中我们可以使用小括号`改变一些默认的优先级`
>小分组还有第二作用`分组引用`
>小分组的第三个作用`分组捕获`
```javascript
//==>分组引用：\1 或者 \2 ...出现和第N个分组一摸一样的内容
var reg=/^([a-z])([a-z])\2([a-z])$/; //=>符合的字符串：foot,book,week,attr,http...
```
`[]`
>[xyz] [^xyz] [a-z] [^a-z]
```javascript
//=>\w:数字字母下划线中的任意一个字符
var reg=/^[a-zA-Z0-9_]$/; //=>等价于\w

//=>中括号中出现的元字符 一般都代表本身的含义
 var reg=/^[.?+&]$/; //==>里面的四个元字符都是本身含义

 //==>需求：描述样式类名的规则（数字，字符，下划线 ，-）
 var reg=/^[\w-]+$/;
 var reg=/^[0-9a-zA-Z_-]+$/;
 var reg=/^\w[\w-]*$/;
```
```javascript
//===============>需求：验证18-65之间的年龄
var reg=/^[18-65]$/;  //=>1或者8~6或者5中的任意一个字符 中括号中出现的18不是数字18 而是1或者8 当前正则是非法的 因为不能设置8~6这种范围

//==>分 三个阶段处理：
//18 或者 19  /(18|19)/
//20 ~59 /([2-5]\d)/
//60~65 /([0-5])/
var reg=/^((18|19)|([2-5]\d)|(6[0-5]))$/;
```
###常用的正则表达式编写
`验证是否为有效数字`
```javascript
//1 可能是正数 可能是负数 12-12
//2 整数或者小数
//3 只要出现小数点 后面至少要跟一位数字
var reg=/^-?(\d|([1-9]\d+))(\.\d+)?$/;
```
`手机号码`
```javascript
//  11位数字
//  1开头
var reg=/^1\d{10}$/;
```
`用户名：真实姓名`
```javascript
//=>/^[\u4E00-\u9FA5]$/ 中文汉字的正则
var reg=/^[\u4E00-\u9FA5]{2,5}(·[\u4E00-\u9FA5]{2,5})?$/;
```
`邮箱`
```javascript
var reg=/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
//以数字字母下划线开头
//@前面可以是 数字 字母 下划线 - . 这些符号
//不能把 -和. 连续出现 出现一次后面必须跟数字字母下划线
// @ 后面的部分支持 企业邮箱
// .com.cn 多域名情况
// [A-Za-z0-9]+
// ((\.|-)[A-Za-z0-9]+)*
// \.[A-Za-z0-9]+
// @163.com.cn
// @zhu-feng-pei-xun.com.cn
```
`身份证号码`
```javascript
// 18位
// 前17位必须是数字或者X(X代表数字10)
//130828199012040617
//410522199604255518
// 前六位 :省市县 1300828/410522
// 接下来八位 出生年/月日
// 倒数第二位奇数是男 偶数是女
var reg=/^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}\d(\d|X)$/;
var reg=/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{2})(\d(\d|X))$/;
//==>年 1950~2017
//1950 -1999
//2000-2009
//2010-2009
//2010-2017
/^((19[5-9]\d|(20((0\d)|(1[0-7]))))$/;
```
###正则捕获
>把当前字符串中符合正则的字符捕获到
>RegExp.prototype:`exec`实现正则捕获的方法
```javascript
var str='zfpx2017yfqh2018';
var reg=/\d+/;
reg.exec(str);
//1 先去验证当前字符串和正则是否匹配 如果不匹配返回的结果是null
//2 如果匹配 从字符串最左边开始 向右查找找到匹配的内容 并且把匹配的内容返回
// exec捕获到结果的格式：
//=>获取的结果是一个数组
//=>数组中的第一项是当前本次大正则在字符串中匹配到的结果
//=>index:记录了当前本次捕获到结果的起始索引
//=>input:当前正则操作的原始字符串
//=>如果当前正则中有分组 获取的数组中 从第二项开始都是小分组本次匹配到的结果（通过exec可以把分组中的内容捕获到）
//==>执行一次exec只能把符合正则规则条件中的第一个内容捕获到 如果还有其他符合规则的 需要再次执行exec才有可能捕获到
```
`正则捕获存在懒惰性`
>执行一次exec捕获到第一个符合规则的内容 第二次执行exec 捕获到的依然是第一个匹配的内容 后面匹配的内容不管执行多少次exec都无法捕获到
> 解决正则的捕获的懒惰性：
> 在正则的末尾加修饰符g（全局匹配）
```javascript
//==>正则为什么会存在懒惰性？
正则本身有一个属性：lastIndex(下一次正则在字符串匹配查找的开始索引)
默认值：0 从字符串第一个字符串开始查找匹配的内容
默认不管执行多少遍exec的方法 正则的lastIndex值都不会变（也就是第二次以后查找的时候还是从第一个字符找，所以找到的结果永远都是第一个匹配的内容）
而且当我们手动吧lastIndex 进行修改的时候 不会起到任何作用
//==>为什么加修饰符g就解决了懒惰性
//==>加了修饰符g 每一次exec结束后 浏览器默认会把lastIndex值进行修改 下一次从上一次结束的位置开始查找 所以可以得到后面匹配的内容了
```
>exec有自己的局限性：执行一次exec只能捕获到一个和正则匹配的结果（即使加了修饰符g）如果需要都捕获到 我们需要执行N次exec方法才可以
>下面封装的myExecAll方法 目的是执行一次这个方法 可以把当前正则匹配的全部内容都捕获到
```javascript
自己封装的myExecAll方法    //==>相当于字符串中的match
RegExp.prototype.myExecAll=function myExecAll() {
    //this 当前需要处理的正则
    //str  当前要处理的字符串

    // z: 也可以看global是true/false
    var str=arguments[0]||'';
    var result=[];
    var ary=this.exec(str);
    if(reg.lastIndex===0){  // 根据reg.lastIndex的变化 来判断当前正则是否是全局匹配 防止死循环
        return ary[0];
    }else{
        while (ary!==null){
            result.push(ary[0]);//把当前本次捕获到内容放到数组中
            ary=this.exec(str); //继续下一次捕获
        }
        return result;

    }




};
var reg=/\d+/g;
console.log(reg.myExecAll('zfpx2017yfqh2018yf2019cc1996'));
```
###使用字符串方法match实现捕获
```
var reg=/\d+/g;
var str='zf2017px2018yfqh2019'
str.match(reg);
```
>使用字符串match捕获
>1 如果正则加了修饰符g 执行一次match会把所有正则匹配的内容捕获到
>2 如果没有加修饰符g 执行的一次match只能把第一次匹配的结果捕获到
> `局限性`：
> 在加了修饰符g的情况下 执行match方法只能把大正则匹配的内容捕获到 对于小分组捕获的内容方法给其自动忽略了
```javascript
var str='my name is {0}, i am {1} years old~,2017';
//==>需求：把{n}整体捕获到 而且还要把括号中的数字也获取到
var reg=/\{(\d+)\}/g;
//=>str.match(reg); //=>["{0}","{1}"]
//==>想要获取小分组中的内容 我们只能使用exec处理了
function fn(reg,str){
var ary=reg.exec(str);
var result=[];
while(ary!==null){
result.push(ary);
ary=reg.exec(str);
}
return result;
}
```
###使用test可以实现正则的捕获
 >不管是正则的匹配还是正则的捕获 在处理时候的原理是没有区别的`从字符串的第一个字符向后查找 找到符合正则规则的字符 如果可以找到 说明正则和字符串匹配 (test检测返回true,exec捕获返回捕获的内容)如果找到末尾都没有匹配的 说明正则和字符串不匹配（test检测返回false exec捕获返回null）`
 >如果正则设置了修饰符g 不管使用test还是exec中的任何方法 都会修改lastIndex值（下一次查找是基于上一次匹配结果的末尾开始查找的）

```javascript
===>加g
var reg=/\{(\d+)\}/g;
var str='my name is {0}~~';
if(reg.test(str)) {
    //==> reg.test(str): true
    // console.log(reg.lastIndex); 14
    console.log(reg.exec(str)) //=>null
}

===>不加g
var reg=/\{(\d+)\}/;
var str='my name is {0}~~';
if(reg.test(str)) {
    //==> reg.test(str): true
    // console.log(reg.lastIndex);0
    console.log(reg.exec(str)) //=>["0"]
}
```
>使用test不仅可以找到匹配的内容 也能像exec一样把找到的内容获取到
>test返回结果是true/false 所以靠返回结果肯定不行

```javascript
var reg=/\{(\d+)\}/g;
var str='my name is {0}~~{1}';
var flag=reg.test(str); //=>true
console.log(RegExp.$1);//=> 0 获取到当前本次匹配内容中第一个小分组捕获的内容
console.log(reg.test(str)); //false
console.log(RegExp.$1);  //=>1
//=>$1 就是第一个分组 $2 第二个分组



==test
var reg=/\{(\d+)\}/g;
var str='my name is {0}~~{1}';
function Test() {
    var result=[];
    while (reg.test(str)){
        result.push(RegExp.$1);

    }
   return result
}
console.log(Test());//=>["0","1"]

==exec
function Exec() {
    var ary=reg.exec(str);
    var result=[];
    while (ary){
        result.push(ary[1]);
        ary=reg.exec(str);
    }
    return result;
}

console.log(Exec());//=>["0","1"]
```
**`replace`**
>replace:字符串中原有字符的替换
>str.replace(old,new)
```javascript
var str='zf2017zf2018';
str=str.replace('zf','zfpx');
str=str.replace('zf','zfpx');
//==>zfpxpx2017zf2018 没有实现我们希望的效果
//==>在不使用正则的情况下 执行一次replace只能替换一个原有字符 第二次执行replace 还是从字符起始位置开始查找 把最新找到的字符替换为新字符（类似exec 捕获时候的懒惰性）
```
>真实项目中 replace一般都是和正则搭配在一起使用的
```javascript
var str='zf2017zf2018';
str=str.replace(/zf/g,'zfpx')
```
>replace原理：
>1 当replace方法执行 第一项传递一个正则
>正则不加g:把当前字符串中第一个和正则匹配的结果捕获到
>正则加g:把当前字符串中所有和正则匹配的内容都分别捕获到 而且每一次捕获 都会把当前捕获的内容替换为新字符
>2 当replace方法执行 第二个参数传递的是一个函数（回调函数）
>首先用正则到字符串当中进行查找匹配 匹配到一个符合规则的 就把传递的函数执行一次
>不仅执行这个函数 而且还把正则捕获的结果（和执行exec捕获的结果一样：数组 ，大正则匹配的，小分组匹配的 都有）当做实参传递给这个函数（这样就可以在函数中获取这些值：而这些值就是正则每一次捕获的结果）
```javascript
var str='my name is {0} i am {1} years old,i can{2}';
var reg=/\{(\d+)\}/g;
str=str.replace(reg,function () {
   //=>传递的函数一共被执行三次
   //  console.log(arguments);
    // 每一次匹配捕获的结果 不仅把这个方法执行了 而且还会把当前捕获的结果当做实参传递给这个函数
    //第一次执行函数 获取的时arg类数组
    // 0 ：[0] 本次大正则匹配的结果
    // 1:'0' 本次第一个小分组匹配的结果
    //2:11 本次大真这个匹配结果在字符串中的索引
    //3:'my nam....' 原始字符串
    //和每一次执行exec实现捕获的结果非常类似
    // return xxx;=>每一次执行函数 函数中return的结果 都把本次大正则匹配的内容替换掉（原始字符串不变）
    // return '2'
});
// console.log(str);
```
###所有支持正则的方法都可以实现正则的捕获（一般都是字符串方法）
>字符串中常用的支持正则的方法：
>match
>split
>replace
>...
```javascript
var str='name=zf&age=8&lx=teater';
str.split(/=|&/);//==>["name=zf", "age=8", "lx=teater"]
str.split(/(&|=)/);//==> ["name", "=", "zf", "&", "age", "=", "8", "&", "lx", "=", "teater"]
 //=> 在使用split进行字符串拆分的时候 如果正则中包含小分组 会把小分组中的内容都捕获到 放在最后的数组中
//==>本案例中的小括号仅仅是为了实现 改变默认的优先级问题 但是我们不想把分组中的内容捕获到 我们可以使用（?:）
str.split(/(?:&|=)/);  //只匹配不捕获 遇到带？：的小分 浏览器不会把当前这个分组中匹配的内容捕获
```
`首字母大写`
```javascript
//===>单词首字母大写
var str='my name is zhu-feng-pei-xun,i am 8 years old, qian duan pei xun no1!';
// var reg=/\b\w+\b/g;  /b代表的边界：单词左右两边是边界，-两边也是边界 所以这里会把
//'zhu-feng-pei-xun' 算作四个单词（我们想把它作一个）
//==>1 先把混淆边界符的中杠替换为下划线
//==>2 通过边界符匹配到每一个单词
str=str.replace(/-/g,'_');
str=str.replace(/\b(\w)(\w*)\b/g,function () {
    return arguments[1].toUpperCase()+arguments[2]
});
//==>在把替换的下划线重新替换为-
str=str.replace(/_/g,'-');
console.log(str);
```

`时间格式化`
```javascript
var str='2017-11-07 16:37:00';
//2017年11月07日 16时37分00秒

//=>使用正则实现
//1 执行一次捕获操作 得到需要六个结果
var reg=/^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})$/g;
// str=str.replace(reg,function () {
//     // return arguments[1]+'年'+arguments[2]+'月'+arguments[3]+'日'+arguments[4]+'时'+arguments[5]+'分'+arguments[6]+'秒'
// });
str=str.replace(reg,'$1年$2月$3日 $4时$5分$6秒');
console.log(str);

===========================>
var str='2017-11-07 16:37:00';
var reg=/(\d+)/g;
var ary=str.match(reg);
// str=ary[0]+'年'+ary[1]+'月'+ary[2]+'日';
// console.log(str);
var template='{0}年{1}月{2}日 {3}时{4}分{5}秒';
//==>{0} ary[0]
//==>{1} ary[1]
//==>....
//==>我们首先要把模板中的{n}(同时获取数字n) ,把数字n作为ary的索引 整体替换
template=template.replace(/\{(\d+)\}/g,function () {
    var index=arguments[1];
    var value=ary[index];
    return value;
});
console.log(template);
```
**`时间格式化模板`**
```javascript
String.prototype.myFormatTime=function myFormatTime() {
  var ary=this.match(/\d+/g);
    var template=arguments[0]||'{0}年{1}月{2}日 {3}时{4}分{5}秒';
//==>用户传了模板就按用户传递的来  否则按默认的来
    template=template.replace(/\{(\d+)\}/g,function () {
        var index=arguments[1];
        var value=ary[index]||'0';
        value.length<2?value='0'+value:null;
        return value
    });
    return template;
};
// var str='21:30:66';
// str=str.myFormatTime('{0}时{1}分{2}秒');
// console.log(str);
```
**`去除首尾空格模板`**
```javascript
String.prototype.myTrim=function myTrim() {
   return this.replace(/^\s+|\s+$/g,'');

};
//console.log(str.myTrim()); =>
```
**`捕获问号穿参部分模板`**
```javascript
//var url='http://www.zhufengpeixun.cn/stu/index.html?name=zxt&age=28&sex=0#teacher';

String.prototype.myQueryURLParameter=function myQueryURLParameter() {
  var obj={};

    this.replace(/([^?#&=]+)=([^?#&=]+)/g,function () {
        obj[arguments[1]]=arguments[2];
  });
  this.replace(/#([^#?&=]+)/g,function () {
     obj['hash']=arguments[1]
  });
    return obj;
};
// console.log(url.myQueryURLParameter());
```
###创建正则两种方式的区别
>1 字面量方式创建：不能把变量添加到正则中
>2通过构造函数创建：可以通过拼接把变量添加到正则中 但是通过构造函数创建 中`\`要写成`\\`才代表转义
```javascript
//==>字面量方式
var reg=/\d+/img;
//==>构造函数创建
//==>new RegExp（‘元字符’，‘修饰符’）
var reg2=new RegExp('\\d+','img');
//==>使用构造函数创建和字面量方式创建 最主要的
//区别是：构造函数创建 用到转义字符需要写'\\'才可以

//==>使用构造函数方式写出验证是否为有效数字的正则
var reg3=new RegExp('^-?(\\d|([1-9]\\d+))(\\.\\d+)?$');
//= 我想在正则动态加入一个变量的值 作为正则的一部分
var strClass='String';
// var reg5=/^\[object '+strClass+'\]$/;字符量创建的所有字符都叫元字符 所以这样创建不能实现动态数据的改变

var reg6=new RegExp('^\\[object '+strClass+'\\]$');
console.log(reg6.toString());
var reg7=new RegExp(`^\\[object ${strClass}\\]$`);
console.log(reg7.toString());
```

#### 原创！