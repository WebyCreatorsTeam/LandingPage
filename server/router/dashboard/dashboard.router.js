const router = require("express").Router();
const { getDetails } = require("../../controllers/dashboard/dashboard.controller")

router.get("/get-all-data-users", getDetails);

module.exports = router;
