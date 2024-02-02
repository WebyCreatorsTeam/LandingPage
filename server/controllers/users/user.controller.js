const { User } = require("../../model/user.model");
const { transporter, mailOptions } = require("../../nodemailer/mail");
const { httpCodes } = require("../../utils/httpStatusCode");
const { userValidation } = require("../../utils/validation/user.validation");

exports.sendDetails = async (req, res) => {
    try {
        const { inputFields: { userName, userEmail, userPhone, userHelp } } = req.body;

        const { error } = userValidation.validate({ userName, userEmail, userPhone, userHelp });

        if (error) {
            console.error("user validation error of sendDetails: ", error.message);
            return (res                    // .status(httpCodes.FORBIDDEN)
                .send({ continueWork: false, message: error.message })
            );
        }

        const newDetails = new User({ userName, userEmail, userPhone, userHelp });

        await newDetails.save();

        transporter.sendMail(mailOptions(userName, userEmail, userPhone, userHelp), (error, info) => {
            if (error) {
                console.error("Error sending email: ", error);
            } else {
                console.log("Email sent: ", info.response);
            }
        });

        return res.status(httpCodes.OK).send({ continueWork: true, message: "קיבלנו את הפרטים שלך, נחזור בהקדם" });
    } catch (error) {
        console.error(error);
        return res.send({
            continueWork: false,
            message: "שגיאה בשרת, נסה שנית",
        });
        // .status(httpCodes.SERVER_ERROR);
    }
};
