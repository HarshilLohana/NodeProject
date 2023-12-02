var express = require("express")
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
bodyParser.urlencoded({ extended: true });

const employeeModel = require('./model/EmployeeModel')

const db = mongoose.connect("mongodb+srv://harshillohana51:root@cluster0.j81ni5h.mongodb.net/nodeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.then(() => {
  console.log("connected to db");
}).catch((err) => {
  console.log(err);
});

const employeeRoutes = require("./routes/EmployeeRoutes");
const departmentRoutes = require("./routes/DepartmentRoutes");
const userRoutes = require("./routes/UserRoutes");
const roleRoutes = require("./routes/RoleRoutes");
const permissionRoutes = require('./routes/PermissionRoutes')
const fileRoutes = require('./routes/FileUploadRoutes')


app.use("/api", employeeRoutes);
app.use("/api", departmentRoutes);
app.use("/api", userRoutes);
app.use("/api", roleRoutes);
app.use("/api", permissionRoutes)
app.use("/api", fileRoutes)



app.listen(3000,()=>{
    console.log("Server is running")
})