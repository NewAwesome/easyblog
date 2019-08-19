# 一、使用方法

### 工程依赖安装

```
yarn install
```

### 启动前台服务器（默认8080

```
yarn run serve
```

### 启动后台服务器（默认3000

```
yarn run back
```

### 生产环境构建

```
yarn run build
```

# 二、数据库

采用 mongodb 数据库。数据库相关配置位于 easyblog/server/config/db.js

### 数据库表结构

- 用户表 users：字段结构 
```
_id , username(String) , password(String) , isadmin(Boolean)
```
- 博文表 contents：字段结构 
```
_id , title(String) , category(String) , num(Number) , user(String) , comment(Array 每条评论结构
{comment(String) , user(String) , time(String)} ) , addtime(String) , description(String) , composition(String)
```
- 分类表 categories：字段结构 
```
_id , name(String)
```

# 三、目录结构
```
|-- easyblog
  |-- public                  文件夹：vue-cli生成，是vue页面的最外层框子
  |-- server                  文件夹：nodejs后端
    |-- config                文件夹：配置文件
      |-- db.js               mongodb数据库配置文件
    |-- controllers           文件夹：后端业务逻辑全部放在这里
    |-- models                文件夹：mongoose直接对数据库进行操作的地方
    |-- routes                文件夹：koa-router路由配置层
    |-- schema                文件夹：mongoose schema层（类似mysql使用时的表结构定义） 
  |-- src                     vue前端
    |-- assets                文件夹：存放资源文件
    |-- components            文件夹：存放vue组件
    |-- views                 文件夹：vue文件页面
    |-- App.vue 
    |-- main.js               vue入口文件
    |-- router.js             vue-router
    |-- store.js              vuex
  |-- app.js                  koa入口文件
  |-- vue.config.js
```
# 四、项目介绍

该项目分为前台和后台。是一个简易博客

**前台技术**： Vue + Vuex + Vue-router，vue-cli 搭建工程。使用 Axios 配合 webpack 代理服务器请求后端数据

**后台技术**： Node.js 实现后台，使用 web 框架 koa2 + koa-router，mongoose 操作 mongodb 数据库

**其他技术点**： 用户登录验证及后台权限控制通过 token 技术实现，bcrypt 后端加密。

**一些说明**：

该项目仅完成了基本的功能：注册、登陆、查看博文、评论、后台管理博文、后台管理用户、后台管理博文分类，其中后台管理项实现了增删改查。

用于练习前后端的全栈项目，未来会继续更新完善前台 ui 界面和后台更多功能，最终作为自己的个人网站上线。

# 五、截图

![这里随便写文字](https://github.com/NewAwesome/easyblog/blob/master/mdImg/home.png)
![这里随便写文字](https://github.com/NewAwesome/easyblog/blob/master/mdImg/detail.png)
![这里随便写文字](https://github.com/NewAwesome/easyblog/blob/master/mdImg/admin.png)
![这里随便写文字](https://github.com/NewAwesome/easyblog/blob/master/mdImg/edit.png)
