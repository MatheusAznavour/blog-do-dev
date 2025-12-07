const pool = require("./../db/conn");

async function selectAll(limit, offset) {
    const query = `
    SELECT 
        u.id,
        u.username,
        u.email,
        u.image_link,
        u.created_at,
        u.updated_at,
        r.name as role
        FROM users u LEFT JOIN roles r ON u.id=r.users_id
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

async function insertPrivileges(id) {
    const query = `
    INSERT INTO roles 
        (
        name, 
        users_id
        ) VALUES (
        "admin",
        ?
        );
    `;

    const [rows] = await pool.query(query, [id]);
    return rows;
};

async function dropPrivileges(id) {
    const query = `
    DELETE FROM roles
        WHERE users_id=?;
    `;
    const [rows] = await pool.query(query, [id]);
    return rows;
};

module.exports = { 
    selectAll, 
    deleteUser,
    insertPrivileges,
    dropPrivileges };