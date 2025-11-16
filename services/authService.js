const bcrypt = require("bcrypt");

async function createUser(username, email, password) {
    
    bcrypt.hash(password, 10, (err, hash)=>{
        if(err){return console.log("Error hashing the password: ", err)};

        console.log(hash);
    })

};

module.exports = { createUser };