#   vue团队项目说明


### 项目名称

*   项目的名称为：玩墨网

### 演示

*   玩墨网官网地址
    *   http://www.inklego.com
*   项目上线地址
    *   移动端地址
        *   http://49.232.25.17:1906
    *   后台管理系统地址
        *   http://49.232.25.17:1905

### git仓库地址
*   项目在github上的仓库地址
    *   git@github.com:gzh51906/wanmowang.git

### 团队与分工
*   团队成员
    *   组长：陈日兴
    *   组员：黄日隆、苏沛龙
*   负责模块说明
    *   陈日兴负责的模块
        *   移动端部分
            >   登录注册模块、详情页模块、购物车模块、订单模块
        *   后台管理部分
            >   用户管理模块，其中这个模块又分为用户列表、添加用户、管理人员部分
    *   黄日隆负责的模块
        *   移动端部分
            >   首页、列表页模块
        *   后台管理部分
            >   订单管理模块、商品管理模块下的商品分类
    *   苏沛龙负责的模块
        *   移动端部分
            >   个人中心、客服、设计师、预售
        *   后台管理部分
            >   登录模块、商品列表模块

### 项目页面截图
![avatar](http://49.232.25.17:1901/img/zhuye1.png)![avatar](http://49.232.25.17:1901/img/liebiaoye1.png)
![avatar](http://49.232.25.17:1901/img/liebiaoye2.png)![avatar](http://49.232.25.17:1901/img/gouwuche1.png)
![avatar](http://49.232.25.17:1901/img/gouwuche2.png)![avatar](http://49.232.25.17:1901/img/gouwuche4.png)

### 项目目录说明
```
team_vueproject/
├── client/
│   ├── babel.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── README.md
│   └── src/
│       ├── App.vue
│       ├── assets/
│       │   └── logo.png
│       ├── components/
│       │   ├── crx/
│       │   │   ├── cCart.vue
│       │   │   ├── cEdit.vue
│       │   │   ├── cLogin.vue
│       │   │   ├── cMore.vue
│       │   │   └── cOrder.vue
│       │   └── spl/
│       │       ├── account.vue
│       │       ├── designer.vue
│       │       ├── image/
│       │       ├── mine.vue
│       │       ├── presale.vue
│       │       ├── reg.vue
│       │       ├── server.vue
│       │       └── set.vue
│       ├── main.js
│       ├── pages/
│       │   ├── allgoods.vue
│       │   ├── brand.vue
│       │   ├── cloth.vue
│       │   ├── collocation.vue
│       │   ├── digital.vue
│       │   ├── home.vue
│       │   ├── kitchen.vue
│       │   ├── live.vue
│       │   ├── selert.vue
│       │   ├── stationery.vue
│       │   └── trip.vue
│       ├── router/
│       │   └── index.js
│       └── store/
│           ├── common.js
│           └── index.js
├── manage/
│   ├── babel.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── README.md
│   └── src/
│       ├── App.vue
│       ├── assets/
│       │   └── logo.png
│       ├── components/
│       │   ├── crx/
│       │   │   ├── common.vue
│       │   │   ├── ignore.txt
│       │   │   ├── manageAdd.vue
│       │   │   ├── manageEdit.vue
│       │   │   ├── userAdd.vue
│       │   │   ├── userEdit.vue
│       │   │   ├── userList.vue
│       │   │   └── userManage.vue
│       │   ├── hrl/
│       │   │   ├── addClass.vue
│       │   │   ├── addType.vue
│       │   │   ├── classification.vue
│       │   │   ├── ignore.txt
│       │   │   └── order.vue
│       │   └── spl/
│       │       ├── editor.vue
│       │       ├── goodlist.vue
│       │       ├── ignore.txt
│       │       └── image/
│       ├── main.js
│       ├── pages/
│       │   ├── home.vue
│       │   ├── ignore.txt
│       │   └── login.vue
│       ├── router/
│       │   └── index.js
│       └── store/
│           ├── common.js
│           ├── index.js
│           ├── Lgoodsdata.js
│           ├── manage.js
│           └── userlist.js
├── README.md
├── server/
│   ├── config.json
│   ├── package-lock.json
│   ├── package.json
│   ├── router/
│   │   ├── common/
│   │   │   ├── formatData.js
│   │   │   ├── mongo.js
│   │   │   └── token.js
│   │   ├── crx/
│   │   │   ├── cMore.js
│   │   │   ├── cOrder.js
│   │   │   ├── cRegister.js
│   │   │   └── manage_user.js
│   │   ├── hrl/
│   │   │   ├── Hclass.js
│   │   │   ├── hHome.js
│   │   │   ├── hlistpage.js
│   │   │   ├── Horder.js
│   │   │   └── ignore.txt
│   │   ├── index.js
│   │   └── spl/
│   │       ├── ignore.txt
│   │       ├── Lcheck.js
│   │       ├── Ldes.js
│   │       ├── Lfind.js
│   │       └── Lgoodlist.js
│   └── server.js
└── tree.txt
```


