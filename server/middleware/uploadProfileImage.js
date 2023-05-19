const User = require("../models/User");
const Task = require("../models/Task");
const { uploadSingle, handleUploadErrors } = require("../middleware/fileSave");
const { v4 } = require("uuid");
const asyncHandler = require("express-async-handler");
const File = require("../models/File");
const { default: mongoose } = require("mongoose");

const handleProfileImageUpload = asyncHandler(async (req, res, _id, next) => {
  const user = await User.findById(_id).exec();

  handleUploadErrors(req, res);
  uploadSingle(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ error: "Failed to upload file." });
    }

    try {
      const { originalname, mimetype, size } = req.file;
      const newFilename = `${originalname}__${v4()}`;

      const file = {
        originalname: originalname,
        filename: newFilename,
        contentType: mimetype,
        length: size,
        chunkSize: 1024 * 255,
        uploadDate: new Date(),
      };

      const createdImageId = user.profileImage;

      const imageExists = await User.findOne({ createdImageId }).exec();

      if (!imageExists) {
        const createdFile = await File.create(file);
        user.profileImage = createdFile._id;
        await user.save();
      } else {
        return res.status(409).json({ message: "File already exists" });
      }
    } catch (error) {
      console.error(error);
    }
  });
});

module.exports = handleProfileImageUpload;
