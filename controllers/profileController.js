const profileService = require("./../services/profileService");

async function profile(req, res){
    const { id, username } = req.params;
    
    const profile = await profileService.getProfile(id);
    if(profile.length === 0){
        return res.render("profile/home", {error: ["Profile not found!"]});
    }

    res.render("profile/home", {profile});
};

async function dashboard(req, res) {
    const userSession = req.session.user;
    if(userSession === undefined){
        return res.render("profile/dashboard/home", {error: ["Not signed in!"]});
    }
    const articles = await profileService.getProfileArticle(userSession.userId, 5, 0);
    const projects = await profileService.getProfileProject(userSession.userId, 5, 0);
    res.render("profile/dashboard/home", {articles, projects});
}

module.exports = { profile, dashboard }