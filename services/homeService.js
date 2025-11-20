const Home = require("./../models/Home");

async function getArticle(limit, offset) {
    const article = await Home.selectArticle(limit, offset);
    return article;
};

async function getProject(limit, offset) {
    
};

module.exports = { getArticle, getProject };