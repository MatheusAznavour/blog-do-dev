const express = require("express");
const router = express.Router();
const articleController = require("./../../controllers/posts/articleController");
const authMiddleware = require("./../../middleware/authMiddleware");

router.get("/article/:id/:slug", articleController.article);

router.get("/article/create", authMiddleware.checkSessionExists, articleController.createArticle);
router.post("/article/create", authMiddleware.checkSessionExists, articleController.createArticleForm);

router.get("/article/:id/:slug/edit", authMiddleware.checkSessionExists, authMiddleware.checkOriginalPoster, articleController.updateArticle);
router.post("/article/:id/:slug/edit", authMiddleware.checkSessionExists, authMiddleware.checkOriginalPoster, articleController.updateArticleForm);

router.post("/article/:id/:slug/delete", ()=>{});

module.exports = router;