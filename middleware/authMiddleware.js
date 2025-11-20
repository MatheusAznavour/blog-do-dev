function checkOriginalPoster(req, res, next){

};

function checkSession(req, res, next){

};


function retrieveSession(req, res, next){
    const userSession = req.session.user || undefined;
    if(userSession) {
        res.locals.session = userSession;
        console.log(res.locals.session);
    };

    next();
};

module.exports = { checkOriginalPoster, checkSession, retrieveSession };