const slugify = require("slugify");
const Project = require("./../../models/posts/Project");

async function createProject(title, description, repository_link, deployed_link, is_done, image_link, users_id) {
    const slugTitle = slugify(title);
    await Project.insertProject(title, slugTitle, description, repository_link, deployed_link, is_done, image_link, users_id);
};

async function getProject(id) {
    const project = await Project.selecProject(id);
    return project;
};

async function getProjectByUserAndId(id, user_id){
    const project = await Project.selectProjectByUserAndId(id, user_id);
    return project;
};

module.exports = { 
    createProject, 
    getProject,
    getProjectByUserAndId };