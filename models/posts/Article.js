const pool = require("./../../db/conn");

async function insertPost(id, title, slug, content) {
    const query = `INSERT INTO articles (title, slug, content, users_id) VALUES (?, ?, ?, ?);`;
    const [rows] = await pool.query(query, [title, slug, content, id]);
    return rows;
};

async function selectPost(id) {
    const query = `
    SELECT 
	a.id, 
	a.title, 
    a.slug, 
    a.content, 
    a.likes_count,
    LEFT(a.created_at, 10) as created_at,
    u.id as op_id, 
    u.username as op_name, 
    u.image_link as op_img_link 
    FROM articles a
	INNER JOIN users u ON a.users_id=u.id
    WHERE a.id=?;
    `;
    const [rows] = await pool.query(query, [id]);
    return rows;
}

module.exports = { insertPost, selectPost };