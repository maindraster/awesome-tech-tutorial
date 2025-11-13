---
title: 前后端速成
description: 前后端的快速介绍，快速上手AI编程
lastUpdated: 2024-09-30
sidebar:
    order: 5
---

<center class="aspect-ratio">
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=113226377334828&bvid=BV16xx4ecEAH&cid=26077826622&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</center>

当前 AI 已有很强的写代码能力，要想实现前后端没有必要再花大量时间，我们仅仅只需要对前后端有一个基础的认知。而这就是这个视频的目标，我就是了解这些并用短短几个小时调教国内 AI 帮我写了一个前后端。

## 前端

用户直接与之交互的部分，通常指的是网页或应用程序的界面。

### HTML

HTML（HyperText Markup Language）是构建网页和网络应用内容的结构化标准语言。它由一系列的元素（或称为标签）组成，这些元素可以定义文本、链接、图片、表格等，是任何网页内容的基础。

**我们可以检查网页源代码（html），来查看这个交互界面大概是怎样、修改前端显示的内容。**

我们先有个直观感受：
1. HTML 用大量的标签构建
2. HTML 代码与页面上的东西有对应的关系

实践：既然一一对应，让我们尝试修改一下自己 B 站粉丝数。

仔细端详：
1. 分为`<head>`和`<body>`两部分，一一对应的内容（可见的）其实是<body>当中的

2. `<head>`标签包含了文档的元数据，即描述文档或文档中某个部分内容的信息，以及关于文档的配置信息。这部分内容对用户不可见，但对浏览器、搜索引擎和其它Web服务很重要。<head>中常见的元素包括：

`<title>`：定义网页的标题，显示在浏览器的标签页上。

`<meta>`：提供关于HTML文档的元数据，如字符集声明、页面描述、关键词等。

`<link>`：链接到外部资源，如CSS样式表。

`<script>`：嵌入或引用JavaScript代码。

`<style>`：内联CSS样式。

`<base>`：指定整个文档中所有相对URL的基准URL。

`<meta>`：定义文档的元数据，如作者、描述、关键词等。

3. `<body>`标签包含了网页的可见内容，即用户在浏览器窗口中看到的部分。这包括文本、图片、视频、游戏、表单等。<body>中的内容是直接呈现给用户的。

`<h1>`到`<h6>`：标题标签。

`<p>`：段落。

`<a>`：超链接。

`<img>`：图片。

`<div>`：文档中的分区或节。

`<span>`：文本中的分区或节。

`<table>`：表格。

`<form>`：表单。

实践：看看 B 站的动态横幅（`<img>`）、分区按钮（`<a>`）。

4. **容器标签**：包含开始和结束标签，用于定义包含内容的区域。
**自闭合标签**：没有结束标签，用于插入不包含其他元素的独立元素。

实践：我们找把 B 站首页的 HTML 下载下来（源代码 -> 索引）。

但是纯 HTML 太丑了！

### CSS

CSS（层叠样式表，Cascading Style Sheets）是一种用于描述HTML或XML文档的样式表语言。CSS不仅可以静态地修饰网页，还能动态地激活网页内容。通过使用CSS，可以控制网页的**布局、颜色、字体**以及各种其他视觉和版式特性。

有三种使用的方法：
1. 内联样式：直接在HTML元素的style属性中写样式。

```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
	<p style="color: red; font-size: 20px;">这是一个段落。</p>
  </body>
</html>
```

2. 内部样式表：在HTML文档的`<head>`部分使用<style>标签定义样式。

```html
<!doctype html>
<html>
  <head>
    <style>
        p {
            color: red;
            font-size: 20px;
        }
    </style>
</head>
  </head>
  <body>
	<p>这是一个段落。</p>
  </body>
</html>
```

3. 外部样式表：在HTML文档之外创建一个.css文件，然后在HTML中通过<link>标签引入。(直接看 AI 写的前后端)

### JS

前端的 JS 主要有这些功能：
1. 用于增强用户界面的交互性；
2. 处理用户输入和事件响应；
3. 动态更新页面内容而不需要重新加载整个页面。

在我们的代码中是 app.js ，其中有几个鲜明的特色：
- document.getElementById：去找绑定 id 的前端组件
- function 功能

按钮计数器：

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Counter</title>
<script>
// 这个函数会在页面加载时执行
function initializeCounter() {
    // 设置初始计数为0
    var counter = 0;
    
    // 获取显示数字的元素
    var displayElement = document.getElementById('counterDisplay');
    
    // 设置显示元素的初始值为0
    displayElement.innerText = counter;

    // 这个函数会在按钮点击时调用
    function incrementCounter() {
        // 增加计数
        counter += 1;
        
        // 更新显示元素的值
        displayElement.innerText = counter;
    }
    
    // 为按钮设置点击事件监听器
    document.getElementById('incrementButton').addEventListener('click', incrementCounter);
}

// 调用初始化函数
window.onload = initializeCounter;
</script>
</head>
<body>

<h1>Simple Counter Example</h1>
<p>Count: <span id="counterDisplay">0</span></p>
<button id="incrementButton">Increment</button>

