const validator = require("validatorjs");

function validateSigninInput(...args){
    const data = args[0];

    const rules = {
        user_name: "required|string|min:3|max:50",
        user_email: "required|email",
        user_password: "required|string|min:3|max:50",
        user_password_again: "required|string|min:3|max:50",
    };
    
    const validation = new validator(data, rules);

    if(data.user_password != data.user_password_again){
        return false;
    };
    if(validation.fails()){
        console.log("Validation failled!", validation.errors.all());
        return false;
    } else {
        return true;     
    };
};

module.exports = { validateSigninInput };