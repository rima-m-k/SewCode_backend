const express = require("express");
const router = express.Router();
const { tailorLogin, registerBusiness, registerTailor } = require('../controller/tailor/auth')

router.route('/tailor-register').post(registerTailor)
router.route('/tailor-login').post(tailorLogin)
router.route('/register-business').post(registerBusiness)

module.exports = router;