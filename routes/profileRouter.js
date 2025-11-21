const express = require("express");
const router = express.Router();
const profileController = require("./../controllers/profileController");
const authMiddleware = require("./../middleware/authMiddleware");


router.get("/settings/edit-profile", profileController.editProfile);
router.post("/settings/edit-profile", profileController.editProfileForm);

router.get("/settings", ()=>{});
router.post("/settings", ()=>{});


router.get("/settings/change-photo", ()=>{});
router.post("/settings/change-photo", ()=>{});

router.get("/settings/stacks", ()=>{});
router.post("/settings/stacks", ()=>{});

router.get("/:id/:username", profileController.profile);

router.get("/dashboard/", authMiddleware.checkSessionExists, profileController.dashboard);



module.exports = router;