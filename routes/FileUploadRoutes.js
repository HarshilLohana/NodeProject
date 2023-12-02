const fileContoller = require('../controller/FileUploadController')
const router = require('express').Router()

router.post('/upload',fileContoller.uploadFile)
module.exports = router