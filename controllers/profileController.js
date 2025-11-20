const profileService = require("./../services/profileService");

async function profile(req, res){
    const { id, username } = req.params;
    
    const profile = await profileService.getProfile(id);
    if(profile.length === 0){
        return res.render("profile/home", {error: ["Profile not found!"]});
    }

    res.render("profile/home", {profile});
};

module.exports = { profile }