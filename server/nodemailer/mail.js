const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "webycreatorsteam@gmail.com",
        pass: "zjgk wcgy bxdk ngdb",
    },
});

exports.mailOptions = (userName, userEmail, userPhone, userHelp) => {
    return {
        from: "webycreatorsteam@gmail.com",
        to: "webycreatorsteam@gmail.com",
        subject: "פרטים חדשים נשלחו",
        html: `
        <div style="text-align: center;" dir="rtl">
            <h2 style="color: blue">התקבלה פניה חדשה</h2>
            <p>שם: <b>${userName}</b></p>
            <p>מספר טלפון: <b>${userPhone}</b></p>
            <p>אימייל: <b>${userEmail}</b></p>
            <p>רוצה עזרה ב: <b>${userHelp}</b></p>
        </div>
        `,
    }
}

