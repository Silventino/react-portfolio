import { onRequest } from "firebase-functions/v2/https";
import { createTransport } from "nodemailer";
import { defineString } from "firebase-functions/params";

const BREVO_SMTP_KEY = defineString("BREVO_SMTP_KEY");

export const newsendmail = onRequest((request, response) => {
  const transporter = createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 465,
    secure: true,
    auth: {
      user: "silventino.dev@gmail.com",
      pass: BREVO_SMTP_KEY.value(),
    },
  });

  const mailOptions = {
    from: "Contact Form <form@silventino.dev>",
    to: "silventino.dev@gmail.com",
    subject: `Contact Form - ${request.body.subject}`,
    html: `
      <p>From: ${request.body.name} - ${request.body.email}</p>
      <p>Message: ${request.body.message}</p>
    `,
  };

  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Methods", "POST");
  response.set("Access-Control-Allow-Headers", "Content-Type");

  return transporter.sendMail(mailOptions, (erro) => {
    if (erro) {
      return response.send(erro.toString());
    }
    return response.send("OK");
  });
});
