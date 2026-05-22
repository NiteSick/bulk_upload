const cloudinary = require("cloudinary").v2;

class UploadHandler {
  static async uploadFile(req, res) {
    console.log("req is reaching");
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const { folderPath } = req.query;
      console.log("folderPath is reaching", folderPath);

      const streamPayload = {
        folder: folderPath || "",
        resource_type: "auto",
      };

      const streamUpload = (fileBuffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            streamPayload,
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            },
          );

          stream.end(fileBuffer);
        });
      };

      const result = await streamUpload(req.file.buffer);

      res.json({
        result,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = UploadHandler;
