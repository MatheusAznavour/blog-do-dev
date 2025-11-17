const bcrypt = require("bcrypt");
const Users = require("./../models/Users");

async function createUser(username, email, password) {
    
    const hashPassword = await bcrypt.hash(password, 10);
    await Users.signinInsert(username, email, hashPassword);
};

module.exports = { createUser };