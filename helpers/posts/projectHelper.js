const validator = require("validatorjs");

function validateProjectInput(title, description, repository_link, deployed_link, is_done, users_id){
    const data = {
        title: title,
        description: description,
        repository: repository_link,
        deploy: deployed_link,
        is_done: is_done,
        users_id: users_id
    };
    const rules = {
        title: "required|string|min:3|max:50",
        description: "max:500",
        repository: "required|max:150|url",
        deploy: "max:150",
        is_done: "max:1|required",
        users_id: "required"
    };
    const validation = new validator(data, rules);
    if(validation.fails()){
        console.log("Validation failled!", validation.errors.all());
        return { success: false, error: validation.errors.all() };
    };
    return { success: true };
};

module.exports = { validateProjectInput };