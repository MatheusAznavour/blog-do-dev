const slugify = require("slugify");
const sanitizer = require("sanitize-html");
const Article = require("./../../models/posts/Article");

async function createArticle(title, htmlContent, opId){
    const cleanHtmlContent = sanitizer(htmlContent);
    const slugTitle = slugify(title);

    console.log("ORIGINAL POSTER: ", opId)
    await Article.insertPost(opId, title, slugTitle, cleanHtmlContent);
    //console.log(slugTitle);
};

module.exports = { createArticle };