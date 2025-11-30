const pool = require("./../db/conn");

async function selectProfile(id) {
    const query = `
    SELECT
	u.id,
    u.username,
    u.image_link,
	u.description,
    u.likes_count,
    LEFT(u.created_at, 10) as created_at,
    a.major as academic_major,
    a.institution as academic_institution,
    LEFT(a.arrival_date, 10) as academic_arrival,
    LEFT(a.departure_date, 10) as academic_departure,
    a.description as academic_description,
    p.position as profissional_position,
    p.enterprise as profissional_enterprise,
    LEFT(p.arrival_date, 10) as profissional_arrival,
    LEFT(p.departure_date, 10) as profissional_departure,
    p.description as profissional_description,
    s.name as stacks_name
	FROM users u
	LEFT JOIN academic_background a ON  a.users_id=u.id
    LEFT JOIN profissional_experience p ON  p.users_id=u.id
    LEFT JOIN stacks s ON  s.users_id=u.id
    WHERE u.id=?;
    `;
    const [rows] = await pool.query(query, [id]);
    return rows;
};

async function selectProfileArticle(user_id, limit, offset) {
    const query = `
    SELECT 
        a.id, 
        a.title, 
        a.slug, 
        CONCAT(LEFT(a.content, 100), '...') AS preview, 
        a.likes_count,
        LEFT(a.created_at, 10) as created_at,
        LEFT(a.updated_at, 10) as updated_at,
        u.id as op_id, 
        u.username as op_name, 
        u.image_link as op_img_link 
        FROM articles a
        INNER JOIN users u ON a.users_id=u.id
        WHERE u.id=?
        ORDER BY a.id DESC
        LIMIT ? OFFSET ?;
    `;
    const [rows] = await pool.query(query, [user_id, limit, offset]);
    return rows;
};

async function selectProfileProject(user_id, limit, offset) {
    const query = `
    SELECT
        p.id,
        p.title,
        p.slug,
        p.description,
        p.repository_link,
        p.deployed_link,
        p.is_done,
        p.image_link,
        p.likes_count,
        LEFT(p.created_at, 10) as created_at,
        LEFT(p.updated_at, 10) as updated_at,
        u.id as op_id,
        u.username as op_username,
        u.image_link as op_image_link
        FROM projects p
        INNER JOIN users u ON p.users_id=u.id
        WHERE u.id=?
        ORDER BY p.id DESC
        LIMIT ? OFFSET ?;
    `;
    const [rows] = await pool.query(query, [user_id, limit, offset]);
    return rows;
};

//Inserts

async function replaceAcademicInfo(id, major, institution, arrival_date, departure_date, description) {
    const query = `
    REPLACE INTO academic_background (id, major, institution, arrival_date, departure_date, description, users_id)
        VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
        );
    `

    const [rows] = await pool.query(query, [id, major, institution, arrival_date, departure_date, description, id]);
    return rows;
};

async function replaceProfissionalInfo(id, position, enterprise, arrival_date, departure_date, description) {
    const query = `
    REPLACE INTO profissional_experience (id, position, enterprise, arrival_date, departure_date, description, users_id)
        VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
        );
    `
    const [rows] = await pool.query(query, [id, position, enterprise, arrival_date, departure_date, description, id]);
    return rows;
}

module.exports = { 
    selectProfile,
    selectProfileArticle,
    selectProfileProject,
    replaceAcademicInfo,
    replaceProfissionalInfo
};