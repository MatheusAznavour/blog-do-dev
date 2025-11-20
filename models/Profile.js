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

module.exports = { selectProfile }