const articleService = require("./../../services/posts/articleService");

function createArticle(req, res){
    res.render("posts/article/create");
}

function createArticleForm(req, res){
    const { title, content } = req.body;
    //console.log(title, content) //work from here
    articleService.createArticle(title, content)
    res.redirect("/posts/article/create")
}

module.exports = {
    createArticle, createArticleForm,
};