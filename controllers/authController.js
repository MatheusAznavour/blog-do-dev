const authHelper = require("./../helpers/authHelper");
const validator = require("./../helpers/validatorHelper")

function sigin(req, res){
    res.render("auth/signin");
};

function siginForm(req, res){
    const { user_name, user_email, user_password, user_password_again } = req.body;
    validator.isEmpty("2")

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