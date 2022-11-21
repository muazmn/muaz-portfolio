var express = require('express')

var homeRouter = express.Router();


var h_router = function (navMenu) {
    homeRouter.route("/")
        .get(function (req, res) {
            res.render('index', {
                title: "Muaz Portfolio",
                menu: navMenu,
                heading1: 'WELCOME TO',
                heading2: "MY PORTFOLIO",
                myJob: "I'M WORK AS A WEBSITE DEVELOPER"
            })
        });
    return homeRouter;
}

module.exports = h_router;