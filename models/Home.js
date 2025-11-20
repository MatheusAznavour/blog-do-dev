const pool = require("./../db/conn");

async function selectArticle(limit, offset){
    const query = `
    SELECT
	a.id,
    a.title,
    a.slug,
    CONCAT(LEFT(a.content, 100), '...') AS preview,
    a.likes_count,
    LEFT(a.created_at, 10) as created_at,
    u.id as op_id,
    u.username as op_name,
    u.image_link as op_image_link
	FROM articles a INNER JOIN users u
    ON a.users_id=u.id
    ORDER BY a.id DESC
    LIMIT ? OFFSET ?;
    `;
    const [rows] = await pool.query(query, [limit, offset]);
    return rows;
};

async function selectProject(params) {
    
};

module.exports = { selectArticle, selectProject };