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
        username,
        email
    } = req.query
    let result = await find("user", {
        email,
        username
    })
    let type = result[0]

    if (type) {
        let name = type.username
        let email = type.email
        res.send(formatData({
            data: {
                name,
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