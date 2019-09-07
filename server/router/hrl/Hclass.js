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
} = require("../common/mongo");

//获取商品类别数据
Router.get('/class', async (req, res, next) => {
    let {
        type
    } = req.query;
    let data = await find("goods", {
        'type': type
    });
    res.send(formatData({
        data: data
    }));
    next();
});

//获取商品类型
Router.get('/classtype', async (req, res, next) => {
    let data = await find("type");
    res.send(formatData({
        data: data
    }));
    next();
});

//获取不同商品类型的数量
Router.get('/classnum', async (req, res, next) => {
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

//添加商品类型
Router.patch('/classtype', async (req, res, next) => {
    let {
        name,
        time,
        num
    } = req.body;

    let data = await insert('type', {
        name: name,
        time: time,
        num: num
    });
    res.send(formatData({
        data: data
    }));
    next();
})

//修改商品类型
Router.patch("/classnew", async (req, res, next) => {
    let {
        name,
        time,
        num,
        _id
    } = req.body;
    let data = await update('type', {
        _id: _id
    }, {
        $set: {
            name: name,
            time: time,
            num: num
        }
    });
    res.send(formatData({
        data: data
    }));
    next();
});

//删除某个商品类型
Router.delete("/classremove", async (req, res, next) => {
    let {
        _id
    } = req.query;
    let data = await remove('type', {
        _id: _id
    });
    res.send(formatData({
        data: data
    }));
    next();
})

//删除多个商品类型
Router.delete("/classremoves", async (req, res, next) => {
    let {
        _id
    } = req.query;
    let data = await remove('type', {
        _id: _id
    });
    res.send(formatData({
        data: data
    }));
    next();
})

module.exports = Router;