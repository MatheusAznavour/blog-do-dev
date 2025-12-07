const express = require("express");
const router = express.Router();
const authMiddleware = require("./../middleware/authMiddleware");
const adminController = require("./../controllers/adminController");

router.get("/posts", authMiddleware.checkSessionExists, authMiddleware.checkSessionIsAdmin, adminController.dashboardPosts);

router.get("/users", authMiddleware.checkSessionExists, authMiddleware.checkSessionIsAdmin, adminController.dashboardUsers);

router.post("/users/:id/give-privileges", authMiddleware.checkSessionExists, authMiddleware.checkSessionIsAdmin, adminController.dashboardUsersGivePrivilegesForm);
router.post("/users/:id/take-privileges", authMiddleware.checkSessionExists, authMiddleware.checkSessionIsAdmin, adminController.dashboardUsersTakePrivilegesForm);

router.post("/users/:id/delete", authMiddleware.checkSessionExists, authMiddleware.checkSessionIsAdmin, adminController.dashboardUsersDeleteForm);

module.exports = router;