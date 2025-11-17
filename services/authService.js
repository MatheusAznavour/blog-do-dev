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

async function createSession(params) {
    
}

module.exports = { createUser, validateUser };