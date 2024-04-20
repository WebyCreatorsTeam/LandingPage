const { Projects } = require("../../model/project.model")
exports.getAllProjects = async (req, res) => {
    try {
        const allProjects = await Projects.find({ draft: false })
        const projects = allProjects.map(pro => { return { name: pro.name, description: pro.description, projectType: pro.projectType, urlImage: pro.urlImage, urlSite: pro.urlSite, _id: pro._id } })
        // console.log(allProjects)
        return res.send({ continueWork: true, projects })
    } catch (error) {
        console.error(error);
        return res.send({
            continueWork: false,
            message: "שגיאה בשרת, נסה שנית",
        });
    }
}