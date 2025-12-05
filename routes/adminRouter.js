const express = require("express");
const router = express.Router();
const authMiddleware = require("./../middleware/authMiddleware");
const adminController = require("./../controllers/adminController");

router.get("/posts", authMiddleware.checkSessionExists, authMiddleware.checkSessionIsAdmin, adminController.dashboardPosts);
router.get("/users", authMiddleware.checkSessionExists, authMiddleware.checkSessionIsAdmin, adminController.dashboardUsers);

module.exports = router;