const express = require("express");
const { deliveryLogin,deliveryRegister } = require("../controller/delivery/auth");
const router = express.Router();

router.route('/delivery-register').post(deliveryLogin)
router.route('/delivery-login').post(deliveryRegister)


module.exports = router
