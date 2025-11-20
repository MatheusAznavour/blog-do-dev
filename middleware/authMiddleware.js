function checkOriginalPoster(req, res, next){

};

function checkSessionExists(req, res, next){
    const userSession = req.session.user || undefined;
    if(userSession) {
        return next();
    };
    res.redirect("/");
    
};


function retrieveSession(req, res, next){
    const userSession = req.session.user || undefined;
    if(userSession) {
        res.locals.session = userSession;
    };

    next();
};

module.exports = { checkOriginalPoster, checkSessionExists, retrieveSession };