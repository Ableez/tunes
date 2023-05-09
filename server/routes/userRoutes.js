const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUserTasks,
} = require("../controllers/usersControllers");

router
  .route("/")
  .get(getAllUsers)
  .post(createNewUser)
  .patch(updateUser)
  .delete(deleteUser);

router.route("/tasks").get(getUserTasks);

module.exports = router;

