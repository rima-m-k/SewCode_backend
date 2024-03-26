const express = require("express");
const { userLogin, userRegister } = require("../controller/user/auth");
const { fetchTailors } = require("../controller/user/Tailors");
const { showBiz, getSingleBusiness } = require("../controller/user/test");
const router = express.Router();

router.route('/user-register').post(userRegister)
router.route('/user-login').post(userLogin)
router.route('/show-business-data').get(fetchTailors)

router.route('/test/show-business').get(showBiz)
router.route('/test/show-single-business/:_id').get(getSingleBusiness)


module.exports = router

