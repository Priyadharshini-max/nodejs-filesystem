const express = require("express");
const app = express();

var createfileRoute = require("./Routes/Createfile");
var displayfilesRoute = require("./Routes/Displayfiles");

app.listen(3001, () => {
    console.log("Connected to server...");
})

app.use("/createfile", createfileRoute);
app.use("/displayfiles", displayfilesRoute);



