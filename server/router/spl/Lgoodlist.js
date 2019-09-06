const express = require("express");

let Router = express.Router();

let {
    formatData
} = require("../common/formatData");
let {
    find,
    remove
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


module.exports = Router