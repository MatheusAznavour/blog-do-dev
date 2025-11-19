const cloudinary = require("./../../middleware/config/cloudinaryConfig");

function createProject(req, res){
    res.render("posts/project/create");
}

function createProjectForm(req, res){
    cloudinary.uploader.upload(req.file.path, (err, result)=>{
        if(err){
            return console.log(err);
        };
        console.log(result);
    });
};

module.exports = {
    createProject, createProjectForm,
};