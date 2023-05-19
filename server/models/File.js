const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FileSchema = new Schema(
  {
    filename: String,
    originalname: {
      type: String,
      unique: true,
    },
    contentType: String,
    length: Number,
    chunkSize: Number,
    uploadDate: Date,
    aliases: [String],
    metadata: {
      type: Object,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", FileSchema);
