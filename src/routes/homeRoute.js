var express = require('express')

var homeRouter = express.Router();


var h_router = function (navMenu) {
    homeRouter.route("/")
        .get(function (req, res) {
            const message = req.flash("message")
            res.render('index', {
                title: "Muaz Portfolio",
                menu: navMenu,
                heading1: 'WELCOME TO',
                heading2: "MY PORTFOLIO",
                myJob: "I'M A WEBSITE DEVELOPER",
                message
            })
        });
    return homeRouter;
}

module.exports = h_router;
