const pool = require("./../db/conn");

async function signinInsert(username, email, password) {
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?);`;
    const [rows] = await pool.query(query, [username, email, password]);
    return rows;
};

//  Get queryes
async function selectPasswordByEmail(email) {
    const query = `SELECT password, id, username, image_link FROM users WHERE email=?;`;
    const [rows] = await pool.query(query, [email]);
    return rows;
};

// By id

async function selectRole(id) {
    const query = `
    SELECT users.id, users.username, roles.name FROM users INNER JOIN roles 
        ON users.id=roles.users_id
        WHERE users.id=?;
    `;
    const [rows] = await pool.query(query, [id]);
    return rows;
};

module.exports = { signinInsert, selectPasswordByEmail, selectRole };