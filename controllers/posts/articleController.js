const articleService = require("./../../services/posts/articleService");
const articleHelper = require("./../../helpers/posts/articleHelper");

function createArticle(req, res){
    res.render("posts/article/create");
}

function createArticleForm(req, res){
    const { title, content } = req.body;
    const isValid = articleHelper.validateArticleInput(title, content);
    console.log(isValid)
    if(!isValid){
        return res.render("posts/article/create", {error: ["Invalid input credentials"]});
    };

    articleService.createArticle(title, content)
    res.redirect("/posts/article/create")
}

module.exports = {
    createArticle, createArticleForm,
};