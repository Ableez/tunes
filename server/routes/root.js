const express = require("express");
const router = express.Router();
const path = require("path");
const { logEvents } = require("../middleware/logger");
router.get("^/$|/index(.html)?", (req, res) => {
  console.log('Server request ping')
  logEvents(
    `${req.method}\t${req.url}\t${req.headers["user-agent"]}\t${req.headers["sec-ch-ua"]}`,
    "serverRequests.log"
  );
  res.sendFile(path.join(__dirname, '..', "views", "index.html"));
});

module.exports = router;
