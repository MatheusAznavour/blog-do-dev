const validator = require("validatorjs");

function validateArticleInput(title, htmlContent){
    const data = {
        artTitle: title, 
        artContent: htmlContent
    };
    const rules = {
        artTitle: "required|string|min:3|max:50",
        artContent: "required|string|min:3",
    };

    const validation = new validator(data, rules);
    if(validation.fails()){
        console.log("Validation failled!", validation.errors.all());
        return { success: false, error: validation.errors.all() };
    };
    return { success: true};
};

module.exports = { validateArticleInput };