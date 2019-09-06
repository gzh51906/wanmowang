const express = require("express");

let Router = express.Router();

let {
    formatData
} = require('../common/formatData');
let {
    inset,
    remove,
    update,
    find
} = require('../common/mongo');

//根据价格获取数据
Router.get('/allgoods', async (req, res, next) => {
    let {
        title,
        asc
    } = req.query;
    let data = await find('goods', {
        'data.result.cate.title': title
    }, {
        sort:'data.result.price',
        asc: asc
    });
    res.send(formatData({
        data: data
    }));
    next();
})

module.exports = Router;