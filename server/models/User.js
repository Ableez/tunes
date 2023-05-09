const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

const UserSchema = new Schema(
  {
    userId: {
      type: String,
      default: uuidv4,
      unique: true,
    },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
