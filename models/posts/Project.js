const pool = require("./../../db/conn");

async function insertProject(title, slug, description, repository_link, deployed_link, is_done, image_link, users_id) {
    const query = `
    INSERT INTO projects (title, slug, description, repository_link, deployed_link, is_done, image_link, users_id) 
        VALUES(?, ?, ?, ?, ?, ?, ?, ?);
    `;
    const [rows] = await pool.query(query, [title, slug, description, repository_link, deployed_link, is_done, image_link, users_id]);
    return rows;
};

module.exports = { insertProject };