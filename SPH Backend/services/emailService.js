const nodemailer = require('nodemailer');

const email = process.env.GMAIL_ADDRESS
const appPassword = process.env.GMAIL_APP_PASSWORD
// const clientId = process.env.GMAIL_CLIENT_ID
// const clientSecret = process.env.GMAIL_CLIENT_SECRET
// const refreshToken = process.env.GMAIL_REFRESH_TOKEN

const sendEmail = async (options) => {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            type: 'login',
            user: email,
            pass: appPassword,
            // clientId: clientId,
            // clientSecret: clientSecret,
            // refreshToken: refreshToken,
        },
    });

    // Email options
    const mailOptions = {
        from: email,
        to: options.to,
        subject: options.subject,
        html: options.html,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
