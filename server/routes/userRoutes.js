const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUserTasks,
} = require("../controllers/usersControllers");

router.route("/").get(getAllUsers).post(createNewUser).delete(deleteUser);

router.route("/:_id").patch(updateUser, (req, res) => {
  res.json({ file: req.file });
});

router.route("/tasks").get(getUserTasks);

module.exports = router;
