const express = require("express");
const router = express.Router();
const filesPayloadExists = require("../middleware/filesPayloadExists");
const fileExtLimiter = require("../middleware/fileExtLimter");
const fileSizeLimiter = require("../middleware/fileSizeLimiter");
const fileUpload = require("express-fileupload");
const path = require("path");
const {
  getAllTasks,
  createNewTask,
  updateTasks,
  deleteTask,
  getUserTasks,
  uploadTaskFiles,
} = require("../controllers/tasksController");

router
  .route("/")
  .get(getAllTasks)
  .post(createNewTask)
  .patch(updateTasks)
  .delete(deleteTask);

router
  .route("/taskfiles")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "taskfiles.html"));
  })
  .post(
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter([
      ".pptx",
      ".txt",
      ".pdf",
      ".docx",
      ".doc",
      ".xlsx",
      ".xls",
      ".pptx",
      ".ppt",
      ".jpeg",
      ".jpg",
      ".png",
      ".gif",
      ".mp3",
      ".wav",
      ".mp4",
      ".avi",
    ]),
    fileSizeLimiter,
    uploadTaskFiles
  );

router.route("/:id").get(getUserTasks);

module.exports = router;
