const mongoose = require("mongoose");
const User = require("../models/User");
const Schema = mongoose.Schema;
const TaskSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    owner: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    ],
    // admins: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "User",
    //   },
    // ],
    reminder: {
      type: Object,
      default: null,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: String,
      enum: ["not started", "in progress", "completed"],
      default: "not started",
    },
    repeat: {
      type: Number,
      default: 0,
    },
    taskType: {
      type: String,
      enum: ["userOwned", "groupOwned"],
      default: "userOwned",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);



