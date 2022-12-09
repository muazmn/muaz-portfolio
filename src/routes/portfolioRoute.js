var express = require('express');
var mongoose = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
var portfolioRouter = express.Router();
const http = require('url');

// creating and initializing myURL
// const myURL = new URL('https://muazmn.github.io/countr');
// creating and initializing myURL
const myURL1 = new URL('https://muazmn.github.io/colorGame/');
const myURL2 = new URL('https://muazmn.github.io/countr/');
const myURL3 = new URL('http://carrentals.epizy.com/public/');
const myURL4 = new URL('https://unitt-calculator.netlify.app/');


// getting the serialized URL
// using href
const colorGame = myURL1.href;
const countr = myURL2.href;
const carrentals = myURL3.href;
const unitCalculator = myURL4.href;

// const  = myURL1.href;
var socialMediaUrl = [
    {
        link: countr
    },
    {
        link: colorGame
    },
    {
        link: unitCalculator
    },
     {
        link: carrentals
    }
]
// getting the serialized URL
// using href
// const href = myURL.href;

// Display hostname value 
// console.log(href);

// var p_router = function (navMenu) {
//     portfolioRouter.route("/")
//         .get(function (req, res) {
//             var url = process.env.MONGO_URI || 'mongodb://localhost:27017/nodePortfolioApp';//url yang sambung ke database mongodb
//             mongodb.connect(url, function (err, database) {//func connect untuk connect ke database
//                 var myDbName = database.db('nodePortfolioApp')
//                 var collection = myDbName.collection('projects');
//                 console.log(collection);
//                 collection.find({}).toArray(function (err, results) {
//                     res.render('portfolio', {
//                         title: "PORTFOLIO",
//                         menu: navMenu,
//                         projects: results,
//                         url: socialMediaUrl
//                     })
//                 })
//             })
//         })
//     return portfolioRouter;
// }
var p_router = function (navMenu) {
    portfolioRouter.route("/")
        .get(function (req, res) {
            const database = process.env.MONGO_URI || 'mongodb://localhost:27017/nodePortfolioApp'//url yang sambung ke database mongodb
            mongoose.connect(database, function (err, client) {
                if (err) {
                    console.log("err gila.....\n", err)
                }
                console.log("goooooooooooooooooooooooooooooooooood")
                const collection = client.db('nodePortfolioApp').collection("projects");
                collection.find({}).toArray(function (err, results) {
                    res.render('portfolio', {
                        title: "PORTFOLIO",
                        menu: navMenu,
                        projects: results,
                        url: socialMediaUrl
                    })
                })
                // })
                // client.close();
            })
        })
    // })
    return portfolioRouter;
}

module.exports = p_router;  
