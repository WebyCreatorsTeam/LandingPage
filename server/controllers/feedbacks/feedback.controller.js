const { Feedback } = require("../../model/feedback.model");
const { httpCodes } = require("../../utils/httpStatusCode");

exports.showAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find({ "customerFeedback": { "$gt": 0 } })
        return res.status(httpCodes.OK).json({ continueWork: true, feedbacks })
    } catch (error) {
        console.log(`feedback cont error showAllFeedbacks`)
        console.error(error);
        return res.status(httpCodes.SERVER_ERROR).json({ continueWork: false, message: "שגיא בסרבר, נא לנסות שנית" })
    }
}