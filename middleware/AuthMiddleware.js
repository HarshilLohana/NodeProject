
const validateToken = require('../util/TokenGeneration')

const authUser = (req,res,next) => {
    let token = req.headers.authorization;
    if(token && token.startswith("Bearer ")){
        tokenFinal = token.split(" ")[1]
        const flag = validateToken.validateToken(tokenFinal)
        if(flag){
            next()
        }else{
            res.json({message:"Unauthorized"})
        }
    }
    else{
        res.json({message:"Token is Invalid"})
    }
}

module.exports = {authUser}