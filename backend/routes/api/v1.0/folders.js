const express = require("express");
const router = express.Router();
const { query } = require("express-validator");
const FolderHandler = require("../../../handlers/folder.handler");

router.get(
  "/sub-folders",
  query("path")
    .exists()
    .withMessage("path is required")
    .isString()
    .withMessage("path must be a string")
    .trim()
    .notEmpty()
    .withMessage("path must not be empty"),
  query("limit")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("limit must be an integer between 1 and 100"),
  query("next_cursor")
    .optional()
    .isString()
    .withMessage("next_cursor must be a string")
    .trim(),
  FolderHandler.getSubFolders,
);

router.get(
  "/",
  query("limit")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("limit must be an integer between 1 and 100"),
  query("next_cursor")
    .optional()
    .isString()
    .withMessage("next_cursor must be a string")
    .trim(),
  FolderHandler.getRootFolders,
);

router.post(
  "/",
  query("path")
    .exists()
    .withMessage("path is required")
    .isString()
    .withMessage("path must be a string")
    .trim()
    .notEmpty()
    .withMessage("path must not be empty"),

  FolderHandler.createFolder,
);

router.delete(
  "/",
  query("path")
    .exists()
    .withMessage("path is required")
    .isString()
    .withMessage("path must be a string")
    .trim()
    .notEmpty()
    .withMessage("path must not be empty"),
  FolderHandler.deleteFolder,
);

module.exports = router;
