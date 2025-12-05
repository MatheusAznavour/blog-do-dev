const Admin = require("./../models/Admin");

async function getUsers(limit, offset){
    const users = await Admin.selectAll(limit, offset);
    return users;
};

async function deleteUser(id) {
    return await Admin.deleteUser(id);
};

module.exports = { getUsers, deleteUser };