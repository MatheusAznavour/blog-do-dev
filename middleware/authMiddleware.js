const projectService = require("./../services/posts/projectService");

async function checkOriginalPoster(req, res, next){
    const userSession = req.session.user || undefined;
    const postId = req.params.id

    if(!userSession){
        return res.redirect("/");
    }
    const project = await projectService.getProjectByUserAndId(postId, userSession.userId);
    if(project === undefined || project.length == 0){
       return res.redirect("/");
    }
    
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


function retrieveSession(req, res, next){
    const userSession = req.session.user || undefined;
    if(userSession) {
        res.locals.session = userSession;
    };

    next();
};

module.exports = { 
    checkOriginalPoster, 
    checkSessionExists,
    checkSessionNotExists, 
    retrieveSession };