const Home = require("./../models/Home");

async function getArticle(limit, offset) {
    const articles = await Home.selectArticle(limit, offset);
    return articles;
};

async function getProject(limit, offset) {
    const projects = await Home.selectProject(limit, offset);
    return projects;
};

module.exports = { getArticle, getProject };