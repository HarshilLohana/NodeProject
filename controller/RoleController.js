const roleModel = require('../model/RoleModel')

const addRole = async(req,res) => {
    try{
        const role = new roleModel(req.body)
        const newRole = await role.save()

        if(newRole){
            res.status(200).json({
                data: newRole,
                message: "role added successfully"
            })
        }else{
            res.status(200).json({
                data: {},
                message: "role not added"
            })
        }
    }catch(err){
        res.status(500).json({
            data: {},
            message: err.message
        })
    }
}

module.exports = {addRole} 