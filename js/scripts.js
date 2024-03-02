/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit-form', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'wafulaedgar@gmail.com',
            pass: '#Spiller254.'
        }
    });

    // Send mail with defined transport object
    let info = transporter.sendMail({
        from: 'your-email@gmail.com',
        to: 'wafulaedgar48@gmail.com',
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    });

    console.log('Message sent: %s', info.messageId);

    // Optionally, send a response to the client indicating success
    res.send('Form submission successful!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
