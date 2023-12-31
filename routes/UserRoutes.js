const router = require("express").Router();
const userController = require("../controller/UserController");

router.post("/user", userController.addUser);
router.get("/user", userController.getAllUser);
router.put("/user/addrole/:id", userController.addRoleToUser)
module.exports = router;