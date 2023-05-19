const { GridFSBucket } = require("mongodb");
const fs = require("fs");
const mongoose = require("mongoose");
const { File } = require("buffer");

async function storeFile(filePath, fileName, contentType, metadata) {
  try {
    // Initialize the GridFS bucket
    const bucket = new GridFSBucket(mongoose.connection.db, {
      bucketName: "files",
    });

    // Open a read stream to the file
    const stream = fs.createReadStream(filePath);

    // Create a GridFS upload stream
    const uploadStream = bucket.openUploadStream(fileName, {
      metadata: metadata,
      contentType: mimeType,
    });

    // Pipe the read stream to the upload stream
    stream.pipe(uploadStream);

    // Wait for the upload to complete
    await new Promise((resolve, reject) => {
      uploadStream.on("error", reject);
      uploadStream.on("finish", resolve);
    });

    // Create a new file object in the database
    const file = new File({
      filename: fileName,
      contentType: contentType,
      metadata: metadata,
    });

    // Save the file object to the database
    await file.save();
    console.log(`File ${fileName} saved successfully`);
  } catch (error) {
    console.error(error);
  }
}

module.exports = storeFile;