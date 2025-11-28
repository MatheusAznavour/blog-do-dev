const validator = require("validatorjs");

function validateInfoInput(username, email, description){
    const data = {
        user_name: username,
        user_email: email,
        user_description: description
    }

    const rules = {
        user_name: "required|string|min:3|max:20",
        user_email: "required|email",
        user_description: "max:500"
    };
    
    const validation = new validator(data, rules);

    if(validation.fails()){
        console.log("Validation failled!", validation.errors.all());
        return { success: false, error: validation.errors.all() };
    } else {
        return { success: true};    
    };
};

module.exports = { validateInfoInput };