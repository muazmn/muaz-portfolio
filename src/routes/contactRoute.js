var express = require('express');
const http = require('url');

// creating and initializing myURL
const myURL1 = new URL('https://www.linkedin.com/in/muaz-aiman-78a2b8241/');
const myURL2 = new URL('https://www.facebook.com/muaz.aiman.792');
const myURL3 = new URL('https://github.com/muazmn/');

// getting the serialized URL
// using href
const linkedin = myURL1.href;
const facebook = myURL2.href;
const github = myURL3.href;
// const  = myURL1.href;
var socialMediaUrl = [
    {
        link: linkedin
    },
    {
        link: facebook
    },
    {
        link: github
    }
]

var contactRouter = express.Router();
var c_router = function (navMenu) {
    contactRouter.route("/")
        .get(function (req, res) {
            const message = req.flash("message")
            res.render('contact', {
                title: "Muaz Portfolio",
                menu: navMenu,
                url: socialMediaUrl,
                message
            })
            // res.send(req.flash('success'))
        })
    return contactRouter;
}
// var c_router2 = function () {
//     contactRouter.route('/')
//         .post(function (req, res) {
//             res.render('contact', {
//                 "use strict";
//                 // const nodemailer = require("nodemailer");

//                 // async..await is not allowed in global scope, must use a wrapper
//                  async function main() {
//                         // Generate test SMTP service account from ethereal.email
//                         // Only needed if you don't have a real mail account for testing
//                         let testAccount = await nodemailer.createTestAccount();

//                         // create reusable transporter object using the default SMTP transport
//                         let transporter = nodemailer.createTransport({
//                             host: "smtp.ethereal.email",
//                             port: 587,
//                             secure: false, // true for 465, false for other ports
//                             auth: {
//                                 user: testAccount.user, // generated ethereal user
//                                 pass: testAccount.pass, // generated ethereal password
//                             },
//                         });

//                         // send mail with defined transport object
//                         let info = await transporter.sendMail({
//                             from: '"Fred Foo 👻" <foo@example.com>', // sender address
//                             to: "bar@example.com, baz@example.com", // list of receivers
//                             subject: "Hello ✔", // Subject line
//                             text: "Hello world?", // plain text body
//                             html: "<b>Hello world?</b>", // html body
//                         });

//                         console.log("Message sent: %s", info.messageId);
//                         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//                         // Preview only available when sending through an Ethereal account
//                         console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//                         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//                     }
//             })
//         })
// }
let main = async function main() {
    let testAccount = await nodemailer.createTestAccount();
    const transporter = await nodemailer.createTransport({
        // service: "gmail",
        // auth: {
        //     type: 'OAuth2',
        //     user: process.env.GMAIL_USER,
        //     pass: process.env.PASSWORD,
        //     clientId: process.env.OAUTH_CLIENTID,
        //     clientSecret: process.env.OAUTH_CLIENT_SECRET,
        //     refreshToken: process.env.OAUTH_REFRESH_TOKEN
        // },
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });
    // const mailOption = {
    //     from: process.env.GMAIL_USER,
    //     to: process.env.EMAIL,
    //     subject: subject,
    //     html: `You got a message from 
    //   Email : ${email}
    //   Name: ${name}
    //   Message: ${message}`,
    // };
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    try {
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        (console.error);
    }
}
// var c_router2 = function () {
//     contactRouter.route("/")
//         .post(function (req, res) {
//             res.render('contact', console.log("djs"))
//         });
//     return contactRouter;
// }

module.exports = c_router;  
