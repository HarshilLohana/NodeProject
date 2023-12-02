const express = require("express");
const router = express.Router();
const middlewareTest = require("../util/MiddlewareTest")
const employeeController = require('../controller/EmployeeController')
const zodMiddleware = require("../middleware/ZodMiddleware")
const countMiddleware = require("../util/CountMiddleware")
const authMiddleware = require("../middleware/AuthMiddleware")

router.get('/employee',authMiddleware.authUser,employeeController.getEmployees)
router.get('/employee/count/:id',countMiddleware.countMiddleware,employeeController.getEmployeesCount)
router.post('/employee',employeeController.addEmployee)
router.delete('/employee/:id',employeeController.deleteEmployee)
router.put('/employee/:id',employeeController.updateEmployee)
router.get('/employee/:id',employeeController.getEmployeeById)
router.get('employee/login',employeeController.login)
router.post("/employee/bulk",employeeController.addBulkEmployee);
module.exports = router;