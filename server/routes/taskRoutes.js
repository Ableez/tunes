const express = require("express");
const router = express.Router();

const path = require("path");
const {
  uploadSingle,
  uploadMultiple,
  handleUploadErrors,
  saveFileReference,
} = require("../middleware/fileSave");

const {
  getAllTasks,
  createNewTask,
  updateTasks,
  deleteTask,
} = require("../controllers/tasksController");

router
  .route("/")
  .get(getAllTasks)
  .post(createNewTask)
  .patch(updateTasks, handleUploadErrors, saveFileReference, (req, res) => {
    res.json({ files: req.file });
  })
  .delete(deleteTask);

router.route("/:creator_id").get(getAllTasks);
router.route("/:task_id").get(getAllTasks);
router
  .route("/:task_id")
  .patch(handleUploadErrors, saveFileReference, (req, res) => {
    res.json({ files: req.file });
  });

module.exports = router;
