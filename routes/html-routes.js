// Handles the routes that send users to different html pages

let path = require("path");
let express = require("express");
let exphbs = require("express-handlebars");

let app = express(); 

//ROUTES

module.exports = function (app) {

    app.engine(".hbs", exphbs({
        defaultLayout: 'main',
        extname: ".hbs",
        layoutsDir: path.join(__dirname, "views/layouts")
    }));

  

    app.get("/", function (req, res){
        res.render("index");
    });

    app.get("/projects", function (req, res){
        res.render("projects");
    });

    app.get("/contact", function (req, res){
        res.render("contact");
    });
}