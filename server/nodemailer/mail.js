const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
    },
});

exports.mailOptions = (userName, userEmail, userPhone, userHelp) => {
    return {
        from: process.env.MAIL,
        to: process.env.MAIL,
        subject: "פרטים חדשים נשלחו",
        html: `
        <div style="text-align: center;" dir="rtl">
            <h2 style="color: blue">התקבלה פניה חדשה</h2>
            <p>שם: <b>${userName}</b></p>
            <p>מספר טלפון: <a href="tel:${userPhone}"><b>${userPhone}</b></a></p>
            <p>אימייל: <b>${userEmail}</b></p>
            <p>רוצה עזרה ב: <b>${userHelp}</b></p>
        </div>
        `,
    }
}

