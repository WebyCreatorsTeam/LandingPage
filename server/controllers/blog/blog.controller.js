const { Post } = require("../../model/blog.model");
const { httpCodes } = require("../../utils/httpStatusCode");

exports.getBlog = async (req, res) => {
    try {
        const blogs = await Post.find({ draft: false }).select(['-draft', '-createdAt', '-updatedAt', '-coverImg', '-tldr'])
        const blog = blogs.map(bl => ({ ...bl._doc, content: bl.content.replace(/(<([^>]+)>)/gi, "").slice(0, 80) }))
        return res.status(httpCodes.OK).json({ continueWork: true, blog })
    } catch (error) {
        console.log(`blog cont error addNewPost`)
        console.error(error);
        return res.status(httpCodes.SERVER_ERROR).json({ continueWork: false, message: "שגיא בסרבר, נא לנסות שנית" })
    }
}

exports.getOnePost = async (req, res) => {
    try {
        const { title } = req.body;
        const regex = new RegExp(title.replaceAll("-", " "), 'i')
        const post = await Post.findOne({ title: { $regex: regex } }).select(['-draft'])
        return res.status(httpCodes.OK).json({ continueWork: true, post })
    } catch (error) {
        console.log(`blog cont error addNewPost`)
        console.error(error);
        return res.status(httpCodes.SERVER_ERROR).json({ continueWork: false, message: "שגיא בסרבר, נא לנסות שנית" })
    }
};

exports.getPostTitle = async (req, res) => {
    try {
        const { id } = req.body;
        const post = await Post.findById(id)
        return res.status(httpCodes.OK).json({ continueWork: true, post })
    } catch (error) {
        // next()
        console.log(`blog cont error addNewPost`)
        console.error(error);
        return res.status(httpCodes.SERVER_ERROR).json({ continueWork: false, message: "שגיא בסרבר, נא לנסות שנית" })
    }
}