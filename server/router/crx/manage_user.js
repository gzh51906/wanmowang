const express = require("express");
let Router = express.Router();
let {formatData} = require("../common/formatData");
let {insert, remove, update, find} = require("../common/mongo");

// 获取所有用户的信息
Router.get("/manage_userGet",async (req,res,next)=>{
    let {username,email,gender,job,city} = req.query;
    if(username){
        let result = await find("user",{username:eval("/"+username+"/")});
        res.send(formatData({data:result}));
    }else if(email){
        let result = await find("user",{email:eval("/"+email+"/")});
        res.send(formatData({data:result}));
    }else if(gender){
        let result = await find("user",{gender:eval("/"+gender+"/")});
        res.send(formatData({data:result}));
    }else if(job){
        let result = await find("user",{job:eval("/"+job+"/")});
        res.send(formatData({data:result}));
    }else if(city){
        let result = await find("user",{city:eval("/"+city+"/")});
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

// 用户信息的编辑
Router.get("/manage_userEditRead",async (req,res,next)=>{
    let {_id} = req.query;
    let result = await find("user",{_id});
    res.send(formatData({data:result}));
    next();
})

//修改用户信息
Router.patch("/manage_userEditPatch",async (req,res,next)=>{
    let {data,_id} = req.body;
    let result = await update("user",{_id},{$set:data});
    res.send(formatData());
    next();
})

// 添加用户
Router.post("/manage_userAdd",async (req,res,next)=>{
    let {data} = req.body;
    try {
        let result = await insert("user", data);
        res.send(formatData());
    } catch (error) {
        res.send(formatData({code:0}));
    }
    next();
})

// 获取管理员信息
Router.get("/manage_userManage",async (req,res,next)=>{
    let {username,_id} = req.query;
    let result;
    if(username){
        result = await find("manage_user",{username});
    }else if(_id){
        result = await find("manage_user",{_id});
    }else{
        result = await find("manage_user",{});
    }
    res.send(formatData({data:result}));
    next();
})

// 删除管理员的信息
Router.delete("/manage_removeManage",async (req,res,next)=>{
    let {_id} = req.query;
    try {
        let result = await remove("manage_user",{_id});
        res.send(formatData())
    } catch (error) {
        res.send(formatData({code:0}))
    }
    next();
})

// 修改管理员的信息
Router.patch("/manage_patchManage",async (req,res,next)=>{
    let {data,_id} = req.body;
    let result = await update("manage_user",{_id},{$set:data});
    res.send(formatData());
    next();
})

// 添加管理员
Router.post("/manage_manageAdd",async (req,res,next)=>{
    let {data} = req.body;
    try {
        let result = await insert("manage_user", data);
        res.send(formatData());
    } catch (error) {
        res.send(formatData({code:0}));
    }
    next();
})

module.exports = Router;