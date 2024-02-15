const express = require("express");
const http = require('node:http')
const https = require('node:https')
const fs = require('node:fs')
const cors = require('cors')

require('dotenv').config()
const { dbconnect } = require("./dbconnect");

const app = express();
const hostname = 'weby.team';
const httpPort = 80;
const httpsPort = 443;

dbconnect()

const cert = fs.readFileSync("./ssl/weby_team.crt")
const ca = fs.readFileSync("./ssl/weby_team.ca-bundle")
const key = fs.readFileSync("./ssl/secret.key")

const httpsOptions = {
    cert, // fs.readFileSync("./ssl/weby_team.crt")
    ca, // fs.readFileSync("./ssl/weby_team.ca-bundle")
    key // fs.readFileSync("./ssl/secret.key")
}

const httpServer = http.createServer(app)
// const httpsServer = https.createServer(httpsOptions, app)
const httpsServer = https.createServer(httpsOptions, app);

app.use((req, res, next) => {
    if(req.protocol === 'http') {
      res.redirect(301, `https://${req.headers.host}${req.url}`);
    }
    next();
 });

app.use(express.json());
app.use(express.static('../client/build'))
// const PORT = process.env.PORT || 8080;


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

httpServer.listen(httpPort, '0.0.0.0',()=>{
    console.log(`cho bla`)
})
// httpsServer.listen(httpsPort, hostname)
httpsServer.listen(httpsPort, '0.0.0.0', ()=>{
    console.log(`cho bla 2`)
});
