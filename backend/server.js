require("dotenv").config();
const express = require("express");
const app = express();
const uploadRoutes = require("./routes/api/v1.0/upload");
const foldersRoutes = require("./routes/api/v1.0/folders");
const filesRoutes = require("./routes/api/v1.0/files");
const PORT = process.env.PORT || 3000;
const cloudinary = require("cloudinary").v2;

app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
});

app.use("/api/v1.0/upload", uploadRoutes);
app.use("/api/v1.0/folders", foldersRoutes);
app.use("/api/v1.0/files", filesRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
