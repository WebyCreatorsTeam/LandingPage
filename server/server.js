const express = require("express");
require('dotenv').config()
const { dbconnect } = require("./dbconnect");
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('../client/build'))

dbconnect()

// const whitelist = [process.env.CORS1, process.env.CORS2]
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1 || !origin) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// var corsOptions = {
//     origin: 'http://localhost:5173/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.use('/dashboard', cors(corsOptions), require("./router/dashboard/dashboard.router"))
app.use("/users", require("./router/user/user.router"));

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});
