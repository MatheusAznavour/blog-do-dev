const authHelper = require("./../helpers/authHelper");

function sigin(req, res){
    res.render("auth/signin");
};

function siginForm(req, res){
    const { user_name, user_email, user_password, user_password_again } = req.body;
    
    //console.log(authHelper.validateSigninInput({user_name, user_email, user_password, user_password_again}))
    const isValid = authHelper.validateSigninInput({user_name, user_email, user_password, user_password_again})
    if(!isValid){
        console.log("FALSEEEE");
        res.render("auth/signin", {error: ["Form data send format is invalid!"]});
        return;
    };
    console.log("TRUEEEE");
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