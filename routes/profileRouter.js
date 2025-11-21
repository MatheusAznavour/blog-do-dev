const express = require("express");
const router = express.Router();
const profileController = require("./../controllers/profileController");

router.get("/:id/:username", profileController.profile);

router.get("/dashboard/", profileController.dashboard);

router.get("/settings", ()=>{});
router.post("/settings", ()=>{});


router.get("/settings/change-photo", ()=>{});
router.post("/settings/change-photo", ()=>{});

router.get("/settings/edit-profile", ()=>{});
router.post("/settings/edit-profile", ()=>{});

router.get("/settings/stacks", ()=>{});
router.post("/settings/stacks", ()=>{});

module.exports = router;