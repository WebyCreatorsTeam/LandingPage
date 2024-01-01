const express = require("express");
require('dotenv').config()
const { dbconnect } = require("./dbconnect");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

dbconnect()

app.use("/users", require("./router/user/user.router"));

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});
