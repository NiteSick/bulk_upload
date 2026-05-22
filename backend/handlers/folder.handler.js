const cloudinary = require("cloudinary").v2;
class FolderHandler {
  static async createFolder(req, res) {
    const { path } = req.query;
    try {
      const result = await cloudinary.api.create_folder(path);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getRootFolders(req, res) {
    const { limit, next_cursor } = req.query;
    try {
      const result = await cloudinary.api.root_folders({
        max_results: Number(limit) || 100,
        next_cursor: next_cursor || undefined,
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getSubFolders(req, res) {
    const { path, limit, next_cursor } = req.query;
    try {
      const result = await cloudinary.api.sub_folders(path, {
        max_results: Number(limit) || 100,
        next_cursor: next_cursor || undefined,
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteFolder(req, res) {
    const { path } = req.query;
    try {
      const result = await cloudinary.api.delete_folder(path);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = FolderHandler;
