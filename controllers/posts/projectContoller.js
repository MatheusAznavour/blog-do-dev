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

    /*
    cloudinary.uploader.upload(req.file.path, (err, result)=>{
        if(err){
            return console.log(err);
        };
        console.log(result);
    });
    */

    const createProject = projectService.createProject(title, description, repository_link, deployed_link, is_done, "https://image", 4);
    const isValid = projectHelper.validateProjectInput(title, description, repository_link, deployed_link, is_done, "https://image", 4);
    if(!isValid){
        console.log("falhouuu");
        return res.render("posts/project/create", {error: ["invalid credential!"]});
    }
    console.log("###", title, repository_link, deployed_link, is_done, description);
    res.redirect("/posts/project/create");
};

module.exports = {
    createProject, createProjectForm,
};