exports.sendDetails = async (req, res) => {
    try {
        const { userName, userEmail, userPhone, userHelp } = req.body;
        console.log(userName, userEmail, userPhone, userHelp);
        return res.send("get it");
    } catch (error) {
        console.error(error);
        // return res
        //     .send({ continueWork: false, message: "Server Feiled, try again" })
        //     .status(httpCodes.SERVER_ERROR);
    }
};
