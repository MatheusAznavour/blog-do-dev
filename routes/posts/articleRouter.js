const express = require("express");
const router = express.Router();
const articleController = require("./../../controllers/posts/articleController");


router.get("/article/:id/:slug", ()=>{});

router.get("/article/create", articleController.createArticle);
router.post("/article/create", articleController.createArticleForm);

router.get("/article/:id/:slug/edit", ()=>{});
router.post("/article/:id/:slug/edit", ()=>{});

router.post("/article/:id/:slug/delete", ()=>{});

module.exports = router;