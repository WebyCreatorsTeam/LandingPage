const express = require("express");
require('dotenv').config()
const { dbconnect } = require("./dbconnect");
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8080;
// const fs = require('fs');
// const https = require('node:https')

// const cert = fs.readFileSync("./ssl/weby_team.crt")
// const ca = fs.readFileSync("./ssl/weby_team.ca-bundle")
// const key = fs.readFileSync("./ssl/secret.key")

// let options = {
//     cert: cert, // fs.readFileSync("./ssl/weby_team.crt")
//     ca: ca, // fs.readFileSync("./ssl/weby_team.ca-bundle")
//     key: key // fs.readFileSync("./ssl/secret.key")
//  };
 
 // also okay: https.createServer({cert, ca, key}, (req, res) => { ...
//  const httpsServer = https.createServer(options, (req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end("<h1>HTTPS server running</h1>");
//  });

// const cert = fs.readFileSync('./path/to/the/cert.crt');
// const ca = fs.readFileSync('./path/to/the/ca.crt');
// const key = fs.readFileSync('./path/to/the/private.key');

app.use(express.json());
app.use(express.static('../client/build'))

dbconnect()

const whitelist = [process.env.CORS1, process.env.CORS2]
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }, 
    optionsSuccessStatus: 200
}

app.use('/dashboard', cors(corsOptions), require("./router/dashboard/dashboard.router"))
app.use("/users", require("./router/user/user.router"));

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});
