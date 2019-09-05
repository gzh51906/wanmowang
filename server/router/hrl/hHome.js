const express = require('express');

let Router = express.Router();
let {
    formatData
} = require('../common/formatData');
let {
    insert,
    remove,
    update,
    find
} = require('../common/mongo');

//客户端首页获取数据
Router.get('/home', async (req, res, next) => {
    let {
        title
    } = req.query;
    let data = await find("goods", {
        'data.result.cate.title': title
    });
    res.send(formatData({
        data: data
    }));
    next();
})

module.exports = Router;