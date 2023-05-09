const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const groupSchema = new mongoose.Schema({
  groupId: {
    type: String,
    default: uuidv4,
    unique: true,
    required: true,
  },
  groupName: {
    type: String,
    required: true,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Group", groupSchema);
