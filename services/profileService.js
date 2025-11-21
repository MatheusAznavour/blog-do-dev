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

module.exports = { 
    getProfile,
    getProfileArticle,
    getProfileProject,
 };