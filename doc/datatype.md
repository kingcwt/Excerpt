
### JavaScript 数据类型

概述
typeof 运算符
null 和 undefined
概述
用法和含义
布尔值

##### 概述
JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。（ES6 又新增了第七种 Symbol 类型的值，本教程不涉及。）
```
数值（number）：整数和小数（比如1和3.14）
字符串（string）：文本（比如Hello World）。
布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）
undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
null：表示空值，即此处的值为空。
对象（object）：各种值组成的集合。
```

通常，数值、字符串、布尔值这三种类型，合称为原始类型（primitive type）的值，即它们是最基本的数据类型，不能再细分了。对象则称为合成类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。至于undefined和null，一般将它们看成两个特殊值。
对象是最复杂的数据类型，又可以分成三个子类型。
```
狭义的对象（object）
数组（array）
函数（function）
```
狭义的对象和数组是两种不同的数据组合方式，除非特别声明，本教程的”对象“都特指狭义的对象。函数其实是处理数据的方法，JavaScript 把它当成一种数据类型，可以赋值给变量，这为编程带来了很大的灵活性，也为 JavaScript 的“函数式编程”奠定了基础。

##### typeof 运算符
JavaScript 有三种方法，可以确定一个值到底是什么类型。

```
typeof运算符
instanceof运算符
Object.prototype.toString方法
```

instanceof运算符和Object.prototype.toString方法，将在后文介绍。这里介绍typeof运算符。

typeof运算符可以返回一个值的数据类型。

数值、字符串、布尔值分别返回number、string、boolean。
```
typeof 123 // "number"
typeof '123' // "string"
typeof false // "boolean"
函数返回function。
function f() {}
typeof f
// "function"
undefined返回undefined。
```

```
typeof undefined
// "undefined"
```
利用这一点，typeof可以用来检查一个没有声明的变量，而不报错。

```
v
// ReferenceError: v is not defined

typeof v
// "undefined"
```

上面代码中，变量v没有用var命令声明，直接使用就会报错。但是，放在typeof后面，就不报错了，而是返回undefined。

实际编程中，这个特点通常用在判断语句。
```
// 错误的写法

if (v) {
  // ...
}
// ReferenceError: v is not defined
```
```
// 正确的写法
if (typeof v === "undefined") {
  // ...
}
```
对象返回object。
```
typeof window // "object"
typeof {} // "object"
typeof [] // "object"
```
上面代码中，空数组（[]）的类型也是object，这表示在 JavaScript 内部，数组本质上只是一种特殊的对象。这里顺便提一下，instanceof运算符可以区分数组和对象。instanceof运算符的详细解释，请见《面向对象编程》一章。

```
var o = {};
var a = [];

o instanceof Array // false
a instanceof Array // true
null返回object。

typeof null // "object"
```
null的类型是object，这是由于历史原因造成的。1995年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑null，只把它当作object的一种特殊值。后来null独立出来，作为一种单独的数据类型，为了兼容以前的代码，typeof null返回object就没法改变了。

##### null 和 undefined
概述
null与undefined都可以表示“没有”，含义非常相似。将一个变量赋值为undefined或null，老实说，语法效果几乎没区别。
```
var a = undefined;
// 或者
var a = null;
```
上面代码中，变量a分别被赋值为undefined和null，这两种写法的效果几乎等价。

在if语句中，它们都会被自动转为false，相等运算符（==）甚至直接报告两者相等。
```
if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true
```

从上面代码可见，两者的行为是何等相似！谷歌公司开发的 JavaScript 语言的替代品 Dart 语言，就明确规定只有null，没有undefined！

既然含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加复杂度，令初学者困扰吗？这与历史原因有关。

1995年 JavaScript 诞生时，最初像 Java 一样，只设置了null表示”无”。根据 C 语言的传统，null可以自动转为0。
```
Number(null) // 0
5 + null // 5
```
上面代码中，null转为数字时，自动变成0。

但是，JavaScript 的设计者 Brendan Eich，觉得这样做还不够。首先，第一版的 JavaScript 里面，null就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果null自动转为0，很不容易发现错误。

因此，他又设计了一个undefined。区别是这样的：null是一个表示“空”的对象，转为数值时为0；undefined是一个表示”此处无定义”的原始值，转为数值时为NaN。
```
Number(undefined) // NaN
5 + undefined // NaN
```

用法和含义
对于null和undefined，大致可以像下面这样理解。

null表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入null，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入null，表示未发生错误。

undefined表示“未定义”，下面是返回undefined的典型场景。
```
// 变量声明了，但没有赋值
var i;
i // undefined
```
```
// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined

```

##### 布尔值
布尔值代表“真”和“假”两个状态。“真”用关键字true表示，“假”用关键字false表示。布尔值只有这两个值。

下列运算符会返回布尔值：
```
两元逻辑运算符： && (And)，|| (Or)
前置逻辑运算符： ! (Not)
相等运算符：===，!==，==，!=
比较运算符：>，>=，<，<=
```
如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。
```
undefined
null
false
0
NaN
""或''（空字符串）
```

布尔值往往用于程序流程的控制，请看一个例子。

```
if ('') {
  console.log('true');
}
// 没有任何输出
```
上面代码中，if命令后面的判断条件，预期应该是一个布尔值，所以 JavaScript 自动将空字符串，转为布尔值false，导致程序不会进入代码块，所以没有任何输出。

注意，空数组（[]）和空对象（{}）对应的布尔值，都是true。
```
if ([]) {
  console.log('true');
}
// true

if ({}) {
  console.log('true');
}
// true

```



##### 本文属于网摘 如有侵权请联系作者删除。