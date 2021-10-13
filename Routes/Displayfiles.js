const express = require("express");
const router = express.Router();
const displayfileService = require("../Services/Displayfiles.service");
router.get("/", displayfileService.Displayfiles)

module.exports = router;