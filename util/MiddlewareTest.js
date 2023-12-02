const testMiddleware = (req,res,next) => {
    var age = req.params.age
    if (age<18){
        res.status(401).json({
            message:"age must be >18"
        })
    }else{
        next();
    }
}
module.exports = {testMiddleware};