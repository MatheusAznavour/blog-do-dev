const cloudinary = require("./../../middleware/config/cloudinaryConfig");
const projectService = require("./../../services/posts/projectService");
const projectHelper = require("./../../helpers/posts/projectHelper");

function createProject(req, res){
    res.render("posts/project/create");
}

async function createProjectForm(req, res){
    const {
        title,
        repository_link,
        deployed_link,
        is_done,
        description
    } = req.body;

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
        await projectService.createProject(title, description, repository_link, deployed_link, is_done, url, 3);
    });


    //await projectService.createProject(title, description, repository_link, deployed_link, is_done, "https://image", 4);
    //console.log("###", title, repository_link, deployed_link, is_done, description);
    res.redirect("/posts/project/create");
};

module.exports = {
    createProject, createProjectForm,
};