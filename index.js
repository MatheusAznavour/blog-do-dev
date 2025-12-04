require("dotenv").config()
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const pool = require("./db/conn");

const app = express();

const homeRouter = require("./routes/homeRouter");
const authRouter = require("./routes/authRouter");
const articleRouter = require("./routes/posts/articleRouter"); 
const projectRouter = require("./routes/posts/projectRouter");
const profileRouter = require("./routes/profileRouter");
const adminRouter = require("./routes/adminRouter");

const authMiddleware = require("./middleware/authMiddleware");

app.engine("hbs", exphbs.engine({extname: ".hbs"}));
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
    },
}));

app.use(authMiddleware.retrieveSession);

app.use("/", homeRouter);
app.use("/", authRouter);
app.use("/posts", articleRouter);
app.use("/posts", projectRouter);
app.use("/profile", profileRouter);
app.use("/admin", adminRouter);

app.listen(3000);