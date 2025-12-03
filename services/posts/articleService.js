const slugify = require("slugify");
const sanitizer = require("sanitize-html");
const Article = require("./../../models/posts/Article");

async function createArticle(title, htmlContent, opId){
    const cleanHtmlContent = sanitizer(htmlContent, {
        allowedTags: sanitizer.defaults.allowedTags.concat([ 'img' ])
    });
    const slugTitle = slugify(title);
    await Article.insertPost(opId, title, slugTitle, cleanHtmlContent);
};

async function deleteArticle(id) {
    await Article.deleteArticle(id);
};

async function updateArticle(title, htmlContent, id) {
    const cleanHtmlContent = sanitizer(htmlContent, {
        allowedTags: sanitizer.defaults.allowedTags.concat([ 'img' ])
    });
    const slugTitle = slugify(title);
    await Article.updateArticle(id, title, slugTitle, cleanHtmlContent);
}

async function getArticle(id) {
    const article = await Article.selectPost(id)
    if(!article.length){
        return false;
    };
    return article;
}

async function getProjectByUserAndId(id, user_id){
    const article = await Article.selectArticleByUserAndId(id, user_id);
    return article;
};

module.exports = { 
    createArticle, 
    getArticle, updateArticle,
    deleteArticle, 
    getProjectByUserAndId };