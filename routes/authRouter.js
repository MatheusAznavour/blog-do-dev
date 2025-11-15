const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");

router.get("/login", authController.login);
router.post("/login", authController.loginForm);

router.get("/signin", authController.sigin);
router.post("/signin", authController.siginForm);

router.post("/logout", authController.logoutForm);

module.exports = router;