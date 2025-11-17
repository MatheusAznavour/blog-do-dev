const pool = require("./../db/conn");

async function signinInsert(username, email, password) {
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?);`;
    const [rows] = await pool.query(query, [username, email, password]);
    return rows;
};

module.exports = { signinInsert };