async function home(req, res) {
    const postType = req.query.post_type ?? "article"; //Work from here
    const limit = Number(req.query.limit) ?? 5;
    const offset = req.query.offset ?? 0;
    console.log(req.query, postType, limit, offset)
    res.render("home")
};

module.exports = { home };