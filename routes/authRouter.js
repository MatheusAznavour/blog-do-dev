const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const authMiddleware = require("./../middleware/authMiddleware");

router.get("/login", authMiddleware.checkSessionNotExists, authController.login);
router.post("/login", authMiddleware.checkSessionNotExists, authController.loginForm);

router.get("/signin", authMiddleware.checkSessionNotExists, authController.signin);
router.post("/signin", authMiddleware.checkSessionNotExists, authController.signinForm);

router.post("/logout", authController.logout);

module.exports = router;