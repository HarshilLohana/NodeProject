const departmentModel = require('../model/DepartmentModel')

const addDepartment = async(req,res) => {

    try{
        const department = new departmentModel(req.body)
        const dept = await department.save()
        if(dept){
            res.status(200).json({
                department:dept,
                message:"Department successfully added"
            })
        }else{
            res.status(200).json({
                department:{},
                message:"failed"
            })
        }
    }catch(err){
        res.status(500).json({
            department:{},
            message:err.message
        })
    }
}

const getAllDepartment = async(req,res) => {
    try{
        const departments = await departmentModel.find()
        if(departments && departments.length !== 0){
            res.status(200).json({
                departments:departments,
                message:"success"
            })
        }
        else{
            res.status(200).json({
                departments:[],
                message:"No department found"
            })
        }
    }catch(err){

        res.status(500).json({
            departments:[],
            message:err.message
        })

    }
}

module.exports = {
    addDepartment,
    getAllDepartment
}