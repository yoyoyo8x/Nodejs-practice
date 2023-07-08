const router = require("express").Router();
const user_controller = require("../controller/user");

router.get("/", user_controller.getUser);

router.post("/", user_controller.postUser);

router.put("/", user_controller.editUser);

router.delete("/", user_controller.deleteUser);

module.exports = router;
