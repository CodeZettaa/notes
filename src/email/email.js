import { createTransport } from "nodemailer";
import {template} from "./emailTemplate.js";
import jwt from 'jsonwebtoken';



export default async function sendOurEmail(email) {
    const transporter = createTransport({
        service:"gmail",
        auth: {
          user: "nouriti24@gmail.com",
          pass: "kilm rcic cojl vdam",
        },
      });
      
        // send mail with defined transport object
        console.log(email,"hello from email");
        let token = jwt.sign(email , "nourEmail")
        const info = await transporter.sendMail({
          from: '"Note app 👻" <nouriti24@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: template(token), // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      
}


// 1- create gmail account
// 2- turn on 2-step verfification
// 3- app password 


// error handling
