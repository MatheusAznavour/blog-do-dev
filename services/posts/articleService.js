const slugify = require("slugify");
const sanitizer = require("sanitize-html");
const Article = require("./../../models/posts/Article");

async function createArticle(title, htmlContent, opId){
    const cleanHtmlContent = sanitizer(htmlContent);
    const slugTitle = slugify(title);
    await Article.insertPost(opId, title, slugTitle, cleanHtmlContent);
};

async function getArticle(id) {
    const article = await Article.selectPost(id)
    if(!article.length){
        return false;
    };
    return article;
}

module.exports = { createArticle, getArticle };