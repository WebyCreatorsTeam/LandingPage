const router = require("express").Router();
const { getBlog, getOnePost } = require("../../controllers/blog/blog.controller");

router
    .get("/get-blog", getBlog)
    .post("/get-one-post", getOnePost)


module.exports = router;