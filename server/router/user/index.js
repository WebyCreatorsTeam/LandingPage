const router = require("express").Router();
const { sendDetails } = require("../../controllers/users");

router.post("/user-send-details", sendDetails);

module.exports = router;
