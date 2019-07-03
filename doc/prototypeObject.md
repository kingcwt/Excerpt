
#### prototype 对象

----------------------

面向对象编程很重要的一个方面，就是对象的继承。A 对象通过继承 B 对象，就能直接拥有 B 对象的所有属性和方法。这对于代码的复用是非常有用的。

大部分面向对象的编程语言，都是通过“类”（class）来实现对象的继承。JavaScript 语言的继承则是通过“原型对象”（prototype）。

原型对象概述
#### 构造函数的缺点
JavaScript 通过构造函数生成新对象，因此构造函数可以视为对象的模板。实例对象的属性和方法，可以定义在构造函数内部。
```javascript
function Cat (name, color) {
  this.name = name;
  this.color = color;
}

var cat1 = new Cat('大毛', '白色');

cat1.name // '大毛'
cat1.color // '白色'
```

上面代码中，Cat函数是一个构造函数，函数内部定义了name属性和color属性，所有实例对象（上例是cat1）都会生成这两个属性，即这两个属性会定义在实例对象上面。

通过构造函数为实例对象定义属性，虽然很方便，但是有一个缺点。同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费。
```javascript
function Cat(name, color) {
  this.name = name;
  this.color = color;
  this.meow = function () {
    console.log('喵喵');
  };
}

var cat1 = new Cat('大毛', '白色');
var cat2 = new Cat('二毛', '黑色');

cat1.meow === cat2.meow
// false
```

上面代码中，cat1和cat2是同一个构造函数的两个实例，它们都具有meow方法。由于meow方法是生成在每个实例对象上面，所以两个实例就生成了两次。也就是说，每新建一个实例，就会新建一个meow方法。这既没有必要，又浪费系统资源，因为所有meow方法都是同样的行为，完全应该共享。

这个问题的解决方法，就是 JavaScript 的原型对象（prototype）。

#### prototype 属性的作用
JavaScript 继承机制的设计思想就是，原型对象的所有属性和方法，都能被实例对象共享。也就是说，如果属性和方法定义在原型上，那么所有实例对象就能共享，不仅节省了内存，还体现了实例对象之间的联系。

下面，先看怎么为对象指定原型。JavaScript 规定，每个函数都有一个prototype属性，指向一个对象。
```js
function f() {}
typeof f.prototype // "object"
```

上面代码中，函数f默认具有prototype属性，指向一个对象。

对于普通函数来说，该属性基本无用。但是，对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型。
```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.color = 'white';

var cat1 = new Animal('大毛');
var cat2 = new Animal('二毛');

cat1.color // 'white'
cat2.color // 'white'
```

上面代码中，构造函数Animal的prototype属性，就是实例对象cat1和cat2的原型对象。原型对象上添加一个color属性，结果，实例对象都共享了该属性。

原型对象的属性不是实例对象自身的属性。只要修改原型对象，变动就立刻会体现在所有实例对象上。

```js
Animal.prototype.color = 'yellow';

cat1.color // "yellow"
cat2.color // "yellow"
```
上面代码中，原型对象的color属性的值变为yellow，两个实例对象的color属性立刻跟着变了。这是因为实例对象其实没有color属性，都是读取原型对象的color属性。也就是说，当实例对象本身没有某个属性或方法的时候，它会到原型对象去寻找该属性或方法。这就是原型对象的特殊之处。

如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法。
```js
cat1.color = 'black';

cat1.color // 'black'
cat2.color // 'yellow'
Animal.prototype.color // 'yellow';
```

上面代码中，实例对象cat1的color属性改为black，就使得它不再去原型对象读取color属性，后者的值依然为yellow。

总结一下，原型对象的作用，就是定义所有实例对象共享的属性和方法。这也是它被称为原型对象的原因，而实例对象可以视作从原型对象衍生出来的子对象。
```js
Animal.prototype.walk = function () {
  console.log(this.name + ' is walking');
};
```

上面代码中，Animal.prototype对象上面定义了一个walk方法，这个方法将可以在所有Animal实例对象上面调用。

#### 原型链
JavaScript 规定，所有对象都有自己的原型对象（prototype）。一方面，任何一个对象，都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。因此，就会形成一个“原型链”（prototype chain）：对象到原型，再到原型的原型……

如果一层层地上溯，所有对象的原型最终都可以上溯到Object.prototype，即Object构造函数的prototype属性。也就是说，所有对象都继承了Object.prototype的属性。这就是所有对象都有valueOf和toString方法的原因，因为这是从Object.prototype继承的。

那么，Object.prototype对象有没有它的原型呢？回答是Object.prototype的原型是null。null没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是null。

```js
Object.getPrototypeOf(Object.prototype)
// null
```
上面代码表示，Object.prototype对象的原型是null，由于null没有任何属性，所以原型链到此为止。Object.getPrototypeOf方法返回参数对象的原型，具体介绍请看后文。

读取对象的某个属性时，JavaScript 引擎先寻找对象本身的属性，如果找不到，就到它的原型去找，如果还是找不到，就到原型的原型去找。如果直到最顶层的Object.prototype还是找不到，则返回undefined。如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”（overriding）。

注意，一级级向上，在整个原型链上寻找某个属性，对性能是有影响的。所寻找的属性在越上层的原型对象，对性能的影响越大。如果寻找某个不存在的属性，将会遍历整个原型链。

举例来说，如果让构造函数的prototype属性指向一个数组，就意味着实例对象可以调用数组方法。
```js
var MyArray = function () {};

MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;

var mine = new MyArray();
mine.push(1, 2, 3);
mine.length // 3
mine instanceof Array // true
```

