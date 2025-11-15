require("dotenv").config()
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const pool = require("./db/conn");

const app = express();

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

app.listen(3000);