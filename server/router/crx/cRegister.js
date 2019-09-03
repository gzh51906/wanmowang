const express = require("express");

let Router = express.Router();
let {formatData} = require("../common/formatData");
let {insert, remove, update, find} = require("../common/mongo");

// 用户注册信息插入
Router.post("/reg",async (req,res,next)=>{
    let {email,username,password} = req.body;
    let type = await find("user",{$or:[{email},{username}]});
    if(type.length){
        res.send(formatData({code:0}));
    }else{
        let result = await insert("user",{email,username,password});
        res.send(formatData({data:result}));
    }
    next();
})



module.exports = Router;