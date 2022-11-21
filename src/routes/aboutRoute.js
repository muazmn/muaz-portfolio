var express = require('express')



var aboutRouter = express.Router();
var a_router = function (navMenu) {
    aboutRouter.route("/")
        .get(function (req, res) {
            res.render('about', {
                title: "Muaz Portfolio",
                menu: navMenu
            })
        })
    return aboutRouter
}

module.exports = a_router;  
