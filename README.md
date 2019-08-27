### 项目链接
[next + react + koa2 + axios 开发github页面](http://github.shuaiguo.me)
<br/>
真实项目是第二个nextjs-project
#### 项目简介：
这个项目主要围绕的是nextjs，nextjs是一个同构的框架
##### 为什么要做同构？
因为平时我们开发前端页面的时候需要用react或vue，react和vue的特点都是
页面都是由react和vue的javascript代码产生的，也就是我们运行了javascr
ipt的代码来产生给用户看的页面上的内容已经相应用户的事件，但是这样做有
一个问题，就是要运行这样的页面，首先要把react或者vue这些代码加载进来，
然后再把基于react或者vue写的代码加载进来，最终才会显示html这些内容，
然后去绑定事件，在load这些javascript代码之前，我们的html是完全没有内
容的，这对于用户来说，会有一个比较长的等待时间，而且对于搜索引擎来说空
的html完全无法做seo的优化。
##### 同构的原理
nextjs同构框架的原理就是利用react在客户端和服务端渲染，可以利用react
的server render在nodejs的服务端环境渲染出html的内容，同一份react代码
可以在浏览器中渲染出页面，可以让用户观看去点击处理时间，在服务端的时候，
我们可以根据相同的url渲染出html，这样我们就可以跟传统服务端开发（没有
前后端分离）一样直接返回html内容给用户，这样的话seo优化和使用react开发
前端页面都可以解决
##### 同构的难点
数据同步是难点，什么是数据同步，我们在服务端渲染过程当中，是从用户在浏
览器输入一段url开始的，用户输入url请求到我们的服务端，服务端获取到我们
的请求，获取到请求参数，然后渲染出对应的html内容，渲染的过程肯定要用到
这个html内容对应的数据的，这个数据同样也是react在浏览器客户端渲染时需
要的数据，我们即便在服务端渲染出了html内容返回给用户了，而浏览器端展示
了这部分html内容之后同样也是要加载react和我们写的react代码，因为要绑定
事件去处理事件的响应，如果不做数据同步，客户端肯定会再渲染一遍，但是客
户端和服务端的数据，绝大部分是一模一样的，如果再向服务端发起请求获取跟服
务端渲染一模一样的数据，就会浪费网络资源，并且增加用户的等待时间
##### 解决数据同步难点
nextjs通过getInitialProps来解决数据同步的难点，我们在服务端渲染的时候
会使用getInitialProps方法，并且得到一个return返回，这个返回会作为页面
的props来接收到，同时在服务端渲染return的数据,会被nextjs处理收集，在返
回html的时候，会给我们插入到html的id="__NEXT_DATA__"的script标签中，
这样我们会以html的一部分来保存数据，在客户端初始化代码的时候，会从标签中
读取这部分数据，然后作为react在客户端的第一次渲染时初始化数据，就不需要
再调用getInitialProps方法再去重新请求数据，所有跟数据同步有关的事情，都
使用getInitialProps方法去做，这是nextjs的核心，不用getInitialProps，
不会用getInitialProps，就不需要用nextjs
##### OAuth
OAuth是现在通用的第三方授权解决方案，现在用的越来越多，有很大必要掌握
##### Cookie & Session
Session一般用redis去做
##### Hooks
react hooks为未来react未来的标准，有很大必要掌握
##### React生态周边
redux在nextjs中数据同步的问题，antd组件库的使用
### 项目截图
#### 首页 + 仓库列表
![首页 + 仓库列表](http://cdn.shuaiguo.me/1.cangku.jpg)
#### 首页 + 关注的仓库列表
![首页 + 关注的仓库列表](http://cdn.shuaiguo.me/2.huanzhucangku.jpg)
#### 搜索页
![搜索页](http://cdn.shuaiguo.me/3.search.jpg)
#### readme页面
![readme页面](http://cdn.shuaiguo.me/4.readme.jpg)
#### issues页面
![issues页面](http://cdn.shuaiguo.me/5.issues.jpg)
