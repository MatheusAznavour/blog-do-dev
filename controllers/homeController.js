const homeService = require("./../services/homeService");

async function home(req, res) {
    const postType = req.query.post_type ?? "article"; //Work from here
    const limit = parseInt(req.query.limit || 5);
    const offset = parseInt(req.query.offset || 0);
    const articles = await homeService.getArticle(limit, offset);
    if(postType == "article"){
        console.log("ITS EQUALL")
    }
    if(articles.length === 0){
        return res.render("home", {error: ["Could not find any post"]});
    }

    //console.log(article, limit, offset)
    res.render("home", {articles});
};

module.exports = { home };