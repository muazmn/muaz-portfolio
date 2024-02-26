const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 5000; 
const cors = require('cors');
require('dotenv').config();


app.use(cors())
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    next();
})

var myemail = process.env.EMAIL;
var mypassword = process.env.PASSWORD
export default async (req,res)=> {
    const { receipient_email, subject, message } = JSON.parse(req.body) 
           // we use transporter to send the email
            transporter = nodemailer.createTransport({
               service: "gmail",
               auth: {
                   // refer the previous video to setup these both
                   user:myemail,
                   // the password is not from our gmail, but come from the application that permit us to use gmail to send these automatic email
                   pass: mypassword
               },
           });
   
           const mail_configs = {
               from: myemail,
               to: myemail,
               subject: subject,
               text: message
           };
           await new Promise((resolve,reject) => {
               transporter.sendMail(mail_configs, function(error, info) {
                   if(error) {
                       console.log(error);
                       return reject({ message: `An error has occured`})
                   }
                   return resolve({ message: 'Email sent successfully'});
               });
           })
}

// app.get('/', (req,res) => {
//     sendEmail()
//         .then((response) => res.send(response.message))
//         .catch((error) => res.status(500).send(error.message)
//     )
// })
// module.exports = async (req, res) => {
//     await sendEmail(req.body)
//         .then((response) => {
//             res.send(response.message)
//     })
//         .catch((error) => {
//             res.status(500).send(error.message)
//             console.log('error bro')
//         });
// }

// CORS = a module that allows us to transport solid information from front-end to back-end