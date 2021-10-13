const express = require("express");
const router = express.Router();
const createfileService = require("../Services/Createfiles.service");
router.get("/", createfileService.Createnewfile)

module.exports = router;