const pool = require("./../../db/conn");

async function insertProject(title, slug, description, repository_link, deployed_link, is_done, image_link, users_id) {
    const query = `
    INSERT INTO projects (title, slug, description, repository_link, deployed_link, is_done, image_link, users_id) 
        VALUES(?, ?, ?, ?, ?, ?, ?, ?);
    `;
    const [rows] = await pool.query(query, [title, slug, description, repository_link, deployed_link, is_done, image_link, users_id]);
    return rows;
};

async function deleteProject(id) {
    const query = `
    DELETE FROM projects
	    WHERE id=?;
    `;
    const [rows] = await pool.query(query, [id]);
    return rows;
};

async function updateProject(title, slug, description, repository_link, deployed_link, is_done, image_link, project_id) {
    const query = `
    UPDATE projects
        SET title=?, slug=?, description=?, repository_link=?, deployed_link=?, is_done=?, image_link=?
        WHERE id=?;
    `;
    const [rows] = await pool.query(query, [title, slug, description, repository_link, deployed_link, is_done, image_link, project_id]);
    return rows;
};

async function selecProject(id) {
    const query = `
    SELECT 
	p.id,
    p.title,
    p.slug,
    p.description,
    p.repository_link,
    p.deployed_link,
    p.is_done,
    p.image_link as project_image,
    p.likes_count,
	LEFT(p.created_at, 10) as created_at,
	u.id as op_id,
    u.username as op_name,
    u.image_link as op_img_link
	FROM projects p
	INNER JOIN users u
    ON p.users_id=u.id WHERE p.id=?;
    `;
    const [rows] = await pool.query(query, [id]);
    return rows;
}

async function selectProjectByUserAndId(id, user_id){ 
    const query = `
    SELECT
        id,
        users_id
        FROM projects
        WHERE users_id=? AND id=?;
    `;
    const [rows] = await pool.query(query, [user_id, id]);
    return rows;
}

module.exports = { 
    insertProject, 
    updateProject,
    deleteProject,
    selecProject,
    selectProjectByUserAndId };