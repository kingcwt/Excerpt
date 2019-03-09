
### 浏览器渲染原理 【原地址：https://segmentfault.com/a/1190000011091907?utm_source=tag-newest 】

  1. HTML被解析成DOM Tree,CSS被解析成CSS Rule Tree;
  2. 把DOM Tree和CSS Rule Tree 经过整合生成Render Tree (布局阶段)
  3. 元素按照算出来的规则，把元素放到对应的位置上，通过显卡画到屏幕上

