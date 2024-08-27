const express = require("express");
const registerUser = require("../controller/registerUser");
const checkEmail = require("../controller/checkEmail");
const checkPassword = require("../controller/checkPassword");

const router = express.Router();

//create user api
router.post('/register', registerUser);
//create user email
router.post('/email', checkEmail);
//create user password
router.post('/password', checkPassword);

module.exports = router;
