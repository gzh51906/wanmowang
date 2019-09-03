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

// 用户登录
let {create,verify} = require("../common/token");
Router.get("/login",async (req,res,next)=>{
    let {email,password} = req.query;
    let result = await find("user",{email,password});
    let type = result[0];
    if(type){
        let name = type.username;
        let authorCheck = create(email);
        res.send(formatData({data:{username:name,authorCheck}}));
    }else{
        res.send(formatData({code:0}));
    }
})

// 验证token
Router.get("/verify", (req, res, next) => {
    let authorCheck = req.header("authorCheck");
    let result = verify(authorCheck);
    if (result) {
        res.send(formatData({
            data: {
                authorCheck: true
            }
        }));
    } else {
        res.send(formatData({
            code: 0,
            data: {
                authorCheck: false
            }
        }));
    }
    next();
})



module.exports = Router;