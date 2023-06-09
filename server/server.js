require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const router = require("./routes/root");
const userRoutes = require("./routes/userRoutes");
const tasksRoutes = require("./routes/taskRoutes");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const PORT = process.env.PORT || 3500;
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", router);
app.use("/users", userRoutes);
app.use("/tasks", tasksRoutes);

console.log(process.env.NODE_ENV);

connectDB();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

router.use(express.json());

app.use(cookieParser());

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
  logEvents(`${req.url}\t${req.headers.location}`, "reqLog.log");
});

app.use(errorHandler);

// let gfs;
mongoose.connection.once("open", (response) => {
  // gfs = Grid(mongoose.connection.db, mongoose.mongo);
  // gfs.collection("uploads");
  console.log("Connected to MongoDB");
  logEvents(`success\t\ \tMongoDB connected\t${response}`, "mongoDBLog.log");
  app.listen(PORT, (e) => {
    console.log(`Server running on port ${PORT}`);
  });
});
mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoDBLog.log"
  );
});
