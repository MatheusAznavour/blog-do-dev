const pool = require("./../db/conn");

async function selectAll(limit, offset) {
    const query = `
    SELECT 
        u.id,
        u.username,
        u.email,
        u.image_link,
        u.created_at,
        u.updated_at
        FROM users u
        ORDER by u.id DESC
        LIMIT ? offset ?;
    `;
    const [rows] = await pool.query(query, [limit, offset]);
    return rows; 
};

async function deleteUser(id) {
    const query = `
    DELETE FROM users
	    WHERE users.id=?;
    `;
    const [rows] = await pool.query(query, [id]);
    return rows;
};

module.exports = { selectAll, deleteUser };