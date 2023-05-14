const express = require("express");
const router = express.Router();
const filesPayloadExists = require("../middleware/filesPayloadExists");
const fileExtLimiter = require("../middleware/fileExtLimter");
const fileSizeLimiter = require("../middleware/fileSizeLimiter");
const fileUpload = require("express-fileupload");
const path = require("path");

const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUserTasks,
  uploadProfileImage,
} = require("../controllers/usersControllers");

router
  .route("/")
  .get(getAllUsers)
  .post(createNewUser)
  .patch(updateUser)
  .delete(deleteUser);

router
  .route("/upload")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "upload.html"));
  })
  .post(
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter([".png", ".jpg", ".jpeg"]),
    fileSizeLimiter,
    uploadProfileImage
  );

router.route("/tasks").get(getUserTasks);

module.exports = router;
