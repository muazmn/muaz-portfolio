
var express = require('express')
var servicesRouter = express.Router();

var s_router = function (navMenu) {
    servicesRouter.route("/")
        .get(function (req, res) {
            res.render('services', {
                title: "Muaz Portfolio",
                menu: navMenu
            })
        })
    return servicesRouter
}

module.exports = s_router;  
