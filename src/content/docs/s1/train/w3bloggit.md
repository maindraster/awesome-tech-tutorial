---
title: 搭建博客与Git操作
description: 学会使用Git、Github，以Astro模板为例搭建自己的博客网站
lastUpdated: 2024-09-23
sidebar:
    order: 4
---

<center class="aspect-ratio" >
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=113187336822624&bvid=BV1oxsDesEwt&cid=25972441459&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</center>

## 搭建博客

### 什么是博客？

博客是技术佬发文章的、分享感悟的——“秀肌肉”。招聘时如果能展示一下个人博客或许会有不错的效果。它也可以是私人的“朋友圈”，通过友链与其他人的博客相连。

对于还未接触过项目的工科新生来说，搭建个人博客就可以是你的第一个项目，从中学习一些基本的项目层级常识、Git基本操作等。

### 超全博客汇总

第一类是在平台发博客，界面自定义程度较低，就只能发发文章、图文之类的，但大众都能接触到。

<div class="container-b not-content" >
    <div class="row-b"> 
        <div class="button-cell"><a href="https://www.csdn.net/" target="_blank" class="button">CSDN</a></div>
        <div class="button-cell"><a href="https://www.cnblogs.com/" target="_blank" class="button">博客园</a></div>
        <div class="button-cell"><a href="https://xlog.app/" target="_blank" class="button">Xlog</a></div>
        <div class="button-cell"><a href="https://juejin.cn/" target="_blank" class="button">掘金</a></div>
	</div>
</div>

第二类是完全自制的博客网站，通常美观程度高，包含前后端，但一般很难接触到，比较私人化。

第三类就是利用他人制作的模板来做自己的博客网站。在前人基础上建，制作花费时间较少；仍有很高的自定义空间。以下为**常见博客搭建**汇总和网友点评：

<div class="container-b not-content" >
    <div class="row-b"> 
        <div class="button-cell"><a href="https://gohugo.io/" target="_blank" class="button">Hugo</a></div>
        <div class="button-cell"><a href="https://hexo.io/zh-cn/" target="_blank" class="button">Hexo</a></div>
        <div class="button-cell"><a href="https://wordpress.com/zh-cn/themes" target="_blank" class="button">WordPress</a></div>
        <div class="button-cell"><a href="https://typecho.org/" target="_blank" class="button">Typecho</a></div>
        <div class="button-cell"><a href="https://www.halo.run/" target="_blank" class="button">Halo</a></div>
	</div>
</div>


|  Hugo                    | Hexo              | WordPress      | Typecho | Halo         |
|  ----------------------- | ----------------- | -------------- | ------- | ------------ |
|   性能好，会HTML和CSS方便二次修改 | 主题多、好看，插件多，静态部署方便 | 有服务器（大站）、图方便成熟 | 小站      | 内存占用大，好主题不便宜 |
|  Go                      | TS                | PHP            | PHP JS  | Java TS Vue  |

