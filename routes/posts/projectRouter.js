const express = require("express");
const router = express.Router();
const upload = require("./../../middleware/multer");
const projectController = require("./../../controllers/posts/projectContoller");
const authMiddleware = require("./../../middleware/authMiddleware");

router.get("/project/:id/:slug", projectController.project);

router.get("/project/create", projectController.createProject);
router.post("/project/create", upload.single("image"), projectController.createProjectForm);

router.get("/project/:id/:slug/edit", authMiddleware.checkOriginalPoster, projectController.editProject); 
router.post("/project/:id/:slug/edit",  upload.single("image"), projectController.editProjectForm);

router.post("/project/:id/:slug/delete", ()=>{});

module.exports = router;