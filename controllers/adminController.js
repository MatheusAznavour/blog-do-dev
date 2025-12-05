const homeService =  require("./../services/homeService");

async function dashboardPosts(req, res){
    const articles = await homeService.getArticle(30, 0);
    const projects = await homeService.getProject(30, 0);
    res.render("admin/dashboard", {articles, projects});
};

function dashboardUsers(req, res){

};

module.exports = {
    dashboardPosts,
    dashboardUsers
};