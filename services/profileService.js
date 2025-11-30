const Profile = require("./../models/Profile");

async function getProfile(id){
    const profile = await Profile.selectProfile(id);
    return profile;
};

async function getProfileArticle(user_id, limit, offset) {
    const articles = await Profile.selectProfileArticle(user_id, limit, offset)
    return articles;
};

async function getProfileProject(user_id, limit, offset) {
    const projects = Profile.selectProfileProject(user_id, limit, offset);
    return projects;
};

//Settings
async function addProfileAcademicInfo(id, major, institution, arrival_date, departure_date, description) {
    return await Profile.replaceAcademicInfo(id, major, institution, arrival_date, departure_date, description);
};

async function addProfileProfissionalInfo(id, position, enterprise, arrival_date, departure_date, description) {
    return await Profile.replaceProfissionalInfo(id, position, enterprise, arrival_date, departure_date, description);
};

module.exports = { 
    getProfile,
    getProfileArticle,
    getProfileProject,
    addProfileAcademicInfo,
    addProfileProfissionalInfo
 };