const router = require("express").Router();
const { getAllProjects } = require("../../controllers/projects/projects.controller");

router.get("/get-projects", getAllProjects);

module.exports = router;