var express = require('express');
const bodyParser = require('body-parser')
var app = new express();
var port = process.env.PORT || 3000;
var session = require('express-session')
var flash = require('connect-flash');
app.listen(port, function (err) {
    if (typeof (err) == "undefined") {
        console.log('Your application is running on : ' + port + ' port');
    }
});
var navMenu = [
    {
        href: '/index',
        text: 'home'
    },
    {
        href: '/about',
        text: 'about'
    },
    {
        href: '/portfolio',
        text: 'portfolio'
    },
    {
        href: '/contact',
        text: 'contact'
    }
];
app.use(express.static('public')); //making public directory as static diectory  
app.set('views', './src/views');//
app.set('view engine', 'ejs')//memberitahu template enjin yg akan digunakan 


var homeRouter = require('./src/routes/homeRoute')(navMenu);
var servicesRouter = require('./src/routes/servicesRoute')(navMenu);
var aboutRouter = require('./src/routes/aboutRoute')(navMenu);
var portfolioRouter = require('./src/routes/portfolioRoute')(navMenu);
var contactRouter = require('./src/routes/contactRoute')(navMenu);

const dotenv = require("dotenv").config();
const nodemailer = require("nodemailer")
const path = require("path");
const { request } = require('http');
const { response } = require('express');


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// async function mainMail(name, email, subject, message) {
//     const transporter = await nodemail.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.GMAIL_USER,
//             pass: process.env.PASSWORD,
//         },
//     });
//     const mailOption = {
//         from: process.env.GMAIL_USER,
//         to: process.env.EMAIL,
//         subject: subject,
//         html: `You got a message from
//         Email: ${email}
//         Name: ${name}
//         Message: ${message}`,
//     }
//     try {
//         await transporter.sendMail(mailOption);
//         return Promise.resolve("Message Sent Successfully")
//     } catch (error) {
//         return Promise.reject(error)
//     }
// }

// var aboutRouter = express.Router();

// aboutRouter.route("/")
//     .get(function (req, res) {
//         res.render('about', {
//             title: "Muaz Portfolio",
//             menu: navMenu
//         })
//     })
// module.exports = aboutRouter;

app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/index', homeRouter);
app.use('/services', servicesRouter);
app.use('/portfolio', portfolioRouter);

app.get('/', function (req, res) {
    const message = req.flash("message")
    res.render('index', {
        title: 'Muaz Portfolio',
        heading1: 'WELCOME TO',
        heading2: "MY PORTFOLIO",
        myJob: "I'M WORK FROM HOME AS A FREELACER",
        menu: navMenu,
        message
    });
});
app.post('/contact', (req, res) => {
    "use strict";

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // create reusable transporter object using the default SMTP transport
        require("dotenv").config();
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "muazmn001@gmail.com", // generated ethereal user
                pass: "givrfilmihaiynzc", // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: req.body.user_mail, // sender address
            to: 'muazmn001@gmail.com', // list of receivers
            subject: "Hello ✔", // Subject line
            text: req.body.user_message, // plain text body
        });
        req.flash("message", "MESSAGE SENT SUCCESSFULLY");
        res.redirect('/contact');

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);

    // res.end(res.redirect('/contact'));
});

// app.get('/articles', function (req, res) {
//     res.render('index', {
//         title: 'Muaz Portfolio',
//         heading1: 'WELCOME TO',
//         heading2: "MY PORTFOLIO",
//         myJob: "I'M WORK FROM HOME AS A FREELACER",
//     });
// });  
