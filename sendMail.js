const nodemailer = require("nodemailer");

require("dotenv").config();

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "usergoit@meta.ua",
    pass: process.env.PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);
const emailOptions = {
  from: "usergoit@meta.ua",
  to: "gapirov21@gmail.com",
  subject: "Nodemailer test",
  //   text: "Привіт. Ми тестуємо надсилання листів!",
  html: "<p>Привіт. Ми тестуємо надсилання листів у форматі HTML!</p>",
};

transporter
  .sendMail(emailOptions)
  .then((info) => console.log(info))
  .catch((err) => console.log(err));
