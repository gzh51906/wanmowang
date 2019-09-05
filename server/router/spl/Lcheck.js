const express = require("express")

let Router = express.Router()

let {
    formatData
} = require("../common/formatData");
let {
    find
} = require("../common/mongo");
Router.get("/login", async (req, res) => {
    let {
        username,
        password
    } = req.query;


    let result = await find("manage_user", {
        username,
        password
    })
    let type = result[0];


    if (type) {
        // let finaly = result
        res.send(formatData({
            data: {}
        }))
    } else {
        res.send(formatData({
            code: 0
        }))
    }
})
module.exports = Router