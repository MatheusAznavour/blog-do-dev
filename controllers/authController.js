const authHelper = require("./../helpers/authHelper");
const authService = require("./../services/authService");

function sigin(req, res){
    res.render("auth/signin");
};

async function siginForm(req, res){
    const { user_name, user_email, user_password, user_password_again } = req.body;
    
    const isValid = authHelper.validateSigninInput({user_name, user_email, user_password, user_password_again})
    if(!isValid){
        res.render("auth/signin", {error: ["Form data send format is invalid!"]});
        return;
    };

    await authService.createUser(user_name, user_email, user_password)

    res.redirect("/signin");
};

// 

function login(req, res){

};

function loginForm(req, res){

};

// 

function logoutForm(req, res){

};

module.exports = {
    sigin, siginForm,
    login, loginForm,
    logoutForm,
};