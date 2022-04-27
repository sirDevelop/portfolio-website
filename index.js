const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");

require("dotenv").config();

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

app.get("/digitalart", (req, res) => {
  res.sendFile( __dirname + "/views/" + "digitalart.html" );
});

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
      res.cookie("emailSuccess", true);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.redirect("/");
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server started. Listening at port ${port}`)
);
