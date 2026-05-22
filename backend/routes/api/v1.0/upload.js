const express = require("express");
const UploadHandler = require("../../../handlers/upload.handler");
const router = express.Router();
const { query } = require("express-validator");
const multer = require("multer");

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/",
  upload.single("file"),
  query("folderPath")
    .optional()
    .isString()
    .trim()
    .withMessage("folderPath must be a string "),
  UploadHandler.uploadFile,
);

module.exports = router;
