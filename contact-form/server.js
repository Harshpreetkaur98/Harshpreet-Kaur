const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'harshpreet.149kaur@gmail.com',
        pass: 'mixx jjzz pznk kmox'
        
    }
});

app.post('/api/email', (req, res) => {
    const { name, email, message} = req.body;

    const mailOptions = {
        from: email,
        to: 'harshpreet.149kaur@gmail.com',
        subject: `New message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// Basic changes in the website