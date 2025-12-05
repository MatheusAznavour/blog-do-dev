const bcrypt = require("bcrypt");
const Users = require("./../models/Users");

async function createUser(username, email, password) {
    
    const hashPassword = await bcrypt.hash(password, 10);
    await Users.signinInsert(username, email, hashPassword);
};

async function validateUser(email, password) {
    const hashedPassword = await Users.selectPasswordByEmail(email);

    if(hashedPassword.length == 0){
        return false;
    }
    
    const match = await bcrypt.compare(password, hashedPassword[0].password);

    if(match){
        return true;
    }

    return false;
};

async function createSession(req, email) {
    const id = await Users.selectPasswordByEmail(email);
    const idNormalized = id[0].id;
    const nameNormalized = id[0].username;
    const imageLinkNormalized = id[0].image_link;
    const role = await Users.selectRole(idNormalized); // role[0].name;
    let roleNormalized = "";
    if(role === undefined || role.length == 0 ){
        roleNormalized = "user";
    } else { roleNormalized = role[0].name};

    req.session.user = {
        userId: idNormalized,
        userName: nameNormalized,
        imageLink: imageLinkNormalized,
        role: roleNormalized
    };
};

function destroySession(req, res){

    req.session.destroy((err) =>{
        if(err){
            console.log("cannot access session here: ", err)
            return res.redirect("/");
        }else{
            res.clearCookie('connect.sid');
            res.redirect("/");
        }
    });
};

module.exports = { createUser, validateUser, createSession, destroySession };