const { Projects } = require("../../model/project.model")
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Projects.find({ draft: false })
        return res.send({ continue: true, projects })
    } catch (error) {
        console.error(error);
        return res.send({
            continueWork: false,
            message: "שגיאה בשרת, נסה שנית",
        });
    }
}