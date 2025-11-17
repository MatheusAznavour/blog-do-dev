const authHelper = require("./../helpers/authHelper");
const authService = require("./../services/authService");

function signin(req, res){
    res.render("auth/signin");
};

async function signinForm(req, res){
    const { user_name, user_email, user_password, user_password_again } = req.body;
    
    const isValid = authHelper.validateSigninInput({user_name, user_email, user_password, user_password_again})
    if(!isValid){
        res.render("auth/signin", {error: ["Form data send format is invalid!"]});
        return;
    };

    await authService.createUser(user_name, user_email, user_password);

    res.redirect("/signin");
};

// 

function login(req, res){
    res.render("auth/login");
};

async function loginForm(req, res){
    const { user_email, user_password } = req.body;
    const isValid = await authService.validateUser(user_email, user_password);

    if(!isValid){
        console.log("TRUE OR FALSE???",isValid)
        return res.render("auth/login", {error: ["Invalid credentials!"]});
    }

    await authService.createSession(req, user_email);
    res.redirect("/login");
};

// 

function logout(req, res){
    authService.destroySession();
};

module.exports = {
    signin, signinForm,
    login, loginForm,
    logout,
};