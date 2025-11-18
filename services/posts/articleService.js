const slugify = require("slugify");
const sanitizer = require("sanitize-html");
const articleHelper = require("./../../helpers/posts/articleHelper");

async function createArticle(title, htmlContent){
    
    const cleanHtmlContent = sanitizer(htmlContent);

    console.log("CLEANED", cleanHtmlContent)

    const slugTitle = slugify(title);
    //console.log(slugTitle);
};

module.exports = { createArticle };