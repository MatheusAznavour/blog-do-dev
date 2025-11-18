const pool = require("./../../db/conn");

async function insertPost(id, title, slug, content) {
    const query = `INSERT INTO articles (title, slug, content, users_id) VALUES (?, ?, ?, ?);`;
    const [rows] = await pool.query(query, [title, slug, content, id]);
    return rows;
};

module.exports = { insertPost };