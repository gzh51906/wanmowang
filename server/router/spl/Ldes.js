const express = require("express");

let Router = express.Router();

let {
    formatData
} = require("../common/formatData");
let {
    find
} = require("../common/mongo");

Router.get("/designer", async (req, res) => {

    let result = await find("goods", {})
    if (result) {
        let data = result.slice(10, 20)
        res.send(formatData({
            data
        }))
    } else {
        res.send(formatData({
            code: 0
        }))
    }
})


module.exports = Router