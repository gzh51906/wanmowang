//引入token，状态保留
const jwt = require("jsonwebtoken");

//定义加密的密钥
const secret = "ririxinglong";

//生成token的方法
function create(data, expiresIn = 60 * 60 * 24 * 7) {
    /** 
     * data是传进来加密的数据
     * expiresIn是令牌的有效时间(单位为：s)
     */
    let token = jwt.sign({
        data
    }, secret, {
        expiresIn
    });
    return token;
}

//校验token是否过期以及是否被修改
function verify(token) {
    let res = false;
    try {
        res = jwt.verify(token, secret);
    } catch (err) {
        res = false;
    }
    return res;
}

module.exports = {
    create,
    verify
}