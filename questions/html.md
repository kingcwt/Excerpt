
### DOCTYPE 作用？ 标准模式与兼容模式的区别？

  1、放在HTML第一行。告知浏览器要以什么文档类型来解析

  2、标准模式：页面排版及JS运作都以该浏览器的最高标准运作。兼容模式：浏览器会模仿老式浏览器的行为，以保证页面的正常运作

### 行内元素有哪些？块级元素有哪些？空元素有哪些？  

```
  1、span,a,img,input,label,textarea,    
  
  2、p,div,h1-h6,,ul,li,  
  
  3、br,link,meta,img,input,hr    
```  
  

### 对浏览器的理解？


  1、主要分为两部分：

    1.1、渲染引擎：取得网页的HTML,css,图像等。

    1.2、JS引擎：解析和执行JavaScript来实现页面的动态效果


  2、常见的浏览器内核：

     2.1、Trident内核：IE,360,搜狗,等.

     2.2、Gecko内核：Netscape6 及以上版本，FF,MozillaSuite/SeaMonkey 等.

     2.3、Presto内核:Opera7及以上 [Opera 内核原为：Presto，现为：Blink;].

     2.4、webkit内核：safari,chrome等 [ Chrome 的：Blink（WebKit 的分支）]
=======
  1、主要分为两部分：  
  
    1.1、渲染引擎：取得网页的HTML,css,图像等。  
    
    1.2、JS引擎：解析和执行JavaScript来实现页面的动态效果  
    

  2、常见的浏览器内核：  
  
     2.1、Trident内核：IE,360,搜狗,等.  
     
     2.2、Gecko内核：Netscape6 及以上版本，FF,MozillaSuite/SeaMonkey 等.   
     
     2.3、Presto内核:Opera7及以上 [Opera 内核原为：Presto，现为：Blink;].   
     
     2.4、webkit内核：safari,chrome等 [ Chrome 的：Blink（WebKit 的分支）]

  3、简述cookie ,localStorage,sessionStorage的区别？

     1、cookie:
        1.1、cookie是标识用户身份存在用户本地终端上的数据（一般都是加密的）
        1.2、cookie数据始终在同源http请求中携带，也会在浏览器和服务器之前传递、
        1.3、cookie大小不超过4k
        1.4、cookie设置的过期时间之前一直有效，即使关闭浏览器

     2、localStorage和sessionStorage:

        2.1、都是存在客户端的数据，不会自动把数据发给服务器端
        2.2、他们的大小都超过cookie的大小，可以达到5M
        2.3、localStorage是持久数据，只要不删除，一直都在，而sessionStorage会在你关闭浏览器后自动删除

