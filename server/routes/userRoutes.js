const express = require("express");
const router = express.Router();

const {
  getAUser,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersControllers");

router.route("/").post(createNewUser).put(updateUser).delete(deleteUser);

router.route("/:_id").patch(updateUser, (req, res) => {
  res.json({ file: req.file });
});

router.route("/:user_id").get(getAUser);

module.exports = router;
