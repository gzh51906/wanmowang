const express = require("express");

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

//获取数据订单数据
Router.get('/order', async (req, res, next) => {
    let data = await find("order");
    res.send(formatData({
        data: data
    }));
    next();
});

//获取删除后的订单数据
Router.delete('/order',async(req,res,next)=>{
    let {
        goods_id
    } = req.query;
    console.log(goods_id);
    let data = await remove('order', {
        '_id':goods_id
    });
     res.send(formatData({
         data: data
     }));
     next();
})


module.exports = Router;
