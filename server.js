const express = require("express");

const app = express();

app.use("/", (req,res) => {
    res.send("Hello, I am finally running...");
});

app.listen(4000, () => {
    console.log("server is running on port 4000!!");
});