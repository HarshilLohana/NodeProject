const userModel = require('../model/UserSchema')

const addUser = async(req,res) => {
    try{
        const user = new userModel(req.body)
        const newUser = await user.save()

        if(newUser){
            res.status(200).json({message: "user created"})
        }else{
            res.status(200).json({message:"user not created"})
        }
    }catch(err){
        res.status(500).json({message:"error occured"})
    }
}

const getAllUser = async(req,res) => {
    try{
        const users = await userModel.find().populate("department").populate("role")
        if(users && users.length!==0){
            res.status(200).json({
                data:users,
                message:"success"
            })
        }else{
            res.status(200).json({
                message:"no user found"
            })
        }
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

const addRoleToUser = async(req,res) => {
    const userId = req.params.id
    try{
        const newUser = await userModel.findByIdAndUpdate(userId,{$pull:{role:req.body.roleId}},{new:true}) 
        if (savedUser) {
            res.status(200).json({
              message: "role added successfully",
              data: newUser,
            });
          } else {
            res.status(400).json({
              message: "role not added",
            });
          }
        } catch (err) {
          console.log(err);
          res.status(500).json({
            message: "error",
            error: err,
          });
        }
      };


module.exports = {
    addUser,
    getAllUser,
    addRoleToUser
}