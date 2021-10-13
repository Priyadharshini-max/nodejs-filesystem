const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
var createfileRoute = require("./Routes/Createfile");
var displayfilesRoute = require("./Routes/Displayfiles");

var PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Connected to server...");
})

app.use(cors());
app.use("/createfile", createfileRoute);
app.use("/displayfiles", displayfilesRoute);



