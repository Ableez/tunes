const { format } = require("date-fns");
const Task = require("../models/Task");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const path = require("path");

// @desc Get all tasks
// @route GET /tasks
// @access Private
const getAllTasks = asyncHandler(async (req, res) => {
  const { user, username } = req.params;
  const tasks = await Task.find().lean();

  if (!tasks || tasks.length === 0) {
    return res.status(400).json({ message: "No tasks found" });
  }

  // find user's tasks
  res.json(tasks);
});

// @desc Get a user's tasks
// @route GET /tasks
// @access Private
const getUserTasks = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userTasks = await Task.findOne({ id }).lean();

  if (!userTasks || userTasks.length === 0) {
    return res.status(400).json({ message: "No user tasks found" });
  }

  // find user's userTasks
  res.json(userTasks);
});

// @desc Create new tasks
// @route POST /tasks
// @access Private
const createNewTask = asyncHandler(async (req, res) => {
  const {
    user,
    owner,
    title,
    note,
    admins,
    dueDate,
    startDate,
    participants,
    taskType,
    reminder,
    repeat,
  } = req.body;
  if (!note || !title || !user) {
    return res.status(400).json({ message: "Important fields are required" });
  }

  const newTask = {
    user: user,
    owner: owner,
    title: title,
    note: note,
    dueDate: dueDate,
    startDate: startDate,
    admins: admins,
    participants: participants,
    taskType: taskType,
    reminder: reminder,
    repeat: repeat,
  };
  const task = await Task.create(newTask);
  if (task) {
    return res.status(201).json({ message: "New task created" });
  } else {
    return res.status(400).json({ message: "Invalid task data received" });
  }
});

// @desc Add task files
// @route POST /tasks
// @access Private
const uploadTaskFiles = asyncHandler(async (req, res) => {
  const files = req.files;
  console.log(files);

  
  Object.keys(files).forEach((key) => {
    const filepath = path.join(__dirname, "tasks/files", files[key].name);
    files[key].mv(filepath, (err) => {
      if (err) return res.status(500).json({ status: "error", message: err });
    });
  });

  return res.json({
    status: "success",
    message: Object.keys(files).toString(),
    file: files
  });
});

// @desc Create new tasks
// @route POST /tasks
// @access Private
const updateTasks = asyncHandler(async (req, res) => {
  const {
    _id,
    title,
    note,
    admins,
    dueDate,
    participants,
    reminder,
    repeat,
    taskType,
  } = req.body;

  // get all changeable fields and check if any is filled

  if (
    !_id &&
    !title &&
    !note &&
    !admins &&
    !dueDate &&
    !participants &&
    !reminder &&
    !repeat &&
    !taskType
  ) {
    return res.status(304).json({ message: "Nothing changed" });
  }

  const task = await Task.findById(_id).exec();

  if (!task) {
    return res.status(400).json({ message: "Task not found" });
  }

  if (title) {
    task.title = title;
  }
  if (note) {
    task.note = note;
  }
  if (admins) {
    // first check for duplicate ids in the previous task state and remove the duplicate. or we can leave this be because we will controll adding user to this array using the frontend

    // using the spread operator stores dublicate values
    // task.admins = [...task.admins, ...admins];

    admins.forEach((admin) => {
      if (!task.admins.includes(admin)) {
        task.admins.push(admin);
      }
    });
  }
  if (dueDate) {
    task.dueDate = dueDate;
  }
  if (participants) {
    // first check for duplicate ids in the previous task state and remove the duplicate. or we can leave this be because we will controll adding user to this array using the frontend

    // using the spread operator stores dublicate values
    // task.participants = [...task.participants, ...participants];

    participants.forEach((participant) => {
      if (!task.participants.includes(participant)) {
        task.participants.push(participant);
      }
    });
  }
  if (reminder) {
    task.reminder = reminder;
  }
  if (repeat) {
    task.repeat = repeat;
  }

  const taskUpdated = await task.save();

  if (!taskUpdated) {
    return res
      .status(500)
      .json({ message: "Error! an error occured. Try again" });
  }

  const reply = `${taskUpdated.title} updated`;
  res.json(reply);
});

// @desc Delete new tasks
// @route DELETE /tasks
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
  const { taskId, userId } = req.body;

  const userObj = await User.findById(userId).exec();

  // check for task
  const task = await Task.findById(taskId).exec();
  const userIsAdmin = task.admins.map((x) => {
    return x._id === userId ? true : false;
  });

  // check if user is a participant or an admin in the group
  if (!userObj && !userIsAdmin) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // if all reqs are not met disallow delete
  if (!task) {
    return res.status(400).json({ message: "Task not found" });
  }

  const result = await task.deleteOne();

  const reply = `Note deleted`;
  res.json(reply);
});

module.exports = {
  getAllTasks,
  createNewTask,
  updateTasks,
  deleteTask,
  getUserTasks,
  uploadTaskFiles,
};
