const articleService = require("./../../services/posts/articleService");
const articleHelper = require("./../../helpers/posts/articleHelper");

function createArticle(req, res){
    res.render("posts/article/create");
}

async function createArticleForm(req, res){
    const { title, content } = req.body;
    const opId = req.session.user.userId;
    const isValid = articleHelper.validateArticleInput(title, content);
    if(!isValid){
        return res.render("posts/article/create", {error: ["Invalid input credentials"]});
    };

    await articleService.createArticle(title, content, opId);

    res.redirect("/posts/article/create")
}

module.exports = {
    createArticle, createArticleForm,
};