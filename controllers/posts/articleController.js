function createArticle(req, res){
    res.render("posts/article/create");
}

function createArticleForm(req, res){
    const { content } = req.body;
    console.log(content) //work from here
    res.redirect("/posts/article/create")
}

module.exports = {
    createArticle, createArticleForm,
};