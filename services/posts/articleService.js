const slugify = require("slugify");
const articleHelper = require("./../../helpers/posts/articleHelper");

async function createArticle(title, htmlContent){
    const isValid = validateArticleInput(title, htmlContent);
    
    const slugTitle = slugify(title);
    console.log(slugTitle);
};

module.exports = { createArticle };