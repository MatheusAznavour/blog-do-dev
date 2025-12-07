const validator = require("validatorjs");

function validateSigninInput(...args){
    const data = args[0];

    const rules = {
        user_name: "required|string|min:3|max:20",
        user_email: "required|email",
        user_password: "required|string|min:3|max:25",
        user_password_again: "required|string|min:3|max:25",
    };
    
    const validation = new validator(data, rules);

    if(data.user_password != data.user_password_again){
        return { success: false, error: ["passwords dont match"] };
    };
    if(validation.fails()){
        console.log("Validation failled!", validation.errors.all());
        return { success: false, error: validation.errors.all() };
    } else {
        return { success: true};    
    };
};

module.exports = { validateSigninInput };