const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use("/users", require("./router/user"));

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});
