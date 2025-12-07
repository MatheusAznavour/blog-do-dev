const projectService = require("./../services/posts/projectService");
const articleService = require("./../services/posts/articleService");
const Interaction = require("./../models/Interaction");

async function checkOriginalPoster(req, res, next){
    const userSession = req.session.user || undefined;
    const postId = req.params.id
    const path = req.path
    const splittedPath = path.split("/");
    const currentPath = splittedPath[1]

    if(!userSession){
        return res.redirect("/");
    }
    if(currentPath == "project"){
        const project = await projectService.getProjectByUserAndId(postId, userSession.userId);
        if(userSession.role == "admin"){return next()}
        if(project === undefined || project.length == 0){
           return res.redirect("/");
        }
    }
    if(currentPath == "article"){
        const article = await articleService.getProjectByUserAndId(postId, userSession.userId);
        if(userSession.role == "admin"){return next()}
        if(article === undefined || article.length == 0){
            return res.redirect("/");
        }
    }
    next();
};

async function checkSessionIsAdmin(req, res, next){
    const userSession = req.session.user || undefined;
    if(userSession.role != "admin"){
        return res.redirect("/");
    };
    next();
};

function checkSessionExists(req, res, next){
    const userSession = req.session.user || undefined;
    if(userSession) {
        return next();
    };
    res.redirect("/");
};

function checkSessionNotExists(req, res, next){
    const userSession = req.session.user || undefined;
    if(userSession) {
        return res.redirect("/"); 
    };
    next();
};

async function checkSessionLiked(req, res, next) {
    const userSession = req.session.user || undefined;
    const postId = req.params.id
    const path = req.path
    const splittedPath = path.split("/");
    const currentPath = splittedPath[1]

    if(!userSession){
        return next()
    }
    if(currentPath == "project"){
        const interaction = await Interaction.selectInteraction(postId, null, null, userSession.userId)
        if(interaction === undefined || interaction.length == 0){
            res.locals.interaction = false;
            return next();
        };
        res.locals.interaction = true;
    }
    if(currentPath == "article"){
        const interaction = await Interaction.selectInteraction(null, postId, null, userSession.userId);
        if(interaction === undefined || interaction.length == 0){
            res.locals.interaction = null;
            return next();
        };
        res.locals.interaction = true;
    }
    next();
}

function retrieveSession(req, res, next){
    const userSession = req.session.user || undefined;
    if(userSession) {
        if(userSession.role == "admin"){
            res.locals.role = "admin";
        };
        res.locals.session = userSession;
    };

    next();
};

module.exports = { 
    checkOriginalPoster, 
    checkSessionExists,
    checkSessionIsAdmin,
    checkSessionNotExists, 
    checkSessionLiked,
    retrieveSession };