</body>
</html>
```

### 前端框架

前端框架是用于开发网页和Web应用程序的工具和库的集合。它们通常都是基于 HTML、CSS 和 JavaScript ，但是提供了一套结构和约定，使得前端开发**更加高效和可维护**。

上周我们用模板搭建的博客使用了 Astro 前端框架。此外比较著名的有 React 、Vue 、 Svelte 等，都有各自的特色。

## 后端

后端，也称为服务器端，是指在网络应用或网站内部用户看不见的部分，主要负责**数据处理、业务逻辑处理、数据库管理、服务器维护和应用程序的安全等任务**。后端开发主要关注服务器、数据库和应用程序的内部结构。

比如：你在购物网站买东西，里面这些商品的信息是保存在哪里？它肯定不在你手机里，换个手机登录同一个账号，显示信息是一样的。前端界面显示的东西一定来自其他我们看不见、不知道的地方。

后端语言有：JavaScript ( NodeJS ), Python, Ruby, Java 等。

### 两种工具

如果直接用这些语言干撸代码，工程量太大而且“重复造轮子”。于是大家商量搞**后端框架**，减少重复劳作，提高效率。里面会用到很多包（用来做一些常见的任务，如计算、与数据库通信、登录、身份验证等），所以还需要一个管理包的东西——**包管理器**。

后端框架：ExpressJS, Python Django, Ruby on Rails, Java Spring 等。

包管理器：npm ( JS, 上周我们使用 pnpm 包管理器安装依赖), pip ( Python ), bundler ( Ruby ), Maven ( java )

### 数据保存

后端的数据可以保存在内存（一关就没了）当中、也可以是本地电脑里（保存为文件存在电脑里，需要时提取，比如vx QQ），但企业通常一般都是用数据库专门管理数据。

后端专门处理业务逻辑等，而数据库专注于数据的存储、检索、更新和管理。

常见数据库有：PostgreSQL , MySQL , MongoDB 等。

### API

让我们梳理以下整个流程。

1. 客户端（在我们电脑上）联网，向服务器发起请求（比如我想要看看[这个](https://space.bilibili.com/3546706348084176?spm_id_from=333.1007.0.0)链接有什么）
2. 服务器处理请求，或者向客户端返回数据，或者再访问数据库
3. 数据库传回数据，服务器再把数据给客户端

我们说的前后端代码就在服务器里（可以把服务器当做另一台电脑）。我们交互的是前端，所以就是前端向后端发送请求。现在有两种方式，一种前后端不分离，后端渲染好直接在前端显示；另一种是前后端分离，更加常用。（有点像模块化编程的逻辑）

分离的前后端怎么实现沟通呢？就是通过 **API**。

在Web开发中，API允许前端（浏览器中的JavaScript）从后端服务（如 RESTful 服务）请求数据。这些数据可以是 JSON 或 XML 格式，前端应用可以使用这些数据来渲染用户界面。

我们直接看 app.js ：

```js
const response = await fetch('/books', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, note }),
});

const book = await response.json();
```

这是用 Json 格式发送的请求。它方法（由 API 决定，一般只有几种）包含 headers 请求头（描述我这次请求）和 body 请求体（说明我请求的内容）。

RESTful API 是比较常用的 API，它的方法有：
- GET：请求从服务器检索特定资源。
- POST：向服务器提交新数据。
- PUT：更新服务器上的现有资源。
- DELETE：从服务器删除资源。 

实践：打开检查 -> 网络，我们新加一本书的笔记，查看请求的表头、载荷。

### API 到后端实现

后端前面的部分就是连接到数据库。

我们来看 API 功能实现的部分：

```js
app.post('/books', async (req, res) => {
    try {
        const result = await Book.create({
            title: req.body.title,
            note: req.body.note
        });
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
});
```

app.post对应 post 请求。'/books'是**路由**。它是用来区别用户发起的不同请求的。get、post请求可能有很多，需要有路由来区别。当路由匹配成功时，服务器将执行对应的处理函数或控制器。

### Spring Boot 三层架构

我们刚刚用的是 ExpressJs，接下来我们简单了解一下 Java 语言常使用的 Spring Boot 框架。它有三层架构：

- Controller层（表现层）：负责处理用户的 HTTP 请求，并返回响应。Controller 层接收前端发送的请求，对请求进行处理，并且响应数据。

- Service层（业务逻辑层）：处理具体的业务逻辑。

- DAO/Mapper层（数据访问层）：直接与数据库交互，执行 **CRUD** 操作（创建、读取、更新、删除；增删改查）。在 Spring Boot 中，通常使用接口来定义数据访问方法，然后通过 MyBatis 或 JPA 等框架来实现这些方法。

这下应该更好理解为什么不前端直接连数据库了吧。

## 附录：关于这个 AI 写的前后端

我的流程：安装 MySQL 和 Navicat；安装 NodeJS，用 npm 安装 ExpressJs 包。然后对话，下面是我使用的 Prompt 不一定好。

```
我想要你用nodejs和express 作为后端，写一个图书记录（包括图书名称和图书笔记）的增删改查系统，它应该包含前后端，你应该给我所有包含前后端能实现它的代码以及必要的解释，因为我是新手。我现在仅仅只是npm install express，请给我详细的步骤。
```

如果跟着文档或视频练习，你可以直接用上一周科普的 git 用法：

```sh
git clone 
```

## 本周任务

```
无，大家国庆好好玩！！
```
