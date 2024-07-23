const router = require("express").Router();
const { getBlog, getOnePost, getPostTitle } = require("../../controllers/blog/blog.controller");

router
    .get("/get-blog", getBlog)
    .post("/get-one-post", getOnePost)
    .post("/get-post-title", getPostTitle)


module.exports = router;