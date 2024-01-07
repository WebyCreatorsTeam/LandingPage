const { User } = require("../../model/user.model");
const { httpCodes } = require("../../utils/httpStatusCode");

exports.getDetails = async (req, res) => {
    try {
        const allUsers = await User.find({})
        console.log(allUsers)

        return res.status(httpCodes.OK).send(allUsers);
    } catch (error) {
        console.error(error);
        return res.send({
            continueWork: false,
            message: "שגיאה בשרת, נסה שנית",
        });
    }
};
