const pool = require("./../db/conn");

async function signinInsert(username, email, password) {
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?);`;
    const [rows] = await pool.query(query, [username, email, password]);
    return rows;
};

//  Get queryes
async function selectPasswordByEmail(email) {
    const query = `SELECT password, id FROM users WHERE email=?;`;
    const [rows] = await pool.query(query, [email]);
    return rows;
};

// By id

module.exports = { signinInsert, selectPasswordByEmail };