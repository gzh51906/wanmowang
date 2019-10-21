const express = require("express");

let Router = express.Router();

let {
    formatData
} = require("../common/formatData");
let {
    find,
    remove,
    update,
    insert
} = require("../common/mongo");

Router.get("/goodlist", async (req, res, next) => {

    let result = await find("goods", {})
    if (result) {
        let data = result
        res.send(formatData({
            data
        }))
    } else {
        res.send(formatData({
            code: 0
        }))
    }
    next();
})
Router.delete("/removegoods", async (req, res) => {
    let {
        _id
    } = req.query

    let result = await remove("goods", {
        _id
    })
    res.send(formatData({
        data: result
    }))

})
Router.get("/search", async (req, res) => {
    let {
        val
    } = req.query
    if (val == "") {
        let result = await find("goods", {})
        if (result) {
            res.send(formatData({
                data: result
            }))
        } else {
            res.send(formatData({
                code: 0
            }))
        }
    } else {
        let result = await find("goods", {
            type: val
        })
        if (result) {
            res.send(formatData({
                data: result
            }))
        } else {
            res.send(formatData({
                code: 0
            }))
        }
    }




})
Router.delete("/removeMoregoods", async (req, res) => {
    let {
        goods_id
    } = req.query


    for (let i = 0; i < goods_id.length; i++) {

        let result = await remove("goods", {
            _id: goods_id[i]
        })
        if (result) {
            res.send(formatData({
                data: result
            }))
        } else {
            res.send(formatData({
                code: 0
            }))
        }



    }


    // res.send(formatData({
    //     data: "1"
    // }))

})
Router.get("/update",async(req,res)=>{
    let data=req.query
    let _id=data._id
    let goods_type=data.type
    let price=data.price
    let name=data.name
 
    let result = await find("goods",_id)
    let type=result[0]
    if(type){
        type.data.result.title=name
        type.type[0]=goods_type
        type.data.result.price=price
       
      
        
        res.send(formatData({data:result}))
    }
    else{
        res.send(formatData({code:0}))
    }
    await update("goods",{_id},{$set:type})
    
  
})
Router.get("/add",async(req,res)=>{
    let data=req.query
    let goods_type=data.type
    let price=data.price
    let name=data.name
    let image=data.image
    let id=Math.floor( Math.random()*10000)
    let type={
      
        "bigImg" : "http://cdn.inklego.com/picture/banner/20180404/6e3fe1a4601c73b5fba2dc5e398a2a2b.jpg",
        "type" : [ 
           goods_type, 
            "T恤", 
            "卫衣", 
            "联名潮牌"
        ],
        "data" : {
            "result" : {
                "id" : id,
                "title" :name,
                "price" : price,
                "picture" : image,
                "templeteDesc" : "",
                "size" : {
                    "title" : "尺码",
                    "content" : [ 
                        {
                            "val" : "155/76A/S小码",
                            "price" : "0",
                            "rank" : "1"
                        }, 
                        {
                            "val" : "160/80A/M中码",
                            "price" : "0",
                            "rank" : "2"
                        }, 
                        {
                            "val" : "165/84A/L大码",
                            "price" : "0",
                            "rank" : "3"
                        }, 
                        {
                            "val" : "170/88A/XL加大码",
                            "price" : "0",
                            "rank" : "4"
                        }
                    ]
                },
                "color" : {
                    "title" : "颜色分类",
                    "content" : [ 
                        {
                            "val" : "白色",
                            "price" : "0",
                            "rank" : "1"
                        }
                    ]
                },
                "banner" : [ 
                    "http://cdn.inklego.com/picture/template/t-shirt/ff19172af29476f64663e1635f7a35d2.jpg", 
                    "http://cdn.inklego.com/picture/template/t-shirt/6f085710f40a46ee8107050db128239a.jpg", 
                    "http://cdn.inklego.com/picture/template/t-shirt/904f509fcc581941bdbc5fd8e613bbad.jpg", 
                    "http://cdn.inklego.com/picture/template/t-shirt/cf39fac7a52e22ee1c8d29c37dcde12c.jpg"
                ],
                "details" : [ 
                    "http://cdn.inklego.com/picture/template/desc/20190323/9d4e6a83bd72425043763b5be7be6672.jpg", 
                    "http://cdn.inklego.com/picture/template/desc/20190323/d0c581f2b99459b55736d5a848793f33.jpg", 
                    "http://cdn.inklego.com/picture/template/desc/20190323/1ff239f15602ed27cdd721e50e0d076f.jpg", 
                    "http://cdn.inklego.com/picture/template/desc/20190323/576dbc7b2c3d4f4612e3ca81ae4b81f4.jpg", 
                    "http://cdn.inklego.com/picture/template/desc/20190323/49d299fdd6943c06aa629da9e2419f9a.jpg", 
                    "http://cdn.inklego.com/picture/template/desc/20190323/5e998c6653fcf422f9c8c2d47f2927a9.jpg", 
                    "http://cdn.inklego.com/picture/template/desc/20190323/6b810e290b3915718904a2ea34b4cd33.jpg", 
                    "http://cdn.inklego.com/picture/template/desc/20190323/da42b5632788bc545651f066e07288f6.jpg", 
                    "http://cdn.inklego.com/picture/template/desc/20190323/fc4df84f45c638f6402e911facacf39d.jpg", 
                    "http://cdn.inklego.com/picture/template/desc/20190323/f8e2392a11869bb9cd6566358a6a5ca5.jpg", 
                    "http://cdn.inklego.com/picture/template/desc/20190323/a841f138d76ac2ea8750ea2d0b8300ca.jpg"
                ],
                "collection" : false,
                "empty" : "0",
                "cate" : {
                    "id" : 60,
                    "title" : "联名潮牌",
                    "price" : "0",
                    "param" : 0
                },
                "designer" : {
                    "id" : 51897,
                    "nick" : "WHIKO谜之生物",
                    "thumb" : "http://cdn.inklego.com/picture/thumb/20180227/50e993ac197be0c652327be6114567f4_small.jpg",
                    "description" : "To those appreciate life."
                }
            }
        }
    }
    
    // if(type){
    //     type.data.result.title=name
    //     type.type[0]=goods_type
    //     type.data.result.price=price
    //        type.image=image
    //     // console.log(type);
        
    //     
    // }
    // else{
    //     res.send(formatData({code:0}))
    // }
    // await update("goods",{_id},{$set:type})
    await insert ("goods",type)
    res.send(formatData({data:type}))
    
  
})


module.exports = Router