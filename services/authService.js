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

    req.session.user = {
        userId: idNormalized,
        userName: nameNormalized,
        imageLink: imageLinkNormalized
    };
    console.log(req.session, id)
};

function destroySession(req){
    req.session.destroy((err) =>{
        if(err){return console.log("cannot access session here: ", err)};
        res.redirect("/");
    });
};

module.exports = { createUser, validateUser, createSession, destroySession };