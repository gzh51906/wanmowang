const express = require('express');

let Router = express.Router();

// 例子
// let user = require("./user");
// 引入路由模块
// 陈日兴引入
let cMore = require("./crx/cMore");
// 黄日隆引入

// 苏沛龙引入

Router.use(express.json(), express.urlencoded({
    extended: false
}));
Router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
});

// 例子
// Router.use("/user", user);
// 使用路由模块
// 陈日兴引入
Router.use("/crx", cMore);
// 黄日隆引入

// 苏沛龙引入

module.exports = Router;