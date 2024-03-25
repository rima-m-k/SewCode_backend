const express = require("express");
const { userLogin, userRegister } = require("../controller/user/auth");
const { fetchTailors } = require("../controller/user/Tailors");
const router = express.Router();

router.route('/user-register').post(userRegister)
router.route('/user-login').post(userLogin)
router.route('/show-business-data').get(fetchTailors)


module.exports = router

