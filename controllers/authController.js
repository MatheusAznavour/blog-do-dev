const authHelper = require("./../helpers/authHelper");
const authService = require("./../services/authService");

function signin(req, res){
    res.render("auth/signin");
};

async function signinForm(req, res){
    const { user_name, user_email, user_password, user_password_again } = req.body;
    
    const isValid = authHelper.validateSigninInput({user_name, user_email, user_password, user_password_again})
    if(!isValid.success){
        res.render("auth/signin", {error: isValid.error}); 
        return;
    };

    await authService.createUser(user_name, user_email, user_password);

    res.redirect("/login");
};

// 

function login(req, res){
    res.render("auth/login");
};

async function loginForm(req, res){
    const { user_email, user_password } = req.body;
    const isValid = await authService.validateUser(user_email, user_password);

    if(!isValid){
        return res.render("auth/login", {error: ["Invalid credentials!"]});
    }

    await authService.createSession(req, user_email);
    res.redirect("/login");
};

// 

function logout(req, res){
    authService.destroySession(req, res);
};

module.exports = {
    signin, signinForm,
    login, loginForm,
    logout,
};