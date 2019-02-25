### 面试题小结

- 什么是CSS盒子模型？
>  就是内容（content）+ 内边距（padding）+边框（border）+外边距（margin）

- 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
> 行内元素： a  span  input  img  button  textarea
> 
> 块级元素： div  p   h1-h6  ul  li 
> 
> 空元素：br hr img input link

- 怎样添加、移除、移动、复制、创建和查找节点？
>  创建一个DOM片段：`createDocumentFragment()`  
>  
>  创建一个DOM元素：`createElement()`  
>  
>  创建一个文本节点：`createTextNode()`  
>  
- 添加，移除，替换，插入
> 添加：`appendChild()`
> 
> 删除：`removeChild()`
> 
> 替换：`replaceChild()`
> 
> 插入：`insertBefore()`
> 
- 查找
> 通过标签名称：` getElementsByTagName() `
> 
> 通过元素的 Name属性的值：`getElementsByName()`
> 
> 通过元素ID，唯一性：`getElementById()`
> 
- **数组去重 ES6方法**：
```
var arr=[1,2,2,2,2,2,2,2,3,4,4,4,4,4,5,56,6,6,6,77,7,7,7,8,8,8,8,9];
var arr2=[...new Set(arr)];
console.log(arr2)   //(11) [1, 2, 3, 4, 5, 56, 6, 77, 7, 8, 9]
```
- 伪数组转换为数组的操作
```

function log() {
    var args=Array.prototype.slice.call(arguments); //使伪数组使用数组的方法
    args.unshift('(what you say)');
    return args;
}

console.log(log(1, 2, 3));//  [ '(what you say)', 1, 2, 3 ]
```

- 一次完整的HTTP事务是怎样的一个过程？
> 基本流程：
> 
> a. 域名解析
> 
> b. 发起TCP的3次握手
> 
> c. 建立TCP连接后发起http请求
> 
> d. 服务器端响应http请求，浏览器得到html代码
> 
> e. 浏览器解析html代码，并请求html代码中的资源
> 
> f. 浏览器对页面进行渲染呈现给用户
> 

-  在js中如何判断当前浏览器正在以何种方式解析？

> document对象有个属性compatMode,它有两个值：BackCompat对应quirks mode，CSS1Compat对应strict mode。


#### react中key 的作用是什么？

  key在数据循环中表示了其元素的唯一性，在react Diff 算法中会借助元素的key值来判断 该元素是新创建的还是移动过来的，从而减少不必要的的元素渲染

#### 调用setState后发生了什么？

  会将传入的新状态和旧状态进行合并，计算出新树和老树的差异,重新渲染页面,按需更新

#### react 生命周期函数

  1、初始阶段：
    1.1、getDefaultProps:获取实例的默认属性
    1.2、getInitialState:获取每个实例的初始状态
    1.3、componentWillMount:组件将要挂载前
    1.4、render():生成虚拟DOM树 渲染
    1.5、componentDidMount:组件挂载后

  2、运行中状态：

    2.1、componentWillReceiveProps:组件将要接受新的属性是调用

    2.2、shouldComponentUpdate:组件接受新属性是 （应该更新时调用）

    2.3、componentWillUpdate:组件将要更新时

    2.4、render()：生成虚拟DOM树 渲染

    2.5、componentDidUpdate:组件更新后

  3、销毁状态：

    3.1、componentWillUnmount:组件将要销毁时调用


#### shouldComponentUpdate 方法是做什么的

  shouldComponentUpdate用来判断是否调用render方法重新渲染DOM树，如果可以在此方法写出更优化的dom Diff算法 可以极大的提高性能

#### 为什么虚拟DOM会提高性能？

  1、虚拟DOM相当于在JS和真实DOM之前加了一个缓存，利用Dom Diff算法避免不必要的DOM操作。

  2、当状态更新时。会先创建一个虚拟DOM对象 判断与真实DOM之前的差异，把合并后的状态构建在真实DOM树上 视图就更新了


#### 简述flux思想

  1、用户访问view,view发出用户的Action,

  2、dispatcher收到Action,要求Store进行相应更新、

  3、Store更新后、发出一个'change'事件、view收到'change'事件后 更新页面

#### 简述 redux
```
  redux 是一个应用数据流框架，主要是解决了`组件间状态共享的问题`，原理是`集中式管理`，主要有三个核心方法，action，store，reducer，
  工作流程是 view 调用 store 的 dispatch 接收 action 传入 store，reducer 进行 state 操作，view 通过 store 提供的 getState 获取最新的数据，

  flux 也是用来进行数据操作的，有四个组成部分 action，dispatch，view，store，
  工作流程是 view 发出一个 action，派发器接收 action，让 store 进行数据更新，更新完成以后 store 发出 change，view 接受 change 更新视图。
  Redux 和 Flux 很像。
  主要区别在于 Flux 有多个可以改变应用状态的 store，在 Flux 中 dispatcher 被用来传递数据到注册的回调事件，
  但是在 redux 中只能定义一个可更新状态的 store，redux 把 store 和 Dispatcher 合并,结构更加简单清晰
  新增 state,对状态的管理更加明确，通过 redux，流程更加规范了，减少手动编码量，提高了编码效率，同时缺点时当数据更新时有时候组件不需要，
  但是也要重新绘制，有些影响效率。一般情况下，我们在构建多交互，多数据流的复杂项目应用时才会使用它们
```




