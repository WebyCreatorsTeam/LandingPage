const router = require("express").Router();
const { showAllFeedbacks } = require("../../controllers/feedbacks/feedback.controller");

router.get("/get-feedbacks", showAllFeedbacks);

module.exports = router;