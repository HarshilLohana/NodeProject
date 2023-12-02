const employeeModel = require('../model/EmployeeModel')
const { encryptPassword } = require('../util/PasswordEncryption')
const tokenUtil = require('../util/TokenGeneration')
const readDataFromExcel = require("../util/ReadDataFromExcel");
const multer = require('multer');

const getEmployees = async (req,res)=>{
    const employeeList = await employeeModel.find()
    if(employeeList && employeeList.length!=0){
        res.status(200).json({
            employees:employeeList,
            message:"sucess"
        })
    }else{
        res.status(200).json({
            employees:[],
            message:"No employee found"
        })
    }
}



const addEmployee = async(req,res) => {
    console.log("req body", req.body);
    const empData ={
      name:req.body.name,
      email:req.body.email,
      age:req.body.age,
      password:encryptPassword.encryptPassword(req.body.password)
    }
    const employee = new employeeModel(empData);
    employee.count = 0;
    try {
        const flag = await employee.save();
        if (flag) {
          res.status(200).json({
            token: token,
            message: "success",
          });
        } else {
          res.status(200).json({
            token: {},
            message: "failed",
          });
        }
      } catch (err) {
        res.status(500).json({
          token: {},
          message: err.message,
        });
      }
};

const deleteEmployee = async(req,res) => {
    const id = req.params.id;
    try {
        const flag = await employeeModel.findByIdAndDelete(id)
        if (flag){
            res.status(204).json({
                message: "success",
              });
            } else {
              res.status(200).json({
                message: "failed",
              });
            }
          } catch (err) {
            res.status(500).json({
              message: err.message,
            });
          }
};

const updateEmployee = async (req, res) => {
    const id = req.params.id;
    const employeeBody = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    };
  
    try {
      const flag = await employeeModel.findByIdAndUpdate(id, employeeBody);
      if (flag) {
        res.status(200).json({
          message: "success",
          employee: flag,
        });
      } else {
        res.status(200).json({
          message: "failed",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };

  const getEmployeeById = async (req, res) => {
    try {
      const flag = await employeeModel.findById(req.params.id);
      if (flag) {
        res.status(200).json({
          message: "success",
          employee: flag,
        });
      } else {
        res.status(404).json({
          message: "record not found",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };

const login = async(req,res) => {
  const email = req.body.email
  const password = req.body.password

  const employee = await employeeModel.findOne({email:email})
  if(employee){
    const flag = encryptPassword.comparePassword(password,employee.password)
    const token = tokenUtil.generateToken(employee.toObject())
    if(flag){
      res.status(200).json({message:"Logged In",data:token})
    }else{
      res.status(404).json({message:"Invalid Password",data:[]})
    }
  }
  else{
    res.status(404).json({message:"Invalid Email",data:[]})
  }


}

const getEmployeesCount = async (req,res)=>{
  const id = req.params.id
  try{
    const flag = await employeeModel.findById(req.params.id);
    const employeeBody = {
      name: flag.name,
      email: flag.email,
      age: flag.age,
      password:flag.password,
      count:flag.count+1
    };
    if(flag){
      const update = await employeeModel.findByIdAndUpdate(id, employeeBody);
      if(update){
        const employeeList = await employeeModel.find()
        if(employeeList && employeeList.length!=0){
            res.status(200).json({
            employees:employeeList,
            message:"success"
        })
        }else{
          res.status(200).json({
          employees:[],
          message:"No employee found"
        })
        }
      }
      }
    }
    
  catch{
    res.status(500).send("Error in Fetching data")
  }
}
const storage = multer.diskStorage({
  destination: './uploads',
  filename:(req,file,cb) => {
      cb(null,file.originalname);
  }
})
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("file");

const addBulkEmployee = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      console.log(req.file.path);
      const data = readDataFromExcel.readDataFromExcel(req.file.path);

      const flag = await employeeModel.insertMany(data);
      if (flag) {
        res.status(200).json({
          message: "success",
          data: flag,
        });
      } else {
        res.status(200).json({
          message: "failed",
        });
      }
    }
  });
};

module.exports = {
    getEmployees,
    addEmployee,
    deleteEmployee,
    updateEmployee,
    getEmployeeById,
    login,
    getEmployeesCount,
    addBulkEmployee
  };