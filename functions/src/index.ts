/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import { createTransport } from "nodemailer";
import { defineString } from "firebase-functions/params";

const BREVO_SMTP_KEY = defineString("BREVO_SMTP_KEY");

export const sendMail = onRequest((request, response) => {
  let transporter = createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
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
      <p>From: ${request.body.name} <${request.body.email}></p>
      <p>Message: ${request.body.message}</p>
    `,
  };

  return transporter.sendMail(mailOptions, (erro, info) => {
    if (erro) {
      return response.send(erro.toString());
    }
    return response.send("OK");
  });
});
