/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AppContext } from "../App";

const TaskContent = ({ className, taskTitle, completed, _id }) => {
  const { taskMenu, setTaskMenuAction } = useContext(AppContext);
  const [taskCompleted, setTaskCompleted] = useState({});

  const handleCheckboxChange = (taskId) => {
    setTaskCompleted((prevCompleted) => ({
      ...prevCompleted,
      [taskId]: !prevCompleted[taskId],
    }));
  };

  return (
    <div>
      <div className={className}>
        <div className="task dark:bg-neutral-800 peer bg-light-gray-03 transition-colors p-4 py-4 cursor-pointer hover:bg-dark-gray-05 duration-200 hover:border-dark-gray-04 border mb-2 border-neutral-800 rounded-lg flex  align-middle justify-between">
          <div className="grid grid-flow-col place-items-center gap-3">
            <input
              id={`checkbox-${_id}`}
              type="checkbox"
              value=""
              onChange={() => {
                setTaskMenuAction({ completed: !taskMenu.completed, _id: _id });
                handleCheckboxChange(_id);
              }}
              checked={completed}
              className="w-5 h-5 border text-blue-600 focus:ring-0 cursor-pointer bg-light-gray border-gray-300 rounded  dark:bg-dark-gray-04  dark:border-gray-600"
            />
            <h4 className="taskTitle ">Task title 🎉</h4>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <h4></h4>
        </div>
      </div>
    </div>
  );
};

export default TaskContent;
