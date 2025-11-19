const cloudinary = require("./../../middleware/config/cloudinaryConfig");
const projectService = require("./../../services/posts/projectService");
const projectHelper = require("./../../helpers/posts/projectHelper");

async function project(req, res) {
    const { id, slug } = req.params
    const project = await projectService.getProject(id);
    pj_is_done = "";
    if(project[0].is_done == 1){pj_is_done = true} else {pj_is_done = false};
    res.render("posts/project/home", { project, pj_is_done });
};

function createProject(req, res){
    res.render("posts/project/create");
};

async function createProjectForm(req, res){
    const {
        title,
        repository_link,
        deployed_link,
        is_done,
        description
    } = req.body;
    const opId = req.session.user.userId;

    const isValid = projectHelper.validateProjectInput(title, description, repository_link, deployed_link, is_done, 4);
    if(!isValid.success){
        return res.render("posts/project/create", {error: isValid.error});
    }

    cloudinary.uploader.upload(req.file.path, async (err, result)=>{
        if(err){
            return console.log(err);
        };
        console.log(result.secure_url);
        const url = result.secure_url;
        await projectService.createProject(title, description, repository_link, deployed_link, is_done, url, opId);
    });

    res.redirect("/posts/project/create");
};

module.exports = {
    project,
    createProject, createProjectForm,
};