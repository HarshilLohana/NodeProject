const express = require('express')
const router = express.Router()
const permissionController = require('../controller/PermissionController')

router.post('/employee/permission',permissionController.givePermission)
router.get('/employee/permission/:desc',permissionController.getPermission)

module.exports = router