const express = require("express");
const router = express.Router();
const profileController = require("./../controllers/profileController");
const authMiddleware = require("./../middleware/authMiddleware");
const upload = require("./../middleware/multer");


router.get("/settings/edit-profile", authMiddleware.checkSessionExists, profileController.editProfile);
router.post("/settings/edit-profile", authMiddleware.checkSessionExists, profileController.editProfileForm);

router.get("/settings/change-photo", authMiddleware.checkSessionExists, profileController.chnagePhoto);
router.post("/settings/change-photo", authMiddleware.checkSessionExists, upload.single("image"), profileController.changePhotoForm);

router.get("/:id/:username", profileController.profile);

router.get("/dashboard/", authMiddleware.checkSessionExists, profileController.dashboard);



module.exports = router;