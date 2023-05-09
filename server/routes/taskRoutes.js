const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createNewTask,
  updateTasks,
  deleteTask,
  getUserTasks
} = require("../controllers/tasksController");

router
  .route("/")
  .get(getAllTasks)
  .post(createNewTask)
  .patch(updateTasks)
  .delete(deleteTask);

router.route("/:id").get(getUserTasks)

module.exports = router;
