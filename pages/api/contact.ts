require('dotenv').config(); 
import type { NextApiRequest, NextApiResponse } from 'next'
import * as nodemailer from 'nodemailer';

// Nodemailer docs: // https://nodemailer.com/about/
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  // https://nodemailer.com/smtp/
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_FROM,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    tls: { rejectUnauthorized: false }
     // Default value but showing for explicitness
  });

  const { name, email, message } = req.body;

  if(!message || !name || !message) {
    return res.status(400).json({ message: 'Please fill out the necessary fields' });
  }

  // https://nodemailer.com/message/#common-fields
  const mailData = {
    from: email,
    to: process.env.GMAIL_FROM,
    subject: `Message from ${name}`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: Error | null, info: { accepted: unknown; }) => {
  
      if(err) {
        reject(err);
        return res.status(500).json({ error: err.message, emailData: false || 'Algo salió mal' });
      } else {
        resolve(info.accepted)
        res.status(200).json({message: 'Mensaje enviado!'});
      }
    })
  })

  return;
}