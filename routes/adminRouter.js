const express = require("express");
const router = express.Router();
const authMiddleware = require("./../middleware/authMiddleware");

router.get("/posts", ()=>{});
router.get("/users", ()=>{});

module.exports = router;