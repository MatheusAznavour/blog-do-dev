async function home(req, res) {
    console.log(req.query)
    res.render("home")
};

module.exports = { home };