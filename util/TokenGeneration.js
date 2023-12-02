const jwt = require('jsonwebtoken')

const key = "secretkey"

const validateToken = (token) => {
    user = jwt.verify(token,key)
    return user
}

const generateToken = (data) => {
    const token = jwt.sign(data,key)
    return token;
}

module.exports = {
    generateToken,
    validateToken
};