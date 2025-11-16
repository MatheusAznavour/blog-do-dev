function isEmpty(content, min, max){
    if(!content.trim()){
        console.log("Content was not provided!")
        return false;
    }
    return true;
};

function min(value){
    if(content.length < min){
        console.log("Content is too short!");
        return false;
    };
    return true;
}

function max(value){
    if(content.length > max){
        console.log("Content is too big!");
        return false;
    };
    return true;
}

module.exports = {
    isEmpty,
    min,
    max,
};