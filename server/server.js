const express = require("express");
require('dotenv').config()
const { dbconnect } = require("./dbconnect");
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8080;

app.use(express.json());
dbconnect()

// const whitelist = [process.env.CORS1, process.env.CORS2]
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1 || !origin) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     },
//     optionsSuccessStatus: 200
// }

app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? "https://www.weby.team" : "http://localhost:3000",
    methods: ["POST", "GET"],
}))

app.get("/", (req, res) => {
    try {
        return res.json({ ok: true })
    } catch (error) {
        console.log(error)
        return res.json({ "error": error })
    }
})

app.use("/users", require("./router/user/user.router"));
app.use('/projects', require("./router/projects/project.rout"))
app.use('/feedbacks', require("./router/feedback/feedback.router"))
app.use('/blog', require("./router/blog/blog.router"))

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});
