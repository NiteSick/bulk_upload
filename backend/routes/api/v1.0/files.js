const express = require("express");
const FilesHandler = require("../../../handlers/files.handler");
const router = express.Router();

router.get("/", FilesHandler.getFiles);

router.delete("/", FilesHandler.deleteFile);

module.exports = router;
