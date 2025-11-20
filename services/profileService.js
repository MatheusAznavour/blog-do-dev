const Profile = require("./../models/Profile");

async function getProfile(id){
    const profile = await Profile.selectProfile(id);
    return profile;
};

module.exports = { getProfile }