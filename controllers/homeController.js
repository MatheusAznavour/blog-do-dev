const homeService = require("./../services/homeService");
const articleService = require("./../services/posts/articleService");
const projectService = require("./../services/posts/projectService");

async function home(req, res) {
    const postType = req.query.post_type ?? "article";
    const limit = parseInt(req.query.limit || 5);
    const offset = parseInt(req.query.offset || 0);


    if(postType == "article"){
        const articles = await homeService.getArticle(limit, offset);
        let totalPagination = await articleService.getTotalArticles();
        let paginationValues = [];
        let index = -1;
        for(let i = 0; i < totalPagination[0].total; i += limit){
            index += 1
            paginationValues.push({index: index * limit, tab: paginationValues.length + 1});
        }

        if(articles.length === 0){
            return res.render("home", {error: ["Could not find any post"]})
        }
        return res.render("home", { articles, paginationValues });
    }
    if(postType == "project"){
        const projects = await homeService.getProject(limit, offset);
        let totalPagination = await projectService.getTotalProjects();
        let paginationValues = [];
        let index = -1;
        for(let i = 0; i <= totalPagination[0].total; i += limit){
            index += 1
            
            paginationValues.push({index: index * limit, tab: paginationValues.length + 1});
        }

        if(projects.length === 0){
            return res.render("home", {error: ["Could not find any post"]})
        }
        return res.render("home", { projects, paginationValues});
    }
    res.render("home", {error: ["Could not find any post"]})
};

module.exports = { home };