此外还有 [solo博客](https://github.com/88250/solo)、[Mkdocs](https://markdown-docs-zh.readthedocs.io/zh-cn/latest/)以及一些个人模板，如[Poetize](https://poetize.cn/)。

## Github 基本操作

### 1. 找一个好看的模板

打开 Astro 提供的主题[地址](https://astro.build/themes/)，可以通过筛选找博客模板，选择 blog ，不愿花钱可以选 free 。

![s150](../../../../assets/images/63.png)

在里面挑一个模板，我这里帮大家找了四个比较不错的博客模板：

1. [zozo](https://github.com/ladit/astro-blog-zozo)：比较素、文艺的博客，[demo](https://astro-blog-zozo.pages.dev/)
2. [Astro Yi](https://github.com/cirry/astro-yi)：风格更贴近工科生的简单博客，[demo](https://astro-yi-nu.vercel.app/)
3. [fuwari](https://github.com/saicaca/fuwari)：比较好看、多彩的博客，[自建demo](https://kongzhiqingnian.netlify.app/)
4. [Gyoza](https://github.com/lxchapu/astro-gyoza)：很好看、多元、彩色的博客，[自建demo](https://drowsyindra.github.io/)

这里我们选择 Gyoza （支持一下国内开发者 🥰 ），来到它的仓库。

### 2. 建仓库

到我的[drowsyindra.github.io](https://github.com/drowsyindra/drowsyindra.github.io)仓库，点击 fork 到自己的仓库，特别注意仓库名称必须是`你的用户名.github.io`。

![fork](../../../../assets/images/65.png)

### 3. 创建秘钥

打开`C:/Users/用户名/.ssh`文件夹，打开终端，我这里已经有两个秘钥了，所以定为 three ，它可以创建公钥。

```sh
ssh-keygen -t rsa -C "three@github.com"
```

![创建钥匙](../../../../assets/images/66.png)

为了管理多个 github 账户需要这么做，你需要一个 config 文件。可以右键新建txt文件而后更改名称（不是txt文件，后缀也要删掉，全称就叫config）。在里面对刚刚新建的秘钥进行配置（注意保存）。

```sh
Host three.github.com
HostName github.com
PreferredAuthentications publickey
User allintky
IdentityFile ~/.ssh/id_rsa_three
```

打开 github 点击头像，点击 Settings ，左侧找到 SSH and GPG keys ， 点击 new SSH key

![配置秘钥](../../../../assets/images/67.png)

Title 随便写，下方的 Key 的部分用你刚刚创建的秘钥中的内容填充，即 id_rsa_three.pub （在记事本中编辑）全选复制，粘贴进去。点击 add SSH key ，然后输入自己账号密码。

打开终端，输入：

```cmd
ssh -T git@three.github.com
```

![秘钥链接](../../../../assets/images/68.png)

:::danger[报错解决：ssh:could not resolve hostname]
挂t子的时候，注意不要设定修改ip地址
:::

### 4. 基本操作

到自己的仓库，点击 code 复制 HTTPs 内容 git clone

```cmd
git clone https://github.com/allintky/allintky.github.io.git
```

![git clone](../../../../assets/images/69.png)

这一步清空全局的邮箱和用户配置：

```cmd
git config --global --unset user.name
git config --global --unset user.email
```

然后配置一下github用户名和注册github时所用的邮箱（注意，也不一定是.com，比如学校邮箱）：

```cmd
git config user.name "xxx"
git config user.email "xxx@xxx.com"
```

查看是否与 github 仓库远程连接成功

```cmd
git remote -v
```

![s500](../../../../assets/images/70.png)

## 博客启动！

### 5. 配置 Github Pages

到项目仓库中，找到 Actions ，enable them 开启它：

![开启action](../../../../assets/images/71.png)

然后在 Settings 里面的 Pages 更改 Source 为 Github Action

![配置pages](../../../../assets/images/72.png)

### 6. 本地查看网页

根据这个模板提供的教程，我们在这个项目文件夹下运行以下代码来安装依赖。

```cmd
pnpm i
```

再运行这个来在本地查看网页。

```cmd
pnpm dev
```

### 7. 欢迎来到自己的博客！

我们通过一下两个操作来更新我们本地 git 的内容，这时左侧 VScode 显示的绿色、棕色就没了，表示本地内容已同步。其中 . 表示当前文件夹，即把当前文件夹内所有文件和飞控文件夹设置为待提交状态。

```cmd
git add .
git commit -m "feat: test"
```

通过以下语句来把本地仓库，推送到远程连接的 github 仓库。

```cmd
git push
```

:::danger[git push总失败/超时]
特别注意，如果你像我这样有多个密钥。git push可能总是报错。先确定你要push的仓库是哪个账号的，然后在config中找到对应的配置正确配置和远程仓库的链接。

`git remote`不能用https，必须用ssh，例如下面的`two.github.com`：
```cmd
git remote set-url origin git@two.github.com:用户名/仓库名.git
```
:::

Vscode 请求你们授权，你们就一路点绿色按钮，授权完成，最后页面如果没有跳转，点击它提供的超链接回到 VScode。

![s300](../../../../assets/images/73.png)

![s500](../../../../assets/images/74.png)

然后稍等一会儿（等到仓库这里**棕色的点**变为**绿色的勾**），你就完成啦！

在浏览器中输入`你的用户名.github.io`，我这里是 allintky.github.io ，就可以看到自己的博客网页啦！这个网址可以分享给你的亲朋好友，他们也能看到啦！🌹😍

## 写博客吧

剩下配置属于你的博客页面就需要你好好钻研这个文件了。

最基本的操作就是利用 VScode 的搜索功能，比如我的首页是在哪配置的，上面写了“硬件基础”，那就去搜索。

它在`src/components/hero/Hero.astro`里面。这是事实上就是一个前端的页面。你可以学习一些 astro 的语法来写，也可以像我这里一样，用 HTML 来写。

### 主要配置

1. **astro.config.js**

把 site 里面前缀更改为你的用户名，也就是用你的网址

其余为添加、修改或删除所使用的插件，根据需求配置（把插件的 js 放入 src 的 plugins 中；然后在上方添加 import ；下面配置里面添加插件）

2. **src/config.json**

把 site 里面前缀更改为你的用户名，也就是用你的网址

根据英文你就可以知道每一项是做什么的了，总的来说是对博客页面进行一个全局的配置。

3. **src/content 文件夹**

这个文件夹内放的就是你写的博客文档或者项目介绍了。一些操作可以看提供的 Markdown 使用文档学习。

然后在文章的最后你可以注意到一个炫酷的数字签名，这个在哪呢？

在 assets/signature.svg 内，我这里提供一个[绘制 svg 的工具网站](https://c.p2hp.com/more/svgeditor/)

文件，新建文档 -> 右侧设置画布大小，宽 250 高 120（差不多）-> 你可以在里面画空心的字，因为这个模板会帮你添加填充的动画 -> 视图，源代码里面把`<g></g>`这部分复制，替换原来 svg 文件对应位置。

### 关于 Astro

Astro 是最适合构建像博客、营销网站、电子商务网站这样的以内容驱动的网站的 Web 框架。Astro 以开创了一种新的前端架构而闻名，与其他框架相比它减少了 JavaScript 的开销和复杂性。如果你需要一个**加载速度快**、具有良好 SEO 的网站（搜索引擎优化），那么 Astro 就是你的选择。

另外，你想知道的关于 Astro 的都在[这里](https://docs.astro.build/zh-cn/getting-started/)

**那么久让我们愉快地玩博客吧！** 🥰🚀

## 本周任务

```
1. 学习 Git 相关知识，视频链接和 roadmap 见后
2. 尝试通过模板搭建个人博客，熟悉 Github 和 Git 基本操作
```
推荐视频：[十分钟学会正确的github工作流，和开源作者们使用同一套流程](https://www.bilibili.com/video/BV19e4y1q7JJ/?spm_id_from=333.337.search-card.all.click&vd_source=55401c54bd84efd41bb0fafd9ea436f5)

Roadmap：[学习路线](https://roadmap.sh/git-github)
