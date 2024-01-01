const {User} = require("../../model/user.model")
const { httpCodes } = require("../../utils/httpStatusCode")

exports.sendDetails = async (req, res) => {
    try {
        const { userName, userEmail, userPhone, userHelp } = req.body;
        console.log(userName, userEmail, userPhone, userHelp);

        const newDetails = new User({userName, userEmail, userPhone, userHelp})

        await newDetails.save()

        return res.status(httpCodes.OK).send({continueWork: true, message: "קיבלנו את הפרטים שלך, נחזור בהקדם"});
    } catch (error) {
        console.error(error);
        return res
            .send({ continueWork: false, message: "שגיאה בשרת, נסה שנית" })
            .status(httpCodes.SERVER_ERROR);
    }
};
