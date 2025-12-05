const articleService = require("./../../services/posts/articleService");
const articleHelper = require("./../../helpers/posts/articleHelper");

async function article(req, res) {
    const { id, slug } = req.params;

    const article = await articleService.getArticle(id);
    if(!article){
        return res.render("posts/article/main", {error: ["post not found!"]})
    }

    res.render("posts/article/main", {article});
};

function createArticle(req, res){
    res.render("posts/article/create");
}

async function createArticleForm(req, res){
    const { title, content } = req.body;
    const opId = req.session.user.userId;
    const isValid = articleHelper.validateArticleInput(title, content);
    if(!isValid.success){
        return res.render("posts/article/create", {error: isValid.error});
    }
    await articleService.createArticle(title, content, opId);

    res.redirect("/posts/article/create")
}

async function updateArticle(req, res){
    const { id } = req.params;
    const article = await articleService.getArticle(id);
    
    res.render("posts/article/update", {article});
};

async function updateArticleForm(req, res){
    const { title, content } = req.body;
    const articleId = req.params.id;
    const isValid = articleHelper.validateArticleInput(title, content);
    if(!isValid.success){
        return res.render("posts/article/update", {error: isValid.error});
    }
    await articleService.updateArticle(title, content, articleId);

    res.redirect(`/posts/article/${articleId}/1/edit`);
};

async function deleteArticleForm(req, res) {
    const { id } = req.params;
    await articleService.deleteArticle(id);
    res.redirect("/profile/dashboard");
};

async function likeArticle(req, res) {
    const userSession = req.session.user || undefined; // userSession.userId
    const { id } = req.params;
    articleService.createInteraction(null, id, null, userSession.userId);
}

module.exports = {
    createArticle, createArticleForm,
    updateArticle, updateArticleForm,
    deleteArticleForm, likeArticle,
    article
};