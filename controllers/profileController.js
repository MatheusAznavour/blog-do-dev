const profileService = require("./../services/profileService");

async function profile(req, res){
    const { id, username } = req.params;
    
    const profile = await profileService.getProfile(id);

    console.log(profile)

    res.render("profile/home");
};

module.exports = { profile }