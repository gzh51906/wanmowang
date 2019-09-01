const express = require("express");

const {
    PORT
} = require("./config.json");

const router = require("./router");

let app = express();

app.use(express.static("./"));
app.use(router);

app.listen(PORT, () => {
    console.log("服务开启成功，端口号为：" + PORT);
})