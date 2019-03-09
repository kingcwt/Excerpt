
### JS实现继承的几种方式：

##### 1、call继承*

> call继承：就是把父类的私有属性和方法 克隆一份作为子类的私有属性和方法


  ```js

  function P(){

  this.name='parent';

  }

  P.prototype.method=function(){

  console.log(this.name);

  };

  function C(){

  this.x='children';
  P.call(this);

  }

  let n=new C();

  console.log(n.name); //parent
  console.log(n.x); //children
  n.method();  //报错

  ```

##### 2、原型继承*

> 原型继承：就是把父类的私有属性和方法+父类的公有属性和方法 作为子类的公有属性和方法

  ```js
  function P(){

    this.name='parent';

    }

    P.prototype.method=function(){

    console.log(this.name);

    };

    function C(){

    this.x='children';

    }

    C.prototype=new P();

    let n=new C();

    console.log(n.name);  //parent
    console.log(n.x);  //children
    n.method();  //parent

  ```
##### 3、寄生组合式继承*

> 寄生组合式继承：就是把父类的私有属性和方法作为子类的私有属性和方法，父类的公有属性和方法作为子类的公有属性和方法

```js
function P(){

    this.name='parent';

    }

    P.prototype.method=function(){

    console.log(this.name);

    };

    function C(){

    P.call(this);

    this.x='children';

    }

    C.prototype=Object.create(P.prototype);
    C.prototype.constructor=C;
    let n=new C();

    console.log(n.name);  //parent
    console.log(n.x);  //children
    n.method();  //parent

    function Object_create(ele) {
        //处理Object.create方法不兼容
        function fn() {}
        fn.prototype=ele;
        return new fn();
    }


```
##### 4、混合模式继承

> 就是原型继承+call继承

```js
function P(){

  this.name='parent';

  }

  P.prototype.method=function(){

  console.log(this.name);

  };

  function C(){

  this.x='children';
  P.call(this);

  }
  C.prototype=new P();
  C.prototype.constructor=C;
  let n=new C();

  console.log(n.name); //parent
  console.log(n.x); //children
  n.method();  //parent


```

##### 5、冒充对象继承

> 把父类的私有属性和方法+父类的公有属性和方法 克隆一份作为子类的私有

```js

function P(){

  this.name='parent';

  }

  P.prototype.method=function(){

  console.log(this.name);

  };

  function C(){

  this.x='children';
  let temp=new P();
  for(let key in temp){

  this[key]=temp[key]

  }
    temp=null;
  }


  let n=new C();

  console.log(n.name); //parent
  console.log(n.x); //children
  n.method();  //parent

```

