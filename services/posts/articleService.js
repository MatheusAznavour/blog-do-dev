const slugify = require("slugify");
const sanitizer = require("sanitize-html");
const Article = require("./../../models/posts/Article");
const Interaction = require("./../../models/Interaction");

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

async function getTotalArticles() {
    const total = await Article.selectCount();
    return total;
}

async function getProjectByUserAndId(id, user_id){
    const article = await Article.selectArticleByUserAndId(id, user_id);
    return article;
};

async function createInteraction(post_id, article_id, profile_id, users_id) {
    const userInteraction = await Interaction.selectInteraction(post_id, article_id, profile_id, users_id);
    if(userInteraction === undefined || userInteraction.length == 0){
        await Interaction.insertLike(post_id, article_id, profile_id);
        await Interaction.insertInteraction(post_id, article_id, profile_id, users_id);
        return
        //Insert interaction
    };
    await Interaction.dropLike(post_id, article_id, profile_id, users_id);
    await Interaction.dropInteraction(post_id, article_id, profile_id, users_id);
};

module.exports = { 
    createArticle, 
    getArticle, updateArticle,
    deleteArticle, 
    getTotalArticles,
    createInteraction,
    getProjectByUserAndId };