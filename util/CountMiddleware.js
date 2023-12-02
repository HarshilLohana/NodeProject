const employeeModel = require('../model/EmployeeModel')

const countMiddleware = async(req,res,next) => {
    var id = req.params.id
    var employee = await employeeModel.findById(id)
    if(employee){
        if(employee.count<=5){
            next()
        }else{
            res.status(401).json({message:"Payment Required"})
        }
    }
}
module.exports = {countMiddleware};