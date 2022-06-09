const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth");
const User = require("../../service/schemas/User");

router.post("/signup", authController.signup);

router.post("/login", authController.login);

router.get("/verify/:verificationToken", authController.verifyEmail);

module.exports = router;
