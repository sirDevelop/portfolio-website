const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");
const TelegramBot = require("node-telegram-bot-api");

require("dotenv").config();

const net = require('net')
const server = net.createServer()
let port = 9000

server.once('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    port = port + 1
    server.listen(port)
  }
})
server.once('listening', function () { server.close() })
server.listen(port)
server.once('close', function () {
  const app = express();
  app.use(cookieParser());

  // View engine setup
  app.engine(
    "handlebars",
    exphbs({
      extname: "hbs",
      defaultLayout: "",
      layoutsDir: "",
    })
  );
  app.set("view engine", "handlebars");

  //Static folder
  app.use("/public", express.static(path.join(__dirname, "public")));

  // Body Parse Middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.render("personal");
  });

  // app.get("/digitalart", (req, res) => {
  //   res.sendFile( __dirname + "/views/" + "digitalart.html" );
  // });

  // app.get('s3url', (req, res) => {

  // });

  // app.get("/generativeart", (req, res) => {
  //   res.sendFile(__dirname + "/views/" + "generativeart.html");
  // });



  app.post("/send", (req, res) => {
    try {
      const { name, subject, email, message } = req.body
      if (name && name.length && email && email.length && subject && subject.length && message && message.length) {

        // environment variables are declared on my AWS environment
        const bot = new TelegramBot(process.env.TELEGRAM_TOKEN_ID/*, { polling: true } */);// polling is for returning the errors.
        bot.sendMessage(process.env.CHAT_ID, `${name}\n${subject}\n${email}\n${message}`)
        res.cookie("messageSuccess", true)
        
        res.redirect("/");
      } else {
        return console.log(error);
      }
    
    } catch (error) {
      return console.log(error);
    }
  });
  /*
  app.post("/send", (req, res) => {
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>
          <li>Name: ${req.body.name} </li>
          <li>Subject: ${req.body.subject} </li>
          <li>Email: ${req.body.email} </li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}<p>
      `;
  
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  
  
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Node Contact Request",
      text: "Message Submitted On Personal Website",
      html: output,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      } else {
        res.cookie("messageSuccess", true);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.redirect("/");
    });
  });
  */
  port = process.env.PORT || port;
  app.listen(port, () =>
    console.log(`Server started. Listening at port ${port}`)
  );

})