const cloudinary = require("cloudinary").v2;
class FilesHandler {
  static async getFiles(req, res) {
    const { folderPath } = req.query;
    try {
      const result = await cloudinary.api.resources_by_asset_folder(folderPath);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteFile(req, res) {
    const { publicIds } = req.body;
    try {
      const result = await cloudinary.api.delete_resources(publicIds);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = FilesHandler;
