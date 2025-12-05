const homeService =  require("./../services/homeService");
const adminService = require("./../services/adminService");

async function dashboardPosts(req, res){
    const articles = await homeService.getArticle(30, 0);
    const projects = await homeService.getProject(30, 0);
    res.render("admin/dashboard", {articles, projects});
};

async function dashboardUsers(req, res){
    const users = await adminService.getUsers(30, 0);
    //console.log(users)
    res.render("admin/users", {users});
};

async function dashboardUsersDeleteForm(req, res) {
    const { id } = req.params;
    await adminService.deleteUser(id);
    res.redirect("/admin/users");
};;

module.exports = {
    dashboardPosts,
    dashboardUsers,
    dashboardUsersDeleteForm
};