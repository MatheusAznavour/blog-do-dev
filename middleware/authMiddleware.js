function checkOriginalPoster(req, res, next){

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