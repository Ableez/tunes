/* eslint-disable react/prop-types */
import { useState } from "react";
import chevron from "../Assets/chevron-right.svg";
import "flowbite";
import TaskGroupView from "./TaskGroupView";
import { tasksData } from "../utils/tasksData";

const TaskList = () => {
  const [rotateChevron, setRotateChevron] = useState(false);
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
    <div className="taskList w-full">

      <div className="sort w-full mb-8 px-4">
        <button
          className="py-2 px-4 border border-dark-gray-03 hover:border-dark-gray-04 bg-light-gray-03 dark:bg-dark-gray-05 dark:hover:bg-dark-gray-06 duration-300  rounded-lg w-fit gap-2 grid grid-flow-col place-items-center justify-items-center"
          style={{ transition: "background 0.3s ease-in-out" }}
          onClick={() => {
            console.log("Sort Clicked");
            setRotateChevron((prev) => !prev);
          }}
        >
          <img
            className={` w-4 place transition-all duration-100 ${
              rotateChevron ? "" : "-rotate-90"
            } justify-center`}
            src={chevron}
            alt=""
          />
          <span>Earlier</span>
        </button>
      </div>
      <div className="tasks px-4 mt-2">{tasksGroup}</div>
    </div>
  );
};

export default TaskList;
