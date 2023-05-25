/* eslint-disable react/prop-types */
import { useState } from "react";
import "flowbite";
import TaskGroupView from "./TaskGroupView";
import { tasksData } from "../utils/tasksData";

const TaskList = () => {
  const [taskCompleted, setTaskCompleted] = useState({});

  const handleCheckboxChange = (taskId) => {
    setTaskCompleted((prevCompleted) => ({
      ...prevCompleted,
      [taskId]: !prevCompleted[taskId],
    }));
  };

  const tasksGroup = tasksData.map((task) => {
    return (
      <TaskGroupView
        key={task._id}
        taskTitle={task.title}
        _id={task._id}
        completed={taskCompleted[task._id] || false}
        handleCheckboxChange={handleCheckboxChange}
      />
    );
  });

  return (
    <div className="taskList w-full pt-2 h-full overflow-y-scroll">
      <div className="tasks px-4 mt-2">{tasksGroup}</div>
    </div>
  );
};

export default TaskList;
