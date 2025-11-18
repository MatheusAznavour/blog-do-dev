const articleService = require("./../../services/posts/articleService");
const articleHelper = require("./../../helpers/posts/articleHelper");

async function article(req, res) {
    const { id, slug } = req.params;

    const article = await articleService.getArticle(id);
    if(!article){
        return res.render("posts/article/main", {error: ["post not found!"]})
    }
    console.log(article);
    res.render("posts/article/main", {article});
};

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
    article,
};