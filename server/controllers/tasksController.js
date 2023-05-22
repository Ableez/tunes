const { format } = require("date-fns");
const Task = require("../models/Task");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const { saveFileReference } = require("../middleware/fileSave");

// @desc Get all tasks
// @route GET /tasks
// @access Private
const getAllTasks = asyncHandler(async (req, res) => {
  const creator_id = req.query.creator_id;
  const task_id = req.query.task_id;

  if (!creator_id && !task_id) {
    return res
      .status(400)
      .json({ error: "Either creator_id or task_id must be specified" });
  }

  if (creator_id) {
    const userTasks = await Task.find({ creator_id }).lean();
    if (!userTasks || userTasks.length === 0) {
      return res.status(400).json({ message: "No tasks found" });
    }
    return res.status(200).json(userTasks);
  }

  if (task_id) {
    const getOneTask = await Task.findOne({ task_id }).lean();
    if (!getOneTask) {
      return res.status(400).json({ message: "Task does not exists" });
    }
    return res.status(200).json(getOneTask);
  }
});

// @desc Create new tasks
// @route POST /tasks
// @access Private
const createNewTask = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    creator_id,
    assignee_ids,
    files,
    due_date,
    repeat,
    custom_repeat,
    reminder,
    steps,
    notes,
    progress,
    task_list,
  } = req.body;
  if (!title && !creator_id) {
    return res.status(400).json({ message: "title is required" });
  }

  const user = await User.findById(creator_id).exec();

  if (!user) {
    return res.status(401).json({ message: "UNAUTHORIZED" });
  }

  const newTask = {
    title: title,
    description: description,
    creator_id: creator_id,
    assignee_ids: assignee_ids,
    files: files,
    due_date: due_date,
    repeat: repeat,
    custom_repeat: custom_repeat,
    reminder: reminder,
    steps: steps,
    notes: notes,
    progress: progress,
    task_list: task_list,
  };
  const task = await Task.create(newTask);

  if (task) {
    // Save task refrence to the user
    user.tasks.push(task._id);
    user.save();

    // this is when the task is created and
    if (user) {
      task.assignee_ids.push(creator_id);
      task.save();
    }

    return res.status(201).json({ message: "New task created" });
  } else {
    return res.status(400).json({ message: "Invalid task data received" });
  }
});

// @desc Add task files
// @route POST /tasks
// @access Private
// const uploadTaskFiles = asyncHandler(async (req, res) => {
//   const files = req.files;
//   console.log(files);

//   Object.keys(files).forEach((key) => {
//     const filepath = path.join(__dirname, "tasks/files", files[key].name);
//     files[key].mv(filepath, (err) => {
//       if (err) return res.status(500).json({ status: "error", message: err });
//     });
//   });

//   return res.json({
//     status: "success",
//     message: Object.keys(files).toString(),
//     file: files
//   });
// });

// @desc Create new tasks
// @route POST /tasks
// @access Private
const updateTasks = asyncHandler(async (req, res) => {
  // get all changeable fields
  const {
    _id,
    title,
    creator_id,
    assignee_ids,
    files,
    due_date,
    repeat,
    custom_repeat,
    reminder,
    steps,
    notes,
    progress,
    task_list,
  } = req.body;

  // check task _id is not passed
  if (!_id) {
    return res.status(400).json({ message: "Please provide a task id" });
  }

  // check if values are not passed for all
  if (
    !title &&
    !creator_id &&
    !assignee_ids &&
    !files &&
    !due_date &&
    !repeat &&
    !custom_repeat &&
    !reminder &&
    !steps &&
    !notes &&
    !progress &&
    !task_list
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
  if (creator_id) {
    task.creator_id = creator_id;
  }
  if (assignee_ids) {
    task.assignee_ids = assignee_ids;
  }
  if (files) {
    // saveFileReference(req, res, next())
    task.files = files;
  }
  if (reminder) {
    task.reminder = reminder;
  }
  if (repeat) {
    task.repeat = repeat;
  }
  if (due_date) {
    task.due_date = due_date;
  }
  if (custom_repeat) {
    task.custom_repeat = custom_repeat;
  }
  if (repeat) {
    task.repeat = repeat;
  }
  if (steps) {
    task.steps = steps;
  }
  if (notes) {
    task.notes = notes;
  }
  if (progress) {
    task.progress = progress;
  }
  if (task_list) {
    task.task_list = task_list;
  }

  const taskUpdated = await task.save();

  if (!taskUpdated) {
    return res
      .status(500)
      .json({ message: "Task was not saved! an error occured. Try again" });
  }

  const reply = `Task Updated`;
  res.status(201).json(reply);
});

// @desc Delete new tasks
// @route DELETE /tasks
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
  const { task_id, user_id } = req.body;

  const user = await User.findById(user_id).exec();
  const userOwnsTask = await Task.findOne({ user_id }).exec();

  // check for task
  const task = await Task.findById(task_id).exec();

  // check if user exists
  if (!user || !userOwnsTask) {
    return res.status(401).json({ message: "UNAUTHORIZED" });
  }

  // if all reqs are not met disallow delete
  if (!task) {
    return res.status(400).json({ message: "Task not found" });
  }

  const result = await task.delete();

  const reply = `Task deleted`;
  res.json({ message: reply });
});

module.exports = {
  getAllTasks,
  createNewTask,
  updateTasks,
  deleteTask,
};
