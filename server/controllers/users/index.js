exports.sendDetails = async (req, res) => {
    try {
        const aa = req;
        console.log(aa);
        return "seccsess";
    } catch (error) {
        console.error(error);
        // return res
        //     .send({ continueWork: false, message: "Server Feiled, try again" })
        //     .status(httpCodes.SERVER_ERROR);
    }
};
