const express = require("express");

const Router = express.Router();

let {formatData} = require("../common/formatData");
let {insert, remove, update, find} = require("../common/mongo");

// 将已经结算的的用户购物信息删除
Router.delete("/removeOrder",async (req,res,next)=>{
    let {username} = req.query;
    let result = await remove("cart",{username},true);
    res.send(formatData({data:result}));
    next();
})

// 将用户结算的的信息存到订单项
Router.post("/insertOrder",async (req,res,next)=>{
    let {data} = req.body;
    let result = await insert("order",data,true);
    res.send(formatData({data:result}));
    next();
})

// 获取订单信息
Router.get("/readOrder",async (req,res,next)=>{
    let {username} = req.query;
    let result = await find("order",{username});
    res.send(formatData({data:result}));
    next();
})


module.exports = Router;