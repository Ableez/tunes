const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    creator_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    assignee_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    files: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File",
      },
    ],
    due_date: {
      type: Date,
    },
    repeat: {
      type: String,
      enum: ["daily", "weekly", "monthly", "custom"],
    },
    custom_repeat: {
      times: {
        type: Array,
      },
      interval: {
        type: String,
        enum: ["days", "weeks", "months"],
      },
    }, // 1-7 for daily, 1-31 for monthly, or a list of custom days for custom repeat
    reminder: {
      type: Date,
    },
    steps: [
      {
        type: String,
      },
    ],
    notes: {
      type: String,
    },
    progress: {
      type: String,
      enum: ["not started", "in progress", "completed"],
      default: "not started",
    },
    task_list: {
      type: String,
      enum: ["My day", "Tasks", "Important", "Planned", "Assigned to me"],
      default: "Tasks",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Task", TaskSchema);
