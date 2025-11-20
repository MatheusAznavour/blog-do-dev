const homeService = require("./../services/homeService");

async function home(req, res) {
    const postType = req.query.post_type ?? "article";
    const limit = parseInt(req.query.limit || 5);
    const offset = parseInt(req.query.offset || 0);

    if(postType == "article"){
        const articles = await homeService.getArticle(limit, offset);
        if(articles.length === 0){
            return res.render("home", {error: ["Could not find any post"]})
        }
        return res.render("home", { articles });
    }
    if(postType == "project"){
        const projects = await homeService.getProject(limit, offset);
        console.log(projects)
        if(projects.length === 0){
            return res.render("home", {error: ["Could not find any post"]})
        }
        return res.render("home", { projects });
    }
    res.render("home", {error: ["Could not find any post"]})
};

module.exports = { home };