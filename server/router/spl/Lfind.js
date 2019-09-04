const express = require("express");

let Router = express.Router();

let {
    formatData
} = require("../common/formatData");
let {
    find
} = require("../common/mongo");

Router.get("/account", async (req, res) => {
    let {
        username
    } = req.query

    let result = await find("user", {
        username
    })
    let type = result[0]

    if (type) {
        let email = type.email
        res.send(formatData({
            data: {
                email
            }
        }))
    } else {
        res.send(formatData({
            code: 0
        }))
    }
})

module.exports = Router;