const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const asyncHandler = require("express-async-handler");
const { v4 } = require("uuid");
const path = require("path");
const crypto = require("crypto");
const User = require("../models/User");

// Create storage engine for Multer
const storage = new GridFsStorage({
  url: process.env.DATABASE_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

// Middleware for single file upload
const uploadSingle = upload.single("file");

// Middleware for multiple file upload
const uploadMultiple = upload.array("files", 3);

// Middleware for handling errors
const handleUploadErrors = (err, req, res) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: "Invalid file format" });
  } else if (err) {
    // return res.status(500).json({ error: "Something went wrong" });
  }
};

// Middleware for saving file reference to user model
const saveFileReference = asyncHandler(async (req, res) => {
  uploadMultiple(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ error: "Failed to upload file." });
    }

    try {
      const { originalname, mimetype, size } = req.file;
      const newFilename = `${originalname}__${v4()}`;

      const file = new File({
        originalname: originalname,
        filename: newFilename,
        contentType: mimetype,
        length: size,
        chunkSize: 1024 * 255,
        uploadDate: new Date(),
      });

      // Find the user and update the profileImage field with the new file
      const user = await User.findById(req.userId);
      if (user) {
        // Delete the old file from the "uploads" bucket
        if (user.profileImage) {
          await storage.delete(user.profileImage);
        }

        // Store the new file in the "uploads" bucket and update the profileImage field
        const fileId = await storage.save(file);
        user.profileImage = fileId;
        await user.save();
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error." });
    }
  });
});
// export all middlewares
module.exports = {
  uploadSingle,
  uploadMultiple,
  handleUploadErrors,
  saveFileReference,
};
