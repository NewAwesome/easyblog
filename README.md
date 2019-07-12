# 一、使用方法

### 工程依赖安装

```
yarn install
```

### 启动前台服务器

```
yarn run serve
```

### 启动后台服务器

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
_id,username(String),password(String),isadmin(Boolean)
```
- 博文表 contents：字段结构 
```
_id,title(String),category(String),num(Number),user(String),comment(Array 每条评论结构{comment(String),user(String),time(String)}),addtime(String),description(String),composition(String)
```
- 分类表 categories：字段结构 
```
_id,name(String)
```

# 三、项目介绍

该项目分为前台和后台。是一个简易博客

**前台技术**： Vue + Vuex + Vue-router，vue-cli 搭建工程。使用 Axios 配合 webpack 代理服务器请求后端数据

**后台技术**： Node.js 实现后台，使用 web 框架 koa2 + koa-router，mongoose 操作 mongodb 数据库

**其他技术点**： 用户登录验证及后台权限控制通过 token 技术实现，bcrypt 后端加密。

**一些说明**：

该项目仅完成了基本的功能：注册、登陆、查看博文、评论、后台管理博文、后台管理用户、后台管理博文分类，其中后台管理项实现了增删改查。

用于练习前后端的全栈项目，未来会继续更新完善前台 ui 界面和后台更多功能，最终作为自己的个人网站上线。
