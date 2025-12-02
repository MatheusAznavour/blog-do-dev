const profileService = require("./../services/profileService");
const profileHelper = require("./../helpers/profileHelper");
const cloudinary = require("./../middleware/config/cloudinaryConfig");

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
};

//Setting

async function editProfile(req, res){
    const userSession = req.session.user;
    if(!userSession){
        return res.render("profile/settings/editProfile", {error: ["Theres no user logged in"]});
    }
    const userId = userSession.userId;
    const profile = await profileService.getProfile(userId)

    res.render("profile/settings/editProfile", {profile});
};

async function editProfileForm(req, res){
    const { button } = req.body;
    const userSession = req.session.user;
    const userId = userSession.userId;

    if(button == "f1"){
        const { username, email, description } = req.body;
        const isInfoValid = profileHelper.validateInfoInput(username, email, description);
        if(!isInfoValid.success){
            return res.render("profile/settings/editProfile", {error: isInfoValid.error});
        };

        await profileService.addProfileInfo(userId, username, email, description);
    }
    if(button == "f2"){
        const { ac_major, ac_institution, ac_arrival_date, ac_departure_date, ac_description } = req.body
        const isAcademicValid = profileHelper.validateAcademicInput(ac_major, ac_institution, ac_arrival_date, ac_description);
        if(!isAcademicValid.success){
            return res.render("profile/settings/editProfile", {error: isAcademicValid.error});
        };

        await profileService.addProfileAcademicInfo(userId, ac_major, ac_institution, ac_arrival_date, ac_departure_date, ac_description);
    }
    
    if(button == "f3"){
        const { pr_position, pr_enterprise, pr_arrival, pr_departure, pr_description } = req.body;
        const isProfessionalValid = profileHelper.validateProfessionalInput(pr_position, pr_enterprise, pr_arrival, pr_description);
        if(!isProfessionalValid.success){
            return res.render("profile/settings/editProfile", {error: isProfessionalValid.error});
        };

        await profileService.addProfileProfissionalInfo(userId, pr_position, pr_enterprise, pr_arrival, pr_departure, pr_description);
    }

    res.redirect("/profile/settings/edit-profile");
};

async function chnagePhoto(req, res){
    const userSession = req.session.user;
    if(!userSession){
        return res.render("profile/settings/changePhoto", {error: ["Theres no user logged in"]});
    }
    const userId = userSession.userId;
    const profile = await profileService.getProfile(userId);

    console.log(profile)

    res.render("profile/settings/changePhoto", {profile});
};

function changePhotoForm(req, res){
    const userSession = req.session.user;
    if(!userSession){
        return res.render("profile/settings/changePhoto", {error: ["Theres no user logged in"]});
    }
    const userId = userSession.userId;

    cloudinary.uploader.upload(req.file.path, async (err, result)=>{ 
        if(err){
            return res.render("profile/settings/changePhoto", {error: ["Internal error with midia api"]});
        };
        console.log(result.secure_url);
        const url = result.secure_url;
        await profileService.addProfilePhoto(userId, url);
        res.redirect("/profile/settings/change-photo");
    });
};

module.exports = { 
    profile, 
    dashboard,
    editProfile, editProfileForm,
    chnagePhoto, changePhotoForm
};