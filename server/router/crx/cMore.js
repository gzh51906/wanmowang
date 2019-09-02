const express = require("express");

let Router = express.Router();
let {formatData} = require("../common/formatData");
let {insert, remove, update, find} = require("../common/mongo");

// 客户端详情页获取数据
Router.get("/goods",async (req,res,next)=>{
    let {goods_id} = req.query;
    let data = await find("goods",{_id:goods_id});
    res.send(formatData({data:data}));
    next();
})



module.exports = Router;