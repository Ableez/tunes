const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    profileImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
    },
    files: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