上面代码中，mine是构造函数MyArray的实例对象，由于MyArray.prototype指向一个数组实例，使得mine可以调用数组方法（这些方法定义在数组实例的prototype对象上面）。最后那行instanceof表达式，用来比较一个对象是否为某个构造函数的实例，结果就是证明mine为Array的实例，instanceof运算符的详细解释详见后文。

上面代码还出现了原型对象的contructor属性，这个属性的含义下一节就来解释。

#### constructor 属性
prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。

```js
function P() {}
P.prototype.constructor === P // true
```
由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承。

```js
function P() {}
var p = new P();

p.constructor === P // true
p.constructor === P.prototype.constructor // true
p.hasOwnProperty('constructor') // false
```
上面代码中，p是构造函数P的实例对象，但是p自身没有constructor属性，该属性其实是读取原型链上面的P.prototype.constructor属性。

constructor属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的。

```js
function F() {};
var f = new F();

f.constructor === F // true
f.constructor === RegExp // false
```
上面代码中，constructor属性确定了实例对象f的构造函数是F，而不是RegExp。

另一方面，有了constructor属性，就可以从一个实例对象新建另一个实例。

```js
function Constr() {}
var x = new Constr();

var y = new x.constructor();
y instanceof Constr // true
```
上面代码中，x是构造函数Constr的实例，可以从x.constructor间接调用构造函数。这使得在实例方法中，调用自身的构造函数成为可能。

```js
Constr.prototype.createCopy = function () {
  return new this.constructor();
};
```
上面代码中，createCopy方法调用构造函数，新建另一个实例。

constructor属性表示原型对象与构造函数之间的关联关系，如果修改了原型对象，一般会同时修改constructor属性，防止引用的时候出错。
```js
function Person(name) {
  this.name = name;
}

Person.prototype.constructor === Person // true

Person.prototype = {
  method: function () {}
};

Person.prototype.constructor === Person // false
Person.prototype.constructor === Object // true

```

上面代码中，构造函数Person的原型对象改掉了，但是没有修改constructor属性，导致这个属性不再指向Person。由于Person的新原型是一个普通对象，而普通对象的contructor属性指向Object构造函数，导致Person.prototype.constructor变成了Object。

所以，修改原型对象时，一般要同时修改constructor属性的指向。

```js
// 坏的写法
C.prototype = {
  method1: function (...) { ... },
  // ...
};

// 好的写法
C.prototype = {
  constructor: C,
  method1: function (...) { ... },
  // ...
};
```

```js
// 更好的写法
C.prototype.method1 = function (...) { ... };
```
上面代码中，要么将constructor属性重新指向原来的构造函数，要么只在原型对象上添加方法，这样可以保证instanceof运算符不会失真。

如果不能确定constructor属性是什么函数，还有一个办法：通过name属性，从实例得到构造函数的名称。

```js
function Foo() {}
var f = new Foo();
f.constructor.name // "Foo"
instanceof 运算符
instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。

var v = new Vehicle();
v instanceof Vehicle // true
```
上面代码中，对象v是构造函数Vehicle的实例，所以返回true。

instanceof运算符的左边是实例对象，右边是构造函数。它会检查右边构建函数的原型对象（prototype），是否在左边对象的原型链上。因此，下面两种写法是等价的。

```js
v instanceof Vehicle
// 等同于
Vehicle.prototype.isPrototypeOf(v)
```
上面代码中，Object.prototype.isPrototypeOf的详细解释见后文。

由于instanceof检查整个原型链，因此同一个实例对象，可能会对多个构造函数都返回true。

```js
var d = new Date();
d instanceof Date // true
d instanceof Object // true
```
上面代码中，d同时是Date和Object的实例，因此对这两个构造函数都返回true。

instanceof的原理是检查右边构造函数的prototype属性，是否在左边对象的原型链上。有一种特殊情况，就是左边对象的原型链上，只有null对象。这时，instanceof判断会失真。

```js
var obj = Object.create(null);
typeof obj // "object"
Object.create(null) instanceof Object // false
```
上面代码中，Object.create(null)返回一个新对象obj，它的原型是null（Object.create的详细介绍见后文）。右边的构造函数Object的prototype属性，不在左边的原型链上，因此instanceof就认为obj不是Object的实例。但是，只要一个对象的原型不是null，instanceof运算符的判断就不会失真。

instanceof运算符的一个用处，是判断值的类型。

```js
var x = [1, 2, 3];
var y = {};
x instanceof Array // true
y instanceof Object // true
```
上面代码中，instanceof运算符判断，变量x是数组，变量y是对象。

注意，instanceof运算符只能用于对象，不适用原始类型的值。

```js
var s = 'hello';
s instanceof String // false
```
上面代码中，字符串不是String对象的实例（因为字符串不是对象），所以返回false。

此外，对于undefined和null，instanceOf运算符总是返回false。
```js

undefined instanceof Object // false
null instanceof Object // false
```
利用instanceof运算符，还可以巧妙地解决，调用构造函数时，忘了加new命令的问题。

```js
function Fubar (foo, bar) {
  if (this instanceof Fubar) {
    this._foo = foo;
    this._bar = bar;
  } else {
    return new Fubar(foo, bar);
  }
}
```
上面代码使用instanceof运算符，在函数体内部判断this关键字是否为构造函数Fubar的实例。如果不是，就表明忘了加new命令。


##### 本文属于网摘，如有侵权请联系作者删除。

文章原地址：http://javascript.ruanyifeng.com