const router = require('express').Router()
const departmentController = require('../controller/DepartmentController')
router.get('/dept',departmentController.addDepartment)
router.post('/dept',departmentController.getAllDepartment)
module.exports = router;
