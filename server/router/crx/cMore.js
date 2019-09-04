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

// 添加购物车
Router.post("/add",async (req,res,next)=>{
    let {goods_id,type1,type2,num,imgUrl,price,desc,username} = req.body;
    // 判断同样的产品是否添加过
    let type = await find("cart",{goods_id,type1,type2});
    if(type.length){
        let cNum = type[0].num + num;
        try {
            update("cart",{goods_id,type1,type2},{$set:{num:cNum}});
            res.send("此产品已添加过，现已更新数量");
        } catch (error) {
            res.send("添加失败")
        }
    }else{
        try {
            insert("cart",{goods_id,type1,type2,num,imgUrl,price,desc,username});
            res.send("添加成功");
        } catch (error) {
            res.send("添加失败");
        }
    }
    next();
})

Router.get("/read",async (req,res,next)=>{
    let {username} = req.query;
    try {
        let result = await find("cart",{username});
        res.send(formatData({data:result}));
    } catch (error) {
        res.send(formatData({code:0}));
    }
    next();
})



module.exports = Router;