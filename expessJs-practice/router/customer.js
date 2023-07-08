const router = require("express").Router();
const customer_controller = require("../controller/customer")

router.get("/", customer_controller.getCustomer);

module.exports = router;
