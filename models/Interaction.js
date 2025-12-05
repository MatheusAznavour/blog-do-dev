const pool = require("./../db/conn");

async function insertLike(post_id, article_id, profile_id){
    if(post_id){
        const query = `
        UPDATE projects
            SET likes_count = likes_count + 1
            WHERE id=?;
        `;
        const [rows] = await pool.query(query, [post_id]);
        return rows;
    };
    if(article_id){
        const query = `
        UPDATE articles
            SET likes_count = likes_count + 1
            WHERE id=?;
        `;
        const [rows] = await pool.query(query, [article_id]);
        return rows;
    };
    if(profile_id){
        const query = `
        UPDATE users
            SET likes_count = likes_count + 1
            WHERE id=?;
        `;
        const [rows] = await pool.query(query, [profile_id]);
        return rows;
    };
};

async function insertInteraction(post_id, article_id, profile_id, users_id) {
    const query = `
    INSERT INTO interactions (
        post_id,
        article_id,
        profile_id,
        users_id
        ) VALUES (
        ?,
        ?,
        ?,
        ?
        );
    `;
    const [rows] = await pool.query(query, [post_id, article_id, profile_id, users_id]);
    return rows;
};

async function dropInteraction(params) {
    
}

async function dropLike(params) {
    
}

async function selectInteraction(post_id, article_id, profile_id, users_id) {
    if(post_id){
        const query = `
        SELECT * FROM interactions
            WHERE id=? AND post_id=2;
        `;
        const [rows] = await pool.query(query, [post_id]);
        return rows;
    };
    if(article_id){
        const query = `
        UPDATE articles
            SET likes_count = likes_count + 1
            WHERE id=?;
        `;
        const [rows] = await pool.query(query, [article_id]);
        return rows;
    };
    if(profile_id){
        const query = `
        UPDATE users
            SET likes_count = likes_count + 1
            WHERE id=?;
        `;
        const [rows] = await pool.query(query, [profile_id]);
        return rows;
    };
}



module.exports = { insertLike, insertInteraction, dropInteraction, dropLike, selectInteraction };