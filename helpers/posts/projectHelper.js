const validator = require("validatorjs");

function validateProjectInput(title, description, repository_link, deployed_link, is_done, image_link, users_id){
    const data = {
        title: title,
        description: description,
        repository: repository_link,
        deploy: deployed_link,
        is_done: is_done,
        image_link: image_link,
        users_id: users_id
    };
    const rules = {
        title: "required|string|min:3|max:50",
        description: "max:500",
        repository: "required|max:150|url",
        deploy: "max:150",
        is_done: "max:1|required",
        image_link: "max:150",
        users_id: "required"
    };
    const validation = new validator(data, rules);
    if(validation.fails()){
        console.log("Validation failled!", validation.errors.all());
        return false;
    };
    return true;
};

module.exports = { validateProjectInput };