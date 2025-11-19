const express = require("express");
const router = express.Router();
const projectController = require("./../../controllers/posts/projectContoller");

router.get("/project/:id/:slug", ()=>{});

router.get("/project/create", projectController.createProject);
router.post("/project/create", projectController.createProjectForm);

router.get("/project/:id/:slug/edit", ()=>{});
router.post("/project/:id/:slug/edit", ()=>{});

router.post("/project/:id/:slug/delete", ()=>{});

module.exports = router;