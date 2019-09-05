const express = require("express");
let Router = express.Router();
let {formatData} = require("../common/formatData");
let {insert, remove, update, find} = require("../common/mongo");

// 获取所有用户的信息
Router.get("/manage_userGet",async (req,res,next)=>{
    let {username,email} = req.query;
    if(username){
        let result = await find("user",{username:eval("/"+username+"/")});
        res.send(formatData({data:result}));
    }else if(email){
        let result = await find("user",{email:eval("/"+email+"/")});
        res.send(formatData({data:result}));
    }else{
        let result = await find("user",{},{sort:"username",asc:true});
        res.send(formatData({data:result}));
    }
    next();
})

// 删除用户信息
Router.delete("/manage_userRemove",async (req,res,next)=>{
    let {_id} = req.query;
    let result = await remove("user",{_id});
    res.send(formatData({data:result}));
    next();
})

module.exports = Router;